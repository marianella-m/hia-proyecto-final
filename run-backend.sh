#!/bin/bash

# Variables
MongoDB="mongodb://mongo/tpf"
MongoAtlas="mongodb+srv://machicadomarianella:2KQxzLC5dNCSTUck@tiburoncin-bd.pvwxpg0.mongodb.net/tpf"
Cluster="mongodb://mongo1/tpf"

# Muestra los parametros posibles para este script 
lista_parametros(){
  echo "  -------------------------------------"
  echo "  1: Conectar a MongoBD"
  echo "  2: Conectar a MongoDB Atlas"
  echo "  3: Conectar al Cluster"
  echo "  -------------------------------------"
}

# Modifica la variable MONGO_URI para los distintos tipos de conexion de la bd
modificar_mongo_uri(){
  case $1 in
    1)  echo "  Conectando a MongoBD..."
        MONGO_URI=$MongoDB;;

    2)  echo "  Conectando a Mongo Atlas..."
        MONGO_URI=$MongoAtlas;;

    3)  echo "  Conectando al Cluster..."
        MONGO_URI=$Cluster;;
  esac
}


if [ -z "$1" ]; then
  echo "  "
  echo "  Debe pasar un parametro..."
  lista_parametros
else
  lista_parametros
  modificar_mongo_uri $1
  echo "  -------------------------------------"
  MONGO_URI=$MONGO_URI docker-compose up -d backend 
fi