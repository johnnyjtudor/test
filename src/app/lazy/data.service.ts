import { Injectable } from '@angular/core';

import { widgets } from '../consts';
import { Widget } from './widget';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor() { }

  getWidgets(): Widget[] {
    return widgets;
  }

}
