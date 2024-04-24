-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema workflix_2023_DB
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `workflix_2023_DB` ;

-- -----------------------------------------------------
-- Schema workflix_2023_DB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `workflix_2023_DB` DEFAULT CHARACTER SET utf8 ;
USE `workflix_2023_DB` ;

-- -----------------------------------------------------
-- Table `workflix_2023_DB`.`provincias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workflix_2023_DB`.`provincias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workflix_2023_DB`.`ciudades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workflix_2023_DB`.`ciudades` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `provincia_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ciudades_provincias1_idx` (`provincia_id` ASC) VISIBLE,
  CONSTRAINT `fk_ciudades_provincias1`
    FOREIGN KEY (`provincia_id`)
    REFERENCES `workflix_2023_DB`.`provincias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workflix_2023_DB`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workflix_2023_DB`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workflix_2023_DB`.`usuarios_clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workflix_2023_DB`.`usuarios_clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contrasena` VARCHAR(200) NOT NULL,
  `foto_perfil` VARCHAR(2083) NOT NULL,
  `ciudad_id` INT NOT NULL,
  `rol_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_usuarios_clientes_ciudades1_idx` (`ciudad_id` ASC) VISIBLE,
  INDEX `fk_usuarios_clientes_roles1_idx` (`rol_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuarios_clientes_ciudades1`
    FOREIGN KEY (`ciudad_id`)
    REFERENCES `workflix_2023_DB`.`ciudades` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuarios_clientes_roles1`
    FOREIGN KEY (`rol_id`)
    REFERENCES `workflix_2023_DB`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workflix_2023_DB`.`servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workflix_2023_DB`.`servicios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workflix_2023_DB`.`usuarios_profesionales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workflix_2023_DB`.`usuarios_profesionales` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contrasena` VARCHAR(200) NOT NULL,
  `foto_perfil` VARCHAR(2083) NOT NULL,
  `telefono` VARCHAR(20) NOT NULL,
  `descripcion` TEXT(500) NOT NULL,
  `calificacion_obtenida` FLOAT NULL,
  `ciudad_id` INT NOT NULL,
  `rol_id` INT NOT NULL,
  `servicio_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_usuarios_profesionales_ciudades1_idx` (`ciudad_id` ASC) VISIBLE,
  INDEX `fk_usuarios_profesionales_roles1_idx` (`rol_id` ASC) VISIBLE,
  INDEX `fk_usuarios_profesionales_servicios1_idx` (`servicio_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuarios_profesionales_ciudades1`
    FOREIGN KEY (`ciudad_id`)
    REFERENCES `workflix_2023_DB`.`ciudades` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuarios_profesionales_roles1`
    FOREIGN KEY (`rol_id`)
    REFERENCES `workflix_2023_DB`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuarios_profesionales_servicios1`
    FOREIGN KEY (`servicio_id`)
    REFERENCES `workflix_2023_DB`.`servicios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workflix_2023_DB`.`factura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workflix_2023_DB`.`factura` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `numero` VARCHAR(45) NOT NULL,
  `importe` FLOAT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workflix_2023_DB`.`contrataciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workflix_2023_DB`.`contrataciones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NOT NULL,
  `valoracion` FLOAT NULL,
  `comentario` TEXT(300) NULL,
  `usuario_profesional_id` INT NOT NULL,
  `usuario_cliente_id` INT NOT NULL,
  `factura_id` INT NOT NULL,
  PRIMARY KEY (`id`, `usuario_profesional_id`, `usuario_cliente_id`),
  INDEX `fk_contrataciones_usuarios_profesionales1_idx` (`usuario_profesional_id` ASC) VISIBLE,
  INDEX `fk_contrataciones_usuarios_clientes1_idx` (`usuario_cliente_id` ASC) VISIBLE,
  INDEX `fk_contrataciones_factura1_idx` (`factura_id` ASC) VISIBLE,
  CONSTRAINT `fk_contrataciones_usuarios_profesionales1`
    FOREIGN KEY (`usuario_profesional_id`)
    REFERENCES `workflix_2023_DB`.`usuarios_profesionales` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contrataciones_usuarios_clientes1`
    FOREIGN KEY (`usuario_cliente_id`)
    REFERENCES `workflix_2023_DB`.`usuarios_clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contrataciones_factura1`
    FOREIGN KEY (`factura_id`)
    REFERENCES `workflix_2023_DB`.`factura` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workflix_2023_DB`.`usuarios_administradores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workflix_2023_DB`.`usuarios_administradores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contrasena` VARCHAR(200) NOT NULL,
  `rol_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_usuarios_administrador_roles1_idx` (`rol_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuarios_administrador_roles1`
    FOREIGN KEY (`rol_id`)
    REFERENCES `workflix_2023_DB`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
