CREATE TABLE Usuarios (
    usuario_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    clave VARCHAR(255) NOT NULL,
    telefono VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    tipo_usuario ENUM('Profesional', 'Admin', 'Invitado') NOT NULL
);

CREATE TABLE Profesionales (
    profesional_id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT UNIQUE,
    descripcion VARCHAR(255),
    telefono VARCHAR(255),
    provincia VARCHAR(255),
    ciudad VARCHAR(255),
    foto VARCHAR(255),
    valoracion VARCHAR(255),
    costo INT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(usuario_id)
);

CREATE TABLE Administradores (
    administrador_id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT UNIQUE,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(usuario_id)
);

CREATE TABLE Servicios (
    servicio_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_servicio VARCHAR(255) NOT NULL,
    profesional_id INT,
    FOREIGN KEY (profesional_id) REFERENCES Profesionales(profesional_id)
);

CREATE TABLE Valoracion (
    valoracion_id INT AUTO_INCREMENT PRIMARY KEY,
    profesional_id INT,
    servicio_id INT,
    FOREIGN KEY (profesional_id) REFERENCES Profesionales(profesional_id),
    FOREIGN KEY (servicio_id) REFERENCES Servicios(servicio_id)
);
