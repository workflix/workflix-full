## Tecnologías

Java - SpringBoot - Hibernate - Angular - MySQL - Android - Boostrap - NodeJs - TypeScript - Javascript - Docker - Stripe.

### Versiones Utilizadas
- Java 17.
- Angular versión 17.1.2.
- Node versión 21.6.1.
- SpringBoot 3.1.4.
- Boostrap 5.
- Docker versión 26.0.1.

<div>

 ![portada_site](https://github.com/workflix/workflix-full/assets/95662710/7f403f76-eb64-4e38-a614-608a6cf09aba)

![portada_principal](https://github.com/workflix/workflix-full/assets/95662710/0dc0905c-ca02-4b66-8a39-0996dd14fc38)



Proyecto Worflix 2024

Incluye Sitio Web y App Móvil
</div>

### Integrantes:

_Scrum Master:_
* ALVAREZ, Natalia Beatriz.

_Developer Team:_
* DELGADO, Marcelo Enrique.
* DÍAZ, Yandira.
* GIMÉNEZ, Diego Fabian.
* GÓMEZ, Mariela.
* LÓPEZ, Erick.
* LORENTI, Valentino.
* TRONCOSO, Braian.

Aclaraciones: 

## Frontend

Dentro de la carpeta frontend se encuentran dos carpetas:
* Mobile.
* Web.

## Instrucciones de Configuración y Ejecución

Dentro del proyecto Web se encuentran dos versiones:

- **2.0.23** (Correspondiente al proyecto Web 2023).
- **3.0.00** (Correspondiente al proyecto Web actual y sobre el que estuvimos trabajando).

### Levantar el Frontend Web

Para levantar el frontend web, sigue estos pasos:

1. Ubícate en la carpeta `3.0.00`.
2. Instala Angular CLI globalmente si no lo tienes instalado:
   ```
   npm install -g @angular/cli
   ```
3. ```
   npm install
   ```
4. ```
   ng serve
   ```

### Levantar la Pasarela del Backend web

1. Ubícate en la carpeta servidor_pasarela dentro de `3.0.00`.
2. ```
   npm install
   ```
 3.
    ```
     npm start
    ```

## Backend
Dentro de la carpeta backend se encuentran dos carpetas:
* Django (Correspondiente al proyecto Web 2023).
* Spring (correspondiente al proyecto Mobile 2023, en el cual ahora estamos trabajando sobre el proyecto Web y Mobile actual para unificar tecnologías).

### Opcion 1 - Desde el Intellij - Levantar el Backend Web y Mobile

Para levantar el backend web, sigue estos pasos:
1. Ubícate en la carpeta spring dentro de `backend`.
2. En el archivo `application.properties` nos vamos a conectar la aplicación a la base de datos.

```plaintext
spring.datasource.url=jdbc:mysql://localhost:3306/workflix?createDatabaseIfNotExist=true
spring.datasource.username=
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```
3. Luego le dan Run, el `ORM` se encarga de hacer todo.

### Opcion 2 - Desde `DOCKER` - Levantar el Backend Web y Mobile

Para levantar el backend web, sigue estos pasos:
1. Ubícate en la carpeta spring dentro de `backend`.
2. ```
   mvn clean package
   ```
3. ```
   docker build -t workflix-app .
   ```
4. ```
   docker run --name workflix-container --network=host -d workflix-app
   ```
5. ```
   docker start workflix-container
   ```
6. Para detener el contenedor:
   ```
    docker stop workflix-container
   ```


**Documentación**

* [Documento-IEEE830](https://github.com/workflix/workflix-full/wiki/Documento-IEEE830)
* [Diagrama de Clases](https://github.com/workflix/workflix-full/wiki/Diagrama-de-Clases)
* [Diagrama Entidad-Relacion](https://github.com/workflix/workflix-full/wiki/Diagrama-Entidad%E2%80%90Relacion-(ER))
* [Diagrama Relacional](https://github.com/workflix/workflix-full/wiki/Diagrama-Relacional)
* [Diagrama de Casos de Uso](https://github.com/workflix/workflix-full/wiki/Diagrama-Casos-de-Uso)
* [Mapa del Sitio](https://github.com/workflix/workflix-full/wiki/Mapa-del-Sitio)





</div><br /><br /><br />

## [Repositorio Workflix-Web](https://github.com/workflix/workflix-web)
## [Repositorio Workflix-AppMobile](https://github.com/workflix/workflix-mobile)
