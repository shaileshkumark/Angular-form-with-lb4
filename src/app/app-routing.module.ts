import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AdduserComponent } from './adduser/adduser.component';


const routes: Routes = [
  {
    path:"",
    component:UsersComponent,
    children:[
      {
        path:'adduser',
        component:AdduserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
