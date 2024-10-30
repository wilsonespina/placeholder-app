import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Homepage',
  },
  {
    path: ':dimensions',
    component: PlaceholderComponent,
    title: 'Placeholder',
    // children: [],
  },
  {
    path: ':dimensions/:color',
    component: PlaceholderComponent,
    title: 'Placeholder',
    // children: [],
  },
  { path: '**', component: PageNotFoundComponent },
];
