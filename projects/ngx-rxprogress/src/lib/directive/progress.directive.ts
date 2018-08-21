import {
  ComponentFactory,
  ComponentFactoryResolver, ComponentRef, Directive, Input, OnDestroy, OnInit, TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {Subscription} from 'rxjs/index';
import {ProgressRegistryService} from '../service/progress-registry.service';
import {ProgressConfig} from '../model/progress-config';
import {ProgressComponent} from '../component/progress/progress.component';

@Directive({
  selector: '[ngxProgress]'
})
export class ProgressDirective implements OnInit, OnDestroy {

  @Input('ngxProgress') config: ProgressConfig;
  private subscription: Subscription;
  private progress: ComponentFactory<ProgressComponent>;


  private set visible(visible: boolean) {
    this.container.clear();

    if (!this.config.replace) {
      if (visible) {
        this.container.createEmbeddedView(this.template);
      }
    } else {
      if (!visible) {
        this.container.createEmbeddedView(this.template);
      } else {
        if (this.config.progressTemplate) {
          this.container.createEmbeddedView(this.config.progressTemplate);
        } else {
          debugger;
          const componentRef = this.container.createComponent(this.progress);
          componentRef.instance.width = this.config.style.width;
          componentRef.instance.height = this.config.style.height;
        }
      }
    }
  }

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>,
              private componentFactory: ComponentFactoryResolver,
              private progressRegistry: ProgressRegistryService) {
  }

  ngOnInit() {
    this.visible = false;
    if (this.config) {
      this.progress = this.componentFactory.resolveComponentFactory(ProgressComponent);
      this.subscription = this.progressRegistry.progressUpdate$(this.config.id).subscribe((status) => {
        this.visible = status > 0;
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
