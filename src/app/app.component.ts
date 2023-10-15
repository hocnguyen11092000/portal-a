import { Component, OnInit, inject } from '@angular/core';
import { TestComponent } from 'src/components/test/test.component';
import { NgxCoreAPICallService } from 'ng-core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ValidateFormComponent } from 'src/components/validate-form/validate-form/validate-form.component';
@Component({
  selector: 'ng-portal-a',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [TestComponent, HttpClientModule, ValidateFormComponent],
  providers: [NgxCoreAPICallService],
})
export class AppComponent implements OnInit {
  title = 'ng-portal-a';

  private _api = inject(NgxCoreAPICallService);

  ngOnInit(): void {
    console.log(this._api);

    this._api
      .callApi(
        {
          url: 'https://jsonplaceholder.typicode.com/posts',
          method: 'GET',
          external: true,
        },
        null,
        null,
        null
      )
      .subscribe(console.log);
  }
}
