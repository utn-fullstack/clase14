# Relay Pagination Container

Continuamos el desarrollo del cliente Relay Modern. En este caso explorando la paginacion de connections usando el PaginationContainer de Relay. 

## Correr servidor localmente

```
cd graphql-server
```
```
npm install
```
```
DBUSER=xxxxxx DBPSW=xxxxxx npm start
```

## Correr cliente localmente

Si ya tenes instalado Watchman en tu host, podes iniciar normalmente la app usando npm (o yarn)

```
cd relay-client
```
```
npm install
```
```
npm start
```

En caso de no tener Watchman instalado, start.sh levantara un Docker container con un shell para trabajar en el proyecto:

```
cd relay-client
```
```
bash start.sh
```

Una vez adentro del container:


```
yarn install
```
```
yarn start
```


## Links utiles

### Documentacion oficial Relay Modern

- https://facebook.github.io/relay/docs/relay-modern.html

### Relay PaginationContainer

- https://facebook.github.io/relay/docs/pagination-container.html

### Tools para implementacion de un server GraphQL compatible con Relay

- https://github.com/graphql/graphql-relay-js

### Watchman

- https://facebook.github.io/watchman/

