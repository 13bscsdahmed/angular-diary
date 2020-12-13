import { Component } from '@angular/core';
import { NavbarModel } from './modules/shared/components/models/navbar.model';
import { appRoutes } from './config/app-routes.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links: NavbarModel[] = [
    {
      label: 'Add Note',
      link: `${appRoutes.diary.root}/${appRoutes.diary.note}`,
      activeClass: 'active'
    },
    {
      label: 'History',
      link: `${appRoutes.diary.root}/${appRoutes.diary.history}`,
      activeClass: 'active'
    }
  ];
}
