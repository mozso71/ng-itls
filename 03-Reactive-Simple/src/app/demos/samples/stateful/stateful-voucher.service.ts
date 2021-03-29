import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { lateVoucher } from '../late-voucher';
import { Voucher } from '../model';

@Injectable({
  providedIn: 'root',
})
export class StatefulVoucherService {
  constructor(private httpClient: HttpClient) {
    this.initData();
    this.addLateVoucher();
  }

  private vouchersArray: Voucher[] = [];
  private vouchers: BehaviorSubject<Voucher[]> = new BehaviorSubject(
    this.vouchersArray
  );

  url = environment.apiUrl;

  private initData() {
    this.httpClient.get<Voucher[]>(this.url).subscribe((data) => {
      this.vouchersArray = data;
      this.vouchers.next(this.vouchersArray);
    });
  }

  addLateVoucher() {
    setTimeout(() => {
      this.vouchersArray.push(lateVoucher as Voucher);
      this.vouchers.next(this.vouchersArray);
    }, 4000);
  }

  getAllVouchers(): Observable<Voucher[]> {
    return this.vouchers;
  }

  getVoucherById(id: number): Observable<Voucher> {
    return this.vouchers.pipe(map((arr) => arr.find((v) => v.ID == id)));
  }

  insertVoucher(v: Voucher): any {
    // send to db
    this.httpClient.post(this.url, v).subscribe((result: any) => {
      this.vouchersArray.push(result);
      this.vouchers.next(this.vouchersArray);
    });
  }

  updateVoucher(v: Voucher): any {}

  deleteVoucher(id: number) {
    this.vouchersArray = this.vouchersArray.filter((v) => v.ID != id);
    this.vouchers.next(this.vouchersArray);
  }
}
