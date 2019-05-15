import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { HeaderComponent } from './header/header.component';
import {SummaryPipe} from './posts/summary.pipe';
import { DetailsComponent } from './posts/post/details/details.component';
import {AngularFireAction, AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { AddComponent } from './posts/add/add.component';
import {HttpClientModule} from '@angular/common/http';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {FormsModule} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {PostService} from './post.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {DlDateTimeDateModule, DlDateTimePickerModule} from 'angular-bootstrap-datetimepicker';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    HeaderComponent,
    SummaryPipe,
    DetailsComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule,
    NgxPaginationModule,
    AngularEditorModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [AngularFirestore, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
