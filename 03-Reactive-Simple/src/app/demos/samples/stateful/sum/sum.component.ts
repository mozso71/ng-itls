import { Component, OnInit } from '@angular/core';
import { StatefulVoucherService } from '../stateful-voucher.service';
import { Voucher } from '../../model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.scss'],
})
export class SumComponent implements OnInit {
  constructor(private vs: StatefulVoucherService) {}

  sum = this.vs
    .getAllVouchers()
    .pipe(map((vs) => vs.reduce((runningSum, v) => runningSum + v.Amount, 0)));

  ngOnInit(): void {}
}
