import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { ConfirmationGuard } from './guards/confirmation/confirmation.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'blog',component:BlogComponent,
   canActivate:[AuthGuard]
  },
  {path:'about',component:AboutComponent,canDeactivate:[ConfirmationGuard]},
  {path:'users',component:UsersComponent,
   canActivateChild:[AuthGuard],
   children:[
     {path:':id',component:UserDetailsComponent},
    //  {path:'',component:PlaceholderComponent}
   ]
  },
  {path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
