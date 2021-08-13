import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patners',
  templateUrl: './patners.component.html',
  styleUrls: ['./patners.component.scss']
})
export class PatnersComponent implements OnInit {
  patners = {
    mcLogo: '../../assets/images/patners/mc.ico',
    bkLogo: '../../assets/images/patners/bk.ico',
    kfcLogo: '../../assets/images/patners/kfc.ico',
  }

  patnersLogos: string[] = [
    this.patners.mcLogo,
    this.patners.bkLogo,
    this.patners.kfcLogo,
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
