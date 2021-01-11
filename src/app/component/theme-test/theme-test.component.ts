import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', progress: 40 },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', progress: 60 },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', progress: 30 },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', progress: 10 },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', progress: 90 },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', progress: 70 },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', progress: 20 },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', progress: 100 },
];

@Component({
  selector: 'app-theme-test',
  templateUrl: './theme-test.component.html',
  styleUrls: ['./theme-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeTestComponent implements OnInit {

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'progress'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}
