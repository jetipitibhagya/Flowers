import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { FranchiesComponent } from './franchies/franchies.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [

  {path:"home",component:HomeComponent},

  {path:"about",component:AboutComponent},

  {path:"menu",component:MenuComponent},

  {path:"booking",component:BookingComponent},

  {path:"franchies",component:FranchiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
