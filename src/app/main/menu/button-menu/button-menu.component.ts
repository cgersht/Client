import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.scss']
})
export class ButtonMenuComponent implements OnInit {
  @Input() option = '';
  constructor() { }

  ngOnInit() {
  }

  handleClick(selectedOption: string) {
    console.log(selectedOption);
  }

}
