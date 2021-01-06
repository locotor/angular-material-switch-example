import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-theme-test',
  templateUrl: './theme-test.component.html',
  styleUrls: ['./theme-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
