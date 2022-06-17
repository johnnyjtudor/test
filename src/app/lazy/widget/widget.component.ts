import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  isContentVisible: boolean = true;
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() numberOfMilisecondsForLoading: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  async refreshContent(): Promise<void> {
    this.isContentVisible = false;
    await new Promise(f => setTimeout(f, this.numberOfMilisecondsForLoading));
    this.isContentVisible = true;
  }

}
