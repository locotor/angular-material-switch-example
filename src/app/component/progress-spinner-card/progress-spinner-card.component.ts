import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-progress-spinner-card',
  templateUrl: './progress-spinner-card.component.html',
  styleUrls: ['./progress-spinner-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressSpinnerCardComponent implements OnInit {

  @Input() color: ThemePalette = 'primary';
  @Input() value = 60;
  @Input() icon = 'home';

  constructor() { }

  ngOnInit(): void {
  }

  textColor(): string {
    return this.color + '-color';
  }

}
