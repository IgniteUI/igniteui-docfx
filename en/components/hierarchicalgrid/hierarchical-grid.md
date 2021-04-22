---
title: Angular Hierarchical Data Grid | Material Table | Ignite UI for Angular | Infragistics
_description: Learn how to use Ignite UI for Angular data grid, based on Angular Material Table and create a touch-responsive angular component with variety of angular events.
_keywords: angular data grid, igniteui for angular, infragistics
---

# Hierarchical Data Grid Overview and Configuration

The Ignite UI for Angular Hierarchical Data Grid is used to display and manipulate hierarchical data with ease. Quickly bind your data with very little code or use a variety of events to customize different behaviors. This component provides a rich set of features like data selection, excel style filtering, sorting, paging, templating and column moving. The Hierarchical Grid builds upon the Flat Grid Component and extends its functionality by allowing the users to expand or collapse the rows of the parent grid, revealing the corresponding child grid, when more detailed information is needed. Displaying of hierarchical data has never been easier and beautiful thanks to the Material Table-based UI Grid.

## Angular Hierarchical Data Grid Example
In this angular grid example you can see how users can visualize hierarchical sets of data and use cell templating to add other visual components like [Sparkline](../sparkline.md).

<code-view style="height:520px" 
           data-demos-base-url="{environment:lobDemosBaseUrl}" 
           iframe-src="{environment:lobDemosBaseUrl}/hierarchical-grid/hierarchical-grid-resizing" alt="Angular Hierarchical Data Grid Example">
</code-view>

<div class="divider--half"></div>

## Dependencies

>[!NOTE]
>**This component requires [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) to be imported in the root module of the application in order for touch interactions to work as expected.**.

To get started with the Hierarchical Data Grid, first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](../general/getting-started.md) topic.

The Hierarchical Grid is exported as an `NgModule` - all you need to do in your application is import the _IgxHierarchicalGridModule_ inside your `AppModule`.

```typescript
// app.module.ts

import { IgxHierarchicalGridModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxHierarchicalGridModule,
        ...
    ]
})
export class AppModule {}
```

We can obtain a reference to the Hierarchical Grid in TypeScript the following way:

```typescript
@ViewChild('hgrid1', { read: IgxHierarchicalGridComponent })
public hgrid1: IgxHierarchicalGridComponent;
```

## Data Binding

**igx-hierarchical-grid** derives from **igx-grid** and shares most of its functionality. The main difference is that it allows multiple levels of hierarchy to be defined. They are configured through a separate tag within the definition of **igx-hierarchical-grid**, called **igx-row-island**. The **igx-row-island** component defines the configuration for each child grid for the particular level. Multiple row islands per level are also supported.
The Hierarchical Grid supports two ways of binding to data: 

### Using hierarchical data

If the application loads the whole hierarchical data as an array of objects referencing children arrays of objects, then the Hierarchical Grid can be configured to read it and bind to it automatically. Here is an example of a properly structured hierarchical data source:

```javascript
export const singers = [{
    "Artist": "Naomí Yepes",
    "Photo": "assets/images/hgrid/naomi.png",
    "Debut": "2011",
    "Grammy Nominations": 6,
    "Grammy Awards": 0,
    "Tours": [{
        "Tour": "Faithful Tour",
        "Started on": "Sep-12",
        "Location": "Worldwide",
        "Headliner": "NO",
        "Toured by": "Naomí Yepes"
    }],
    "Albums": [{
        "Album": "Dream Driven",
        "Launch Date": new Date("August 25, 2014"),
        "Billboard Review": "81",
        "US Billboard 200": "1",
        "Artist": "Naomí Yepes",
        "Songs": [{
            "No.": "1",
            "Title": "Intro",
            "Released": "*",
            "Genre": "*",
            "Album": "Dream Driven"
        }]
    }]
}];
```
Each **igx-row-island** should specify the key of the property that holds the children data.

