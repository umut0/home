import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { VideoService } from '../../services/video.service';
import { trigger, state, animate, transition, style } from '@angular/animations';
import {Observable} from 'rxjs/Rx';

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
    ]),
    trigger('slideInOut', [
      state('*', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate('2s cubic-bezier(0.215, 0.610, 0.355, 1.000)')
      ]),
      transition('* => void',
        animate('2s cubic-bezier(0.215, 0.610, 0.355, 1.000)', style({
          transform: 'translateX(-100%)'
        }))
      )
    ]),
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
  ],
})

export class HomeComponent implements OnInit {

  public obs = [];

  constructor(public dataService: DataService, private videoService: VideoService) { }

  ngOnInit() {
      let that = this;

      this.dataService.getData().subscribe( data => {
          data.startpage.products.forEach(function(item,index){
              console.log(that.obs);
              that.obs[index] = Observable.interval(7500).subscribe(x => {
                  that.increaseCount(item);
              });
          });
      });
      // console.log(this.dataService.data);
    // this.dataService.data.startpage.products.forEach(function(item){
    //     Observable.interval(5000).subscribe(x => {
    //         console.log(x);
    //         console.log(item);
    //     });
    // });
  }

  resetObs(){
      this.obs.forEach(function(ob){
          ob.unsubscribe();
          ob.subscribe();
          // ob.subscribe();
      })
  }

  increaseCount(item){
      item.active++;
      if (item.active >= item.content.length) {
          item.active = 0;
      }
  }
  increaseCountClick(item){
      // this.resetObs();
      item.active++;
      if (item.active >= item.content.length) {
          item.active = 0;
      }
  }
  decreaseCountClick(item){
      // this.resetObs();
      item.active--;
      if (item.active < 0) {
          item.active = item.content.length-1;
      }
  }

  startVideo(id, event){
      this.videoService.startVideo(id, event.srcElement.parentElement.parentElement.parentElement);
  }
  test(){
      console.log("test")
  }

}
