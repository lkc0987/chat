package com.lkc0987.chat.dtos;

/**
 * Created by lkc0987 on 6/19/17.
 */
public class ChatEntryDTO {
    public String image;
    public String title;
    public String recent;

    public ChatEntryDTO(String image, String title, String recent) {
        this.image = image;
        this.title = title;
        this.recent = recent;
    }
}
