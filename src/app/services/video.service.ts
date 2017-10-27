import { Injectable } from '@angular/core';

declare var YT: any;

@Injectable()
export class VideoService {

  player: any;
  display: boolean = false;

  constructor() { }


  closeVideo(){
    let playerEle = document.getElementById('player');
    if (playerEle)
        playerEle.remove();
    this.display = false;

  }

  startVideo(id, container){
      this.display = true;

      let playerEle = document.getElementById('player');
      let playerContainer = document.getElementById('player-container');
      if (!playerContainer){
          playerContainer = document.createElement('div');
          playerContainer.id = 'player-container';
      }
      if (playerEle)
          playerEle.remove();

      playerEle = document.createElement('div');
      playerEle.id = 'player';

      playerContainer.appendChild(playerEle);
      container.append(playerContainer);

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
