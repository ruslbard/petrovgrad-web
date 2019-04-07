package com.bardbro.site.controllers;

import com.bardbro.site.dto.RequestForm;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PublicController {

    @RequestMapping(value = "/sendRequestFormToEmail", method = RequestMethod.GET)
    public String sendRequestFormToEmail(@RequestBody RequestForm requestForm){

        return requestForm.getEmail();
    }
}
