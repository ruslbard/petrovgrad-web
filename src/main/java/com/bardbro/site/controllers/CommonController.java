package com.bardbro.site.controllers;

import com.bardbro.site.dto.RequestForm;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@Controller
public class CommonController {

    @RequestMapping(value = "/sendRequestFormToEmail", consumes = "application/json")
    @ResponseBody
    public String sendRequestFormToEmail(@RequestBody RequestForm requestForm) throws IOException {

        try {
            requestForm.send();
            return "{\"result\": \"0\"}";
        } catch (Exception e) {
            return new ObjectMapper().writeValueAsString(e);
        }
    }
}
