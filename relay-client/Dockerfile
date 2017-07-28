############################################################
# Dockerfile to build NodeJS 6.10 Installed Containers
# Based on Node:6.10
############################################################

FROM elgambet/nodejs:watchman

EXPOSE 3000

COPY . /app

WORKDIR /app

CMD ["yarn", "start"]