import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { Observable } from 'rxjs';
import { CommentForoService } from '../services/comment-foro.service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  comments$: Observable<any[]>;
  constructor(private commentService: CommentService, private commentForoServices: CommentForoService) { }

  ngOnInit() {
    // this.comments$ = this.commentService.getAllComments$();
    this.comments$ = this.commentForoServices.getAllCommentsForo$();
  }

}
