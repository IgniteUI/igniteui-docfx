@@if(igxName === 'IgxGrid'){
---
title: Angular Grid | Advanced Filtering | Infragistics
_description: Learn how to configure advanced filter of data with the Angular Material table. The grid advanced filtering is more convenient and engaging than ever.
_keywords: advanced filter, igniteui for angular, infragistics
---
}
@@if(igxName !== 'IgxGrid'){
---
title: Angular Grid | Advanced Filtering | Infragistics
_description: Learn how to configure advanced filter of data with the Angular Material table. The grid advanced filtering is more convenient and engaging than ever.
_keywords: advanced filter, igniteui for angular, infragistics
_canonicalLink: grid/advanced-filtering
---
}


# @@igComponent Advanced Filtering

The Advanced filtering provides a dialog which allows the creation of groups with filtering conditions across all columns for any Angular Material table like the @@igComponent.

## Angular @@igComponent Advanced Filtering Example

@@if (igxName === 'IgxGrid') {

<code-view style="height:530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-advanced-filtering" alt="Angular @@igComponent Advanced Filtering Example">
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-advanced-filtering" alt="Angular @@igComponent Advanced Filtering Example">
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:630px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-advanced-filtering" alt="Angular @@igComponent Advanced Filtering Example">
</code-view>

}

<div class="divider--half"></div>

## Interaction

