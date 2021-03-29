import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { DemoService } from './demo.service';
import { AppInterceptor } from '../app.interceptor';
import { ObservableCrudComponent } from './samples/observable-crud/observable-crud.component';
import { JsonServerComponent } from './samples/json-server/json-server.component';
import { AdvHttpClientComponent } from './samples/adv-http-client/adv-http-client.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'observablescurd', component: ObservableCrudComponent },
      { path: 'adv-httpclient', component: AdvHttpClientComponent },
      { path: 'json-server', component: JsonServerComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    ObservableCrudComponent,
    JsonServerComponent,
    AdvHttpClientComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    DemoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true,
    },
  ],
})
export class DemosModule {}
