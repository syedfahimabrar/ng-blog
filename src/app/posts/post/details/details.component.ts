import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostModel} from '../../Post.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {PostService} from '../../../post.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id;
  firestore;
  service: PostService;
  model: firebase.firestore.DocumentData;
  constructor(route: ActivatedRoute, service: PostService) {
    this.id = route.snapshot.params['id'];
    this.service = service;
    this.model = new PostModel();
  }

  ngOnInit() {
    this.service.getPost(this.id).subscribe(res =>{
      this.model = res.data();
      console.log(this.model);
      }
    );
    console.log(this.model);
  }
  reset(){
  }

}
