import { CommonModule } from '@angular/common';
import { Component, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search {
  searchTerm = '';

  @Output() search = new EventEmitter<string>();
  @Output() reset = new EventEmitter<void>();

  onSearchClick() {
    this.search.emit(this.searchTerm.trim());
  }

  onResetClick() {
    this.searchTerm = '';
    this.reset.emit();
  }
}
