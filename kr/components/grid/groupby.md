---
title: 컴포넌트별 그룹화 - 네이티브 Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Group By component allows users to group data based on common values for particular columns.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, group by, groupby, grouping, column grouping
_language: kr
---

### 그리드의 그룹화

[`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html)는 열 그룹 값에 따라 계층 그룹의 데이터 레코드를 시각화할 수 있는 열 그룹화를 지원합니다. 그룹을 확장하거나 축소할 수 있으며 UI 또는 API를 통해 그룹화 순서를 변경할 수 있습니다.


#### 데모


<code-view style="height:605px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-groupby" >
</code-view>


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


<code-view style="height:605px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-groupby-paging" >
</code-view>


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

The igxGrid allows styling through the [Ignite UI for Angular Theme Library](../themes/component-themes.md). The grid's [theme]({environment:sassApiUrl}/index.html#function-igx-grid-theme) exposes a wide variety of properties, which allow the customization of all the features of the grid. 

In the below steps, we are going through the steps of customizing the grid's Group By styling.

#### Importing global theme

To begin the customization of the Group By feature, you need to import the `index` file, where all styling functions and mixins are located.

```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```

#### Defining custom theme

Next, create a new theme, that extends the [`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) and accepts the parameters, required to customize the Group By as desired. You also need to extend the [`igx-chip-theme`]({environment:sassApiUrl}/index.html#function-igx-chip-theme), because it's used in the Group By feature.

```scss

$custom-theme: igx-grid-theme(
    /* Group By properties that affect styling */
    $group-row-background: #494949,
    $group-row-selected-background: #383838,
    $group-label-column-name-text: #f8f8f8,
    $group-label-icon: #FFCD0F,
    $group-label-text: #f8f8f8,
    $group-count-background: #FFCD0F,
    $group-count-text-color: #000,
    $expand-icon-color: #FFCD0F,
    $expand-icon-hover-color: rgb(223, 181, 13),
    $cell-active-border-color: #FFCD0F,
    $row-selected-background: #fff6d3,
    $row-selected-text-color: #000,
    $drop-indicator-color: #FFCD0F
    /* add other features properties here... */
);

/* Chip theme will style the chips in the Group By area */
$custom-chips-theme: igx-chip-theme(
    $background: #494949,
    $text-color: #f8f8f8,
    $hover-text-color: #e7e7e7
);
```

#### Defining a custom color palette

In the approach that we described above, the color values were hardcoded. Alternatively, you can achieve greater flexibility, using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.   
`igx-palette` generates a color palette, based on provided primary and secondary colors.  

```scss
$black-color: #292826;
$yellow-color: #FFCD0F;

$custom-palette: igx-palette(
  $primary: $black-color,
  $secondary: $yellow-color
);
```
After a custom palette has been generated, the `igx-color` function can be used to obtain different varieties of the primary and the secondary colors. 

```scss
$custom-theme: igx-grid-theme(
    $group-row-background: igx-color($custom-palette, "primary", 300),
    $group-row-selected-background: igx-color($custom-palette, "primary", 400),
    $group-label-column-name-text: igx-contrast-color($custom-palette, "primary", 500),
    $group-label-icon: igx-color($custom-palette, "secondary", 600),
    $group-label-text: igx-contrast-color($custom-palette, "primary", 500),
    $group-count-background: igx-color($custom-palette, "secondary", 600),
    $group-count-text-color: igx-color($custom-palette, "primary", 400),
    $expand-icon-color: igx-color($custom-palette, "secondary", 600),
    $expand-icon-hover-color: igx-color($custom-palette, "secondary", 300),
    $cell-active-border-color: igx-color($custom-palette, "secondary", 600)
);

$custom-chips-theme: igx-chip-theme(
    $background: igx-color($custom-palette, "primary", 300),
    $text-color: igx-contrast-color($custom-palette, "primary", 500),
    $hover-text-color: igx-contrast-color($custom-palette, "primary", 600)
);
```
#### Defining custom schemas
You can go even further and build flexible structure that has all the benefits of a [**schema**](../themes/schemas.md). The **schema** is the recipe of a theme. 
Extend one of the two predefined schemas, that are provided for every component. In our case, we would use `$_light_grid`.   
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
In order for the custom schema to be applied, either `light`, or `dark` globals has to be extended. The whole process is actually supplying a component with a custom schema and adding it to the respective component theme afterwards.   
```scss
$my-custom-schema: extend($light-schema, ( 
    igx-grid: $custom-grid-schema
));

$custom-theme: igx-grid-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```

#### Applying the custom theme

The easiest way to apply your theme is with a `sass` `@include` statement in the global styles file:
```scss
@include igx-grid($custom-theme);
@include igx-chip($custom-chips-theme);
```

#### Scoped component theme

In order for the custom theme to affect only specific component, you can move all of the styles you just defined from the global styles file to the custom component's style file (including the import of the `index` file).

This way, due to Angular's [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation), your styles will be applied only to your custom component.

 >[!NOTE]
 >If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep` in order to style the grid.
 >[!NOTE]
 >Wrap the statement inside of a `:host` selector to prevent your styles from affecting elements *outside of* our component:

```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-theme);
        @include igx-chip($custom-chips-theme);
    }
}
```

#### Demo   


<code-view style="height:570px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-groupby-styling" >
</code-view>


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
* [열 이동](column-moving.md)
* [요약](summaries.md)
* [열 크기 조정](column-resizing.md)
* [선택](selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
