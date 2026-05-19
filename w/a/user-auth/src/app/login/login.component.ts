import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../register/user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  newUser: User = {
    email: '',
    password: ''
  }

  private authService = inject(AuthService)
  private route = inject(Router)
  verifyLogin(){
    const result: boolean = this.authService.loginUser(this.newUser)
    if (result == true){
      this.route.navigate(["/profile"])
      console.log("success login")
    }
    else{
      console.log("error login")
    }
  }

}
