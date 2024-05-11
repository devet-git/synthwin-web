import { Component, Input, OnInit } from '@angular/core';
import { ICardComponent } from './card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() data!: ICardComponent;
  isAbsoluteUrl: boolean = false;
  ngOnInit(): void {
    this.isAbsoluteUrl = new RegExp('^(https?://)').test(this.data.url ?? '');
  }
}
