import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showWelcomeScreen: boolean = true;
  displayNone: boolean = true;

  ngOnInit(): void {
    // Aplicar la clase 'hidden' después de 2.5 segundos
    setTimeout(() => {
      this.showWelcomeScreen = false;
    }, 2500);

    // Aplicar la clase 'none' después de 3.5 segundos
    setTimeout(() => {
      this.displayNone = false;
    }, 3500);
  }
}
