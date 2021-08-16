import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.scss']
})
export class RidersComponent implements OnInit {

  URL: string = 'http://petrucciii.altervista.org'

  mail: FormGroup;
  mailError: boolean = false;

  correctUpload: boolean = false;
  selectedFiles: any;
  
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
  }

  fileUpload(event: any): void {
    this.selectedFiles = event.target.files;  
    this.correctUpload = true; 
    console.log(this.selectedFiles);
    
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
        if (this.selectedFiles) {
          const fD = new FormData;
          fD.append('file', this.selectedFiles);
          fD.append('name', formData()[0]);
          fD.append('email', formData()[1]);
          fD.append('reason', formData()[2]);
          fD.append('experience', formData()[3]);
          fD.append('city', formData()[4]);
          fD.append('request', 'UPLOAD');
          let reqServer = this.http.post(`${this.URL}/upload.php`, formData, {
            reportProgress: true,
            observe: 'events'
          });
        } 
      }
      upload();
    }
  }
}