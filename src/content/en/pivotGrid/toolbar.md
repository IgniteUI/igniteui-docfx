---
title: Angular Grid Toolbar - Ignite UI for Angular
_description: Use Angular Pivot Grid Toolbar for essential UI operations. Hosts different UI controls for the Grid’s features - column hiding, pinning, excel exporting, etc.
_keywords: angular toolbar, igniteui for angular, infragistics
_license: commercial
_canonicalLink: grid/toolbar
---



# Angular Pivot Grid Toolbar

The Pivot Grid in Ignite UI for Angular provides an [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) which is essentially a container for **UI** operations. The Angular toolbar is located at the top of the Angular component, i.e the Pivot Grid and it matches its horizontal size. The toolbar container can host predefined UI controls for the following Pivot Grid's features:

- Column Hiding
- Column Pinning
- Exporting to Excel, CSV and PDF
- Advanced Filtering

or just any other custom content. The toolbar and the predefined UI components support Angular events and expose API for developers.

## Angular Toolbar Grid Example





The predefined `actions` and `title` UI components are added inside the `<igx-grid-toolbar>` and this is all needed to have a toolbar providing default interactions with the corresponding Grid features:





> Note: As seen in the code snippet above, the predefined `actions` UI components are wrapped in the [`<igx-grid-toolbar-actions>` container]({environment:angularApiUrl}/classes/igxgridtoolbaractionscomponent.html). This way, the toolbar title is aligned to the left of the toolbar and the actions are aligned to the right of the toolbar.

Of course, each of these UIs can be added independently of each other, or may not be added at all. This way the toolbar container will be rendered empty:





For a comprehensive look over each of the default UI components, continue reading the **Features** section
below.



## Features

The toolbar is great at separating logic/interactions which affects the grid as a whole.
As shown above, it can be configured to provide default components for controlling, column hiding, column pinning,
advanced filtering and exporting data from the grid.
These features can be enabled independently from each other by following a pattern similar to the card component of
the Ignite UI for Angular suite.
Listed below are the main features of the toolbar with example code for each of them.







### Title

Setting a title for the toolbar in your grid is achieved by using the [IgxGridToolbarTitleComponent]({environment:angularApiUrl}/classes/igxgridtoolbartitlecomponent.html).
Users can provide anything from simple text to more involved templates.

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-title>Grid toolbar title</igx-grid-toolbar-title>
</igx-grid-toolbar>
```

### Actions

The toolbar exposes a [specific container]({environment:angularApiUrl}/classes/igxgridtoolbaractionscomponent.html) where users can place actions/interactions in relation to the parent grid.
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

Each action now exposes a way to change the overlay settings of the actions dialog by using the [`overlaySettings`]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html#overlaySettings) input, example:

```html
<igx-grid-toolbar-actions>
    <igx-grid-toolbar-pinning [overlaySettings]="overlaySettingsScaleCenter"></igx-grid-toolbar-pinning>
    <igx-grid-toolbar-hiding [overlaySettings]="overlaySettingsAuto"></igx-grid-toolbar-hiding>
</igx-grid-toolbar-actions>
```

```ts
public data: any[];
public positionStrategyScaleCenter = new GlobalPositionStrategy({
    openAnimation: scaleInCenter,
    closeAnimation: scaleOutCenter
});
public overlaySettingsScaleCenter = {
    positionStrategy: this.positionStrategyScaleCenter,
    scrollStrategy: new AbsoluteScrollStrategy(),
    modal: true,
    closeOnEscape: true
};

public positionStrategyAuto = new AutoPositionStrategy();
public overlaySettingsAuto = {
    positionStrategy: this.positionStrategyAuto,
    scrollStrategy: new AbsoluteScrollStrategy(),
    modal: false,
    closeOnEscape: false
};
constructor() {
    this.data = athletesData;
}
```

The default overlaySettings are using _ConnectedPositionStrategy_ with _Absolute_ scroll strategy, _modal_ set to false, with enabled _close on escape_ and _close on outside click_ interactions.

### Column pinning

[Toolbar Pinning component]({environment:angularApiUrl}/classes/igxgridtoolbarpinningcomponent.html) provides the default UI for interacting with column pinning in the grid.
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

[Toolbar Hiding component]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html) provides the default
UI for interacting with column hiding. Exposes the same input properties for customizing the UI, such as the component
title, the placeholder for the component input and the height of the dropdown itself.

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

[Toolbar Advanced Filtering component]({environment:angularApiUrl}/classes/igxgridtoolbaradvancedfilteringcomponent.html) provides the default UI for the Advanced Filtering feature. The component exposes a way to change the default text of the button.

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-advanced-filtering>Custom text for the toggle button</igx-grid-toolbar-advanced-filtering>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```

