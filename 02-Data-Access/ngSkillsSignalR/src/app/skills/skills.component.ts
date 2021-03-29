import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';
import { Skill } from './skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[];
  skillToAdd: string;

  constructor(private service: SkillsService) {}

  ngOnInit() {
    this.service.getSkills().subscribe(data => (this.skills = data));
  }

  removeSkill(s: Skill) {
    this.skills = this.skills.filter((i: Skill) => i !== s);
  }

  addSkill() {
    const sk: Skill = { id: this.skills.length + 1, title: this.skillToAdd };
    this.skills.push(sk);
  }
}
