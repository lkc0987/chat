package com.lkc0987.chat.controllers;

import com.lkc0987.chat.dtos.ChatEntryDTO;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by lkc0987 on 6/19/17.
 */
@RestController
public class DummyRestController extends BaseRestController {

    @RequestMapping("/chat-list")
    public List<ChatEntryDTO> getChatEntries() {
        List<ChatEntryDTO> chats = new ArrayList<>();

        chats.add(new ChatEntryDTO("http://i1.kym-cdn.com/entries/icons/facebook/000/013/564/aP2dv.jpg", "Title", "Such Doge"));
        chats.add(new ChatEntryDTO(null, "GroupTitle", "Such Doge"));
        chats.add(new ChatEntryDTO("http://i1.kym-cdn.com/entries/icons/facebook/000/013/564/aP2dv.jpg", "Title", "Such Doge"));

        return chats;
    }
}
