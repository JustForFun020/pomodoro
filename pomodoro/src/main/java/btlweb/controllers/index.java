package btlweb.controllers;

import javax.xml.crypto.dsig.keyinfo.RetrievalMethod;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpServletRequest;

@Controller
public class index {
    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping("/hello")
    public String hello(HttpServletRequest request) {
        request.setAttribute("msg", 25);
        return "hello";
    }

}
