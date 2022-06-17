import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondPageComponent } from './second-page/second-page.component';
import { WidgetComponent } from './widget/widget.component';
import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
  declarations: [
    SecondPageComponent,
    WidgetComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
