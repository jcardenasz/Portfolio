# Guía corta sobre OpenSpec y Spec-Driven Development

**OpenSpec** es un framework de desarrollo de software orientado a **Spec-Driven Development (SDD)** y creado por **Fission-AI**. Su propósito es estructurar el proceso de desarrollo alrededor de especificaciones que describen qué debe hacer el sistema, cómo debe cambiar y cómo validar que la implementación cumple con lo esperado.

En un contexto de desarrollo asistido por IA, estas especificaciones adquieren especial importancia: sirven como contexto para los agentes de IA y ayudan a reducir ambigüedades, suposiciones y cambios fuera del alcance definido.

> **Idea clave:** la IA puede escribir código, pero necesita conocer con claridad **qué se quiere construir, por qué y bajo qué condiciones debe considerarse correcto**.

---

## ¿Qué es Spec-Driven Development?

Dentro de **Spec-Driven Development**, primero se define y documenta lo que se quiere construir y posteriormente se implementan los artefactos o entregables necesarios.
La metodología puede entenderse en cuatro fases:

### 1. Capturar la intención

Se define qué se quiere construir utilizando lenguaje natural: historias de usuario, criterios de aceptación, restricciones, información relevante, ejemplos, entre otros.

El objetivo es que la especificación sea suficientemente clara para que una persona, técnica o no, pueda entender qué se quiere construir.

> **Si no puedes explicar con claridad lo que quieres construir, es difícil esperar que una IA lo implemente correctamente.**

### 2. Traducir la intención en un plano del sistema

A partir de los requisitos se crea un diseño técnico que describe, según sea necesario:

-   Componentes.
-   Comunicación entre componentes.
-   Arquitectura.
-   Stack tecnológico.
-   Decisiones técnicas.
-   Restricciones relevantes.

Esta etapa conecta la intención del negocio o del usuario con una solución técnicamente viable.

### 3. Generar unidades de trabajo

El diseño se divide en tareas concretas e incrementales. Cada tarea debería ser:

-   Pequeña.
-   Clara.
-   Medible.
-   Testeable.

Dividir el trabajo permite avanzar de manera controlada y facilita detectar errores antes de que se propaguen a otras partes del sistema.

### 4. Implementar y validar

Finalmente se implementan las tareas y se valida el resultado utilizando los criterios de aceptación definidos anteriormente.

El proceso es **incremental e iterativo**: cada nueva funcionalidad puede recorrer nuevamente estas etapas.

---

## ¿Por qué es especialmente interesante con IA?

Spec-Driven Development no nació con la inteligencia artificial. Su objetivo tradicional ha sido proporcionar estructura, claridad y control sobre el proceso de desarrollo.
Sin embargo, el desarrollo asistido por IA hace que las especificaciones sean todavía más relevantes.

Cuando un agente de IA participa en un proyecto, los *specs* pueden funcionar como una **fuente única de verdad** que describe el comportamiento esperado del sistema. Esto ayuda a:

-   Proporcionar contexto al agente.
-   Reducir ambigüedades.
-   Establecer límites para la implementación.
-   Evitar decisiones basadas únicamente en suposiciones.
-   Facilitar la revisión del trabajo generado.
-   Mantener una referencia sobre cómo debería comportarse el sistema.

Por eso, una buena especificación no debería verse únicamente como documentación adicional. En un proyecto desarrollado con asistencia de IA, puede convertirse en una parte fundamental del proceso de ingeniería.

---

# OpenSpec de Fission-AI

