import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() cardItem:any;
  @Input() imgSetting:any = {
    height: 190,
    width: 286
  };
  @Input() klass:any;

  getContainerClass() {
    return this.klass;
  }

}
