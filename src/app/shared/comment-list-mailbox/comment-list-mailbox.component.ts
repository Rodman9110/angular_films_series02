import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-list-mailbox',
  templateUrl: './comment-list-mailbox.component.html',
  styleUrls: ['./comment-list-mailbox.component.css']
})
export class CommentListMailboxComponent implements OnInit {

  @Input() comments;
  constructor() { }

  ngOnInit() {
  }

}
