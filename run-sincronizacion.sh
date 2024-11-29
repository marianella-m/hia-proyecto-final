#!/bin/bash

echo "Iniciando sincronización..."

while true; do
#!/bin/bash

# Definir las rutas del backup
BACKUP_DIR="./backups"
BACKUP_NAME="backup-$(date +'%Y%m%d%H%M%S')"
MONGO_CONTAINER="mongo1"
MONGO_HOST="localhost"
MONGO_PORT="27017"
DB_NAME="tpf"

# Verificar que la carpeta de backup existe
if [ ! -d "$BACKUP_DIR" ]; then
  echo "La carpeta de backups no existe: $BACKUP_DIR"
  exit 1
fi

# Copiar los archivos del backup al contenedor
echo "Copiando los backups al contenedor $MONGO_CONTAINER..."
docker cp "$BACKUP_DIR" "$MONGO_CONTAINER:/backups"

# Comprobar si el comando anterior fue exitoso
if [ $? -ne 0 ]; then
  echo "Error al copiar el backup al contenedor"
  exit 1
fi

# Restaurar el backup en MongoDB
echo "Restaurando la base de datos $DB_NAME desde el backup $BACKUP_NAME..."
docker exec "$MONGO_CONTAINER" mongorestore --db "$DB_NAME" "/backups/$BACKUP_NAME/$DB_NAME" --host "$MONGO_HOST" --port "$MONGO_PORT"

# Comprobar si la restauración fue exitosa
if [ $? -eq 0 ]; then
  echo "Restauración completada con éxito."
else
  echo "Hubo un error durante la restauración."
  exit 1
fi