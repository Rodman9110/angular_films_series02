import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  comments$: Observable<any[]>;
  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.comments$ = this.commentService.getAllComments$();

  }

}
