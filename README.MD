# Tarea por hacer en Node

Este es un ejercicio que guarda las tareas en un archivo json y le pasas las tareas como parámteros en la consola

Intalar dependencias:

```
npm install
```

Agregando una nueva tarea:

```
node app crear -d 'Agregando una nueva tarea'
```

Actualizando una tarea por hacer:

```
node app actualizar -d 'Agregando una nueva tarea' -c true
```

Borrando una tarea por hacer:

```
node app borrar -d 'Agregando una nueva tarea'
```

Listar todas las tareas:

```
node app listar
```