---
title: Grid paging
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Paging, Pagination, Page
---

## Grid Paging

**Paging** is initialized on the root **igx-grid** component, and is configurable via the `paging` and `perPage` inputs. Paging is a Boolean property that controls whether the feature is enabled and the `perPage` property controls the visible records per page. Let’s update our grid to enable paging:

```html
<igx-grid #grid1 [data]="data | async" [paging]="true" [perPage]="20" [autoGenerate]="false"></igx-grid>
```

The paging area supports templating by the user, if a template reference is passed to the grid during initialization. The example below is a template where the pagination is controlled through an input.

```html
<ng-template #myTemplate let-grid>
    Current page: {{ grid.page }}
    <input type="number" [ngModel]="grid.page" (onModelChange)="grid.paginate($event)" />
    Total pages: {{ grid.totalPages }}
</ng-template>

<igx-grid paging="true" [paginationTemplate]="myTemplate">
    ...
</igx-grid>
```

Paging can also be done programmatically through the Grid API:

```typescript
// Go to page 6
this.grid.paginate(5);

// Go to previous/next page
this.grid.previousPage();
this.grid.nextPage();

// Check for first/last page
this.grid.isFirstPage;
this.grid.isLastPage;

// Get the number of pages
this.grid.totalPages;

// Change the number of records per page
this.grid.perPage = 25;

// Enables/disables paging
this.grid.paging = false;
```
