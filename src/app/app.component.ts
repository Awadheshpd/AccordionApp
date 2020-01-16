import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AccordionApp';
  details: any;
  searchForm: FormGroup;
  displayIndex = 0;
  constructor(
    private fb: FormBuilder,
    private dataService: DataService) {

  }

  ngOnInit() {
    this.getDetails();
    this.searchForm = this.fb.group({
      search: ['', []]
    });
  }

  getDetails() {
    this.dataService.getDetails().subscribe(success => {
      console.log('success', success);
      /* tslint:disable:no-string-literal */
      this.details = success['data'];
    }, error => {
      console.log('err', error);
    });
  }

  displayAccordion(index) {
    if (this.displayIndex !== index) {
      this.displayIndex = index;
    } else {
      this.displayIndex = -1;
    }
  }
}
