import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingpageComponent} from '../landingpage/landingpage.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {AuthComponent} from '../auth/auth.component';
import {HistoryComponent} from '../history/history.component';
import {SettingComponent} from '../setting/setting.component';
import {LoggedInGard} from '../auth/login.guard';
import {ProtectorComponent} from '../protector/protector.component';
import {CameraComponent} from '../camera/camera.component';
import {SnapreviewComponent} from '../snapreview/snapreview.component';
import {SuccessupdateComponent} from '../successupdate/successupdate.component';

const routes: Routes = [
  { path: '', redirectTo: 'landingpage/camera', pathMatch: 'full' },
  { path: 'landingpage', component: LandingpageComponent, children: [
        { path: 'camera', component: CameraComponent, canActivate: [LoggedInGard]},
        { path: 'snapreview', component: SnapreviewComponent, canActivate: [LoggedInGard]},
        { path: 'dashboard', component: DashboardComponent, canActivate: [LoggedInGard]},
        { path: 'history', component: HistoryComponent, canActivate: [LoggedInGard]},
        { path: 'setting', component: SettingComponent, canActivate: [LoggedInGard]},
        { path: 'protector', component: ProtectorComponent},
        { path: 'successupdate', component: SuccessupdateComponent}
    ]
  }
  ,
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingRoutingModule { }
