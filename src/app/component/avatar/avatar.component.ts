import {Component, Input} from '@angular/core';
import {AvatarOptions} from '../../model/options.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-avatar',
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {

  @Input()
  avatar!: AvatarOptions;
}
