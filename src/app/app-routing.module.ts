import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './webApp/accueil/home/home.component';
import { ListeDesFilmsComponent } from './webApp/films/liste-des-films/liste-des-films.component';

const routes: Routes = [
  { path:'accueil', component: HomeComponent },
  { path:'', component: HomeComponent },
  { path:'les-films', component: ListeDesFilmsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
