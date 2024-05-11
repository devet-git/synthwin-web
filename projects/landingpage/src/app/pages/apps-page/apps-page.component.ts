import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '@components/card/card.component';
import { ICardComponent } from '@components/card/card';

@Component({
  selector: 'app-apps-page',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './apps-page.component.html',
  styleUrl: './apps-page.component.scss',
})
export class AppsPageComponent {
  apps: ICardComponent[] = [
    {
      name: 'App 1',
      image:
        'https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-1030x584.png',
      description: 'lorem is spum',
      url: '/',
    },
    {
      name: 'App 2',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
      description: 'APP 2 DESCRIPTION',
      url: 'https://primeng.org/card',
    },
  ];
}
