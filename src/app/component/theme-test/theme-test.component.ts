import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Chart } from '@antv/g2';
import { ThemeService } from 'src/app/services/theme.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  progress: number;
}

export interface Section {
  name: string;
  updated: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', progress: 40 },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', progress: 60 },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', progress: 30 },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', progress: 10 },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', progress: 90 },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', progress: 70 },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', progress: 20 },
];

@Component({
  selector: 'app-theme-test',
  templateUrl: './theme-test.component.html',
  styleUrls: ['./theme-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeTestComponent implements AfterViewInit {

  @ViewChild('lineChartsWrapper') lineChartsWrapper?: ElementRef;
  @ViewChild('barChartsWrapper') barChartsWrapper?: ElementRef;

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'progress'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  lineChart?: Chart;
  barChart?: Chart;

  constructor(
    private themeService: ThemeService
  ) { }

  ngAfterViewInit(): void {
    this.setLineCharts();
    this.setBarCharts();
    this.themeService.themeChange.subscribe(theme => {
      const primary = theme.split('-')[0];
      const accent = theme.split('-')[1];
      const primaryColor = this.themeService.palatte[primary];
      const accentColor = this.themeService.palatte[accent];
      if (primaryColor) {
        this.changeChartsTheme(primaryColor, accentColor);
      }
    });
  }

  setLineCharts(): void {
    const data = [
      { month: 'Jan', city: 'Tokyo', temperature: 7 },
      { month: 'Jan', city: 'London', temperature: 3.9 },
      { month: 'Feb', city: 'Tokyo', temperature: 6.9 },
      { month: 'Feb', city: 'London', temperature: 4.2 },
      { month: 'Mar', city: 'Tokyo', temperature: 9.5 },
      { month: 'Mar', city: 'London', temperature: 5.7 },
      { month: 'Apr', city: 'Tokyo', temperature: 14.5 },
      { month: 'Apr', city: 'London', temperature: 8.5 },
      { month: 'May', city: 'Tokyo', temperature: 18.4 },
      { month: 'May', city: 'London', temperature: 11.9 },
      { month: 'Jun', city: 'Tokyo', temperature: 21.5 },
      { month: 'Jun', city: 'London', temperature: 15.2 },
      { month: 'Jul', city: 'Tokyo', temperature: 25.2 },
      { month: 'Jul', city: 'London', temperature: 17 },
      { month: 'Aug', city: 'Tokyo', temperature: 26.5 },
      { month: 'Aug', city: 'London', temperature: 16.6 },
      { month: 'Sep', city: 'Tokyo', temperature: 23.3 },
      { month: 'Sep', city: 'London', temperature: 14.2 },
      { month: 'Oct', city: 'Tokyo', temperature: 18.3 },
      { month: 'Oct', city: 'London', temperature: 10.3 },
      { month: 'Nov', city: 'Tokyo', temperature: 13.9 },
      { month: 'Nov', city: 'London', temperature: 6.6 },
      { month: 'Dec', city: 'Tokyo', temperature: 9.6 },
      { month: 'Dec', city: 'London', temperature: 4.8 },
    ];

    this.lineChart = new Chart({
      container: this.lineChartsWrapper?.nativeElement,
      autoFit: true,
      padding: [20, 20, 30, 50]
    });

    this.lineChart.data(data);
    this.lineChart.legend(false);
    this.lineChart.scale({
      month: {
        range: [0, 1],
      },
      temperature: {
        nice: true,
      },
    });

    this.lineChart.tooltip({
      showCrosshairs: true,
      shared: true,
    });

    this.lineChart.axis('temperature', {
      label: {
        formatter: (val) => {
          return val + ' °C';
        },
      },
    });

    this.lineChart
      .line()
      .position('month*temperature')
      .color('city')
      .shape('smooth');

    this.lineChart
      .point()
      .position('month*temperature')
      .color('city')
      .shape('circle');

    this.lineChart.render();

  }

  setBarCharts(): void {
    const data = [
      { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
      { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
      { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 },
      { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 },
      { name: 'London', 月份: 'May', 月均降雨量: 47 },
      { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 },
      { name: 'London', 月份: 'Jul.', 月均降雨量: 24 },
      { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 },
      { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 12.4 },
      { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 23.2 },
      { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 34.5 },
      { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 99.7 },
      { name: 'Berlin', 月份: 'May', 月均降雨量: 52.6 },
      { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 35.5 },
      { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 37.4 },
      { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 42.4 },
    ];

    this.barChart = new Chart({
      container: this.barChartsWrapper?.nativeElement,
      autoFit: true,
      padding: 30
    });

    this.barChart.data(data);
    this.barChart.legend(false);
    this.barChart.scale('月均降雨量', {
      nice: true,
    });
    this.barChart.tooltip({
      showMarkers: false,
      shared: true,
    });

    this.barChart
      .interval()
      .position('月份*月均降雨量')
      .color('name')
      .adjust([
        {
          type: 'dodge',
          marginRatio: 0,
        },
      ]);

    this.barChart.interaction('active-region');

    this.barChart.render();

  }

  changeChartsTheme(primary: string, accent: string): void {
    if (!this.lineChart || !this.barChart) { return; }
    const defaultTheme = this.lineChart.getTheme();
    const colors10 = defaultTheme.colors10;
    colors10[0] = primary;
    colors10[1] = accent;
    this.lineChart.render(true);
    this.barChart.render(true);
  }

}
