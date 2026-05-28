# Modelo de Dominio - CreditIn (Gestión de Préstamos)

> Diagrama de clases del dominio para el caso de estudio *DSI 2026 Parcial 1 - CreditIn*.
> Nomenclatura y estilo según la cátedra (atributos + métodos, clase `Estado` como objeto,
> historial de estados vía `CambioEstadoPrestamo`, jerarquía de `DefinicionMora`, asociaciones
> nombradas con multiplicidades). Este es el modelo "completo" que el día del parcial se acota al CU dado.

```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': 'true', 'primaryColor': '#1e3a8a', 'primaryBorderColor': '#3b82f6', 'textColor': '#ffffff', 'tertiaryColor': '#10b981'}}}%%
classDiagram

class Cliente:::clientes {
  apellido
  correoElectronico
  documento
  nombre
  telefono
  getNombreCompleto()
  getDocumento()
  getCorreoElectronico()
  getTelefono()
  obtenerPrestamos()
  solicitarPrestamo()
}

class CuentaBancaria:::clientes {
  banco
  cbu
  numero
  getBanco()
  getCbu()
  acreditar()
}

class Prestamo:::prestamo {
  fechaAcreditacion
  fechaSolicitud
  monto
  tasaInteres
  new()
  acreditar()
  generarCuotas()
  getCuotas()
  obtenerCuotasVencidas()
  calcularDeudaTotal()
  estaEnMora()
  obtenerEstadoActual()
  crearCambioEstado()
  proponerPlanPago()
  getTipoPrestamo()
}

class TipoPrestamo:::prestamo {
  descripcion
  nombre
  getNombre()
  getDefinicionMora()
  calcularRecargo()
}

class DefinicionMora:::prestamo {
  descripcion
  calcularRecargo()
  getDescripcion()
}

class MoraPorcentual:::prestamo {
  porcentajeDiario
  calcularRecargo()
}

class MoraFija:::prestamo {
  importeDiario
  calcularRecargo()
}

class Cuota:::cobranza {
  diasAtraso
  fechaVencimiento
  monto
  numero
  new()
  estaPagada()
  estaVencida()
  estaEnMora()
  registrarDiasAtraso()
  calcularRecargo()
  getRecargo()
  getMonto()
  getMontoTotal()
  registrarPago()
}

class Recargo:::cobranza {
  fecha
  monto
  new()
  getMonto()
}

class Pago:::cobranza {
  fechaHora
  monto
  new()
  getMonto()
  esEnHorarioHabil()
  getMedioDePago()
}

class MedioDePago:::cobranza {
  nombre
  getNombre()
}

class PlanDePago:::planes {
  fechaAcuerdo
  montoAcordado
  porcentajeCondonado
  new()
  calcularMontoConCondonamiento()
  getCuotas()
  getMontoAcordado()
}

class DetallePlanPago:::planes {
  fechaLimite
  montoAAbonar
  new()
  getFechaLimite()
  getMonto()
}

class Estado:::estado {
  descripcion
  nombre
  esSolicitado()
  esEnEvaluacion()
  esRechazado()
  esVigente()
  esEnMora()
  esEnPlanPago()
  esCancelado()
  getNombre()
}

class CambioEstadoPrestamo:::estado {
  fechaHoraFin
  fechaHoraInicio
  new()
  esEstadoActual()
  getEstado()
  getFechaHoraInicio()
  setFechaHoraFin()
}

Cliente --> "0..*" Prestamo : prestamo
Cliente --> "0..*" CuentaBancaria : cuenta

Prestamo --> "1" TipoPrestamo : tipoPrestamo
TipoPrestamo --> "1" DefinicionMora : definicionMora
DefinicionMora <|-- MoraPorcentual
DefinicionMora <|-- MoraFija

Prestamo --> "1" CuentaBancaria : acreditacion
Prestamo --> "1..*" Cuota : cuota
Prestamo --> "0..*" PlanDePago : planDePago
Prestamo --> "1..*" CambioEstadoPrestamo : cambioEstado

Cuota --> "0..1" Recargo : recargo
Cuota --> "0..*" Pago : pago
Pago --> "1" MedioDePago : medioDePago

PlanDePago --> "1..*" DetallePlanPago : detalle
DetallePlanPago --> "1..*" Cuota : cuota

CambioEstadoPrestamo --> "1" Estado : estado

classDef clientes fill:#0369a1,stroke:#06b6d4,stroke-width:2px,color:#ffffff
classDef prestamo fill:#059669,stroke:#10b981,stroke-width:2px,color:#ffffff
classDef cobranza fill:#d97706,stroke:#f59e0b,stroke-width:2px,color:#ffffff
classDef planes fill:#be185d,stroke:#ec4899,stroke-width:2px,color:#ffffff
classDef estado fill:#7c3aed,stroke:#a78bfa,stroke-width:2px,color:#ffffff
```

