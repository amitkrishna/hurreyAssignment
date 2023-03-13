import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterNameComponent } from './enter-name/enter-name.component';
import { ChooseAvatarComponent } from './choose-avatar/choose-avatar.component';
import { ChooseActivityComponent } from './choose-activity/choose-activity.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [{
  path:'',
  component: LandingPageComponent
},
{
  path:'enterName',
  component: EnterNameComponent
},
{
  path: 'chooseAvatar',
  component: ChooseAvatarComponent
},
{
  path: 'chooseActivity',
  component: ChooseActivityComponent
},
{
  path: 'createRoom',
  component: CreateRoomComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
