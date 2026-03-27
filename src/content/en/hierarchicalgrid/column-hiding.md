---
title: Column Hiding in Angular Hierarchical Grid - Ignite UI for Angular
_description: Learn how to use the Column Hiding feature that allows users to change the visible state of the columns directly through the UI of the Ignite Material UI table.
_keywords: column hiding, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/column-hiding
---



# Angular Hierarchical Grid Column Hiding

The Ignite UI for Angular Hierarchical Grid provides an [`IgxColumnActionsComponent`]({environment:angularApiUrl}/classes/igxcolumnactionscomponent.html) with an [`IgxColumnHidingDirective`]({environment:angularApiUrl}/classes/igxcolumnhidingdirective.html) which allows users to perform column hiding directly through the user interface or by using the Angular component. The Material UI Grid has a built-in column hiding UI, which can be used through the Hierarchical Grid's toolbar to change the visible state of the columns. In addition, developers can always define the column hiding UI as a separate component and place it anywhere they want on the page.

## Angular Hierarchical Grid Column Hiding Example





<code-view style="height:570px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-hiding/" alt="Angular Hierarchical Grid Column Hiding Example">
</code-view>

<div class="divider--half"></div>



## Hierarchical Grid Setup

Let's start by creating our Hierarchical Grid and binding it to our data. We will also enable both filtering and sorting for the columns.





```html
<igx-hierarchical-grid class="hgrid" [data]="localdata"
        [height]="'560px'" [width]="'100%'" columnWidth="200px" [allowFiltering]="true" #hGrid>

    <igx-column field="Artist" [sortable]="true" [disableHiding]="true"></igx-column>
    <igx-column field="Photo">
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column field="Grammy Nominations" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column field="Grammy Awards" [sortable]="true"></igx-column>

    <igx-row-island [key]="'Albums'" [autoGenerate]="false" #layout1 >
        <igx-column field="Album" [sortable]="true"></igx-column>
        <igx-column field="Launch Date" [sortable]="true"></igx-column>
        <igx-column field="Billboard Review" [sortable]="true"></igx-column>
        <igx-column field="US Billboard 200" [sortable]="true"></igx-column>
        <igx-row-island [key]="'Songs'" [autoGenerate]="false">
            <igx-column field="No."></igx-column>
            <igx-column field="Title"></igx-column>
            <igx-column field="Released"></igx-column>
            <igx-column field="Genre"></igx-column>
        </igx-row-island>
    </igx-row-island>

    <igx-row-island [key]="'Tours'" [autoGenerate]="false">
        <igx-column field="Tour"></igx-column>
        <igx-column field="Started on"></igx-column>
        <igx-column field="Location"></igx-column>
        <igx-column field="Headliner"></igx-column>
    </igx-row-island>

</igx-hierarchical-grid>
```



## Toolbar's Column Hiding UI

