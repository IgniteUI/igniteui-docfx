@@if (igxName === 'IgxGrid') {
---
title: Angular Multi-column Headers - Ignite UI for Angular
_description: Start grouping column headers by placing them under a common hierarchical header with the help of Ignite UI for Angular grid and combine them into multi headers.
_keywords: column headers, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Multi-column Headers - Ignite UI for Angular
_description: SStart grouping column headers by placing them under a common hierarchical header with the help of Ignite UI for Angular grid and combine them into multi headers.
_keywords: column headers, ignite ui for angular, infragistics
_canonicalLink: grid/multi-column-headers
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Multi-column Headers - Ignite UI for Angular
_description: Start grouping column headers by placing them under a common hierarchical header with the help of Ignite UI for Angular grid and combine them into multi headers.
_keywords: column headers, ignite ui for angular, infragistics
_canonicalLink: grid/multi-column-headers
---
}

# Angular @@igComponent Multi-column Headers Overview

[`@@igxName`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) supports `multi-column headers` which allows you to group columns by placing them under a common multi headers. Each multi-column headers group could be a representation of combinations between other groups or columns within the Material UI grid.

## Angular @@igComponent Multi-column Headers Overview Example

@@if (igxName === 'IgxGrid') {

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/multi-column-headers" alt="Angular @@igComponent Multi-column Headers Overview Example">
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-multi-column-headers" alt="Angular @@igComponent Multi-column Headers Overview Example">
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-column" alt="Angular @@igComponent Multi-column Headers Overview Example">
</code-view>

}

The declaration of `Multi-column header` could be achieved by wrapping a set of columns into [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) component with [`header`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#header) title passed.

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [allowFiltering]="true">
    <igx-column-group header="Contact Information">
        <igx-column sortable="true" resizable="true" field="Phone"></igx-column>
        <igx-column sortable="true" resizable="true" field="Fax"></igx-column>
        <igx-column sortable="true" resizable="true" field="PostalCode"></igx-column>
    </igx-column-group>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID">
    <igx-column-group header="Contact Information">
        <igx-column field="Phone" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
        <igx-column field="Fax" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
        <igx-column field="PostalCode" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
    </igx-column-group>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [data]="localdata" [moving]="true" [allowFiltering]="true">
    <igx-column field="CustomerID" sortable="true" resizable="true"></igx-column>
    <igx-column-group header="Address Information">
        <igx-column-group header="Location">
            <igx-column field="Address" sortable="true" resizable="true"></igx-column>
            <igx-column field="City" sortable="true" resizable="true"></igx-column>
            <igx-column field="PostalCode" sortable="true" resizable="true"></igx-column>
            <igx-column field="Country" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" sortable="true" resizable="true"></igx-column>
            <igx-column field="Fax" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-hierarchical-grid>
```
}

For achieving `n-th` level of nested headers, the declaration above should be followed. So by nesting [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) leads to the desired result.

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [allowFiltering]="true" [moving]="true">
    <igx-column-group header="General Information">
        <igx-column sortable="true" resizable="true" field="CompanyName"></igx-column>
        <igx-column-group header="Person Details">
            <igx-column [pinned]="false" sortable="true" resizable="true" field="ContactName"></igx-column>
            <igx-column sortable="true" resizable="true" field="ContactTitle"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [moving]="true">
    <igx-column-group [pinned]="false" header="General Information">
        <igx-column field="HireDate" dataType="date" [sortable]="true" [resizable]="true"></igx-column>
        <igx-column-group header="Person Details">
            <igx-column field="ID" dataType="number" [resizable]="true" [filterable]="false"></igx-column>
            <igx-column field="Title" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="Age" dataType="number" [sortable]="true" [resizable]="true"></igx-column>
        </igx-column-group>            
    </igx-column-group>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [data]="localdata" [allowFiltering]="true" [moving]="true">
    <igx-column field="CustomerID" sortable="true" resizable="true"></igx-column>
    <igx-column-group pinned]="false" header="General Information">
        <igx-column field="CompanyName" sortable="true" resizable="true"></igx-column>
        <igx-column-group header="Person Details">
            <igx-column field="ContactName" sortable="true" resizable="true"></igx-column>
            <igx-column field="ContactTitle" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-hierarchical-grid>
```
}

