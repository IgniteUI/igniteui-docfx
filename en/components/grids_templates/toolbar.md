@@if(igxName==='IgxGrid') {
---
title: Angular Grid Toolbar | Material Table | Ignite UI for Angular | infragistics 
_description: Understand how to use the Ignite UI for Angular Toolbar for essential UI operations. The Material UI table toolbar hosts different UI controls related to different features.
_keywords: angular toolbar, igniteui for angular, infragistics
---
}

@@if(igxName!=='IgxGrid') {
---
title: Angular Grid Toolbar | Material Table | Ignite UI for Angular | infragistics 
_description: Understand how to use the Ignite UI for Angular Toolbar for essential UI operations. The Material UI table toolbar hosts different UI controls related to different features.
_keywords: angular toolbar, igniteui for angular, infragistics
_canonicalLink: grid/toolbar
---
}

# @@igComponent Toolbar container for UI operations

The @@igComponent in Ignite UI for Angular provides an [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) which is essentially a container for **UI** operations. The Angular toolbar is located at the top of the Angular component, i.e the @@igComponent and it matches its horizontal size. The toolbar container hosts different UI controls which are related to some of the @@igComponent's features - column hiding, column pinning, excel exporting, etc and supports Angular events.

## Angular Toolbar Grid Example

@@if (igxName === 'IgxGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-toolbar-sample-1" alt="Angular Toolbar Grid Example">
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-4" alt="Angular Toolbar Grid Example">
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-title" alt="Angular Toolbar Grid Example">
</code-view>

}

You can enable the toolbar for @@igComponent by inserting the `igx-grid-toolbar` component between the @@igComponent tags.
Additional features for the toolbar are enabled by using the default toolbar UI components or creating your own.
For a comprehensive look over the default UI components and how to enabled them continue reading the **Features** section
below.
The following code snippet demonstrates how to enable a toolbar and set its title:

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [autoGenerate]="true">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Grid Title</igx-grid-toolbar-title>
    </igx-grid-toolbar>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Tree Grid Toolbar</igx-grid-toolbar-title>
    </igx-grid-toolbar>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [data]="data">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Hierarchical Grid Toolbar</igx-grid-toolbar-title>
    </igx-grid-toolbar>
</igx-hierarchical-grid>
```
}

@@if (igxName === 'IgxHierarchicalGrid') {

## Toolbar with child grids
Due to certain limitations in how the child grids of an IgxHierarchicalGrid are implemented and how DI scope works, there is a caveat when
using the toolbar in the scope of child grids. When defining a toolbar component inside the `igx-row-island` tags, always make sure
to use the IgxGridToolbar directive on the toolbar itself and pass the provided grid instance as an input property to the toolbar itself.
This will make sure you always have the correct grid instance in the scope of your template:

```html
<igx-hierarchical-grid>
    ...
    <igx-row-island>
        <!--
            You can name the binding from igxGridToolbar however you want. Just make sure to use
            it inside the template if you need to access the grid instance.
        -->
        <igx-grid-toolbar [grid]="gridRef" *igxGridToolbar="let gridRef">
            <igx-grid-toolbar-title>Child toolbar {{ gridRef.parentIsland.level }}</igx-grid-toolbar-title>
        </igx-grid-toolbar>
    </igx-row-island>
    ...
</igx-hierarchical-grid>
```

}

## Features

The toolbar is great at separating logic/interactions which affects the grid as a whole.
Thus, it can be configured to provide default components for controlling, column hiding, column pinning,
advanced filtering and exporting data from the grid.
These features can be enabled independently from each other by following a pattern similar to the card component of
the Ignite UI for Angular suite.
Listed below are the main features of the toolbar with example code for each of them.


@@if (igxName === 'IgxGrid') {

<code-view style="height:630px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-toolbar-sample-2" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-1" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-options" >
</code-view>

}


### Title
Setting a title for the toolbar in your grid is achieved by using the [IgxGridToolbarTitleDirective]({environment:angularApiUrl}/classes/igxgridtoolbartitledirective.html).
Users can provide anything from simple text to more involved templates.
```html
<igx-grid-toolbar>
    <igx-grid-toolbar-title>Grid toolbar title</igx-grid-toolbar-title>
