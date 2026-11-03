import { Component, inject } from '@angular/core';

import {
  TranslationService
} from '../../translation/translation.service';

@Component({

  selector: 'app-overview',

  standalone: true,

  template: `

    <h2>
      {{ translation.translate('WELCOME') }}
    </h2>

    <div class="cards">

      <div class="card">

        <h4>
          {{ translation.translate('TOTAL_USERS') }}
        </h4>

        <h1>1250</h1>

      </div>

      <div class="card">

        <h4>
          {{ translation.translate('ACTIVE_USERS') }}
        </h4>

        <h1>980</h1>

      </div>

      <div class="card">

        <h4>
          {{ translation.translate('TOTAL_REVENUE') }}
        </h4>

        <h1>₹85,000</h1>

      </div>

    </div>

  `,

  styles: [`

    .cards {
      display: grid;
      grid-template-columns:
        repeat(auto-fit, minmax(180px, 1fr));
      gap: 20px;
      margin-top: 25px;
    }

    .card {
      padding: 22px;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      background: #f8fafc;
    }

    .card h4 {
      color: #64748b;
    }

    .card h1 {
      color: #1e3a8a;
    }

  `]

})
export class OverviewComponent {

  translation = inject(TranslationService);

}