import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgRedux, NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { UserApplicationRoutingModule } from './user-application/user-application-routing.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UserApplicationComponent } from './user-application/user-application.component';
import { LoginComponent } from './login/login.component';
import { LearnComponent } from './learn/learn.component';
import { CreateComponent } from './create/create.component';
import { FocusDirective } from './directives/focus.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';

import { ReversePipe } from './pipes/reverse.pipe';

import { rootReducer, AppState, INITIAL_STATE } from './store';
import { LearnActions } from './learn/learn.actions';
import { WordComponent } from './word/word.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserApplicationComponent,
    LearnComponent,
    CreateComponent,
    FocusDirective,
    ClickOutsideDirective,
    ReversePipe,
    WordComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule.forRoot(),
    FormsModule,
    HttpModule,
    NgReduxModule,
    AppRoutingModule,
    UserApplicationRoutingModule
  ],
  providers: [LearnActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<AppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
