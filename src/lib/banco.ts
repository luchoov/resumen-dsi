// Banco de preguntas y respuestas de teoría y práctica.
// Cada pregunta lleva:
//   c → categoría temática (alimenta los chips de filtro del banco)
//   s → slug de la sección de la que se desprende (alimenta el banco específico por sección)
// Las respuestas (a) admiten <strong>, <em> y <code>.

export type QA = { c: string; s: string; q: string; a: string };

export const preguntas: QA[] = [
  // ── PUD · sección 01-pud ───────────────────────────────────────────────
  {
    c: "PUD",
    s: "01-pud",
    q: "¿Qué diferencia hay entre UML y el Proceso Unificado (PUD)?",
    a: "<strong>UML</strong> es un lenguaje: aporta la notación y la semántica para dibujar modelos, pero no dice qué modelos crear ni cuándo. El <strong>PUD</strong> es la metodología: indica los trabajadores, las actividades y los artefactos para desarrollar el sistema. El PUD usa UML como su sintaxis visual."
  },
  {
    c: "PUD",
    s: "01-pud",
    q: "¿Cuáles son los tres aspectos característicos del Proceso Unificado?",
    a: "Es <strong>iterativo e incremental</strong> (se avanza en ciclos cortos, cada uno agrega funcionalidad), <strong>conducido por casos de uso</strong> (los CU son el hilo que guía análisis, diseño, implementación y prueba) y <strong>centrado en la arquitectura</strong> (las decisiones arquitectónicas se estabilizan temprano)."
  },
  {
    c: "PUD",
    s: "01-pud",
    q: "¿Qué diferencia hay entre un workflow y una fase del PUD?",
    a: "Un <strong>workflow</strong> (o disciplina) dice <em>qué tipo</em> de trabajo se hace: requerimientos, análisis, diseño, implementación, prueba. Una <strong>fase</strong> dice <em>en qué momento</em> del proyecto se está: inicio, elaboración, construcción, transición. En cada fase se hace algo de cada workflow, pero cambia el énfasis."
  },
  {
    c: "PUD",
    s: "01-pud",
    q: "¿Cuáles son las cuatro fases del PUD y qué objetivo tiene cada una?",
    a: "<strong>Inicio</strong>: define el alcance y el caso de negocio, identifica la mayoría de los CU. <strong>Elaboración</strong>: planifica, especifica lo crítico y delinea la arquitectura. <strong>Construcción</strong>: construye el producto hasta dejarlo disponible. <strong>Transición</strong>: transfiere el producto a los usuarios."
  },
  {
    c: "PUD",
    s: "01-pud",
    q: "¿Qué es una iteración en el PUD?",
    a: "Una secuencia de actividades con un plan establecido y un criterio de evaluación, que produce un <strong>release ejecutable</strong> (un incremento). Cada iteración recorre los workflows sobre un conjunto de casos de uso."
  },

  // ── UML · sección 02-uml ───────────────────────────────────────────────
  {
    c: "UML",
    s: "02-uml",
    q: "¿Qué es UML y para qué se usa?",
    a: "UML (Unified Modeling Language) es un <strong>lenguaje de modelado</strong> estándar para especificar, visualizar y documentar sistemas de software. No es una metodología: es una notación que distintos procesos de desarrollo pueden usar."
  },
  {
    c: "UML",
    s: "02-uml",
    q: "¿Cómo se clasifican los diagramas UML?",
    a: "En <strong>estructurales</strong> (clases, objetos, paquetes, componentes, despliegue) que muestran la estructura estática, y de <strong>comportamiento</strong> (casos de uso, secuencia, comunicación, máquina de estados, actividad) que muestran la dinámica del sistema."
  },
  {
    c: "UML",
    s: "02-uml",
    q: "¿Qué es un estereotipo en UML?",
    a: "Es un mecanismo de extensión que clasifica un elemento con una semántica específica, escrito entre guillemets: <code>«boundary»</code>, <code>«control»</code>, <code>«entity»</code>, <code>«actor»</code>. Permite adaptar UML a un dominio sin cambiar el metamodelo."
  },
  {
    c: "UML",
    s: "02-uml",
    q: "¿Qué mecanismos de extensibilidad ofrece UML?",
    a: "Tres: el <strong>estereotipo</strong> (extiende el vocabulario con una semántica nueva, p. ej. <code>«boundary»</code>), el <strong>valor etiquetado</strong> (agrega metadatos al elemento, p. ej. <code>{persistente=true}</code>) y la <strong>restricción</strong> (expresa una condición que debe cumplirse, p. ej. <code>{stock &gt;= cantidad}</code>). Permiten adaptar UML a un dominio sin tocar el metamodelo."
  },

  // ── Orientación a objetos · sección 03 ─────────────────────────────────
  {
    c: "Orientación a objetos",
    s: "03-orientacion-objetos",
    q: "¿Qué diferencia hay entre clase y objeto?",
    a: "Una <strong>clase</strong> describe un conjunto de objetos que comparten estructura, comportamiento, relaciones y semántica. Un <strong>objeto</strong> es una instancia concreta de una clase. Crear un objeto a partir de una clase se llama <strong>instanciación</strong>."
  },
  {
    c: "Orientación a objetos",
    s: "03-orientacion-objetos",
    q: "¿Qué es el estado de un objeto?",
    a: "Es el conjunto de valores de sus atributos en un momento determinado: <code>Estado = atributo + valor en un momento dado</code>. Si una <code>Solicitud</code> pasa de 'Pendiente' a 'Aprobada', sigue siendo el mismo objeto pero su estado interno cambió."
  },
  {
    c: "Orientación a objetos",
    s: "03-orientacion-objetos",
    q: "¿Qué es una responsabilidad y cómo se relaciona con el comportamiento?",
    a: "El comportamiento es qué puede hacer un objeto. En análisis se expresa como <strong>responsabilidades</strong> de alto nivel (qué debe conocer y qué debe hacer), no como métodos con signatura completa. Asignar bien las responsabilidades es el objetivo de los patrones GRASP."
  },
  {
    c: "Orientación a objetos",
    s: "03-orientacion-objetos",
    q: "¿Qué es encapsulamiento y por qué importa en análisis?",
    a: "Es ocultar los datos internos de un objeto y exponer solo su comportamiento. En análisis se traduce en que una entidad experta responde por su propia información en lugar de que el gestor manipule sus datos directamente."
  },

  // ── Análisis · workflow (sección 04) y modelo (sección 05) ─────────────
  {
    c: "Análisis",
    s: "05-modelo-analisis",
    q: "¿Qué es el modelo de análisis y qué artefactos produce?",
    a: "Es un modelo conceptual que refina los requisitos en términos de objetos, sin comprometerse con tecnología. Produce <strong>clases de análisis</strong> (boundary, control, entity), <strong>realizaciones de casos de uso</strong> (vista dinámica y de clases) y <strong>paquetes de análisis</strong>."
  },
  {
    c: "Análisis",
    s: "04-workflow-analisis",
    q: "¿En qué se diferencia el análisis del diseño?",
    a: "El análisis se enfoca en <strong>qué</strong> hace el sistema en términos del dominio, ignorando detalles técnicos. El diseño decide <strong>cómo</strong> se implementa: persistencia, frameworks, concurrencia, distribución, patrones de diseño. En análisis no se modela base de datos ni controladores técnicos."
  },
  {
    c: "Análisis",
    s: "05-modelo-analisis",
    q: "¿Qué son los requisitos especiales?",
    a: "Son requisitos no funcionales o restricciones que aparecen durante el análisis y se conservan para diseño: persistencia, concurrencia, seguridad, distribución, tolerancia a fallos, tiempos de respuesta o transacciones."
  },
  {
    c: "Análisis",
    s: "04-workflow-analisis",
    q: "¿Qué hace el workflow de análisis y qué problema resuelve?",
    a: "Toma el modelo de requerimientos (vista externa, lenguaje del cliente) y lo <strong>refina en una solución lógica conceptual</strong> (vista interna, lenguaje del desarrollador). Resuelve el problema de pasar de 'qué quiere el usuario' a 'cómo se organiza internamente el sistema' sin todavía comprometerse con tecnología."
  },
  {
    c: "Análisis",
    s: "04-workflow-analisis",
    q: "¿Por qué se dice que el análisis “abre la caja negra” del sistema?",
    a: "Porque los requerimientos describen el sistema desde afuera (qué hace, visto por el actor). El análisis mira <strong>adentro</strong>: aparecen las clases, los objetos y las colaboraciones que explican cómo se cumple cada caso de uso. Pasa de la vista externa a la vista interna conceptual."
  },
  {
    c: "Análisis",
    s: "04-workflow-analisis",
    q: "¿El modelo de análisis reemplaza al modelo de requerimientos?",
    a: "No: lo <strong>refina y complementa</strong>. El de requerimientos es un contrato de qué hace el sistema en lenguaje del cliente (puede tener redundancias). El de análisis es una vista interna en lenguaje del desarrollador, sin inconsistencias, que organiza cómo se logra. Conviven y deben ser trazables entre sí."
  },
  {
    c: "Análisis",
    s: "05-modelo-analisis",
    q: "¿Qué es la arquitectura lógica dentro del modelo de análisis?",
    a: "Es la organización del modelo en <strong>paquetes de análisis</strong> con alta cohesión y bajo acoplamiento, junto con las clases y realizaciones significativas. Es una primera aproximación conceptual a la estructura del sistema, todavía sin decisiones tecnológicas."
  },
  {
    c: "Análisis",
    s: "05-modelo-analisis",
    q: "¿Cómo se relacionan clases de análisis, realizaciones y paquetes?",
    a: "Las <strong>clases de análisis</strong> (BCE) son las piezas; las <strong>realizaciones de casos de uso</strong> muestran cómo esas clases colaboran para cumplir un CU (vista estática + dinámica); los <strong>paquetes</strong> agrupan clases relacionadas para organizar el modelo. Los tres juntos forman el modelo de análisis."
  },

  // ── Clases BCE · sección 06 ────────────────────────────────────────────
  {
    c: "Clases BCE",
    s: "06-clases-analisis",
    q: "¿Qué representan las clases boundary, control y entity?",
    a: "<strong>Boundary</strong> (frontera): comunica el sistema con actores e interfaces externas. <strong>Control</strong>: coordina el caso de uso, valida y delega. <strong>Entity</strong>: representa información del dominio con datos y comportamiento que persiste más allá de un caso de uso."
  },
  {
    c: "Clases BCE",
    s: "06-clases-analisis",
    q: "¿Qué responsabilidades NO debe tener una boundary?",
    a: "No debe contener lógica de negocio ni hablar directamente con todas las entidades. Su rol es recibir eventos, mostrar/listar datos, solicitar y tomar selecciones y confirmaciones. La coordinación corresponde al control."
  },
  {
    c: "Clases BCE",
    s: "06-clases-analisis",
    q: "¿Cuándo conviene tener más de una clase control?",
    a: "Suele haber un control por caso de uso o por responsabilidad principal (por ejemplo <code>GestorCancelacionVuelo</code>, <code>GestorRegistrarOrdenTraslado</code>). Si un control acumula responsabilidades de varias entidades, conviene revisar el reparto (Alta Cohesión / Experto)."
  },
  {
    c: "Clases BCE",
    s: "06-clases-analisis",
    q: "¿Una entity es solo una tabla de datos?",
    a: "No. Además de conocer datos persistentes puede tener comportamiento experto: una <code>Vuelo</code> puede <code>calcularDisponibilidad()</code> o <code>esFactibleCancelar()</code>, y un <code>Estado</code> puede <code>permiteCancelacion()</code>. La entidad responde por su propia información y reglas."
  },

  // ── Casos de uso · sección 07 ──────────────────────────────────────────
  {
    c: "Casos de uso",
    s: "07-realizaciones-casos-uso",
    q: "¿Qué es la realización de un caso de uso de análisis?",
    a: "Es la explicación de cómo colaboran las clases de análisis para ejecutar un caso de uso. Tiene una <strong>vista dinámica</strong> (secuencia o comunicación) y una <strong>vista de clases</strong> (estructura que soporta esa colaboración)."
  },
  {
    c: "Casos de uso",
    s: "07-realizaciones-casos-uso",
    q: "¿Qué es el flujo de sucesos de análisis?",
    a: "Es la narración del escenario en lenguaje de objetos: la frontera recibe el evento, el control coordina, y las entidades aportan información, comportamiento y cambios de estado. Es el puente entre el texto del caso de uso y los diagramas."
  },
  {
    c: "Casos de uso",
    s: "07-realizaciones-casos-uso",
    q: "¿Qué dos vistas componen una realización de caso de uso?",
    a: "La <strong>vista estática</strong> (un diagrama de clases acotado al CU: las clases que participan y sus relaciones) y la <strong>vista dinámica</strong> (un diagrama de secuencia o de comunicación que muestra los mensajes en el escenario). Ambas describen el mismo CU desde dos ángulos y deben ser consistentes entre sí."
  },

  // ── Arquitectura · sección 08 ──────────────────────────────────────────
  {
    c: "Arquitectura",
    s: "08-paquetes-arquitectura",
    q: "¿Para qué sirven los paquetes de análisis?",
    a: "Agrupan clases relacionadas para organizar el modelo, reducir el acoplamiento entre grupos y permitir trabajar por partes. Reflejan una primera aproximación a la arquitectura lógica del sistema."
  },
  {
    c: "Arquitectura",
    s: "08-paquetes-arquitectura",
    q: "¿Qué criterios se usan para agrupar clases en paquetes?",
    a: "Cohesión funcional (clases que colaboran para un mismo fin), estabilidad y minimización de dependencias entre paquetes. Se busca alta cohesión dentro del paquete y bajo acoplamiento entre paquetes."
  },
  {
    c: "Arquitectura",
    s: "08-paquetes-arquitectura",
    q: "¿Qué es una dependencia entre paquetes y por qué conviene minimizarla?",
    a: "Es que un paquete necesita a otro (sus clases usan clases del otro). Conviene <strong>minimizarlas</strong> porque cada dependencia propaga cambios: si el paquete proveedor cambia, los que dependen de él pueden romperse. Menos dependencias = menor acoplamiento y cambios más localizados."
  },
  {
    c: "Arquitectura",
    s: "08-paquetes-arquitectura",
    q: "¿Cómo se relaciona un paquete de análisis con la arquitectura lógica?",
    a: "Cada paquete es una pieza de la <strong>arquitectura lógica</strong>: el primer corte del sistema en partes manejables. El arquitecto identifica los paquetes principales y sus dependencias, y eso define la vista arquitectónica que guía el resto del análisis y el diseño."
  },

  // ── Roles y actividades · sección 09 ───────────────────────────────────
  {
    c: "Roles y actividades",
    s: "09-actividades-roles",
    q: "¿Cuáles son los tres roles del workflow de análisis y de qué se ocupa cada uno?",
    a: "<strong>Arquitecto</strong>: estructura global, paquetes principales, clases de entidad evidentes y requisitos especiales comunes. <strong>Ingeniero de casos de uso</strong>: realiza cada CU en términos de las clases que colaboran (secuencias y flujos). <strong>Ingeniero de componentes</strong>: define responsabilidades, atributos, relaciones y requisitos especiales de clases y paquetes. Son sombreros de trabajo, no necesariamente tres personas."
  },
  {
    c: "Roles y actividades",
    s: "09-actividades-roles",
    q: "¿De qué se ocupa el arquitecto al iniciar el modelo de análisis?",
    a: "Inicia el modelo y traza el mapa grande: identifica los <strong>paquetes de análisis</strong> principales, las <strong>clases de entidad obvias</strong> y los <strong>requisitos especiales comunes</strong> que cruzan varias partes del sistema. Vela por la integridad del modelo y la vista arquitectónica."
  },
  {
    c: "Roles y actividades",
    s: "09-actividades-roles",
    q: "¿Cuáles son las actividades del workflow de análisis?",
    a: "Analizar la <strong>arquitectura</strong> (paquetes, entidades obvias, requisitos especiales), analizar cada <strong>caso de uso</strong> (su realización), analizar cada <strong>clase</strong> (responsabilidades, atributos, relaciones) y analizar cada <strong>paquete</strong> (cohesión y dependencias), con revisiones iterativas del modelo."
  },
  {
    c: "Roles y actividades",
    s: "09-actividades-roles",
    q: "¿Qué se verifica al analizar un paquete?",
    a: "Que sus clases estén realmente relacionadas (cumple un objetivo reconocible), que sus dependencias externas sean mínimas (menor acoplamiento) y que esas dependencias estén descriptas para poder estimar el impacto de cambios."
  },

  // ── Máquina de estados · sección 10 ────────────────────────────────────
  {
    c: "Máquina de estados",
    s: "10-maquina-estados",
    q: "¿Cuándo corresponde hacer una máquina de estados?",
    a: "Cuando una clase tiene comportamiento <strong>dependiente de su situación actual</strong>: el estado modifica qué eventos son válidos, qué reglas aplican o qué caminos quedan prohibidos. No alcanza con tener un atributo <code>estado</code>."
  },
  {
    c: "Máquina de estados",
    s: "10-maquina-estados",
    q: "¿Cuál es la sintaxis de una transición?",
    a: "<code>estado origen — evento [condición] / efecto → estado destino</code>. La cátedra suele pedir que la transición indique el <strong>caso de uso</strong> (evento), el <strong>método</strong> de la clase que cambia y, cuando aplica, la <strong>guarda</strong>."
  },
  {
    c: "Máquina de estados",
    s: "10-maquina-estados",
    q: "¿Cómo distingo un estado de un evento o un método?",
    a: "El estado es una situación estable (sustantivo/adjetivo): <code>Cancelado</code>, <code>Aprobada</code>. El evento o caso de uso dispara la transición: 'Cancelar Vuelo'. El método es la responsabilidad de la entidad para cambiar: <code>cancelar()</code>. La postcondición ('vuelo cancelado') describe el resultado."
  },
  {
    c: "Máquina de estados",
    s: "10-maquina-estados",
    q: "¿Cuándo uso una condición de guarda?",
    a: "Cuando una transición depende de una regla del enunciado, o cuando un mismo caso de uso puede llevar a más de un estado. Si la transición es directa y la regla no se bifurca, la guarda puede omitirse."
  },
  {
    c: "Máquina de estados",
    s: "10-maquina-estados",
    q: "¿Para qué sirve un estado compuesto?",
    a: "Para encapsular subetapas internas de una fase. Por ejemplo, <code>EnEjecucion</code> de un vuelo agrupa despegue, vuelo en aire, zona y aterrizaje; o <code>EnUso</code> de una cuenta agrupa su operación interna."
  },
  {
    c: "Máquina de estados",
    s: "10-maquina-estados",
    q: "¿Qué es el pseudoestado de historia [H]?",
    a: "Sirve cuando 'reanudar' debe volver al <strong>subestado anterior</strong> y no a un inicio fijo. Si una clase se suspende estando en cierto subestado, al reanudar la historia la devuelve exactamente a ese subestado."
  },
  {
    c: "Máquina de estados",
    s: "10-maquina-estados",
    q: "¿Es lo mismo un estado final de negocio que el estado final UML?",
    a: "No. <code>Cancelada</code>, <code>Rechazada</code> o <code>Finalizado</code> son estados del negocio. El pseudoelemento final UML (<code>[*]</code>) solo indica que termina el ciclo de vida modelado. Un estado de negocio puede luego ir al final UML."
  },
  {
    c: "Máquina de estados",
    s: "10-maquina-estados",
    q: "¿Cómo se rotula una transición en el estilo de la cátedra?",
    a: "<code>Nº NombreCU [guarda] /metodo()</code>: el número y nombre del caso de uso que la dispara, una <strong>guarda</strong> entre corchetes cuando el mismo evento puede llevar a estados distintos, y el <strong>método</strong> que se ejecuta. Sin punto tras el número (ej. <code>10 Registrar Pedido /new()</code>)."
  },
  {
    c: "Máquina de estados",
    s: "10-maquina-estados",
    q: "¿Puede un mismo evento llevar a estados distintos?",
    a: "Sí: es el patrón <strong>mismo evento, distinta guarda, distinto destino</strong>. Ej.: <code>Registrar Pago de Cuota</code> deja el préstamo <em>En Mora</em> <code>[quedan vencidas]</code>, lo pasa a <em>Vigente</em> <code>[no quedan]</code> o a <em>Finalizado</em> <code>[última cuota]</code>."
  },
  {
    c: "Máquina de estados",
    s: "10-maquina-estados",
    q: "¿Cómo se conserva el historial de estados de un objeto?",
    a: "Con una clase <code>Estado</code> (catálogo) y una clase <code>CambioEstadoX</code> (registro con <code>fechaHoraInicio/Fin</code> y <code>esEstadoActual()</code>). El objeto tiene <code>1..*</code> <code>CambioEstadoX</code>; el actual es el único <strong>sin fechaHoraFin</strong>. Para cambiar de estado: <code>buscarEstadoActual()</code> (self), <code>setFechaHoraFin()</code> al cambio actual y <strong>crear</strong> un <code>CambioEstadoX</code> nuevo apuntando al <code>Estado</code> destino, sin pisar el anterior."
  },

  // ── Interacción · sección 11 ───────────────────────────────────────────
  {
    c: "Interacción",
    s: "11-secuencia-comunicacion",
    q: "¿Qué diferencia hay entre diagrama de secuencia y de comunicación?",
    a: "Ambos muestran cómo colaboran objetos en un escenario. El de <strong>secuencia</strong> enfatiza el orden temporal de los mensajes (líneas de vida); el de <strong>comunicación</strong> enfatiza los enlaces estructurales con mensajes numerados. El contenido es equivalente."
  },
  {
    c: "Interacción",
    s: "11-secuencia-comunicacion",
    q: "¿Cuál es la estructura canónica de una realización de análisis?",
    a: "<code>Actor → Boundary (Pantalla…) → Control (Gestor…) → Entidades</code>. El actor inicia, la pantalla recibe/muestra, el gestor coordina y valida, y las entidades responden por su información o comportamiento."
  },
  {
    c: "Interacción",
    s: "11-secuencia-comunicacion",
    q: "¿Qué diferencia hay entre máquina de estados y diagramas de interacción?",
    a: "La máquina de estados se concentra en el <strong>ciclo de vida de un solo objeto</strong>. Secuencia y comunicación muestran la <strong>colaboración entre varios objetos</strong> durante un escenario concreto."
  },
  {
    c: "Interacción",
    s: "11-secuencia-comunicacion",
    q: "¿Cómo se representa la repetición sobre una colección?",
    a: "Con un fragmento <code>loop</code> (en las soluciones de cátedra aparece como un <code>*</code> en el mensaje). Se usa al recorrer listas de países, contenedores, elementos, etc., para obtener o validar cada ítem."
  },
  {
    c: "Interacción",
    s: "11-secuencia-comunicacion",
    q: "¿La cátedra modela mensajes de retorno en el diagrama de secuencia?",
    a: "<strong>No.</strong> En las realizaciones de análisis no se dibujan flechas de retorno (líneas punteadas) ni mensajes cuyo nombre sea un valor devuelto (<em>ok, datos, resultado</em>). El resultado de una consulta queda <strong>implícito</strong>: solo se dibujan mensajes hacia adelante y <em>self-calls</em>."
  },
  {
    c: "Interacción",
    s: "11-secuencia-comunicacion",
    q: "¿Qué es un self-call y cuándo es válido?",
    a: "Es un mensaje que un objeto se envía a sí mismo. Es válido cuando, tras recibir un mensaje, resuelve algo con <strong>su propia información o responsabilidad</strong>: la pantalla con <code>habilitarVentana()</code>, el gestor con <code>validarHorarioHabil()</code> u <code>obtenerMediosDePago()</code> (catálogo sin dueño), o una entidad con <code>obtenerCuotasVencidas()</code> / <code>buscarEstadoActual()</code>. Si la información vive en otro objeto, el mensaje va hacia ese objeto (Experto), no como self."
  },
  {
    c: "Interacción",
    s: "11-secuencia-comunicacion",
    q: "¿Cómo se representa la iteración sobre una colección?",
    a: "Con un <strong>asterisco</strong> delante del mensaje (<code>*getNombre()</code>) enviado desde el que itera (el gestor) <strong>hacia</strong> la entidad, o con un fragmento <code>loop</code> con guarda <code>[mientras haya X]</code>. Nunca como un self suelto en la entidad sin nadie que lo dispare."
  },
  {
    c: "Interacción",
    s: "11-secuencia-comunicacion",
    q: "¿Cómo se modela que el usuario elige un elemento de una lista?",
    a: "Con el par <code>pedirSelecciónX()</code> (del gestor a la pantalla) y <code>tomarSelecciónX()</code> (del actor a la pantalla y de la pantalla al gestor). Primero el sistema ofrece, después el usuario responde."
  },
  {
    c: "Interacción",
    s: "11-secuencia-comunicacion",
    q: "Si necesito una colección filtrada, ¿expando el filtro en la secuencia?",
    a: "No: se <strong>confía en el Experto</strong>. El mensaje <code>obtenerCuotasImpagas()</code> al objeto dueño ya devuelve la colección filtrada; no se dibujan los <code>estaPagada()</code> internos. Recién después se itera (<code>*mostrarDatos()</code>) para mostrarla."
  },
  {
    c: "Interacción",
    s: "11-secuencia-comunicacion",
    q: "Para asociar un objeto B dentro de A (asociación A → B), ¿a quién va el mensaje?",
    a: "Al <strong>receptor que guarda la referencia</strong>, o sea a <code>A</code>; el objeto <code>B</code> viaja como <strong>parámetro</strong> (en el <code>new(...)</code> o en un <code>setB(b)</code>). Nunca al revés, porque con navegabilidad <code>A → B</code> el objeto <code>B</code> no conoce a <code>A</code>."
  },

  // ── GRASP · sección 12 ─────────────────────────────────────────────────
  {
    c: "GRASP",
    s: "12-grasp",
    q: "¿Qué es GRASP?",
    a: "Son patrones generales para asignar responsabilidades a objetos. En esta unidad se usan los <strong>cinco</strong>: <strong>Experto en Información</strong>, <strong>Creador</strong>, <strong>Controlador</strong>, <strong>Bajo Acoplamiento</strong> y <strong>Alta Cohesión</strong>."
  },
  {
    c: "GRASP",
    s: "12-grasp",
    q: "¿Qué dice el patrón Experto en Información?",
    a: "Asigna una responsabilidad a la clase que tiene la <strong>información necesaria</strong> para cumplirla. Si la <code>Vuelo</code> conoce sus reservas y capacidad, es ella quien debe <code>calcularDisponibilidad()</code>."
  },
  {
    c: "GRASP",
    s: "12-grasp",
    q: "¿Qué dice el patrón Creador?",
    a: "Una clase B debería crear instancias de A si B las contiene/agrega, las registra, las usa estrechamente o tiene los datos de inicialización. Por eso una <code>OrdenTraslado</code> crea sus <code>DetalleOT</code>."
  },
  {
    c: "GRASP",
    s: "12-grasp",
    q: "¿Qué dice el patrón Controlador?",
    a: "Asigna la responsabilidad de coordinar un caso de uso a una clase control (un gestor) que no es ni la interfaz ni una entidad de dominio. Evita que la pantalla maneje la lógica del flujo."
  },
  {
    c: "GRASP",
    s: "12-grasp",
    q: "¿Qué buscan Bajo Acoplamiento y Alta Cohesión?",
    a: "<strong>Bajo Acoplamiento</strong>: minimizar las dependencias entre clases para que un cambio no se propague. <strong>Alta Cohesión</strong>: que cada clase tenga responsabilidades enfocadas y relacionadas. Suelen ir juntos y se evalúan al repartir responsabilidades."
  },
  {
    c: "GRASP",
    s: "12-grasp",
    q: "¿Por qué un cálculo recorre varias clases en cadena (delegación)?",
    a: "Por <strong>Experto + Bajo Acoplamiento</strong>: cada objeto solo conoce a su vecino asociado, así que delega el cálculo al siguiente hasta llegar al verdadero Experto. Y por <strong>Polimorfismo</strong>: si el Experto es una clase abstracta con subtipos, cada subtipo calcula distinto sin que los de arriba se enteren (p. ej. <code>DefinicionMora</code> → <code>MoraPorcentual</code>/<code>MoraFija</code>)."
  },
  {
    c: "GRASP",
    s: "12-grasp",
    q: "¿Quién crea un objeto según el patrón Creador?",
    a: "La clase que lo <strong>contiene, agrega, registra</strong> o tiene sus datos de inicialización. Ejemplos: el <code>Préstamo</code> crea sus <code>Cuota</code>; la <code>Cuota</code> crea su <code>Recargo</code>; el <code>PlanDePago</code> crea sus <code>DetallePlanPago</code>."
  },
  {
    c: "GRASP",
    s: "12-grasp",
    q: "¿Diferencia entre Bajo Acoplamiento y Alta Cohesión?",
    a: "<strong>Bajo Acoplamiento</strong>: minimizar las dependencias entre clases (que cada una conozca lo mínimo). <strong>Alta Cohesión</strong>: que cada clase tenga responsabilidades enfocadas y relacionadas entre sí. Son fuerzas complementarias al asignar responsabilidades."
  },
  {
    c: "GRASP",
    s: "12-grasp",
    q: "Dado un diagrama, ¿cómo identifico qué patrones GRASP se aplican?",
    a: "Mirar los <strong>mensajes</strong> y sus receptores: <code>Pantalla -> Gestor</code> suele evidenciar <strong>Controlador</strong>; <code>Gestor -> Entidad : calcular/validar</code> evidencia <strong>Experto</strong> si la entidad conoce los datos; <code>Todo -> Parte : &lt;&lt;create&gt;&gt;</code> evidencia <strong>Creador</strong>; delegar en entidades en vez de pedir getters favorece <strong>Bajo Acoplamiento</strong>; y que cada clase haga tareas propias evidencia <strong>Alta Cohesión</strong>."
  },
  {
    c: "GRASP",
    s: "12-grasp",
    q: "Dado un diagrama, ¿cómo identifico qué patrones GRASP NO se aplican y cómo corregirlos?",
    a: "Si la pantalla habla con varias entidades, falta <strong>Controlador</strong>: introducir un gestor. Si el gestor pide muchos getters y calcula con datos ajenos, faltan <strong>Experto</strong> y <strong>Bajo Acoplamiento</strong>: delegar al objeto que conoce. Si una clase mezcla cálculos, reportes, notificaciones y facturación, falta <strong>Alta Cohesión</strong>: separar responsabilidades. Si una parte la crea alguien que no la contiene ni registra, falta <strong>Creador</strong>: mover la creación al todo o registro natural."
  },
  {
    c: "GRASP",
    s: "12-grasp",
    q: "Compare Experto y Creador.",
    a: "<strong>Experto</strong> responde quién debe calcular, validar, derivar o informar algo: la clase que posee la información necesaria. <strong>Creador</strong> responde quién debe instanciar un objeto: quien lo contiene, agrega, registra, usa fuertemente o tiene sus datos de inicialización. Ambos asignan responsabilidades y suelen favorecer bajo acoplamiento, pero resuelven preguntas distintas."
  },
  {
    c: "GRASP",
    s: "12-grasp",
    q: "¿Por qué Creador no es una especialización formal de Experto?",
    a: "Porque no responden la misma pregunta. <strong>Experto</strong> decide quién debe hacer o conocer algo por tener la información necesaria. <strong>Creador</strong> decide quién debe crear una instancia por contenerla, agregarla, registrarla, usarla o tener datos de inicialización. Pueden coincidir en una misma clase, pero Creador no deriva formalmente de Experto."
  },
  {
    c: "GRASP",
    s: "12-grasp",
    q: "Explique cómo Controlador, Experto, Bajo Acoplamiento y Alta Cohesión se relacionan en una misma secuencia.",
    a: "La secuencia típica es <code>Actor -> Boundary -> Gestor -> Entidades</code>. El <strong>Controlador</strong> recibe el evento y coordina; el <strong>Experto</strong> resuelve porque conoce los datos; el <strong>Bajo Acoplamiento</strong> aparece porque el gestor delega en vez de pedir datos internos; y la <strong>Alta Cohesión</strong> se mantiene porque el gestor coordina mientras las entidades hacen operaciones propias."
  },
  {
    c: "GRASP",
    s: "12-grasp",
    q: "Dé un ejemplo y contraejemplo de Alta Cohesión.",
    a: "Ejemplo: <code>Consulta.calcularDuracion()</code>, <code>Consulta.agregarDetalleConsulta()</code> y <code>Consulta.calcularMontoTotal()</code>, porque todo pertenece al concepto Consulta. Contraejemplo: <code>Consulta.enviarWhatsapp()</code>, <code>Consulta.generarFactura()</code> e <code>Consulta.imprimirReporteMensual()</code>, porque mezcla comunicación, facturación y reportes."
  },
  {
    c: "GRASP",
    s: "12-grasp",
    q: "Dé un ejemplo y contraejemplo de Bajo Acoplamiento.",
    a: "Ejemplo: <code>GestorVentaEntrada -> Funcion : hayLugar()</code>, porque el gestor delega y no conoce sala ni entradas por dentro. Contraejemplo: el gestor pide <code>Sala.getCapacidad()</code>, recorre <code>Entrada</code> y calcula disponibilidad; queda acoplado a detalles internos que deberían estar encapsulados en <code>Funcion</code>."
  },

  // ── Relaciones · UML (sección 02), vista de análisis (06) y cátedra (15)
  {
    c: "Relaciones",
    s: "02-uml",
    q: "¿Qué diferencia hay entre asociación, agregación y composición?",
    a: "<strong>Asociación</strong>: relación estructural genérica. <strong>Agregación</strong> (rombo vacío): todo-parte donde la parte puede existir sin el todo. <strong>Composición</strong> (rombo lleno): todo-parte con dependencia de vida; si se destruye el todo, se destruyen las partes."
  },
  {
    c: "Relaciones",
    s: "02-uml",
    q: "¿Qué diferencia hay entre asociación y dependencia?",
    a: "La <strong>asociación</strong> es un vínculo estructural duradero (la clase conoce a la otra como atributo). La <strong>dependencia</strong> (flecha punteada) es un uso puntual: el control usa una entidad para enviarle un mensaje, sin guardarla como parte de su estructura."
  },
  {
    c: "Relaciones",
    s: "06-clases-analisis",
    q: "¿Qué es la navegabilidad y cómo se justifica?",
    a: "Indica qué objeto puede acceder a cuál para enviarle mensajes. Se justifica por la dinámica: si el gestor consulta <code>Vuelo</code>, <code>Pais</code> y <code>Ciudad</code>, esas dependencias aparecen en la vista de clases."
  },
  {
    c: "Relaciones",
    s: "06-clases-analisis",
    q: "¿Cómo se razona la multiplicidad?",
    a: "Desde el dominio y desde los mensajes. Por ejemplo <code>Vuelo \"1\" → \"1..*\" CambioEstadoVuelo</code> (un vuelo tiene al menos un cambio de estado) o <code>OrdenTraslado \"1\" → \"1..*\" DetalleOT</code>."
  },
  {
    c: "Relaciones",
    s: "15-guia-practica",
    q: "¿Cómo dibuja la cátedra las asociaciones en la vista de análisis?",
    a: "<strong>Unidireccionales</strong> (flecha de navegabilidad) con la <strong>multiplicidad solo en la clase destino</strong>, no en ambos extremos. No usa rombos de composición/agregación aunque sean todo-parte; el «control» <strong>depende</strong> (línea punteada) de las entidades a las que envía mensajes."
  },
  {
    c: "Relaciones",
    s: "15-guia-practica",
    q: "¿Cómo se decide el sentido de una asociación dirigida?",
    a: "Por <strong>quién necesita mandar mensajes a quién</strong>: el agregado apunta a sus detalles y el detalle apunta a las entidades de catálogo que referencia. Cada método debe ser coherente con la navegabilidad (si A → B, B no tiene <code>getA()</code>)."
  },

  // ── Clases BCE · ciclo de vida del control (sección 06) ────────────────
  {
    c: "Clases BCE",
    s: "06-clases-analisis",
    q: "¿Qué pasa con el objeto «control» a lo largo del tiempo?",
    a: "Suele <strong>crearse al iniciar</strong> el caso de uso y <strong>destruirse al terminar</strong> (encapsula esa conversación). Las <strong>entidades</strong> viven más allá y participan en varias realizaciones; una <strong>boundary</strong> puede compartirse entre pantallas."
  },

  // ── Casos de uso · escenarios (sección 07) ─────────────────────────────
  {
    c: "Casos de uso",
    s: "07-realizaciones-casos-uso",
    q: "En la realización de un CU, ¿cuántos escenarios se modelan en el diagrama de secuencia?",
    a: "Uno solo: el <strong>escenario principal</strong> (curso normal). Los cursos alternativos no se dibujan con <code>alt/opt</code>; si hace falta, se hace <strong>un diagrama por flujo</strong> y las condiciones van como guarda <code>[...]</code> sobre el mensaje."
  },

  // ── Síntesis · sección 13 ──────────────────────────────────────────────
  {
    c: "Síntesis",
    s: "13-relaciones-clave",
    q: "¿Cuál es la cadena conceptual completa de la materia?",
    a: "<code>Requerimientos → Casos de uso → Realizaciones → Clases BCE → (Secuencia/Comunicación + Máquinas de estado) → GRASP → Arquitectura lógica → Diseño</code>. Los requisitos externos se vuelven una vista interna conceptual; las clases colaboran en escenarios; las responsabilidades se reparten con GRASP; y todo se organiza en paquetes hacia el diseño."
  },
  {
    c: "Síntesis",
    s: "13-relaciones-clave",
    q: "¿Cuándo un concepto del dominio se convierte en clase de entidad?",
    a: "Cuando representa <strong>información duradera</strong> que el sistema debe recordar, consultar o modificar. El modelo de dominio aporta los conceptos; los que tienen información persistente y responsabilidades de conocer/hacer pasan a ser <strong>clases de entidad</strong> del análisis."
  },
  {
    c: "Síntesis",
    s: "13-relaciones-clave",
    q: "¿Por qué se dice que GRASP es el “hilo” que conecta responsabilidades con los diagramas?",
    a: "Porque GRASP decide <strong>dónde</strong> ubicar cada responsabilidad, y esa decisión se ve directamente en los diagramas: quién manda cada mensaje en la secuencia (Controlador/Experto), quién crea a quién (Creador) y cómo quedan las dependencias (Bajo Acoplamiento) y el reparto de tareas (Alta Cohesión). Sin GRASP, las pantallas se saturan de lógica y las entidades quedan sin comportamiento."
  },
  {
    c: "Síntesis",
    s: "13-relaciones-clave",
    q: "En el mapa integral, ¿cómo decido si una clase necesita máquina de estados?",
    a: "Cuando su comportamiento <strong>depende del estado</strong>: el mismo evento produce resultados distintos según en qué situación esté el objeto, o hay caminos prohibidos según el estado. Ahí el diagrama de clases se complementa con una máquina de estados que muestra qué eventos cambian el estado y bajo qué guardas."
  },

  // ── Práctica / Parcial · repaso (14), práctica (15), caso resuelto (16)
  {
    c: "Práctica / Parcial",
    s: "15-guia-practica",
    q: "¿Cuál es el método general para encarar un ejercicio?",
    a: "Leer dominio y caso de uso; marcar sustantivos (clases) y verbos (casos de uso); detectar si hay clase con ciclo de vida (máquina de estados); elegir el escenario pedido; identificar actor, pantalla, gestor, sesión y entidades; armar la secuencia/comunicación; derivar la vista de clases; y revisar multiplicidad, navegabilidad e historial."
  },
  {
    c: "Práctica / Parcial",
    s: "15-guia-practica",
    q: "¿Cómo se obtienen los métodos de una máquina de estados?",
    a: "El método de transición pertenece a la clase que cambia de estado (no a la pantalla ni al caso de uso completo). Ejemplos: <code>aprobar()</code>, <code>cancelar()</code>, <code>comenzarPreparacion()</code>, <code>revisarContenido()</code>. Esos métodos deben reaparecer luego en la secuencia y en las clases."
  },
  {
    c: "Práctica / Parcial",
    s: "15-guia-practica",
    q: "¿Cuál es el patrón de cambio de estado con historial?",
    a: "El gestor valida que la transición sea posible; la entidad ejecuta el método; se cierra el cambio actual (<code>setFechaHoraFin()</code>); se crea un nuevo <code>CambioEstado…</code>; se asocia el nuevo <code>Estado</code>; se registran fecha/hora, motivo y responsable si se piden; y se notifica si corresponde."
  },
  {
    c: "Práctica / Parcial",
    s: "15-guia-practica",
    q: "¿Cómo modelo el patrón de creación con detalles?",
    a: "El gestor reúne datos y coordina; la entidad principal se crea con <code>new()</code> y, como es el todo que los contiene, crea su cambio de estado inicial y sus detalles. Si hay contenedores o elementos, los detalles se crean dentro de un <code>loop</code>."
  },
  {
    c: "Práctica / Parcial",
    s: "15-guia-practica",
    q: "¿Por qué una consulta con filtros no es un CRUD?",
    a: "Porque hay selección incremental, validación de datos requeridos, cálculo (por ejemplo de disponibilidad o tarifa) y consulta sobre varias entidades relacionadas. El caso típico es 'Consultar Disponibilidad de Vuelos'."
  },
  {
    c: "Práctica / Parcial",
    s: "15-guia-practica",
    q: "¿Cómo se derivan las clases de análisis desde la secuencia?",
    a: "Cada objeto significativo de la dinámica se vuelve una clase; cada mensaje entrante relevante se vuelve un método de la clase receptora; y cada enlace usado para enviar mensajes justifica una asociación, dependencia o navegabilidad."
  },
  {
    c: "Práctica / Parcial",
    s: "15-guia-practica",
    q: "¿Cuándo necesito una clase Estado / CambioEstado?",
    a: "Cuando el enunciado pide historial, fecha/hora, motivo, responsable o permanencia en estados. <code>Estado</code> es el catálogo de estados posibles; <code>CambioEstado…</code> o <code>HistorialEstado…</code> representa el paso de la entidad por un estado. Si no hay historial, puede bastar una relación directa con <code>Estado</code>."
  },
  {
    c: "Práctica / Parcial",
    s: "15-guia-practica",
    q: "¿Cuándo aparece Sesion/Usuario en la dinámica?",
    a: "Cuando el flujo necesita usuario logueado, validar un rol o permisos, o registrar un responsable. El gestor pide el usuario logueado a la <code>Sesion</code> y valida su rol antes de continuar el caso de uso."
  },
  {
    c: "Práctica / Parcial",
    s: "14-guia-repaso",
    q: "¿Cómo se conectan los tres diagramas (estados, interacción, clases)?",
    a: "Los métodos de transición de la máquina aparecen como mensajes en la secuencia cuando el caso de uso cambia el estado; los objetos y mensajes de la secuencia se vuelven clases y métodos; y la clase con estados debe contener métodos coherentes con su máquina. Los tres deben leerse como una sola solución."
  },
  {
    c: "Práctica / Parcial",
    s: "14-guia-repaso",
    q: "¿Cuáles son los errores típicos de parcial?",
    a: "Confundir acciones con estados; poner casos de uso como estados; no poner métodos en las transiciones; olvidar guardas cuando una regla bifurca; que la pantalla hable con todas las entidades; que el gestor absorba responsabilidades de entidades expertas; olvidar <code>Sesion</code>/<code>Usuario</code> o <code>CambioEstado</code>; y meter detalles de base de datos o frameworks en análisis."
  },
  {
    c: "Práctica / Parcial",
    s: "14-guia-repaso",
    q: "¿Cuál es el orden mental para repasar la cadena conceptual antes del parcial?",
    a: "Requerimientos (qué pide el usuario) → casos de uso → realización (clases que colaboran) → BCE → secuencia/comunicación → máquina de estados de la clase con ciclo de vida → GRASP que justifica el reparto → relaciones y multiplicidades en la vista de clases. Repasar en ese orden ayuda a no olvidar ningún artefacto."
  },
  {
    c: "Práctica / Parcial",
    s: "14-guia-repaso",
    q: "¿Qué tres diagramas conviene dominar para el primer parcial práctico?",
    a: "La <strong>máquina de estados</strong> de la clase con ciclo de vida, el <strong>diagrama de secuencia</strong> del caso de uso pedido y el <strong>diagrama de clases de análisis</strong> (modelo de dominio acotado al CU). Los tres deben ser consistentes: mismos nombres de clases y métodos en todas las vistas."
  },
  {
    c: "Práctica / Parcial",
    s: "16-caso-resuelto",
    q: "En un caso resuelto, ¿por dónde conviene empezar a construir los diagramas?",
    a: "Por la <strong>lectura y marcado</strong> del enunciado: subrayar sustantivos (clases candidatas), verbos (eventos/métodos) y buscar la clase con ciclo de vida. Una vez detectada esa clase, se arranca por su <strong>máquina de estados</strong>, porque ordena los demás diagramas (los métodos de transición reaparecen en la secuencia y en las clases)."
  },
  {
    c: "Práctica / Parcial",
    s: "16-caso-resuelto",
    q: "¿Cómo se detecta cuál clase lleva la máquina de estados?",
    a: "Es la clase cuyo <strong>comportamiento depende de su estado</strong>. La pista en el texto suele ser una frase como “el estado del proyecto cambia según los laboreos”: ese 'cambia de estado según…' obliga a hacerle la máquina de estados a esa clase (en el caso de Administración de Campos, <code>ProyectoDeCultivo</code>)."
  },
  {
    c: "Práctica / Parcial",
    s: "16-caso-resuelto",
    q: "¿Por qué un mismo caso de uso produce varias transiciones con distinto destino?",
    a: "Porque el destino depende de una <strong>guarda</strong>, no del evento. En “Registrar Laboreos”, el mismo CU deja el proyecto en <em>EnPreparación</em> <code>[siembra = NO]</code>, lo pasa a <em>EnSiembra</em> <code>[siembra = SI]</code> o a <em>Cosechado</em> <code>[cosecha]</code>. Es el patrón mismo evento + distinta guarda + distinto estado."
  },

  // ── Parcial teórico · sección 17 ───────────────────────────────────────
  {
    c: "Parcial teórico",
    s: "17-parcial-teorico",
    q: "¿Por qué importa la consistencia entre las vistas y dónde se evidencia?",
    a: "Porque cada vista representa un aspecto del sistema; si no son consistentes aparecen <strong>ambigüedades y contradicciones</strong> que afectan el desarrollo y la mantenibilidad. Se evidencia en que las <strong>mismas clases</strong> aparecen en secuencia y en clases, los <strong>métodos</strong> se escriben igual en las tres vistas, las <strong>relaciones</strong> de la vista de clases se ven como paso de mensajes, y las <strong>transiciones</strong> de la máquina coinciden con métodos de la clase que cambia de estado."
  },
  {
    c: "Parcial teórico",
    s: "17-parcial-teorico",
    q: "¿Cuáles son los tres tipos de responsabilidad del hacer?",
    a: "<strong>Hacer algo en uno mismo</strong> (crear un objeto, calcular o modificar el propio estado, p. ej. <code>Pedido.calcularTotal()</code>); <strong>iniciar una acción en otros objetos</strong> (enviar un mensaje a otro, p. ej. el gestor consulta <code>Producto.tieneNombre()</code>); y <strong>controlar y coordinar actividades en otros objetos</strong> (orquestar la secuencia de mensajes, típicamente el gestor del caso de uso)."
  },
  {
    c: "Parcial teórico",
    s: "17-parcial-teorico",
    q: "¿Qué diferencia y qué comparten los patrones Creador y Experto?",
    a: "<strong>Experto</strong> responde '¿quién hace o conoce algo?' → la clase con la información. <strong>Creador</strong> responde '¿quién instancia un objeto?' → la clase que lo contiene, agrega, registra o usa. <strong>Comparten</strong> que ambos asignan responsabilidades mirando qué tiene la clase y ambos favorecen el <strong>bajo acoplamiento</strong>; muchas veces la misma clase es Experto y Creador."
  },
  {
    c: "Parcial teórico",
    s: "17-parcial-teorico",
    q: "¿Cómo favorece el patrón Experto el bajo acoplamiento?",
    a: "Al poner la responsabilidad donde está la información, las demás clases <strong>no necesitan conocer los datos internos</strong> del experto: le piden que responda en vez de leer sus atributos. Así hay menos dependencias y un cambio en cómo el experto representa sus datos no se propaga (radio de impacto chico)."
  },
  {
    c: "Parcial teórico",
    s: "17-parcial-teorico",
    q: "¿Qué es el dominio del problema y el dominio de la solución?",
    a: "El <strong>dominio del problema</strong> es la instancia centrada en comprender el negocio y los requerimientos (qué debe y no debe hacer el sistema); sus workflows son <strong>negocio</strong> y <strong>requerimientos</strong>. El <strong>dominio de la solución</strong> se centra en refinar requerimientos y construir la solución; sus workflows son <strong>análisis, diseño, implementación y pruebas</strong>."
  },
  {
    c: "Parcial teórico",
    s: "17-parcial-teorico",
    q: "¿En qué se diferencia el modelo de requerimientos del modelo de análisis?",
    a: "El de <strong>requerimientos</strong> es vista externa, en lenguaje del cliente, puede tener redundancias/inconsistencias, se estructura con casos de uso y es un contrato de qué hace el sistema. El de <strong>análisis</strong> es vista interna, en lenguaje del desarrollador, no debería tener inconsistencias, se estructura con clases y paquetes estereotipados y refina el cómo de forma conceptual."
  },
  {
    c: "Parcial teórico",
    s: "17-parcial-teorico",
    q: "¿Cómo detecto inconsistencias entre artefactos de análisis?",
    a: "Cruzando las vistas: mensajes en la secuencia <strong>sin método</strong> en la clase receptora; métodos de clase que no aparecen en ninguna interacción; transiciones de la máquina <strong>sin método</strong> en la clase que cambia; <strong>nombres distintos</strong> para el mismo concepto entre vistas; multiplicidades/navegabilidades incoherentes con los mensajes; y estados de la máquina que la clase <code>Estado</code> no contempla. Cada inconsistencia genera ambigüedad y vuelve el modelo poco confiable."
  },
  {
    c: "Parcial teórico",
    s: "17-parcial-teorico",
    q: "¿Cuál es la diferencia entre Modelo, Vista y Diagrama?",
    a: "Un <strong>modelo</strong> es una abstracción completa del sistema desde cierto enfoque (p. ej. el modelo de análisis). Una <strong>vista</strong> es una proyección del modelo que muestra un aspecto (estática o dinámica). Un <strong>diagrama</strong> es la representación gráfica concreta de (parte de) una vista. Ej.: el modelo de análisis tiene una <em>vista dinámica</em> que se dibuja con diagramas de secuencia y de comunicación."
  },
  {
    c: "Parcial teórico",
    s: "17-parcial-teorico",
    q: "¿En qué casos el PUD recomienda construir un modelo de análisis?",
    a: "Cuando el sistema es <strong>grande o complejo</strong> y conviene una vista interna conceptual antes de diseñar; cuando hay muchos requerimientos que refinar y aspectos internos sobre los que razonar; y de forma <strong>iterativa e incremental</strong> (cada iteración analiza los casos de uso significativos de esa iteración). En sistemas triviales puede omitirse."
  },
  {
    c: "Parcial teórico",
    s: "17-parcial-teorico",
    q: "¿Cuál es el propósito del Análisis y su rol en el ciclo iterativo e incremental del PUD?",
    a: "Refinar los requerimientos en términos de <strong>objetos</strong> (modelo conceptual), razonar sobre los <strong>aspectos internos</strong> sin comprometerse con tecnología, y producir una base estructurada (clases de análisis, realizaciones de CU, paquetes) para el diseño. En el PUD se hace <strong>por iteración</strong>: cada incremento analiza los casos de uso de esa iteración, no todo de una vez."
  },
  {
    c: "Parcial teórico",
    s: "17-parcial-teorico",
    q: "¿Cuáles son las entradas y las salidas del proceso de Análisis orientado a objetos?",
    a: "<strong>Entradas:</strong> el modelo de requerimientos (casos de uso, glosario, reglas de negocio) y el modelo del negocio/dominio. <strong>Salidas:</strong> el modelo de análisis = clases de análisis estereotipadas («boundary»/«control»/«entity»), realizaciones de casos de uso (vista estática de clases + vista dinámica de secuencia/comunicación/máquina de estados) y paquetes de análisis. Las clases modelan la estructura; las realizaciones, el comportamiento por CU."
  },
  {
    c: "Parcial teórico",
    s: "17-parcial-teorico",
    q: "“El patrón Creador es una especialización del patrón Experto.” ¿Es correcto?",
    a: "No exactamente: son patrones <strong>distintos</strong>. Ambos asignan responsabilidades según lo que la clase conoce o contiene, pero responden preguntas diferentes: <strong>Experto</strong> → ¿quién debe hacer/conocer algo? (quien tiene la información); <strong>Creador</strong> → ¿quién instancia a B? (quien lo contiene, agrega, registra, usa o tiene sus datos de inicialización). Se relacionan (el creador suele ser experto en los datos de inicialización) pero no es una especialización formal."
  },
  {
    c: "Parcial teórico",
    s: "17-parcial-teorico",
    q: "¿Qué diagramas propone UML 2.0 para el análisis y qué trazabilidad hay entre ellos?",
    a: "Diagramas de <strong>interacción</strong> (secuencia y comunicación, equivalentes entre sí), <strong>máquina de estados</strong> y <strong>diagrama de clases</strong>. Trazabilidad / controles de consistencia: cada mensaje de la secuencia debe ser un método de la clase receptora; cada método de transición de la MEF debe ser método de la clase que cambia y figurar como mensaje; los estados de la MEF se corresponden con la clase <code>Estado</code>; los nombres de clases y métodos coinciden en todas las vistas."
  },
  {
    c: "Parcial teórico",
    s: "17-parcial-teorico",
    q: "¿Cómo se relacionan Bajo Acoplamiento y Alta Cohesión?",
    a: "Son patrones <strong>evaluativos complementarios</strong>. Aplicar bien Experto/Creador tiende a producir bajo acoplamiento (menos dependencias) y alta cohesión (responsabilidades enfocadas) a la vez. A veces <strong>compiten</strong>: concentrar todo en una clase baja el acoplamiento entre clases pero hunde la cohesión de esa clase. El buen diseño <strong>balancea</strong> ambos."
  },
  {
    c: "Parcial teórico",
    s: "17-parcial-teorico",
    q: "¿De qué se compone el modelo resultante del análisis?",
    a: "De <strong>clases de análisis</strong> (boundary/control/entity con responsabilidades, no métodos con firma completa), <strong>realizaciones de casos de uso</strong> (vista estática = diagrama de clases del CU; vista dinámica = secuencia/comunicación + máquina de estados de las clases con ciclo de vida) y <strong>paquetes de análisis</strong> (agrupación con alta cohesión y bajo acoplamiento)."
  }
];

export const categorias = Array.from(new Set(preguntas.map((p) => p.c)));

/** Preguntas que se desprenden de una sección (por slug). */
export function preguntasDeSeccion(slug: string) {
  return preguntas.filter((p) => p.s === slug);
}

/** URL del banco de preguntas filtrado a una sección. */
export function bancoSeccionUrl(slug: string) {
  return `/banco-preguntas?seccion=${slug}`;
}