## Decisiones de modelado (justificación según el enunciado)

| Elemento | Justificación (texto del caso) |
|---|---|
| **Cliente 1 — 0..\* Préstamo** | "Un mismo cliente puede poseer múltiples préstamos asociados a lo largo del tiempo y de manera simultánea." |
| **TipoPrestamo** | "Existen distintos tipos de préstamos… Cada tipo de préstamo define un conjunto de características generales" (personal, hipotecario, prendario, corto/largo plazo). |
| **DefinicionMora** abstracta con **MoraPorcentual / MoraFija** | "Según el tipo de préstamo, existe una definición de mora… las reglas mediante las cuales se calcularán los recargos." Los dos ejemplos (2% diario vs $500 fijo por día) son subtipos con distinto `calcularRecargo()` → polimorfismo. Una `DefinicionMora` por `TipoPrestamo`. |
| **Cuota** con `diasAtraso` | "Las cuotas constituyen las obligaciones de pago… Para aquellas cuotas que no hayan sido abonadas en término se registra la cantidad de días de atraso." |
| **Recargo** (0..1 por Cuota) | "El recargo representa el resultado concreto de aplicar las reglas definidas por la definición de mora sobre una cuota determinada." |
| **Pago → 1 MedioDePago** | "Cada pago efectuado por un cliente corresponde a una cuota específica y se realiza mediante un único medio de pago" (transferencia, tarjeta). `esEnHorarioHabil()` refleja "días hábiles, de 9 a 20 hs". |
| **PlanDePago** con `porcentajeCondonado` y **DetallePlanPago** (fechaLimite + monto, agrupa 1..\* cuotas) | "El plan establece qué cuotas… forman parte del acuerdo, el monto a abonar y las fechas límite… puede establecer que en una fecha determinada se cancelen dos cuotas en conjunto." Condonamiento = reducción de intereses. |
| **Estado** + **CambioEstadoPrestamo** | Patrón de la cátedra (igual que `CambioEstadoVuelo` en Líneas Aéreas): el préstamo pasa por Solicitado → En Evaluación → Rechazado / Vigente → En Mora → En Plan de Pago → Cancelado. Permite construir la máquina de estados del Préstamo y conservar el historial. |
| **CuentaBancaria** | "En caso positivo, el préstamo será acreditado en la cuenta bancaria del cliente" + glosario *Acreditación*. |

### Supuestos / puntos a confirmar el día del parcial
- **Equipo financiero** que evalúa el historial crediticio se tomó como **actor** (rol externo), no como clase del dominio. Si el CU pide registrar la evaluación, se agregaría `EvaluacionCrediticia { fecha, resultado, factible }` asociada a `Prestamo 1 — 0..1`.
- La **máquina de estados** del parcial probablemente sea sobre `Prestamo` (o `Cuota`). El modelo soporta ambas: `Prestamo` vía `Estado/CambioEstadoPrestamo`; `Cuota` vía métodos `estaPagada()/estaVencida()/estaEnMora()`.
- `tasaInteres` se ubicó en `Prestamo` (podría moverse a `TipoPrestamo` si el CU lo trata como condición general del tipo).
