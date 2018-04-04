---
title: Grid paging
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Paging, Pagination, Page
---

### ページング

**ページング**がルート **igx-grid** コンポーネントで初期化され、`paging` および `perPage` 入力によって構成できます。機能が有効かどうかを制御する paging は Boolean プロパティです。`perPage` プロパティはページごとで表示可能なレコードを制御します。グリッドでページングを有効にします。

```html
<igx-grid #grid1 [data]="data | async" [paging]="true" [perPage]="20" [autoGenerate]="false"></igx-grid>
```

ページング領域がテンプレート化をサポートしますが、テンプレート参照を初期化でグリッドに渡す必要があります。以下の例はページングが入力によって制御されるテンプレートを使用します。

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

ページングも Grid API によってコードで実行できます。

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
