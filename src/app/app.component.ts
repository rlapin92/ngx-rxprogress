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

  }

  startTimer(){


    this.progress.register('timer1', timer(5000)).subscribe(a => {
      console.log(a);
    });
  }

  startTimer2() {
    this.progress.register('timer2', timer(5000)).subscribe(a => {
      console.log(a);
    });
  }
  startTimer4() {
    this.progress.register('timer4', timer(5000)).subscribe(a => {
      console.log(a);
    });
  }
}
