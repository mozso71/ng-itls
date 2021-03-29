import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MenuService } from 'src/app/shared/menu/menu.service';
import { environment } from 'src/environments/environment';
import { DemoItem } from '../demo-item.model';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.scss'],
})
export class DemoContainerComponent implements OnInit {
  title: string = environment.title;
  header = 'Please select a demo';
  demos$: Observable<DemoItem[]> = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private demoService: DemoService,
    public ms: MenuService
  ) {}

  ngOnInit() {
    this.setMenu();
    this.setMetadata();
    this.getWorbenchStyle();
  }

  private setMenu() {
    this.demos$ = this.demoService.getItems();
  }

  getWorbenchStyle() {
    let result = {};
    this.ms.visible$.subscribe((visible) => {
      result = visible
        ? {
            'margin-left': '10px',
          }
        : {};
    });
    return result;
  }

  setMetadata() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.rootRoute(this.route)),
        filter((route: ActivatedRoute) => route.outlet === 'primary')
      )
      .subscribe((route: ActivatedRoute) => {
        this.header =
          route.component != null
            ? `Component: ${route.component
                .toString()
                .substring(6, route.component.toString().indexOf('{') - 1)}`
            : '';
      });
  }

  rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
