import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  themeList = [
    'indigo-pink',
    'green-orange',
    'deep_purple-amber',
    'blue_grey-orange',
    'purple-red',
  ];
  currentTheme = 'indigo-pink';
  title = 'md-theme-test';
  isDarkMode = false;

  constructor(
    private overlayContainer: OverlayContainer,
    private themeService: ThemeService
  ) { }

  darkModeSwitch(change: MatSlideToggleChange): void {
    this.isDarkMode = change.checked;
    let theme = '';
    if (this.isDarkMode) {
      theme = this.currentTheme + '-dark';
    } else {
      theme = this.currentTheme.replace(/-dark/g, '');
    }
    this.switchTheme(theme);
  }

  themeColorSelect(select: string): void {
    let theme = select;
    if (this.isDarkMode) {
      theme = select + '-dark';
    }
    this.switchTheme(theme);
  }

  switchTheme(theme: string): void {
    this.processOverlayBaseComponentTheme(theme);
    this.themeService.themeChangeAnno(theme);
  }

  private processOverlayBaseComponentTheme(themeClass: string): void {
    const overlayContainerElement = this.overlayContainer.getContainerElement();
    overlayContainerElement.classList.remove(this.currentTheme);
    overlayContainerElement.classList.add(themeClass);
    this.currentTheme = themeClass;
  }

}
