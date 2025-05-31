import { CommonModule } from '@angular/common';
import { Component, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailValidation } from '../directive/email-validation';


@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule,EmailValidation],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search {
  searchTerm = '';
  isEmailValid = true;

  @Output() search = new EventEmitter<string>();
  @Output() reset = new EventEmitter<void>();

  onSearchClick() {
    this.search.emit(this.searchTerm.trim());
  }

  onResetClick() {
    this.searchTerm = '';
    this.reset.emit();
  }

  onEmailValid(valid : boolean){
    this.isEmailValid = valid;
  }
}
