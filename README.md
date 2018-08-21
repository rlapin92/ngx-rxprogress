# ngx-rxprogress

This angular 2+ library simplifies usage of progressbars in your applications.

It allows to decorate component to be as progress bar and it automatically defines whether it should be displayed or not.
You can also add an attribute to some component to be replaced with progress bar while fetching some data.
The progress is showing while until some observable is not complete.



You can find the library here: https://www.npmjs.com/package/ngx-rxprogress

To start working with ngx-rxprogress just install it to your project as dependency.

# Install 

npm i ngx-rxprogress --save

# How to use:

## First example (show progress while performing some long operation):

In template (your-component is your progress-bar component) or you can use built-in <ngx-progress>:
```javascript
<your-component *ngxProgress="{id:'someId'}"> </your-component>
```
In your component inject progressRegistryService  
```javascript
  constructor(private progress: ProgressRegistryService) {

  }
``` 
and then wrap your observable with long time operation with register method of the progress registry service:

```javascript
this.progress.register('someId', timer(5000)).subscribe(a => {
      console.log(a);
    });
```
Register method has two arguments. First one is an id that will be used to associate with this process in order that every progress bar can track the current status. Second param is an observable.
As you can see *ngxProgress directive has value {id: 'someId'} this id will be used to listen to incoming statuses from the registered observable.

## Second example (show progress instead of some component):

The progress registration in component will be the same.
But in template you should use this syntax: 
```javascript
<your-component *ngxProgress="{id:'someId','replace':true', 'style: {width: '50px', height:'50px'}'}"> </your-component>
```  
In this case your-component is some component that should display some important information but when this information is fetched we will see progress bar(by default it is ngx-progress, but we can define this component using template-ref:
```javascript

<ng-template #progressRef>
      <ngx-progress class="progress"></ngx-progress>
    </ng-template>
    <div class="test-container"
         *ngxProgress="{replace: true, id: 'timer4', progressTemplate: progressRef}">
      Hello
    </div>
```


# Demo
For examples please visit: https://stioneq.github.io/ngx-rxprogress/
