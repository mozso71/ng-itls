import { Component, OnDestroy, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';
import { Skill } from '../skill.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss'],
})
export class SkillsListComponent implements OnInit, OnDestroy {
  constructor(private service: SkillsService) {}

  skills: Skill[] = [];
  subs: Subscription;

  ngOnInit(): void {
    this.subs = this.service.getSkills().subscribe((data) => {
      this.skills = data;
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getNextId(): number {
    return (
      this.skills.reduce((acc, f) => (acc = acc > f.id ? acc : f.id), 0) + 1
    );
  }
}
