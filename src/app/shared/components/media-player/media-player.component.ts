import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: any = {
    cover: 'https://lastfm.freetls.fastly.net/i/u/ar0/20157062c639a350bb99d58047b892e5',
    name: 'Enemy X JID',
    album: 'Enemy'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
