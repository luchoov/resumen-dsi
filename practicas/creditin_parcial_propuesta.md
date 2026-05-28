# Diseño de Sistemas de Información — Caso de Estudio: CreditIn
## Ejercicio práctico tipo primer parcial (propuesta)

> Propuesta de modelo de parcial sobre el caso **CreditIn (Sistema de Gestión de Préstamos)**,
> con el mismo formato y nivel de exigencia que el *Ejercicio tipo Parcial 1 — FIA Fórmula 1*.
> El **Glosario** y la **Descripción del Dominio** provienen del caso de estudio entregado por la cátedra;
> las secciones *Definición del Producto*, *Reglas de Negocio*, *Descripción de Caso de Uso*,
> *Flujos Alternativos* y *Observaciones* son la parte que se completaría el día del parcial.

---

## Se pide al Estudiante

Lea y analice atentamente la situación planteada y, en base a ello:

1. Construya la **máquina de estados** de la clase **`Préstamo`**, utilizando un diagrama de máquina de estados. Especifique para las transiciones los métodos correspondientes y las condiciones de control cuando apliquen.

Modele la **realización de caso de uso de análisis** para el escenario del **Caso de Uso "Registrar Pago de Cuota"**, aplicando los **patrones GRASP** de análisis. Para ello:

2. Construya la **vista de análisis** que incluye las clases necesarias para dar soporte al escenario descripto y a la máquina de estados construida en el punto 1.
3. Modele el escenario descripto en el caso de uso, utilizando un **diagrama de secuencia**.

> **Práctica adicional (opcional).** Este enunciado describe **tres casos de uso** (*Registrar Pago de Cuota*, *Solicitar Préstamo* y *Generar Plan de Pago*) y propone **dos clases con máquina de estados** (`Préstamo` y `Cuota`). Para ejercitar más, se puede repetir la consigna sobre cualquiera de ellos:
> - Construir la **máquina de estados** de la clase **`Cuota`**.
> - Construir la **vista de análisis** y el **diagrama de secuencia** de los casos de uso *Solicitar Préstamo* o *Generar Plan de Pago*.

## Lista de Casos de Uso (parcial)

| ID | Caso de Uso | Actor Principal | Complejidad |
|---|---|---|---|
| 1 | Solicitar Préstamo | Cliente | Mediano |
| 7 | Registrar Pago de Cuota | Cliente | Mediano |
| 12 | Generar Plan de Pago | Analista de Cobranzas | Mediano |
| — | Registrar Cliente | Cliente | Simple |
| — | Administrar Tipos de Préstamo | Analista de Productos | Simple |
| — | Generar Reporte de Morosidad | Analista de Cobranzas | Mediano |

---

## Dominio: CreditIn — Sistema de Gestión de Préstamos

### Glosario

| Concepto | Definición |
|---|---|
| **Acreditación** | Momento en el cual el cliente puede disponer de los fondos otorgados por el préstamo. |
| **Cliente** | Persona que solicita y/o posee uno o más préstamos otorgados por la empresa. |
| **Condonamiento** | Reducción o eliminación parcial o total de una deuda, generalmente aplicada sobre los intereses, como parte de un acuerdo entre la empresa y el cliente para facilitar su cancelación. |
| **Cuota** | Obligación de pago en la que se divide un préstamo. |
| **Mora** | Situación en la que se encuentra un préstamo cuando alguna de sus cuotas no ha sido abonada en término. |
| **Plan de Pago** | Acuerdo de cancelación asociado a un préstamo que establece condiciones particulares para el pago de una o más cuotas. |
| **Préstamo** | Otorgamiento de una suma de dinero a un cliente, quien se compromete a devolverla en cuotas en un período determinado bajo ciertas condiciones financieras. |
| **Recargo** | Importe adicional que se genera sobre una cuota vencida. |
| **Tasa de interés** | Porcentaje que se aplica sobre el dinero prestado y que el cliente debe pagar como costo por utilizar ese dinero durante un período de tiempo. |
| **Tipo de Préstamo** | Modalidad de préstamo ofrecida por la empresa que define sus condiciones generales. |

### Descripción del Dominio

Una empresa financiera denominada **CreditIn** se dedica al otorgamiento de préstamos. La operatoria de la empresa se basa en la relación con clientes previamente registrados en el sistema.

**Clientes.** Un mismo cliente puede poseer múltiples préstamos asociados a lo largo del tiempo y de manera simultánea. Los clientes pueden registrarse en la página web de la empresa en cualquier momento; deben estar registrados para poder operar. Para cada cliente se almacenan sus datos personales: nombre, apellido, documento de identidad, correo electrónico y teléfono de contacto.

