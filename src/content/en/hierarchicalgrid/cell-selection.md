---
title: Angular Hierarchical Grid Cell Selection - Ignite UI for Angular
_description: Check how easy it is to use cell data selection using variety of events, rich API or mouse interactions. The Grid supports 3 modes for cell selection. Try it now!
_keywords: data select, igniteui for angular, infragistics
_license: commercial
_canonicalLink: grid/cell-selection
---



# Angular Cell Selection

The selection feature enables rich data select capabilities in the Material UI based Hierarchical Grid. Variety of events and single select actions are available thanks to the powerful API and easy to use methods. The Hierarchical Grid now supports three modes for cell selection, and you can easily switch between them by changing [`cellSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#cellSelection) property. You can disable cell selection, you can _select only one cell within the grid_ or to _select multiple cells in the grid_, which is provided as default option.
 In the Hierarchical Grid you can specify the cell selection mode on grid level. So for example in the parent grid multi-cell selection can be enabled, but in child grids cell selection mode can be single or disabled. But let's dive deeper in each of these options.

## Angular Cell Selection Example

The sample below demonstrates the three types of Hierarchical Grid's **cell selection** behavior. Use the buttons below to enable each of the available selection modes. A brief description will be provided on each button interaction through a snackbar message box.
<div class="divider--half"></div>






<code-view style="height:750px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-cell-selection/" >
</code-view>

<div class="divider--half"></div>


## Selection types

### Hierarchical Grid Multiple-cell Selection


This is the default cell selection mode in both parent and child grids. Please keep in mind that you can make cell selection one grid at a time, you can not make cross grid range selection or to have a selected cells in multiple grids. Each key combination related to range selection and mouse drag functionality can be used only in the same grid.

How to select cells:

- By `Mouse drag` - Rectangular data selection of cells would be performed.
- By `Ctrl key` press + `Mouse drag` - Multiple range selections would be performed. Any other existing cell selection will be persisted.
- Instant multi-cell selection by using Shift key. Select single cell and select another single cell by holding the Shift key. Cell range between the two cells will be selected. Keep in mind that if another second cell is selected while holding `Shift key` the cell selection range will be updated based on the first selected cell position (starting point).
- Keyboard multi-cell selection by using the `Arrow keys` while holding `Shift key`. Multi-cell selection range will be created based on the focused cell.
- Keyboard multi-cell selection by using the `Ctrl + Arrow keys` and `Ctrl + Home/End` while holding `Shift key`. Multi-cell selection range will be created based on the focused cell.
- Clicking with the `Left Mouse key` while holding `Ctrl key` will add single cell ranges into the selected cells collection.
- Continuous multiple cell selection is available, by clicking with the mouse and dragging.




### Hierarchical Grid Single Selection

When you set the `[cellSelection]="'single'"`, this allows you to have only one selected cell in the grid at a time. Also the mode `mouse drag` will not work and instead of selecting a cell, this will make default text selection.

>[!NOTE]
> When single cell is selected [`selected`]({environment:angularApiUrl}/classes/igxgridcomponent.html#selected) event is emitted, no matter if the `selection mode` is `single` or `multiple`. In multi-cell selection mode when you select a range of cells [`rangeSelected`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rangeSelected) event is emitted.

### Hierarchical Grid None selection

If you want to disable cell selection you can just set `[cellSelection]="'none'"` property. In this mode when you click over the cell or try to navigate with keyboard, the cell is **not selected**, only the `activation style` is applied and it is going to be lost when you scroll or click over other element on the page. The only way for you to define selection is by using the API methods that are described below.



## Styling

The theme engine exposes properties that allow us to style the **range of selected cells**.

### Import theme

To get started with styling the selection, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

### Define colors

Once done, we can make use of the [`contrast-color`]({environment:sassApiUrl}/palettes#function-contrast-color) and [`color`]({environment:sassApiUrl}/palettes#function-color) functions. With them, we define the colors we would like to use for our selection range:

```scss
$text-color: contrast-color($color: 'primary', $variant: 900);
$background-color: color($color: "primary", $variant: 900);
$border-yellow: #f2c43c;
```

>[!NOTE]
>If we don't want to use the `contrast-color` and `color` functions, we can always hardcode the color values.

### Create custom theme

Next we create a new theme that extends the [`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) passing our `text-color`, `background-color` and `border-yellow` variables as `$cell-selected-text-color`, `$cell-selected-background` and `$cell-active-border-color`, respectively:

```scss
$custom-grid-theme: grid-theme(
  $cell-selected-text-color: $text-color,
  $cell-active-border-color: $border-yellow,
  $cell-selected-background: $background-color
);
```

### Apply theme

Afterwards, all we need to do is include the mixin in our component's style (could also be in the app styles), so that our igx-hierarchical-grid uses the newly created theme instead of the default one:

```scss
:host {
  @include tokens($custom-grid-theme);
}
```

With the custom theme applied, the selected grid cells are highlighted with our selected colors:





### Demo

<code-view style="height:620px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-cell-style/" >
</code-view>






>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.

## API References

- [IgxHierarchicalGridComponent API]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
_[IgxGridRow API]({environment:angularApiUrl}/classes/igxgridrow.html)
- [IgxGridCell API]({environment:angularApiUrl}/classes/igxgridcell.html)
- [IgxHierarchicalGridComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)

## Additional Resources

<div class="divider--half"></div>

- [Hierarchical Grid overview](hierarchical-grid.md)
- [Selection](selection.md)
- [Row selection](row-selection.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Virtualization and Performance](virtualization.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
