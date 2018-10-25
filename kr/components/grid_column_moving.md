---
title: 열 이동- 네이티브 Angular | Ignite UI for Angular
_description: 열 이동 기능은 표준 드래그/드롭 마우스 제스처를 통해 대화식으로 열을 재정렬할 수 있도록 합니다.
_keywords: Ignite UI for Angular, UI 컨트롤, Angular 위젯, 웹 위젯, UI 위젯, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트 라이브러리, Angular 데이터 그리드 컴포넌트, Angular 데이터 그리드 컨트롤, 네이티브 Angular 컴포넌트, Angular 그리드 컴포넌트, Angular 그리드 컨트롤, Angular 고성능 그리드, 열 이동, 그리드 열 이동, Angular 그리드 열 이동, Angular 열 이동
_language: kr
---

### 그리드 열 이동

Ignite UI for Angular 그리드 컴포넌트는 표준 드래그/드롭 마우스 또는 터치 제스처로 **열 이동**을 사용해 열을 재정렬할 수 있도록 합니다.

열 이동은 고정된 열에서도 작동합니다. 핀 고정 해제된 열을 드래그하여 핀 고정 영역 안으로 드롭하여 해당 열을 핀 고정시키거나, 반대로 핀 고정된 열을 드래그하여 핀 고정 영역 밖으로 드롭하여 해당 열을 핀 고정 해제할 수 있습니다.

#### 데모

<div class="sample-container loading" style="height:630px">
    <iframe id="column-moving-sample-iframe" src='{environment:demosBaseUrl}/grid-moving-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="column-moving-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### 개요
**열 이동** 기능은 열 단위 수준에서 사용할 수 있으며 **igx-grid**에 이동 가능한 열 및 이동 불가한 열을 혼합하여 사용할 수 있습니다. 이는 `igx-column`의 `movable` 입력을 통해 제어할 수 있습니다.

```html
<igx-column [field]="'Category'" [movable]="true"></igx-column>
```

> [!NOTE]
> 핀 고정 영역이 최대 허용 너비(전체 그리드 너비의 80%)를 초과하면 드롭 조작이 금지되어 있어 핀 고정이 불가함을 힌트 표시로 최종 사용자에게 알립니다. 즉, 핀 고정 영역에 열을 드롭할 수 없게 됩니다.

#### 이벤트
열의 드래그 앤드 드롭 조작을 설정하기 위해 열 이동과 관련된 복수의 이벤트가 제공됩니다. `onColumnMovingStart`, `onColumnMoving`, `onColumnMovingEnd`가 있습니다. 
`Igx-grid`의 `onColumnMovingEnd` 이벤트를 처리하고 열을 새 위치로 드롭할 때 일부 사용자 논리를 구현할 수 있습니다. 예를 들면, Change On Year(%) 열 뒤에 카테고리 드롭을 취소할 수 있습니다.

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

### API 요약

#### 입력
다음의 `IgxColumnComponent` 입력을 사용하여 **열 이동**을 구성할 수 있습니다:

| 이름 | 형식 | 설명 |
| :--- | :--- | :--- |
|`movable`|boolean|열을 이동 가능하게 설정합니다.|

<div class="divider--half"></div>

#### 출력
다음의 `IgxGridComponent` 출력을 **column moving**에 사용할 수 있습니다:

| 이름 | 형식 | 설명 |
| :--- | :--- | :--- |
|`onColumnMoving`| EventEmitter |열이 이동된 경우에 발생됩니다. 소스 및 대상 열 객체를 반환합니다. 이 이벤트는 취소할 수 있습니다.|
|`onColumnMovingEnd`| EventEmitter |열 이동이 완료된 경우에 발생합니다. 소스 및 대상 열 객체를 반환합니다. 이 이벤트는 취소할 수 있습니다.|
|`onColumnMovingStart`| EventEmitter |열 이동이 시작된 경우에 발생합니다. 이동된 열 객체를 반환합니다.|

<div class="divider--half"></div>

#### 메소드
다음의 `IgxGridComponent` 메소드는 **열 이동**과 관련이 있습니다:

| 이름 | 설명 |
| :--- | :--- |
|`moveColumn(column: IgxColumnComponent, dropTarget: IgxColumnComponent)` | API를 사용해 지정된 드롭 대상에 열을 이동하는 방법을 제공합니다. |

<div class="divider--half"></div>

### 추가 리소스
<div class="divider--half"></div>

* [그리드 개요](grid.md)
* [가상화 및 성능](grid_virtualization.md)
* [페이징](grid_paging.md)
* [필터링](grid_filtering.md)
* [정렬](grid_sorting.md)
* [요약](grid_summaries.md)
* [열 핀 고정](grid_column_pinning.md)
* [열 크기 조정](grid_column_resizing.md)
* [선택](grid_selection.md)
* [검색](grid_search.md)
* [Excel 내보내기](exporter_excel.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
