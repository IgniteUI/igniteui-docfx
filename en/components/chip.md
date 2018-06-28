---
title: Chip Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Chip component provide compact elements that represent an input, attribute, or action.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Chip, Chip Component, ChipArea, ChipArea Component
---

### Chip

`igxChip` Chips are compact components that represent discrete information.

#### Demo

<div class="sample-container loading" style="height:550px">
    <iframe id="chip-iframe" src='{environment:demosBaseUrl}/chip-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="chip-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Initializing Chips

The `IgxChipComponent` is the main class for a chip elemenent and the `IgxChipsAreaComponent` is the main class for the chip area, it is used to manage the chips defined inside it. It is used when handling more complex scenarios that require interaction between chips (dragging, selection, navigation and etc.).The IgxChipComponent requires an id to be defined so that the different chips can be easily distinguished.

Example of using `igxChip` with `igxChipArea`:

```html
<igx-chips-area>
    <igx-chip *ngFor="let chip of chipList" [id]="chip.id">
        <span #label [class]="'igx-chip__text'">{{chip.text}}</span>
    </igx-chip>
</igx-chips-area>
```

### Features

#### Selection

Selection is disabled by default, but can be enabled with an option called `selectable`. The selecting is done by clicking on the chip itself or by focusing the chip either by using the `Tab` button and then pressing `Space`. An event is fired when the selection state of the `igxChip` changes. If a chip is already selected it can be deselected by pressing the `Space` button again while the chip is focused.

```html
<igx-chips-area>
    <igx-chip *ngFor="let chip of chipList" [selectable]="'true'">
        <span #label [class]="'igx-chip__text'">{{chip.text}}</span>
    </igx-chip>
</igx-chips-area>
```

```typescript
public ngOnInit() {
    chip-area.forEach((chip) => {
        column.selectable = true;
    });
}
```

#### Removing

The `remove button` is part of the chip area as well. Developers can allow end-users to remove chips. They need to handle the removing of the chips template where the chips are defined. This can be done by binding to the event `onRemove` that each chip provides.

```html
<igx-chips-area>
    <igx-chip *ngFor="let chip of chipList" [removable]="'true'">
        <span #label [class]="'igx-chip__text'">{{chip.text}}</span>
    </igx-chip>
</igx-chips-area>
```

```typescript
public ngOnInit() {
    chip-area.forEach((chip) => {
        column.removable = true;
    });
}
```

#### Moving/Dragging

The chip can be dragged in order to change it's position. The moving/dragging is disabled by default, but can be enabled with an option called `draggable`. The user need to handle the actual moving of the chip inside their template themselves.

```html
<igx-chips-area>
    <igx-chip *ngFor="let chip of chipList" [draggable]="'true'">
        <span #label [class]="'igx-chip__text'">{{chip.text}}</span>
    </igx-chip>
</igx-chips-area>
```

```typescript
public ngOnInit() {
    chip-area.forEach((chip) => {
        column.draggable = true;
    });
}
```

![Dragging](../images/dragging.gif)

#### Chip Templates

The `IgxChipComponent`'s main structure consists of chip content, `remove button`, `prefix`, `suffix` and `connector`. All of those elements are templatable except the the `remove button`.

The content of the chip is taken by the content defined inside the chip template except elements that define the `prefix`, `suffix` or `connector` of the chip. The user can define any type of content they need.

The `prefix` and suffix are also elements inside the actual chip area where they can be templated in any way the user would desire. Each has function defined by its name. The way they can be specified is by respectively using the `IgxPrefix` and `IxgSuffix` directives.

Example of using an icon for prefix, a text for label and a custom icon button for suffix:

```html
<igx-chip *ngFor="let chip of chipList" [id]="chip.id">
    <igx-icon igxPrefix fontSet="material" [name]="'drag_indicator'"></igx-icon>
    <span #label [class]="'igx-chip__text'">{{chip.text}}</span>
    <span igxSuffix *ngIf="removable" igxButton="icon" (click)="onClick()">
        <igx-icon fontSet="material" [name]="'close'"></igx-icon>
    </span>
</igx-chip>
```

The `connectors` of the `igxChip` are fully templatable and are positioned after each chip area. Their purpose is to provide a way to link two chips next to each other with an icon/text or anything the user would like to use. The last chip does not have connector applied. They hide while dragging chips around and show again when interactions with the chips have finished. The connector is defined by using the `IgxConnector` directive.

Example of using prefix connector:

```html
<igx-chip *ngFor="let chip of chipList" [id]="chip.id">
    <span #label [class]="'igx-chip__text'">{{chip.text}}</span>
    <span igxConnector> -> </span>
</igx-chip>
```

Example of using suffix connector:

```html
<igx-chip *ngFor="let chip of chipList" [id]="chip.id">
    <span #label [class]="'igx-chip__text'">{{chip.text}}</span>
    <span igxSuffixConnector> -> </span>
</igx-chip>
```

#### Keyboard Navigation

The chip can be focused using the `Tab` key or by clicking on them. Chips can be reordered using keyboard navigation:

- Keyboard controls when the chip is focused:

  - <kbd>LEFT</kbd> - Focuses the previos chip
  - <kbd>RIGTH</kbd> - Focuses the next chip
  - <kbd>SPACE</kbd> - Toggles chip selection if it is selectable
  - <kbd>DELETE</kbd> - Fires the `onRemove` output so the chip deletion can be handled
  - <kbd>SHIFT</kbd> + <kbd>LEFT</kbd> - Moves the focused chip one position to the left
  - <kbd>SHIFT</kbd> + <kbd>RIGHT</kbd> - Moves the focused chip one position to the right

- Keyboard controls when the remove button is focused:

  - <kbd>SPACE</kbd> or <kbd>ENTER</kbd> Fires the `onRemove` output so the chip deletion can be handled

### References

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
