FROM node:lts AS builder

WORKDIR /02-ToDo-SPA
COPY 02-ToDo-SPA/package*.json ./
RUN npm ci

WORKDIR /03-ToDo-SPA-API
COPY 03-ToDo-SPA-API/package*.json ./
RUN npm ci

WORKDIR /11-react-spa
COPY 11-react-spa/package*.json ./
RUN npm ci

WORKDIR /12-react-spa-api
COPY 12-react-spa-api/package*.json ./
RUN npm ci


WORKDIR /02-ToDo-SPA
COPY 02-ToDo-SPA ./
RUN npm run build

WORKDIR /03-ToDo-SPA-API
COPY 03-ToDo-SPA-API ./
RUN npm run build

WORKDIR /11-react-spa
COPY /11-react-spa ./
RUN npm run build

WORKDIR /12-react-spa-api
COPY /12-react-spa-api ./
RUN npm run build


FROM node:lts

WORKDIR 01-ToDo-Server
COPY 01-ToDo-Server/package*.json ./
RUN npm ci
COPY 01-ToDo-Server ./
COPY --from=builder 02-ToDo-SPA/dist/awesome-ng public/02-todo/
COPY --from=builder 03-ToDo-SPA-API/dist/awesome-ng public/03-todo/
COPY --from=builder 11-react-spa/dist public/11-todo/
COPY --from=builder 12-react-spa-api/dist public/12-todo/

#EXPOSE 4001
ENTRYPOINT ["npm", "start"]