### Data exporting



As with the rest of the toolbar actions, exporting is provided through a [Toolbar Exporter component]({environment:angularApiUrl}/classes/igxgridtoolbarexportercomponent.html) out of the box.
The exporting component is using the respective service for the target data format ([Excel]({environment:angularApiUrl}/classes/igxexcelexporterservice.html), [CSV]({environment:angularApiUrl}/classes/igxcsvexporterservice.html), [PDF]({environment:angularApiUrl}/classes/igxpdfexporterservice.html)). That means if the respective service is not provided through the dependency injection chain, the component
won't be able to export anything.
If you need a refresher on the DI in Angular, check the [official guide](https://angular.io/guide/dependency-injection). Here is a sample snippet showing how to enable
all export services for your application.

```typescript
// app.module.ts

import { IgxExcelExporterService, IgxCsvExporterService, IgxPdfExporterService } from 'igniteui-angular/grids/core';
// import { IgxExcelExporterService, IgxCsvExporterService, IgxPdfExporterService } from '@infragistics/igniteui-angular/grids/core'; for licensed package

@NgModule({
    ...
    providers: [IgxExcelExporterService, IgxCsvExporterService, IgxPdfExporterService ]
})
export class AppModule { ... }
```

> [!Note]
> In v12.2.1 and later, the exporter services are provided in root, which means you no longer need to declare them in the AppModule providers.

The toolbar exporter component exposes several input properties for customizing both the UI and the exporting experience.
These range from changing the display text, to enabling/disabling options in the dropdown to customizing the name of the
generated file. For full reference, consult the [API documentation]({environment:angularApiUrl}/classes/igxgridtoolbarexportercomponent.html) for the toolbar exporter component.

Here is a snippet showing some of the options which can be customized through the Angular template:

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-exporter
            <!-- If active, enables the CSV export entry in the dropdown UI -->
            [exportCSV]="csvExportEnabled"
            <!-- If active, enables the excel export entry in the dropdown UI -->
            [exportExcel]="excelExportEnabled"
            <!-- If active, enables the PDF export entry in the dropdown UI -->
            [exportPDF]="pdfExportEnabled"
            <!-- The name of the generated export file without the file extension -->
            filename="exported_data"
        >
            Custom text for the exporter button
            <span excelText>Custom text for the excel export entry</span>
            <span csvText>Custom text for the CSV export entry</span>
            <span pdfText>Custom text for the PDF export entry</span>
        </igx-grid-toolbar-exporter>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```



In addition to changing the exported filename, the user can further configure the exporter options by waiting for the [toolbarExporting]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#toolbarExporting) event and customizing the options entry in the event properties.

> [!NOTE]
> By default when exporting to CSV the exporter exports using a comma separator and uses a '.csv' extension for the output file.
> You can customize these exporting parameters by subscribing to events of the exporter or changing the values of the exporter options fields.
> You can also cancel the export process by setting the cancel field of the event args to true.

The following code snippet demonstrates subscribing to the toolbar exporting event and configuring the exporter options:

```html
<igx-pivot-grid (toolbarExporting)="configureExport($event)" ></igx-pivot-grid>
```

```typescript
configureExport(args: IGridToolbarExportEventArgs) {
    const options: IgxExporterOptionsBase = args.options;
    
    options.fileName = `Report_${new Date().toDateString()}`;

    if (options instanceof IgxExcelExporterOptions) {
        options.columnWidth = 10;
    } else {
        options.fileType = CsvFileTypes.TSV;
        options.valueDelimiter = '\t';
    }

    args.exporter.columnExporting.subscribe((columnArgs: IColumnExportingEventArgs) => {
        
        
    });
}
```



The following sample demonstrates how to customize the exported files:




## Exporting Indicator

When using the default toolbar exporter component, whenever an export operation takes place the toolbar will show a progress indicator while the operation is in progress.
Moreover, users can set the toolbar [showProgress]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#showProgress) property and use for their own long running operations
or just as another way to signify an action taking place in the grid.
The sample below has significant amount of data. While the data is being exported, the progress bar is shown. Additionally, it has another button that simulates a long running operation in the grid:




## Custom Content

> [!NOTE]
> This replaces the old toolbar template directive. If you are migrating from a version before v11 our migrations will handle
> the moving of the template content. However, we do not handle the bindings in the template, so make sure to double check the modified
> template files after the migration completes.

If the actions part of the toolbar component is not sufficient for a particular use case, the toolbar itself has a general content projection where
users can provide additional UI. If the user needs the respective grid instance for API calls or bindings, they can create a template reference variable.


Here is a sample snippet:

```html
<igx-pivot-grid #gridRef ...>

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

</igx-pivot-grid>
```


The following sample demonstrates how to add an additional button to the toolbar to clear the sorting set by clicking on the columns' headers:





## Styling

To get started with styling the toolbar, we need to import the index file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

First, let's create a new palette.

```scss
$my-dark-palette: palette(
  $primary: #2466ff,
  $secondary: #ffcd0f,
  $surface: #2a2b2f,
  $grays: #fff,
);

$my-dark-color: color($my-dark-palette, 'surface');
```

Now, create a new theme that extends the [`grid-toolbar-theme`]({environment:sassApiUrl}/themes#function-grid-toolbar-theme) and modify the `$background-color` and the `$title-text-color` parameters.

```scss
$dark-grid-toolbar-theme: grid-toolbar-theme(
  $background-color: $my-dark-color,
  $title-text-color: color($my-dark-palette, 'secondary'),
  $dropdown-background: $my-dark-color,
);
```

To theme the column actions menus of the toolbar, we have to change the theme of the [`column-actions-theme`]({environment:sassApiUrl}/themes#function-igx-column-actionsr-theme) component.

```scss
$dark-column-actions-theme: column-actions-theme(
  $title-color: color($my-dark-palette, 'secondary'),
  $background-color: color($my-dark-palette, 'surface')
);
```

Since the column actions are using other components - `igx-button` and `igx-checkbox` we need to change their themes to match our new toolbar theme.

```scss
$dark-button-theme: outlined-button-theme(
  $background: color($my-dark-palette, 'secondary'),
  $hover-background: color($my-dark-palette, 'grays', 100),
  $hover-foreground: color($my-dark-palette, 'secondary')
);

$dark-checkbox-theme: checkbox-theme(
  $tick-color: $my-dark-color,
);
```

The last step is to **include** the newly created themes.

```scss
:host {
    @include tokens($dark-grid-toolbar-theme);
    @include tokens($dark-column-actions-theme);
    @include tokens($dark-checkbox-theme);
    @include tokens($dark-button-theme);
}
```

>[!NOTE]
>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep` to style the components inside the grid toolbar component:

```scss
@include tokens($dark-grid-toolbar-theme);

:host {
  ::ng-deep {
    @include tokens($dark-column-actions-theme);
    @include tokens($dark-checkbox-theme);
    @include tokens($dark-button-theme);
  }
}
```

### Demo





## API References

The Grid Toolbar service has a few more APIs to explore, which are listed below.

- [`IgxGridToolbarActionsComponent`]({environment:angularApiUrl}/classes/igxgridtoolbaractionscomponent.html)
- [`IgxGridToolbarAdvancedFilteringComponent`]({environment:angularApiUrl}/classes/igxgridtoolbaradvancedfilteringcomponent.html)
- [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html)
- [`IgxGridToolbarExporterComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarexportercomponent.html)
- [`IgxGridToolbarHidingComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html)
- [`IgxGridToolbarPinningComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarpinningcomponent.html)
- [`IgxGridToolbarTitleComponent`]({environment:angularApiUrl}/classes/igxgridtoolbartitlecomponent.html)


[`IgxPivotGridComponent`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html) events:

- [`toolbarExporting`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#toolbarExporting)

Styles:

- [`IgxPivotGridComponent Styles`]({environment:sassApiUrl}/themes#function-grid-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
