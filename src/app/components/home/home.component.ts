import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'ut-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('routeAnimation', [
      state('*', style({opacity: 1})),
      transition('void => *', [
        style({opacity: 0}),
        animate('2s cubic-bezier(0.215, 0.610, 0.355, 1.000)')
      ]),
      transition('* => void',
        animate('2s cubic-bezier(0.215, 0.610, 0.355, 1.000)', style({
          opacity: 0
        }))
      )
    ])
  ],
})

export class HomeComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

}
