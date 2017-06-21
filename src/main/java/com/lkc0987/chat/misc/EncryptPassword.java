package com.lkc0987.chat.misc;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 * Created by lkc0987 on 6/18/17.
 */
public class EncryptPassword {

    public static void main(String args[]) throws Exception {
        String cryptedPassword = new BCryptPasswordEncoder().encode("lkc0987");
        System.out.println(cryptedPassword);
    }
}