[OpenSpec](https://github.com/Fission-AI/OpenSpec/) es una herramienta que facilita la aplicación de este enfoque mediante una estructura de archivos y comandos que guían el proceso de especificación, diseño, implementación y validación.

> **Importante:** OpenSpec facilita el proceso, pero no sustituye el criterio del desarrollador. Los artefactos generados por la IA deben revisarse y validarse **a fondo** antes de utilizarlos como base para implementar cambios.

## Instalación

OpenSpec requiere **Node.js 20 o superior**.

La instalación puede realizarse mediante:

``` bash
npm install -g @fission-ai/openspec@latest
```

Después, desde la raíz del proyecto:

``` bash
cd your-project
openspec init
```

La inicialización también puede solicitarse a un asistente de IA integrado en el entorno de desarrollo, siempre que este tenga acceso a la terminal y pueda ejecutar los comandos necesarios.

---

# Estructura de OpenSpec

Al ejecutar `openspec init`, se crea una estructura similar a:

``` text
openspec/
├── specs/              # Fuente de verdad del comportamiento del sistema
│   └── <domain>/
│       └── spec.md
├── changes/            # Cambios propuestos
│   └── <change-name>/
│       ├── proposal.md
│       ├── design.md
│       ├── tasks.md
│       └── specs/      # Specs Delta: comportamiento que cambia
│           └── <domain>/
│               └── spec.md
└── config.yaml         # Configuración opcional del proyecto
```

Cada cambio dentro de `changes/` contiene sus propios artefactos Markdown (.md).

La idea importante es distinguir entre:

-   **Specs principales:** describen el comportamiento que el sistema debe mantener.
-   **Specs Delta:** describen cómo cambia ese comportamiento como consecuencia de una nueva funcionalidad o modificación. Estos terminan integrandose en los specs principales al final del cambio.

> **Recomendación:** no asumas que un artefacto generado por la IA es correcto únicamente porque está bien redactado. Lee y valida el contenido antes de proceder con la implementación.

---

# Flujo básico de OpenSpec

El flujo por defecto puede representarse así:

``` text
/opsx:explore ──► /opsx:propose ──► /opsx:apply ──► /opsx:sync ──► /opsx:archive
   (optional)
```

![Comandos básicos y proposito](/guides/image-1.png)

## 1. `/opsx:explore`

Utiliza este comando cuando todavía no tienes completamente definida la solución. La exploración permite conversar con el asistente de IA sobre el problema, investigar alternativas y contrastar ideas antes de comprometerse con una implementación.

Una buena práctica es **explorar primero el problema y después la solución**.

En lugar de decir:

> "Quiero implementar X usando Y."

puede ser más útil comenzar con:

> "Tengo este problema. ¿Qué alternativas existen y cuáles son sus ventajas y desventajas?"

También es recomendable indicar al agente qué partes del código son relevantes para que pueda razonar con suficiente contexto. La exploración no crea un cambio ni modifica los artefactos de OpenSpec.

---

## 2. `/opsx:propose <nombre-del-cambio>`

Cuando ya tienes claro qué quieres construir, puedes utilizar:

``` text
/opsx:propose <nombre-del-cambio>
```

El asistente genera los artefactos necesarios para describir y planificar el cambio.

Antes de continuar, **revisa estos artefactos cuidadosamente**. La implementación posterior estará condicionada por lo que se haya definido en ellos.

Consulta la [documentación oficial de OpenSpec](https://github.com/Fission-AI/OpenSpec/blob/main/docs/getting-started.md) para conocer el formato esperado de cada artefacto.

---

## 3. `/opsx:apply <nombre-del-cambio>`

Una vez aprobada la propuesta, `apply` se utiliza para implementar el cambio descrito en los artefactos.

Si durante la implementación descubres que el diseño necesita modificarse, actualiza la especificación correspondiente antes de continuar, **el código y los artefactos deben mantenerse alineados**.

---

## 4. `/opsx:sync <nombre-del-cambio>`

Este comando sincroniza los Specs Delta con los specs principales.

El objetivo es que la documentación que representa el comportamiento actual del sistema refleje los cambios implementados.

Según el flujo utilizado, este paso puede ser opcional o necesario antes de archivar el cambio, pero tranquilo, `/opsx:archive` te dirá si es necesario o no.

---

## 5. `/opsx:archive <nombre-del-cambio>`

Finalmente, el cambio puede archivarse. El proceso guarda los artefactos históricos y permite incorporar los cambios de los Specs Delta a los specs principales cuando corresponda.

El cambio se mueve a una estructura de archivo así:

``` text
openspec/changes/archive/YYYY-MM-DD-<nombre>/
```

Esto resulta especialmente útil para conservar un historial auditable de cómo evolucionó el sistema.

---

# Flujo extendido

Para proyectos donde se quiere tener un mayor control sobre cada etapa, OpenSpec ofrece un flujo más granular:

``` text
/opsx:new ──► /opsx:ff or /opsx:continue ──► /opsx:apply ──► /opsx:verify ──► /opsx:archive
```

![Comandos extendidos y proposito](/guides/image-1.png)

También es posible utilizar `/opsx:ff` cuando se quiere avanzar rápidamente por la generación de artefactos.

Para utilizar este perfil se habilita mediante:

``` bash
openspec config profile
```

y posteriormente:

``` bash
openspec update
```

Consulta la [documentación oficial de comandos](https://github.com/Fission-AI/OpenSpec/blob/main/docs/commands.md)
para conocer el comportamiento actual de cada comando.

---

## `/opsx:new <nombre-del-cambio>`

Después de explorar el problema, `new` crea un nuevo cambio en:

``` text
openspec/changes/<nombre-del-cambio>/
```

En el flujo extendido, permite comenzar el proceso de forma estructurada y preparar los artefactos necesarios para el cambio.

------------------------------------------------------------------------

## `/opsx:continue <nombre-del-cambio>`

`continue` genera **un artefacto a la vez**, siguiendo la cadena de dependencias entre ellos. Esto permite revisar cada etapa antes de pasar a la siguiente.

Es especialmente útil cuando:

-   El cambio es complejo.
-   Se quiere mantener un control cercano sobre las decisiones.
-   Se desea revisar la propuesta antes del diseño.
-   Se quiere validar el diseño antes de generar las tareas.

---
## `/opsx:ff <nombre-del-cambio>`

Cuando no necesitas revisar cada artefacto individualmente, `ff` permite avanzar rápidamente por el proceso de generación.

Es una alternativa conveniente cuando el cambio está suficientemente claro y se confía en que el agente puede producir la planificación completa.

---

## `/opsx:apply <nombre-del-cambio>`

En el flujo extendido, `apply` implementa las tareas definidas para el cambio.

Una estrategia útil es trabajar **tarea por tarea**, verificando la checklist conforme se completa cada una.

Esto facilita mantener el progreso controlado y puede resultar especialmente útil cuando existen cambios que pueden desarrollarse en paralelo.

---

## `/opsx:verify <nombre-del-cambio>`

Este comando permite validar que la implementación sea coherente con los artefactos definidos. La revisión considera aspectos como:

### Completitud

¿Todas las tareas fueron implementadas?

### Correctitud

¿La implementación cumple con la intención definida en los specs?

### Coherencia

¿Las decisiones de diseño se reflejan realmente en el código? ¿Se mantienen los patrones y convenciones del proyecto?

Esta etapa es especialmente valiosa antes de realizar un commit o abrir un Pull Request, ya que proporciona una oportunidad adicional para revisar el trabajo generado con IA.

---

## Otros comandos útiles

El perfil extendido también incluye comandos como:

-   `/opsx:bulk-archive`: permite archivar múltiples cambios.
-   `/opsx:onboard`: proporciona un recorrido guiado por el flujo extendido.

Además, `/opsx:update` permite actualizar los artefactos de planificación de un cambio cuando aparecen nuevas decisiones o requisitos.

Por ejemplo:

``` text
/opsx:update add-dark-mode - ahora debe guardarse en una cookie en lugar de LocalStorage
```

La finalidad es mantener coherentes los artefactos de planificación; **no modifica directamente el código**.

---

# ¿Qué flujo debería utilizar?

No existe una única respuesta. El flujo básico resulta conveniente cuando:

-   El cambio es relativamente sencillo.
-   La intención está clara.
-   Se quiere avanzar rápidamente.
-   Se confía suficientemente en el agente.

El flujo extendido puede ser preferible cuando:

-   El cambio es complejo.
-   Hay varias decisiones arquitectónicas.
-   El proyecto es importante o crítico.
-   Se quiere revisar cada artefacto.
-   Se necesita mayor trazabilidad.
-   Varias personas o agentes participarán en el desarrollo.

Personalmente, **prefiero el flujo extendido para cambios complejos**, porque obliga a avanzar de manera más incremental y proporciona más puntos de control.

La elección, sin embargo, debería depender del contexto del proyecto y del nivel de confianza que tengas en la herramienta de IA.

---

# Una recomendación importante

OpenSpec puede hacer que el desarrollo asistido por IA sea más estructurado, pero existe un riesgo importante: **automatizar también la especificación sin revisarla**.

Si simplemente le dices a la IA:

> "Implementa esta funcionalidad."

y aceptas todo lo que genera, puedes terminar automatizando un proceso incorrecto.

Una estrategia más segura es:

``` text
Problema >> Explorar Definir intención >> Revisar especificación =╗ 
                                                                  ▼
     Archivar << Verificar << Implementar << Revisar diseño << Diseñar
```

La ventaja de utilizar Spec-Driven Development con IA no está únicamente en generar código más rápido. Está en **hacer que el proceso de desarrollo sea más explícito, revisable y controlable**.

---

# Conclusión

El desarrollo asistido por IA está cambiando la forma en que escribimos software. Sin embargo, generar código rápidamente no significa necesariamente desarrollar software correctamente.

OpenSpec propone una forma de introducir estructura en este proceso: primero se define la intención, después se diseña la solución, se divide el trabajo, se implementa y finalmente se valida.

La especificación actúa como un punto de referencia entre **lo que queremos construir** y **lo que la IA termina implementando**.

Por eso, si estás comenzando a utilizar agentes de IA para desarrollar software, vale la pena experimentar con Spec-Driven Development y herramientas como OpenSpec. No necesitas adoptar todo el proceso desde el primer día: puedes empezar con cambios pequeños y aumentar progresivamente el nivel de estructura y control.

Y, sobre todo, **lee y valida los artefactos generados por la IA**. La herramienta puede ayudarte a pensar, diseñar y programar, pero las decisiones de ingeniería siguen necesitando criterio humano.

Aquí te dejo una tabla donde verás como es la sintaxis para diferentes asistentes de IA:

![sintaxis para IA](/guides/image-3.png)

---

## Referencias

-   [OpenSpec - Repositorio oficial](https://github.com/Fission-AI/OpenSpec/)
-   [OpenSpec - Getting Started](https://github.com/Fission-AI/OpenSpec/blob/main/docs/getting-started.md)
-   [OpenSpec - Commands](https://github.com/Fission-AI/OpenSpec/blob/main/docs/commands.md)
-   [AWS - Del caso de uso a producción](https://dev.to/aws/del-caso-de-uso-a-produccion-k6p)

---

*Guía creada por **Juan Camilo Cárdenas Zabala**, adaptando información de la documentación oficial de OpenSpec y material sobre Spec-Driven Development.*
