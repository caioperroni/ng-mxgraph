import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { GraphComponent } from '../graph/graph.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {
  // @Input() graph: GraphComponent;
  sidebar: Sidebar;
  constructor() { }

  // editorUI = this.graph.editorUi;
  @ViewChild('sidebar2') sideElement: ElementRef;
  @ViewChild(GraphComponent)
  private graph: GraphComponent;

  async ngAfterViewInit() {
    const sideDiv = this.sideElement.nativeElement;
    this.sidebar = new Sidebar(await this.graph.editorUi, sideDiv);
  }

}
