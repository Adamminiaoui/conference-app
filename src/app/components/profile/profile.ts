import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrl: '../section.css',
})
export class Profile {
  user = { name: 'Ahmed', email: 'ahmed@email.com' };
}
