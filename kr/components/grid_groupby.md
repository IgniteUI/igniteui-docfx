---
title: 컴포넌트별 그룹화 - 네이티브 Angular| Ignite UI for Angular
_description: Ignite UI for Angular 컴포넌트별 그룹화를 사용하면 특정 열에 대한 공통 값을 기준으로 데이터를 그룹화할 수 있습니다.
_keywords: Ignite UI for Angular, UI 컨트롤, Angular 위젯, 웹 위젯, UI 위젯, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트 라이브러리, 네이티브 Angular 컴포넌트, Angular 데이터 그리드 컴포넌트, Angular 데이터 그리드 컨트롤, Angular 그리드 컴포넌트, Angular 그리드 컨트롤, Angular 고성능 그리드, 별 그룹화, 별 그룹, 그룹화, 열 그룹화
_language: kr
---

### 그리드의 그룹화

[`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) 는 열 그룹 값에 따라 계층 그룹의 데이터 레코드를 시각화할 수 있는 열 그룹화를 지원합니다.그룹을 확장하거나 축소할 수 있으며 UI 또는 API를 통해 그룹화 순서를 변경할 수 있습니다.


#### 데모

<div class="sample-container loading" style="height:605px">
    <iframe id="grid-sample-groupby-iframe" src='{environment:demosBaseUrl}/grid-groupby' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-groupby-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>

#### 초기 그룹화 상태

식 배열을 사용하여 그리드의 [`groupingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpressions) 속성에 그리드의 초기 그룹화를 설정할 수 있습니다.

```typescript
public ngOnInit() {
    grid.groupingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Desc, ignoreCase: true, strategy: DefaultSortingStrategy.instance() },
        { fieldName: 'Released', dir: SortingDirection.Desc, ignoreCase: false, strategy: DefaultSortingStrategy.instance() }
    ];
}
```

그룹화 식은 [`ISortingExpression`]({environment:angularApiUrl}/interfaces/isortingexpression.html) 인터페이스를 구현합니다.

#### 그룹화 API

그룹화는 UI 및 그리드 컴포넌트에서 공개된 강력한 API를 통해 실행할 수 있습니다. 개발자는 최종 사용자가 각 열의 [`groupable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#groupable) 속성을 `true`로 설정하여 특정 열별로 그리드 데이터를 그룹화할 수 있습니다.

```html
<igx-grid [data]="data">
    <igx-column *ngFor="let c of columns" [field]="c.field" [groupable]="true">
    </igx-column>
</igx-grid>
```

```typescript
public ngOnInit() {
    grid.columns.forEach((column) => {
        column.groupable = true;
    });
}
```

런타임 중에 식은 [`groupingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpressions) 속성에서 가져오고 설정할 수 있습니다. 기존 식을 추가하거나 변경해야 하는 경우, 단일 배열 또는 [`ISortingExpression`]({environment:angularApiUrl}/interfaces/isortingexpression.html)의 배열과 함께 [`groupBy`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupby) 메소드를 사용할 수도 있습니다.

```typescript
grid.groupBy({ fieldName: 'ProductName', dir: SortingDirection.Desc, ignoreCase: true, strategy: DefaultSortingStrategy.instance() });
```

