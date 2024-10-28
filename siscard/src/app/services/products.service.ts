//products.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api/products';

  // Definir encabezados HTTP
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl, this.httpOptions);
  }

  // Añadir un nuevo producto
  addProduct(
    name: string,
    description: string,
    price: number,
    stock: number
  ): Observable<{ message: string }> {
    const newProduct: Omit<Product, 'id'> = { name, description, price, stock };
    return this.http.post<{ message: string }>(
      this.apiUrl,
      newProduct,
      this.httpOptions
    );
  }

  // Eliminar un producto
  deleteProduct(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${this.apiUrl}/${id}`,
      this.httpOptions
    );
  }

  // Actualizar un producto
  updateProduct(
    id: number,
    updatedProduct: Product
  ): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(
      `${this.apiUrl}/${id}`,
      updatedProduct,
      this.httpOptions
    );
  }
}
