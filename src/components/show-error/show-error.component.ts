import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.css'],
  standalone: true,
})
export class ShowErrorComponent implements OnInit, OnChanges {
  @Input() error!: any;
  @Input() customError!: any;
  compose = {};
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes['error'] && changes['error'].currentValue) {
        const _error = _.cloneDeep(changes['error']?.currentValue || {});

        if (_error) {
          this.handleComposeError(_error, this.customError);
        }
      }

      if (changes['customError'] && changes['customError'].currentValue) {
        const _customError = changes['_customError']?.currentValue || {};

        if (_customError) {
          this.handleComposeError(this.error, _customError);
        }
      }
    }
  }

  handleComposeError(_error: any = {}, _customError: any = {}) {
    this.customError = {
      ..._error,
      ..._customError,
    };

    console.log(this.customError);
  }
}
