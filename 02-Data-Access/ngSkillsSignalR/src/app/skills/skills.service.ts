import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Skill } from './skills.model';
import { HttpClient } from '@angular/common/http';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private arrSkills: Skill[];
  private skills: BehaviorSubject<Skill[] | []>;
  private hubConnetion: signalR.HubConnection;

  constructor(private httpClient: HttpClient) {
    this.initSkills();
  }

  private initSkills() {
    this.skills = new BehaviorSubject([]);
    this.httpClient
      .get<Skill[]>(`${environment.skillsapi}skills`)
      .subscribe((data) => {
        this.arrSkills = data;
        this.skills.next(this.arrSkills);
        this.initSocketConnection();
      });
  }

  private initSocketConnection() {
    this.hubConnetion = new signalR.HubConnectionBuilder()
      .withUrl(environment.skillshub)
      .build();

    this.hubConnetion.on('skillsChanged', (data: Skill[]) => {
      console.log('Data received from hub', data);
      this.arrSkills = data;
      this.skills.next(this.arrSkills);
    });

    this.hubConnetion.start();
  }

  getSkills(): Observable<Skill[]> {
    return this.skills;
  }
}
