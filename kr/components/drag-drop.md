---
title: Drag and Drop
_description: Use Ignite UI for Angular Drag and Drop directives to move DOM elements from one place to another.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Drag and Drop directives
_language: kr
---

## Drag and Drop
<p class="highlight">The Ignite UI for Angular Drag and Drop directives enable dragging of elements around the page.</p>

#### Demo

Drag and drop icon to reposition it.


<code-view style="height:325px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/icons-sample" >
</code-view>

<div class="divider--half"></div>

### Drag Directive

When an element inside your Angular application needs to be dragged from one place to another the [`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) directive can be used to achieve this behavior. In combination with the [`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) directive the placing of the dragged element can be done as well to have fully interactive application.

#### Basic configuration

The [`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) directive can be applied on any DOM element by just adding it to its template.

```html
<div igxDrag>Drag me</div>
```

#### DOM Behavior

By default a drag operation starts when the end user swipes at least 5 px in any direction. Otherwise the interaction is considered as a click and the [`dragClicked`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragclicked) event is emitted.

When dragging occurs a drag ghost element is spawned and moves along with the mouse cursor or touch interaction. The original element is still present, but it can be hidden automatically when dragging starts with the [`hideBaseOnDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html#hidebaseondrag) input.

The dragging can be canceled by setting the [`cancel`]({environment:angularApiUrl}/interfaces/idragstarteventargs.html#cancel) property of the [`dragStart`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragstart) event to `true`. This will cancel the default dragging logic.

After the user releases the mouse/touch the drag ghost element is removed from the DOM and if the [`hideBaseOnDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html#hidebaseondrag) is enabled it will make the original element visible again and the [`dragEnd`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragend) event will be emitted. If the [`animateOnRelease`]({environment:angularApiUrl}/classes/igxdragdirective.html#animateonrelease) input is set to `true` all this will execute after the default animation of the drag ghost is finished which consist of returning it from the last dragged position to the position of the original element. Then the drag ghost will be removed and the [`returnMoveEnd`]({environment:angularApiUrl}/classes/igxdragdirective.html#returnmoveend) event will be emitted.

#### Usage
```html
<div igxDrag [hideBaseOnDrag]="true" [animateOnRelease]="true" *ngFor="let elem of draggableElems" >
    <span [style.margin]="'auto'">{{elem.label}}</span>
</div>
```

### Drop Directive

When an element that is being dragged using the [`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) directive needs to be placed in an area, the [`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) can be used to achieve this behavior. It provides events that the user can use to determine if element is entering the drop area and if it is being released inside it.

#### Basic Configuration
The [`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) directive can be applied to any DOM element just like the [`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) directive. 

````html
<div igxDrop>Drop here</div>
````

By default the [`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) directive comes with logic that appends the dropped [`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) element as a child of the element that has instanced the [`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html). It can be overridden by canceling the [`onDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html#ondrop) event of the [`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) directive. This can be done by setting the [`cancel`]({environment:angularApiUrl}/interfaces/igxdropeventargs.html#cancel) argument that the [`onDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html#ondrop) event provides.

If you define a custom drop logic and have the [`animateOnRelease`]({environment:angularApiUrl}/classes/igxdragdirective.html#animateonrelease) input of the [`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) set to `true` it is recommended to also call the [`dropFinished()`]({environment:angularApiUrl}/classes/igxdragdirective.html#dropfinished) method of the [`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) when you finish with manipulating the DOM. This informs the [`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) to update its relative position to the new location in the DOM so that it will animate correctly.

Example of cancelling [`onDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html#ondrop) default drop logic:

````html
<div igxDrop (onDrop)="onElemDrop($event)">Drop here</div>
````

````ts
public onElemDrop(event: IgxDropEventArgs) {
    event.cancel = true; // This cancels the default drop logic
    // ...
    // Custom implementation logic
    // ...

    // This is required to tell the dragged element the dropping has finished, so it can return to the new location/old location.
    // It can be called anywhere in the code as well.
    event.drag.dropFinished(); 
}
````

#### Advanced Configuration
One element can have both [`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) and [`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) directives applied, but then it is recommended to use custom logic when another element is being dropped on to it by canceling the [`onDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html#ondrop) event of the [`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) directive.

#### Usage
````html
<div class="dropArea" igxDrop (onEnter)="onAreaEnter()" (onLeave)="onAreaLeave()">
    <span *ngIf="!elementInsideArea">Drag here.</span>
    <span *ngIf="elementInsideArea">Release to put element here.</span>
</div>
````

````ts
//App component...
public onAreaEnter() {
    this.elementInsideArea = true;
    this.changeDetectionRef.detectChanges();
}
public onAreaLeave() {
    this.elementInsideArea = false;
    this.changeDetectionRef.detectChanges();
}
//...
````


### API
* [IgxDragDirective]({environment:angularApiUrl}/classes/igxdragdirective.html)
* [IgxDropDirective]({environment:angularApiUrl}/classes/igxdropdirective.html)

### References

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
