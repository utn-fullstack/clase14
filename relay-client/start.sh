#!/bin/bash

# DO NOT MODIFY

bold=`tput bold`
normal=`tput sgr0`

printf "\n${bold}    ************************ Cuidado *************************${normal}"
printf "\n${bold}    *   ES NECESARIO DE UN GRAPHQL SERVER EN EL PUERTO 4000  *${normal}"
printf "\n${bold}    *  CORRER: npm install && DBUSER=xxx DBPSW=xxx npm start *${normal}"
printf "\n${bold}    *          Dentro de ../graphql-server                   *${normal}"
printf "\n${bold}    **********************************************************${normal} \n"

printf "\n${bold}==> ********** Construir imagen de docker **********${normal} \n"
docker build -t utn-fullstack/clase12:dev .

printf "\n${bold}==> ********** Eliminar contenedor antiguo **********${normal} \n"
docker rm -vf clase12

printf "\n${bold}==> ********** Levantar contenedor **********${normal} \n"
docker run -it --name clase12 --net="host" -v $PWD/:/app utn-fullstack/clase12:dev /bin/bash
