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
      homeimg: 'assets/images/Home.png',
      description: 'Space Zone is a platform that allows users to book online the nearest available workspace based on their location. It simplifies the process of finding and reserving workspaces, offering a smooth and efficient experience for users looking to work in a shared environment.',
      pages: [
        {
          pageimg:'assets/images/cards.png',
          pagedes:"Showing the different workspace options available for booking.",
          imgalt:'card'
        },
         {
          pageimg:'assets/images/service.png',
          pagedes:"Showing the services provided in each workspace.",
          imgalt:'service'
        },
        {
          pageimg:'assets/images/payment.png',
          pagedes:"Showing the payment options for booking a workspace.",
          imgalt:'payment'
        }
      ],
      
    },
    {
      title: 'Space Zone',
      homeimg: 'assets/images/Home.png',
      description: 'Space Zone is a platform that allows users to book online the nearest available workspace based on their location. It simplifies the process of finding and reserving workspaces, offering a smooth and efficient experience for users looking to work in a shared environment.',
      pages: [
        {
          pageimg:'assets/images/cards.png',
          pagedes:"Showing the different workspace options available for booking.",
          imgalt:'card'
        },
         {
          pageimg:'assets/images/service.png',
          pagedes:"Showing the services provided in each workspace.",
          imgalt:'service'
        },
        {
          pageimg:'assets/images/payment.png',
          pagedes:"Showing the payment options for booking a workspace.",
          imgalt:'payment'
        }
      ],
      
    },
 
];
 imgpath='./../../assets/images/Home.png'

}
