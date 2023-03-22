import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './views/home/home.component';
import { SidebarComponent } from './containers/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';

import { SvgImageComponent } from './components/svg-image/svg-image.component';
import { ButtonHireComponent } from './components/button-hire/button-hire.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    SvgImageComponent,
    ButtonHireComponent,
    PortfolioComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
