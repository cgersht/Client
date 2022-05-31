import { Component, OnInit, Input, ViewChild, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';
import { Customer,Column } from 'types'; 
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TableComponent implements OnInit, OnChanges {
 
  @Input() columns:Column[];
  @Input() rows:any[];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource 
    
    

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
       this.displayedColumns = this.columns.map(({name}) => name   )
     
    
   // this.dataSource = new MatTableDataSource<any>(this.rows);
    //this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
     const {rows} = changes;
     if(rows){
       this.dataSource = new MatTableDataSource<any>(rows.currentValue);
       this.dataSource.paginator = this.paginator;
     }
  }
}
