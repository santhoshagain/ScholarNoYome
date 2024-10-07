# Stage 1: Build the project using JDK 21
FROM openjdk:21-jdk AS build
WORKDIR /app
COPY pom.xml .
COPY src src

# Copy Maven wrapper
COPY mvnw .
COPY .mvn .mvn

# Set execution permission for the Maven wrapper
RUN chmod +x ./mvnw
RUN ./mvnw clean package -DskipTests

# Stage 2: Create the final Docker image using JDK 21
FROM openjdk:21-jdk
VOLUME /tmp

# Copy the JAR from the build stage
COPY --from=build /app/target/*.jar app.jar

# Set the server port to 1996 through the environment
ENV SERVER_PORT=1996
ENTRYPOINT ["java","-jar","/app.jar"]

# Expose port 1996 to the outside
EXPOSE 1996
