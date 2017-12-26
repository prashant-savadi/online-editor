import {Component, OnInit, ViewChild} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-coding-files',
  templateUrl: './coding-files.component.html',
  styleUrls: ['./coding-files.component.scss']
})
export class CodingFilesComponent implements OnInit {

  codeStatus =  '';

  tex: string;
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

}
