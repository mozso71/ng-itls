import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CommentItem } from './comment.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  url = environment.api + 'comments';

  getComments() {
    return this.http.get<CommentItem[]>(this.url);
  }

  saveComment(cm: CommentItem) {
    if (cm.id === undefined) {
      return this.http.post(this.url, cm);
    } else {
      return this.http.put(`${this.url}/${cm.id}`, cm);
    }
  }
}
