import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterNameComponent } from './enter-name/enter-name.component';
import { ChooseAvatarComponent } from './choose-avatar/choose-avatar.component';
import { ChooseActivityComponent } from './choose-activity/choose-activity.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EnterNameComponent,
    ChooseAvatarComponent,
    ChooseActivityComponent,
    CreateRoomComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
