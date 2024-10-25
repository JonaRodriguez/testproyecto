# Etapa de compilación
FROM node:16-alpine as build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./
RUN npm install

# Copiar el resto del proyecto y compilar la aplicación
COPY . .
RUN npm run build

# Etapa de producción usando nginx
FROM nginx:alpine

# Copiar los archivos compilados de la etapa de build al contenedor de nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copiar la configuración personalizada de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 8080
EXPOSE 8080

# Ejecutar nginx
CMD ["nginx", "-g", "daemon off;"]