**Préstamos.** Un préstamo representa el otorgamiento de una suma de dinero a un cliente, quien asume el compromiso de devolverla en cuotas bajo determinadas condiciones. Un cliente puede solicitar un préstamo. Un equipo financiero contratado por la empresa evalúa el historial crediticio del cliente para determinar si es factible prestarle el dinero o no. En caso positivo, el préstamo será acreditado en la cuenta bancaria del cliente. Existen distintos tipos de préstamos que representan las modalidades ofrecidas por la empresa, pudiendo diferir en sus condiciones financieras y en la forma en que se gestionan los incumplimientos (personales, hipotecarios, prendarios, de corto o largo plazo). Cada tipo de préstamo define un conjunto de características generales.

**Cuotas.** Las cuotas constituyen las obligaciones de pago en las que se divide un préstamo. Para aquellas cuotas que no hayan sido abonadas en término se registra la cantidad de días de atraso. El incumplimiento de las obligaciones provoca el cálculo de recargos por mora. Según el tipo de préstamo, existe una *definición de mora* que establece las reglas mediante las cuales se calcularán los recargos en caso de atraso. El recargo representa el resultado concreto de aplicar las reglas definidas por la definición de mora sobre una cuota determinada. Por ejemplo, un préstamo personal puede definir una mora del 2% diario sobre el monto de la cuota; en otro caso, un préstamo podría definir una mora fija de $500 por cada día de atraso.

**Pago de cuotas.** Los pagos de una cuota se pueden realizar únicamente en días hábiles, de 9 de la mañana a 8 de la noche. Cada pago efectuado por un cliente corresponde a una cuota específica y se realiza mediante un único medio de pago (transferencias bancarias, pagos con tarjeta, etc.). El monto abonado podrá incluir los recargos asociados a la cuota al momento de su pago.

**Planes de pago.** Cuando un préstamo alcanza un estado de mora tal que representa un riesgo de incobrabilidad, la empresa podrá proponer al cliente un acuerdo de pago que contemple la reducción o condonamiento de un porcentaje de los intereses adeudados, a cambio de la cancelación de un monto convenido. El plan establece qué cuotas del préstamo forman parte del acuerdo, el monto a abonar y las fechas límite para la cancelación de una o más cuotas. El monto a pagar por una cierta cantidad de cuotas puede diferir del monto original, ya que se condona al cliente ese porcentaje de intereses.

---

## Definición del Producto de Software a construir

**Objetivo del Producto de Software:** Gestionar el otorgamiento y el seguimiento de préstamos a clientes —desde la solicitud y acreditación, su división en cuotas, el registro de pagos y el cálculo de recargos por mora, hasta la generación de planes de pago con condonamiento—, generando información relacionada con el estado de la deuda y la cobranza.

**Alcances del producto de software:**
- Registro y administración de clientes
- Administración de tipos de préstamo y sus definiciones de mora
- Solicitud, evaluación y acreditación de préstamos
- Generación y seguimiento de cuotas
- Registro de pagos y cálculo de recargos por mora
- Gestión de planes de pago y condonamientos
- Administración de medios de pago
- Generación de reportes de morosidad y cobranzas

**No contempla:**
- La integración con el sistema bancario para la acreditación de fondos (se asume realizada externamente)
- El scoring crediticio detallado y la gestión interna del equipo financiero
- La gestión contable e impositiva de la empresa

---

## Reglas de Negocio

