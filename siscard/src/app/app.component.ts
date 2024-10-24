import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importar el CommonModule para usar *ngIf

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], // Asegúrate de incluir CommonModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'products';
  showWelcomeScreen: boolean = true;

  ngOnInit(): void {
    // Configurar la pantalla de bienvenida para que desaparezca después de 1.5 segundos
    setTimeout(() => {
      const welcomeScreen = document.querySelector('.welcome-screen');
      if (welcomeScreen) {
        welcomeScreen.classList.add('hidden');
      }

      setTimeout(() => {
        this.showWelcomeScreen = false;
      }, 1000);
    }, 2500);
  }
}
