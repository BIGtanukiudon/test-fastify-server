FROM node:22.6.0

WORKDIR /app

COPY index.ts package.json package-lock.json tsconfig.json /app/
COPY ./routers /app/routers

RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]