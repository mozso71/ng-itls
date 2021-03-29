import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';
import { MenuService } from 'src/app/shared/menu/menu.service';
import { environment } from 'src/environments/environment';
import { DemoService } from '../demo.service';
import { EventBusService } from '../samples/evt-bus/event-bus.service';
import { SidebarActions } from '../samples/evt-bus/sidebar-actions';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.scss'],
})
export class DemoContainerComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private demoService: DemoService,
    public ms: MenuService,
    private eb: EventBusService
  ) {}

  title: string = environment.title;
  header = 'Please select a demo';
  demos$ = this.demoService.getItems();
  showEditor = this.eb.Commands.pipe(
    map((action) => (action == SidebarActions.HIDE_MARKDOWN ? false : true))
  );

  ngOnInit() {
    this.setMetadata();
    this.getWorbenchStyle();
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
