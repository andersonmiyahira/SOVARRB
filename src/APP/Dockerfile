# criar imagem para frontend baseado na imagem oficial do NodeJS
FROM node:9-alpine as vbanking-frontend

# Criar uma pasta para armazenar a aplicação
RUN mkdir -p /usr/src/app

# apontar a pasta criada como padrão
WORKDIR /usr/src/app

# Copiar arquivos para a pasta padrão
COPY . /usr/src/app

# Instalar dependencias
RUN npm install

# Expor a porta
EXPOSE 8091

# Serve the app
CMD ["npm", "start"]