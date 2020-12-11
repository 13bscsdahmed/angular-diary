import { Component, OnInit } from '@angular/core';
import { constants } from '../../../config/app.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constants  = constants;
  constructor() { }

  ngOnInit(): void {
  }

}
