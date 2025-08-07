@@if(igxName === 'IgxGrid'){
---
title: Advanced Filtering in Angular Data Grid - Ignite UI for Angular
_description: Learn how to configure advanced filter of data with the Angular table. The grid advanced filtering is more convenient and engaging than ever.
_keywords: advanced filter, igniteui for angular, infragistics
---
}
@@if(igxName !== 'IgxGrid'){
---
title: Advanced Filtering in Angular Data Grid - Ignite UI for Angular
_description: Learn how to configure advanced filter of data with the Angular table. The grid advanced filtering is more convenient and engaging than ever.
_keywords: advanced filter, igniteui for angular, infragistics
_canonicalLink: grid/advanced-filtering
---
}


# Angular @@igComponent Advanced Filtering

The Advanced filtering provides a dialog which allows the creation of groups with filtering conditions across all columns for any [Angular table](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid) like the @@igComponent. 

## Angular @@igComponent Advanced Filtering Example

@@if (igxName === 'IgxGrid') {

<code-view style="height:530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-advanced-filtering/" alt="Angular @@igComponent Advanced Filtering Example">
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-advanced-filtering/" alt="Angular @@igComponent Advanced Filtering Example">
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:630px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-advanced-filtering/" alt="Angular @@igComponent Advanced Filtering Example">
</code-view>

}

<div class="divider--half"></div>

## Interaction

In order to open the advanced filtering dialog, the **Advanced Filtering** button in the grid toolbar should be clicked. The dialog is using the [`IgxQueryBuilder`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html) component to generate,display and edit the filtering logic. You can have a look at the [`Query Builder topic`](../query-builder.md#getting-started-with-ignite-ui-for-angular-query-builder) for details on the interaction process.

In order to filter the data once you are ready with creating the filtering conditions and groups, you should click the **Apply** button. If you have modified the advanced filter, but you don't want to preserve the changes, you should click the **Cancel** button. You could also clear the advanced filter by clicking the **Clear Filter** button.

## Usage

To enable the advanced filtering, the [`allowAdvancedFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowAdvancedFiltering) input property should be set to `true`.

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

The advanced filtering generates a [`FilteringExpressionsTree`]({environment:angularApiUrl}/classes/filteringexpressionstree.html) which is stored in the [`advancedFilteringExpressionsTree`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#advancedFilteringExpressionsTree) input property. You could use this property to set an initial state of the advanced filtering.

@@if (igxName !== 'IgxHierarchicalGrid') {
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
}

@@if (igxName === 'IgxHierarchicalGrid') {
```TypeScript
ngAfterViewInit(): void {
    const tree = new FilteringExpressionsTree(FilteringLogic.Or);
    tree.filteringOperands.push({
        fieldName: 'Artist',
        condition: IgxStringFilteringOperand.instance().condition('startsWith'),
        conditionName: IgxStringFilteringOperand.instance().condition('startsWith').name,
        searchVal: 'A'
    });
    const subTree = new FilteringExpressionsTree(FilteringLogic.And);
    subTree.filteringOperands.push({
        fieldName: 'GrammyAwards',
        condition: IgxNumberFilteringOperand.instance().condition('greaterThanOrEqualTo'),
        conditionName: IgxNumberFilteringOperand.instance().condition('greaterThanOrEqualTo').name,
        searchVal: 1
    });
    subTree.filteringOperands.push({
        fieldName: 'Debut',
        condition: IgxNumberFilteringOperand.instance().condition('lessThan'),
        conditionName: IgxNumberFilteringOperand.instance().condition('lessThan').name,
        searchVal: 2000
    });
    tree.filteringOperands.push(subTree);
    this.@@igObjectRef.advancedFilteringExpressionsTree = tree;
}
```

The advanced filtering in the `IgxHierarchicalGrid` can be used to filter root grid data based on child grids data using the *IN / NOT-IN* operators. This way, subqueries can be created to define more complex filtering logic. More information about this functionality can be found in [`Query Builder's Using Sub-Queries section`](../query-builder-model.md#using-sub-queries). Here's a sample [`FilteringExpressionsTree`]({environment:angularApiUrl}/classes/filteringexpressionstree.html) with a subquery:

```TypeScript
ngAfterViewInit(): void {
    const albumsTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Albums', ['Artist']);
    albumsTree.filteringOperands.push({
        fieldName: 'LaunchDate',
        condition: IgxDateFilteringOperand.instance().condition('after'),
        conditionName: IgxDateFilteringOperand.instance().condition('after').name,
        searchVal: new Date(2017, 1, 1)
    });
    const tree = new FilteringExpressionsTree(FilteringLogic.And);
    tree.filteringOperands.push({
        fieldName: 'Artist',
        condition: IgxStringFilteringOperand.instance().condition('inQuery'),
        conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
        searchTree: albumsTree
    });
    this.@@igObjectRef.advancedFilteringExpressionsTree = tree;
}
```

If remote data is used, the [`schema`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#schema) property of the `IgxHierarchicalGrid` should be set. Please refer to [`Load on Demand`](../hierarchicalgrid/load-on-demand.md) topic for detailed guidance.
}

In case you don't want to show the @@igComponent toolbar, you could use the [`openAdvancedFilteringDialog`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#openAdvancedFilteringDialog) and [`closeAdvancedFilteringDialog`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#closeAdvancedFilteringDialog) methods to open and close the advanced filtering dialog programmatically.

>[!NOTE]
>You can enable both the `quickFilter`/`excelStyleFilter` and the advanced filtering user interfaces in the @@igComponent. Both filtering user interfaces will work independently of one another. The final filtered result in the @@igComponent is the intersection between the results of the two filters.


## External Advanced filtering

As you see the demo above the Advanced filtering dialog is hosted in an overlay on top of the @@igComponent. When the setup in the dialog is ready, the apply or close actions would hide that dialog. There is a way to make that dialog stay always visible - be used as a standalone component. In the demo below, the advanced filtering dialog is declared separately of the @@igComponent.

### Demo

@@if (igxName === 'IgxGrid') {

<code-view style="height:750px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-external-advanced-filtering/" >
</code-view>

}

@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:750px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-external-advanced-filtering/" >
</code-view>

}

@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:750px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-external-advanced-filtering/" >
</code-view>

}

