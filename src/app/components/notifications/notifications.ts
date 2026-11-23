import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.html',
  styleUrl: '../section.css',
})
export class Notifications {
  notifications = [
    'Nouvelle conférence : Angular 21 Conference',
    'Sami vous a envoyé une invitation',
  ];
  visible = false;

  toggle() {
    this.visible = !this.visible;
  }
}
