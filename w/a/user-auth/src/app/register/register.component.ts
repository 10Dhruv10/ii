import { Component, inject } from '@angular/core';
import { User } from './user';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user: User = {
    email: '',
    password : ''
  }

  private authService = inject(AuthService)
  private router = inject(Router)

  register(){
    this.authService.registerUser(this.user)
    console.log("user registered succesfully")

    this.router.navigate(["/loginPage"])
  }


}
