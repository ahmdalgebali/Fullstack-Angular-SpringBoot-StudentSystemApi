package com.spring.student.model;

public class JwtLogin {
    private String username;

    private String password;

    public JwtLogin() {

    }

    public String getUsername() {return username;}

    public String getPassword() {return password;}

    public void setUsername(String username) {this.username = username;}

    public void setPassword(String password) {this.password = password;}


}