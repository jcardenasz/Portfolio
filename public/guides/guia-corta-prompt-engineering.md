<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
<div style="font-family: 'Montserrat', sans-serif;">

# Prompt Engineering - Guía Básica de Buenas Prácticas

## ¿Qué es un prompt?

Un **prompt** es la instrucción o conjunto de instrucciones que se proporciona a un **LLM (Large Language Model)** para obtener una respuesta determinada. Un buen prompt permite obtener resultados más precisos, útiles y consistentes.

---

# Elementos de un Prompt

Todo prompt puede estar compuesto por los siguientes elementos:

## 1. Instrucciones

Son las tareas que se le asignan al modelo para que las realice. Describen claramente qué debe hacer el LLM.

**Ejemplo:**

> Resume el siguiente artículo en tres párrafos.

---

## 2. Contexto

Es información adicional que ayuda al modelo a comprender mejor la situación y generar respuestas más precisas.

**Ejemplo:**

> El resumen será utilizado en una publicación técnica para desarrolladores de software.

---

## 3. Datos de entrada

Corresponden a la información sobre la cual el modelo debe trabajar.

**Ejemplo:**

> *Texto, código fuente, tabla, imagen, archivo JSON, etc.*

---

## 4. Indicador de salida

Define el formato o tipo de respuesta esperado.

Puede especificarse:

- Longitud
- Idioma
- Formato (Markdown, JSON, tabla, lista, etc.)
- Nivel de detalle
- Restricciones específicas

**Ejemplo:**

> Responde únicamente en formato JSON.

---

# Peticiones negativas

En ocasiones resulta más sencillo guiar al modelo indicando aquello que **NO** debe hacer o incluir.

Las peticiones negativas ayudan a reducir respuestas no deseadas.

**Ejemplos**

- No inventes información.
- No hagas suposiciones.
- No agregues explicaciones adicionales.
- No utilices lenguaje técnico.

---

# Buenas prácticas de Prompt Engineering

## a. Escriba instrucciones claras y concisas

Evite ambigüedades y frases demasiado cortas o aisladas. Utilice lenguaje natural.

### ✖ Petición inadecuada

```
Calcula la suma total de la siguiente secuencia de números:
4, 8, 12, 16.
```

### ✔ Petición adecuada

```
¿Cuál es la suma de estos números: 4, 8, 12 y 16?
```

---

## b. Incluya contexto

Proporcione información adicional que ayude al modelo a responder con mayor precisión.

### ✖ Petición inadecuada

```
Resume este texto:
<texto>
```

### ✔ Petición adecuada

```
Proporciona un resumen de este artículo para utilizarlo en una entrada de mi blog:
<texto>
```

---

## c. Especifique el tipo de respuesta esperado

Indique explícitamente el formato de salida.

Puede limitar:

- Longitud
- Formato
- Información incluida
- Información excluida

### ✖ Petición inadecuada

```
¿Cuál es la capital?
```

### ✔ Petición adecuada

```
¿Cuál es la capital del estado de Nueva York?

La respuesta debe ser una oración completa.
```

---

## d. Formule preguntas claras

Siempre que sea posible, redacte el prompt como una pregunta.

Comience con expresiones como:

- ¿Quién...?
- ¿Qué...?
- ¿Dónde...?
- ¿Por qué...?
- ¿Cuándo...?
- ¿Cómo...?

### ✖ Petición inadecuada

```
Haz un resumen de este evento.
```

### ✔ Petición adecuada

```
¿Por qué ocurrió este evento?

Explícalo en tres frases.
```

---

## e. Proporcione ejemplos del formato esperado

Los modelos aprenden muy bien mediante ejemplos (*Few-shot Prompting*).

### ✖ Petición inadecuada

```
Determina el sentimiento de esta publicación:

[publicación]
```

### ✔ Petición adecuada

```
Determina el sentimiento de esta publicación teniendo en cuenta los siguientes ejemplos.

Publicación: "Buen producto."
→ Sentimiento: Positivo

Publicación: "Odio que la batería se agote tan rápido."
→ Sentimiento: Negativo

[publicación]
→
```

---

## f. Divida tareas complejas

Cuando la tarea sea extensa o difícil, es recomendable dividirla.

Algunas estrategias son:

- Dividir el problema en subtareas.
- Utilizar varios prompts en lugar de uno muy largo.
- Pedir al modelo que confirme si entendió las instrucciones.
- Solicitar que razone paso a paso.
- Pedir que proponga un plan antes de resolver el problema.
- Solicitar que divida automáticamente la tarea en subtareas.

---

## g. Experimente con diferentes prompts

No existe un único prompt perfecto.

Es recomendable probar distintas versiones para:

- Mejorar la precisión.
- Reducir errores.
- Obtener respuestas más consistentes.
- Encontrar el formato que mejor se adapte a la necesidad.

La iteración es una parte fundamental del Prompt Engineering.

---

# Prácticas recomendadas para la claridad de los prompts con CLAUDE

## 1. Comience con un verbo de acción fuerte:
Generar. Explicar. Resumir. Escribir.

## 2. Sea preciso sobre los servicios o componentes involucrados.

## 3. Evite referencias vagas:
"esto", "algo", "ayudame con ello"

## 4. Agregar el alcance o las restricciones: 
"Menos de 200 palabras", "para un principiante", "usar una tabla"

