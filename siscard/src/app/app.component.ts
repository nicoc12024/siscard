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
  title = 'products';
  showWelcomeScreen: boolean = true;

  ngOnInit(): void {
    // Configurar la pantalla de bienvenida para que desaparezca después de 2.5 segundos
    setTimeout(() => {
      const welcomeScreen = document.querySelector('.welcome-screen');
      if (welcomeScreen) {
        welcomeScreen.classList.add('hidden');
      }

      setTimeout(() => {
        if (welcomeScreen) {
          welcomeScreen.classList.add('none');
        }
        this.showWelcomeScreen = false;
      }, 1000);
    }, 2500);
  }
}
