---
title: Drag Drop Directive
_description: Use Ignite UI for Angular Drag Drop directive to move items from one place to another.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Drag Drop directive, Angular Drag Drop controls
---

## Drag and Drop
<p class="highlight">The Ignite UI for Angular Drag and Drop directive enables dragging of elements around the page.</p>
<div class="divider"></div>

#### Demo

<div class="sample-container loading" style="height:650px">
    <iframe id="drag-drop-sample-iframe" src='{environment:demosBaseUrl}/drag-drop-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="drag-drop-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Drag Directive

When an element inside your Angular application needs to be dragged from one place to another the `igxDrag` directive can be used to achieve this behavior. In combination with the `igxDrop` directive the placing of the dragged element can be done as well to have fully interactive application.

### Basic configuration

The `igxDrag` directive can be applied on any DOM element by just adding it to its template.

```html
<div igxDrag>Drag me</div>
```

### DOM Behavior

By default a drag operation starts when the end user swipes at least 5 px in any direction. Otherwise the interaction is considered as a click and the `dragClicked` event is emitted.

When dragging occurs a drag ghost element is spawned and moves along with the mouse cursor or touch interaction. The original element is still present, but it can be hidden automatically when dragging starts with the `hideBaseOnDrag` input.

The dragging can be canceled by setting the `cancel` property of the `dragStart` event to `true`. This will cancel the default dragging logic.

After the user releases the mouse/touch the drag ghost element is removed from the DOM and if the `hideBaseOnDrag` is enabled it will make the original element visible again and the `dragEnd` event will be emitted. If the `animateOnRelease` input is set to `true` all this will execute after the default animation of the drag ghost is finished which consist of returning it from the last dragged position to the position of the original element. Then the drag ghost will be removed and the `returnMoveEnd` event will be emitted.

### Drop Directive

When an element that is being dragged using the `igxDrag` directive needs to be placed in an area, the `igxDrop` can be used to achieve this behavior. It provides events that the user can use to determine if element is entering the drop area and if it is being released inside it.

### Basic configuration
The `igxDrop` directive can be applied to any DOM element just like the `igxDrag` directive. 

````html
<div igxDrop>Drop here</div>
````
One element can have both `igxDrag` and `igxDrop` directives applied, but then it is recommended to use custom logic when another element is being dropped on to it by canceling the `onDrop` event of the `igxDrop` directive. 
