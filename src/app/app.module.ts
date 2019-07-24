import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './success/success.component';
import { ReverseStr} from './custom.pipe';
import { MyErrorDirective} from './custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    SuccessComponent,
    ReverseStr,
    MyErrorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
