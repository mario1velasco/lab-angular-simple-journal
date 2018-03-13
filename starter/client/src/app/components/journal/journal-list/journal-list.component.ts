import {  JournalsService} from './../../../shared/services/journals.service';
import {  Journal} from './../../../shared/models/journal.model';
import {  Component,  OnInit} from '@angular/core';
import {  Router} from '@angular/router';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css']
})
export class JournalListComponent implements OnInit {
  journals: Array < Journal >= [];

  constructor(
    private router: Router,
    private journalsService: JournalsService
  ) {}

  ngOnInit() {
    this.journalsService.list()
    .subscribe(journals=>this.journals=journals)
  }
    

}
