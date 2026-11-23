import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  items = ['Accueil', 'Profil', 'Conférences', 'Amis', 'Notifications', 'Admin'];
  active = 'Accueil';

  // Event binding : (click)="select(item)"
  select(item: string) {
    this.active = item;
  }
}
