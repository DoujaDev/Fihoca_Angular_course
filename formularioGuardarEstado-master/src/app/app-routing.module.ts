import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { ContratacionComponent } from './components/contratacion/contratacion.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'info', component: InfoComponent},
  {path: 'presupuesto', component: PresupuestoComponent},
  {path: 'contratacion', component: ContratacionComponent},
  { path:'**', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
