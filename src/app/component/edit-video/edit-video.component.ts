import { video } from './../../models/Video';
import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from 'src/app/service/video-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.scss']
})
export class EditVideoComponent implements OnInit {
  Data: video=new video();
  private id="";
  constructor(private VideoSV: VideoServiceService,private GetID: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.GetID.snapshot.paramMap.get("id")+"";
    this.ShowRow(this.id);
  }
  ShowRow(id: String): void {
    this.VideoSV.GetVideoID(this.id).subscribe(video => {
      this.Data=video;
      console.log(video);
    })
  }
  save(): void {
    const notification = confirm("Bạn Chắc Chắn Sửa???");
    if(notification){
      try{
        this.VideoSV.UpdateVideo(this.id,this.Data).subscribe(data => {
          console.log(data);
        })
      }catch(e){
        alert("Lỗi!!!"+e)
      }
    }
  }
}