## 5. Solicite resultados limpios, estructurados y legibles:
Claude puede producir resultados correctos, pero si las instrucciones de formato no son explícitas, puede devolver
- Una combinación de codigo con explicaciones 
- Resultados que no se copian y pegan bien
- YAML o JSON mal alineados
- Respuestas en forma de parrafo.

### Claude también admite refinamiento iterativo:
Solicitar un resultado general y luego solicitar que se presente en un formato diferente, sin necesidad de volver a escribir todo el prompt de nuevo.

### Se puede limitar la verbosidad y el texto adicional:
Por ejemplo "No incluyas explicaciones; solo devuelve el resultado con formato". 
Esto es útil para crear salida de scripts de CICD, IAC, flujos de trabajo basado en CLI o línea de comandos, creación de bloques de construcción reutilizables en automatización.

## Tipos de patrones básicos de *prompts*:

### *Prompts* de instrucción:
*Prompts* donde se le da a Claude una instrucción clara y este genera una respuesta basada en esa solicitud.
La clave es ser **directo y específico.**
- Dígale a Claude **lo que desea** (tarea).
- Agregue **detalles** o **restricciones.**

```
Escribe un correo de seguimiento para un cliente que no ha respondido en dos semanas.
El tono debe ser cordial pero directo, de máximo 100 palabras, y debe incluir una
pregunta clara al final para facilitar la respuesta.
```

### *Prompts zero-shot* o *few-shot*:
Estos prompts consisten en pedirle a Claude que realice una tarea sin darle ejemplos *(zero-shot)* o se realiza una petición con pocos ejemplos *(few-shot)* para que Claude pueda seguir el estilo, tono o formato.

```
Zero-shot:
Clasifica el siguiente comentario como positivo, negativo o neutral: "El servicio
fue rápido pero el producto llegó dañado."

Few-shot:
Comentario: "Excelente atención, todo llegó a tiempo." → Positivo
Comentario: "Nunca más vuelvo a comprar aquí." → Negativo
Comentario: "El pedido llegó, sin más." → Neutral
Comentario: "El servicio fue rápido pero el producto llegó dañado." →
```

### Estimulo de roles:
Se le pide a Claude que responda como si fuera una persona específica o un rol profesional. Esto le proporciona contexto adicional y puede hacer que las respuestas sean mas relevantes, precisas, enfocadas y procesionales.

```
Actúa como un ingeniero de DevOps con 10 años de experiencia en infraestructura
cloud. Explícame, como si estuvieras entrenando a un desarrollador junior, por
qué es recomendable usar contenedores en lugar de máquinas virtuales completas
para desplegar microservicios.
```

### Estimulo de cadena de pensamiento:
Se le pide a Claude que muestre su trabajo. Divide una tarea en pasos claros y ordenados, enumera suposiciones y produce verificaciones inmediatas antes de la respuesta final. Hace que las tareas complejas sean más fáciles de verificar y refinar, teniendo el recorrido estructurado con pasos, puntos de decision y justificaciones.

```
Un servidor procesa 1200 solicitudes por minuto en promedio, pero durante los
picos de tráfico este número se triplica durante 10 minutos al día. Necesito
saber cuántas solicitudes por segundo debe soportar el servidor en el peor
caso. Piensa paso a paso, muestra los cálculos intermedios y verifica el
resultado antes de darme la respuesta final.
```

### Control de formato:
Es la capacidad de indicarle a Claude exactamente cómo se desea que estructure una respuesta ya sea JSON, YAML, Markdown, tablas, código, entre otras.

```
Dame una lista de 5 lenguajes de programación backend con su año de creación
y su principal caso de uso. Responde únicamente en formato JSON, con esta
estructura exacta: [{ "lenguaje": "", "año": 0, "uso_principal": "" }]
```

## Preguntas para solucionar problemas de *prompts*:

### ¿Mi entrada es demasiado amplia?:
Acótela a una tarea o alcancé específico.

### ¿Definí el objetivo con claridad?
Indique la audiencia, profundidad o perspectiva deseada.

### ¿Agregué las restricciones correctas?
Especifique formato, la longitud o el estilo.

### ¿La instrucción incluye ejemplos si es necesario?
Use el *prompt* de ejemplos para guiar la estructura o tono.

### ¿Un colega entendería correctamente mi solicitud?
Si no es así, Claude probablemente tampoco.

Si encuentra un *prompt* que funciona bien, guárdelo en un documento o biblioteca de plantillas para poder reutilizarlo y adaptarlo. Es muy recomendable crear un "Manual de prompts".

---

# Resumen

Un *prompt* de alta calidad normalmente contiene:

- Instrucciones claras.
- Contexto suficiente.
- Datos de entrada bien definidos.
- Formato de salida esperado.
- Restricciones cuando sean necesarias.
- Ejemplos del resultado esperado.
- División de tareas complejas.
- Iteración y mejora continua.

## Recomendaciones adicionales

- Crea y actualiza tu manual de *prompts*. 
- Siempre revisa el resultado del modelo, eres responsable de la precisión.
- Usa la IA para redactar, no para finalizar.
- El humano siempre debe estar presente en el proceso, el modelo es una ayuda.
- No ingreses datos confidenciales, información personal o interna confidencial.

Siguiendo estas prácticas es posible obtener respuestas más precisas, consistentes y útiles de los modelos de lenguaje (LLMs).

Guía creada por **Juan Camilo Cárdenas Zabala**, adaptando información del curso IA sin límites de AWS.

</div>
