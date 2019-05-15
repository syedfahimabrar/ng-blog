import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../Post.model';
import {PostService} from '../../post.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  service:PostService;
  defaultpic = "https://www.w3schools.com/bootstrap4/paris.jpg";
  @Input() post: PostModel;
  constructor(service:PostService,private toastr: ToastrService) {
    this.service = service;
  }

  delete(){
    if(confirm("Are you sure?")){
      this.service.delete(this.post.id);
      this.toastr.success('item has been deleted', '');
    }
  }
  ngOnInit() {
    //console.log(this.post);
  }

}
