import { Component } from '@angular/core';
import {ProgressRegistryService} from '../../projects/ngx-rxprogress/src/lib/service/progress-registry.service';
import {timer} from 'rxjs';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'progress-lib';

  constructor(private progress: ProgressRegistryService) {
    this.progress.register('testId', timer(2000)).subscribe(a => {
      console.log(a);
    });


    this.progress.register('testId', timer(5000)).subscribe(a => {
      console.log(a);
    });
  }

}
