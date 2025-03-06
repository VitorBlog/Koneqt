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
      title: 'Vitor Paulo',
      description: 'Um desenvolvedor com muitos sonhos.',
      photo: '/avatar.jpeg',
      responsive: {
        column: 0,
        row: 0
      }
    },
    items: [
      {
        title: 'Poster',
        photo: '/poster.jpg',
        size: 'poster',
        link: 'https://johndoe.com/portfolio',
        responsive: {
          column: 1,
          row: 0
        }
      },
      {
        title: 'Line',
        description: 'Read my latest posts',
        photo: 'https://placehold.co/300x200/800080/FFFFFF?text=Blog',
        size: 'line',
        link: 'https://johndoe.com/blog',
        color: 'purple',
        responsive: {
          column: 2,
          row: 3
        }
      },
      {
        title: 'Eu sou um titulo',
        size: 'line',
        responsive: {
          column: 2,
          row: 0
        }
      },
      {
        photo: 'https://img.icons8.com/ios11/200/FFFFFF/github.png',
        size: 'icon',
        link: 'https://github.com/johndoe',
        responsive: {
          column: 2,
          row: 2
        }
      },
      {
        photo: 'https://img.icons8.com/ios11/200/FFFFFF/instagram.png',
        size: 'icon',
        link: 'https://github.com/johndoe',
        responsive: {
          column: 2,
          row: 2
        }
      },
      {
        photo: 'https://img.icons8.com/ios11/200/FFFFFF/facebook.png',
        size: 'icon',
        link: 'https://github.com/johndoe',
        responsive: {
          column: 2,
          row: 2
        }
      },
      {
        photo: 'https://img.icons8.com/ios11/200/FFFFFF/tiktok.png',
        size: 'icon',
        link: 'https://github.com/johndoe',
        responsive: {
          column: 2,
          row: 2
        }
      },
      {
        title: 'Cube A',
        photo: '/other.jpg',
        size: 'cube',
        link: 'https://github.com/johndoe',
        color: 'red',
        responsive: {
          column: 1,
          row: 3
        }
      },
      {
        title: 'Cube B',
        photo: '/other2.png',
        size: 'cube',
        link: 'https://github.com/johndoe',
        color: 'red',
        responsive: {
          column: 1,
          row: 3
        }
      },
      {
        title: 'Square',
        photo: '/other.jpg',
        size: 'square',
        link: 'https://github.com/johndoe',
        color: 'red',
        responsive: {
          column: 2,
          row: 1
        }
      },
    ],
  };

  maxRow = 4;
  maxColumn = 5;

  ngOnInit() {
    this.maxColumn = this.keepMax(this.maxColumn, this.profile.avatar?.responsive?.column);
    for (let item of this.profile.items) {
      this.maxRow = this.keepMax(this.maxRow, item?.responsive?.row);
      this.maxColumn = this.keepMax(this.maxColumn, item?.responsive?.column);
    }

    this.profile.items
  }

  private keepMax(actual: number, value?: number): number {
    if (!value || value < actual) {
      return actual;
    }

    return value;
  }

  getItems(column: number, row: number) {
    const value = this.profile.items.filter(value => value.responsive.column == column && value.responsive.row == row);
    if (value.length == 0) {
      return undefined;
    }

    return value;
  }
}
