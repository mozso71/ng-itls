import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { DemoService } from './demo.service';
import { FlexLayoutApiComponent } from './samples/flex-layout-api/flex-layout-api.component';
import { MouseDomObservablesComponent } from './samples/mouse-dom-observables/mouse-dom-observables.component';
import { DebouncedSearchComponent } from './samples/operators/debounced-search/debounced-search.component';
import { OperatorsComponent } from './samples/operators/operators.component';
import { SubjectsComponent } from './samples/subjects/subjects.component';
import { SubsinkComponent } from './samples/subsink/subsink.component';
import { UnsubscribingComponent } from './samples/unsubscribing/unsubscribing.component';
import { VouchersService } from './samples/voucher.service';
import { StatefulComponent } from './samples/stateful/stateful.component';
import { EvtBusComponent } from './samples/evt-bus/evt-bus.component';
import { VouchesContainerComponent } from './samples/ngrx-vouchers/vouches-container/vouches-container.component';
import { NgrxVouchersComponent } from './samples/ngrx-vouchers/voucher-list/ngrx-vouchers.component';
import { VoucherEditComponent } from './samples/ngrx-vouchers/voucher-edit/voucher-edit.component';
import { StoreModule } from '@ngrx/store';
import { demosFeatureKey, DemoReducer } from './store/reducers/demos.reducer';
import { CreatingObservableComponent } from './samples/creating-observables/creating-observable.component';
import { AsyncComponent } from './samples/async/async.component';
import { SharedModule } from '../shared/shared.module';
import { MarkdownEditorComponent } from './comments/markdown-editor/markdown-editor.component';
import { SumComponent } from './samples/stateful/sum/sum.component';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'subjects', component: SubjectsComponent },
      { path: 'creating', component: CreatingObservableComponent },
      { path: 'mousedomobs', component: MouseDomObservablesComponent },
      { path: 'operators', component: OperatorsComponent },
      { path: 'flexlayoutapi', component: FlexLayoutApiComponent },
      { path: 'unsubscribe', component: UnsubscribingComponent },
      { path: 'subsink', component: SubsinkComponent },
      { path: 'streams', component: AsyncComponent },
      { path: 'stateful', component: StatefulComponent },
      { path: 'evtbus', component: EvtBusComponent },
      { path: 'ngrx', component: VouchesContainerComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    CreatingObservableComponent,
    MouseDomObservablesComponent,
    OperatorsComponent,
    FlexLayoutApiComponent,
    UnsubscribingComponent,
    DebouncedSearchComponent,
    SubsinkComponent,
    SubjectsComponent,
    StatefulComponent,
    EvtBusComponent,
    VouchesContainerComponent,
    NgrxVouchersComponent,
    VoucherEditComponent,
    MarkdownEditorComponent,
    AsyncComponent,
    SumComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forFeature(demosFeatureKey, DemoReducer),
  ],
  providers: [DemoService, VouchersService],
})
export class DemosModule {}
