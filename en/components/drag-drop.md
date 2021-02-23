---
title: Angular Drag and Drop | IgniteUI for Angular | Infragistics
_description: Learn how to use Angular drag and drop directives to perform dragging of elements around the page.
_keywords: Angular Drag and Drop, Ignite UI for Angular, Infragistics
---

# Drag and Drop
<p class="highlight">The Ignite UI for Angular Drag and Drop directives enable dragging of elements around the page. The supported features include free dragging, using a drag handle, drag ghost, animations and multiple drop strategies.</p>

## Angular Drag and Drop Example

Drag and drop icon to reposition it.

<div class="sample-container loading" style="height:325px">
    <iframe id="icons-sample-iframe" src='{environment:demosBaseUrl}/interactions/icons-sample' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular Drag and Drop Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="icons-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="icons-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Drag Directive

When an element inside your Angular application needs to be dragged from one place to another on the page, the [`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) directive is designed to help achieve this behavior. In combination with the [`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) directive, the placing of the dragged element can be done as well, so you can have fully interactive application.

### Dragging Fundamentals

A drag operation starts when the end user swipes at least 5px in any direction. This is customizable and can be changed using the [`dragTolerance`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragtolerance) input. Otherwise the interaction is considered as a click and a `dragClick` event is triggered.

