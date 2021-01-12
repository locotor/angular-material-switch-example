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

  constructor(
    private overlayContainer: OverlayContainer,
    private themeService: ThemeService
  ) { }

  title = 'md-theme-test';
  isDarkMode = false;

  switchTheme(event: MatSlideToggleChange): void {
    this.isDarkMode = event.checked;
    this.processOverlayBaseComponentTheme(event.checked);
    this.themeService.themeChangeAnno(this.isDarkMode ? 'green-orange' : 'indigo-pink');
  }

  private processOverlayBaseComponentTheme(checked: boolean): void {
    const overlayContainerElement = this.overlayContainer.getContainerElement();
    const themeWrapperClassName = 'unicorn-dark-theme';
    if (checked) {
      overlayContainerElement.classList.add(themeWrapperClassName);
    } else {
      overlayContainerElement.classList.remove(themeWrapperClassName);
    }
  }
}
