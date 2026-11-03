import { Component, inject } from '@angular/core';

import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';

import {
  TranslationService
} from '../../translation/translation.service';

@Component({

  selector: 'app-dashboard-layout',

  standalone: true,

  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],

  templateUrl: './dashboard-layout.component.html',

  styleUrl: './dashboard-layout.component.scss'

})
export class DashboardLayoutComponent {

  translation = inject(TranslationService);

}