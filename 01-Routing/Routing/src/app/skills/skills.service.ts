import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Skill } from './skill.model';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(private httpClient: HttpClient) {}

  private url = `${environment.api}`;

  getSkills(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.url);
  }

  getSkill(id): Observable<Skill> {
    return this.getSkills().pipe(
      map((skills) => skills.find((sk) => sk.id == id))
    );
  }

  addSkill(skill: Skill): Observable<Skill> {
    return this.httpClient.post<Skill>(this.url, skill);
  }

  deleteSkill(skill: Skill): Observable<any> {
    return this.httpClient.delete(this.url);
  }
}
