import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  constructor(private appSevice: AppService) {
  }

  ngOnInit() {
  }

  retriveCode() {
    let currentCode = this.appSevice.getCode();
    console.log('---------------------------------------');
    console.log(currentCode);
    console.log('---------------------------------------');
  }

}
