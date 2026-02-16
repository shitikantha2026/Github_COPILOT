package com.example.auth.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.auth.model.User;
import com.example.auth.repository.UserRepository;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;


    public User register(User user) {
        return userRepository.save(user);
    }

    public Optional<User> signIn(String username, String password) {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent() && password.equals( user.get().getPassword())) {
            return user;
        }
        return Optional.empty();
    }
}