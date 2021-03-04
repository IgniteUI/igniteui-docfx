@@if (igxName === 'IgxGrid') {
---
title: 가상화 지시문 - 네이티브 Angular | Ignite UI for Angular 
_description: The Ignite UI for Angular Virtualization directive is the core mechanic behind the speed and performance of the grid when handling large data sets, since its virtual rendering mechanism allows the user to effortlessly scroll by its fixing of the number of DOM objects in memory. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Angular Virtualization Directive, Angular Data Table Virtualization, Virtualization, Angular Data Table Performance, Data Table Performance
_language: kr
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: 가상화 지시문 - 네이티브 Angular | Ignite UI for Angular 
_description: The Ignite UI for Angular Virtualization directive is the core mechanic behind the speed and performance of the tree grid when handling large data sets, since its virtual rendering mechanism allows the user to effortlessly scroll by its fixing of the number of DOM objects in memory. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Tree Grid, Angular Tree Table, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular High Performance Tree Grid, Angular High Performance Tree Table, Angular Virtualization Directive, Angular Tree Table Virtualization, Virtualization, Angular Tree Table Performance, Tree Table Performance
_language: kr
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: 가상화 지시문 - 네이티브 Angular | Ignite UI for Angular 
_description: The Ignite UI for Angular Virtualization directive is the core mechanic behind the speed and performance of the hierarchical grid when handling large data sets, since its virtual rendering mechanism allows the user to effortlessly scroll by its fixing of the number of DOM objects in memory.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid component, Angular Hierarchical Table component, Angular Hierarchical Grid control, Angular Hierarchical Table control, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Table, Angular Virtualization Directive, Angular Hierarchical Table Virtualization, Virtualization, Angular Hierarchical Table Performance, Hierarchical Table Performance
_language: kr
---
}
### @@igComponent 가상화 및 성능

