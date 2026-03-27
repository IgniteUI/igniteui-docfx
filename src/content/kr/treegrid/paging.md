---
title: 트리 그리드 페이징
_description: The Ignite UI for Angular Tree Grid control features the fastest, touch-responsive data-rich tree grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tree Grid, Angular Tree Table, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular High Performance Tree Grid, Angular High Performance Tree Table, Paging, Pagination, Tree Grid Paging, Tree Table Paging
_language: kr
---



### Tree Grid 페이징

Ignite UI for Angular Tree Grid에서 **Paging**은 루트 `igx-tree-grid` 컴포넌트에서 초기화되며 [`paging`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#paging) 및 [`perPage`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#perPage) 입력으로 설정할 수 있습니다.

#### 데모




<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-paging/" >
</code-view>





페이징은 해당 기능이 사용되는지 여부를 제어하는 불 속성이며 [`perPage`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#perPage) 속성은 페이지당 표시할 수 있는 레코드를 제어합니다. 페이징을 활성화하기 위해 Tree Grid를 업데이트합니다:

```html
<igx-tree-grid #treeGrid [data]="data" [height]="'500px'" [width]="'100%'" [displayDensity]="'cosy'">
    <igx-paginator [perPage]="10">
    </igx-paginator>
</igx-tree-grid>
```

페이징 영역은 초기화 중에 템플릿 참조가 Tree Grid에 전달되는 경우 사용자가 템플릿화를 할 수 있습니다. 아래 예제는 페이징이 입력을 통해 제어되는 템플릿입니다.

```html
<igx-tree-grid #treeGrid [data]="data" [height]="'500px'" [width]="'100%'" [displayDensity]="'cosy'">
    <igx-paginator [perPage]="10">
    </igx-paginator>
</igx-tree-grid>
```

페이징은 [`paginate`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#paginate), [`previousPage`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#previouspage), [`nextPage`]({environment:angularApiUrl}/classes/IgxPaginatorComponent.html#nextPage) 메소드를 사용하여 Tree Grid API를 통해 프로그래밍 방식으로 실행할 수도 있습니다:

```typescript
// Go to page 6
this.treeGrid.paginate(5);

// Go to previous/next page
this.treeGrid.previousPage();
this.treeGrid.nextPage();

// Check for first/last page
this.treeGrid.isFirstPage;
this.treeGrid.isLastPage;

// Get the number of pages
this.treeGrid.totalPages;

// Change the number of records per page
this.treeGrid.perPage = 25;

// Enables/disables paging
this.treeGrid.paging = false;
```





### API 참조
* [IgxTreeGridComponent API]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxTreeGridComponent 스타일]({environment:sassApiUrl}/themes#function-grid-theme)
* [IgxGridPaginator 스타일]({environment:sassApiUrl}/themes#function-paginator-theme)

### 추가 리소스
<div class="divider--half"></div>

* [Tree Grid 개요](tree-grid.md)
* [가상화 및 성능](virtualization.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 이동](column-moving.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column-resizing.md)
* [선택](selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
