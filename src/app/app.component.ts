import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  overlayContainerEle: HTMLElement
  themelist = [
    'green-amber-dark'
  ]
  currentTheme = '';
  isDarkMode = false;

  constructor(overlayContainer: OverlayContainer) {
    this.overlayContainerEle = overlayContainer.getContainerElement();
  }

  switchTheme(theme: string) {
    const id = `style-manager-${theme}`
    const link = document.getElementById(id);
    if (!link) {
      const linkEl = document.createElement('link');
      linkEl.setAttribute('rel', 'stylesheet');
      linkEl.setAttribute('type', 'text/css');
      linkEl.setAttribute('id', id);
      linkEl.setAttribute('href',`${theme}-theme.css`);
      document.head.appendChild(linkEl);
    }
  }
}
