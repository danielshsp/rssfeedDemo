import { Component, OnInit,Input  } from '@angular/core';
import { animation, trigger, transition, style, animate, state, query, stagger } from '@angular/animations';
import { delay } from 'rxjs/operator/delay';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss'],
  animations: [
      
    ]
  
})
export class FeedCardComponent implements OnInit {

  @Input() feed: any;
  constructor() { }

  ngOnInit() {
  }

}
