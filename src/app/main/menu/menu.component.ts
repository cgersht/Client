import { Component, OnInit, Output, EventEmitter } from '@angular/core'; 
import { GetOptionsService } from 'services';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuOption: string[];

  @Output() change: EventEmitter<string>  = new EventEmitter ();
  constructor(private getOptionsService: GetOptionsService) { }

  ngOnInit() {
    this.menuOption = this.getOptionsService.getOptions();
  }

  changeSelected(item) {
     this.change.emit(item);
  }

}
