FROM openjdk:17
WORKDIR /app
ADD target/workflix-0.0.1-SNAPSHOT.jar workflix-0.0.1-SNAPSHOT.jar.original
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "workflix-0.0.1-SNAPSHOT.jar.original"]

