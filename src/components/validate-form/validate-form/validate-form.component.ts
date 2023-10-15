import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ShowErrorComponent } from 'src/components/show-error/show-error.component';

@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, ShowErrorComponent],
})
export class ValidateFormComponent implements OnInit {
  emailVar = '';
  customError = {};
  constructor() {}

  ngOnInit() {}

  handleSubmitForm(form: NgForm) {}
}
