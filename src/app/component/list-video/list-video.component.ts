import { VideoServiceService } from './../../service/video-service.service';
import { video } from './../../models/Video';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.scss']
})
export class ListVideoComponent implements OnInit {
  Data!: video[];
  private subscriptions!: Subscription;
  constructor(private VideoSV: VideoServiceService,private Router:Router) { }

  ngOnInit(): void {
    this.showVideo()
  }
  showVideo(){
    this.subscriptions=this.VideoSV.GetVideo().subscribe(video => {
      this.Data=video;
      console.log(this.Data);
    })
  }
  OnDelete(id:String){
    const notification=confirm("Bạn Chắc Chắn Xóa???");
    if(notification)
    {
        try{
          this.subscriptions=this.VideoSV.DeleteVideo(id).subscribe((data)=>{
            this.updateDataAfterDelete(id);
          });
        }
        catch(err){
          alert("Lỗi!!!"+err);
        }
    }
  }
  updateDataAfterDelete(id:String){
    try{
      for(let i=0;i<this.Data.length;i++){
        if(id==this.Data[i]._id){
          this.Data.splice(i,1);
          break;
        }
      }
    }
    catch(err){
      console.log(err);
    }
  }
}
