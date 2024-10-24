import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Product,
  ProductFormComponent,
} from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from '../../services/products.service';

@Component({
  standalone: true,
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule, ProductFormComponent, ProductListComponent],
})
export class ProductComponent implements OnInit {
  newProduct: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0,
  };

  products: Product[] = [];
  paginatedProducts: Product[] = [];
  pageIndex: number = 0;
  pageSize: number = 2;
  totalPages: number = 0;
  isEditing: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.totalPages = Math.ceil(this.products.length / this.pageSize);
      this.updatePaginatedProducts();
    });
  }

  updatePaginatedProducts() {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedProducts = this.products.slice(start, end);
  }

  addProduct(newProduct: Product) {
    if (this.isEditing) {
      this.productService
        .updateProduct(newProduct.id, newProduct)
        .subscribe(() => {
          this.refreshProducts();
          this.isEditing = false;
        });
    } else {
      this.productService
        .addProduct(
          newProduct.name,
          newProduct.description,
          newProduct.price,
          newProduct.stock
        )
        .subscribe(() => {
          this.refreshProducts();
        });
    }
  }

  editProduct(product: Product) {
    this.newProduct = { ...product };
    this.isEditing = true;
  }

  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.refreshProducts();
    });
  }

  refreshProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.totalPages = Math.ceil(this.products.length / this.pageSize);
      this.updatePaginatedProducts();
    });
  }

  goToPage(page: number) {
    this.pageIndex = page;
    this.updatePaginatedProducts();
  }

  nextPage() {
    if (this.pageIndex < this.totalPages - 1) {
      this.pageIndex++;
      this.updatePaginatedProducts();
    }
  }

  prevPage() {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.updatePaginatedProducts();
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.newProduct = { id: 0, name: '', description: '', price: 0, stock: 0 };
  }
}
