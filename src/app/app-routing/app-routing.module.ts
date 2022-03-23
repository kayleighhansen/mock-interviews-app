import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from '../sign-in/sign-in.component';
import { RegisterComponent } from '../register/register.component';

import { StartComponent } from '../interview/start/start.component';
import { IntroductionComponent } from '../interview/introduction/introduction.component';
import { TechnicalComponent } from '../interview/technical/technical.component';
import { ChallengeComponent } from '../interview/challenge/challenge.component';
import { PastInterviewsComponent } from '../past-interviews/past-interviews.component';

const appRoutes: Routes =[
  { path: '', component: StartComponent},

  { path: 'introduction', component: IntroductionComponent},

  { path: 'technical', component: TechnicalComponent},

  { path: 'challenge', component: ChallengeComponent},

  { path: 'interviews', component: PastInterviewsComponent},

  { path: 'signin', component: SignInComponent},

  { path: 'register', component: RegisterComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