```html
<igx-hierarchical-grid #hierarchicalGrid [data]="singers" [autoGenerate]="true">
    <igx-row-island [key]="'Albums'" [autoGenerate]="true">
        <igx-row-island [key]="'Songs'" [autoGenerate]="true">
        </igx-row-island>
    </igx-row-island>
    <igx-row-island [key]="'Tours'" [autoGenerate]="true">
    </igx-row-island>
</igx-hierarchical-grid>
```
> [!NOTE]
> Note that instead of `data` the user configures only the `key` that the **igx-hierarchical-grid** needs to read to set the data automatically.

### Using Load-On-Demand

Most applications are designed to load as little data as possible initially, which results in faster load times. In such cases **igx-hierarchical-grid** may be configured to allow user-created services to feed it with data on demand. The following configuration uses a special `@Output` and a newly introduced loading-in-progress template to provide a fully-featured load-on-demand.

```html
<!-- hierarchicalGridSample.component.html -->

    <igx-hierarchical-grid #hGrid [primaryKey]="'CustomerID'" [autoGenerate]="true" [height]="'600px'" [width]="'100%'">
        <igx-row-island [key]="'Orders'" [primaryKey]="'OrderID'" [autoGenerate]="true"  (onGridCreated)="gridCreated($event, 'CustomerID')">
            <igx-row-island [key]="'Order_Details'" [primaryKey]="'ProductID'" [autoGenerate]="true" (onGridCreated)="gridCreated($event, 'OrderID')">
            </igx-row-island>
        </igx-row-island>
    </igx-hierarchical-grid>
```

```typescript
//  hierarchicalGridSample.component.ts

export class HierarchicalGridLoDSampleComponent implements AfterViewInit {
    @ViewChild("hGrid")
    public hGrid: IgxHierarchicalGridComponent;

    constructor(private remoteService: RemoteLoDService) { }

    public ngAfterViewInit() {
        this.hGrid.isLoading = true;
        this.remoteService.getData({ parentID: null, rootLevel: true, key: "Customers" }).subscribe((data) => {
            this.hGrid.isLoading = false;
            this.hGrid.data = data;
            this.hGrid.cdr.detectChanges();
        });
    }

    public gridCreated(event: IGridCreatedEventArgs, _parentKey: string) {
        const dataState = {
            key: event.owner.key,
            parentID: event.parentID,
            parentKey: _parentKey,
            rootLevel: false
        };
        event.grid.isLoading = true;
        this.remoteService.getData(dataState).subscribe(
            (data) => {
                event.grid.isLoading = false;
                event.grid.data = data;
                event.grid.cdr.detectChanges();
            }
        );
    }
}
```

```typescript
// remote-load-on-demand.service.ts

@Injectable()
export class RemoteLoDService {
    public url = `https://services.odata.org/V4/Northwind/Northwind.svc/`;

    constructor(private http: HttpClient) { }

    public getData(dataState?: any): Observable<any[]> {
        return this.http.get(this.buildUrl(dataState)).pipe(
            map((response) => response["value"])
        );
    }

    public buildUrl(dataState) {
        let qS = "";
        if (dataState) {
            qS += `${dataState.key}?`;

            if (!dataState.rootLevel) {
                if (typeof dataState.parentID === "string") {
                    qS += `$filter=${dataState.parentKey} eq '${dataState.parentID}'`;
                } else {
                    qS += `$filter=${dataState.parentKey} eq ${dataState.parentID}`;
                }
            }
        }
        return `${this.url}${qS}`;
    }
}
```

## Hide/Show row expand indicators

If you have a way to provide information whether a row has children prior to its expanding, you could use the [`hasChildrenKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#haschildrenkey) input property. This way you could provide a boolean property from the data objects which indicates whether an expansion indicator should be displayed.

```html
<igx-hierarchical-grid #grid [data]="data" primaryKey="ID" hasChildrenKey="hasChildren">
        ...
</igx-hierarchical-grid>
```

