import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NodeMenuItemAction, TreeModel, TreeModelSettings} from 'ng2-tree';
import {Tree} from 'ng2-tree';
import {MockServerService} from '../mock-server.service';
import {AppService} from '../app.service';
import {_keyValueDiffersFactory} from '@angular/core/src/application_module';
import {forEach} from '@angular/router/src/utils/collection';
import index from '@angular/cli/lib/cli';
import {PerfectScrollbarComponent, PerfectScrollbarConfigInterface, PerfectScrollbarDirective} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-file-browser',
  templateUrl: './file-browser.component.html',
  styleUrls: ['./file-browser.component.scss']
})
export class FileBrowserComponent implements OnInit {

  @Output()
  selectedFileIdParent: EventEmitter<string> = new EventEmitter<string>();

  settings = '';
  config = '';

  public tree: TreeModel;
  @ViewChild('treeComponent') treeComponent;

  constructor(private mockServerSevice: MockServerService) {
    this.tree = mockServerSevice.getTreeModel();
  }

  // ------------ publish check
  t(e): void {
    console.log('Called method: t');
    console.log(e);
    if (this.iFile(e)) {
      this.selectedFileIdParent.emit(String(e.node.id));
    }
  }
  // ------------

  //custom menus
  onMenuItemSelected($event): void {
    console.log('Called method: onMenuItemSelected');
    console.log($event);
  }

  handleSelected($event): void {
    console.log('Called method: handleSelected');
    if (this.iFile($event)) {
      this.selectedFileIdParent.emit(String($event.node.id));
    }
  }

  collpaseAll(): void {
    this.treeComponent.getControllerByNodeId(1).collapse();
  }

  expandAll(): void {
    this.treeComponent.getControllerByNodeId(1).expand();
  }

  iFile($event): boolean {
    console.log('-------------------isFile-------------started');
    console.log($event);
    let allMenuItems = $event.node.menuItems;
    console.log('Menu items length: ' + allMenuItems.length);
    if (allMenuItems.length === 10) {
      return true;
    }
    return false;
  }

  handleCollapsed($event): void {
    console.log($event);
  }

  handleExpanded($event): void {
    console.log($event);
  }

  handleRemoved($event): void {
    console.log($event);
    console.log('Removed: Parent ID: ' + $event.node.parent.id);
  }

  handleRenamed($event): void {
    console.log($event);
    console.log('Renamed: Parent ID: ' + $event.node.parent.id);
  }

  handleMoved($event): void {
    console.log($event);
  }

  handleCreated($event): void {
    console.log($event);
    console.log('Parent ID: ' + $event.node.parent.id);
    const cuurentNode = $event.node;

    let counter = 1;
    let someObj = cuurentNode;
    let allIds: number[] = [];
    while (true) {
      someObj = someObj.parent;
      try {
        console.log(counter + ' : ' + someObj.id);
        allIds.push(someObj.id);
      } catch (e) {
        console.log('Meet exception!!');
        break;
      }

      // -------------------
      counter++;
      if (counter === 100) {
        break;
      }
      // -------------------
    }
    console.log(allIds);
  }

  handleNextLevel($event): void {
    console.log($event);
  }

  ngOnInit() {
  }

}
