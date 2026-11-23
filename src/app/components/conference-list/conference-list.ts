import { Component } from '@angular/core';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, NgClass, UpperCasePipe, DatePipe, Highlight],
  templateUrl: './conference-list.html',
  styleUrls: ['../section.css', './conference-list.css'],
})
export class ConferenceList {
  // Two-way binding avec le champ de recherche : [(ngModel)]="searchTitle"
  searchTitle = '';

  // Conférence sélectionnée (clic sur la carte -> affichage des détails)
  selectedId: number | null = null;

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Les nouveautés d’Angular 21 : zoneless, signals et contrôle de flux natif.',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur signal(), computed() et effect().',
      date: new Date(2027, 10, 30),
      place: 'Ariana',
      maxParticipants: 30,
      nbParticipants: 24,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Tendances du développement web moderne.',
      date: new Date(2027, 10, 20),
      place: 'Sousse',
      maxParticipants: 50,
      nbParticipants: 50,
    },
  ];

  /** Liste filtrée selon une partie ou la totalité du titre saisi. */
  get filteredConferences(): Conference[] {
    const term = this.searchTitle.trim().toLowerCase();
    return this.conferences.filter((c) => c.title.toLowerCase().includes(term));
  }

  placesRestantes(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  /** Classe CSS du bouton : vert (disponible), orange (< 10 places), rouge (complet). */
  buttonClass(c: Conference) {
    const remaining = this.placesRestantes(c);
    return {
      'btn-green': remaining >= 10,
      'btn-orange': remaining > 0 && remaining < 10,
      'btn-red': remaining <= 0,
    };
  }

  /** Clic sur « S'inscrire » : +1 participant à chaque clic (tant qu'il reste des places). */
  inscrire(c: Conference, event: Event) {
    event.stopPropagation(); // ne pas déclencher le clic de la carte
    if (this.placesRestantes(c) > 0) {
      c.nbParticipants++;
    }
  }

  toggleDetails(c: Conference) {
    this.selectedId = this.selectedId === c.id ? null : c.id;
  }
}
