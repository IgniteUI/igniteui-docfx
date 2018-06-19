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

#### Initial Chip State

The `IgxChipComponent` is the main class for a chip elemenent and the `IgxChipsAreaComponent` is the main class for the chip area. The IgxChipComponent requires an id to be defined so that the different chips can be easily distinguished.

Example of using `igxChip` with `igxChipArea`:

```html
<igx-chips-area>
    <igx-chip *ngFor="let chip of chipList" [id]="chip.id">
        <label igxLabel>{{chip.text}}</label>
    </igx-chip>
</igx-chips-area>
```

#### Chip API

The `remove button` is part of the chip area as well, but it is not templatable but can be customized. Developers can allow end-users to remove chips, by setting each chip's `removable` property to `true`.

```html
<igx-chips-area>
    <igx-chip *ngFor="let chip of chipList" [removable]="'true'">
        <label igxLabel>{{chip.text}}</label>
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

Selection is disabled by default, but you can set the `selectable` property to `true`. The chip selection is done by clicking on the chip itself whitout performing moving/dragging or throughout navigation.

```html
<igx-chips-area>
    <igx-chip *ngFor="let chip of chipList" [selectable]="'true'">
        <label igxLabel>{{chip.text}}</label>
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

If you want to allow the end-user to change the position of a chip you can set the `draggable` property to `true`.

```html
<igx-chips-area>
    <igx-chip *ngFor="let chip of chipList" [draggable]="'true'">
        <label igxLabel>{{chip.text}}</label>
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

#### Chip Templates

The IgxChipComponent's main structure consists of `label`, `remove button`, `prefix`, `suffix`, `prefix connector` and `suffix connector`. All of those elements are templatable except the the remove button. The `prefix`, `label` and `suffix` are elements inside the actual chip area where they can be templated in any way the user would desire. Each has function defined by its name. The way they can be specified is by respectively using the `IgxPrefix`, `IgxLabel` and `IxgSuffix` directives.

Example of using and icon for prefix, text for label and custom icon button for suffix:

```html
<igx-chip *ngFor="let chip of chipList" [id]="chip.id">
    <igx-icon igxPrefix fontSet="material" [name]="'drag_indicator'"></igx-icon>
    <label igxLabel>{{chip.text}}</label>
    <span igxSuffix *ngIf="removable" igxButton="icon" (click)="onClick()">
        <igx-icon fontSet="material" [name]="'close'"></igx-icon>
    </span>
</igx-chip
```

The `prefix/suffix connectors` of the igxChip are fully templatable and are poistioned outside the chip area. Their purpose is to provite a way to link two chips next to each other with an icon/text or anything the user woud like to use. The prefix connector is defined by using the `IgxPrefixConnector` directive. The suffix connector is defined by using the `IgxSuffixConnector` directive.

Example of using prefix connector:

```html
<igx-chip *ngFor="let chip of chipList" [id]="chip.id">
    <span igxPrefixConnector> > </span>
    <label igxLabel>{{chip.text}}</label>
</igx-chip>
```

Example of using suffix connector:

```html
<igx-chip *ngFor="let chip of chipList" [id]="chip.id">
    <label igxLabel>{{chip.text}}</label>
    <span igxSuffixConnector> -> </span>
</igx-chip>
```

#### Removing

The `remove button` is part of the chip area as well, but it is not templatable but can be customized. It can be enabled through an option of the `igxChip` itself called `removable`. When enabled the remove button will be position between the `label` and the `suffix` areas.

#### Keyboard Navigation

The chip can be focused using the `Tab` key. Chips can be reordered using keyboard navigation:

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

* [Material examples](https://material.angular.io/components/chips/examples)
* [Material catalog](https://material-components.github.io/material-components-web-catalog/#/component/chips)
* [Material Input Chips](https://material.io/design/components/chips.html#input-chips)
* [Chip class](https://docs.flutter.io/flutter/material/Chip-class.html)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

