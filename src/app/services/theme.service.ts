import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  palatte: { [key: string]: string } = {
    indigo: '#3f51b5',
    pink: '#e91e63',
    green: '#4caf50',
    orange: '#ff9800'
  };

  private themeChangeAnno$ = new BehaviorSubject('indigo-pink');
  themeChange = this.themeChangeAnno$.asObservable();

  constructor() { }

  themeChangeAnno(theme: string): void {
    this.themeChangeAnno$.next(theme);
  }
}
