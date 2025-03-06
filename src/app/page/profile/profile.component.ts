import {Component, OnInit} from '@angular/core';
import {ItemComponent} from '../../component/item/item.component';
import {AvatarComponent} from '../../component/avatar/avatar.component';
import {ProfileOptions} from '../../model/options.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, AvatarComponent, ItemComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  profile: ProfileOptions = {
    theme: 'dark',
    color: 'blue',
    avatar: {
      title: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, justo et condimentum lobortis, urna sem cursus risus, non accumsan augue odio quis diam. Pellentesque sit amet libero vel nisi malesuada efficitur gravida sit amet mi.',
      photo: 'https://placehold.co/150x150/0000FF/FFFFFF?text=Avatar',
      responsive: {
        column: 1,
        row: 0
      }
    },
    items: [
      {
        title: 'Portfolio',
        description: 'Check out my work',
        photo: 'https://placehold.co/300x200/0000FF/FFFFFF?text=Portfolio',
        size: 'cube-m',
        link: 'https://johndoe.com/portfolio',
        color: 'light',
        responsive: {
          column: 3,
          row: 4
        }
      },
      {
        title: 'Blog',
        description: 'Read my latest posts',
        photo: 'https://placehold.co/300x200/800080/FFFFFF?text=Blog',
        size: 'line-s',
        link: 'https://johndoe.com/blog',
        color: 'purple',
        responsive: {
          column: 3,
          row: 2
        }
      },
      {
        title: 'My Spotify',
        photo: 'https://placehold.co/300x200/FF0000/FFFFFF?text=GitHub',
        size: 'cube-s',
        link: 'https://github.com/johndoe',
        color: 'red',
        responsive: {
          column: 4,
          row: 2
        }
      },
      {
        title: 'GitHub',
        photo: 'https://placehold.co/300x200/FF0000/FFFFFF?text=GitHub',
        size: 'cube-s',
        link: 'https://github.com/johndoe',
        color: 'red',
        responsive: {
          column: 5,
          row: 4
        }
      },
    ],
  };

  maxRow = 1;
  maxColumn = 1;

  ngOnInit() {
    this.profile.items.sort((a, b) => {
      if (a.responsive?.column !== b.responsive?.column) {
        return a.responsive?.column - b.responsive?.column;
      }

      return a.responsive?.row - b.responsive?.row;
    });

    console.log(this.profile.items)
    this.maxColumn = this.keepMax(this.maxColumn, this.profile.avatar?.responsive?.column);
    for (let item of this.profile.items) {
      this.maxRow = this.keepMax(this.maxRow, item?.responsive?.row);
      this.maxColumn = this.keepMax(this.maxColumn, item?.responsive?.column);
    }

    console.log(this.maxRow, this.maxColumn)
  }

  private keepMax(actual: number, value?: number): number {
    if (!value || value < actual) {
      return actual;
    }

    return value;
  }
}