| Nro. RN | Nombre de la RN | Descripción |
|---|---|---|
| **1** | Registro de clientes | Para poder operar (solicitar préstamos o pagar cuotas), el cliente debe estar registrado. Se almacenan nombre, apellido, documento, correo electrónico y teléfono. |
| **2** | Evaluación y acreditación | Un préstamo solicitado solo se acredita si el equipo financiero evalúa favorablemente el historial crediticio del cliente. Si la evaluación es negativa, el préstamo se rechaza. |
| **3** | Cálculo de recargos por mora | Según el tipo de préstamo se aplica su *definición de mora* sobre las cuotas vencidas, proporcional a los días de atraso. La definición puede ser **porcentual diaria** (un % sobre el monto de la cuota por cada día) o **fija** (un importe fijo por cada día de atraso). |
| **4** | Horario de pago | Los pagos de cuotas solo pueden registrarse en días hábiles, de 9:00 a 20:00 hs. Fuera de ese horario no se aceptan pagos. |
| **5** | Pago de una cuota | Cada pago corresponde a una única cuota y se realiza mediante un único medio de pago. El monto abonado puede incluir los recargos asociados a la cuota al momento del pago. |
| **6** | Mora del préstamo | Un préstamo se encuentra en mora cuando alguna de sus cuotas no ha sido abonada en término. Al regularizarse todas las cuotas vencidas, el préstamo vuelve a estar vigente. |
| **7** | Plan de pago y condonamiento | Cuando un préstamo en mora representa riesgo de incobrabilidad, la empresa puede proponer un plan de pago que condone un porcentaje de los intereses adeudados a cambio de un monto convenido. El plan redefine qué cuotas se incluyen, el monto a abonar y las fechas límite, pudiendo diferir del esquema original. |
| **8** | Finalización del préstamo | Un préstamo se considera finalizado cuando todas sus cuotas (o las acordadas en el plan de pago vigente) han sido pagadas. |
| **9** | Notificaciones | Al registrarse un pago se notifica al cliente por correo electrónico con el comprobante. Al proponerse un plan de pago, se notifica al cliente para su aceptación. |

---

## Descripción de Caso de Uso

| Nombre del Caso de Uso: **Registrar Pago de Cuota** | | ID: 7 |
|---|---|---|
| **Prioridad:** ☒ Esencial ☐ Útil ☐ Deseable | | |
| **Categoría:** ☒ Esencial ☐ Soporte | | |
| **Complejidad:** ☐ Simple ☒ Mediano ☐ Complejo ☐ Muy Complejo | | |
| **Actor Principal:** Cliente | **Actor Secundario:** Servidor de Correo | |
| **Tipo de Use Case:** ☒ Concreto ☐ Abstracto | | |
| **Objetivo:** Registrar el pago de una cuota de un préstamo, contemplando los recargos por mora cuando la cuota se encuentra vencida. | | |

**Flujo:** Pago de una cuota vencida (con recargo) mediante transferencia bancaria, dentro del horario hábil, con notificación por correo.

1. **Cliente:** Selecciona la opción de registrar el pago de una cuota.
2. **Sistema:** Valida que la fecha y hora actuales correspondan a un día hábil entre las 9:00 y las 20:00 hs y lo cumplen. (Leer RN 4)
3. **Sistema:** Busca y muestra los préstamos del cliente que poseen cuotas impagas. Solicita que se seleccione un préstamo.
4. **Cliente:** Selecciona el préstamo.
5. **Sistema:** Busca y muestra las cuotas impagas del préstamo. Para cada cuota muestra su número, monto, fecha de vencimiento y días de atraso. Solicita que se seleccione la cuota a pagar.
6. **Cliente:** Selecciona la cuota a pagar.
7. **Sistema:** Determina que la cuota está vencida y calcula el recargo aplicando la definición de mora del tipo de préstamo sobre los días de atraso. Calcula el monto total a pagar (monto de la cuota + recargo). (Leer RN 3 y Observaciones 1 y 2)
8. **Sistema:** Busca y muestra los medios de pago disponibles. Solicita que se seleccione el medio de pago.
9. **Cliente:** Selecciona el medio de pago (transferencia bancaria).
10. **Sistema:** Solicita la confirmación del pago, mostrando el monto total a abonar.
11. **Cliente:** Confirma el pago.
12. **Sistema:** Registra el pago con su fecha y hora, el monto abonado y el medio de pago, asociándolo a la cuota seleccionada. Marca la cuota como *Pagada*. (Leer RN 5)
13. **Sistema:** Verifica si el préstamo conserva cuotas vencidas. Si ya no quedan cuotas en mora, actualiza el estado del préstamo a *Vigente*; si la cuota pagada era la última pendiente, actualiza el préstamo a *Finalizado*. (Leer RN 6 y RN 8)
14. **Sistema:** Envía una notificación por correo electrónico al cliente con el comprobante del pago. Fin del caso de uso. (Leer RN 9)

### Flujos Alternativos

- **A1.** (Paso 2) La operación se realiza fuera del horario hábil: el sistema informa que los pagos solo pueden registrarse en días hábiles de 9:00 a 20:00 hs y finaliza el caso de uso.
- **A2.** (Paso 3) El cliente no posee préstamos con cuotas impagas.
- **A3.** (Paso 7) La cuota seleccionada no se encuentra vencida: no se aplica recargo y el monto total es el monto original de la cuota.
- **A4.** (Paso 11) El cliente no confirma el pago.
- **A5.** (Paso 13) La cuota pagada es la última del préstamo: el préstamo se marca como *Finalizado*.

