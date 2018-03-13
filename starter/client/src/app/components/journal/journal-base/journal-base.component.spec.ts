import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalBaseComponent } from './journal-base.component';

describe('JournalBaseComponent', () => {
  let component: JournalBaseComponent;
  let fixture: ComponentFixture<JournalBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
