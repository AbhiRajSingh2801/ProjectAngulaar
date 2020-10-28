import { Component, OnInit, OnDestroy } from '@angular/core';
import {MediaObserver, MediaChange} from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-container',
  templateUrl: './my-container.component.html',
  styleUrls: ['./my-container.component.css']
})
export class MyContainerComponent implements  OnInit, OnDestroy {
 
  mediaSub: Subscription;
  deviceXs: Boolean;
  constructor( public MediaObserver:MediaObserver ){}
  ngOnInit(){
    this.mediaSub = this.MediaObserver.media$.subscribe((result:MediaChange)=>{
      console.log(result.mqAlias);

      this.deviceXs=result.mqAlias === 'xs' ? true : false;
    })
  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }
}