import {Component, OnInit, ViewChild} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-coding-files',
  templateUrl: './coding-files.component.html',
  styleUrls: ['./coding-files.component.scss']
})
export class CodingFilesComponent implements OnInit {

  codeStatus = '';
  tabs: any[] = [];
  fromTop = 20;
  fromTopSmallNavBar = 5;
  numberOfTabs = 0;

  text: string;
  // text = 'class TestDemo\n' +
  //   '{\n' +
  //   '    public void testCaseDemo1()\n' +
  //   '    {\n' +
  //   '        Assertions.assertTrue("Checking value for true", true);\n' +
  //   '    }\n' +
  //   '}';

  options: any = {maxLines: 1000, printMargin: false};
  @ViewChild('editor') editor;

  onChange(code) {
    this.appService.setCode(code);
    console.log('-------------------------------');
    console.log(code);
    console.log('-------------------------------');
  }

  // onChange(codeStatus) {
  //   console.log('-------------------------------');
  //   console.log(codeStatus);
  //   console.log('-------------------------------');
  // }


  constructor(private  appService: AppService) {
    // dummy code for second approach
    this.numberOfTabs = 35;
    for (let i = 1; i < this.numberOfTabs; i++) {
      this.tabs.push({
        name: 'Sample' + i + '.java',
        active: i === 1 ? true : false
      });
    }
    if ( this.numberOfTabs > 19) {

      this.fromTop = this.fromTop + 15;
      this.fromTopSmallNavBar = this.fromTopSmallNavBar + 20;
    }
    console.log(this.fromTop);
    console.log(this.fromTopSmallNavBar);
  }


  ngOnInit() {

    // this.editor.getEditor().setOptions({
    //   enableBasicAutocompletion: true
    // });
    //
    // this.editor.getEditor().commands.addCommand({
    //   name: 'showOtherCompletions',
    //   bindKey: 'Ctrl-.',
    //   exec: function (editor) {
    //
    //   }
    // });
  }

  someAction($event): void {
    console.log('Cliked on X');
    console.log($event);
  }

}
