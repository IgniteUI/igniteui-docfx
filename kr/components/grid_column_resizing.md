---
title: 열 크기 조정 컴포넌트- 네이티브 Angular| Ignite UI for Angular
_description: 열 크기 조정의 지연에서는 Ignite UI for Angular 열 크기 조정 컴포넌트를 사용하면 드래그 조작의 실행 중에 크기 조정 인디케이터가 일시적으로 표시됩니다.
_keywords: Ignite UI for Angular, UI 컨트롤, Angular 위젯, 웹 위젯, UI 위젯, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트 라이브러리, Angular 데이터 그리드 컴포넌트, Angular 데이터 그리드 컨트롤, 네이티브 Angular 컴포넌트, Angular 그리드 컴포넌트, Angular 그리드 컨트롤, Angular 고성능 그리드, 열 크기 조정, 지연된 열 크기 조정, 그리드 열 크기 조정, Angular 그리드 크기 조정, Angular 열
_language: kr
---

### 그리드 열 크기 조정

열 크기 조정의 지연에서는 드래그 조작의 실행 중에 크기 조정 인디케이터가 일시적으로 표시됩니다. 드래그 조작이 완료되면 새로운 열 크기가 적용됩니다.

#### 그리드 열 크기 조정 데모

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-resizing-sample-iframe" src='{environment:demosBaseUrl}/grid-resizing-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-resizing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

**Column resizing**은 열 단위 수준에서도 또한 사용할 수 있으며, 이는 [**igx-grid**]({environment:angularApiUrl}/classes/igxgridcomponent.html)에 크기 조정이 가능하고 크기 조정을 할 수 없는 열이 혼합되어 있음을 의미합니다. 이것은 [`resizable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#resizable) input of the [`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) 입력을 통해 이루어집니다.

```html
<igx-column [field]="'ID'" width="100px" [resizable]="true"></igx-column>
<igx-column [field]="'CompanyName'" width="100px" [resizable]="true"></igx-column>
```

[`onColumnResized`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnresized) event of the [`igx-grid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) 이벤트에 서브스크라이브하여 열 크기를 조정할 때 일부 사용자 논리를 구현할 수 있습니다. [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) 객체뿐만 아니라 이전 및 새로운 열 너비가 이벤트 인수를 통해 노출됩니다.

```html
<igx-grid [data]="data" (onColumnResized)="onResize($event)" [autoGenerate]="false">
    <igx-column [field]="'ID'" width="100px" [resizable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" width="100px" [resizable]="true"></igx-column>
</igx-grid>
```

```typescript
public onResize(event) {
    this.col = event.column;
    this.pWidth = event.prevWidth;
    this.nWidth = event.newWidth;
}
```

#### 열 크기 조정 제한

최소 및 최대 허용 열 너비를 구성할 수도 있습니다. 이것은 [`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html)의 [`minWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#minwidth) 및 [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth) 입력을 통해 이루어집니다. 이 경우, 크기 조정 인디케이터 드래그 조작이 제한되어 열의 크기가 [`minWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#minwidth) 및 [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth)로 정의된 경계 밖에서 조정할 수 없음을 사용자에게 알립니다.

```html
<igx-column [field]="'ContactName'" width="100px" [resizable]="true"
            [minWidth]="'60px'" [maxWidth]="'230px'"></igx-column>
```

> [!NOTE]
> [`minWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#minwidth)가 이보다 작은 값으로 설정된 경우에도 **88px** 미만의 열 크기를 조정할 수 없습니다.

#### 더블 클릭으로 자동 크기 열 조정

각 열은 헤더의 오른쪽을 더블 클릭하여 **자동 크기 조정**을 할 수 있는데, 열은 현재 표시되어있는 헤더를 포함하여 가장 긴 셀 값에 크기를 설정합니다. 이 동작은 기본적으로 사용되며 추가 구성이 필요하지 않습니다. 그러나, 해당 열에 [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth)가 설정되어 있고 새로운 너비가 [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth)값을 초과하는 경우, 열 크기가 자동 조정되지 않습니다. 이 경우, 열은 사전 설정된 [`maxWidth`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#maxwidth) 값에 따라 크기가 조정됩니다.

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html)에서 노출된 [`autosize()`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#autosize) 메소드를 사용하여 동적으로 열 크기를 자동 조절할 수도 있습니다.

```typescript
@ViewChild('grid') grid: IgxGridComponent;

let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
column.autosize();
```

#### 핀 고정된 열 크기 조정

핀 고정된 열 크기를 조정할 수도 있습니다. 그러나, 핀 고정된 열 컨테이너의 전체 너비가 전체 그리드 너비의 80%보다 커지지 않도록 크기 조정이 제한됩니다.
다시 말하면, 핀 고정 열을 자동 크기 조정에서 새로운 너비로 인해 핀 고정 열 컨테이너가 그리드 전체 너비의 80%를 초과하는 경우, 자동 크기 조정이 무시됩니다. 이는 핀 고정되어 있지 않은 열을 항상 표시하여 사용자가 사용할 수 있도록 하기 위함입니다.

### API 참조
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)

### 추가 리소스
<div class="divider--half"></div>

* [그리드 개요](grid.md)
* [가상화 및 성능](grid_virtualization.md)
* [페이징](grid_paging.md)
* [필터링](grid_filtering.md)
* [정렬](grid_sorting.md)
* [요약](grid_summaries.md)
* [열 이동](grid_column_moving.md)
* [열 핀 고정](grid_column_pinning.md)
* [선택](grid_selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
