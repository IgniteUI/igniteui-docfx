---
title: 컴포넌트별 그룹화 - 네이티브 Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Group By component allows users to group data based on common values for particular columns.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, group by, groupby, grouping, column grouping
_language: kr
---

### 그리드의 그룹화

[`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html)는 열 그룹 값에 따라 계층 그룹의 데이터 레코드를 시각화할 수 있는 열 그룹화를 지원합니다. 그룹을 확장하거나 축소할 수 있으며 UI 또는 API를 통해 그룹화 순서를 변경할 수 있습니다.


#### 데모

<div class="sample-container loading" style="height:605px">
    <iframe id="grid-sample-groupby-iframe" src='{environment:demosBaseUrl}/grid/grid-groupby' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-groupby-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>

#### 초기 그룹화 상태

그리드의 초기 그룹화를 설정하려면 식 배열을 그리드의 [`groupingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpressions) 속성에 설정합니다.

```typescript
public ngOnInit() {
    grid.groupingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Desc },
        { fieldName: 'Released', dir: SortingDirection.Desc }
    ];
}
```

그룹화 식은 [`ISortingExpression`]({environment:angularApiUrl}/interfaces/isortingexpression.html) 인터페이스를 구현합니다.

#### 그룹화 API

그룹화는 UI 및 그리드 컴포넌트에서 공개된 강력한 API를 통해 실행할 수 있습니다. 개발자는 각 열의 [`groupable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#groupable) 속성을 `true`로 설정하여 최종 사용자가 특정 열별로 그리드 데이터를 그룹화할 수 있습니다.

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

런타임 중에 식은 [`groupingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpressions) 속성으로부터 얻거나 설정할 수 있습니다. 기존 식을 추가하거나 변경해야 하는 경우, [`ISortingExpression`]({environment:angularApiUrl}/interfaces/isortingexpression.html)의 단일 또는 배열의 [`groupBy`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupby) 메소드를 사용할 수도 있습니다.

```typescript
grid.groupBy({ fieldName: 'ProductName', dir: SortingDirection.Desc, ignoreCase: true });
```

그룹화 작업은 정렬 및 그룹화 식이 열이 그룹화되지 않고 정렬된 경우에도 정렬된 열로서 적용되는 경우에 가능합니다. 그룹화 식은 항상 [`sortingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#sortingexpressions) 속성에 있으며 그룹화된 열의 식이 항상 처음이 되도록 정렬됩니다. 정렬 API는 그룹화된 열의 식을 변경한 경우에 그룹화에 영향을 미칩니다. 그룹화 식(열 그룹 해제)을 제거하면 정렬도 제거됩니다.

식을 그룹화하는 것 외에도 그룹 행의 전개 상태도 제어할 수 있습니다. 이들은 [`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) 컴포넌트 [`groupingExpansionState`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpansionstate)의 별도 속성에 저장됩니다. 그룹 행은 작성된 필드 이름과 각 그룹화 수준을 나타내는 값에 따라 고유하게 식별됩니다. 전개 상태 인터페이스의 구문은 다음과 같습니다:

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

[`groupingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpressions)으로 [`IGroupByExpandState`]({environment:angularApiUrl}/interfaces/igroupbyexpandstate.html)의 목록을 직접 [`groupingExpansionState`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupingexpansionstate)에 설정하면 전개가 변경됩니다. 또한, [`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html)는 그룹 레코드 인스턴스별로 그룹을 토글하는 메소드를 공개합니다.

```typescript
    const groupRow = this.grid.groupsRecords.find(r => r.value === "France");
    grid.toggleGroup(groupRow);
```

