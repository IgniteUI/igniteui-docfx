---
title: Virtual For Directive 
_description: Ignite UI for Angular now exposes a virtual igxFor directive similar to ngFor, which virtualizes DOM object rendering by visualizing only the visible chunks of the data in the DOM.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Virtualization, Performance, Virtual directive, Virtual For
---

## Virtual For Directive

In Ignite UI for Angular, [`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforof) is an alternative to `ngForOf` for templating large amounts of data. The [`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforof) uses virtualization behind the scenes to optimize DOM rendering and memory consumption. Virtualization works similarly to Paging by slicing the data into smaller chucks which are swapped from a container viewport while the user scrolls the data horizontally/vertically. The difference with the Paging is that virtualization mimics the natural behavior of the scrollbar. The directive is creating scrollable containers and renders small chunks of the data. It is used inside [`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) and it can be used to build virtual [`igx-list`]({environment:angularApiUrl}/classes/igxlistcomponent.html).

### Demo

<div class="sample-container loading" style="height:650px">
    <iframe id="igx-for-sample-iframe" src='{environment:demosBaseUrl}/data-display/igx-for-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="igx-for-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="igx-for-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>

### Dependencies

To get started with the [`igxFor`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforof) directive install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting_started.md) topic.

The [`igxFor`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforof) directive is exported as an `NgModule`, thus all you need to do in your application is to import the _IgxForOfModule_
inside your `AppModule`:

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

### Usage

Now that we have the [`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforof) module imported, let’s get started with a basic configuration of the **igxFor** that binds to local data:

```html
<span #container>
    <ng-template *igxFor="data"></ng-template>
</span>
```



The **data** property is an array that provides the virtualized data.


The directive can be used to virtualize the data in vertical, horizontal or both directions.
### Vertical virtualization

```html
<table style='height: 500px; overflow: hidden; position: relative;'>
    <ng-template igxFor let-item [igxForOf]="data" #virtDirVertical
        [igxForScrollOrientation]="'vertical'"
        [igxForContainerSize]='"500px"'
        [igxForItemSize]='"50px"'
        let-rowIndex="index">
            <tr style='height:50px;'>{{rowIndex}} : {{item.text}}</tr>
    </ng-template>
</table>
```

### Horizontal virtualization

```html
<table>
    <tbody style='display: grid; position: relative;'>
    <tr style='width:500px; height:118px; overflow: hidden;'>
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

***Note:*** It is strongly advised that the parent container of the [`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforof) template for has the related dimension set (`height` for vertical and `width` for horizontal),  `overflow: hidden` and `position: relative` CSS rules applied. This is because the smooth scrolling behavior is achieved through content offsets that could visually affect other parts of the page if they remain visible.

### Horizontal and vertical virtualization

```html
<table #container [style.width]='width' [style.height]='height' [style.overflow]='"hidden"' [style.position]='"relative"'>
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
### igxFor bound to remote service

The [`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforof) directive can be bound to remote service. You need to use `Observable` property - `remoteData`(in the following case). Also the `chunkLoading` event should be utilized to trigger the requests to the data.

```html
<div style='height: 500px; overflow: hidden; position: relative;'>
    <ng-template igxFor let-item [igxForOf]="remoteData | async" (onChunkPreload)="chunkLoading($event)"
        [igxForScrollOrientation]="'vertical'"
        [igxForContainerSize]='"500px"'
        [igxForItemSize]='"50px"'
        [igxForRemote]='true'
        let-rowIndex="index" #virtDirRemote>
        <div style='height:50px;'>{{item.ProductID}} : {{item.ProductName}}</div>
    </ng-template>
</div>
```

