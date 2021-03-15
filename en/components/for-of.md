---
title: Virtual For Directive 
_description: Ignite UI for Angular now exposes a virtual igxFor directive similar to ngFor, which virtualizes DOM object rendering by visualizing only the visible chunks of the data in the DOM.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Virtualization, Performance, Virtual directive, Virtual For
---

# Virtual For Directive

<p class="highlight">The Ignite UI for Angular igxForOf directive is an alternative to ngForOf for templating large amounts of data. It uses virtualization behind the scenes to optimize DOM rendering and memory consumption.</p>
<div class="divider"></div>

## Angular Virtual For Directive Example

<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src='{environment:demosBaseUrl}/data-display/igx-for-sample-1'
           alt="Angular Virtual For Directive Example">
</code-view>

## Usage

### First Steps

The [`igxFor`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforof) directive is exported as an `NgModule`, thus all you need to do in your application is to import the `IgxForOfModule` inside your `AppModule`:

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

### Add igxFor

Now that we have the module imported, let’s get started with a basic configuration of the `igxFor` that binds to local data:

```html
<span #container>
    <ng-template *igxFor="data"></ng-template>
</span>
```

The **data** property is an array that provides the virtualized data.


## Examples

The `igxFor` directive can be used to virtualize the data in vertical, horizontal or both directions.

Virtualization works similarly to Paging by slicing the data into smaller chucks which are swapped from a container viewport while the user scrolls the data horizontally/vertically. The difference with the Paging is that virtualization mimics the natural behavior of the scrollbar. The `igxFor` directive is creating scrollable containers and renders small chunks of the data. It is used inside the [`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) and it can be used to build a virtual [`igx-list`]({environment:angularApiUrl}/classes/igxlistcomponent.html).

### Vertical virtualization

```html
<igx-list>
    <div [style.height]="'500px'" [style.overflow]="'hidden'" [style.position]="'relative'">
        <igx-list-item [style.width]="'calc(100% - 18px)'"
            *igxFor="let item of data | igxFilter: fo;
                     scrollOrientation : 'vertical';
                     containerSize: '500px'; 
                     itemSize: '50px'">
            <div class="contact">
                <span class="name">{{item.name}}</span>
            </div>
        </igx-list-item>
    </div>
</igx-list>
```

***Note:*** It is strongly advised that the parent container of the [`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforof) template has the following CSS rules applied: `height` for vertical and `width` for horizontal, `overflow: hidden` and `position: relative`. This is because the smooth scrolling behavior is achieved through content offsets that could visually affect other parts of the page if they remain visible.

### Horizontal virtualization

```html
<igx-list>
    <div [style.width]="'880px'" [style.overflow]="'hidden'" [style.position]="'relative'">
        <igx-list-item [style.width]="'220px'"
            *igxFor="let item of data | igxFilter: fo;
                     scrollOrientation : 'horizontal'; 
                     containerSize: '880px'; 
                     itemSize: '220px'">
            <div class="contact">
                <span class="name">{{item.name}}</span>
            </div>
        </igx-list-item>
    </div>
</igx-list>
```

<code-view style="height:240px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src='{environment:demosBaseUrl}/data-display/igx-for-sample-2'>
</code-view>

<div class="divider--half"></div>

### Horizontal and vertical virtualization

```html
<table #container [style.width]='width' 
    [style.height]='height'
    [style.overflow]='"hidden"'
    [style.position]='"relative"'>
    <ng-template #scrollContainer igxFor let-rowData
        [igxForOf]="data"
        [igxForScrollOrientation]="'vertical'"
        [igxForContainerSize]='height'
        [igxForItemSize]='"50px"'>
        <tr [style.display]="'flex'" [style.height]="'50px'">
            <ng-template #childContainer igxFor let-col
                [igxForOf]="cols"
                [igxForScrollOrientation]="'horizontal'"
                [igxForScrollContainer]="parentVirtDir"
                [igxForContainerSize]='width'>
                    <td [style.min-width]='col.width + "px"'>
                        {{rowData[col.field]}}
                    </td>
            </ng-template>
        </tr>
    </ng-template>
</table>
```

