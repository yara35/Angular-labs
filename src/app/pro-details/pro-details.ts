import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pro-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './pro-details.html',
  styleUrl: './pro-details.css',
})
export class ProDetails implements OnInit {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(+id).subscribe((product) => {
        this.product = product;
      });
    }
  }
  goback(){
    this.router.navigate(['/product'])
  }
}