Also there is a requirement to set the [`totalItemCount`]({environment:angularApiUrl}/classes/igxforofdirective.html#totalitemcount) property in the instance of [`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforof).
```typescript
this.virtDirRemote.totalItemCount = data["@odata.count"];
```

In order access the directive instance from the component it should be marked as `ViewChild`:
```typescript
@ViewChild("virtDirRemote", { read: IgxForOfDirective })
public virtDirRemote: IgxForOfDirective<any>;
```
And after the request to load the first chunk, the [`totalItemCount`]({environment:angularApiUrl}/classes/igxforofdirective.html#totalitemcount) can be set:
```typescript
public ngAfterViewInit() {
    this.remoteService.getData(this.virtDirRemote.state, (data) => {
        this.virtDirRemote.totalItemCount = data["@odata.count"];
    });
}
```
When requesting data you can take advantage of [`IgxForOfState`]({environment:angularApiUrl}/classes/igxforofdirective.html#state) interface, which provides the [`startIndex`]({environment:angularApiUrl}/classes/igxforofdirective.html#state.startindex) and [`chunkSize`]({environment:angularApiUrl}/classes/igxforofdirective.html#state.chunksize). But note, that initialy the chunkSize will be 0, so you have to specify the size of the first loaded chunk(the best value is [`igxForContainerSize`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforcontainersize) initially divided by [`igxForItemSize`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforitemsize)).
```typescript
public getData(data?: IForOfState, cb?: (any) => void): any {
    var dataState = data;
    return this.http
        .get(this.buildUrl(dataState))
        .map((response) => response.json())
        .map((response) => {
            return response;
        })
        .subscribe((data) => {
            this._remoteData.next(data.value);
            if (cb) {
                cb(data);
            }
        });
}

private buildUrl(dataState: any): string {
    let qS: string = "?", requiredChunkSize: number;
    if (dataState) {
        const skip = dataState.startIndex;
            requiredChunkSize =  dataState.chunkSize === 0 ?
                // Set initial chunk size, the best value is igxForContainerSize initially divided by igxForItemSize
                10 : dataState.chunkSize;
        const top = requiredChunkSize;
        qS += `$skip=${skip}&$top=${top}&$count=true`;
    }
    return `${this.url}${qS}`;
}
```
And every time the [`onChunkPreload`]({environment:angularApiUrl}/classes/igxforofdirective.html#onchunkpreload) event is thrown the new chunk of data should be requested:
```typescript
chunkLoading(evt) {
    if(this.prevRequest){
        this.prevRequest.unsubscribe();
     }
     this.prevRequest = this.remoteService.getData(evt, ()=> {
        this.virtDirRemote.cdr.detectChanges();
    });
}
```
### Local Variables

The `igxFor` directive includes the following helper properties in its context: `even`, `odd`, `first` and `last`. They are used to identify the current element position in the collection.
The following code snippet demonstrates how to use the `even` property in an `ng-template`.

```html
<ng-template igxFor let-item 
    [igxForOf]="data" 
    [igxForScrollOrientation]="'vertical'"
    let-isEven="even">
    <div [ngClass]="{even: isEven}">
   
    </div>
</ng-template>
```
In the example above, an `even` class is assigned to every even div element.

## Known Limitations

|Limitation|Description|
|--- |--- |
| Scroll position of components that use `igxForOf` is not preserved in projected container | When a component that uses `igxForOf` directive is in a `<ng-content>`, or other projected container, its scrollbar position won't be preserved, even though the data position would be. That's because the DOM elements are detached and later re-attached to the DOM tree and as a result, losing the scrollbar scroll position. The affected controls that use `igxForOf` internally are: `igxGrid`, `igxHierarchicalGrid`, `igxTreeGrid`, `igxCombo`. <br/>Some possible workarounds are: <br/> <ul><li>Resetting the DOM node's state, for example by wrapping it in an `ngIf`. The component will be destroyed and then re-created, losing all internal states;</li><li>Persisting the state, i.e. determining whether the element has been re-added to the DOM tree and resetting its scroll position manually, for example using `MutationObserver`</li></ul>
| `scrollTo` method does not work correctly when the content size of the rendered templates changes post initialization | When the elements inside the template have a size, that changes runtime after initialization (for example as a result of content projection, remote request resolution etc.), then the `scrollTo` method will not be able to scroll to the correct index. The method will scroll to the position of the index before the runtime size change occurs, hence the location will not be correct after the size is changed later. A possible workaround is to use templates that do not change their size based on their content if the content is loaded later.

## API References

* [IgxForOfDirective]({environment:angularApiUrl}/classes/igxforofdirective.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
