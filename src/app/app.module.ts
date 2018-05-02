import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { PusherService } from './pusher.service';
import {LoopingRhumbusesSpinnerModule} from "angular-epic-spinners";

@NgModule({
  declarations: [AppComponent, ChatComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, LoopingRhumbusesSpinnerModule],
  providers: [PusherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