The built-in Column Hiding UI is placed inside an [`IgxDropDownComponent`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) in the Hierarchical Grid's toolbar. We can show/hide the Column Hiding UI by using this exact dropdown.
For this purpose all we have to do is set both the [`IgxGridToolbarActionsComponent`]({environment:angularApiUrl}/classes/igxgridtoolbaractionscomponent.html) and the [`IgxGridToolbarHidingComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html) inside of the Hierarchical Grid. We will also add a title to our toolbar by using the [`IgxGridToolbarTitleComponent`]({environment:angularApiUrl}/classes/igxgridtoolbartitlecomponent.html) and a custom style for our Hierarchical Grid's wrapper.



```html
<!--columnHiding.component.html-->
<div class="hgrid-sample">
    <igx-hierarchical-grid class="hgrid" [data]="localdata">
    <igx-grid-toolbar>
            <igx-grid-toolbar-title>Singers</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
    ...
 </igx-hierarchical-grid>
</div>
```

```css
/* columnHiding.component.css */
.photo {
    vertical-align: middle;
    max-height: 62px;
}
.cell__inner_2 {
    margin: 1px
}
```









The Hierarchical Grid provides us with some useful properties when it comes to using the toolbar's column hiding UI.
By using the `igx-grid-toolbar-hiding` [`title`]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html#title) property, we will set the title that is displayed inside the dropdown button in the toolbar.




```html
<div class="hgrid-sample">
    <igx-hierarchical-grid class="hgrid" [data]="localdata">
    <igx-grid-toolbar>
            <igx-grid-toolbar-title>Singers</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding #hidingActionRef title="Column Hiding"></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
 </igx-hierarchical-grid>
</div>
```



By using the [`columnsAreaMaxHeight`]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html#columnsAreaMaxHeight) property of the IgxGridToolbarHidingComponent, we can set the maximum height of the area that contains the column actions. This way if we have a lot of actions and not all of them can fit in the container, a scrollbar will appear, which will allow us to scroll to any action we want.

```typescript
// columnHiding.component.ts

public ngAfterViewInit() {        
    this.hidingActionRef.columnsAreaMaxHeight = "200px";
}
```

In order to use the expanded set of functionalities for the column hiding UI, we can use the IgxColumnActionsComponent's [`columnsAreaMaxHeight`]({environment:angularApiUrl}/classes/IgxColumnActionsComponent.html#columnsAreaMaxHeight) property. This way we can use it according to our application's requirements.

You can see the result of the code from above at the beginning of this article in the Angular Column Hiding Example section.



## Styling

To get started with styling the column actions component, we need to import the index file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

By using the simplest approach, we create a new theme that extends the [`column-actions-theme`]({environment:sassApiUrl}/themes#function-column-actions-theme) and accepts the `$title-color` and the `$background-color` parameters.

```scss
$custom-column-actions-theme: column-actions-theme(
  $background-color: #292826,
  $title-color: #ffcd0f
);
```

As seen, the `column-actions-theme` only controls colors for the column actions container, but does not affect the buttons, checkboxes and the input-group inside of it. Let's say we want to style the buttons as well, so we will create a new button theme:

```scss
$custom-button: flat-button-theme(
  $foreground: #292826, 
  $disabled-foreground: rgba(255, 255, 255, .54)
);
```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`]({environment:sassApiUrl}/palettes#function-palette) and [`color`]({environment:sassApiUrl}/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

In this example we only changed the text-color of the flat buttons and the button disabled color, but the [`button-theme`]({environment:sassApiUrl}/themes#function-button-theme) provides way more parameters to control the button style.

The last step is to **include** the component mixins, each with its respective theme:

```scss
:host {
  @include tokens($custom-column-actions-theme);
  
  .igx-column-actions {
    @include tokens($custom-button);
  }
}
```

>[!NOTE]
>We include the created **flat-button-theme** within `.igx-column-actions`, so that only the column hiding buttons would be styled. Otherwise other buttons in the grid would be affected too.
>[!NOTE]
>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep` for the components inside the column action component (buttons, checkboxes ...etc):

```scss
:host {
  @include tokens($custom-column-actions-theme);

  ::ng-deep {
    .igx-column-actions {
      @include tokens($custom-button);
    }
  }
}
```

### Demo





<code-view style="height:570px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-column-hiding-style/" >
</code-view>

<div class="divider--half"></div>


## API References



In this article we learned how to use the built-in column hiding UI in the Hierarchical Grid's toolbar.


The column hiding UI has a few more APIs to explore, which are listed below.

- [IgxColumnActionsComponent]({environment:angularApiUrl}/classes/igxcolumnactionscomponent.html)
- [IgxColumnActionsComponent Styles]({environment:sassApiUrl}/themes#function-column-actions-theme)

Additional components and/or directives with relative APIs that were used:

[`IgxHierarchicalGridComponent`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) properties:

- [hiddenColumnsCount]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#hiddenColumnsCount)

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) properties:

- [disableHiding]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disablehiding)

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) properties:

- [showProgress]({environment:angularApiUrl}/classes/IgxGridToolbarComponent.html#showProgress)

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) components:

- [IgxGridToolbarTitleComponent]({environment:angularApiUrl}/classes/igxgridtoolbartitlecomponent.html)
- [IgxGridToolbarActionsComponent]({environment:angularApiUrl}/classes/igxgridtoolbaractionscomponent.html)

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) methods:

[`IgxHierarchicalGridComponent`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) events:

- [columnVisibilityChanged]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#columnVisibilityChanged)

[IgxRadioComponent]({environment:angularApiUrl}/classes/igxradiocomponent.html)

Styles:

- [IgxHierarchicalGridComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)
- [IgxRadioComponent Styles]({environment:sassApiUrl}/themes#function-radio-theme)

## Additional Resources

<div class="divider--half"></div>

- [Hierarchical Grid overview](hierarchical-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Filtering](filtering.md)
- [Paging](paging.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)


<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
