import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  inputForm: UntypedFormGroup;
  @Input() delayMs: number = 0;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();


  constructor(private fb: UntypedFormBuilder) {
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
