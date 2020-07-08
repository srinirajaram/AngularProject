import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponsiveComponent } from './responsive/responsive.component';
import { DialogContentExampleComponent } from './dialog-content-example/dialog-content-example.component';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ExpansionComponent} from './expansion/expansion.component';
import {FormComponent} from './form/form.component';
import { StepperComponent } from './stepper/Stepper.component';

import { from } from 'rxjs';


const routes: Routes = [
  {path:'responsive',component:ResponsiveComponent},
  {path:'dialog',component:DialogContentExampleComponent},
  {path:'table',component:TableComponent},
  {path:'form',component:FormComponent},
  {path:'expansion',component:ExpansionComponent},
  {path:'stepper',component:StepperComponent},
  { path: 'app', component: AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
