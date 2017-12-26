import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FileBrowserComponent } from './file-browser/file-browser.component';
import { MenubarComponent } from './menubar/menubar.component';
import { CodingFilesComponent } from './coding-files/coding-files.component';
import {TreeModule} from 'ng2-tree';
import {AppService} from './app.service';
import { AceEditorModule } from 'ng2-ace-editor';


@NgModule({
  declarations: [
    AppComponent,
    FileBrowserComponent,
    MenubarComponent,
    CodingFilesComponent
  ],
  imports: [
    BrowserModule,
    TreeModule,
    AceEditorModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