In order to open the advanced filtering dialog, the **Advanced Filtering** button in the grid toolbar should be clicked. If no advanced filter is applied, you should start with creating a group of filtering conditions linked with [`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) or [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or). After that, you can add filtering conditions or sub-groups. 

In order to add a filtering condition, you have to select any of the [`filterable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#filterable) columns, an operand based on the column [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) and a value if the operand is not unary. Once the condition is committed, a chip with the condition information appears. By hovering or clicking the chip, you have the options to modify it or add another condition or group right after it.

If you select more than one filtering condition chip, a context menu appears with options to create a group or delete the filters. If you choose to create a group with the selected conditions, the newly created group will appear where the topmost selected condition was placed.

In order to select a group, you can also click on its vertical line, which is colored based on the the linking condition ([`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) or [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or)). If a single group is selected, you get a context menu with options to change its filtering logic, ungroup or delete it.

In order to filter the data once you are ready with creating the filtering conditions and groups, you should click the **Apply** button. If you have modified the advanced filter, but you don't want to preserve the changes, you should click the **Cancel** button. You could also clear the advanced filter by clicking the **Clear Filter** button.

## Usage

To enable the advanced filtering, the [`allowAdvancedFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowadvancedfiltering) input property should be set to `true`.

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [autoGenerate]="true" [allowAdvancedFiltering]="true">
    <igx-grid-toolbar></igx-grid-toolbar>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" [autoGenerate]="true" [allowAdvancedFiltering]="true">
    <igx-grid-toolbar></igx-grid-toolbar>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [data]="data" [autoGenerate]="true" [allowAdvancedFiltering]="true">
    <igx-grid-toolbar></igx-grid-toolbar>
</igx-hierarchical-grid>
```
}

The advanced filtering generates a [`FilteringExpressionsTree`]({environment:angularApiUrl}/classes/filteringexpressionstree.html) which is stored in the [`advancedFilteringExpressionsTree`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#advancedfilteringexpressionstree) input property. You could use the [`advancedFilteringExpressionsTree`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#advancedfilteringexpressionstree) property to set an initial state of the advanced filtering.

```typescript
ngAfterViewInit(): void {
    const tree = new FilteringExpressionsTree(FilteringLogic.And);
    tree.filteringOperands.push({
        fieldName: 'ID',
        condition: IgxStringFilteringOperand.instance().condition('contains'),
        searchVal: 'a',
        ignoreCase: true
    });
    const subTree = new FilteringExpressionsTree(FilteringLogic.Or);
    subTree.filteringOperands.push({
        fieldName: 'ContactTitle',
        condition: IgxStringFilteringOperand.instance().condition('doesNotContain'),
        searchVal: 'b',
        ignoreCase: true
    });
    subTree.filteringOperands.push({
        fieldName: 'CompanyName',
        condition: IgxStringFilteringOperand.instance().condition('startsWith'),
        searchVal: 'c',
        ignoreCase: true
    });
    tree.filteringOperands.push(subTree);
    
    this.@@igObjectRef.advancedFilteringExpressionsTree = tree;
}
```

In case you don't want to show the @@igComponent toolbar, you could use the [`openAdvancedFilteringDialog`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#openadvancedfilteringdialog) and [`closeAdvancedFilteringDialog`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#closeadvancedfilteringdialog) methods to open and close the advanced filtering dialog programmatically.

>[!NOTE]
>You can enable both the `quickFilter`/`excelStyleFilter` and the advanced filtering user interfaces in the @@igComponent. Both filtering user interfaces will work independently of one another. The final filtered result in the @@igComponent is the intersection between the results of the two filters.


## External Advanced filtering

As you see the demo above the Advanced filtering dialog is hosted in an overlay on top of the @@igComponent. When the setup in the dialog is ready, the apply or close actions would hide that dialog. There is a way to make that dialog stay always visible - be used as a standalone component. In the demo below, the advanced filtering dialog is declared separately of the @@igComponent.

### Demo

@@if (igxName === 'IgxGrid') {

<code-view style="height:750px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-external-advanced-filtering" >
</code-view>

}

@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:750px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-external-advanced-filtering" >
</code-view>

}

@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:750px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-external-advanced-filtering" >
</code-view>

}

### Usage

It's super easy to configure the advanced filtering to work outside of the @@igComponent. All you need to do is to create the dialog and set its [`grid`]({environment:angularApiUrl}/classes/igxadvancedfilteringdialogcomponent.html#grid) property:

@@if (igxName === 'IgxGrid') {
```html
<igx-advanced-filtering-dialog [grid]="grid1">
</igx-advanced-filtering-dialog>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-advanced-filtering-dialog [grid]="treegrid1">
</igx-advanced-filtering-dialog>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-advanced-filtering-dialog [grid]="hierarchicalgrid1">
</igx-advanced-filtering-dialog>
```
}


<div class="divider--half"></div>


## Styling

To get started with styling the Advanced Filtering dialog, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

The advanced filtering dialog takes its background color from the grid's theme, using the `filtering-row-background` parameter. In order to change the background we need to create a custom theme:

```scss
$custom-grid: igx-grid-theme(
    $filtering-row-background: #FFCD0F
);
```

Since we have other components inside the advanced filtering dialog, such as buttons, chips, dropdowns and inputs, we need to create a separate theme for each one:

```scss
$custom-button: igx-button-theme(
    $disabled-color: gray,
    ...
);

$custom-button-group: igx-button-group-theme(
    $item-background:  #292826,
    ...
);

$custom-input-group: igx-input-group-theme(
    $box-background: #4a4a4a,
    ...
);

$custom-chip: igx-chip-theme(
    $background: #FFCD0F,
    ...
);

$custom-drop-down: igx-drop-down-theme(
    $background-color: #292826,
    ...
);
```

In this example we only changed some of the parameters for the listed components, but the [`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme), [`igx-button-group-theme`]({environment:sassApiUrl}/index.html#function-igx-button-group-theme), [`igx-chip-theme`]({environment:sassApiUrl}/index.html#function-igx-chip-theme), [`igx-drop-down-theme`]({environment:sassApiUrl}/index.html#function-igx-drop-down-theme), [`igx-input-group-theme`]({environment:sassApiUrl}/index.html#function-igx-input-group-theme) themes provide way more parameters to control their respective styling.

The last step is to **include** the component mixins, each with its respective theme. We will also add some styles for other elements inside the advanced filtering dialog.

```scss
@include igx-grid($custom-grid);
igx-advanced-filtering-dialog {
    @include igx-button($custom-button);
    @include igx-button-group($custom-button-group);
    @include igx-input-group($custom-input-group);
    @include igx-chip($custom-chip);
    @include igx-drop-down($custom-drop-down);
    .igx-filter-empty__title {
        color: #FFCD0F
    }
    .igx-advanced-filter__header {
        color: #FFCD0F
    }
    .igx-filter-tree__expression-actions igx-icon {
        color: #FFCD0F
    }
    .igx-filter-tree__expression-actions igx-icon:hover {
        color: #ffe482
    }
    .igx-filter-tree__expression-actions igx-icon:focus {
        color: #ffe482
    }
    .igx-filter-contextual-menu {
        border: 1px solid #FFCD0F
    }
    .igx-filter-contextual-menu__close-btn {
        position: absolute !important;
        background: #292826 !important;
        border-color: #FFCD0F !important;
    }
    .igx-input-group__input::placeholder {
        color: gray;
    }
}
```

>[!NOTE]
>We scope most of the components' mixins within `igx-advanced-filtering-dialog`, so that these custom themes will affect only components nested in the advanced filtering dialog. Otherwise, other buttons, chips, inputs and dropdowns in the application would be affected too.

>[!NOTE]
>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include igx-drop-down($custom-drop-down);
        @include igx-grid($custom-grid);
        igx-advanced-filtering-dialog {
            @include igx-button($custom-button);
            @include igx-button-group($custom-button-group);
            @include igx-input-group($custom-input-group);
            @include igx-chip($custom-chip);
            .igx-input-group__input::placeholder {
                color: gray;
            }
            .igx-filter-empty__title {
                color: #FFCD0F
            }
            .igx-advanced-filter__header {
                color: #FFCD0F
            }
            .igx-filter-tree__expression-actions igx-icon {
                color: #FFCD0F
            }
            .igx-filter-tree__expression-actions igx-icon:hover {
                color: #ffe482
            }
            .igx-filter-tree__expression-actions igx-icon:focus {
                color: #ffe482
            }
            .igx-filter-contextual-menu {
                border: 1px solid #FFCD0F
            }
            .igx-filter-contextual-menu__close-btn {
                position: absolute !important;
                background: #292826 !important;
                border-color: #FFCD0F !important;
            }
        }
    }
}
```

### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;
$dark-palette: igx-palette($primary: $yellow-color, $secondary: $black-color);
```
And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette. 

