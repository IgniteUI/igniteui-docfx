---
title: Scroll Component
_description: The Ignite UI for Angular Scroll Bar component is a stand-alone native control that enables you to implement scrolling anywhere for responsive and intuitive UI.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Scrollbar components, Angular Scrollbar controls
---

##Scroll
<p class="highlight">The Ignite UI for Angular Scroll component enables developers to put content in a scrollable container. Specify the height of the container or the number of items of content that should be visible at a time. DOM virtualization can be applied to the content inside the scrollable container.</p>
<div class="divider"></div>

### Scrollbar Demo
<div class="sample-container" style="height: 755px">
    <iframe frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/scroll"></iframe>
</div>
<div class="divider--half"></div>

### Getting Started
To use the IgxSlider import the IgxSlider:

```typescript
import { IgxScroll } from "igniteui-angular/IgxScrollModule";
```
<div class="divider--half"></div>

```html
<igx-scroll #scroll
            (onScroll)="updateList($event)"
            [itemsToViewCount]="visibleItemsCount"
            [itemHeight]="50"
            [totalItemsCount]="items.length">
    <ul class="list">
        <li class="list-item" *ngFor="let item of visibleItems">
            {{item}}
        </li>
    </ul>
</igx-scroll>
```

```typescript
export class IgxScrollSampleComponent {
    public items: string[] = [];

    public visibleItems: string[] = [];

    public visibleItemsCount: number = 5;

    public constructor() {
        for (let i = 1; i <= 50000; i++) {
            this.items.push("item #" + i );
        }

        this.visibleItems = this.items.slice(0, 5);
    }

    private updateList($event: IgxScrollEvent): void {
        this.visibleItems = this.items.slice($event.currentTop, $event.currentTop + this.visibleItemsCount);
    }
}

```
<div class="divider--half"></div>


## API

### Inputs

| Name | Type | Description |
| :--- | :--- | :--- |
| `itemHeight` | boolean | Disables or enables UI interaction. |
| `scrollTop` | number | Gets the scroll top of the scroll. |
| `totalItemsCount` | number | The amount of the actual rendered items in the scroll. |
| `visibleItemsCount` | number | The total amount of items in that will be virtualized. |
<div class="divider--half"></div>

### Outputs

| Name | Description |
| :--- | :--- |
| `onScroll`  | Scroll event executed each time when the viewport of the IgxScroll is scrolled. Raised with IgxScrollEvent argument|
<div class="divider--half"></div>

### Methods

| Name   | Arguments | Return Type | Description |
|:----------:|:------|:------|:------|
| `scrollVertically`  | delta: number | void | Scroll with the given delta. Does not scrolls when the scroll delta is outside of the scroll boundaries. |
<div class="divider--half"></div>
