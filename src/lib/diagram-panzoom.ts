type PanZoomState = {
  scale: number;
  x: number;
  y: number;
};

type FocalZoomInput = PanZoomState & {
  nextScale: number;
  originX: number;
  originY: number;
  minScale?: number;
  maxScale?: number;
};

type Point = {
  x: number;
  y: number;
};

type PanZoomOptions = {
  minScale?: number;
  maxScale?: number;
  initialPadding?: number;
};

type ContentSize = {
  width: number;
  height: number;
};

type ZoomRenderer = ContentSize & {
  svg?: SVGSVGElement;
};

const cleanups = new WeakMap<HTMLElement, () => void>();

export function computeFocalZoom({
  scale,
  x,
  y,
  nextScale,
  originX,
  originY,
  minScale = 0.4,
  maxScale = 4
}: FocalZoomInput): PanZoomState {
  const clamped = Math.min(maxScale, Math.max(minScale, nextScale));
  if (clamped === scale) return { scale, x, y };
  const ratio = clamped / scale;
  return {
    scale: clamped,
    x: originX - (originX - x) * ratio,
    y: originY - (originY - y) * ratio
  };
}

export function setupDiagramPanZoom(
  dialog: HTMLDialogElement,
  surface: HTMLElement,
  options: PanZoomOptions = {}
) {
  const viewport = dialog.querySelector<HTMLElement>(".diagram-viewport");
  const zoomIn = dialog.querySelector<HTMLButtonElement>(".diagram-zoom-in");
  const zoomOut = dialog.querySelector<HTMLButtonElement>(".diagram-zoom-out");
  const reset = dialog.querySelector<HTMLButtonElement>(".diagram-zoom-reset");
  if (!viewport) return;

  cleanups.get(viewport)?.();

  const minScale = options.minScale ?? 0.25;
  const maxScale = options.maxScale ?? 5;
  const initialPadding = options.initialPadding ?? 32;
  const pointers = new Map<number, Point>();
  const removers: Array<() => void> = [];
  const renderer = createZoomRenderer(surface);

  let state: PanZoomState = getInitialState(viewport, renderer, initialPadding, minScale, maxScale);
  let lastFocus = viewportCenter(viewport);
  let dragStart: Point | null = null;
  let startPosition: Point | null = null;
  let pinchStartDistance = 0;
  let pinchStartScale = state.scale;
  let pinchStartPosition: Point | null = null;
  let pinchStartCenter: Point | null = null;

  const on = <K extends keyof HTMLElementEventMap>(
    target: HTMLElement,
    type: K,
    listener: (event: HTMLElementEventMap[K]) => void,
    opts?: AddEventListenerOptions
  ) => {
    target.addEventListener(type, listener, opts);
    removers.push(() => target.removeEventListener(type, listener, opts));
  };

  const apply = () => {
    if (renderer.svg) {
      renderer.svg.style.width = `${renderer.width * state.scale}px`;
      renderer.svg.style.height = `${renderer.height * state.scale}px`;
      surface.style.transform = `translate(${state.x}px, ${state.y}px)`;
    } else {
      surface.style.transform = `translate(${state.x}px, ${state.y}px) scale(${state.scale})`;
    }
    if (reset) reset.textContent = `${Math.round(state.scale * 100)}%`;
  };

  const zoomTo = (nextScale: number, origin = lastFocus) => {
    state = computeFocalZoom({
      ...state,
      nextScale,
      originX: origin.x,
      originY: origin.y,
      minScale,
      maxScale
    });
    apply();
  };

  const resetView = () => {
    state = getInitialState(viewport, renderer, initialPadding, minScale, maxScale);
    lastFocus = viewportCenter(viewport);
    apply();
  };

  const zoomInHandler = () => zoomTo(state.scale * 1.2);
  const zoomOutHandler = () => zoomTo(state.scale / 1.2);

  zoomIn?.addEventListener("click", zoomInHandler);
  zoomOut?.addEventListener("click", zoomOutHandler);
  reset?.addEventListener("click", resetView);
  removers.push(() => zoomIn?.removeEventListener("click", zoomInHandler));
  removers.push(() => zoomOut?.removeEventListener("click", zoomOutHandler));
  removers.push(() => reset?.removeEventListener("click", resetView));

  on(
    viewport,
    "wheel",
    (event) => {
      event.preventDefault();
      lastFocus = pointFromEvent(viewport, event);
      const factor = event.deltaY > 0 ? 1 / 1.14 : 1.14;
      zoomTo(state.scale * factor, lastFocus);
    },
    { passive: false }
  );

  on(viewport, "pointerdown", (event) => {
    event.preventDefault();
    viewport.setPointerCapture(event.pointerId);
    const point = pointFromEvent(viewport, event);
    lastFocus = point;
    pointers.set(event.pointerId, point);

    if (pointers.size === 1) {
      dragStart = point;
      startPosition = { x: state.x, y: state.y };
    } else if (pointers.size === 2) {
      const [a, b] = Array.from(pointers.values());
      pinchStartDistance = distance(a, b);
      pinchStartScale = state.scale;
      pinchStartPosition = { x: state.x, y: state.y };
      pinchStartCenter = midpoint(a, b);
      lastFocus = pinchStartCenter;
      dragStart = null;
      startPosition = null;
    }
  });

  on(viewport, "pointermove", (event) => {
    if (!pointers.has(event.pointerId)) return;
    event.preventDefault();
    const point = pointFromEvent(viewport, event);
    pointers.set(event.pointerId, point);
    lastFocus = point;

    if (pointers.size >= 2 && pinchStartDistance > 0 && pinchStartPosition && pinchStartCenter) {
      const [a, b] = Array.from(pointers.values());
      const center = midpoint(a, b);
      const nextScale = pinchStartScale * (distance(a, b) / pinchStartDistance);
      const next = computeFocalZoom({
        scale: pinchStartScale,
        x: pinchStartPosition.x,
        y: pinchStartPosition.y,
        nextScale,
        originX: pinchStartCenter.x,
        originY: pinchStartCenter.y,
        minScale,
        maxScale
      });
      state = {
        ...next,
        x: next.x + center.x - pinchStartCenter.x,
        y: next.y + center.y - pinchStartCenter.y
      };
      lastFocus = center;
      apply();
      return;
    }

    if (dragStart && startPosition) {
      state = {
        ...state,
        x: startPosition.x + point.x - dragStart.x,
        y: startPosition.y + point.y - dragStart.y
      };
      apply();
    }
  });

  const finishPointer = (event: PointerEvent) => {
    pointers.delete(event.pointerId);
    if (viewport.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }
    if (pointers.size === 1) {
      const [point] = Array.from(pointers.values());
      dragStart = point;
      startPosition = { x: state.x, y: state.y };
    } else {
      dragStart = null;
      startPosition = null;
      pinchStartDistance = 0;
      pinchStartPosition = null;
      pinchStartCenter = null;
    }
  };

  on(viewport, "pointerup", finishPointer);
  on(viewport, "pointercancel", finishPointer);
  on(viewport, "lostpointercapture", (event) => pointers.delete((event as PointerEvent).pointerId));
  on(viewport, "dragstart", (event) => event.preventDefault());

  apply();
  cleanups.set(viewport, () => {
    removers.forEach((remove) => remove());
    cleanups.delete(viewport);
  });
}