그룹화 작업은 정렬 및 그룹화 식이 열이 그룹화되지 않고 정렬된 경우에도 정렬된 열로서 적용되는 경우에 가능합니다. [`sortingExpression`]({environment:angularApiUrl}/classes/igxgridcomponent.html#sortingexpressions) 속성의 그룹화 식은 항상 그룹화된 열 식이 항상 우선하도록 정렬됩니다. 정렬 API는 그룹화된 열의 식을 변경한 경우에 그룹화에 영향을 미칩니다. 그룹화 식(열 그룹 해제)을 제거하면 정렬도 제거됩니다.

식을 그룹화하는 것 외에도 그룹 행의 전개 상태도 제어할 수 있습니다. [`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) 컴포넌트 [`groupingExpansionState`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpansionstate)의 별도 속성에 저장됩니다. 그룹 행은 작성된 필드 이름과 각 그룹화 수준을 나타내는 값에 따라 고유하게 식별됩니다. 전개 상태 인터페이스의 구문은 다음과 같습니다:

```typescript
export interface IGroupByKey {
    fieldName: string;
    value: any;
}

export interface IGroupByExpandState {
    hierarchy: Array<IGroupByKey>;
    expanded: boolean;
}
```

[`groupingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpressions)으로 [`IGroupByExpandState`]({environment:angularApiUrl}/interfaces/igroupbyexpandstate.html)의 목록을 직접 [`groupingExpansionState`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpansionstate)에 설정하면 전개가 변경됩니다. 또한, [`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) 는 그룹 레코드 인스턴스별로 그룹을 토글하는 메소드를 공개합니다.

```typescript
    const groupRow = this.grid.groupsRecords.find(r => r.value === "France");
    grid.toggleGroup(groupRow);
```

그룹은 전개(***기본값***) 또는 축소된 상태로 작성할 수 있으며, 전개 상태에는 일반적으로 기본 동작과 반대되는 상태만 포함됩니다. [`groupsExpanded`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupsexpanded) 속성을 통해 그룹을 전개할지 여부를 제어할 수 있습니다

#### 그룹 행 템플릿

전개/축소 UI가 없는 그룹 행은 완전한 템플릿이 가능합니다. 기본적으로 그룹화 아이콘을 렌더링하고 필드 이름과 값을 표시합니다. 템플릿이 렌더링되는 레코드 그룹화에는 다음과 같은 구문이 있습니다:

```typescript
export interface IGroupByRecord {
    expression: ISortingExpression;
    level: number;
    records: GroupedRecords;
    value: any;
    groupParent: IGroupByRecord;
    groups?: IGroupByRecord[];
}
```

예를 들면, 다음의 템플릿은 그룹 행 요약을 더욱 상세하게 표시하도록 합니다:

```html
<ng-template igxGroupByRow let-groupRow>
    <span>Total items with value: {{ groupRow.value }} are {{ groupRow.records.length }}</span>
</ng-template>
```

#### 키보드 탐색

그룹화 UI는 다음과 같은 키보드 상호 작용을 지원합니다:

- 그룹 행(행 또는 전개/축소 셀에 포커스)
   - <kbd>SPACE</kbd> - 그룹을 토글

- 그룹 영역의 [`igxChip`]({environment:angularApiUrl}/classes/igxchipcomponent.html) 컴포넌트의 그룹화(칩에 포커스)
   - <kbd>SHIFT</kbd> + <kbd>LEFT</kbd> - 포커스를 맞춘 칩의 왼쪽으로 이동하고 가능한 경우 그룹화 순서를 변경
   - <kbd>SHIFT</kbd> + <kbd>RIGHT</kbd> - 포커스를 맞춘 칩의 오른쪽으로 이동하고 가능한 경우 그룹화 순서를 변경
   - <kbd>SPACE</kbd> - 정렬 방향을 변경
   - <kbd>DELETE</kbd> - 필드의 그룹을 해제
   - 칩의 개별 요소를 포커스할 수 있으며 <kbd>ENTER</kbd> 키를 사용하여 상호 작용할 수 있습니다.

### 알려진 제한 사항

|제한 사항|설명|
|--- |--- |
|그룹화된 열의 최대값은 10입니다. | 10개 이상의 열이 그룹화되면 오류가 발생합니다.

### API

* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [ISortingExpression]({environment:angularApiUrl}/interfaces/isortingexpression.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IGroupByExpandState]({environment:angularApiUrl}/interfaces/igroupbyexpandstate.html)
* [IgxChipComponent]({environment:angularApiUrl}/classes/igxchipcomponent.html)
* [IgxChipComponent Styles]({environment:sassApiUrl}/index.html#function-igx-chip-theme)

### 추가 리소스
<div class="divider--half"></div>

* [그리드 개요](grid.md)
* [가상화 및 성능](grid_virtualization.md)
* [페이징](grid_paging.md)
* [필터링](grid_filtering.md)
* [정렬](grid_sorting.md)
* [열 이동](grid_column_moving.md)
* [요약](grid_summaries.md)
* [열 크기 조정](grid_column_resizing.md)
* [선택](grid_selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