그룹은 전개(***기본값***) 또는 축소된 상태로 작성할 수 있으며, 전개 상태에는 일반적으로 기본 동작과 반대되는 상태만 포함됩니다. [`groupsExpanded`]({environment:angularApiUrl}/classes/igxgridcomponent.html#groupsexpanded) 속성을 통해 그룹을 전개할지 여부를 제어할 수 있습니다.

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

### Group By with Paging

Group rows participate in the paging process along with data rows. They count towards the page size for each page. Collapsed rows are not included in the paging process. Any expand or collapse operation forces Paging to recalculate the page count and adjust the page index if necessary.
Groups that span multiple pages are split between them. The group row is visible only on the page it starts on and is not repeated on subsequent pages. Summary information for group rows is calculated based on the whole group and is unaffected by Paging.

#### Demo

<div class="sample-container loading" style="height:605px">
    <iframe id="grid-sample-groupby-paging-iframe" src='{environment:demosBaseUrl}/grid/grid-groupby-paging' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-groupby-paging-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Group By with Summaries

Integration between Group By and Summaries is described in the [Summaries](summaries.html#summaries-with-group-by) topic.

#### 키보드 탐색

그룹화 UI는 다음과 같은 키보드 상호 작용을 지원합니다:

- 그룹 행(행 또는 전개/축소 셀에 포커스)
   - <kbd>ALT</kbd> + <kbd>RIGHT</kbd> - 그룹을 전개
   - <kbd>ALT</kbd> + <kbd>LEFT</kbd> - 그룹을 축소

- 그룹 영역의 [`igxChip`]({environment:angularApiUrl}/classes/igxchipcomponent.html) 컴포넌트의 그룹화(칩에 포커스)
   - <kbd>SHIFT</kbd> + <kbd>LEFT</kbd> - 포커스를 맞춘 칩의 왼쪽으로 이동하고 가능한 경우 그룹화 순서를 변경
   - <kbd>SHIFT</kbd> + <kbd>RIGHT</kbd> - 포커스를 맞춘 칩의 오른쪽으로 이동하고 가능한 경우 그룹화 순서를 변경
   - <kbd>SPACE</kbd> - 정렬 방향을 변경
   - <kbd>DELETE</kbd> - 필드의 그룹을 해제
   - 칩의 개별 요소를 포커스할 수 있으며 <kbd>ENTER</kbd> 키를 사용하여 상호 작용할 수 있습니다.

### Styling
#### Basic theming
To begin the customization of the predefined group by feature layout, one needs to import the 'index' file, where all styling functions and mixins are located.  
```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```
One can easily create a new theme, that extends the [`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) and accepts the parameters, required to customize the group by as desired.   
```scss
$custom-theme: igx-grid-theme(
    $group-row-background: #CCC,
    $group-row-selected-background: #bdbdbd,
    $group-label-column-name-text: #000,
    $group-label-icon: #0383d9,
    $group-label-text: #2b2b2b,
    $group-count-background: #09F,
    $group-count-text-color: #000,
    $expand-icon-color: #09F,
    $expand-icon-hover-color: #0383d9
);
```

After providing the function with the required parameters, one has to **include** the component mixins.  
```scss
@include igx-grid($custom-theme);
```

>[!NOTE]
 > If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. Note that the Emulated ViewEncapsulated is the default one. 

```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-theme);
    }
}
```

#### Defining a color palette
In the above described approach, we hardcoded the color values. Instead, we could achieve greater flexibility, using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.   
`igx-palette` generates a color palette, based on provided primary and secondary colors.  

```scss
$black-color: #292826;
$blue-color: #2184c7;

$custom-palette: igx-palette(
  $primary: $black-color,
  $secondary: $blue-color
);
```
After that, using `igx-color`, we could easily obtain a color from the newly generated palette.   
```scss
$custom-theme: igx-grid-theme(
    $group-row-background: igx-color($custom-palette, "secondary", 100),
    $group-row-selected-background: igx-color($custom-palette, "primary", 400),
    $group-label-column-name-text: igx-color($custom-palette, "primary", 600),
    $group-label-icon: igx-color($custom-palette, "primary", 600),
    $group-label-text: igx-color($custom-palette, "secondary", 700),
    $group-count-background: igx-color($custom-palette, "primary", 600),
    $group-count-text-color: igx-color($custom-palette, "secondary", 400),
    $expand-icon-color: igx-color($custom-palette, "primary", 600),
    $expand-icon-hover-color: igx-color($custom-palette, "primary", 300)
);
```
#### Using schemas
One could easily go further and build flexible structure that has all the benefits of a [**schema**](../themes/schemas.md). The **schema** is the recipe of a theme.   
Extend one of the two predefined schemas, that are provided for every component. In our case, we would use `_light_grid`.   
```scss
$custom-grid-schema: extend($_light-grid,(
    group-row-background: (igx-color:('secondary', 100)),
    group-row-selected-background: (igx-color:('primary', 400)),
    group-label-column-name-text: (igx-color:('primary', 600)),
    group-label-icon: (igx-color:('primary', 600)),
    group-label-text: (igx-color:('secondary', 700)),
    group-count-background: (igx-color:('primary', 600)),
    group-count-text-color: (igx-color:('secondary', 400)),
    expand-icon-color: (igx-color:('primary', 600)),
    expand-icon-hover-color: (igx-color:('primary', 400))
));
```
To apply the custom schema, we have to **extend** one of the `light`, or `dark` globals. The whole process is actually supplying a component with a custom schema and adding it to the respctive component theme afterwards.   
```scss
$my-custom-schema: extend($light-schema, ( 
    igx-grid: $custom-grid-schema
));

$custom-theme: igx-grid-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```
   
#### Demo   

<div class="sample-container loading" style="height:605px">
    <iframe id="grid-sample-groupby-styling" src='{environment:demosBaseUrl}/grid/grid-groupby-styling' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-groupby-styling" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### 알려진 제한 사항

|Limitation|Description|
|--- |--- |
|Maximum amount of grouped columns is 10. | If more than 10 columns are grouped an error is thrown.

### API 참조

* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent 스타일]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [ISortingExpression]({environment:angularApiUrl}/interfaces/isortingexpression.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IGroupByExpandState]({environment:angularApiUrl}/interfaces/igroupbyexpandstate.html)
* [IgxChipComponent]({environment:angularApiUrl}/classes/igxchipcomponent.html)
* [IgxChipComponent 스타일]({environment:sassApiUrl}/index.html#function-igx-chip-theme)

### 추가 리소스
<div class="divider--half"></div>

* [그리드 개요](grid.md)
* [가상화 및 성능](virtualization.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [열 이동](column_moving.md)
* [요약](summaries.md)
* [열 크기 조정](column_resizing.md)
* [선택](selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
