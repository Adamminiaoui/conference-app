import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer class="footer">© {{ year }} Conference App - Gestion des conférences</footer>`,
  styles: `
    .footer {
      margin-top: 32px;
      background: #1b3a6b;
      color: #fff;
      text-align: center;
      font-weight: 700;
      padding: 20px 16px;
    }
  `,
})
export class Footer {
  year = new Date().getFullYear();
}
