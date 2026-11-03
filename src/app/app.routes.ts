import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { OverviewComponent } from './layout/overview/overview.component';
import { AnalyticsComponent } from './layout/analytics/analytics.component';
import { ActivityComponent } from './layout/activity/activity.component';



export const DASHBOARD_ROUTES: Routes = [

  {

    path: '',

    component: DashboardLayoutComponent,

    children: [

      {
        path: '',

        redirectTo: 'overview',

        pathMatch: 'full'
      },

      {
        path: 'overview',

        component: OverviewComponent
      },

      {
        path: 'analytics',

        component: AnalyticsComponent
      },

      {
        path: 'activity',

        component: ActivityComponent
      }

    ]

  }

];