import {NgModule} from '@angular/core';
import {ProgressComponent} from './component/progress/progress.component';
import {CommonModule} from '@angular/common';
import { ProgressDirective } from './directive/progress.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ProgressComponent, ProgressDirective],
  exports: [ProgressComponent, ProgressDirective],
  entryComponents: [ProgressComponent]
})
export class NgxRxprogressModule {
}
