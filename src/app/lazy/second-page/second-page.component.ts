import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WidgetService } from '../data.service';
import { Widget } from '../widget';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  widgets: Widget[] = [];

  constructor(private router: Router, private widget: WidgetService) { }

  ngOnInit(): void {
    this.widgets = this.widget.getWidgets();
  }

  navigateToFirstPage(): void {
    this.router.navigate(['first']);
  }

}
