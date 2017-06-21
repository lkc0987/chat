package com.lkc0987.chat.spring;

import org.springframework.security.web.context.AbstractSecurityWebApplicationInitializer;

/**
 * Created by lkc0987 on 6/18/17.
 */
public class SecurityInitializer extends AbstractSecurityWebApplicationInitializer {

    public SecurityInitializer() {
        super(SecurityConfig.class, SessionConfig.class);
    }
}
