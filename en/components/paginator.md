---
title: Angular Paginator Example – Ignite UI for Angular
<<<<<<< HEAD
_description: Configure Angular pagination and create custom pages in the Angular Material table by Ignite UI, get data for the requested pages with variety of angular events.
=======
_description: Learn how to configure Angular paginator and create custom pages with Ignite UI. Get data for the requested pages with variety of Angular events. Try it now.
>>>>>>> master
_keywords: paginator, igniteui for angular, infragistics
---

# Angular Paginator Overview
<<<<<<< HEAD
=======

>>>>>>> master
Pagination in Angular is one of the most useful features that the platform offers to developers when working with huge data sets. The purpose of Angular Paginator is to split and distribute a high volume of data collection into several pages, thus, delivering better UX whilst displaying paged information and items in an easier to compare and understand way.  

Usually, the Angular Paginator component shows page-number or total-records. 

<<<<<<< HEAD
Ignite UI for Angular Pagination allows us to divide a set of data into a number of similar pages. This method of pagination is particularly well-suited for large data-sets and "infinite" scrolling user interfaces, that is why the paginator is typically used with a list of items or data table. The Pagination in Angular enables the user to select a specific page from a range of pages and to determine how many records should see on each page.
=======
Ignite UI for Angular Pagination allows us to divide a set of data into a number of similar pages. This method of pagination is particularly well-suited for large data-sets and "infinite" scrolling user interfaces, that is why the paginator is typically used with a list of items or data table. The Pagination in Angular enables the user to select a specific page from a range of pages and to determine how many records should see on each page.  
>>>>>>> master

## Angular Paginator Example

The following Angular Pagination example shows a Paginator template demonstrating how users can navigate through 4 pages with different items and select the number of items to be displayed from a drop-down menu. 

<code-view style="height: 600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/pagination/main-pagination" alt="Angular Paginator Example">
</code-view>

<div class="divider--half"></div>

## How To Use Angular Paginator With Ignite UI

Each paginator instance requires:

- The number of items per page (default set to 15)
- The total number of items being paged

<<<<<<< HEAD
Also by default the current page is set to 0 when the Angular paginator component is initialized but this can be changed through **page** property.
=======
Also by default the current page is set to 0 when the he Angular Paginator component is initialized but this can be changed through **page** property.
>>>>>>> master

```html
<igx-paginator #paginator [totalRecords]="120" [perPage]="25">
</igx-paginator>
```

## Angular Pagination Template

Default pagination template is consisted of two main parts. The first is a drop-down, which allows you define the number of items that are displayed on each page and the second are the navigation buttons which allows you to easily navigate through out the pages.

Also, the paging area supports adding custom template by the user, if a `igx-paginator-content` reference is defined within the `igx-paginator`:

```html
<igx-paginator #paginator>
    <igx-paginator-content>
        ...
    </igx-paginator-content>
</igx-paginator>
```

In addition, [`IgxPageSizeSelectorComponent`]({environment:angularApiUrl}/classes/IgxPageSizeSelectorComponent.html) and [`IgxPageNavigationComponent`]({environment:angularApiUrl}/classes/IgxPageNavigationComponent.html) were introduced and now the paginator components allows a custom content to be defined, as it is shown in the example below. The first will add the dropdown element and label corresponding for the page size and the latter will handle the page navigation with all action buttons.

```html
<igx-paginator #paginator>
	<igx-paginator-content>
		<igx-page-size></igx-page-size>
		<igx-page-nav></igx-page-nav>
	</igx-paginator-content>
</igx-paginator>
```

