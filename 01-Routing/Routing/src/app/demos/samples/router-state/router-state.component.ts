import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-state',
  templateUrl: './router-state.component.html',
  styleUrls: ['./router-state.component.scss'],
})
export class RouterStateComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateTo() {
    this.router.navigate(['/skills', 1], { state: { data: 99 } });
  }
}
