import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  palette: { [key: string]: string } = {
    indigo: '#3f51b5',
    pink: '#e91e63',
    green: '#4caf50',
    orange: '#ff9800',
    amber: '#FFC107',
    lime: '#CDDC39',
    purple: '#9C27B0',
    deep_purple: '#673AB7',
    blue_grey: '#607D8B',
    red: '#F44336'
  };

  private themeChangeAnno$ = new BehaviorSubject('indigo-pink');
  themeChange = this.themeChangeAnno$.asObservable();

  constructor() { }

  themeChangeAnno(theme: string): void {
    this.themeChangeAnno$.next(theme);
  }
}
