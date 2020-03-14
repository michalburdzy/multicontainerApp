FROM node:alpine as client_build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


FROM nginx:latest

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=client_build /app/build /usr/share/nginx/html

EXPOSE 3000