Every [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) supports [`moving`](column-moving.md), [`pinning`](column-pinning.md) and [`hiding`](column-hiding.md).
> [!NOTE]
> When there is a set of columns and column groups, pinning works only for top level column parents. More specifically pinning per nested `column groups` or `columns` is not allowed. <br />
> Please note that when using Pinning with Multi-Column Headers, the entire Group gets pinned. <br />
> Moving between `columns` and `column groups` is allowed only when they are at the same level in the hierarchy and both are in the same `group`. <br />
> When `columns/column-groups` are not wrapped by current `group` which means they are **top level** `columns`, moving is allowed between whole visible columns.

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [allowFiltering]="true" [moving]="true">
    <igx-column-group [pinned]="true" header="General Information">
        <igx-column sortable="true" resizable="true" field="CompanyName"></igx-column>
    </igx-column-group>
    <igx-column sortable="true" resizable="true" field="Phone"></igx-column>
    <igx-column sortable="true" resizable="true" field="Fax"></igx-column>
    <igx-column sortable="true" resizable="true" field="PostalCode"></igx-column>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [moving]="true">
    <igx-column-group header="Contact Information">
        <igx-column field="Phone" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
    </igx-column-group>
    <igx-column field="Name" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
    <igx-column field="Title" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [resizable]="true"></igx-column>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [data]="localdata" [allowFiltering]="true" [moving]="true">
    <igx-column field="CustomerID" sortable="true" resizable="true"></igx-column>
    <igx-column-group [pinned]="false" header="General Information">
        <igx-column field="CompanyName" sortable="true" resizable="true"></igx-column>
        <igx-column-group header="Person Details">
            <igx-column field="ContactName" sortable="true" resizable="true"></igx-column>
            <igx-column field="ContactTitle" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
    ...
</igx-hierarchical-grid>
```
}

## Multi-column Header Template

Each of the column groups of the grid can be templated separately. The column group expects `ng-template` tag decorated with the `igxHeader` directive.
The `ng-template` is provided with the column group object as a context.

```html
...
<igx-column-group header="General Information">
    <ng-template igxHeader let-columnGroup>
        {{ columnGroup.header | uppercase }}
    </ng-template>
    ...
</igx-column-group>
...
```

If you want to re-use a single template for several column groups, you could set the [`headerTemplate`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#headertemplate) property of the column group like this:

```html
<ng-template #columnGroupHeaderTemplate let-columnGroup>
    {{ columnGroup.header | uppercase }}
</ng-template>

...
<igx-column-group header="General Information" [headerTemplate]="columnGroupHeaderTemplate">
    ...
</igx-column-group>
<igx-column-group header="Address Information" [headerTemplate]="columnGroupHeaderTemplate">
    ...
</igx-column-group>
...
```

> [!NOTE]
> If a column header is retemplated and the grid moving is enabled, you have to set the **draggable** attribute of corresponding column to **false** on the templated elements, so that you can handle any of the events that are applied!

```html
<ng-template igxHeader>
    <igx-icon [attr.draggable]="false" (click)="onClick()"></igx-icon>
</ng-template>
```

The following sample demonstrates how to implement collapsible column groups using header templates.

@@if (igxName === 'IgxGrid') {

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/multi-column-header-template" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-multi-column-header-template" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-column-template" >
</code-view>

}

## Styling

To get started with styling the sorting behavior, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`grid-theme`]({environment:sassApiUrl}/index.html#function-grid-theme) and accepts the `$header-background`, `$header-text-color`, `$header-border-width`, `$header-border-style` and `$header-border-color` parameters.

```scss
$custom-theme: grid-theme(
    $header-background: #e0f3ff,
    $header-text-color: #e41c77,
    $header-border-width: 1px,
    $header-border-style: solid,
    $header-border-color: rgba(0, 0, 0, 0.08)
);
```
The last step is to **include** the component mixins: 

```scss
@include grid($custom-theme);
```

>[!NOTE]
 >If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

 ```scss
:host {
    ::ng-deep {
        @include grid($custom-theme);
    }
}
```

### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$light-blue-color: #e0f3ff;
$deep-pink-color: #e41c77;

$custom-palette: palette($primary: $light-blue-color, $deep-pink-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette.

```scss
$custom-theme: grid-theme(
    $header-background: color($custom-palette, "primary", 500),
    $header-text-color: color($custom-palette, "secondary", 500),
    $header-border-width: 1px,
    $header-border-style: solid,
    $header-border-color: color($custom-palette, "grays", 200)
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/sass/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`_light-grid`]({environment:sassApiUrl}/index.html#variable-_light-grid):  

```scss
// Extending the light grid schema
$custom-grid-schema: extend($_light-grid,
    (
        header-background: (igx-color:('primary', 500)),
        header-text-color: (igx-color:('secondary', 500)),
        header-border-width: 1px,
        header-border-style: solid,
        header-border-color: (igx-color:('grays', 200))
    )
);
```

In order to apply our custom schema we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
Extending the global light-schema
$my-custom-schema: extend($light-schema, 
    (
        igx-grid: $custom-grid-schema
    )
);

// Defining our custom theme with the custom schema
$custom-theme: grid-theme(
  $palette: $custom-palette,
  $schema: $my-custom-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

@@if (igxName === 'IgxGrid') {
### Demo


<code-view style="height:500px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/multi-column-headers-styling" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {
### Demo


<code-view style="height:500px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-multi-column-headers-styling" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {
### Demo


<code-view style="height:500px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-column-styling" >
</code-view>

}

>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.

## Known Issues and Limitations

- Using @@igComponent with multi-column headers on IE11 requires the explicit import of the array polyfill in polyfill.ts of the angular application.

    ```typescript
    import 'core-js/es7/array';
    ```

## API References
<div class="divider--half"></div>

* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-grid-theme)
* [IgxColumnGroupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
<div class="divider--half"></div>

## Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
@@if (igxName === 'IgxGrid') {* [Group by](groupby.md)}

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
