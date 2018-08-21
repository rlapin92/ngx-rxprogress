import {Component, HostBinding} from '@angular/core';


@Component({
  selector: 'ngx-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.styl']
})
export class ProgressComponent {
  @HostBinding('style.width') width;
  @HostBinding('style.height') height;

}
