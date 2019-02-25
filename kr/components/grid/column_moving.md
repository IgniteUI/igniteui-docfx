---
title: 열 이동- 네이티브 Angular| Ignite UI for Angular
_description: 열 이동 기능은 표준 드래그/드롭 마우스 제스처를 통해 대화식으로 열을 재정렬할 수 있도록 합니다.
_keywords: Ignite UI for Angular, UI 컨트롤, Angular 위젯, 웹 위젯, UI 위젯, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트 라이브러리, Angular 데이터 그리드 컴포넌트, Angular 데이터 그리드 컨트롤, 네이티브 Angular 컴포넌트, Angular 그리드 컴포넌트, Angular 그리드 컨트롤, Angular 고성능 그리드, 열 이동, 그리드 열 이동, Angular 그리드 열 이동, Angular 열 이동
_language: kr
---

### 그리드 열 이동

Ignite UI for Angular 그리드 컴포넌트는 표준 드래그/드롭 마우스 또는 터치 제스처로 **열 이동**을 사용해 열을 재정렬할 수 있도록 합니다.

열 이동은 고정된 열에서도 작동합니다. 핀 고정 해제된 열을 드래그하여 핀 고정 영역 안으로 드롭하여 해당 열을 핀 고정시키거나, 반대로 핀 고정된 열을 드래그하여 핀 고정 영역 밖으로 드롭하여 해당 열을 핀 고정 해제할 수 있습니다.

#### 데모

<div class="sample-container loading" style="height:630px">
    <iframe id="column-moving-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-moving-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="column-moving-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

#### 개요
**Column moving** 기능은 열 단위 수준에서 사용할 수 있으며, 이는 [**igx-grid**]({environment:angularApiUrl}/classes/igxgridcomponent.html)에 이동 가능하고 이동할 수 없는 열이 혼합되어 있음을 의미합니다. 이것은 [`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html)의 [`movable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#movable) 입력을 통해 이루어집니다.

```html
<igx-column [field]="'Category'" [movable]="true"></igx-column>
```

> [!NOTE]
> 핀 고정 영역이 최대 허용 너비(전체 그리드 너비의 80%)를 초과하면 드롭 조작이 금지되어 있어 핀 고정이 불가함을 힌트 표시로 최종 사용자에게 알립니다. 즉, 핀 고정 영역에 열을 드롭할 수 없게 됩니다.

#### 이벤트
열의 드래그 앤드 드롭 조작을 설정하기 위해 열 이동과 관련된 복수의 이벤트가 제공됩니다. [`onColumnMovingStart`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnmovingstart), [`onColumnMoving`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnmoving) 및 [`onColumnMovingEnd`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnmovingend)이 있습니다. 
[`igx-grid`]({environment:angularApiUrl}/classes/igxgridcomponent.html)의 [`onColumnMovingEnd`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnmovingend) 이벤트에 서브스크라이브하여 열이 새 위치로 떨어질 때 일부 사용자 논리를 구현할 수 있습니다. 예를 들면, Change On Year(%) 열 뒤에 카테고리 드롭을 취소할 수 있습니다.

```html
<igx-grid #dataGrid [data]="data" [autoGenerate]="false" (onColumnMovingEnd)="onColumnMovingEnd($event)">
    <igx-column [field]="'Category'" [movable]="true"></igx-column>
    <igx-column [field]="'Change On Year(%)'" [dataType]="'number'" [movable]="true" ></igx-column>
</igx-grid>
```

```typescript
public onColumnMovingEnd(event) {
    if (event.source.field === "Category" && event.target.field === "Change On Year(%)") {
        event.cancel = true;
    }
}
```

### API 참조
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)

### 추가 리소스
<div class="divider--half"></div>

* [그리드 개요](grid.md)
* [가상화 및 성능](virtualization.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column_resizing.md)
* [선택](selection.md)
* [검색](search.md)
* [Excel 내보내기](../exporter_excel.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
