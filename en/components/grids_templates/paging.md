@@if(igxName === 'IgxGrid') {
---

title: Angular Grid Paging | Angular Pagination Table | Infragistics
_description: Configure Angular pagination and create custom pages in the Angular table by Ignite UI, get data for the requested pages with variety of angular events.
_keywords: angular pagination, igniteui for angular, infragistics
---

}
@@if(igxName !== 'IgxGrid') {
---

title: Angular Grid Paging | Angular Pagination Table | Infragistics
_description: Configure Angular pagination and create custom pages in the Angular table by Ignite UI, get data for the requested pages with variety of angular events.
_keywords: angular pagination, igniteui for angular, infragistics
_canonicalLink: grid/paging
---

}

# Angular @@igComponent Pagination

Pagination is used to split a large set of data into a sequence of pages that have similar content. Angular table pagination improves user experience and data interaction. @@igComponent pagination is configurable via a separate component projected in the grid tree by defining a `igx-paginator` tag, similar to adding of a column. As in any Angular Table, the pagination in the @@igComponent supports template for custom pages.

## Angular Pagination Example

The following example represents @@igComponent pagination and exposes the options usage of `items per page` and how paging can be enabled. The user can also quickly navigate through the @@igComponent pages via "Go to last page" and "Go to first page" buttons.
@@if (igxName === 'IgxGrid') {

<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-paging-sample/" alt="Angular Pagination Example">
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-paging/" alt="Angular Pagination Example">
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:580px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-paging/" alt="Angular Pagination Example">
</code-view>

<div class="divider--half"></div>
}

