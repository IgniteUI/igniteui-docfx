---
title: igxFor
_description: Ignite UI for Angular now exposes a virtual igxFor directive similar to ngFor, which virtualizes DOM object rendering by visualizing only the visible chunks of the data in the DOM.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Virtualization, Performance, Virtual directive, Virtual For
---

## igxFor

<p class="highlight">
`igxForOf` is now available as an alternative to `ngForOf` for templating large amounts of data. The `igxForOf` uses virtualization technology behind the scenes to optimize DOM rendering and memory consumption. Virtualization technology works similar to Paging by slicing the data into smaller chucks which are swapped from a container viewport while the user scrolls the data horizontally/vertically. The difference with the Paging is that virtualization mimics the natural behavior of the scrollbar.
The directive is creating scrollable containers and renders small chunks of the data. Is is used inside `igx-grid` and it can be used to build virtual `igx-list`.
</p>
<div class="divider"></div>

### igxFor Demo

<div class="sample-container loading" style="height:780px">
    <iframe src='{environment:demosBaseUrl}/igx-for-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<!--<button data-localize="stackblitz" class="stackblitz-btn">view on stackblitz</button> -->
<div class="divider--half"></div>

### Dependencies

The `igxFor` directive is exported as as an `NgModule`, thus all you need to do in your application is to import the _IgxForOfModule_
inside your `AppModule`:

```typescript
// app.module.ts

import { IgxForOfModule } from 'igniteui-angular/main';

@NgModule({
    imports: [
        ...
        IgxForOfModule,
        ...
    ]
})
export class AppModule {}
```

### Usage

Now that we have the `igxForOf` module imported, let’s get started with a basic configuration of the **igxFor** that binds to local data:

```html
<span #container>
    <ng-template *igxFor="data"></ng-template>
</span>
```



The **data** property is an array that provides the virtualized data.


The directive can be used to virtualize the data in vertical, horizontal or both directions.
#### Vertical virtualization

```html
<table style='height:500px;'>
    <ng-template igxFor let-item [igxForOf]="data" #virtDirVertical
        [igxForScrollOrientation]="'vertical'"
        [igxForContainerSize]='"500px"'
        [igxForItemSize]='"50px"'
        let-rowIndex="index">
            <tr style='height:50px;'>{{rowIndex}} : {{item.text}}</tr>
    </ng-template>
</table>
```

#### Horizontal virtualization

```html
<table> 
    <tbody style='display:grid;'>
    <tr style='width:500px; height:118px;'>               
        <ng-template igxFor let-item [igxForOf]="data" #virtDirHorizontal
            [igxForScrollOrientation]="'horizontal'"
            [igxForContainerSize]='"500px"'
            let-rowIndex="index">
                <td  [style.width.px]='item.width' style='height:100px;'>{{rowIndex}} : {{item.text}}</td>
            </ng-template>
    </tr>
    </tbody>
</table>
```

#### Horizontal and vertical virtualization

```html
<table #container [style.width]='width' [style.height]='height'>
    <ng-template #scrollContainer igxFor let-rowData [igxForOf]="data"
        [igxForScrollOrientation]="'vertical'"
        [igxForContainerSize]='height'
        [igxForItemSize]='"50px"'>
        <tr [style.display]="'flex'" [style.height]="'50px'">
            <ng-template #childContainer igxFor let-col [igxForOf]="cols"
                [igxForScrollOrientation]="'horizontal'"
                [igxForScrollContainer]="parentVirtDir"
                [igxForContainerSize]='width'>
                    <td [style.min-width]='col.width + "px"'>{{rowData[col.field]}}</td>
            </ng-template>
        </tr>
    </ng-template>
</table>
```

**Note**: The `igxForOf` directive can bind to remote service too. Review the following demo for more information.
#### igxFor bound to remote service Demo
<div class="sample-container loading" style="height:780px">
    <iframe src='{environment:demosBaseUrl}/igx-for-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div class="divider--half"></div>

## API

### Inputs

Below is the list of all inputs that the developers may set to configure the `igxFor` look/behavior:
| Name | Type | Description |
| :--- |:--- | :--- |
| id | string | Unique identifier of the directive |
| `igxForOf` | any[] | The data to be virtualized |
| `igxForScrollOrientation` | string | Virtualization direction - "horizontal" or "vertical" |
| `igxForScrollContainer` | any | The container where the vertical and horizontal scrollbars will be created, the is useful when nesting the directive and for cases where the scrolling container is not going to be the direct parent |
| `igxForContainerSize` | any | Specifies the container size |
| `igxForItemSize` | any | Specifies the item size, when the virtualization is vertical it is used as height and as width when the virtualization is horizontal. It is mostly used for the vertical direction, because for the horizontal width it is possible to have items with different widhts |

<div class="divider--half"></div>

### Accessors

List of public accessors that the developers may use to get information from the `igxForOf`:
| Name | Type | Description |
| :--- |:--- | :--- |
| id | string | Unique identifier of the directive |
| `state` | IgxForState | The current state of the directive it contains `startIndex` and `chunkSize` |
| `totalItemCount` | number | The total count of the virtual data items, when using remote service |

<div class="divider--half"></div>

### Local Variables

List of exported values by the `igxForOf` that can be aliased to local variables:
| Name       | Type    | Description                                           |
| :--------- |:------- | :---------------------------------------------------- |
| $implicit  | T       | The value of the individual items in the iterable     |
| index      | number  | The index of the current item in the iterable.        |
| dirty      | boolean | True when the current item needs to reset their state |

<div class="divider--half"></div>

### Outputs

A list of the events emitted by the **igx-for**:

| Name              | Description                                                          |
| :---------------- | :------------------------------------------------------------------- |
| _Event emitters_  | _Notify for a change_                                                |
| `OnChunkLoad`      | Used when scrolled to emit the loaded data item                      |
| `OnChunkPreload`   | Used when scrolled to emit the data item which is about to be loaded |

<div class="divider"></div>

### Methods

Here is a list of all public methods exposed by the **igx-for**:

| Signature       | Description                     |
| :-------------- | :------------------------------ |
| `scrollNext()`  | Scrolls by one item into the  appropriate  next direction |
| `scrollPrev()`  | Scrolls by one item into the  appropriate  previous direction|
| `scrollTo(index)`  | Scrolls to the specified index |

<div class="divider--half"></div>