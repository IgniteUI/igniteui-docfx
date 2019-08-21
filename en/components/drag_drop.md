---
title: Drag and Drop
_description: Use Ignite UI for Angular Drag and Drop directives to move DOM elements from one place to another.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Drag and Drop directives
---

## Drag and Drop
<p class="highlight">The Ignite UI for Angular Drag and Drop directives enable dragging of elements around the page.</p>

#### Demo

Drag and drop icon to reposition it.

<div class="sample-container loading" style="height:325px">
    <iframe id="icons-sample-iframe" src='{environment:demosBaseUrl}/interactions/icons-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="icons-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
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

When dragging occurs a drag ghost element is spawned and moves along with the mouse cursor or touch interaction. The original element is still present, but it can be hidden automatically when dragging starts with the [`renderGhost`]({environment:angularApiUrl}/classes/igxdragdirective.html#renderGhost) input set to `false`.

The dragging can be canceled by setting the [`cancel`]({environment:angularApiUrl}/interfaces/idragstarteventargs.html#cancel) property of the [`dragStart`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragstart) event to `true`. This will cancel the default dragging logic.

After the user releases the mouse/touch the drag ghost element is removed from the DOM and if the [`renderGhost`]({environment:angularApiUrl}/classes/igxdragdirective.html#renderghost) is enabled it will make the original element visible again and the [`dragEnd`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragend) event will be emitted. If you want to animate the drop you should manually call the [`transitionTo`]({environment:angularApiUrl}/classes/igxdragdirective.html#transitionto) method. Then the drag ghost will be removed and the [`transitioned`]({environment:angularApiUrl}/classes/igxdragdirective.html#transitioned) event will be emitted.

#### Usage
```html
<ul>
    <li *ngFor="let folder of folders" igxDrop>
        <igx-icon fontSet="material">{{folder.icon}}</igx-icon> 
        <span class="folder-title">{{folder.text}}</span>
    </li>
</ul>
<ng-template #customGhost>
    <div class="dragGhost">
        <igx-icon fontSet="material">email</igx-icon> 
        Moving {{ draggedElements }} item{{ (draggedElements > 1 ? 's' : '')}}
    </div>
</ng-template>
```

#### Customizing The Ghost Element

The ghost element by default is a copy of the base element the `igxDrag` is used on. It can be customized by providing a template reference to the [`ghostTemplate`](environment:angularApiUrl}/classes/igxdragdirective.html#ghostTemplate) input directly.

#### Usage
```html
<div igxDrag [renderGhost]="true" *ngFor="let elem of draggableElems" >
    <span [style.margin]="'auto'">{{elem.label}}</span>
</div>
```

#### Dragging Using a Handle

The user can specify an element that is a child of the `igxDrag` by which to drag since by default the whole element is used to perform that action. It can be done using the `igxDragHandle` directive and can be applied to multiple elements inside the `igxDrag`.

When multiple channels are applied to an `igxDrag` and one of them matches one of applied channels to an `igxDrop`, then all events and applied behaviors would be executed when that element is dropped.

#### Demo

Drag the dialog using the handle.

<div class="sample-container loading" style="height:325px">
    <iframe id="drag-dialog-sample-iframe" src='{environment:demosBaseUrl}/interactions/drag-dialog-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="drag-dialog-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Animations

By default when an element is being dragged there are no animations applied.

The user can apply transition animation to the `igxDrag` any time, but it is advised to use it when dragging ends or the element is not currently dragged. This can be achieved using the `transitionToOrigin` and the `transitionTo` methods.

The `transitionToOrigin` method as the name suggest animates the currently dragged element or its ghost to the start position where the dragging began. The `transitionTo` method animates the element to a specific location relative to the page (i.e. `pageX` and `pageY`) or to the position of a specified element. If the element is not being currently dragged it will animate anyway or create ghost and animate it to the desired position.

Both function have arguments that the user can set to customize the transition animation and set duration, timing function or delay. If specific start location is set it will animate the element starting from there.

When the transition animation ends if a ghost is created it will be removed and the `igxDrag` directive will return to its initial state or if no ghost is created it will keep its position. In both cases then the `transitioned` event will be triggered depending on how long the animation lasts. If no animation is applied it will triggered instantly.

If the user want to have other types of animations that involve element transformations he can do that like any other element either using the Angular Animations or straight CSS Animations to either the base `igxDrag` element or its ghost. If he wants to apply them to the ghost he would need to define a custom ghost and apply animations to that element.


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

#### Linking Drag to Drop Element
Using the `dragChannel` and `dropChannel` input on respectively igxDrag and `igxDrop` directives the user can link different elements to interact only between each other. For example if an `igxDrag` element needs to be constrained so it can be dropped on specific `igxDrop` element and not all available this can easily be achieved by assigning them same channel.

#### Example

```html
<div igxDrag [dragChannel]="['Mammals', 'Land']"> Human </div>
<div igxDrag [dragChannel]="['Mammals', 'Water']"> Dolphin </div>
<div igxDrag [dragChannel]="['Insects', 'Air']"> Butterfly </div>
<div igxDrag [dragChannel]="['Insects', 'Land']"> Ant </div>

<div igxDrop [dropChannel]="['Mammals']"> Mammals </div>
<div igxDrop [dropChannel]="['Insects']"> Insects </div>
<div igxDrop [dropChannel]="['Land']"> Land </div>
```

#### Demo

Drag the dialog using the handle.

<div class="sample-container loading" style="height:325px">
    <iframe id="email-sample-iframe" src='{environment:demosBaseUrl}/interactions/email-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="email-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Drop Strategies

The `igxDrop` comes with 4 drop strategies which are defined in the enum `IgxDropStrategy` and has the following values - `Default`, `Append`, `Prepend`, `Insert`:

* The `Default` strategy does not perform any action when an element is dropped onto an IgxDrop element and is implemented as a class named `IgxDefaultDropStrategy`.

* As the names suggest the first `Append` strategy inserts the dropped element as a last child  and is implemented as a class named `IgxAppendDropStrategy`. 

* The `Prepend` strategy inserts the dropped element as first child and is implemented as a class named `IgxPrependDropStrategy`.

* The `Insert` strategy inserts the dragged element at the dropped position. If there is a child under the element when it was dropped, the `igxDrag` instanced element will be inserted at that child's index. It is implemented as a class named `IgxInsertDropStrategy`

The way a strategy can be applied is by setting the `dropStrategy` input to one of the listed classes above. The value provided has to be e type and not an instance, since the `igxDrop` has to create the instance itself.

#### Example

TypeScript:
```typescript
public insertStrategy = IgxInsertDropStrategy;
```

HTML:
```html
<div igxDrop [dropStrategy]="insertStrategy"></div>
```

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
