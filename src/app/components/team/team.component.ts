import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { trigger, state, animate, transition, style } from '@angular/animations';


@Component({
  selector: 'ut-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  animations : [
  trigger('fadeInOut', [
      state('*', style({opacity: 1})),
      transition('void => *', [
        style({opacity: 0}),
        animate('0.4s 0.9s linear')
      ]),
      transition('* => void',
        animate('0.3s linear', style({
          opacity: 0
        }))
      )
    ])
  ]
})
export class TeamComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

}
