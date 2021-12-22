import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { video } from '../../models/Video'
import { VideoServiceService } from '../../service/video-service.service';
@Component({
  selector: 'app-show-video',
  templateUrl: './show-video.component.html',
  styleUrls: ['./show-video.component.scss']
})
export class ShowVideoComponent implements OnInit {
  Data!: video[];
  private subscriptions!: Subscription;
  constructor(private VideoSV: VideoServiceService,private Router:Router) { }

  ngOnInit(): void {
    this.showVideo();
  }
  ngOnDestroy(){
    if(this.subscriptions){
      this.subscriptions.unsubscribe();
    }
  }
  showVideo(){
    this.VideoSV.GetVideo().subscribe((data) => {
      this.Data=data;

    })
  }
}
