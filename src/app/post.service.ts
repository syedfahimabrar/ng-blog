import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {PostModel} from './posts/Post.model';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class PostService {

  postcollection: AngularFirestoreCollection<PostModel>;
  posts: Observable<PostModel[]>;
  constructor(private fireStore: AngularFirestore) {
    // @ts-ignore
    this.posts = this.fireStore.collection('posts').snapshotChanges();
  }
  getPosts() {
    // @ts-ignore
    this.posts = this.fireStore.collection('posts',ref => ref.orderBy('postDate', 'desc')).snapshotChanges();
    return this.fireStore.collection('posts',ref => ref.orderBy('postDate', 'desc')).snapshotChanges();
  }
    getPost(id: string) {
      return this.fireStore.collection('posts').doc(id).get();
    }
  createPost(post: PostModel) {
    const param = JSON.parse(JSON.stringify(post));
    return this.fireStore.collection('posts').add({...post, postDate: firebase.firestore.Timestamp.now()});
  }
  delete(id:string){
    this.fireStore.collection('posts').doc(id).delete();
  }
}
