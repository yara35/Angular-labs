import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import{RouterLink} from '@angular/router'

@Component({
  selector: 'app-pro-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './pro-card.html',
  styleUrls: ['./pro-card.css'],
  standalone: true 
})
export class ProCard {
  @Input() product!: Product;

  addToCart(product: Product) {
    console.log('Add to cart:', product);
  }
}