</igx-grid-toolbar>
```

### Actions
The toolbar exposes a [specific container]({environment:angularApiUrl}/classes/igxgridtoolbaractionsdirective.html) where users can place actions/interactions in relation to the parent grid.
As with the title portion of the toolbar, users can provide anything inside that template part, including the default
toolbar interaction components.
```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <button igxButton>Action</button>
        <igx-select></igx-select>
        ...
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```

### Column pinning
[This component]({environment:angularApiUrl}/classes/igxgridtoolbarpinningcomponent.html) provides the default UI for interacting with column pinning in the grid.
The component is setup to work out of the box with the parent grid containing the toolbar as well as several input properties for customizing the UI, such as the component
title, the placeholder for the component input and the height of the dropdown itself.

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-pinning
            title="Grid pinned columns"
            prompt="Filter column collection"
            columnListHeight="400px"
        >
        </igx-grid-toolbar-pinning>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```


### Column hiding
Similar to the pinning actions component, the [hiding component]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html) provides the default
UI for interacting with column hiding.

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-hiding
            title="Grid column hiding"
            prompt="Filter column collection"
            columnListHeight="400px"
        >
        </igx-grid-toolbar-hiding>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```

### Advanced filtering
If advanced filtering is enabled in the grid, users can provide the [default component]({environment:angularApiUrl}/classes/igxgridtoolbaradvancedfilteringcomponent.html) for the
advanced filtering feature. The component exposes a way to change the default text of the button.
```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-advanced-filtering>Custom text for the toggle button</igx-grid-toolbar-advanced-filtering>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```

### Data exporting

@@if (igxName === 'IgxHierarchicalGrid') {
> [!NOTE]
> When exporting the Hierarchical Grid or any of its child grids down the hierarchy, the exported data will be a flat collection of rows
> belonging to their respective grid (the child grids will not be included in the exported data).
}

As with the rest of the toolbar actions, exporting is provided through a toolbar [component]({environment:angularApiUrl}/classes/igxgridtoolbarexportercomponent.html) out of the box.
The exporting component is using the respective service for the target data format ([Excel]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) [CSV]({environment:angularApiUrl}/classes/igxcsvexporterservice.html)). That means if the respective service is not provided through the dependency injection chain, the component
won't be able to export anything.
If you need a refresher on the DI in Angular, check the [official guide](https://angular.io/guide/dependency-injection). Here is a sample snippet showing how to enable
all export services for your application.

```typescript
// app.module.ts

import { IgxExcelExporterService, IgxCsvExporterService } from 'igniteui-angular';

@NgModule({
    ...
    providers: [IgxExcelExporterService, IgxCsvExporterService ]
})
export class AppModule { ... }
```

The toolbar exporter component exposes several input properties for customizing both the UI and the exporting experience.
These range from changing the display text, to enabling/disabling options in the dropdown to customizing the name of the
generated file. For full reference, consult the [API documentation]({environment:angularApiUrl}/classes/igxgridtoolbarexportercomponent.html) for the toolbar exporter component.

Here is a snippet showing some of the options which can be customized through the Angular template:

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-exporter
            <!-- If active, enables the csv export entry in the dropdown UI -->
            [exportCSV]="csvExportEnabled"
            <!-- If active, enables the excel export entry in the dropdown UI -->
            [exportExcel]="excelExportEnabled"
            <!-- The name of the generated export file without the file extension -->
            filename="exported_data"
        >
            Custom text for the exporter button
            <span excelText>Custom text for the excel export entry</span>
            <span csvText>Custom text for the CSV export entry</span>
        </igx-grid-toolbar-exporter>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```

