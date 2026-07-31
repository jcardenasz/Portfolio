<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
<div style="font-family: 'Montserrat', sans-serif;">

# Guía corta sobre el AI-Driven Development Life Cycle (AI-DLC)

La inteligencia artificial está cambiando rápidamente la forma en que desarrollamos software. Ya no se limita a asistir a los desarrolladores con pequeñas tareas: los agentes de IA pueden participar en el análisis de requisitos, la planificación, el diseño, la implementación, las pruebas e incluso en actividades de operación y despliegue.

Esta evolución plantea una pregunta importante:

> **¿Tiene sentido seguir utilizando exactamente los mismos procesos de desarrollo cuando la velocidad y la capacidad de ejecución del equipo han cambiado radicalmente?**

AWS propone una respuesta a esta pregunta mediante el **AI-Driven Development Life Cycle (AI-DLC)**, una metodología que coloca a la IA en el centro del proceso de desarrollo, manteniendo la supervisión humana en las decisiones críticas.

Fuente principal: [AWS - AI-Driven Development Life Cycle](https://aws.amazon.com/es/blogs/devops/ai-driven-development-life-cycle/)

---

## ¿Qué es AI-DLC?

El **AI-Driven Development Life Cycle (AI-DLC)**, o *Ciclo de Vida del Desarrollo de Software Orientado en IA*, es una metodología diseñada para aprovechar las capacidades de la inteligencia artificial a lo largo de todo el proceso de desarrollo de software.

A diferencia de un enfoque donde la IA funciona únicamente como asistente del desarrollador, AI-DLC propone que la IA tenga un papel mucho más activo en el proceso: puede generar planes, analizar información, producir artefactos, implementar soluciones y ayudar a validar los resultados. **Esto no significa eliminar al ser humano del proceso.**

La metodología se plantea como un modelo **IA-céntrico con supervisión humana**, donde:

- La IA se encarga de ejecutar y acelerar tareas.
- Los humanos toman las decisiones críticas.
- El equipo valida las propuestas y respuestas de la IA.
- Los humanos aportan conocimiento del negocio, criterio técnico y pensamiento creativo.
- La IA mantiene y utiliza el contexto necesario para avanzar entre las diferentes etapas.

![proceso de IA-DLC](/guides/image-4.png)

> **La idea no es reemplazar al equipo de desarrollo, sino cambiar la distribución del trabajo entre humanos e IA.**

---

# El papel del agente maestro

En AI-DLC existe el concepto de un **agente maestro**, encargado de orquestar el proceso a través de las diferentes fases.

Su función puede entenderse mediante cuatro responsabilidades principales:

| Responsabilidad | Función |
|-----------------|---------|
| **Enrutamiento** | Dirige el trabajo hacia el agente o proceso apropiado. |
| **Contexto** | Mantiene el conocimiento sobre el estado del proyecto. |
| **Guía** | Ayuda a navegar por la metodología y sus diferentes etapas. |
| **Estándares** | Aplica las convenciones y reglas definidas para el proyecto. |

---

# Las tres fases de AI-DLC

AI-DLC organiza el ciclo de desarrollo en tres grandes fases:

![Las 3 fases de AI-DLC](/guides/fases.png)


Fuente: [Three Phases](https://specs.md/methodology/three-phases)

---

# 1. Incepción

La fase de **Incepción** transforma los requerimientos de negocio en requisitos detallados, historias y unidades de trabajo manejables. Aquí la IA formula preguntas, propone soluciones y ayuda a estructurar el problema, mientras el equipo valida sus propuestas. Este proceso se conoce como **Mob Elaboration**.

La idea fundamental es que la IA ayude a descubrir y estructurar lo que debe construirse **antes de comenzar a escribir código**.

## Actividades

1. **Captura de la intención:** identificar el objetivo principal.
2. **Elaboración de requisitos:** generar historias de usuario y requisitos no funcionales (NFR).
3. **Contexto del sistema:** definir límites, interfaces y restricciones.
4. **División en unidades:** separar la intención en unidades independientes y con bajo acoplamiento.
5. **Planificación de componentes:** identificar los componentes necesarios para implementar cada historia.

## Artefactos

| Artefacto | Descripción |
|-----------|-------------|
| **requirements.md** | Historias de usuario, criterios de aceptación y requisitos no funcionales (NFR). |
| **system-context.md** | Límites, interfaces y restricciones del sistema. |
| **units.md** | Definiciones de las unidades y sus dependencias. |
| **Planes de Bolts** | Lista ordenada de Bolts para cada unidad. |

### ¿Cuándo termina la Incepción?

Para avanzar a Construcción:

- Todas las unidades deben estar definidas.
- Los límites y alcance deben estar claros.
- Las historias deben tener criterios de aceptación.
- Los planes de los Bolts deben estar aprobados.
- Las dependencias deben estar mapeadas.

> **El objetivo de la Incepción es reducir la incertidumbre antes de invertir esfuerzo en implementar.**

---

# 2. Construcción

En la fase de **Construcción**, la IA utiliza el contexto validado durante la Incepción para proponer y ejecutar la solución técnica. El equipo continúa participando en decisiones técnicas y arquitectónicas. Este proceso se denomina **Mob Construction**.

## Construcción basada en Domain-Driven Design

Para problemas con lógica de negocio compleja, AI-DLC utiliza un enfoque basado en **Domain-Driven Design (DDD)**.
DDD busca que el diseño y el código representen de manera cercana el dominio real del negocio.

El flujo incluye:

1. Modelo de dominio.
2. Diseño técnico.
3. Análisis de ADR.
4. Implementación.
5. Testeo.

Fuente: [DDD Construction](https://specs.md/methodology/three-phases#ddd-construction)

## Construcción simple

Para cambios como interfaces de usuario, integraciones o utilidades, puede utilizarse una construcción más sencilla:

1. Planeación.
2. Implementación.
3. Testeo.

Fuente: [Simple Construction](https://specs.md/methodology/three-phases#simple-construction)

### ¿Cuándo termina la Construcción?

Para pasar a Operación:

- Todos los Bolts deben estar completados y validados.
- Los tests deben pasar.
- La revisión de código debe estar completada.
- La documentación debe estar actualizada.

---

# 3. Operación

En la fase de **Operación**, la IA utiliza el contexto acumulado durante las fases anteriores para ayudar a administrar la infraestructura, los despliegues y las actividades operacionales. Esto puede incluir infraestructura como código (**IaC**), despliegues, verificaciones y monitoreo, siempre bajo la observación del equipo.

## Actividades

1. **Desarrollo:** compilar, empaquetar y preparar los artefactos necesarios para el despliegue.
2. **Despliegue:** desplegar la aplicación en entornos como *staging* o producción.
3. **Verificación:** ejecutar *smoke tests*, *health checks* y validaciones posteriores al despliegue.
4. **Monitoreo:** configurar métricas, logs, alertas y dashboards.

## Artefactos

| Artefacto | Descripción |
|-----------|-------------|
| **Unidades de despliegue** | Aplicaciones en contenedores o paquetes desplegables. |
| **Runbooks** | Procedimientos para realizar y resolver operaciones comunes. |
| **Configuración de monitoreo** | Dashboards, métricas y alertas. |

Fuente: [What is AI-DLC](https://specs.md/methodology/what-is-ai-dlc)

---

# ¿Qué son los Bolts?

Uno de los conceptos más importantes de AI-DLC es el **Bolt**.

A diferencia de las iteraciones tradicionales de metodologías ágiles, que suelen organizarse alrededor de ciclos de varias semanas, AI-DLC propone ciclos mucho más pequeños, medidos normalmente en **horas o días**.

Estos ciclos rápidos permiten que el equipo:

1. Defina una pequeña unidad de trabajo.
2. La diseñe.
3. La implemente.
4. La pruebe.
5. La valide.
6. Continúe con la siguiente unidad.

> **Los Bolts buscan convertir el desarrollo en una secuencia de pequeños incrementos verificables, en lugar de grandes bloques de trabajo que sólo se validan al final.**

---

# Humanos e IA: el nuevo modelo de colaboración

Uno de los aspectos más interesantes de AI-DLC es que no plantea simplemente "IA haciendo código". La metodología propone una colaboración más profunda donde el humano que conoce el negocio y tiene el criterio técnico y la creatividad toma las decisiones críticas para que luego la IA analice y planifique, genere artefactos, implemente, testee y ejecute tareas. Finalmente vuelve el humano para validar, corregir y tomar decisiones.

La IA puede encargarse de gran parte de la ejecución, mientras que el equipo establece la dirección y valida los resultados. Por esta razón, los **checkpoints humanos** son fundamentales ya que permiten detectar errores y corregirlos antes de que se propaguen a las siguientes etapas.

---

# ¿Qué ventajas ofrece AI-DLC?

El principal beneficio es la **velocidad**. La IA puede generar rápidamente artefactos que tradicionalmente requerían mucho trabajo manual:

- Requerimientos.
- Historias de usuario.
- Diseños.
- Código.
- Tests.
- Documentación.
- Artefactos de despliegue.

Esto puede permitir que equipos de producto, arquitectura y desarrollo completen actividades en **horas o días en lugar de semanas o meses**, dependiendo de la complejidad del problema. Pero la velocidad no es el único beneficio.

### Innovación

La IA permite explorar rápidamente diferentes alternativas y soluciones.

### Calidad

Los resultados pueden mejorar cuando existen requisitos claros, contexto suficiente y validaciones frecuentes.

### Colaboración

El equipo puede concentrarse en resolver problemas, discutir decisiones y aportar conocimiento especializado mientras la IA ejecuta tareas.

### Trazabilidad

Los artefactos generados durante las diferentes fases permiten mantener una referencia de las decisiones tomadas y del estado del sistema.

---

# ¿Cuándo puede ser especialmente útil?

AI-DLC puede ser una opción interesante cuando:

1. **El equipo requiere una alta coordinación.**
2. **El dominio lógico es complejo** y se beneficia de Domain-Driven Design, DDD.
3. **Se necesita documentación integral y trazabilidad.**
4. **Se trabaja en entornos regulados** donde existen requisitos de auditoría.
5. **La velocidad de entrega es importante** y existe infraestructura para trabajar con agentes de IA de forma controlada.

No significa que AI-DLC deba sustituir automáticamente a Agile, Scrum u otras metodologías. La elección debe depender del contexto, del tipo de producto, del equipo y del nivel de autonomía que se quiera otorgar a la IA.

---

# AI-DLC vs. Agile/Scrum

Una forma sencilla de visualizar las diferencias es:

| Aspecto | Agile/Scrum | AI-DLC |
|---------|-------------|--------|
| **Duración de la iteración** | Semanas (sprints) | Horas o días (Bolts) |
| **Quién dirige la ejecución** | Humano, con IA como asistencia | IA como colaborador central, con validación humana |
| **Diseño** | Puede realizarse antes o durante los sprints | Integrado en el flujo de construcción |
| **División de tareas** | Principalmente manual | Potenciada por IA |
| **Organización** | Sprints iterativos | Ciclos de tres fases |
| **Rituales** | Daily, planning, review, retrospectiva | Mob Elaboration, Mob Construction y checkpoints |
| **Documentación** | Depende del proceso y del equipo | Artefactos integrados en la metodología |
| **Gestión del contexto** | Puede perderse entre iteraciones | Specs y contexto acumulado |

> **AI-DLC no debería entenderse simplemente como "Agile, pero más rápido".** Propone una forma diferente de distribuir el trabajo entre humanos y agentes de IA.

---

# Una consideración importante: velocidad ≠ calidad

El principal atractivo de AI-DLC es también uno de sus mayores riesgos. Si la IA puede producir código, documentación y planes mucho más rápido, también puede producir **errores mucho más rápido**. Por eso, la supervisión humana debe aumentar, en lugar de desaparecer, a medida que aumenta la autonomía del agente.

Al contrario:

> **Cuanto mayor sea la autonomía de la IA, más importantes se vuelven los checkpoints, las especificaciones, las pruebas y las validaciones.**

La metodología funciona mejor cuando la velocidad de ejecución está acompañada por mecanismos que permitan detectar y corregir errores temprano.

---

# Conclusión

El AI-Driven Development Life Cycle propone una transformación importante en la manera de desarrollar software y una transformación importante en el rol de ingeniero de software. La principal diferencia no está únicamente en utilizar inteligencia artificial para escribir código, sino en **diseñar el proceso de desarrollo alrededor de las capacidades de la IA**.

El modelo divide el trabajo en tres grandes fases:
<center>

**INCEPCIÓN → CONSTRUCCIÓN → OPERACIÓN**

</center>

La IA participa activamente en cada una de ellas, mientras los humanos mantienen el control sobre las decisiones importantes. Los **Bolts**, los artefactos de contexto y los checkpoints humanos permiten trabajar en ciclos pequeños, mantener trazabilidad y reducir el riesgo de que los errores se propaguen.

En mi opinión, uno de los aspectos más interesantes de AI-DLC no es simplemente que permita desarrollar software más rápido. Es que nos obliga a replantearnos **cómo debería ser un proceso de desarrollo cuando una parte importante de la ejecución puede ser realizada por agentes de IA**.

El reto para los equipos de ingeniería ya no será únicamente aprender a utilizar estas herramientas. También será necesario aprender a **diseñar procesos donde humanos e IA trabajen juntos de forma controlada, medible y responsable**.

---

## Referencias

- [AWS - AI-Driven Development Life Cycle](https://aws.amazon.com/es/blogs/devops/ai-driven-development-life-cycle/)
- [AI-DLC (AI-Driven Development Life Cycle) Github](https://github.com/awslabs/aidlc-workflows)
- [Specs.md - Three Phases](https://specs.md/methodology/three-phases)
- [Specs.md - What is AI-DLC](https://specs.md/methodology/what-is-ai-dlc)
- [Specs.md - AI-DLC vs Agile](https://specs.md/methodology/ai-dlc-vs-agile)

---

*Guía creada por **Juan Camilo Cárdenas Zabala**, adaptando información de las referencias anteriores y material sobre AI-Driven Development Life Cycle.*

</div>