Adding a [`igx-paginator`](../paginator.md) component will control whether the feature is present, you can enable/disable it by using a simple `*ngIf` with a toggle property. The [`perPage`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#perPage) input controls the visible records per page. Let’s update our @@igComponent to enable paging:

```html
<@@igSelector #@@igObjectRef [data]="data" [height]="'500px'" [width]="'100%'">
    <igx-paginator [perPage]="10">
    </igx-paginator>
</@@igSelector>
```


Example:

```html
<igx-paginator #paginator [totalRecords]="20">
    <igx-paginator-content>
        <div id="numberPager" style="justify-content: center;">
            <button [disabled]="paginator.isFirstPage" (click)="paginator.previousPage()" igxButton="flat">
                PREV
            </button>
            <span>
               Page {{paginator.page}} of {{paginator.totalPages}}
            </span>
            <button [disabled]="paginator.isLastPage" (click)="paginator.nextPage()" igxButton="flat">
                NEXT
            </button>
        </div>
    </igx-paginator-content>
</igx-paginator>
```

@@if (igxName === 'IgxGrid') {

## Paging with Group By

Group rows participate in the paging process along with data rows. They count towards the page size for each page. Collapsed rows are not included in the paging process.
Integration between Paging and Group By is described in the [Group By](groupby.md#angular-grid-group-by-with-paging) topic.
}

## Usage

@@if (igxName === 'IgxGrid') {
The `igx-paginator` component is used along with the `igx-grid` component in the example below, but you can use it with any other component in case paging functionality is needed.

```html
<igx-grid #grid [data]="data">
    <igx-paginator #paginator [(page)]="grid.page" [totalRecords]="grid.totalRecords" [(perPage)]="10"
            [selectOptions]="selectOptions">
    </igx-paginator>
</igx-grid>
```

}

@@if (igxName === 'IgxTreeGrid') {
The `igx-paginator` component is used along with the `igx-tree-grid` component in the example below, but you can use it with any other component in case paging functionality is needed.

```html
<igx-tree-grid #treeGrid [data]="data">
    <igx-paginator #paginator [(page)]="treeGrid.page" [totalRecords]="treeGrid.length" [(perPage)]="10"
            [selectOptions]="selectOptions">
    </igx-paginator>
</igx-tree-grid>
```

}

@@if (igxName === 'IgxHierarchicalGrid') {
The `igx-paginator` component is used along with the `igx-hierarchical-grid` component in the example below, but you can use it with any other component in case paging functionality is needed.

```html
<igx-hierarchical-grid>
    <igx-column *ngFor="let c of hColumns" [field]="c.field">
    </igx-column>
    <igx-row-island [key]="'childData'" [autoGenerate]="true">
        <igx-row-island [key]="'childData'" [autoGenerate]="true">
            <igx-paginator *igxPaginator></igx-paginator>
        </igx-row-island>
        <igx-paginator *igxPaginator></igx-paginator>
    </igx-row-island>
    <igx-row-island [key]="'childData2'" [autoGenerate]="true">
        <igx-paginator *igxPaginator></igx-paginator>
    </igx-row-island>

    <igx-paginator></igx-paginator>
</igx-hierarchical-grid>
```

}

@@if (igxName === 'IgxHierarchicalGrid') {

### Paginator Configuration within child grids

Due to certain limitations in how the child grids of an IgxHierarchicalGrid are implemented and how DI scope works, when defining a paginator component inside the igx-row-island tags, always make sure to use the IgxPaginator directive on the paginator itself. This will make sure that the child grid have the correct paginator instance as a reference:

```html
<igx-hierarchical-grid>
    ...
    <igx-row-island>
        ...
        <igx-grid-toolbar *igxPaginator>
           ...
        </igx-grid-toolbar>
    </igx-row-island>
    ...
</igx-hierarchical-grid>
```

}

### Paginator Component Demo

@@if (igxName === 'IgxGrid') {
<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-pager-sample/" >
</code-view>
}

@@if (igxName === 'IgxTreeGrid') {
<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-reusable-paginator/" >
</code-view>
}

@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-reusable-paginator/" >
</code-view>
}

<div class="divider--half"></div>

## Remote Paging

Remote paging can be achieved by declaring a service, responsible for data fetching and a component, which will be responsible for the Grid construction and data subscription. For more detailed information, check the [`@@igComponent Remote Data Operations`](remote-data-operations.md#remote-paging) topic.

@@if (igxName === 'IgxGrid') {

## Remote Paging with Custom Template

In some cases you may want to define your own paging behavior and this is when we can take advantage of the `igx-paginator-content` and add our custom logic along with it. [This section](remote-data-operations.md#remote-paging-with-custom-igx-paginator-content) explains how we are going to extend the Remote Paging example in order to demonstrate this.
}

## Styling

To get started with styling the paginator, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`paginator-theme`]({environment:sassApiUrl}/themes#function-paginator-theme) and accepts the `$text-color`, `$background-color` and the `$border-color` parameters.

```scss
$dark-paginator: paginator-theme(
  $text-color: #d0ab23;,
  $background-color: #231c2c,
  $border-color: #d0ab23;
);
```

As seen, the `paginator-theme` only controls colors for the paging container, but does not affect the buttons in the pager UI. To style those buttons, let's create a new icon button theme:

```scss
$dark-button: icon-button-theme(
  $foreground: #d0ab23,
  $hover-foreground: #231c2c,
  $hover-background: #d0ab23,
  $focus-foreground: #231c2c,
  $focus-background: #d0ab23,
  $disabled-foreground: #9b7829
);
```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`]({environment:sassApiUrl}/palettes#function-palette) and [`color`]({environment:sassApiUrl}/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

The last step is to **include** the component mixins, each with its respective theme:

```scss
@include css-vars($dark-paginator);

.igx-grid-paginator__pager {
  @include css-vars($dark-button);
}
```

>[!NOTE]
>We include the created **icon-button-theme** within `.igx-paginator__pager`, so that only the paginator buttons would be styled. Otherwise other icon buttons in the grid would be affected too.
>[!NOTE]
>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep` in order to style the components which are inside the paging container, like the button:

```scss
@include css-vars($dark-paginator);

:host {
  igx-paginator {
    ::ng-deep {
      @include css-vars($dark-button);
    }
  }
}
```

@@if (igxName === 'IgxGrid'){

### Pagination Style Example


<code-view style="height:560px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/custom-grid-paging-style/" >
</code-view>

<div class="divider--half"></div>
}

@@if (igxName === 'IgxHierarchicalGrid'){

### Demo

<code-view style="height:560px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-paging-style/" >
</code-view>

}


@@if (igxName === 'IgxTreeGrid'){

### Demo

<code-view style="height:560px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-paging-style/" >
</code-view>

}

## API References

- [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
- [@@igxNameComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)
- [IgxGridPaginator Styles]({environment:sassApiUrl}/themes#function-paginator-theme)

## Additional Resources

<div class="divider--half"></div>

- [@@igComponent overview](@@igMainTopic.md)
- [Paginator](../paginator.md)
- [Virtualization and Performance](virtualization.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
