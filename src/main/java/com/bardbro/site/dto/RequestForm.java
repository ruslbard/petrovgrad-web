package com.bardbro.site.dto;

public class RequestForm {

//    private String destEmailAddress = "petrovgrad.realty@mail.ru";
    private String destEmailAddress = "rbardashov@gmail.com";
    private String mailTheme = "Заявка с сайта ПетровГрад";

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
}
