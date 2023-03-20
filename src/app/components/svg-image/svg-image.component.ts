import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-image',
  templateUrl: './svg-image.component.html',
  styleUrls: ['./svg-image.component.scss']
})
export class SvgImageComponent {

  @Input() width:string = '24px';
  @Input() height:string = '24px';
  @Input() source:string = '../../../assets/svg/angle-double-right.svg';
}