Ignite UI for Angular에서 [@@igxName]({environment:angularApiUrl}/classes/@@igTypeDoc.html) 컨트롤은 [`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html) 지시문을 사용하고 내용을 세로 및 가로로 가상화합니다.

@@if (igxName === 'IgxGrid') {
#### 데모

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-2-iframe" src='{environment:demosBaseUrl}/grid/grid-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
#### 데모
<div class="sample-container loading" style="height:620px">
    <iframe id="hierarchical-grid-lod-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-lod' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-lod-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}

### 가상화 활성화

[`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html) 지시문을 사용함으로써 @@igxName는 현재 보기 포트에 표시된 내용만 렌더링하고 사용자가 데이터를 가로/세로로 스크롤하는 동안 표시된 데이터를 스와핑하여 DOM 렌더링 및 메모리 사용을 최적화합니다. [@@igxName]({environment:angularApiUrl}/classes/@@igTypeDoc.html)의 [`width`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#width) 및 [`height`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#height)의 기본값은 `100%`이며, 표시되는 내용이 사용 가능한 공간에 맞지 않고 스크롤바가 세로 또는 가로로 필요한 경우에 가상화가 활성화됩니다. 그러나, @@igComponent의 [`width`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#width) 및/또는 [`height`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#height)를 명시적으로 `null`로 설정할 수 있는데 즉 관련된 규격이 내부 항목의 전체 크기에 근거하여 결정됩니다. 그러면 스크롤바가 표시되지 않고 모든 항목이 해당 규격([`width`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#width)가 `null`인 경우에는 열, [`height`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#height)가 `null`인 경우에는 행)이 렌더링됩니다.

데이터의 크기는 다음에 따라 결정됩니다:

*   수직(행) 가상화의 행 높이입니다. 이것은 [`rowHeight`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowheight) 옵션에 의해 결정되며 기본적으로 50(px)입니다.
*   수평(열) 가상화의 개별 열 너비(픽셀 단위)입니다. 각 열 컴포넌트에 대해 명시적으로 폭을 설정하거나 명시적으로 폭이 설정되지 않은 모든 열에 적용되는 @@igComponent의  [`columnWidth`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnwidth) 옵션을 설정할 수 있습니다.

규격을 설정하지 않은 채로 그리드에 기본 동작을 적용하면 대부분의 경우 원하는 레이아웃이 생성됩니다. 열 너비의 경우에는 열 수, 너비가 설정된 열 및 @@igComponent 컨테이너의 계산된 너비에 따라 결정됩니다. 그리드는 할당하려는 폭이 136(px) 미만인 경우 이외에는 사용 가능한 공간 안에 모든 열을 맞추려고 합니다. 이 경우, 할당되지 않은 너비를 가진 열은 136(px)의 최소 너비로 설정되고 가로 스크롤바가 표시됩니다. 그리드는 가로 방향으로 가상화됩니다.

명시적으로 열 너비를 백분율(%)로 설정하는 경우, 대부분의 경우 가로 스크롤바가 없는 가로 방향으로 가상화되지 않는 그리드를 작성합니다.

@@if (igxName === 'IgxGrid') {
### 원격 가상화

[@@igxName]({environment:angularApiUrl}/classes/@@igTypeDoc.html)는 원격 서비스에서 데이터 청크를 요청하는 시나리오를 지원하며, 내부적으로 사용하는 [`igxForOf`]({environment:angularApiUrl}/classes/igxforofdirective.html) 지시문에 구현된 동작을 노출합니다.

### 원격 가상화 데모

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-4-iframe" data-src='{environment:demosBaseUrl}/grid/grid-sample-4' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>

이 기능을 사용하려면 얻은 인수를 기반으로 적절한 요청을 하기 위해 [`onDataPreLoad`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ondatapreload) 출력에 서브스크라이브하고 서비스에서 제공하는 해당 정보와 공개 [@@igxName]({environment:angularApiUrl}/classes/@@igTypeDoc.html) 속성 [`totalItemCount`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#totalitemcount)를 설정해야 합니다.

```html
<igx-grid #grid [data]="remoteData | async" [height]="'500px'" [width]="'100%'" [autoGenerate]='false' (onDataPreLoad)="processData(false)"
    (onSortingDone)="processData(true)">
    <igx-column [field]="'ProductID'" [sortable]="true"></igx-column>
    <igx-column [field]="'ProductName'" [sortable]="true"></igx-column>
    <igx-column [field]="'UnitPrice'" [dataType]="'number'" [formatter]="formatCurrency" [sortable]="true"></igx-column>
    ...
</igx-grid>
```

```typescript
public ngAfterViewInit() {
    this._remoteService.getData(this.grid.virtualizationState, this.grid.sortingExpressions[0], true, (data) => {
            this.grid.totalItemCount = data["@odata.count"];
    });
}

public processData() {
    if (this.prevRequest) {
        this.prevRequest.unsubscribe();
    }

    this._prevRequest = this._remoteService.getData(this.grid.virtualizationState,
        this.grid.sortingExpressions[0], reset, () => {
        ...
        this.cdr.detectChanges();
    });
}
```

데이터를 요청할 때는 [`startIndex`]({environment:angularApiUrl}/interfaces/iforofstate.html#startindex) 및 [`chunkSize`]({environment:angularApiUrl}/interfaces/iforofstate.html#chunksize) 속성을 제공하는 [`IForOfState`]({environment:angularApiUrl}/interfaces/iforofstate.html) 인터페이스를 사용해야 합니다.

***참고:*** 첫 번째 [`chunkSize`]({environment:angularApiUrl}/interfaces/iforofstate.html#chunksize)는 항상 0이며 특정 애플리케이션애플리케이션 시나리오에 따라 결정해야 합니다.

### 원격 정렬/필터링 가상화
원격 정렬 및 필터링을 제공하려면 [`onDataPreLoad`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ondatapreload), [`onSortingDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onsortingdone), [`onFilteringDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onfilteringdone) 출력에 서브스크라이브해야 하므로 받은 인수를 기반으로 적절한 요청을 하고 공개 [@@igxName]({environment:angularApiUrl}/classes/@@igTypeDoc.html) 속성 [`totalItemCount`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#totalitemcount)를 설정해야 합니다.

원격 데이터를 요청할 때 필터링 작업은 대소문자를 구분합니다.

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-remote-filtering-iframe" data-src='{environment:demosBaseUrl}/grid/grid-remote-filtering' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-remote-filtering-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}

@@if (igxName === 'IgxTreeGrid') {
### 원격 필터링 가상화

원격 필터링을 제공하려면 [`onFilteringDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onfilteringdone) 출력에 서브스크라이브해야 하므로 받은 인수를 기반으로 적절한 요청을 실행해야 합니다. [`primaryKey`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey) 와 [`foreignKey`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#foreignkey)를 제공하여 트리 그리드의 데이터 소스로 플랫 컬렉션을 사용합니다.

```html
<!-- tree-grid-remote-filtering-sample.html -->

<igx-tree-grid #treeGrid [data]="remoteData | async" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" width="100%" height="450px"
                [autoGenerate]="false" (onFilteringDone)="processData()" [allowFiltering]="true">
    <igx-column [field]="'Name'" dataType="string"></igx-column>
    <igx-column [field]="'Title'" dataType="string"></igx-column>
    <igx-column [field]="'Age'" dataType="number"></igx-column>
    ...
</igx-tree-grid>
```

```typescript
// tree-grid-remote-filtering-sample.ts

public ngAfterViewInit() {
    this.processData();
}

public processData() {
    this.toast.show();

    const filteringExpr = this.treeGrid.filteringExpressionsTree;

    this._remoteService.getData(filteringExpr, () => {
        this.toast.hide();
    });
}
```

원격 필터링은 플랫 컬렉션에서 직접 실행해야 합니다. 상위가 필터링과 일치하는지 여부에 관계없이 필터링 조건과 일치하는 모든 레코드에 대해 모든 상위를 포함시켜야 합니다(계층 구조를 유지하기 위해 이 작업을 실행함). 결과는 다음과 같습니다:

<div class="sample-container loading" style="height:550px">
    <iframe id="treegrid-remotefiltering-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-remote-filtering' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-remotefiltering-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>

원격 데이터를 요청할 때 필터링 작업은 대소문자를 구분합니다.
}

### 가상화 제한 사항

*   Mac OS에서 "스크롤할 때 스크롤바 만 표시" 옵션이 true(기본값)로 설정되어 있으면 가로 스크롤바가 표시되지 않습니다. 이것은 @@igComponent의 행 컨테이너에 오버플로가 숨기기로 설정되어 있기 때문입니다. 옵션을 "항상"으로 변경하면 스크롤바가 표시됩니다.

### FAQ

#### 왜 가상화가 작동하려면 @@igComponent에 규격을 설정해야 합니까?

렌더링하기 전에 컨테이너 및 항목의 크기에 대한 정보가 없는 경우에 @@igComponent에 임의의 위치로 스크롤하면 스크롤바의 너비 또는 높이를 설정하거나 표시 항목을 결정하는데 오류가 발생합니다. 실제 규격에 대한 추측이 스크롤바의 오작동으로 이어지고 궁극적으로 사용자의 경험을 저하시킵니다. 가상화를 유효화시키기 위해서는 관련 규격을 설정해야 합니다.

<div class="divider--half"></div>

### API 참조
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent 스타일]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxForOfDirective]({environment:angularApiUrl}/classes/igxforofdirective.html)
* [IForOfState]({environment:angularApiUrl}/interfaces/iforofstate.html)

### 추가 리소스
<div class="divider--half"></div>

* [@@igComponent 개요](@@igMainTopic.md)
* [페이징](paging.md)
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
