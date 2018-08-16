import {ComponentFactoryResolver, Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {ProgressRegistryService} from '../service/progress-registry.service';
import {map, scan} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {ProgressComponent} from '../component/progress/progress.component';
import {ProgressConfig} from '../model/progress-config';

@Directive({
  selector: '[ngxProgress]'
})
export class ProgressDirective implements OnInit, OnDestroy {
  @Input('ngxProgress') config: ProgressConfig;
  private subscription: Subscription;

  private prevVisible = false;

  private set visible(visible: boolean) {
    this.container.clear();
    if (visible) {
      if (this.config.progressTemplate) {
        this.container.createEmbeddedView(this.config.progressTemplate);
      } else {
        this.container.createComponent(this.componentFactory.resolveComponentFactory(ProgressComponent));
      }
    } else {
      this.container.createEmbeddedView(this.template);
    }
    this.prevVisible = visible;
  }


  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>,
              private componentFactory: ComponentFactoryResolver,
              private progressRegistry: ProgressRegistryService) {
  }

  ngOnInit() {
    this.subscription = this.progressRegistry.progressUpdate$(this.config.id).pipe(
      map(s => s.status),
      scan((acc, cur) => acc + cur, 0)).subscribe((status) => {
      this.visible = status > 0;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
