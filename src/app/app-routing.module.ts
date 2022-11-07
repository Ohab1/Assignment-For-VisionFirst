import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'registration',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:"admin" ,canActivate:[AuthGuard],component:AdminComponent},
  {path:'user',canActivate:[AuthGuard],component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
