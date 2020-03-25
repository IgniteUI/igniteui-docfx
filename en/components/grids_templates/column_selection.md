@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Column Selection | Ignite UI for Angular | infragistics
_description: Learn how to configure column selection with the Angular Material table. The column selection makes the interaction with the Grid more appealing than ever.
_keywords: column selection, igniteui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Column Selection | Ignite UI for Angular | infragistics
_description: Learn how to configure column selection with the Angular Material table. The column selection makes the interaction with the Tree Grid more appealing than ever.
_keywords: column selection, igniteui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Column Selection | Ignite UI for Angular | infragistics
_description: Learn how to configure column selection with the Angular Material table. The column selection makes the interaction with the Hierarchical Grid more appealing than ever.
_keywords: column selection, igniteui for angular, infragistics
---
}

### @@igComponent Column Selection
The **column selection feature** provides an easy way to select an entire column with a one click action. It **emphasizes** the importance of a particular column by focusing on the header cell(s) and everything below. The feature comes with a rich [`API`]({environment:angularApiUrl}) that allows manipulation of the **state**, **data extraction** of the **selected** fractions easing **data analysis** operations and visualizations.

<div class="sample-container" style="height:250px; background-color: lightgray">
    <p>Basic example demonstrating the feature with enabled/disabled columns selection</p>
</div>
<br/>

### Basic usage

#### Interactions
All of the presented columns are [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable) by default. With that being said, in order to select a column, we just need to click over the targeted one to mark it as [`selected`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selected).

> [!NOTE]
> [`Multi Column Headers`](multi_column_headers.md) don't reflect on the [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable) input. The [`IgxColumnGroupComponent`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) is [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable), if at least one of it's children has that behaviour enabled. In addition, the component is marked as [`selected`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#selected) if all it's descendents are [`selected`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selected)

<div class="sample-container" style="height:250px; background-color: lightgray">
    <p>Example showcasing multi column headers + column selection behaviour</p>
</div>
<br/>

#### Keyboard combinations
Basically there are three variations that could be experienced through the **Column Selection**:
 - Single selection - <kbd>click</kbd> over the column cell if it is **selectable**.
 - Multi column selection - holding <kbd>ctrl</kbd> + <kbd>click</kbd> over every **selectable** column cell.
 - Range column selection - holding <kbd>shift</kbd> + <kbd>click</kbd> selects all **selectable** columns in between.

#### API manipulations
The **API** provides some additional capabilities when it comes to the **non-visible** columns such that, every **hidden** column could be marked as [`selected`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selected) by setting the corresponding **setter**.

> [!NOTE]
> The above statement also applies to the [`IgxColumnGroupComponent`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html), except that when the [`selected`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#selected) property is changed it respectively changes the state of it's descendants.

<div class="sample-container" style="height:250px; background-color: lightgray">
    <p>Example showcasing API manipulation of multi column headers + column selection</p>
</div>
<br/>

More information regarding the API manipulations could be found in the [`API References`](#api-references) section.

### Styling
Before going deeper in the style manpulations, the core module and all component mixins need to be imported.
```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

>[!NOTE]
>Please note that [`row selection`](row_selection.md) and [`column selection`](column_selection.md) can't be manipulated independently. They both depends on the same parameters the [`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) **function** accepts.

With that being said, let's move on and change the **selection** and **hover** appearance.
Firstly let's define our custom **theme** that latelly we will pass to the [`igx-grid`]({environment:sassApiUrl}/index.html#mixin-igx-grid) **mixin**.

```scss
$custom-column-selection-theme: igx-grid-theme(
    $row-selected-background: steelblue,
    $row-selected-text-color: gold,
    $row-selected-hover-background: steelblue
);
```
[`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) accepts several parameters but basically those are the three responsible for the respective styling:
- **$row-selected-background** - sets the background of the selected fraction.
- **$row-selected-text-color** - sets the text color of the selected fraction
- **$row-selected-hover-background** - sets the color of the hovered cell or bunch of cells.

Lastly we should notify the component for the new theme that has been created.

```scss
@include igx-grid($custom-column-selection-theme);
```

>[!NOTE]
 >If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-column-selection-theme);
    }
}
```
#### Defining a color palette
Instead of hardcoding the colors, we can build our own palette providing more flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:
```scss
$yellow-color: gold;
$blue-color: steelblue;

$custom-palette: igx-palette($primary: $blue-color, $secondary: $yellow-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve the colors from the palette.

```scss

$custom-column-selection-theme: igx-grid-theme(
    $palette: $custom-palette,
    $row-selected-background: igx-color($custom-palette, "primary", 400),
    $row-selected-text-color: igx-color($custom-palette, "secondary", 300),
    $row-selected-hover-background: igx-color($custom-palette, "primary", 600)
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](../themes/palette.md) topic for detailed guidance on how to use them.

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/schemas.md). A **schema** is a recipe of a theme.

```scss
$custom-column-selection-schema: extend($_light_grid,
    (
        row-selected-background:(
            igx-color: ('primary', 600)
        ),
        row-selected-text-color:(
            igx-color: ('secondary', 300)
        ),
        row-selected-hover-background:(
            igx-color: ('primary', 300)
        )
    )
);
```
In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing the components with a custom schema, and then add it to the respective component theme:

```scss
// Extending the global light-schema
$custom-light-schema: extend($light-schema,(
    igx-grid: $custom-column-selection-schema
));

// Passing the new igx-grid custom schema.
$custom-column-selection-theme: igx-grid-theme(
    $palette: $custom-palette,
    $schema: $custom-light-schema
);
```
#### Demo

<div class="sample-container" style="height:250px; background-color: lightgray">
    <p>Example custom theme.</p>
</div>
<br/>

### <a name="api-references"></a> API References
#### API REFS
### Additional Resources