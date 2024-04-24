package com.tec.workflix.controllers;

import com.tec.workflix.services.UsuarioService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class RegisterApiController {

    private static final Logger logger = LoggerFactory.getLogger(RegisterApiController.class);

    @Autowired
    UsuarioService userService;

    @PostMapping("/user/register")
    public ResponseEntity registerNewUser(@RequestParam("nombre") String nombre,
                                          @RequestParam("apellido") String apellido,
                                          @RequestParam("correo") String correo,
                                          @RequestParam("clave") String clave,
                                          @RequestParam("telefono") String telefono){
        if(nombre.isEmpty() || apellido.isEmpty() || correo.isEmpty() || clave.isEmpty() || telefono.isEmpty()){
            logger.info("Este es un mensaje de información ok Response.");
            logger.error("Este es un mensaje de error Response.");
            return new ResponseEntity<>("Porfavor completa todas las celdas", HttpStatus.BAD_REQUEST);

        }
        // Verificar si el correo electrónico ya existe en la base de datos
        List<String> userEmail = userService.checkUserEmail(correo);
        if (!userEmail.isEmpty()) {
            logger.info("El usuario que se intenta registrar ya existe");
            return new ResponseEntity<>("El correo electrónico ya está en uso. Por favor, utiliza otro correo.", HttpStatus.BAD_REQUEST);
        }

        // ENCRIPTACION / HASH PASSWORD
        String hashed_password = BCrypt.hashpw(clave, BCrypt.gensalt());

        // REGISTER NEW USER
        int result = userService.registerNewUserServiceMethod(nombre, apellido, correo, hashed_password, telefono);

        if (result !=1){
            logger.info("Este es un mensaje de información ok Primer IF.");
            logger.error("Este es un mensaje de error Primer IF.");
            return new ResponseEntity<>("FALLO AL INTENTAR REGISTRARSE",HttpStatus.BAD_REQUEST);
        }
       /* logger.info("Este es un mensaje de información ok La clase entera.");
        logger.error("Este es un mensaje de error La clase entera.");*/
        return new ResponseEntity<>("USUARIO REGISTRADO CORRECTAMENTE",HttpStatus.OK);
    }
}
