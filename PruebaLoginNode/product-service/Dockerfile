# Dockerfile

# Usar una imagen base de Node.js
FROM node:18-alpine

# Crear un directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el código de la aplicación
COPY . .

# Compilar TypeScript a JavaScript (si no usas ts-node para producción)
RUN npm run build

# Exponer el puerto (el mismo que el microservicio utiliza)
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["node", "dist/productService.js"]
