import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // const menuItems = [
  //   'Pools & Spas',
  //   'Supplies',
  //   'Resources',
  //   'Services'
  // ]

  const menuItems = [
    {
      text:'Pools & Spas',
      link: '',
    },
    {
      text:'Supplies',
      link: '',
    },
    {
      text:'Resources',
      link: '',
    },
    {
      text:'Services',
      link: '',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
