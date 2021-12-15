import { Component, OnInit } from '@angular/core';

interface NavItem {
  title: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  navItems: NavItem[] = [
    {
      title: 'customers',
      link: '/dashboard/customers',
      icon: 'bi bi-briefcase-fill',
    },
    {
      title: 'contacts',
      link: '/dashboard/contacts',
      icon: 'bi bi-journal',
    },
    {
      title: 'leads',
      link: '/dashboard/leads',
      icon: 'bi bi-person-bounding-box',
    },
    {
      title: 'reports',
      link: '/dashboard/reports',
      icon: 'bi bi-file-earmark-bar-graph',
    },
    {
      title: 'integrations',
      link: '/dashboard/integrations',
      icon: 'bi bi-layers-fill',
    },
    {
      title: 'year-end sale',
      link: '/dashboard/year-end-sale',
      icon: 'bi bi-emoji-sunglasses-fill',
    },
    {
      title: 'HTTP tut',
      link: '/dashboard/tut/http',
      icon: 'bi bi-emoji-sunglasses-fill',
    },
    {
      title: 'Forms (template driven) tut',
      link: '/dashboard/tut/forms',
      icon: 'bi bi-emoji-sunglasses-fill',
    },
    {
      title: 'firestore tut',
      link: '/dashboard/tut/firestore',
      icon: 'bi bi-emoji-sunglasses-fill',
    },
    {
      title: 'auth tut',
      link: '/dashboard/tut/auth',
      icon: 'bi bi-emoji-sunglasses-fill',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
