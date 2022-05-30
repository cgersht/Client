import { Component, Input, OnInit , ViewEncapsulation} from '@angular/core'; 
 


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],

})
export class ViewComponent implements OnInit {

 @Input() selected  = '';
  constructor( ) { }

  ngOnInit() {
  }

}
