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
import { JournalBaseComponent } from './components/journal/journal-base/journal-base.component';
import { JournalItemComponent } from './components/journal/journal-item/journal-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JournalListComponent,
    JournalBaseComponent,
    JournalItemComponent
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
