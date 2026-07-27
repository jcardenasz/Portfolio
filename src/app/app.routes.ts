import { Routes } from '@angular/router';
import { Home, About, Contact, Projects, ProjectDetail } from './pages';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'about',
    component: About,
    title: 'About me',
  },
  {
    path: 'projects',
    component: Projects,
    title: 'My Projects',
  },
  {
    path: 'projects/:route',
    component: ProjectDetail,
    title: 'Project Details',
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact Me',
  }
];
