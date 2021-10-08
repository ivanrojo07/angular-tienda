import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { EmailAuthProvider as AUTH_SETTINGS } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    PageNotFoundComponent,
    LayoutComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ],
  providers: [
    {provide: AUTH_SETTINGS, useValue:{ appVerificationDisabledForTesting: true } },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
