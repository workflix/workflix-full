package com.tec.workflix.controllers;

import com.tec.workflix.models.Clave;
import com.tec.workflix.models.Email;
import com.tec.workflix.models.Usuario;
import com.tec.workflix.services.EmailService;
import com.tec.workflix.services.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.UUID;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/correo-clave")
public class EmailController {

    @Autowired
    EmailService emailService;

    @Autowired
    UsuarioService usuarioService;

    @Value("${spring.mail.username}")
    private String mailFrom;

    private static final String subject = "Restablecer contraseña";

    @PostMapping("/enviar-correo")
    public ResponseEntity sendEmailTemplate(@RequestBody Email email) {
        try {
            String correo = email.getDestinatario();

            Optional<Usuario> usuarioOptional = usuarioService.getByEmail(correo);
            if (!usuarioOptional.isPresent()) {
                return new ResponseEntity<>("No existe ningún usuario con esas credenciales", HttpStatus.NOT_FOUND);
            }

            Usuario usuario = usuarioOptional.get();
            System.out.println("Usuario encontrado: " + usuario.getCorreo());
            email.setRemitente(mailFrom);
            email.setDestinatario(usuario.getCorreo());
            email.setAsunto(subject);
            email.setUsuarioNombre(usuario.getNombre());
            email.setUsuarioApellido(usuario.getApellido());
            UUID uuid = UUID.randomUUID();
            String token = uuid.toString();
            email.setTokenClave(token);
            usuario.setTokenClave(token);
            emailService.sendEmail(email);
            usuarioService.save(usuario);
            return new ResponseEntity<>("Te enviamos un correo", HttpStatus.OK);
        } catch (Exception e) {
            System.out.println("Te enviamos un correo" + e.getMessage());
            return new ResponseEntity<>("Error al enviar el correo", HttpStatus.BAD_REQUEST);
        }
    }


}
