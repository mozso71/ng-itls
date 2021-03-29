import { Component, Input, OnInit } from '@angular/core';
import { CommentItem } from '../comment.model';
import { SnackbarService } from '../../../shared/snackbar/snackbar.service';
import { CommentService } from '../comment.service';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss'],
})
export class MarkdownEditorComponent implements OnInit {
  constructor(private sns: SnackbarService, private cs: CommentService) {}

  @Input() component: string;

  comments = this.cs.getComments().pipe(tap((cs) => console.log(cs)));
  editorEdit = false;
  current: CommentItem;

  ngOnInit() {}

  saveComment() {
    this.sns.displayAlert('saving', this.component);
  }

  editComment(c: CommentItem) {
    this.current = c;
    this.editorEdit = true;
  }
}
