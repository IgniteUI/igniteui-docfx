---
title: 열 핀 고정 컴포넌트 - 네이티브 Angular| Ignite UI for Angular
_description: Ignite UI for Angular 열 핀 고정 컴포넌트를 사용하여 핀 고정하면 사용자가 수평 스크롤하는 동안 핀 고정된 열이 항상 표시됩니다. 
_keywords: Ignite UI for Angular, UI 컨트롤, Angular 위젯, 웹 위젯, UI 위젯, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트 라이브러리, 네이티브 Angular 컴포넌트, Angular 데이터 그리드 컴포넌트, Angular 데이터 그리드 컨트롤, Angular 그리드 컴포넌트, Angular 그리드 컨트롤, Angular 고성능 그리드, 열 핀 고정, 핀 고정, 핀
_language: kr
---

### 그리드 열 핀 고정
단일 열 또는 복수 열을 그리드의 왼쪽에 핀 고정할 수 있습니다. Ignite UI for Angular **열 핀 고정**을 사용하면 사용자가 수평 스크롤하는 동안 핀 고정된 열이 항상 표시됩니다. 

#### 데모

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-pinning-iframe" src='{environment:demosBaseUrl}/grid/grid-sample-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>

#### 열 핀 고정 API

핀 고정된 영역이 그리드 자체보다 넓지 않는 한 각 열을 핀 고정할 수 있습니다. 열 핀 고정은 [`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html)의 핀 고정 입력을 통해 제어됩니다. 핀 고정된 열은 항상 그리드의 왼쪽에 렌더링되고 그리드 자체의 핀 고정되어 있지 않은 열의 수평 스크롤로 고정됩니다.

```html
<igx-grid #grid1 [data]="data | async" [width]="700px" [autoGenerate]="false" [paging]="true" [perPage]="6" (onColumnInit)="initColumns($event)"
    (onSelection)="selectCell($event)">
    <igx-column [field]="Name" [pinned]="true"></igx-column>
    <igx-column [field]="AthleteNumber"></igx-column>
    <igx-column [field]="TrackProgress"></igx-column>
</igx-grid>
```

또한,  [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html)의 그리드 [`pinColumn`]({environment:angularApiUrl}/classes/igxgridcomponent.html#pincolumn) 또는 [`unpinColumn`]({environment:angularApiUrl}/classes/igxgridcomponent.html#unpincolumn) 메소드를 사용하여 필드 이름으로 열을 핀 고정하거나 핀 고정 해제할 수 있습니다:

```typescript
this.grid.pinColumn("AthleteNumber");
this.grid.unpinColumn("Name");
```

두 메소드는 각각 조작이 성공했는지 여부를 나타내는 불 값을 반환합니다. 일반적인 실패 원인으로 열이 이미 원하는 상태인 경우가 있습니다. [또한, 핀 고정 영역이 그리드 자체보다 크거나 동일한 크기로 변경되면 `pinColumn`]({environment:angularApiUrl}/classes/igxgridcomponent.html#pincolumn)이 실패합니다. 다음의 예제를 참조하십시오:

```html
<igx-grid #grid1 [data]="data | async" [width]="300px" [autoGenerate]="false">
    <igx-column [field]="Name" [width]="200px" [pinned]="true"></igx-column>
    <igx-column [field]="AthleteNumber" [width]="200px"></igx-column>
</igx-grid>
```

```typescript
var succeed = this.grid.pinColumn("AthleteNumber"); // pinning fails and succeed will be false
```

`AthleteNumber` 열을 핀 고정하는 것이 허용되면 핀 고정된 영역은 그리드의 너비보다 커집니다.

열은 가장 오른쪽에 배치된 핀 고정된 열의 오른쪽에 핀 고정됩니다. 핀 고정 열의 순서를 변경하려면 [`onColumnPinning`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnpinning) 이벤트에 서브스크라이브하고 이벤트 정렬의 [`insertAtIndex`]({environment:angularApiUrl}/interfaces/ipincolumneventargs.html#insertatindex) 속성을 원하는 위치 인덱스로 변경하면 됩니다.

```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="true" (onColumnPinning)="columnPinning($event)"></igx-grid>
```

```typescript
public columnPinning(event) {
    if (event.column.field === "Name") {
        event.insertAtIndex = 0;
    }
}
```

### 핀 고정 제한

*   열 너비를 백분율(%)로 명시적으로 설정한 경우, 핀 고정 열이 있으면 그리드 자체 및 헤드 내용이 바르게 정렬되지 않습니다. 열 핀 고정 기능이 제대로 작동하려면 열 너비가 픽셀(px)로 설정하거나 그리드에 의해 자동 할당되어야 합니다.

<div class="divider--half"></div>

### 문제 해결

이 부분에서는 열 핀 고정 기능에 문제가 있는 경우, 취할 수 있는 조치에 대한 방안을 제공합니다.

#### 경고

* `igxGrid - 핀 고정 영역이 최대 핀 고정 폭을 초과합니다. 다음 열은 다른 문제를 방지하기 위해 핀 고정 해제되었습니다:... .` - 사용자가 처음에 너무 많은 핀 고정 열을 정의한 경우에 이 경고가 표시됩니다. 처음에 핀 고정된 열의 합계 너비는 그리드 너비의 80%를 넘지 않아야 합니다. 그렇지 않으면 기본적으로 그리드의 제한을 초과하지 않는 최초의 열(정의된 순서)을 취하고 나머지(경고에 나열된 열)는 핀 고정 해제됩니다. 그리드가 핀 고정을 초기화하기 전에 [`onColumnInit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumninit) 이벤트를 사용하여 초기화할 때 일부 열을 수동으로 핀 고정 해제할지 여부를 결정하기 위해 자체 논리를 실행할 수 있습니다. 각 열에 트리거됩니다.


<div class="divider--half"></div>

### API
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

### 추가 리소스
<div class="divider--half"></div>

* [그리드 개요](grid.md)
* [가상화 및 성능](grid_virtualization.md)
* [페이징](grid_paging.md)
* [필터링](grid_filtering.md)
* [정렬](grid_sorting.md)
* [요약](grid_summaries.md)
* [열 이동](grid_column_moving.md)
* [열 크기 조정](grid_column_resizing.md)
* [선택](grid_selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
