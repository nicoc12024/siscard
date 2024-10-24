#Documentación - Proyecto Siscard
##Requisitos
##Asegúrate de tener instalados los siguientes programas en tu sistema:

- Node.js (versión 14 o superior)
- Angular CLI
- SQL Server (o un servidor compatible)
- Git (para clonar el repositorio)

##Instrucciones para ejecutar el proyecto

1. ###Clonar el repositorio

```bash
git clone https://github.com/<tu-usuario>/<tu-repositorio>.git
cd <tu-repositorio>
```

2. ###Configurar el Backend
1. Ve a la carpeta del backend:

```bash
cd backend
```

2. Instala las dependencias:

```bash
npm install
```

3. ###Configura las variables de entorno:

- Crea un archivo `.env` en la carpeta `backend` con el siguiente contenido:

```env
DB_SERVER=localhost
DB_DATABASE=siscard01
DB_USER=tu-usuario
DB_PASSWORD=tu-password
DB_PORT=1433
```

4. ###Inicia el servidor backend:

```bash
npm start
```

El backend debería estar corriendo en `http://localhost:3000`. 3. Configurar el Frontend

1. Ve a la carpeta del frontend:

```bash
cd ../siscard
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia la aplicación frontend:

```bash
ng serve
```

La aplicación estará disponible en `http://localhost:4200`. 4. Restaurar la base de datos

1. Abre tu herramienta de gestión de SQL Server (como SQL Server Management Studio).
2. Crea una nueva base de datos llamada `siscard01`.
3. Ejecuta el script `create_table.sql` que se encuentra en la carpeta `backend`.
4. Esto creará las tablas necesarias para la aplicación.