@@if (igxName !== 'IgxHierarchicalGrid') {

In addition to changing the exported filename, the user can further configure the exporter options by waiting for the [onToolbarExporting]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ontoolbarexporting) event and customizing the options entry in the event properties.

> [!NOTE]
> By default when exporting to CSV the exporter exports using a comma separator and uses a '.csv' extension for the output file.
> You can customize these exporting parameters by subscribing to events of the exporter or changing the values of the exporter options fields.
> You can also cancel the export process by setting the cancel field of the event args to true.

The following code snippet demonstrates subscribing to the toolbar exporting event and configuring the exporter options:

```html
<@@igSelector (onToolbarExporting)="configureExport($event)" ></@@igSelector>
```

```typescript
configureExport(args: IGridToolbarExportEventArgs) {
    const options: IgxExporterOptionsBase = args.options;

    options.fileName = `Report_${new Date().toDateString()}`;

    if (options instanceof IgxExcelExporterOptions) {
        options.columnWidth = 10;
    } else {
        options.fileType = CsvFileTypes.TSV;
        options.valueDelimiter = "\t";
    }

    args.exporter.columnExporting.subscribe((columnArgs: IColumnExportingEventArgs) => {
        @@if (igxName === 'IgxGrid') {
        // Don't export image fields
        columnArgs.cancel = columnArgs.header === "Athlete" ||
                            columnArgs.header === "Country";
        }
        @@if (igxName === 'IgxTreeGrid') {
        // Don't export image field
        columnArgs.cancel = columnArgs.header === "Name";
        }
    });
}
```
}

The following sample demonstrates how to customize the exported files:

@@if (igxName === 'IgxGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-toolbar-sample-3" >
</code-view>

<div class="divider"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-2" >
</code-view>

<div class="divider"></div>
}

## Exporting Indicator

When using the default toolbar exporter component, whenever an export operation takes place the toolbar will show a progress indicator while the operation is in progress.
Moreover, users can set the toolbar [showProgress]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#showprogress) property and use for their own long running operations
or just as another way to signify an action taking place in the grid.
The sample belows uses has significant amount of data, in order to increase the time needed for data export so the progressbar can be seen. Additionally it has another button
that simulates a long running operation in the grid:

@@if (igxName === 'IgxGrid') {

<code-view style="height: 370px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/exporting-visualization" >
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height: 370px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-exporting-visualization" >
</code-view>

<div class="divider--half"></div>
}

## Custom Content

> [!NOTE]
> This replaces the old toolbar template directive. If you are migrating from a version before v11 our migrations will handle
> the moving of the template content. However, we do not handle the bindings in the template, so make sure to double check the modified
> template files after the migration completes.

If the actions part of the toolbar component is not sufficient for a particular use case, the toolbar itself has a general content projection where
users can provide additional UI. If the user needs the respective grid instance for API calls or bindings, they can create a template reference variable.


Here is a sample snippet:

```html
<@@igSelector #gridRef ...>

    ...
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>{{ titleBinding }}</igx-grid-toolbar-title>

        <!--
            Everything between the toolbar tags except the default toolbar components/directives
            will be projected as custom content.
         -->
        <button igxButton="flat" igxRipple (click)="#gridRef.clearSort()">
            <igx-icon fontSet="material">clear</igx-icon>
            Clear Sort
        </button>

        <igx-grid-toolbar-actions>
            ...
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>

</@@igSelector>
```


The following sample demonstrates how to add an additional button to the toolbar to clear the sorting set by clicking on the columns' headers:

@@if (igxName === 'IgxGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-toolbar-sample-4" >
</code-view>

<div class="divider"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-3" >
</code-view>

<div class="divider"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-custom" >
</code-view>

<div class="divider"></div>
}

## Styling

To get started with styling the toolbar, we need to import the index file, where all the theme functions and component mixins live:

```scss
// custom-grid-paging-style.component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

First, let's create a new palette.

```scss
$my-dark-palette: igx-palette(
    $primary: #2466ff,
    $secondary: #FFCD0F,
    $surface: #2a2b2f,
    $grays: #fff,
);

