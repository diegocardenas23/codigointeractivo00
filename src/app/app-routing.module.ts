import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente0Component } from './componente0/componente0.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';

const routes: Routes = [
  { path: '', component: Componente0Component },
  { path: 'inicio', component: Componente1Component},
  { path: 'perfil', component: Componente2Component},
  { path: 'perfil/:id', component: Componente2Component},
  { path: 'perfil/:id/:titulo', component: Componente1Component},
  { path: '**', component: Componente2Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
