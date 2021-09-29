import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  inputForm: FormGroup;
  @Input() delayMs: number = 0;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();


  constructor(private fb: FormBuilder) {
    this.inputForm = this.fb.group({
      term: ['']
    });
  }

  ngOnInit() {
    this.inputForm.valueChanges.pipe(
      debounceTime(this.delayMs)
    ).subscribe(value => {
      this.onSearch.emit(value?.term);
    });
  }

}