```scss
$custom-grid: igx-grid-theme(
    $filtering-row-background: igx-color($dark-palette, "secondary", 400)
);

$custom-button: igx-button-theme(
    $disabled-color: igx-color($dark-palette, "secondary", 100),
    ...
);

$custom-button-group: igx-button-group-theme(
    $item-background:  igx-color($dark-palette, "secondary", 400),
    ...
);

$custom-input-group: igx-input-group-theme(
    $box-background: igx-color($dark-palette, "secondary", 200),
    ...
);

$custom-chip: igx-chip-theme(
    $background: igx-color($dark-palette, "primary", 400),
    ...
);

$custom-drop-down: igx-drop-down-theme(
    $background-color: igx-color($dark-palette, "secondary", 400),
    ...
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](../themes/sass/palette.md) topic for detailed guidance on how to use them.

### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/sass/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`light-grid`]({environment:sassApiUrl}/index.html#variable-_light-grid), [`light-button`]({environment:sassApiUrl}/index.html#variable-_light-button), [`light-button-group`]({environment:sassApiUrl}/index.html#variable-_light-button-group), [`light-chip`]({environment:sassApiUrl}/index.html#variable-_light-chip), [`light-input-group`]({environment:sassApiUrl}/index.html#variable-_light-input-group) and [`light-drop-down`]({environment:sassApiUrl}/index.html#variable-_light-drop-down) schemas:

```scss
$grid-dark-palette: igx-palette($primary: #11bd7b, $secondary: #e32057, $info: $black-color);

$custom-grid-schema: extend($_light-grid,
    (
        filtering-row-background:(
            igx-color: ("info")
        )
    )
);

$custom-button-schema: extend($_light-button,
    (
        disabled-color:(
            igx-color: ("secondary", 100)
        ),
        ...
    )
);

$custom-button-group-schema: extend($_light-button-group,
    (
        item-background:(
            igx-color: ("secondary", 400)
        ),
        ...
    )
);

$custom-input-group-schema: extend($_light-input-group,
    (
        box-background:(
            igx-color: ("secondary", 200)
        ),
        ...
    )
);

$custom-chip-schema: extend($_light-chip,
    (
        background:(
            igx-color: ("primary", 400)
        ),
        ...
    )
);

$custom-drop-down-schema: extend($_light-drop-down,
    (
        background-color:(
            igx-color: ("secondary", 400)
        ),
        ...
    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
$custom-light-schema: extend($light-schema,(
    igx-grid: $custom-grid-schema,
    igx-button: $custom-button-schema,
    igx-button-group: $custom-button-group-schema,
    igx-input-group: $custom-input-group-schema,
    igx-chip: $custom-chip-schema,
    igx-drop-down: $custom-drop-down-schema
));

$custom-grid: igx-grid-theme(
    $palette: $grid-dark-palette,
    $schema: $custom-light-schema
);

$custom-button: igx-button-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-button-group: igx-button-group-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-input-group: igx-input-group-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-chip: igx-chip-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-drop-down: igx-drop-down-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

### Demo

@@if (igxName === 'IgxGrid') {

<code-view style="height:530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-advanced-filtering-style" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-advanced-filtering-style" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:630px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-advanced-filtering-style" >
</code-view>

}

>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
<div class="divider--half"></div>

## API References
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

## Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Filtering](filtering.md)
* [Excel Style Filtering](excel-style-filtering.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
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