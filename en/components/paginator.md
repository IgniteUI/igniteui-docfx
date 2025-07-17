---
title: Angular Paginator Example – Ignite UI for Angular
_description: Configure Angular pagination and create custom pages in the Angular table, or other iterable UI collection, by Ignite UI, get data for the requested pages with variety of angular events.
_keywords: angular paginator, angular paginator component, angular ui components, igniteui for angular, infragistics
---

# Angular Paginator Component Overview
Pagination in Angular is an optimization technique when working with huge data sets. The purpose of Angular Paginator is to provide UI and API to split and distribute a high volumes of data into equally sized pages, which can be navigated by the end-user.

The Angular Paginator component displays to the end-user the page they are viewing, the size of the page, the total number of pages and UI elements for quick navigation between pages. 

Ignite UI for Angular Paginator allows you to divide a set of data into a number of similar pages. This method of pagination is particularly well-suited for large data-sets which are difficult to display and view all at once, that is why the paginator is typically used together with a list of items or data table. The Paginator in Angular enables the user to select a specific page from a range of pages and to determine how many records they should see on each page.

## Angular Paginator Example

The following Angular Pagination example shows a Paginator template demonstrating how users can navigate through 4 pages with different items and select the number of items to be displayed from a drop-down menu. 

<code-view style="height: 600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/pagination/main-pagination/" alt="Angular Paginator Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Paginator

To get started with the Ignite UI for Angular Paginator component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxPaginatorModule` in the **app.module.ts** file.

```typescript
// app.module.ts

import { IgxPaginatorModule } from 'igniteui-angular';
// import { IgxPaginatorModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxPaginatorModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxPaginatorComponent` as a standalone dependency, or use the [`IGX_PAGINATOR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/paginator/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { NgFor } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';
import { IGX_PAGINATOR_DIRECTIVES, IGX_LIST_DIRECTIVES } from 'igniteui-angular';
// import { IGX_PAGINATOR_DIRECTIVES, IGX_LIST_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-list>
        <igx-list-item *ngFor="let item of pagedData">{{item.text}}</igx-list-item>
    </igx-list>
    <igx-paginator [totalRecords]="products.length" [perPage]="perPage"></igx-paginator>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_PAGINATOR_DIRECTIVES, IGX_LIST_DIRECTIVES, HammerModule, NgFor]
    /* or imports: [IgxPaginatorComponent, IgxListComponent, IgxListItemComponent, HammerModule, NgFor] */
})
export class HomeComponent {
    public products: Product [];
    public perPage = 10;
    public pagedData: Product [];
}
```

Now that you have the Ignite UI for Angular Paginator module or directives imported, you can start using the `igx-paginator` component.

## Using the Angular Paginator

Each paginator instance requires:

- The number of items per page (default set to 15)
- The total number of items being paged

Also by default the current page is set to 0 when the Angular paginator component is initialized but this can be changed through **page** property.

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

Paging can also be done programmatically through the Paging API /which is described in more details in the section below/ using the [`paginate`]({environment:angularApiUrl}/classes/igxpaginatorcomponent.html#paginate), [`previousPage`]({environment:angularApiUrl}/classes/igxpaginatorcomponent.html#previousPage), [`nextPage`]({environment:angularApiUrl}/classes/igxpaginatorcomponent.html#nextPage) methods and the inputs [`page`]({environment:angularApiUrl}/classes/igxpaginatorcomponent.html#page), [`perPage`]({environment:angularApiUrl}/classes/igxpaginatorcomponent.html#perPage) and [`totalRecords`]({environment:angularApiUrl}/classes/igxpaginatorcomponent.html#totalRecords). Where *page* allows you to set the current page, *perPage* - the number of items that are displayed at one page and *totalRecords* - the number of the records that are in the grid. `TotalRecords` property is useful when you have paging with remote data and you want to alter the page count based on total remote records. Keep in mind that If you are using paging and all the data is passed to the grid, the value of `totalRecords` property will be set by default to the length of the provided data source. If `totalRecords` is set, it will take precedence over the default length based on the data source.

## Paging API
| Input           |      Description                           |
|-----------------|:------------------------------------------:|
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
