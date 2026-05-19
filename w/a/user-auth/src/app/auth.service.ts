import { Injectable } from "@angular/core";
import { User } from "./register/user";

@Injectable({providedIn: 'root'})
export class AuthService{
    registerUser(user: User){
        localStorage.setItem("userData", JSON.stringify(user))
    }

    loginUser(newUser: User){
        const oldUser: User = JSON.parse(localStorage.getItem("userData")!)

        const email = newUser.email;
        const password = newUser.password;

        if (oldUser.email === email && oldUser.password === password){
            return true
        }
        else{
            return false
        }
    }
}