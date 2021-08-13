import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patners',
  templateUrl: './patners.component.html',
  styleUrls: ['./patners.component.scss']
})
export class PatnersComponent implements OnInit {
  patners: string[] = [
    '../../assets/images/patners/mc.ico',
    '../../assets/images/patners/bk.ico',
    '../../assets/images/patners/kfc.ico'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