The `igxFor` directivе is used to virtualize data in both vertical and horizontal directions inside the `igxGrid`. 

Follow the [Grid Virtualization](virtualization.md) topic for more detailed information and demos.

### igxFor bound to remote service
The [`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforof) directive can be bound to a remote service using the `Observable` property - `remoteData` (in the following case). The `chunkLoading` event should also be utilized to trigger the requests for data.

```html
<div style='height: 500px; overflow: hidden; position: relative;'>
    <ng-template igxFor let-item [igxForOf]="remoteData | async"
        (onChunkPreload)="chunkLoading($event)"
        [igxForScrollOrientation]="'vertical'"
        [igxForContainerSize]='"500px"'
        [igxForItemSize]='"50px"'
        [igxForRemote]='true'
        let-rowIndex="index" #virtDirRemote>
        <div style='height:50px;'>{{item.ProductID}} : {{item.ProductName}}</div>
    </ng-template>
</div>
```

***Note:*** There is a requirement to set the [`totalItemCount`]({environment:angularApiUrl}/classes/igxforofdirective.html#totalitemcount) property in the instance of [`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforof).

```typescript
this.virtDirRemote.totalItemCount = data["@odata.count"];
```

In order to access the directive instance from the component, it should be marked as `ViewChild`:

```typescript
@ViewChild("virtDirRemote", { read: IgxForOfDirective })
public virtDirRemote: IgxForOfDirective<any>;
```

After the request for loading the first chunk, the [`totalItemCount`]({environment:angularApiUrl}/classes/igxforofdirective.html#totalitemcount) can be set:

```typescript
public ngAfterViewInit() {
    this.remoteService.getData(this.virtDirRemote.state, (data) => {
        this.virtDirRemote.totalItemCount = data["@odata.count"];
    });
}
```

When requesting data you can take advantage of the [`IgxForOfState`]({environment:angularApiUrl}/classes/igxforofdirective.html#state) interface, which provides the [`startIndex`]({environment:angularApiUrl}/classes/igxforofdirective.html#state.startindex) and [`chunkSize`]({environment:angularApiUrl}/classes/igxforofdirective.html#state.chunksize) properties. Note that initialy the chunkSize will be 0, so you have to specify the size of the first loaded chunk (the best value is the initial [`igxForContainerSize`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforcontainersize) divided by the [`igxForItemSize`]({environment:angularApiUrl}/classes/igxforofdirective.html#igxforitemsize)).

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
            // Set initial chunk size, the best value is igxForContainerSize
            // initially divided by igxForItemSize
            10 : dataState.chunkSize;
        const top = requiredChunkSize;
        qS += `$skip=${skip}&$top=${top}&$count=true`;
    }
    return `${this.url}${qS}`;
}
```

Every time the [`onChunkPreload`]({environment:angularApiUrl}/classes/igxforofdirective.html#onchunkpreload) event is thrown, a new chunk of data should be requested:

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

## Local Variables

The `igxFor` directive includes the following helper properties in its context: `even`, `odd`, `first` and `last`. They are used to identify the current element position in the collection. The following code snippet demonstrates how to use the `even` property in an `ng-template`. Аn `even` class will be assigned to every even div element:

```html
<ng-template igxFor let-item let-isEven="even"
             [igxForOf]="data" 
             [igxForScrollOrientation]="'vertical'" >
    <div [ngClass]="{even: isEven}"></div>
</ng-template>
```

## Known Limitations

|Limitation|Description|
|--- |--- |
| `scrollTo` method does not work correctly when the content size of the rendered templates changes post initialization | When the elements inside the template have a size, that changes runtime after initialization (for example as a result of content projection, remote request resolution etc.), then the `scrollTo` method will not be able to scroll to the correct index. The method will scroll to the position of the index before the runtime size change occurs, hence the location will not be correct after the size is changed later. A possible workaround is to use templates that do not change their size based on their content if the content is loaded later. |

## API References

* [IgxForOfDirective]({environment:angularApiUrl}/classes/igxforofdirective.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxListComponent]({environment:angularApiUrl}/classes/igxlistcomponent.html)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
