import { Router } from '@angular/router';
import { JournalsService } from './../../../shared/services/journals.service';
import { Journal } from './../../../shared/models/journal.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  journal:Journal=new Journal();

  constructor(
    private journalsService: JournalsService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmitEditForm(form:NgForm){
    this.journalsService.newJournal(this.journal)
    .subscribe(journal => {
      this.journal = journal;
      debugger
      this.router.navigate(['/journals', journal._id]);
      // this.router.navigate(['/journals']);
    });
  }
}
