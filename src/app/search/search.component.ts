import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Dealers } from '../dealers';
import { configService } from '../config/config.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  showConfig() {
    // console.log('dealers ', Dealers)
    console.log('configService ', configService)
    // this.configService.getConfig()
    //   .subscribe((data: Config) => this.config = {
    //       dealersUrl: data['dealersUrl'],
    //       textfile:  data['textfile']
    //   });
    //
    //   console.log('hello',this.config)
  }


  constructor() { }

  ngOnInit() {
    this.showConfig();
  }

}
