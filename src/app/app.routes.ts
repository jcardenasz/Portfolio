import { Routes } from '@angular/router';
import { Home } from './pages';
import { About } from './pages';
import { Contact } from './pages';
import { Projects } from './pages';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'projects',
    component: Projects,
  },
  {
    path: 'contact',
    component: Contact,
  }
];
