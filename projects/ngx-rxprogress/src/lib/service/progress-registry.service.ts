import {Injectable} from '@angular/core';
import {Observable, of, ReplaySubject} from 'rxjs';
import {filter, switchMap, tap} from 'rxjs/operators';
import {ProgressStatus} from '../model/progress-status';
import {finalize, map, scan} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ProgressRegistryService {
  maxProgressCount = 20;
  private subject$: ReplaySubject<ProgressStatus> = new ReplaySubject<ProgressStatus>(this.maxProgressCount);

  registerObservables(...observable) {

  }

  register(selector: string, observable: Observable<any>): Observable<any> {
    return of(null).pipe(
      tap(() => this.onProgressStart(selector)),
      switchMap(() => observable),
      finalize(() => this.onProgressEnd(selector)));
  }

  progressUpdate$(selector: string) {
    return this.subject$.pipe(filter(s => s.selector === selector),
      map(s => s.status),
      scan((acc, cur) => acc + cur, 0));
  }

  private onProgressEnd(selector: string) {
    this.subject$.next({selector: selector, status: -1});
  }

  private onProgressStart(selector: string) {
    this.subject$.next({selector: selector, status: 1});
  }
}
