import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FileBrowserComponent} from './file-browser/file-browser.component';
import {MenubarComponent} from './menubar/menubar.component';
import {CodingFilesComponent} from './coding-files/coding-files.component';
import {TreeModule} from 'ng2-tree';
import {AppService} from './app.service';
import {AceEditorModule} from 'ng2-ace-editor';
import {MockServerService} from './mock-server.service';
import {TreeModelService} from './tree-model.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material';

import {MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {FlexLayoutModule} from '@angular/flex-layout';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    FileBrowserComponent,
    MenubarComponent,
    CodingFilesComponent,
  ],
  imports: [
    BrowserModule,
    TreeModule,
    AceEditorModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    HttpModule,
    RouterTestingModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    PerfectScrollbarModule,
    FlexLayoutModule
  ],
  providers: [AppService, MockServerService, TreeModelService, {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
