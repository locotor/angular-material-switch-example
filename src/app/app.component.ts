import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private overlayContainer: OverlayContainer) { }

  title = 'md-theme-test';
  isDarkMode = false;

  switchTheme(event: MatSlideToggleChange): void {
    this.isDarkMode = event.checked;
    this.processOverlayBaseComponentTheme(event.checked);
  }

  private processOverlayBaseComponentTheme(checked: boolean): void {
    const overlayContainerElement = this.overlayContainer.getContainerElement()
    const themeWrapperClassName = 'unicorn-dark-theme'
    if (checked) {
      overlayContainerElement.classList.add(themeWrapperClassName);
    } else {
      overlayContainerElement.classList.remove(themeWrapperClassName);
    }
  }
}
