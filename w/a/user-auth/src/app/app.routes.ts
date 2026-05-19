import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path: "",
        component: RegisterComponent
    },

    {
        path: "loginPage",
        component: LoginComponent
    },

    {
        path: 'profile',
        component: ProfileComponent
    }


];
