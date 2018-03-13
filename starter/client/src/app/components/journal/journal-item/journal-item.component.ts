import { Journal } from './../../../shared/models/journal.model';
import { JournalsService } from './../../../shared/services/journals.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-journal-item',
  templateUrl: './journal-item.component.html',
  styleUrls: ['./journal-item.component.css']
})
export class JournalItemComponent implements OnInit {
  journal:Journal;

  constructor(
    private routes: ActivatedRoute,
    private journalsService: JournalsService
  ) { }

  ngOnInit() {
    this.routes
      .parent
      .params.subscribe(params => {
        this.journalsService.get(String(params['id']))
          .subscribe(journal => this.journal = journal);
    });
  }

}
