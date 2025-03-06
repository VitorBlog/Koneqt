import {Component, Input, OnInit} from '@angular/core';
import {ItemOptions} from '../../model/options.model';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit {

  @Input()
  item!: ItemOptions;

  hasBackground: boolean = false;

  ngOnInit() {
    this.hasBackground = this.item.size == 'cube'
                            || this.item.size == 'square'
                            || this.item.size == 'poster';
  }
}
