---
title: Drop Down Component
_description: Use Ignite UI for Angular Virtualized Drop Down to display a very large list of items which supports a single item selection.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Drop Down components, Angular Drop Down controls, Angular Control Large Item List, Angular Control Singe Selection
---

## Virtual Drop Down

<p class="highlight">[The Ignite UI for Angular Drop Down](drop_down.md) can fully integrate usage of the [IgxForOf directive](for_of.md) in order to display a very large list of items for its selection</p>

<div class="sample-container loading" style="height:220px">
    <iframe id="dropdown-virtual-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-virtual' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-virtual-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Configuration

In order for the drop down to display a list of virtual items, some prerequisites need to be fulfilled.
First, we need to import the `IgxForOfModule` in the module of the component that will be declaring the our drop down.


### Module Import

```typescript
// app.module.ts
import { IgxForOfModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxForOfModule,
        ...
    ]
})
export class AppModule {}
```

### Template Configuration

Next, we need to create the drop down component's template, looping through the data using [`*igxFor`]({environment:angularApiUrl}/classes/igxforofdirective.html) instead of `*ngFor`. The `*igxFor` needs some additional configuration in order to properly display all of the items:
```html
<!-- drop-down-virtual.component.html -->
<button igxButton [igxToggleAction]="dropdown" [igxDropDownItemNavigation]="dropdown">Item Series</button>
<igx-drop-down #dropdown>
    <div class="drop-down-virtual-wrapper" style="height: {{ itemsMaxHeight }}px;">
        <igx-drop-down-item
            *igxFor="let item of items; index as index; scrollOrientation: 'vertical'; containerSize: itemsMaxHeight; itemSize: itemHeight;"
            [value]="item" [isHeader]="item.header" role="option" [disabled]="item.disabled"
            [index]="index">
            {{ item.name }}
        </igx-drop-down-item>
    </div>
</igx-drop-down>
<div class="selection">Selected Model: <span class="selection__name">{{ dropdown.selectedItem?.value.name }}</span></div>
```
The additional parameters passed to the `*igxFor` directive are:
 - `index` - captures the index of the current item in the data set
 - `scrollOrientation` - should always be `'vertical'`
 - `containerSize` - the size of the virtualized container (in `px`). This needs to be enforced on the wrapping `<div>` as well
 - `itemSize` - the size of the items that will be displayed (in `px`)

In order to assure uniqueness of the items, pass `item` inside of the [`value`]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#value) input and `index` inside of the [`index`]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#index) input of the `igx-drop-down-item`.
To preserve selection while scrolling, the drop down item needs to have a reference to the data items it is bound to.
> [!NOTE]
> For the drop down to work with a virtualized list of items, [`value`]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#value) and [`index`]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#index) inputs **must** be passed to all items.
> [!NOTE]
> It is strongly advised for each item to have an unique value passed to the `[value]` input. Otherwise, it might lead to unexpected results (incorrect selection). 
> [!NOTE]
> When the drop down uses virtualized items, the type of [`dropdown.selectedItem`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#selecteditem) becomes `{ value: any, index: number }`, where `value` is a reference to the data item passed inside of the `[value]` input and `index` is the item's index in the data set


### Component Definition

Inside of our component's `constructor`, we'll declare a moderately large list of items (container both headers and disabled items) which we'll be displaying in our drop-down. We also need to declare `itemHeight` and `itemsMaxHeight` (used in the template) inside of our `drop-down-virtual.component.ts` file:

```typescript
// drop-drop-virtual.component.ts
export class DropDownVirtualComponent {
  public items: DataItem[];
  public itemHeight = 48;
  public itemsMaxHeight = 480;

  constructor(protected cdr: ChangeDetectorRef) {
    const itemsCollection: DataItem[] = [];
    for (let i = 0; i < 50; i++) {
        const series = (i * 10).toString();
        itemsCollection.push({
            id: series,
            name: `${series} Series`,
            header: true,
            disabled: false
        });
        for (let j = 0; j < 10; j++) {
            itemsCollection.push({
                id: `${series}_${j}`,
                name: `Series ${series}, ${i * 10 + j} Model`,
                header: false,
                disabled: j % 9 === 0
            });
        }
    }
    this.items = itemsCollection;
  }
}
```

### Styles

The last (but very important) part of the configuration happens inside of our component's style sheet, `drop-down-virtual.component.scss`. We need to declare that our wrapping div (`drop-down-virtual-wrapper`) has `overflow: hidden`, so that we don't end up with two scroll bars (one from the `igxFor` and one from the container itself):

```scss
    .drop-down-virtual-wrapper {
        overflow: hidden;
        height: 480px;
        width: 240px;
    }
```

Here, we can also pass the style for `height` (but we already did so in the template) - the value of `itemsMaxHeight`, but in `px`.

### Virtual Drop Down Demo

You can view the configured example below:

<div class="sample-container loading" style="height:220px">
    <iframe id="dropdown-virtual-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-virtual' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-virtual-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Notes and Limitations

Using the drop down with a virtualized list of items enforce some limitations. Please be aware of the following when trying to set up a drop-down list using `*igxFor`:
 - The `<igx-drop-down-item>`s that are being looped need to be passed in a wrapping element (e.g. `<div>`) which has the following css: `overflow: hidden` and `height` equal to `containerSize` in `px`
 - `<igx-drop-down-item-group>`s cannot be used for grouping items when the list is virtualized. Use the `isHeader` propery instead
 - The `items` accessor will return only the list of non-header `igx-drop-down-item`s that are currently in the virtualized view.
 - [`dropdown.selectedItem`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#selecteditem) is of type `{ value: any, index: number }`
 - The object emitted by [`onSelection`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#onselection) changes to 
 ```typescript
 const emittedEvent: {
     newSelection: { value: any, index: number },
     oldSelection: { value: any, index: number },
     cancel: boolean,
 }
 ```
 - `dropdown.setSelectedItem` should be called with the **item's index in the data set**

## API References

* [IgxForOfDirective]({environment:angularApiUrl}/classes/igxforofdirective.html)
* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)