Note that setting the [`hasChildrenKey`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#haschildrenkey) property is not required. In case you don't provide it, expansion indicators will be displayed for each row.

Additionally if you wish to show/hide the header expand/collapse all indicator you can use the [showExpandAll]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#showExpandAll) property.
This UI is disabled by default for performance reasons and it is not recommended to enable it in grids with large data or grids with load on demand.

## Features

The grid features could be enabled and configured through the **igx-row-island** markup - they get applied for every grid that is created for it. Changing options at runtime through the row island instance changes them for each of the grids it has spawned. 

```html
<igx-hierarchical-grid [data]="localData" [displayDensity]="density" [autoGenerate]="false"
    [allowFiltering]='true' [paging]="true" [height]="'600px'" [width]="'800px'" #hGrid>
    <igx-column field="ID" [pinned]="true" [filterable]='true'></igx-column>
    <igx-column-group header="Information">
        <igx-column field="ChildLevels"></igx-column>
        <igx-column field="ProductName" hasSummary='true'></igx-column>
    </igx-column-group>
    <igx-row-island [key]="'childData'" [autoGenerate]="false" [rowSelectable]='true' #layout1>
        <igx-column field="ID" [hasSummary]='true' [dataType]="'number'"></igx-column>
        <igx-column-group header="Information2">
            <igx-column field="ChildLevels"></igx-column>
            <igx-column field="ProductName"></igx-column>
        </igx-column-group>
    </igx-row-island>
</igx-hierarchical-grid>
```

The following grid features work on a per grid level, which means that each grid instance manages them independently of the rest of the grids:

- Sorting
- Filtering
- Paging
- Multi Column Headers
- Hiding
- Pinning
- Moving
- Summaries
- Search

The Selection and Navigation features work globally for the whole **igx-hierarchical-grid** 

- Selection 
    Selection does not allow selected cells to be present for two different child grids at once.
- Navigation
    When navigating up/down, if next/prev element is a child grid, navigation will continue in the related child grid, marking the related cell as selected and focused. If the child cell is outside the current visible view port it is scrolled into view so that selected cell is always visible.

## Collapse All Button

The Hierarchical Grid allows the users to conveniently collapse all its currently expanded rows by pressing the "Collapse All" button at its top left corner. Additionally, every child grid which contains other grids and is a Hierarchical Grid itself, also has such a button - this way the user is able to collapse only a given grid in the hierarchy: 

<img class="responsive-img" src="../../images/unfold_less_icon_screenshot.jpg" srcset="../../images/unfold_less_icon_screenshoto@2x.jpg 2x" />

## Sizing

See the [Grid Sizing](sizing.md) topic.

## CRUD operations

> [!NOTE]
> An important difference from the flat Data Grid is that each instance for a given row island has the same transaction service instance and accumulates the same transaction log. In order to enable the CRUD functionality users should inject the `IgxHierarchicalTransactionServiceFactory`.

Calling CRUD API methods should still be done through each separate grid instance.

## Styling

The igxHierarchicalGrid allows styling through the [Ignite UI for Angular Theme Library](../themes/sass/component-themes.md). The grid's [theme]({environment:sassApiUrl}/index.html#function-igx-grid-theme) exposes a wide variety of properties, which allow the customization of all the features of the grid. 

In the below steps, we are going through the steps of customizing the igxHierarchicalGrid styling.     

### Importing global theme   
To begin the customization of the hierarchical grid, you need to import the `index` file, where all styling functions and mixins are located. 

```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```

### Defining custom theme
Next, create a new theme, that extends the [`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) and accepts the parameters, required to customize the hierarchical grid as desired.

 >[!NOTE]
 >There is no specific `sass` hierarchical grid function.


```scss
$custom-theme: igx-grid-theme(
  $cell-active-border-color: #ffcd0f,
  $cell-selected-background: #6f6f6f,
  $row-hover-background: #f8e495,
  $row-selected-background: #8d8d8d,
  $header-background: #494949,
  $header-text-color: #fff,
  $expand-icon-color: #ffcd0f,
  $expand-icon-hover-color: #e0b710,
  $resize-line-color: #ffcd0f,
  $row-highlight: #ffcd0f
);
```   

### Defining a custom color palette
In the approach, that was described above, the color values were hardcoded. Alternatively, you can achieve greater flexibility, using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.   
`igx-palette` generates a color palette, based on provided primary and secondary colors.  

 ```scss
$black-color: #494949;
$yellow-color: #FFCD0F;
 
$custom-palette: igx-palette(
  $primary: $black-color,
  $secondary: $yellow-color
);
```
After a custom palette has been generated, the `igx-color` function can be used to obtain different varieties of the primary and the secondary colors.   
```scss
$custom-theme: igx-grid-theme(
    $cell-active-border-color: (igx-color($custom-palette, "secondary", 500)),
    $cell-selected-background: (igx-color($custom-palette, "primary", 300)),
    $row-hover-background: (igx-color($custom-palette, "secondary", 100)),
    $row-selected-background: (igx-color($custom-palette, "primary", 100)),
    $header-background: (igx-color($custom-palette, "primary", 500)),
    $header-text-color: (igx-contrast-color($custom-palette, "primary", 500)),
    $expand-icon-color: (igx-color($custom-palette, "secondary", 500)),
    $expand-icon-hover-color: (igx-color($custom-palette, "secondary", 600)),
    $resize-line-color: (igx-color($custom-palette, "secondary", 500)),
    $row-highlight: (igx-color($custom-palette, "secondary", 500))
);
```   

### Defining custom schemas
You can go even further and build flexible structure that has all the benefits of a [**schema**](../themes/sass/schemas.md). The **schema** is the recipe of a theme.   
Extend one of the two predefined schemas, that are provided for every component. In our case, we will use `$_light_grid`.
```scss
$custom-grid-schema: extend($_light-grid,(
    cell-active-border-color: (igx-color:('secondary', 500)),
    cell-selected-background: (igx-color:('primary', 300)),
    row-hover-background: (igx-color:('secondary', 100)),
    row-selected-background: (igx-color:('primary', 100)),
    header-background: (igx-color:('primary', 500)),
    header-text-color: (igx-contrast-color:('primary', 500)),
    expand-icon-color: (igx-color:('secondary', 500)),
    expand-icon-hover-color: (igx-color:('secondary', 600)),
    resize-line-color: (igx-color:('secondary', 500)),
    row-highlight: (igx-color:('secondary', 500))
));
```
In order for the custom schema to be applied, either `light`, or `dark` globals has to be extended. The whole process is actually supplying a component with a custom schema and adding it to the respective component theme afterwards.   
```scss
$my-custom-schema: extend($light-schema, ( 
    igx-grid: $custom-grid-schema
));

$custom-theme: igx-grid-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```   

### Applying the custom theme
The easiest way to apply your theme is with a `sass` `@include` statement in the global styles file: 

```scss
@include igx-grid($custom-theme);
```

### Scoped component theme

In order for the custom theme do affect only specific component, you can move all of the styles you just defined from the global styles file to the custom component's style file (including the import of the `index` file).

This way, due to Angular's [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation), your styles will be applied only to your custom component.

 >[!NOTE]
 >If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep` in order to style the grid.
 >[!NOTE]
 >Wrap the statement inside of a `:host` selector to prevent your styles from affecting elements *outside of* our component:

```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-theme);
    }
}
```   

### Demo

<code-view style="height:505px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-styling" >
</code-view>

>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.


## Known Limitations

|Limitation|Description|
|--- |--- |
|Group By|Group By feature is not supported by the hierarchical grid.|

> [!NOTE]
> `igxHierarchicalGrid` uses `igxForOf` directive internally hence all `igxForOf` limitations are valid for `igxHierarchicalGrid`. For more details see [igxForOf Known Issues](../for-of.html#known-limitations) section.

## API References

* [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
* [IgxRowIslandComponent]({environment:angularApiUrl}/classes/igxrowislandcomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/#function-igx-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)

## Additional Resources
<div class="divider--half"></div>

* [Grid Sizing](sizing.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)