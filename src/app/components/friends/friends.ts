import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends',
  imports: [FormsModule],
  templateUrl: './friends.html',
  styleUrl: '../section.css',
})
export class Friends {
  // Two-way binding : les trois champs partagent la même propriété
  name = 'Ahmed';
  friends = ['Sami', 'Sarra', 'Amine'];
}
