import { Routes } from '@angular/router';
import {ProfileComponent} from './page/profile/profile.component';

export const routes: Routes = [
  {
    title: 'Koneqt',
    path: '',
    component: ProfileComponent
  },
  {
    title: 'Dashboard - Koneqt',
    path: 'dashboard',
    component: ProfileComponent,
    data: {
      'editor': true
    }
  },
  {
    title: 'Profile - Koneqt',
    path: ':username',
    component: ProfileComponent
  }
];