Paging can also be done programmatically through the Paging API /which is described in more details in the section below/ using the [`paginate`]({environment:angularApiUrl}/classes/igxpaginatorcomponent.html#paginate), [`previousPage`]({environment:angularApiUrl}/classes/igxpaginatorcomponent.html#previouspage), [`nextPage`]({environment:angularApiUrl}/classes/igxpaginatorcomponent.html#nextpage) methods and the inputs [`page`]({environment:angularApiUrl}/classes/igxpaginatorcomponent.html#page), [`perPage`]({environment:angularApiUrl}/classes/igxpaginatorcomponent.html#perpage) and [`totalRecords`]({environment:angularApiUrl}/classes/igxpaginatorcomponent.html#totalrecords). Where *page* allows you to set the current page, *perPage* - the number of items that are displayed at one page and *totalRecords* - the number of the records that are in the grid. `TotalRecords` property is useful when you have paging with remote data and you want to alter the page count based on total remote records. Keep in mind that If you are using paging and all the data is passed to the grid, the value of `totalRecords` property will be set by default to the length of the provided data source. If `totalRecords` is set, it will take precedence over the default length based on the data source.

## Paging API
| Input           |      Description                           |
|-----------------|:------------------------------------------:|
| displayDensity  | Gets/Sets the display density of the paginator. |
| page            | Gets/Sets the current page. |
| perPage         | Gets/Sets the number of visible items per page. |
| selectOptions   | Gets/Sets custom options in the Select element of the paginator. Default select values [5, 10, 15, 25, 50, 100, 500] |
| totalRecords    | Gets/Sets the total records count. |
| totalPages      | Gets/Sets the total Pages count. |
| resourceStrings | Gets/Sets the resource strings. By default it uses EN resource strings. |
| overlaySettings | Gets/Sets a custom OverlaySettings. |

| Output         |      Description                           |
|----------------|:------------------------------------------:|
| perPageChange   | Emitted when `perPage` property value of the paginator is changed. |
| pageChange      | Emitted after the current page is changed. |
| paging          | Emitted before paging is performed. Cancelable.|
| pagingDone      | Emitted after paging is performed. |


## Angular Paginator Localization
With only a few lines of code you can easily localize all strings part of the Paging component. In order to localize a given Paging instance use the input property [resourceStrings]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#resourceStrings). You can use this

**Step 1** - Import `IPaginatorResourceStrings` interface and [changei18n]({environment:angularApiUrl}/#changei18n) function:

```ts
import { IPaginatorResourceStrings, changei18n } from "igniteui-angular";
```

**Step 2** - Define the Paging resource strings:

```ts
private paginatorResourceStrings: IPaginatorResourceStrings = {
    igx_paginator_label: 'Records per page:',
    igx_paginator_first_page_button_text: 'Custom first page text',
    igx_paginator_last_page_button_text: 'Custom last page text',
    igx_paginator_next_page_button_text: 'Custom next page text',
    igx_paginator_previous_page_button_text: 'Custom previous page text',
    igx_paginator_pager_text: 'out of'
};
```


**Step 3** - Pass the object to the [changei18n]({environment:angularApiUrl}/#changei18n) function as a parameter in order to change the global i18n for the component on app.module level. This will change the resource string of all Paging components part of your application:

```ts
public ngOnInit(): void {
    changei18n(this.paginatorResourceStrings as any);
}
```

In order to change the resource string to a specific Paging component, you can use a @ViewChild and set the desired [resourceStrings]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#resourceStrings) within a `requestAnimationFrame` method with a callback, that will be invoked before the page repaint. Setting a newly instantiated object to the [resourceStrings]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#resourceStrings) property will localize only that given component's instance.

```ts
@ViewChild('paginator', { read: IgxPaginatorComponent, static: false }) public paginator: IgxPaginatorComponent;
...

public ngOnInit(): void {
    requestAnimationFrame(() => {
        this.paginator.resourceStrings = this.paginatorResourceStrings;
    });
}
```


## API References
* [IgxPaginator API]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html)
* [IgxPaginator Styles]({environment:sassApiUrl}/index.html#function-paginator-theme)

## Additional Resources
<div class="divider--half"></div>

* [Grid](grid/grid.md)
* [Virtualization and Performance](grid/virtualization.md)
* [Filtering](grid/filtering.md)
* [Sorting](grid/sorting.md)
* [Summaries](grid/summaries.md)


<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
