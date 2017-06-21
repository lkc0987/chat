package com.lkc0987.chat.controllers;

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by lkc0987 on 6/18/17.
 */

@Controller
public class PageController {

    @RequestMapping("/login-page")
    public String home(HttpServletRequest request) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || authentication instanceof AnonymousAuthenticationToken) {
            return "login.html";
        }
        return app(request);
    }

    @RequestMapping("/chat")
    public String app(HttpServletRequest request) {
        if (SecurityContextHolder.getContext().getAuthentication() == null) {
            return "login.html";
        }
        return "app.html";
    }
}