### Observaciones

1. El recargo se calcula según la **definición de mora** asociada al **tipo de préstamo**: puede ser *porcentual diaria* (un porcentaje sobre el monto de la cuota por cada día de atraso) o *fija* (un importe fijo por cada día de atraso).
2. El monto abonado puede incluir los recargos asociados a la cuota al momento de su pago.
3. Los días hábiles excluyen sábados, domingos y feriados.
4. El Cliente debe encontrarse previamente registrado y autenticado en el sistema para operar.
5. Un préstamo entra en mora de forma automática cuando una de sus cuotas supera su fecha de vencimiento sin haber sido abonada.

---

## Descripción de Caso de Uso — Solicitar Préstamo

| Nombre del Caso de Uso: **Solicitar Préstamo** | | ID: 1 |
|---|---|---|
| **Prioridad:** ☒ Esencial ☐ Útil ☐ Deseable | | |
| **Categoría:** ☒ Esencial ☐ Soporte | | |
| **Complejidad:** ☐ Simple ☒ Mediano ☐ Complejo ☐ Muy Complejo | | |
| **Actor Principal:** Cliente | **Actor Secundario:** Equipo Financiero · Servidor de Correo | |
| **Tipo de Use Case:** ☒ Concreto ☐ Abstracto | | |
| **Objetivo:** Registrar la solicitud de un préstamo de un cliente y, tras una evaluación crediticia favorable, acreditarlo generando sus cuotas. | | |

**Flujo:** Solicitud de un préstamo personal cuya evaluación crediticia resulta favorable y se acredita, con notificación por correo.

1. **Cliente:** Selecciona la opción de solicitar un préstamo.
2. **Sistema:** Busca y muestra los tipos de préstamo ofrecidos por la empresa. Solicita que se seleccione un tipo de préstamo, el monto solicitado y la cantidad de cuotas.
3. **Cliente:** Selecciona el tipo de préstamo, ingresa el monto y la cantidad de cuotas.
4. **Sistema:** Valida que el monto y la cantidad de cuotas estén dentro de las condiciones generales del tipo de préstamo y lo están. Calcula la tasa de interés y el valor de las cuotas. Solicita la confirmación de la solicitud. (Leer Observación 1)
5. **Cliente:** Confirma la solicitud.
6. **Sistema:** Genera el préstamo en estado *Solicitado*, registrando el cliente, el tipo de préstamo, el monto, la tasa de interés y la fecha de solicitud. (Leer RN 1)
7. **Sistema:** Solicita al equipo financiero la evaluación del historial crediticio del cliente. El préstamo pasa al estado *En Evaluación*. (Leer RN 2)
8. **Equipo Financiero:** Evalúa el historial crediticio y determina que es factible otorgar el préstamo.
9. **Sistema:** Acredita el préstamo en la cuenta bancaria del cliente, genera las cuotas con sus fechas de vencimiento y montos, registra la fecha de acreditación y actualiza el estado del préstamo a *Vigente*. (Leer Observación 2)
10. **Sistema:** Envía una notificación por correo electrónico al cliente informando la acreditación del préstamo. Fin del caso de uso. (Leer RN 9)

### Flujos Alternativos

- **A1.** (Paso 4) El monto o la cantidad de cuotas no cumplen las condiciones del tipo de préstamo: el sistema lo informa y solicita reingresar los datos.
- **A2.** (Paso 5) El cliente no confirma la solicitud.
- **A3.** (Paso 8) La evaluación crediticia es desfavorable: el sistema actualiza el préstamo al estado *Rechazado* y notifica al cliente. (Leer RN 2)

### Observaciones

1. La tasa de interés y las condiciones (monto máximo, plazos admitidos) dependen del tipo de préstamo seleccionado.
2. La acreditación de los fondos en la cuenta bancaria del cliente se realiza a través del sistema bancario externo (fuera del alcance del producto).

---

## Descripción de Caso de Uso — Generar Plan de Pago