$my-dark-color: igx-color($my-dark-palette, 'surface');
```

Now, create a new theme that extends the [`igx-grid-toolbar-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-toolbar-theme) and modify the `$background-color` and the `$title-text-color` parameters.

```scss
$dark-grid-toolbar-theme: igx-grid-toolbar-theme(
    $palette: $my-dark-palette,
    $background-color: $my-dark-color,
    $title-text-color: igx-color($my-dark-palette, 'secondary'),
    $dropdown-background: $my-dark-color,
);
```

To theme the column actions menus of the toolbar, we have to change the theme of the [`igx-column-actions-theme`]({environment:sassApiUrl}/index.html#function-igx-column-actionsr-theme) component.

```scss
$dark-column-actions-theme: igx-column-actions-theme(
    $palette: $my-dark-palette,
    $title-color: igx-color($my-dark-palette, 'secondary'),
    $background-color: igx-color($my-dark-palette, 'surface')
);
```

Since the column actions are using other components - igx-button, igx-checkbox, and igx-input-group, we need to change their themes to match our new toolbar theme.

```scss
$dark-button-theme: igx-button-theme(
    $palette: $my-dark-palette,
    $outlined-background: igx-color($my-dark-palette, 'secondary'),
    $outlined-hover-background: igx-color($my-dark-palette, 'grays', 100),
    $outlined-hover-text-color: igx-color($my-dark-palette, 'secondary')
);

$dark-checkbox-theme: igx-checkbox-theme(
    $palette: $my-dark-palette,
    $tick-color: $my-dark-color,
);

$dark-input-group-theme: igx-input-group-theme(
    $palette: $my-dark-palette
);
```

The last step is to **include** the newly created themes.

```scss
:host {
    @include igx-grid-toolbar($dark-grid-toolbar-theme);
    @include igx-column-actions($dark-column-actions-theme);
    @include igx-checkbox($dark-checkbox-theme);
    @include igx-input-group($dark-input-group-theme);
    @include igx-button($dark-button-theme);
}
```

>[!NOTE]
>If `$legacy-support` is set to `false(default)`, include the component css variables like that:

```scss
:host {
    @include igx-css-vars($dark-grid-toolbar-theme);
    @include igx-css-vars($dark-column-actions-theme);
    @include igx-css-vars($dark-checkbox-theme);
    @include igx-css-vars($dark-input-group-theme);
    @include igx-css-vars($dark-button-theme);
}
```

>[!NOTE]
>If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include igx-grid-toolbar($dark-grid-toolbar-theme);
        @include igx-column-actions($dark-column-actions-theme);
        @include igx-checkbox($dark-checkbox-theme);
        @include igx-input-group($dark-input-group-theme);
        @include igx-button($dark-button-theme);
    }
}
```

### Demo

@@if (igxName === 'IgxGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-toolbar-style" >
</code-view>

<div class="divider"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-style" >
</code-view>

<div class="divider"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-style" >
</code-view>

<div class="divider"></div>
}

## API References

The Grid Toolbar service has a few more APIs to explore, which are listed below.

* [`IgxGridToolbarActionsDirective`]({environment:angularApiUrl}/classes/igxgridtoolbaractionsdirective.html)
* [`IgxGridToolbarAdvancedFilteringComponent`]({environment:angularApiUrl}/classes/igxgridtoolbaradvancedfilteringcomponent.html)
* [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html)
* [`IgxGridToolbarExporterComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarexportercomponent.html)
* [`IgxGridToolbarHidingComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html)
* [`IgxGridToolbarPinningComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarpinningcomponent.html)
* [`IgxGridToolbarTitleDirective`]({environment:angularApiUrl}/classes/igxgridtoolbartitledirective.html)


[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) events:
* [`onToolbarExporting`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ontoolbarexporting)

Styles:

* [`@@igxNameComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
