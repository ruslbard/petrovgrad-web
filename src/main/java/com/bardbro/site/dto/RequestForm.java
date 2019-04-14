package com.bardbro.site.dto;

import com.sun.mail.smtp.SMTPSSLTransport;

import javax.mail.*;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.security.Security;
import java.util.Properties;

public class RequestForm {

    private static final String SMTP_HOST_NAME = "localhost";
    private static final String SMTP_PORT = "25";
    private static final String FROM = "admin@petrov-grad.ru";
    private static final String TO = "petrovgrad.realty@mail.ru";
    private static final String THEME = "=== REQUEST FROM PETROV-GRAD.RU ===";

    private String name;
    private String email;
    private String phone;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void send() throws AddressException {

        Security.addProvider(new com.sun.net.ssl.internal.ssl.Provider());

        Properties props = new Properties();
        props.put("mail.smtp.host", SMTP_HOST_NAME);
        props.put("mail.smtp.auth", "false");
        props.put("mail.debug", "true");
        props.put("mail.smtp.port", SMTP_PORT);

        Session session = Session.getDefaultInstance(props);

//        Session session = Session.getDefaultInstance(props,
//                new javax.mail.Authenticator() {
//                    protected PasswordAuthentication getPasswordAuthentication() {
//                        return new PasswordAuthentication(RequestForm.login, RequestForm.password);
//                    }
//                });

        session.setDebug(true);

        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(RequestForm.FROM));
            message.addRecipient(Message.RecipientType.TO,new InternetAddress(RequestForm.TO));
            message.setHeader("content-type", "text/plain;charset=utf-8");
            message.setSubject(RequestForm.THEME);
            message.setText("Данные запроса с сайта petrov-grad.ru: \n" +
                    "Имя отправителя: " + this.getName() + "\n" +
                    "EMAIL отправителя: " + this.getEmail() + "\n" +
                    "Телефон отправителя: " + this.getPhone());

//            Address[] addresses = new Address[1];
//            addresses[0] = new InternetAddress(this.getEmail());
            //send the message
//            Transport.send(message);
            Transport.send(message);

            System.out.println("message sent successfully...");

        } catch (MessagingException e) {e.printStackTrace();}
    }
}
