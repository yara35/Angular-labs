import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skills = [
  { name: 'HTML/CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'Bootstrap', level: 65 },
  { name: 'Angular', level: 20 },
  { name: 'Firebase', level: 70 }
];

}
