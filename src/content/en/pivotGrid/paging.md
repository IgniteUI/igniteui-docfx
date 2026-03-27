---
title: Angular Grid Paging | Angular Pagination Table | Infragistics
_description: Configure Angular pagination and create custom pages in the Angular table by Ignite UI, get data for the requested pages with variety of angular events.
_keywords: angular pagination, igniteui for angular, infragistics
_license: commercial
_canonicalLink: grid/paging
---



# Angular Pivot Grid Pagination

Pagination is used to split a large set of data into a sequence of pages that have similar content. Angular table pagination improves user experience and data interaction. Pivot Grid pagination is configurable via a separate component projected in the grid tree by defining a `igx-paginator` tag, similar to adding of a column. As in any Angular Table, the pagination in the Pivot Grid supports template for custom pages.

## Angular Pagination Example

The following example represents Pivot Grid pagination and exposes the options usage of `items per page` and how paging can be enabled. The user can also quickly navigate through the Pivot Grid pages via "Go to last page" and "Go to first page" buttons.




Adding a [`igx-paginator`](../paginator.md) component will control whether the feature is present, you can enable/disable it by using a simple `*ngIf` with a toggle property. The [`perPage`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#perPage) input controls the visible records per page. Let’s update our Pivot Grid to enable paging:

```html
<igx-pivot-grid #pivotGrid [data]="data" [height]="'500px'" [width]="'100%'">
    <igx-paginator [perPage]="10">
    </igx-paginator>
</igx-pivot-grid>
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



## Usage









### Paginator Component Demo







<div class="divider--half"></div>

## Remote Paging

Remote paging can be achieved by declaring a service, responsible for data fetching and a component, which will be responsible for the Grid construction and data subscription. For more detailed information, check the [`Pivot Grid Remote Data Operations`](remote-data-operations.md#remote-paging) topic.



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
$dark-button: flat-icon-button-theme(
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
:host {
    @include tokens($dark-paginator);

    .igx-grid-paginator__pager {
        @include tokens($dark-button);
    }
}
```

>[!NOTE]
>We include the created **icon-button-theme** within `.igx-paginator__pager`, so that only the paginator buttons would be styled. Otherwise other icon buttons in the grid would be affected too.
>[!NOTE]
>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep` in order to style the components which are inside the paging container, like the button:

```scss
:host {
  @include tokens($dark-paginator);

  igx-paginator {
    ::ng-deep {
      @include tokens($dark-button);
    }
  }
}
```








## API References

- [IgxPivotGridComponent API]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html)
- [IgxPivotGridComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)
- [IgxGridPaginator Styles]({environment:sassApiUrl}/themes#function-paginator-theme)

## Additional Resources

<div class="divider--half"></div>

- [Pivot Grid overview](pivot-grid.md)
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
