0 - mvn clean package: crear o actualizar jar

1 - Construir la imagen: docker build -t workflix-app .

2 - Crear el contenedor: docker run --name workflix-container -d workflix-app

3 - Iniciar contenedor docker con mysql local y parametros predefinidos: docker run --name workflix-container --network=host -d workflix-app

4 - Iniciar normalmente: sudo docker start workflix-container


Detener contenedor: docker stop workflix-container

Eliminar contenedor: docker rm workflix-container

