---
title: Drop Down Component
_description: Use Ignite UI for Angular Virtualized Drop Down to display a very large list of items which supports a single item selection.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Drop Down components, Angular Drop Down controls, Angular Control Large Item List, Angular Control Singe Selection
_language: kr
---

## Virtual Drop Down

<p class="highlight">[The Ignite UI for Angular Drop Down](drop_down.md) can fully integrate usage of the [IgxForOf directive](for_of.md) in order to display a very large list of items for its selection</p>

<div class="sample-container loading" style="height:320px">
    <iframe id="dropdown-virtual-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-virtual' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-virtual-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Configuration

In order to configure the drop down to display a list of virtual items, you need to fulfil some prerequisites
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

Inside of our component's `constructor`, we'll declare a moderately large list of items (containing both headers and disabled items) which we'll be displaying in our drop-down. We also need to declare `itemHeight` and `itemsMaxHeight` (used in the template) inside of our `drop-down-virtual.component.ts` file:

```typescript
// drop-drop-virtual.component.ts
export class DropDownVirtualComponent {
  public items: DataItem[];
  public itemHeight = 48;
  public itemsMaxHeight = 320;

  constructor() {
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

The last (but very important) part of the configuration happens inside of our component's style sheet, `drop-down-virtual.component.scss`.The wrapping div (`drop-down-virtual-wrapper`) needs to have `overflow: hidden` set, to prevent the appearance of two scroll bars (one from the `igxFor` and one from the container itself):

```scss
    .drop-down-virtual-wrapper {
        overflow: hidden;
        height: 320px;
        width: 240px;
    }
```

Here, we can also pass the style for `height` (but we already did so in the template) - the value of `itemsMaxHeight`, but in `px`.

### Virtual Drop Down Demo

You can view the configured example below:

<div class="sample-container loading" style="height:320px">
    <iframe id="dropdown-virtual-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-virtual' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-virtual-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Remote Data
The `igx-drop-down` supports loading chunks of remote data using `igxFor` directive. The configuration is similar to the one using `igxFor` with local items and the main difference is handling the loading of different data chunks.

### Template
The drop-down template does not need to change much compared to the [previous example](#configuration): We still need to specify a wrapping div, style it accordingly and write out the complete configuration for the `*igxFor`. Since we'll be getting our data from a remote source, we need to specify that our data will be an observable and pass it through Angular's `async` pipe:

```html
<igx-drop-down #remoteDropDown>
    <div class="drop-down-virtual-wrapper">
        <igx-drop-down-item
            *igxFor="let item of rData | async; index as index; scrollOrientation: 'vertical'; containerSize: itemsMaxHeight; itemSize: itemHeight;"
            [value]="item.ProductName" role="option" [disabled]="item.disabled" [index]="index">
            {{ item.ProductName }}
        </igx-drop-down-item>
    </div>
</igx-drop-down>
```

### Handling chunk load
As you can see, the template is almost identical to the one in the previous example. In this remote data scenario, the code behind will do most of the heavy lifting.

First, we need to define a remote service for fetching data:
```typescript
// remote.service.ts

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IForOfState } from "igniteui-angular";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class RemoteService {
    public remoteData: Observable<any[]>;
    private _remoteData: BehaviorSubject<any[]>;

    constructor(private http: HttpClient) {
        this._remoteData = new BehaviorSubject([]);
        this.remoteData = this._remoteData.asObservable();
    }

    public getData(data?: IForOfState, cb?: (any) => void): any {
        // Assuming that the API service is RESTful and can take the following:
        // skip: start index of the data that we fecth
        // count: number of records we fetch
    this.http.get(`https://dummy.db/dummyEndpoint?skip=${data.startIndex}&count=${data.chunkSize}`).subscribe((data) => {
        // emit the values through the _remoteData subject
        this._remoteData.next(data);
    })
}
```

The service exposes an `Observable` under `remoteData`. We will Inject our service and bind to that property in our remote drop-down component:

```typescript
// remote-drop-down.component.ts
@Component({
    providers: [RemoteService],
    selector: "app-drop-down-remote",
    templateUrl: "./drop-down-remote.component.html",
    styleUrls: ["./drop-down-remote.component.scss"]
})
export class DropDownRemoteComponent implements OnInit, OnDestroy {
    @ViewChild(IgxForOfDirective, { read: IgxForOfDirective })
    public remoteForDir: IgxForOfDirective<any>;
    @ViewChild("remoteDropDown", { read: IgxDropDownComponent })
    public remoteDropDown: IgxDropDownComponent;
    public itemHeight = 48;
    public itemsMaxHeight = 480;
    public prevRequest: Subscription;
    public rData: any;

    private destroy$ = new Subject();
    constructor(private remoteService: RemoteService) { }

    public ngAfterViewInit() {
        const initialState = { startIndex: 0, chunkSize: Math.ceil(this.itemsMaxHeight / this.itemHeight) }
        this.remoteService.getData(initialState, (data) => {
            this.remoteForDir.totalItemCount = data["@odata.count"];
        });
        // Subscribe to igxForOf.onChunkPreload and load new data from service
        this.remoteForDir.onChunkPreload.pipe(takeUntil(this.destroy$)).subscribe((data) => {
            this.dataLoading(data);
        });
    }

    public dataLoading(evt) {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }
        this.prevRequest = this.remoteService.getData(
            evt,
            (data) => {
                this.remoteForDir.totalItemCount = data["@odata.count"];
            });
    }

    public ngOnInit() {
        this.rData = this.remoteService.remoteData;
    }

    public ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
```
Inside of the `ngAfterViewInit` hook, we call to get data for the initial state and subscribe to the `igxForOf` directive's [`onChunkPreload`]({environment:angularApiUrl}/classes/igxforofdirective.html#onchunkpreload) emitter. This subscription will be responsible for fetching data everytime the loaded chunk changes. We use `pipe(takeUntil(this.destroy$))` so we can easily unsubscribe from the emitter on component destroy.

### Remote Virtualization - Demo
The result of the above configuration is a drop-down that dynamically loads the data in should display, depending on the scrollbar's state. You can view the demo and play around with the configuration below:

<div class="sample-container loading" style="height:400px">
    <iframe id="dropdown-remote-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-remote' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-remote-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
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
 - setting the drop-down item's `[selected]` input will **not** mark the item in the drop-down selection

## API References

* [IgxForOfDirective]({environment:angularApiUrl}/classes/igxforofdirective.html)
* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)




