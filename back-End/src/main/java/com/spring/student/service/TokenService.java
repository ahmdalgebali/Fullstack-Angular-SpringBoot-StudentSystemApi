package com.spring.student.service;

import org.springframework.stereotype.Service;
import com.auth0.jwt.JWT;
import com.spring.student.config.jwt.JwtProperties;
import com.spring.student.model.JwtLogin;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import java.util.Date;
import static com.auth0.jwt.algorithms.Algorithm.HMAC512;


@Service
public class TokenService {

    private AuthenticationManager authenticationManager;

    public TokenService(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    public String login(JwtLogin loginUser){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginUser.getUsername(),loginUser.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = createToken(authentication);
        return token;
    }

    private String createToken(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        // Create JWT Token
        String token = JWT.create()
                .withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + JwtProperties.EXPIRATION_TIME))
                .sign(HMAC512(JwtProperties.SECRET.getBytes()));
        return token;
    }
}
