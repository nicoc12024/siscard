import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { Product } from '../product-form/product-form.component';

@Component({
  standalone: true,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, MatTableModule, MatButtonModule],
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Input() paginatedProducts: Product[] = [];
  @Input() pageIndex: number = 0;
  @Input() totalPages: number = 0;
  @Output() editProduct = new EventEmitter<Product>();
  @Output() deleteProduct = new EventEmitter<number>();
  @Output() goToPage = new EventEmitter<number>();
  @Output() prevPage = new EventEmitter<void>();
  @Output() nextPage = new EventEmitter<void>();

  displayedColumns: string[] = [
    'name',
    'price',
    'description',
    'stock',
    'actions',
  ];

  // Muestra el número de botones de paginación visibles
  getVisiblePages(): number[] {
    const startPage = Math.max(0, this.pageIndex - 1);
    const endPage = Math.min(this.totalPages, startPage + 3);
    return Array.from({ length: endPage - startPage }, (_, i) => startPage + i);
  }
}
