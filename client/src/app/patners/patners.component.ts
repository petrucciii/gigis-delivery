import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patners',
  templateUrl: './patners.component.html',
  styleUrls: ['./patners.component.scss']
})
export class PatnersComponent implements OnInit {
  patners = {
    lcLogo: '../../assets/images/patners/lc.png',
    osLogo: '../../assets/images/patners/os.png',
    ppLogo: '../../assets/images/patners/pp.png',
    rdmLogo: '../../assets/images/patners/rdm.png'
  }

  patnersLogos: string[] = [
    this.patners.lcLogo,
    this.patners.osLogo,
    this.patners.ppLogo,
    this.patners.rdmLogo
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
