import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {TreeModel} from 'ng2-tree';

@Component({
  selector: 'app-file-browser',
  templateUrl: './file-browser.component.html',
  styleUrls: ['./file-browser.component.scss']
})
export class FileBrowserComponent implements OnInit {

  @Output()
  codeStatus: EventEmitter<string> = new EventEmitter<string>();
  settings = '';

  public tree: TreeModel = {
    value: 'Root Folder',
    id: 1,
    children: [
      {
        value: 'Test Folder',
        id: 2,
        children: [
          {
            value: 'sample1.java',
            id: 21
          },
          {
            value: 'sample2.java',
            id: 22
          },
          {
            value: 'sample3.java',
            id: 23
          },
          {
            value: 'sample4.java',
            id: 24
          },
          {
            value: 'sample5.java',
            id: 25
          },
          {
            value: 'sample6.java',
            id: 26
          }
        ]
      },
      {
        value: 'sample7.java',
        id: 27
      },
      {
        value: 'sample8.java',
        id: 28
      },
      {
        value: 'sample9.java',
        id: 29
      },
      {
        value: 'sample10.java',
        id: 30
      },
      {
        value: 'sample11.java',
        id: 31
      },
      {
        value: 'Level two',
        id: 32,
        children: [
          {
            value: 'Level three',
            id: 33,
            children: [
              {
                value: 'sample13.java',
                id: 34
              },
              {
                value: 'sample14.java',
                id: 35
              }]
          }]
      }
    ]
  };

  private lastFFSNodeId = 86;
  newNode: Node;

  @ViewChild('treeComponent') treeComponent;

  constructor() {
  }

  // ------------ publish check
  t($event): void {
    console.log($event);
    this.codeStatus.emit('This is some data from file browser::: ' + $event.node.value);
  }
  // ------------

  handleSelected($event): void {
    console.log($event);
    this.codeStatus.emit('This is some data from file browser::: ' + $event.node.value);
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
