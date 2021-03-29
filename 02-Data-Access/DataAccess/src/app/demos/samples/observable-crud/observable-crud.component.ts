import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SkillsService } from 'src/app/skills/skills.service';
import { Skill } from 'src/app/skills/skill.model';

@Component({
  selector: 'app-observable-crud',
  templateUrl: './observable-crud.component.html',
  styleUrls: ['./observable-crud.component.scss'],
})
export class ObservableCrudComponent implements OnInit {
  constructor(private httpClient: HttpClient, private vs: SkillsService) {}

  result: any;
  fname: string;

  ngOnInit() {}

  getSkills() {
    this.fname = 'getSkills()';

    this.httpClient
      .get<Skill[]>(`${environment.netcoreapi}api/skills`)
      .subscribe((data) => {
        this.result = data;
      });
  }

  getSkill() {
    this.fname = 'getskill()';

    this.httpClient
      .get<Skill>(`${environment.netcoreapi}api/skills/2`)
      .subscribe((data) => {
        this.result = data;
      });
  }

  insertSkill() {
    this.fname = 'insertskill()';

    const skill: Skill = { name: 'NgRx Data', hours: 8, completed: false };
    console.log('skill to insert: ', skill);
    this.httpClient
      .post(`${environment.netcoreapi}api/skills`, skill)
      .subscribe((data) => {
        if (data == null) {
          this.result = 'skill inserted';
        }
      });
  }

  updateSkill() {
    this.fname = 'updateSkill()';

    // let's get a skill to update
    this.httpClient
      .get(`${environment.netcoreapi}api/skills/3`)
      .subscribe((data: Skill) => {
        const sktu: Skill = data;
        sktu.name = 'Updated by Angular';
        console.log('skill to update: ', sktu);

        // Update
        this.httpClient
          .put(`${environment.netcoreapi}api/skills/`, sktu)
          .subscribe(() => {
            this.result = 'skill updated';
          });
      });
  }

  deleteSkill() {
    this.fname = 'deleteSkill()';

    const id = 3;
    this.httpClient
      .delete(`${environment.netcoreapi}api/skills/${id}`)
      .subscribe(() => {
        this.result = `skill with id ${id} deleted`;
        console.log(this.result);
      });
  }
}
