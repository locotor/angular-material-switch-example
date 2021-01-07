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
    "amber-lime",
    "amber-lime-dark",
    "deeppurple-amber",
    "deeppurple-amber-dark",
    "pink-bluegrey",
    "pink-bluegrey-dark",
    "purple-green",
    "purple-green-dark"
  ]
  currentTheme = '';
  isDarkMode = false;

  constructor(overlayContainer: OverlayContainer) {
    this.overlayContainerEle = overlayContainer.getContainerElement();
  }

  switchTheme(theme: string) {
    if (this.currentTheme)
      this.overlayContainerEle.classList.remove(this.currentTheme);
    this.currentTheme = theme
    this.overlayContainerEle.classList.add(this.currentTheme);
  }
}
