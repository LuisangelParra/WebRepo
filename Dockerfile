# Utiliza una imagen de Node.js como base
FROM node:20.12.2 as build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (o yarn.lock si usas Yarn) al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Compila la aplicación
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copia los archivos estáticos del directorio de compilación de la etapa de compilación al directorio de contenido de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto 80 para que Nginx pueda servir el contenido
EXPOSE 80

# Inicia Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
