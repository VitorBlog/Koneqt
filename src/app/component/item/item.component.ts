import {Component, Input} from '@angular/core';
import {ItemOptions} from '../../model/options.model';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  @Input()
  item!: ItemOptions;
}
