import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
    this.content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis';
    this.loveIts=0;
    this.created_at=new Date();
  }

  loveIt(){
    this.loveIts++; 
    console.log(this.loveIts);   
    return true;
  }

  dontLoveIt(){
    this.loveIts--;
    console.log(this.loveIts);
    return true;
  }

  getColor(){
    if(this.loveIts>0){
      return 'green';
    }else if(this.loveIts<0){
      return 'red';
    }
  }

}
