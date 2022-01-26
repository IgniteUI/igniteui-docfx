---
title: Angular Pivot Grid Custom Remote | Pivot Tables | Infragistics
_description: Create fast, responsive Angular pivot grids and tables with Ignite UI for Angular. Perform complex data analysis via pivot data.
_keywords: angular pivot grid, angular material pivot table, ignite ui for angular, pivot grid customization, pivot grid remote, pivot remote
---


# Remote Operations

In scenarios where the pivot data is already grouped and aggregated from a remote service and there's no need for further processing on the client, the pivot can be configured to use a custom empty strategy that will skip data processing on the client and allow to directly display the data as is:

```typescript
 public pivotConfigHierarchy: IPivotConfiguration = {
        columnStrategy: NoopPivotDimensionsStrategy.instance(),
        rowStrategy: NoopPivotDimensionsStrategy.instance(),
 }
```

Similarly for other remote data operations like sorting and filtering, data processing can be skipped by setting the related empty strategies - `filterStrategy`, `sortStrategy`:

```html
<igx-pivot-grid [filterStrategy]="noopFilterStrategy" [sortStrategy]="noopSortStrategy" ...>
</igx-pivot-grid>
```

```typescript
    public noopFilterStrategy = NoopFilteringStrategy.instance();
    public noopSortStrategy = NoopSortingStrategy.instance();
```
