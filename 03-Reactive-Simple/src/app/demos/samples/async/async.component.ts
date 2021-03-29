import { Component, OnInit } from '@angular/core';
import { VouchersService } from '../voucher.service';
import { Voucher } from '../model';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss'],
})
export class AsyncComponent implements OnInit {
  constructor(private vs: VouchersService) {}

  // Classic Subscribe Pattern
  vouchers: Voucher[];

  // Declarative Pattern
  vouchers$ = this.vs.getVouchers();

  ngOnInit() {
    this.getDataClassic();
  }

  getDataClassic() {
    this.vs.getVouchers().subscribe((data) => {
      this.vouchers = data;
    });
  }
}
