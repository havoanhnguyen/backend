FROM node:20.7.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]
