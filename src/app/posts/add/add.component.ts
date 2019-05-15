import { Component, OnInit } from '@angular/core';
import {PostModel} from '../Post.model';
import {PostService} from '../../post.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  htmlContent:string = "write Something";
  post:PostModel;
  title:string = "hello";
  constructor(private postservice:PostService,private toastr: ToastrService) {
    this.post = new PostModel();
  }

  ngOnInit() {

  }
  onSubmit(){
    this.postservice.createPost(this.post);
    this.toastr.success('post created');
    this.reset();
  }
  reset(){
    this.post = new PostModel();
  }

}
