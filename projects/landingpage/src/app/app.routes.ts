import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AppsPageComponent } from './pages/apps-page/apps-page.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Synthwin',
    providers: [],

    component: MainLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      {
        path: 'apps',
        loadComponent: () =>
          import('./pages/apps-page/apps-page.component').then(
            (c) => c.AppsPageComponent
          ),
      },
    ],
  },
];
