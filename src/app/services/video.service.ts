import { Injectable } from '@angular/core';

declare var YT: any;

@Injectable()
export class VideoService {

  player: any;

  constructor() { }

  startVideo(id, container){

      let playerEle = document.getElementById('player');
      if (playerEle)
          playerEle.remove();
      playerEle = document.createElement('div');
      playerEle.id = 'player'
      container.append(playerEle);

      // if (!this.player){
      //     if (!window['YTConfig']) {
      //       var YTConfig = {'host': 'http://www.youtube.com'};
      //      }

      this.player = new YT.Player('player', {
          host: "http://www.youtube.com",
          height: '390',
          width: '640',
          videoId: id
          // events: {
          //   'onReady': onPlayerReady,
          //   'onStateChange': onPlayerStateChange
          // }
        });
      // } else {
      //     debugger
      //     this.player.loadVideoById(id);
      // }

  }

}
