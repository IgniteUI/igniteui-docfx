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

#### Dragging With Ghost

The [`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) directive can be applied on any DOM element by just adding it to its template.

```html
<div igxDrag>Drag me</div>
```

The default behavior of `igxDrag` directive is to leave the base element visible and to spawn a ghost element when drag operation is performed by the end user. A drag operation starts when the end user swipes at least 5 px in any direction. Otherwise the interaction is considered as a click and a `click` event is triggered.

The dragging can be canceled by setting the [`cancel`]({environment:angularApiUrl}/interfaces/idragstarteventargs.html#cancel) property of the [`dragStart`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragstart) event to `true`.

After the user releases the mouse/touch the drag ghost element is removed from the DOM and the [`dragEnd`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragend) event will be emitted.

#### Dragging Without Ghost

When [`ghost`]({environment:angularApiUrl}/classes/igxdragdirective.html#ghost) input set to `false` the base element will be dragged when drag operation starts.

#### Customizing The Ghost Element

The ghost element by default is a copy of the base element the `igxDrag` is used on. It can be customized by providing a template reference to the [`ghostTemplate`](environment:angularApiUrl}/classes/igxdragdirective.html#ghostTemplate) input directly.

##### Usage
```html
<div class="email-content flexlist"
	igxDrag
	[ghostTemplate]="customGhost">
	<div class="sender">
		{{email.sender}} 
	</div>
	<div class="email-title">
		{{email.title}}
	</div>
</div>
<ng-template #customGhost>
	<div class="dragGhost">
		<igx-icon fontSet="material">email</igx-icon> 
		Moving {{ draggedElements }} item{{ (draggedElements > 1 ? 's' : '')}}
	</div>
</ng-template>

```

#### Dragging Using a Handle

You can specify an element that is a child of the `igxDrag` by which to drag since by default the whole element is used to perform that action. It can be done using the `igxDragHandle` directive and can be applied to multiple elements inside the `igxDrag`.

##### Usage
```html
<div
    igxDrag 
    [ghost]="false" 
    [dragTolerance]="0">
    <igx-icon igxDragHandle fontSet="material" class="dialogHandle">drag_indicator</igx-icon>
    <div class="igx-dialog__window">
    </div>
</div>
```

##### Demo

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

You can apply transition animation to the `igxDrag` any time, but it is advised to use it when dragging ends or the element is not currently dragged. This can be achieved using the [`transitionToOrigin`](environment:angularApiUrl}/classes/igxdragdirective.html#transitiontoorigin) and the [`transitionTo`](environment:angularApiUrl}/classes/igxdragdirective.html#transitionto) methods.

The `transitionToOrigin` method as the name suggest animates the currently dragged element or its ghost to the start position where the dragging began. The `transitionTo` method animates the element to a specific location relative to the page (i.e. `pageX` and `pageY`) or to the position of a specified element. If the element is not being currently dragged it will animate anyway or create ghost and animate it to the desired position.

Both functions have arguments that you can set to customize the transition animation and set duration, timing function or delay. If specific start location is set it will animate the element starting from there.

When the transition animation ends if a ghost is created it will be removed and the `igxDrag` directive will return to its initial state or if no ghost is created it will keep its position. In both cases then the [`transitioned`](environment:angularApiUrl}/classes/igxdragdirective.html#transitioned) event will be triggered depending on how long the animation lasts. If no animation is applied it will triggered instantly.

If you want to have other types of animations that involve element transformations you can do that like any other element either using the Angular Animations or straight CSS Animations to either the base `igxDrag` element or its ghost. If you want to apply them to the ghost you would need to define a custom ghost and apply animations to that element.

##### Demo

Reorder items in the list using the drag handle. While dragging a list item other list items will re-order with animation. 

<div class="sample-container loading" style="height:380px">
    <iframe id="list-reorder-sample-iframe" src='{environment:demosBaseUrl}/interactions/list-reorder-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="list-reorder-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Drop Directive

When an element that is being dragged using the [`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) directive needs to be placed in an area, the [`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) can be used to achieve this behavior. It provides events that you can use to determine if element is entering the drop area and if it is being released inside it.

The [`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) directive can be applied to any DOM element just like the [`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) directive. 

TypeScript:
```typescript
public insertStrategy = IgxInsertDropStrategy;
```

HTML:
```html
<div igxDrop [dropStrategy]="insertStrategy"></div>
```

By default the [`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) directive doesn't apply any logic for the dragged element that's why you need to configure the [`dropStrategy`]({environment:angularApiUrl}/classes/igxdropdirective.html#dropstrategy). Drop strategies are discussed in the next section.

#### Drop Strategies

The `igxDrop` comes with 4 drop strategies which are: `Default`, `Prepend`, `Insert` and `Append`:

* The `Default` strategy does not perform any action when an element is dropped onto an `igxDrop` element and is implemented as a class named [`IgxDefaultDropStrategy`]({environment:angularApiUrl}/classes/igxdefaultdropstrategy.html).

* The `Append` strategy inserts the dropped element as a last child  and is implemented as a class named [`IgxAppendDropStrategy`]({environment:angularApiUrl}/classes/igxappenddropstrategy.html). 

* The `Prepend` strategy inserts the dropped element as first child and is implemented as a class named [`IgxPrependDropStrategy`]({environment:angularApiUrl}/classes/igxprependdropstrategy.html).

* The `Insert` strategy inserts the dragged element at the dropped position. If there is a child under the element when it was dropped, the `igxDrag` instanced element will be inserted at that child's index. It is implemented as a class named [`IgxInsertDropStrategy`]({environment:angularApiUrl}/classes/igxinsertdropstrategy.html).

The way a strategy can be applied is by setting the `dropStrategy` input to one of the listed classes above. The value provided has to be e type and not an instance, since the `igxDrop` has to create the instance itself.

##### Example

TypeScript:
```typescript
public appendStrategy = IgxAppendDropStrategy;
```

HTML:
```html
<div igxDrop [dropStrategy]="appendStrategy"></div>
```

##### Canceling a drop strategy

When using a specific drop strategy, its behavior can be canceled in the [`dropped`]({environment:angularApiUrl}/classes/igxdropdirective.html#dropped) events by setting the `cancel` property to true. The `dropped` event is specific to the `igxDrop`. If you does not have drop strategy applied to the `igxDrop` canceling the event would have no side effects.

*Example:*

HTML
```html
<div igxDrag></div>
<!-- ... -->
<div igxDrop (dropped)="onDropped($event)"></div>
```

TypeScript
```typescript
public onDropped(event) {
    event.cancel = true;
}
```

If you would like to implement your own drop logic bind to `dropped` event and execute your logic there or extend the `IgxDefaultDropStrategy` class.

#### Linking Drag to Drop Element
Using the [`dragChannel`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragchannel) and [`dropChannel`]({environment:angularApiUrl}/classes/igxdropdirective.html#dropchannel) input on respectively `igxDrag` and `igxDrop` directives you can link different elements to interact only between each other. For example if an `igxDrag` element needs to be constrained so it can be dropped on specific `igxDrop` element and not all available this can easily be achieved by assigning them the same channel.

##### Example

```html
<div igxDrag [dragChannel]="['Mammals', 'Land']"> Human </div>
<div igxDrag [dragChannel]="['Mammals', 'Water']"> Dolphin </div>
<div igxDrag [dragChannel]="['Insects', 'Air']"> Butterfly </div>
<div igxDrag [dragChannel]="['Insects', 'Land']"> Ant </div>

<div igxDrop [dropChannel]="['Mammals']"> Mammals </div>
<div igxDrop [dropChannel]="['Insects']"> Insects </div>
<div igxDrop [dropChannel]="['Land']"> Land </div>
```

##### Demo

Drag e-mails on the right into the folders on the left.

<div class="sample-container loading" style="height:340px">
    <iframe id="email-sample-iframe" src='{environment:demosBaseUrl}/interactions/email-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="email-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Advanced configuration

#### Demo

Drag items around the kanban board.

<div class="sample-container loading" style="height:700px">
    <iframe id="kanban-sample-iframe" src='{environment:demosBaseUrl}/interactions/kanban-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="kanban-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### API
* [IgxDragDirective]({environment:angularApiUrl}/classes/igxdragdirective.html)
* [IgxDropDirective]({environment:angularApiUrl}/classes/igxdropdirective.html)
* [IgxDefaultDropStrategy]({environment:angularApiUrl}/classes/igxdefaultdropstrategy.html)
* [IgxAppendDropStrategy]({environment:angularApiUrl}/classes/igxappenddropstrategy.html)
* [IgxPrependDropStrategy]({environment:angularApiUrl}/classes/igxprependdropstrategy.html)
* [IgxInsertDropStrategy]({environment:angularApiUrl}/classes/igxinsertdropstrategy.html)

### References

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
