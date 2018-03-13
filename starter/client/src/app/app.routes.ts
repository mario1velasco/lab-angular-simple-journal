import { JournalItemComponent } from './components/journal/journal-item/journal-item.component';
import { JournalBaseComponent } from './components/journal/journal-base/journal-base.component';
import { HomeComponent } from './components/misc/home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'journals/:id', component: JournalBaseComponent,
        children: [
            { path: '', component: JournalItemComponent },
            // { path: 'edit', component: JournalEditComponent }
        ]
    }
];