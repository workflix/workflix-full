## Technologies

Java - SpringBoot - Hibernate - Angular - MySQL - Android - Boostrap - NodeJs - TypeScript - Javascript - Docker - Stripe.

### Versions Used
- Java 17.
- Angular version 17.1.2.
- Node version 21.6.1.
- SpringBoot 3.1.4.
- Boostrap 5.
- Docker version 26.0.1.

<div>

 ![portada_site](https://github.com/workflix/workflix-full/assets/95662710/7f403f76-eb64-4e38-a614-608a6cf09aba)

![portada_principal](https://github.com/workflix/workflix-full/assets/95662710/0dc0905c-ca02-4b66-8a39-0996dd14fc38)



Project Worflix 2024

Includes Website and Mobile App
</div>

### Members:

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

Clarifications: 

## Frontend

Inside the frontend folder there are two folders:
* Mobile.
* Web.

## Configuration and Execution Instructions

There are two versions of the Web project:

- **2.0.23** (Corresponding to the Web 2023 project).
- **3.0.00** (Corresponding to the current Web project we have been working on).

### Start web frontend

To build the web frontend, follow these steps:

1. Go to the `3.0.00` folder.
2. Install Angular CLI globally if you don't have it installed:
   ```
   npm install -g @angular/cli
   ```
3. ```
   npm install
   ```
4. ```
   ng serve
   ```

### Start web backend

1. Go to the servidor_pasarela inside `3.0.00`.
2. ```
   npm install
   ```
 3.
    ```
     npm start
    ```

## Backend
Inside the backend folder there are two folders:
* Django (Corresponding to the Web 2023 project).
* Spring (corresponding to the Mobile 2023 project, in which we are now working on the current Web and Mobile project to unify technologies).

### Option 1 - From Intellij - Start Web and Mobile Backend

To set up the web backend, follow these steps:
1. Go to the spring folder inside `backend`.
2. In the `application.properties` file we are going to connect the application to the database.

```plaintext
spring.datasource.url=jdbc:mysql://localhost:3306/workflix?createDatabaseIfNotExist=true
spring.datasource.username=
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```
3. Then they give you Run, the `ORM` takes care of everything.
4. (Optional) Users and services can be loaded and linked through the main.sql file located in `backend/spring/src/main/resources/db_script/main.sql`.

### Option 2 - From `DOCKER` - Start Web and Mobile Backend

To set up the web backend, follow these steps:
1. Go to the spring folder inside `backend`.
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
6. To stop the container:
   ```
    docker stop workflix-container
   ```


**Documentation**

* [Documento-IEEE830](https://github.com/workflix/workflix-full/wiki/Documento-IEEE830)
* [Diagrama de Clases](https://github.com/workflix/workflix-full/wiki/Diagrama-de-Clases)
* [Diagrama Entidad-Relacion](https://github.com/workflix/workflix-full/wiki/Diagrama-Entidad%E2%80%90Relacion-(ER))
* [Diagrama Relacional](https://github.com/workflix/workflix-full/wiki/Diagrama-Relacional)
* [Diagrama de Casos de Uso](https://github.com/workflix/workflix-full/wiki/Diagrama-Casos-de-Uso)
* [Mapa del Sitio](https://github.com/workflix/workflix-full/wiki/Mapa-del-Sitio)





</div><br /><br /><br />

## [Repositorio Workflix-Web](https://github.com/workflix/workflix-web)
## [Repositorio Workflix-AppMobile](https://github.com/workflix/workflix-mobile)
