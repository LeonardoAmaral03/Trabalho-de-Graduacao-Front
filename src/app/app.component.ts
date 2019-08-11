import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {VERSION} from '@angular/material';
import {NavItem} from './nav-item';
import {NavService} from './services/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appDrawer', {static: false}) appDrawer: ElementRef;
  version = VERSION;
  navItems: NavItem[] = [
    {
      displayName: 'Computador',
      iconName: 'computer',
      // route: 'maintenance',
      children: [
        {
          displayName: 'Listar Computadores',
          iconName: 'view_list',
          // route: 'maintenance/maintenances'
        },
        {
          displayName: 'Cadastrar Computador',
          iconName: 'add_circle',
          // route: 'maintenance/maintenance-new'
        }
      ]
    },
    {
      displayName: 'Hardware/Software',
      iconName: 'mouse',
      // route: 'maintenance',
      children: [
        {
          displayName: 'Listar Hardwares/Softwares',
          iconName: 'view_list',
          // route: 'maintenance/maintenances'
        },
        {
          displayName: 'Cadastrar Hardware/Software',
          iconName: 'add_circle',
          // route: 'maintenance/maintenance-new'
        }
      ]
    },
    {
      displayName: 'Manutenção',
      iconName: 'build',
      route: 'maintenance',
      children: [
        {
          displayName: 'Listar Manutenções',
          iconName: 'view_list',
          route: 'maintenance/maintenances'
        },
        {
          displayName: 'Cadastrar Manutenção',
          iconName: 'add_circle',
          route: 'maintenance/maintenance-new'
        }
      ]
    }
  ];

  constructor(private navService: NavService) {
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
