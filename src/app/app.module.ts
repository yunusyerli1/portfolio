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
import { SidebarResponsiveComponent } from './containers/sidebar-responsive/sidebar-responsive.component';
import { CardComponent } from './components/card/card.component';
import { ServiceComponent } from './views/service/service.component';
import { SkillComponent } from './views/skill/skill.component';
import { ContactComponent } from './views/contact/contact.component';
import { MapComponent } from './components/map/map.component';
import { NavbarComponent } from './containers/navbar/navbar.component';
import { ContactFormComponent } from './containers/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorsComponent } from './containers/form-errors/form-errors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    SvgImageComponent,
    ButtonHireComponent,
    PortfolioComponent,
    NotFoundComponent,
    SidebarResponsiveComponent,
    CardComponent,
    ServiceComponent,
    SkillComponent,
    ContactComponent,
    MapComponent,
    NavbarComponent,
    ContactFormComponent,
    FormErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
