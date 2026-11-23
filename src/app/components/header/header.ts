import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Interpolation : {{ appName }}
  appName = 'Conference App';
  subtitle = 'Bienvenue sur votre espace utilisateur';
}
