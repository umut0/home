import { Component } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'ut-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // animations: [
  //   trigger('routeAnimation', [
  //     state('*', style({opacity: 1})),
  //     transition('void => *', [
  //       style({opacity: 0}),
  //       animate('2s cubic-bezier(0.215, 0.610, 0.355, 1.000)')
  //     ]),
  //     transition('* => void',
  //       animate('2s cubic-bezier(0.215, 0.610, 0.355, 1.000)', style({
  //         opacity: 0
  //       }))
  //     )
  //   ])
  // ]
})
export class AppComponent {
  title = 'ut';
}