When the dragging starts, the [`dragStart`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragstart) event is triggered. To prevent any actual movement to occur, the event can be canceled by setting the [`cancel`]({environment:angularApiUrl}/interfaces/idragstarteventargs.html#cancel) property to `true`.

Before any actual movement is about to be performed, the [`dragMove`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragmove) event is also triggered, containing the last and next position of the pointer. It is triggered every time a movement is detected while dragging an element around. 

After the user releases the mouse/touch the drag ghost element is removed from the DOM and the [`dragEnd`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragend) event will be emitted.

> [!Note]
> Due to the nature of the [`dragMove`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragmove) event, it can be triggered many times in a short period of time, which may cause performance issues for complex operations done when triggered.

### Dragging With Ghost

The [`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) directive can be applied on any DOM element by just adding it to its template.

```html
<div igxDrag>Drag me</div>
```

The default behavior of `igxDrag` directive is to leave the base element unmodified and to create a ghost element when drag operation is performed by the end user.

Before the ghost is rendered on the page, a [`ghostCreate`]({environment:angularApiUrl}/classes/igxdragdirective.html#ghostcreate) event is triggered containing information of the ghost element that is about to be added. The event is triggered right after the [`dragStart`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragstart) event. If the [`dragStart`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragstart) is canceled, no ghost will be created and the [`ghostCreate`]({environment:angularApiUrl}/classes/igxdragdirective.html#ghostcreate) event will not trigger accordingly.

Right before the ghost is about to be removed, the [`ghostDestroy`]({environment:angularApiUrl}/classes/igxdragdirective.html#ghostcreate) event will be triggered.

### Customizing The Ghost

The ghost element by default is a copy of the base element the `igxDrag` is used on. It can be customized by providing a template reference to the [`ghostTemplate`](environment:angularApiUrl}/classes/igxdragdirective.html#ghostTemplate) input directly.

#### Usage
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

### Dragging Without Ghost

If you would like to move the base element, to which the `igxDrag` directive is applied, you can do that by setting the [`ghost`]({environment:angularApiUrl}/classes/igxdragdirective.html#ghost) input to `false`. That way there will be no extra ghost element rendered and if you need to apply custom styling when dragging and element, you can apply it directly to the base element.

```html
<div igxDrag [ghost]="false">Drag me</div>
```

### Dragging Using a Handle

You can specify an element that is a child of the `igxDrag` by which to drag, since by default the whole element is used to perform that action. It can be done using the `igxDragHandle` directive and can be applied to multiple elements inside the `igxDrag`.

#### Usage
```html
<div
    igxDrag 
    [ghost]="false"
    [dragTolerance]="0"
    (dragMove)=onDragMove($event)>
    <igx-icon igxDragHandle fontSet="material" class="dialogHandle">drag_indicator</igx-icon>
    <div class="igx-dialog__window">
    </div>
</div>
```

#### Demo

Drag the dialog using the handle.

<div class="sample-container loading" style="height:325px">
    <iframe id="drag-dialog-sample-iframe" src='{environment:demosBaseUrl}/interactions/drag-dialog-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="drag-dialog-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="drag-dialog-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Animations

When an element is being dragged, there are no animations applied by default.

You can apply transition animation to the `igxDrag` at any time, but it is advised to use it when dragging ends or the element is not currently dragged. This can be achieved by using the [`transitionToOrigin`]({environment:angularApiUrl}/classes/igxdragdirective.html#transitiontoorigin) and the [`transitionTo`]({environment:angularApiUrl}/classes/igxdragdirective.html#transitionto) methods.

The `transitionToOrigin` method, as the name suggests, animates the currently dragged element or its ghost to the start position, where the dragging began. The `transitionTo` method animates the element to a specific location relative to the page (i.e. `pageX` and `pageY`) or to the position of a specified element. If the element is not being currently dragged, it will animate anyway or create ghost and animate it to the desired position.

Both functions have arguments that you can set to customize the transition animation and set duration, timing function or delay. If specific start location is set it will animate the element starting from there.

When the transition animation ends, if a ghost is created, it will be removed and the `igxDrag` directive will return to its initial state. If no ghost is created, it will keep its position. In both cases, then the [`transitioned`]({environment:angularApiUrl}/classes/igxdragdirective.html#transitioned) event will be triggered, depending on how long the animation lasts. If no animation is applied, it will be triggered instantly.

You can have other types of animations that involve element transformations. That can be done like any other element either using the Angular Animations or straight CSS Animations to either the base `igxDrag` element or its ghost. If you want to apply them to the ghost, you would need to define a custom ghost and apply animations to its element.

#### Demo

Reorder items in the list using the drag handle. While dragging a list item other list items will re-order with animation. 

<div class="sample-container loading" style="height:380px">
    <iframe id="list-reorder-sample-iframe" src='{environment:demosBaseUrl}/interactions/list-reorder-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="list-reorder-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="list-reorder-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Ignoring draggable elements

If the user wants to have interactable children of the main element which have igxDrag instanced, he can set the [`igxDragIgnore`]({environment:angularApiUrl}/classes/igxdragignoredirective.html) directive in order to make them be ignored by the igxDrag and not perform any dragging action. This will leave these elements be fully interactable and receive all mouse events.

```html
<div [igxDrag]="myData">
    <span>Drag me!</span>
    <igx-icon igxDragIgnore fontSet="material" (click)="remove()">bin</igx-icon>
</div>
```

## Drop Directive

When an element that is being dragged using the [`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) directive needs to be placed in an area, the [`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) can be used to achieve this behavior. It provides events that you can use to determine if an element is entering the boundaries of the element it is applied to and if it is being released inside it.

The [`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) directive can be applied to any DOM element just like the [`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) directive.

By default, the [`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) directive doesn't apply any logic for modifying the dragged element position in the DOM. That's why you need to specify a [`dropStrategy`]({environment:angularApiUrl}/classes/igxdropdirective.html#dropstrategy) or apply custom logic. Drop strategies are discussed in the next section.

### Drop Strategies

The `igxDrop` comes with 4 drop strategies which are: `Default`, `Prepend`, `Insert` and `Append`:

* `Default` - does not perform any action when an element is dropped onto an `igxDrop` element and is implemented as a class named [`IgxDefaultDropStrategy`]({environment:angularApiUrl}/classes/igxdefaultdropstrategy.html).

* `Append` - always inserts the dropped element as a last child  and is implemented as a class named [`IgxAppendDropStrategy`]({environment:angularApiUrl}/classes/igxappenddropstrategy.html). 

* `Prepend` - always inserts the dropped element as first child and is implemented as a class named [`IgxPrependDropStrategy`]({environment:angularApiUrl}/classes/igxprependdropstrategy.html).

* `Insert` - inserts the dragged element at last position. If there is a child under the element when it was dropped though, the `igxDrag` instanced element will be inserted at that child's position and the other children will be shifted. It is implemented as a class named [`IgxInsertDropStrategy`]({environment:angularApiUrl}/classes/igxinsertdropstrategy.html).

The way a strategy can be applied is by setting the `dropStrategy` input to one of the listed classes above. The value provided has to be a type and not an instance, since the `igxDrop` needs to create and manage the instance itself.

#### Example

TypeScript:
```typescript
public appendStrategy = IgxAppendDropStrategy;
```

HTML:
```html
<div igxDrop [dropStrategy]="appendStrategy"></div>
```

#### Canceling a drop strategy

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

If you would like to implement your own drop logic, we advise binding to the `dropped` event and execute your logic there or extend the `IgxDefaultDropStrategy` class.

### Linking Drag to Drop Element
Using the [`dragChannel`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragchannel) and [`dropChannel`]({environment:angularApiUrl}/classes/igxdropdirective.html#dropchannel) input on respectively `igxDrag` and `igxDrop` directives, you can link different elements to interact only between each other. For example, if an `igxDrag` element needs to be constrained so it can be dropped on specific `igxDrop` element and not all available, this can easily be achieved by assigning them the same channel.

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

Drag e-mails on the right into the folders on the left.

<div class="sample-container loading" style="height:340px">
    <iframe id="email-sample-iframe" src='{environment:demosBaseUrl}/interactions/email-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="email-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="email-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Advanced Configuration

Since both `igxDrag` and `igxDrop` combined can be used in many different and complex application scenarios, the following example demonstrates how they can be used in an Kanban board. 

The user could reorder the cards in each column. It is done by setting each card also a drop area, so we can detect when another card has entered its area and switch them around at runtime, to provide better user experience.

It won't be Kanban board without also the ability to switch cards between columns. A card can be directly moved from one column to another column at a specific position. It is achieved here with a dummy object, so it would create a visual area where the card will be position if released. The dummy object is removed once the dragging of a card ends or exits another column.

### Demo

Drag items around the kanban board.

<div class="sample-container loading" style="height:700px">
    <iframe id="kanban-sample-iframe" src='{environment:demosBaseUrl}/interactions/kanban-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="kanban-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="kanban-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## API
* [IgxDragDirective]({environment:angularApiUrl}/classes/igxdragdirective.html)
* [IgxDropDirective]({environment:angularApiUrl}/classes/igxdropdirective.html)
* [IgxDefaultDropStrategy]({environment:angularApiUrl}/classes/igxdefaultdropstrategy.html)
* [IgxAppendDropStrategy]({environment:angularApiUrl}/classes/igxappenddropstrategy.html)
* [IgxPrependDropStrategy]({environment:angularApiUrl}/classes/igxprependdropstrategy.html)
* [IgxInsertDropStrategy]({environment:angularApiUrl}/classes/igxinsertdropstrategy.html)

## References

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
