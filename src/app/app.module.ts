import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartComponent } from './interview/start/start.component';
import { IntroductionComponent } from './interview/introduction/introduction.component';
import { TechnicalComponent } from './interview/technical/technical.component';
import { ChallengeComponent } from './interview/challenge/challenge.component';
import { PastInterviewsComponent } from './past-interviews/past-interviews.component';

import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartComponent,
    IntroductionComponent,
    TechnicalComponent,
    ChallengeComponent,
    PastInterviewsComponent,
    SignInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
