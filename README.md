# APIWithNodeJS
 API Con Node.js, Express Y MongoDB (Mongoose)

# Tecnologías 
 Express
 Mongoose
 Cors

 -D
 Morgan
 Nodemon

# Estructura de directorios

```bash
├── src
│   ├── config
│   │   ├── config.js
│   │   ├── db.config.js
│   ├── controllers
│   │   ├── notes.controller.js
│   ├── models
│   │   ├── notes.model.js
│   ├── routes
│   │   ├── notes.router.js
│   └── app.js
```

1. config/config.js, exporta al proyecto las variables de entorno que deseamos usar en 
más de un fichero del proyecto, ejemplo: la url de la base de datos
2. config/db.config, conetiene la conexión a la base de datos (de manera directa y sencilla)
a través de mongoose.connect
3. controllers/notes.controller.js, se encarga de las peticiones a la base de datos, contiene las
funciones para almacenar, obtener y actualizar los datos del modelo usado
4. models/notes.model.js, definición del esquema de las notas, solo contiene campos 
de pruebas (nota y fecha)
5. routes/notes.router.js, redirige las peticiones de '/notes' según el tipo
de petición que desea el usuario 
6. app.js, servidor

# Conslusión
De esta sencilla manera hemos podido crear una APIrest con Express y Mongoose
para conectarnos a una base de datos en mongo, usando los métodos GET, POST, PUT y DELETE.
(Se usa nodemon y morgan para el desarrollo)