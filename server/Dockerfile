FROM node:16

WORKDIR /serverlp

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=6444

EXPOSE 6444

CMD [ "npm", "start" ]