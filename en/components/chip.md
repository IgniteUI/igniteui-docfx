---
title: Chip Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Chip component provide compact elements that represent an input, attribute, or action.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Chip, Chip Component, ChipArea, ChipArea Component
---

### Chip

[`igxChip`]({environment:angularApiUrl}/classes/igxchipcomponent.html) is a compact visual component that displays information in an obround. Chip can be templated, deleted, and selected. Multiple chips can be reordered and visually connected to each other. Chips reside in a container called chips area which is responsible for managing the interactions between the chips.  

#### Demo

<div class="sample-container loading" style="height:650px">
    <iframe id="chip-sample-iframe" src='{environment:demosBaseUrl}/chip-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="chip-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Initializing Chips

The [`IgxChipComponent`]({environment:angularApiUrl}/classes/igxchipcomponent.html) is the main class for a chip elemenent and the [`IgxChipsAreaComponent`]({environment:angularApiUrl}/classes/igxchipsareacomponent.html) is the main class for the chip area. The chip area is used when handling more complex scenarios that require interaction between chips (dragging, selection, navigation and etc.). The [`IgxChipComponent`]({environment:angularApiUrl}/classes/igxchipcomponent.html) requires an [`id`]({environment:angularApiUrl}/classes/igxchipcomponent.html#id) to be defined so that the different chips can be easily distinguished.

Example of using [`igxChip`]({environment:angularApiUrl}/classes/igxchipcomponent.html) with [`igxChipArea`]({environment:angularApiUrl}/classes/igxchipsareacomponent.html):

```html
<igx-chips-area>
    <igx-chip *ngFor="let chip of chipList" [id]="chip.id">
        <span #label [class]="'igx-chip__text'">{{chip.text}}</span>
    </igx-chip>
</igx-chips-area>
```

### Features

#### Selection

Selection is disabled by default, but can be enabled with an option called [`selectable`]({environment:angularApiUrl}/classes/igxchipcomponent.html#selectable). The selecting is done by clicking on the chip itself or either by focusing the chip by using the `Tab` key and then pressing the `Space` key. An event [`onSelection`]({environment:angularApiUrl}/classes/igxchipcomponent.html#onselection) is fired when the selection state of the [`igxChip`]({environment:angularApiUrl}/classes/igxchipcomponent.html) changes. If a chip is already selected it can be deselected by pressing the `Space` key again while the chip is focused or by clicking on it.

```html
<igx-chips-area #chipsArea>
    <igx-chip *ngFor="let chip of chipList" [selectable]="'true'">
        <span #label [class]="'igx-chip__text'">{{chip.text}}</span>
    </igx-chip>
</igx-chips-area>
```

```ts
public ngOnInit() {
    chipsArea.forEach((chip) => {
        chip.selectable = true;
    });
}
```

#### Removing

The `remove button` is part of the chip as well. You can control the remove button visibility by the [`removable`]({environment:angularApiUrl}/classes/igxchipcomponent.html#removable) boolean option. An event [`onRemove`]({environment:angularApiUrl}/classes/igxchipcomponent.html#onremove) is fired when the end-user deletes a chip.

```html
<igx-chips-area #chipsArea>
    <igx-chip *ngFor="let chip of chipList" [id]="chip.id" [removable]="'true'" (onRemove)="chipRemoved($event)">
        <span #label [class]="'igx-chip__text'">{{chip.text}}</span>
    </igx-chip>
</igx-chips-area>
```

```ts
public ngOnInit() {
    chipsArea.forEach((chip) => {
        chip.removable = true;
    });
}

public chipRemoved(event) {
    this.chipList = this.chipList.filter((item) => {
        return item.id !== event.owner.id;
    });
    this.cdr.detectChanges();
}
```

#### Moving/Dragging

The chip can be dragged by the end-user in order to change it's position. The moving/dragging is disabled by default, but can be enabled with an option called [`draggable`]({environment:angularApiUrl}/classes/igxchipcomponent.html#draggable). You need to handle the actual moving of the chip in the data source manually.

```html
<igx-chips-area #chipArea (onReorder)="chipsOrderChanged($event)">
    <igx-chip *ngFor="let chip of chipList" [draggable]="'true'">
        <span #label [class]="'igx-chip__text'">{{chip.text}}</span>
    </igx-chip>
</igx-chips-area>
```

```ts
public ngOnInit() {
    chipArea.forEach((chip) => {
        chip.draggable = true;
    });
}

public chipsOrderChanged(event) {
    const newChipList = [];
    for (const chip of event.chipsArray) {
        const chipItem = this.chipList.filter((item) => {
            return item.id === chip.id;
        })[0];
        newChipList.push(chipItem);
    }
    this.chipList = newChipList;
    event.isValid = true;
}

```

![Dragging](../images/dragging.gif)

#### Chip Templates

The [`IgxChipComponent`]({environment:angularApiUrl}/classes/igxchipcomponent.html)'s main structure consists of chip content, `remove button`, [`prefix`]({environment:angularApiUrl}/classes/igxprefixdirective.html), [`suffix`]({environment:angularApiUrl}/classes/igxsuffixdirective.html) and [`connector`]({environment:angularApiUrl}/classes/igxconnectordirective.html). All of those elements are templatable except the `remove button`.

The content of the chip is taken by the content defined inside the chip template except elements that define the [`prefix`]({environment:angularApiUrl}/classes/igxprefixdirective.html), [`suffix`]({environment:angularApiUrl}/classes/igxsuffixdirective.html) or [`connector`]({environment:angularApiUrl}/classes/igxconnectordirective.html) of the chip. You can define any type of content you need.

The [`prefix`]({environment:angularApiUrl}/classes/igxprefixdirective.html) and [`suffix`]({environment:angularApiUrl}/classes/igxsuffixdirective.html) are also elements inside the actual chip area where they can be templated by your preference. The way they can be specified is by respectively using the [`IgxPrefix`]({environment:angularApiUrl}/classes/igxprefixdirective.html) and [`IxgSuffix`]({environment:angularApiUrl}/classes/igxsuffixdirective.html) directives.

Example of using an icon for [`prefix`]({environment:angularApiUrl}/classes/igxprefixdirective.html), a text for [`label`]({environment:angularApiUrl}/classes/igxlabeldirective.html) and a custom icon button for [`suffix`]({environment:angularApiUrl}/classes/igxsuffixdirective.html):

```html
<igx-chip *ngFor="let chip of chipList" [id]="chip.id">
    <igx-icon igxPrefix fontSet="material" [name]="'drag_indicator'"></igx-icon>
    <span #label [class]="'igx-chip__text'">{{chip.text}}</span>
    <span igxSuffix *ngIf="removable" igxButton="icon" (click)="onClick()">
        <igx-icon fontSet="material" [name]="'close'"></igx-icon>
    </span>
</igx-chip>
```

The [`connectors`]({environment:angularApiUrl}/classes/igxconnectordirective.html) of the [`igxChip`]({environment:angularApiUrl}/classes/igxchipcomponent.html) are fully templatable and are positioned after each chip. Their purpose is to provide a way to link two chips next to each other with an icon/text or anything you would like to use. The last chip (most right) does not have connector applied. Connectors hide while dragging chips around and show again when interactions with the chips have finished. The connector is defined by using the [`IgxConnector`]({environment:angularApiUrl}/classes/igxconnectordirective.html) directive.

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

  - <kbd>LEFT</kbd> - Focuses the chip on the left
  - <kbd>RIGHT</kbd> - Focuses the chip on the right
  - <kbd>SPACE</kbd> - Toggles chip selection if it is selectable
  - <kbd>DELETE</kbd> - Fires the [`onRemove`]({environment:angularApiUrl}/classes/igxchipcomponent.html#onremove) output so the chip deletion can be handled manually
  - <kbd>SHIFT</kbd> + <kbd>LEFT</kbd> - Moves the focused chip one position to the left
  - <kbd>SHIFT</kbd> + <kbd>RIGHT</kbd> - Moves the focused chip one position to the right

- Keyboard controls when the remove button is focused:

  - <kbd>SPACE</kbd> or <kbd>ENTER</kbd> Fires the [`onRemove`]({environment:angularApiUrl}/classes/igxchipcomponent.html#onremove) output so the chip deletion can be handled manually

### References

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
