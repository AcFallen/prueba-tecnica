# TODO-LIST CON WEBSOCKETS Y Mysql

Este repositorio es una aplicacion full-stack parte de una prueba tecnica en donde nos pidieron realizar un TO-DO list usando Node-React y mysql como base de datos.

##  Versiones

- Node.js: v20.12.1
- Express: ^4.19.2
- Socket.IO: ^4.7.5
- React: ^18.2.0
- Vite: vite/5.2.8 win32-x64

## Instalación

Sigue estos pasos para desplegar el proyecto localmente:

1. Clona el repositorio:

```bash
git clone https://github.com/AcFallen/prueba-tecnica.git

```

2. Navega al directorio del proyecto:
```bash
cd .\prueba-tecnica\
code .
```

3. Instalamos el backend

```bash
cd backend/
npm i
```

4. Agregamos la variable de entorno para PrismaORM

```bash
touch .env
```

5. Agregamos la DATABASE_URL a nuestro variable de entorno, tengamos en cuanto que podemos configurar tanto el puerto de nuestra BD como el nombre. En mi caso este es mi URL
```
DATABASE_URL="mysql://root:1234@localhost:3306/to_do_db"
```

6. Crear una instancia en nuetra base de datos con el nombre de nuestro DATABASE_URL (/to_do_db), para que prisma pueda establecer la conexion y crear los modelos puesto en nuetro archivo (schema.prisma)

```sql
CREATE DATABASE to_do_db
```

7. Generamos el cliente de Prisma y corremos las migraciones para tener nuestro modelo de Tasks en nuestra base de datos.
```bash
npx prisma generate
npx prisma migrate dev
```

8. Iniciamos nuestro servidor de express y tendriamos nuestro servidor backend de nuestro proyecto.
```bash
npm run dev
```

9. Abrimos una nueva terminal y entramos a nuestra carpeta de frontend eh instalamos las dependencias.

```bash
cd frontend/
npm i
npm run dev
```

10. Con estos pasos tenemos nuestros servidores tanto de backend como frontend en terminales distintas.

## Funcionalidades

- Agregar tarea
- Actualizar estado de tarea
- Eliminar tarea
- Ver todas las tareas


## Tegnologias usadas

- React
- Express
- Socket.IO
- PrismaORM
- MYSQL
- MaterialUI

## Contacto

Correo:  r.apaza.cornejo@gmail.com

