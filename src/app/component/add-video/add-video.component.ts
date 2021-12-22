import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from 'src/app/service/video-service.service';
import { video } from '../../models/Video'
@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {
  Data: video=new video();
  path="";
  constructor(private VideoSV: VideoServiceService) { }

  ngOnInit(): void {
  }
  save(): void {
    try{
      this.VideoSV.AddVideo(this.Data).subscribe((data) => {
        console.log(data.image);
        console.log(data.file);
      })
    }catch(e){
      alert("Loi!!! "+e);
    }
  }
  uploadFile(event: any): void {
    this.VideoSV.uploadFile(event.target.files[0]).subscribe((data)=>{
      this.path=data.imageURL;
    });
  }
}
