import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Skill } from '../../../skills/skill.model';

@Component({
  selector: 'app-adv-http-client',
  templateUrl: './adv-http-client.component.html',
  styleUrls: ['./adv-http-client.component.scss'],
})
export class AdvHttpClientComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  result: any;
  fname: string;

  ngOnInit(): void {}

  observeResponse() {
    this.httpClient
      .get(`${environment.netcoreapi}api/skills`, {
        observe: 'response',
      })
      .subscribe((response: HttpResponse<any>) => {
        this.result = response;
        console.log('Response using {observe: "response"}: ', response);
        console.log('Response body: ', response.body);
      });
  }

  usingHeadersHttpClient() {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      UserEmail: 'alessandro.galgo@sighthounds.at',
      SomeHeader: 'SomeVal',
    });

    console.log('adding header:', header);

    this.httpClient
      .get(`${environment.netcoreapi}api/skills`, { headers: header })
      .subscribe((data) => {
        console.log('Response using headers variable: ', data);
        this.result = data;
      });
  }

  usingInterceptor() {
    this.httpClient
      .get<Skill[]>(`${environment.netcoreapi}api/skills`)
      .subscribe((data) => {
        this.result = data;
      });
  }
}
