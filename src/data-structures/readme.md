# Data Structures

Las estructuras de datos son una parte fundamental en la programación, y elegir la correcta puede marcar la diferencia en el rendimiento de una aplicación.

1. Realiza el siguiente ejercicio en **TDD**:

   > Construir una función que reciba un string y compruebe si contiene la combinación y orden correctos de paréntesis, corchetes y llaves.
   >
   > - Input: string
   > - Output: boolean
   >
   > Ejemplos de casos de uso:
   >
   > - `"[({[]})]"` --> Retorna `true`
   > - `"()"` --> Retorna `true`
   > - `""` --> Retorna `true`
   > - `"[{}"` --> Retorna `false`
   > - `"([)]"` --> Retorna `false`

   Antes de comenzar a picar, pregúntate **cuál es la mejor estructura de datos**, teniendo en cuenta su eficiencia y complejidad algorítmica.

> [!WARNING]
> La solución **no puede tener una complejidad algorítmica superior a O(n)**.

2. En un comentario del código o un archivo README, **justifica la elección de la estructura de datos** y responde y argumenta la siguiente pregunta: **en JavaScript, ¿qué tipo de estructura de datos son los Arrays?**

## Entrega

En [el canal de Discord correspondiente](https://discord.com/channels/1205172000935649290/1228029538248953957) haz la entrega de la resolución de tu ejercicio en **TypeScript** en un repo propio o en [StackBlitz](https://stackblitz.com/fork/github/vitejs/vite/tree/main/packages/create-vite/template-vanilla-ts?file=index.html&terminal=dev).

## Ejercicio Opcional Avanzado. Creación de un AVL

Una de las estructuras de datos que mejor complejidad algorítmica tiene es el **Árbol AVL**. El objetivo de este ejercicio es implementar un AVL en TypeScript.

En el `README.md` del módulo tienes referencias a la documentación de árboles y árboles AVL. Para poder ayudaros en la implementación os presento unos materiales que os pueden ayudar con implementaciones en otros lenguajes y pseudocódigo.

- [Definición de Arbol binario de búsqueda y AVL](https://www.cs.purdue.edu/homes/ayg/CS251/slides/chap7b.pdf)
- [Implementación paso a paso](https://www.programiz.com/dsa/avl-tree)
- [Visualización del gráfico de un AVL en cada operación](https://visualgo.net/en/bst)

Estos 3 enlaces son muy importante. El primero os dará una base teórica de como funciona primero un Arbol de búsqueda binario y luego cuando lo equilibramos en altura y por tanto pasa a ser un AVL. El segundo enlace os dará una implementación paso a paso de como se implementa un AVL. Y el tercero, importantísimo, os permitirá visualizar en tiempo real como se va equilibrando el árbol para cada una de las operaciones.

> [!TIP]
> Si no sabes por dónde empezar, te recomiendo que empieces por la implementación de un árbol binario de búsqueda y luego lo conviertas en AVL.

La implementación debe realizarse **usando TDD y BDD**.

Las operaciones que hay que implementar son:

- Creación -> O(1)
- Inserción -> O(log n)
- Borrado -> O(log n)
- Búsqueda -> O(log n)

### Verificando las complejidades

Para poder verificar que las complejidades son correctas, debes ejecutar cada operación las suficientes veces haciendo crecer el arbol y medir el tiempo que tarda en ejecutarse con las funciones de medición de tiempo de NodeJS.

Una vez que tengas los datos de tiempo, debes realizar una gráfica de complejidad de cada operación y compararla con la complejidad teórica.

Se debe entregar un README.md con las gráficas y la justificación de las complejidades.

### Entrega AVL

Se debe entregar dentro de vuestro repo individual del curso y en el canal de Discord de estructura de datos. La fecha límite de entrega es **antes del comienzo del proyecto final**.