function getInitialState(
  viewport: HTMLElement,
  content: ContentSize,
  padding: number,
  minScale: number,
  maxScale: number
): PanZoomState {
  const contentWidth = Math.max(1, content.width);
  const contentHeight = Math.max(1, content.height);
  const availableWidth = Math.max(1, viewport.clientWidth - padding * 2);
  const availableHeight = Math.max(1, viewport.clientHeight - padding * 2);
  const fit = Math.min(1, availableWidth / contentWidth, availableHeight / contentHeight);
  const scale = Math.min(maxScale, Math.max(minScale, fit));
  return {
    scale,
    x: (viewport.clientWidth - contentWidth * scale) / 2,
    y: (viewport.clientHeight - contentHeight * scale) / 2
  };
}

function createZoomRenderer(surface: HTMLElement): ZoomRenderer {
  surface.style.transformOrigin = "0 0";
  const svg = surface.querySelector<SVGSVGElement>("svg");
  if (!svg) {
    const rect = surface.getBoundingClientRect();
    return { width: Math.max(1, rect.width), height: Math.max(1, rect.height) };
  }
  const rect = svg.getBoundingClientRect();
  const width = Math.max(1, rect.width);
  const height = Math.max(1, rect.height);
  svg.style.minWidth = "0";
  svg.style.maxWidth = "none";
  svg.style.width = `${width}px`;
  svg.style.height = `${height}px`;
  return { svg, width, height };
}

function pointFromEvent(viewport: HTMLElement, event: MouseEvent | PointerEvent | WheelEvent): Point {
  const rect = viewport.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

function viewportCenter(viewport: HTMLElement): Point {
  return {
    x: viewport.clientWidth / 2,
    y: viewport.clientHeight / 2
  };
}

function distance(a: Point, b: Point) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function midpoint(a: Point, b: Point): Point {
  return {
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2
  };
}
