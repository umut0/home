import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { DOCUMENT } from "@angular/platform-browser";
import { Router, NavigationEnd } from '@angular/router';

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
export class AppComponent implements OnInit {

    public scrolled = false;
    public oldNumber = 0;
    
    constructor(@Inject(DOCUMENT) private document: Document, private router: Router) { }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 0 && number > this.oldNumber+5){
            this.scrolled = true;
        } else if(number < this.oldNumber) {
            this.scrolled = false;
        }
        this.oldNumber = number;
        
    }

    ngOnInit(){
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
}
