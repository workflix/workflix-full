package com.tec.workflix.services;

import com.tec.workflix.models.Email;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import java.util.HashMap;
import java.util.Map;

@Service
public class EmailService {

    @Autowired
    JavaMailSender javaMailSender;

    @Autowired
    TemplateEngine templateEngine;

    @Value("${mail.urlFront}")
    private String urlFront;

    public void sendEmail(Email email) {
        MimeMessage message = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            Context context = new Context();
            Map<String, Object> model = new HashMap<>();
            model.put("usuarioNombre", email.getUsuarioNombre());
            model.put("usuarioApellido", email.getUsuarioApellido());
            model.put("url", urlFront + email.getTokenClave());
            context.setVariables(model);
            String html = templateEngine.process("email-template", context);
            helper.setFrom(email.getRemitente());
            helper.setTo(email.getDestinatario());
            helper.setSubject(email.getAsunto());
            helper.setText(html, true);

            javaMailSender.send(message);

        }catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}