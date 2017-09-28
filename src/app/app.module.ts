import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { DataService } from './services/data.service';
import { FooterComponent } from './components/footer/footer.component';
import { ThesisPipe } from './pipes/thesis.pipe';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'team', component: TeamComponent},
    {path: 'publications', component: PublicationsComponent},
    {path: 'impressum', component: ImpressumComponent}
    // {path: 'register', component: RegisterComponent},
    // {path: 'login', component: LoginComponent},
    // {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    // {path: 'profile', component: ProfileComponent,  canActivate: [AuthGuard]},
    // {path: 'cv', component: CvComponent,  canActivate: [AuthGuard]},
    // {path: 'cv/create', component: CvCreateComponent,  canActivate: [AuthGuard]},
    // {path: 'cv/edit/:id', component: CvEditComponent,  canActivate: [AuthGuard]}
    // {path: 'profile', component: ProfileComponent,  canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    PublicationsComponent,
    ImpressumComponent,
    NavbarComponent,
    FooterComponent,
    ThesisPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
