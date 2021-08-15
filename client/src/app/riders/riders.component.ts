import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.scss']
})
export class RidersComponent implements OnInit {

  mail: FormGroup;
  mailError: boolean = false;

  uploadForm: FormGroup | undefined;
  correctUpload: boolean = false;

  constructor(public fb: FormBuilder, public http: HttpClient) { 
    this.mail = fb.group({
      "name": ['', Validators.required],
      "email": ['', Validators.required],
      "reason": ['', Validators.required],
      "experience": ['', Validators.required],
      "city": ['', Validators.required],
      "curriculum": ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.uploadForm = this.fb.group({
      profile: ['']
    });
  }

  fileUpload(event: any): void {
  }

  sendMail(): void {
    if (this.mail.valid == false) {
      this.mailError = true;
    } else {
      this.mailError = false;

      const formData = () => {
        let name = this.mail.controls['name'].value;
        let email = this.mail.controls['email'].value;
        let reason = this.mail.controls['reason'].value;
        let experience = this.mail.controls['experience'].value;
        let city = this.mail.controls['city'].value;
    
        const data = [name, email, reason, experience, city];
        return data;
      }

      const upload = () => {
      }
    }
  }

}