### Usage

It's super easy to configure the advanced filtering to work outside of the @@igComponent. All you need to do is to create the dialog and set its [`grid`]({environment:angularApiUrl}/classes/igxgridtoolbaradvancedfilteringcomponent.html#grid) property:

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
<igx-advanced-filtering-dialog [grid]="hierarchicalGrid">
</igx-advanced-filtering-dialog>
```
}

You can also see how our [drag and drop App Builder™](https://www.infragistics.com/products/appbuilder) can streamline the entire design-to-Angular-code story. 
<div class="divider--half"></div>


## Styling

To get started with styling the Advanced Filtering dialog, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

The advanced filtering dialog takes its background color from the grid's theme, using the `filtering-row-background` parameter. In order to change the background we need to create a custom theme:

```scss
$custom-grid: grid-theme(
  $filtering-row-background: #ffcd0f
);
```

Since we have other components inside the advanced filtering dialog, such as buttons, chips, dropdowns and inputs, we need to create a separate theme for each one:

```scss
$custom-button: button-theme(
  $disabled-color: gray,
  ...
);

$custom-button-group: button-group-theme(
  $item-background:  #292826,
  ...
);

$custom-input-group: input-group-theme(
  $box-background: #4a4a4a,
  ...
);

$custom-chip: chip-theme(
  $background: #ffcd0f,
  ...
);

$custom-drop-down: drop-down-theme(
  $background-color: #292826,
  ...
);
```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`]({environment:sassApiUrl}/palettes#function-palette) and [`color`]({environment:sassApiUrl}/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

In this example we only changed some of the parameters for the listed components, but the [`button-theme`]({environment:sassApiUrl}/themes#function-button-theme), [`button-group-theme`]({environment:sassApiUrl}/themes#function-button-group-theme), [`chip-theme`]({environment:sassApiUrl}/themes#function-chip-theme), [`drop-down-theme`]({environment:sassApiUrl}/themes#function-drop-down-theme), [`input-group-theme`]({environment:sassApiUrl}/themes#function-input-group-theme) themes provide way more parameters to control their respective styling.

The last step is to **include** the component mixins, each with its respective theme. We will also add some styles for other elements inside the advanced filtering dialog.

```scss
    @include css-vars($custom-grid);

    igx-advanced-filtering-dialog {
        @include css-vars($custom-button);
        @include css-vars($custom-button-group);
        @include css-vars($custom-input-group);
        @include css-vars($custom-chip);
        @include css-vars($custom-drop-down);

        .igx-filter-empty__title {
            color: #ffcd0f
        }

        .igx-advanced-filter__header {
            color: #ffcd0f
        }

        .igx-filter-tree__expression-actions igx-icon {
            color: #ffcd0f
        }

        .igx-filter-tree__expression-actions igx-icon:hover {
            color: #ffe482
        }

        .igx-filter-tree__expression-actions igx-icon:focus {
            color: #ffe482
        }

        .igx-filter-contextual-menu {
            border: 1px solid #ffcd0f
        }

        .igx-filter-contextual-menu__close-btn {
            position: absolute !important;
            background: #292826 !important;
            border-color: #ffcd0f !important;
        }

        .igx-input-group__input::placeholder {
            color: gray;
        }
    }
}
```

>[!NOTE]
>We scope most of the components' mixins within `advanced-filtering-dialog`, so that these custom themes will affect only components nested in the advanced filtering dialog. Otherwise, other buttons, chips, inputs and dropdowns in the application would be affected too.

>[!NOTE]
>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
  ::ng-deep {
    @include css-vars($custom-drop-down);
    @include css-vars($custom-grid);
    igx-advanced-filtering-dialog {
      @include css-vars($custom-button);
      @include css-vars($custom-button-group);
      @include css-vars($custom-input-group);
      @include css-vars($custom-chip);

      .igx-input-group__input::placeholder {
        color: gray;
      }

      .igx-filter-empty__title {
        color: #ffcd0f
      }

      .igx-advanced-filter__header {
        color: #ffcd0f
      }

      .igx-filter-tree__expression-actions igx-icon {
        color: #ffcd0f
      }

      .igx-filter-tree__expression-actions igx-icon:hover {
        color: #ffe482
      }

      .igx-filter-tree__expression-actions igx-icon:focus {
        color: #ffe482
      }

      .igx-filter-contextual-menu {
        border: 1px solid #ffcd0f
      }
      
      .igx-filter-contextual-menu__close-btn {
        position: absolute !important;
        background: #292826 !important;
        border-color: #ffcd0f !important;
      }
    }
  }
}
```

### Demo

@@if (igxName === 'IgxGrid') {

<code-view style="height:530px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-advanced-filtering-style/" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:510px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-advanced-filtering-style/" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:630px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-advanced-filtering-style/" >
</code-view>

}

>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
<div class="divider--half"></div>

## API References
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)

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