| Nombre del Caso de Uso: **Generar Plan de Pago** | | ID: 12 |
|---|---|---|
| **Prioridad:** ☒ Esencial ☐ Útil ☐ Deseable | | |
| **Categoría:** ☒ Esencial ☐ Soporte | | |
| **Complejidad:** ☐ Simple ☒ Mediano ☐ Complejo ☐ Muy Complejo | | |
| **Actor Principal:** Analista de Cobranzas | **Actor Secundario:** Servidor de Correo | |
| **Tipo de Use Case:** ☒ Concreto ☐ Abstracto | | |
| **Objetivo:** Proponer a un cliente un plan de pago para un préstamo en mora con riesgo de incobrabilidad, condonando un porcentaje de los intereses adeudados a cambio de un monto convenido. | | |

**Flujo:** Generación de un plan que agrupa varias cuotas vencidas, con condonamiento parcial de intereses y notificación al cliente.

1. **Analista de Cobranzas:** Selecciona la opción de generar un plan de pago.
2. **Sistema:** Busca y muestra los préstamos en mora que representan un riesgo de incobrabilidad. Solicita que se seleccione un préstamo. (Leer RN 6 y RN 7)
3. **Analista de Cobranzas:** Selecciona el préstamo.
4. **Sistema:** Busca y muestra las cuotas vencidas del préstamo, indicando su monto original y el recargo acumulado. Solicita que se seleccionen las cuotas a incluir en el plan.
5. **Analista de Cobranzas:** Selecciona las cuotas a incluir en el plan.
6. **Sistema:** Solicita el porcentaje de intereses a condonar, el monto convenido y las fechas límite para las agrupaciones de cuotas.
7. **Analista de Cobranzas:** Ingresa el porcentaje de condonamiento, el monto convenido y las fechas límite.
8. **Sistema:** Calcula el monto a abonar aplicando el condonamiento sobre los intereses adeudados. Solicita la confirmación del plan. (Leer Observación 1)
9. **Analista de Cobranzas:** Confirma el plan de pago.
10. **Sistema:** Genera el plan de pago asociado al préstamo, con sus detalles (cuotas agrupadas, monto a abonar y fecha límite de cada agrupación). Actualiza el estado del préstamo a *En Plan de Pago*. (Leer RN 7 y Observación 2)
11. **Sistema:** Envía una notificación al cliente con la propuesta del plan de pago para su aceptación. Fin del caso de uso. (Leer RN 9)

### Flujos Alternativos

- **A1.** (Paso 2) No existen préstamos en mora con riesgo de incobrabilidad.
- **A2.** (Paso 9) El analista no confirma el plan de pago.

### Observaciones

1. El condonamiento se aplica sobre los intereses y recargos adeudados, no sobre el capital del préstamo.
2. Un plan de pago puede establecer que varias cuotas se cancelen en conjunto en una misma fecha, bajo nuevas condiciones acordadas.

---

### Notas para preparar la resolución (no forman parte del enunciado)

- **Máquina de estados de `Préstamo`:** estados sugeridos → *Solicitado* → *En Evaluación* → (*Rechazado* | *Vigente*) → *En Mora* ⇄ *Vigente* → *En Plan de Pago* → *Finalizado*. Transiciones disparadas por `acreditar()`, `registrarPago()`, `proponerPlanPago()`, con guardas `[no quedan cuotas vencidas]`, `[última cuota]`, etc. (la dispara principalmente *Registrar Pago de Cuota* y *Solicitar Préstamo*).
- **Máquina de estados de `Cuota`** (opcional): estados sugeridos → *Pendiente* → *Vencida* (En Mora) → *Pagada*, con un camino *En Plan de Pago* cuando la cuota se incluye en un plan. Transiciones por `vencer()` `[fecha actual > vencimiento]`, `registrarPago()`, `incluirEnPlan()`. La dispara *Registrar Pago de Cuota* y *Generar Plan de Pago*.
- **Vista de análisis (GRASP)** de cada CU — clases típicas a incluir:
  - *Registrar Pago de Cuota:* `Cliente`, `Préstamo`, `Cuota`, `Recargo`, `Pago`, `MedioDePago`, `TipoPrestamo`, `DefinicionMora`/`MoraPorcentual`/`MoraFija`, `Estado`/`CambioEstadoPrestamo`.
  - *Solicitar Préstamo:* `Cliente`, `TipoPrestamo`, `Préstamo`, `Cuota`, `CuentaBancaria`, `Estado`/`CambioEstadoPrestamo`.
  - *Generar Plan de Pago:* `Préstamo`, `Cuota`, `Recargo`, `PlanDePago`, `DetallePlanPago`, `Estado`/`CambioEstadoPrestamo`.
- Todas las vistas se construyen acotando el **modelo de dominio** preparado en [creditin_dominio.md](creditin_dominio.md).
