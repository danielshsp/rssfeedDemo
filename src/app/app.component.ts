import { Component, OnInit } from '@angular/core';
import { FeedServiceService } from './feed-service.service';

// Add the RxJS Observable operators we need in this app.
import {Observable} from 'rxjs/Rx';
import { FeedInfo } from './model/feed';
import { FeedEntry } from './model/feed-entry';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent implements OnInit {

  //private feedUrl: string = 'https%3A%2F%2Fwww.becompany.ch%2Fen%2Fblog%2Ffeed.xml';
  private feedUrl: string ='http%3A%2F%2Fwww.ynet.co.il%2FIntegration%2FStoryRss1854.xml';
  private feeds : FeedEntry  [];
  feedarr$  : Observable <FeedEntry[]>;
  url$  : Observable <any>;
  x:any;

  constructor (
    private feedServiceService: FeedServiceService
  ) {}

  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    /*this.feedServiceService.getUrlFeed().subscribe(data=>this.x = data);
    alert(this.x);
    console.log(this.x);*/
    this.feedarr$ = this.feedServiceService.getFeedContent(this.feedUrl).map(feed=>feed.items);
   /* this.feedServiceService.getFeedContent(this.feedUrl)
     .subscribe(
            feed => this.feeds = feed.items,
            error => console.log(error));
            console.log(1,this.feeds );*/
        
  }

}