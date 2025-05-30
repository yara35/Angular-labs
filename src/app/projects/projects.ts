import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = [
   {
      title: 'Space Zone',
      image: 'assets/images/Home.png',
      description: 'Space Zone is a platform that allows users to book online the nearest available workspace based on their location. It simplifies the process of finding and reserving workspaces, offering a smooth and efficient experience for users looking to work in a shared environment.',
      details: [
        'Add and manage products with stock levels and categories.',
        'Register suppliers and customers with full contact details.',
        'Create purchase (in) and sales (out) bills easily.',
        'Track payments, discounts, and taxes in bills.',
        'View product and bill history with detailed reports.'
      ],
      
    },
 
];
 imgpath='./../../assets/images/Home.png'

}
