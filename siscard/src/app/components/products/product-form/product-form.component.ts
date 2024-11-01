import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

@Component({
  standalone: true,
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class ProductFormComponent {
  @Input() newProduct: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0,
  };
  @Input() isEditing: boolean = false;
  @Output() saveProduct = new EventEmitter<Product>();
  @Output() cancelEdit = new EventEmitter<void>();

  constructor() {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.saveProduct.emit(this.newProduct);
      this.resetForm(form);
    }
  }

  onCancel(form: NgForm) {
    this.cancelEdit.emit();
    this.resetForm(form);
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.newProduct = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      stock: 0,
    };
  }
}
