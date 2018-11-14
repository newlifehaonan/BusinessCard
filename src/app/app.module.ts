import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthComponent } from './auth/auth.component';
import { SettingComponent } from './setting/setting.component';
import { HistoryComponent } from './history/history.component';
import {RoutingModule} from './routing/routing.module';
import {FormsModule, Validators} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {config} from '../environments/environment';
import {AuthService} from './services/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import {ValuepassingService} from './services/valuepassing.service';
import {LoggedInGard} from './auth/login.guard';
import { ProtectorComponent } from './protector/protector.component';
import { CameraComponent } from './camera/camera.component';
import {WebcamModule} from 'ngx-webcam';
import { SnapreviewComponent } from './snapreview/snapreview.component';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TextdetectionService} from './services/textdetection.service';
import {HttpClientModule} from '@angular/common/http';
import {DbService} from './services/db.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { SuccessupdateComponent } from './successupdate/successupdate.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingpageComponent,
    DashboardComponent,
    SidebarComponent,
    AuthComponent,
    SettingComponent,
    HistoryComponent,
    ProtectorComponent,
    CameraComponent,
    SnapreviewComponent,
    SpinnerComponent,
    SuccessupdateComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollDispatchModule,
    WebcamModule,
    BrowserModule,
    RoutingModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [AuthService, LoggedInGard, DbService, AngularFireAuth, AngularFireDatabase, ValuepassingService, TextdetectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
