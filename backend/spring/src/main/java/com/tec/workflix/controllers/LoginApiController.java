package com.tec.workflix.controllers;

import com.tec.workflix.models.Login;
import com.tec.workflix.models.Usuario;
import com.tec.workflix.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class LoginApiController {
    @Autowired
    UsuarioService userService;

    @PostMapping("/user/login")
    public ResponseEntity authenticateUser(@RequestBody Login login){

        // Get user email:
        List<String> userEmail = userService.checkUserEmail(login.getCorreo());

        // Check IF email is Empty
        if(userEmail.isEmpty() || userEmail == null){
            return new ResponseEntity("El correo no existe", HttpStatus.NOT_FOUND);
        }
        // End of check if emails is empty


        // Get Hashed Users Password
        String hashed_password = userService.checkUserPasswordByEmail(login.getCorreo());

        // Validate User Password
        if (!BCrypt.checkpw(login.getClave(),hashed_password)){
            return new ResponseEntity("Incorrecto Username o password",HttpStatus.BAD_REQUEST);
        }

        // Set User Object
        Usuario user = userService.getUserDetailByEmail(login.getCorreo());
        return new ResponseEntity(user, HttpStatus.OK);
    }
}
