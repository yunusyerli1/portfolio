import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "portfolio", component: PortfolioComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
