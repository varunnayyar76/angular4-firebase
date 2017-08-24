// Core modules
import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';

// Components
import { AppComponent }     from './app/app.component';
import { HomeComponent }    from './home/home.component';
import { LoginComponent }   from './login/login.component';
import { HomeDetailsComponent } from './home-details/home-details.component';

// Services
import { HomeService }      from './home/home.service';

// Routing Modules
import { AppRoutingModule } from './routing/app-routing.module';

// firebase settings
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    AppComponent,
    HomeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'ng4-firebase'), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule // imports firebase/auth, only needed for auth features
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }