import { JournalsService } from './shared/services/journals.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import './rxjs.operators';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/misc/home/home.component';
import { routes } from './app.routes';
import { JournalListComponent } from './components/journal/journal-list/journal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JournalListComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [JournalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
