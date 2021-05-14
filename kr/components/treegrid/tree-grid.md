---
title: 트리 그리드 컴포넌트
_description: The Ignite UI for Angular Tree Grid control features the fastest, touch-responsive data-rich grid with popular features.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tree Grid component, Angular Tree Grid control, Angular Tree Grid component, Angular High Performance Tree Grid, Tree Grid
_language: kr
---

## 트리 그리드

<p class="highlight">일관된 테이블 형식으로 서식 설정된 스키마로 계층적 데이터를 표시 및 조작하고 정렬, 필터링, 요약, 편집, 열 고정, 페이징, 열 이동, 숨기기와 같은 고급 기능을 제공합니다.</p>

### 데모


<code-view style="height:850px" 
           data-demos-base-url="{environment:lobDemosBaseUrl}" 
           iframe-src="{environment:lobDemosBaseUrl}/tree-grid/treegrid-childdatakey" >
</code-view>

<div class="divider--half"></div>

### 시작하기

트리 그리드는 `NgModule`로 내보내기가 되기 때문에 애플리케이션에서 `IgxTreeGridModule`을 `AppModule`로 가져오기만 하면 됩니다:

```typescript
// app.module.ts

import { IgxTreeGridModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxTreeGridModule,
        ...
    ]
})
export class AppModule {}
```

### 사용 방법

[`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)는 [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html)와 많은 기능을 공유하지만 데이터를 계층적으로 표시하는 기능도 추가되었습니다.
이를 위해 [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)는 각 데이터 객체의  [하위 컬렉션](#child-collection)을 사용하거나 각 데이터 객체에 [기본 키와 외부 키](#primary-and-foreign-keys)를 사용하여 데이터 객체 간의 관계를 정의하는 몇 가지 방법을 제공합니다.

### 트리 셀

트리 그리드의 계층 구조(하위 컬렉션 또는 기본 키와 외부 키)를 작성하는 데 사용되는 옵션과 관계없이 트리 그리드의 행은 2가지 유형의 셀로 구성됩니다:

- [`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html) - 값이 포함된 표준 셀입니다.
- [`IgxTreeGridCellComponent`]({environment:angularApiUrl}/classes/igxtreegridcellcomponent.html) - 셀의 행 수준을 기반으로 한 값, 인디케이터의 전개/축소, 인덴트 div 요소가 포함된 트리 셀입니다. 행 컴포넌트의 수준은 내부 [`treeRow`]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html#treerow)의 [`level`]({environment:angularApiUrl}/interfaces/itreegridrecord.html#level) 속성을 통해 접근할 수 있습니다.

> [!NOTE]
> 각 행에는 하나의 트리 셀만 가질 수 있지만 표준 셀은 여러 개 가질 수 있습니다.

### 초기 전개 심도

처음에는 트리 그리드가 모든 노드 수준을 전개하여 표시합니다. 이 동작은 [`expansionDepth`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#expansiondepth) 속성을 사용하여 구성할 수 있습니다. 기본적으로 이 값은 **Infinity**이며 모든 노드 수준이 전개됨을 의미합니다. 이 속성을 숫자 값으로 설정하여 초기 전개 심도를 제어할 수 있습니다. 예를 들면, **0**은 루트 수준의 노드만 표시하고, **1**은 루트 수준의 노드와 하위 노드 등을 표시합니다.

### 하위 컬렉션
**child collection** 옵션을 사용하는 경우, 모든 데이터 객체에는 상위 데이터 객체와 동일한 유형의 항목으로 채워진 하위 컬렉션이 포함됩니다. 이렇게하면 트리 그리드의 모든 레코드가 해당 자식에 대한 직접적인 참조를 갖게됩니다. 이 경우, 원본 데이터 소스가 포함된 트리 그리드의 [`data`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#data) 속성은 계층적으로 정의된 컬렉션이 됩니다.

이 샘플의 경우, 다음과 같은 컬렉션 구조를 사용합니다:

```typescript
// Sample Employee Data

export const EMPLOYEE_DATA = [
    {
        Name: "Johnathan Winchester",
        ID: 1,
        HireDate: new Date(2008, 3, 20),
        Age: 55,
        Employees: [
            {
                Name: "Michael Burke",
                ID: 3,
                HireDate: new Date(2011, 6, 3),
                Age: 43,
                Employees: []
            },
            {
                Name: "Thomas Anderson"
                ID: 2,
                HireDate: new Date(2009, 6, 19),
                Age: 29,
                Employees: []
            },
            ...
        ]
    },
    ...
]
```

이제 데이터 컬렉션을 불러오기 하여 트리 그리드의 [`data`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#data) 입력에 바인딩합니다.

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData">
</igx-tree-grid>
```

IgxTreeGridComponent가 계층을 구축하려면 [`childDataKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#childdatakey) 속성을 각 데이터 객체에서 사용되는 하위 컬렉션의 이름으로 설정해야 합니다. 이 샘플의 경우, **Employees** 컬렉션이 됩니다.
또한, 자동 열 생성을 비활성화하고 데이터 객체의 실제 속성과의 일치를 수동으로 정의합니다. (**Employees** 컬렉션은 계층 구조에 자동으로 사용되므로 열 정의에 포함할 필요가 없습니다.)

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData" childDataKey="Employees"
               [autoGenerate]="false">
    <igx-column field="Name" dataType="string"></igx-column>
    <igx-column field="HireDate" dataType="date"></igx-column>
    <igx-column field="Age" dataType="number"></igx-column>
</igx-tree-grid>
```

[`rowSelectable`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowselectable) 및 [`paging`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#paging) 속성을 사용하여 트리 그리드의 행 선택 및 페이징 기능을 활성화합니다.
또한, 첫 번째 열의 요약 기능과 각 열의 필터링, 정렬, 편집, 이동 및 크기 조정 기능을 사용할 수 있습니다.

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData" childDataKey="Employees"
               [autoGenerate]="false" [rowSelectable]="true" [paging]="true" [allowFiltering]="true">
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"
                [hasSummary]="true"></igx-column>
    <igx-column field="HireDate" dataType="date" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
</igx-tree-grid>
```

마지막으로 [`showToolbar`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#showtoolbar), [`columnHiding`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#columnhiding), [`columnPinning`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#columnpinning), [`exportExcel`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#exportexcel) 및 [`exportCsv`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#exportcsv) 속성을 각각 사용하여 열 숨기기, 열 고정 및 내보내기 기능이 포함된 트리 그리드의 도구 모음을 활성화합니다.

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData" childDataKey="Employees"
               [autoGenerate]="false" [rowSelectable]="true" [paging]="true" [allowFiltering]="true"
               [showToolbar]="true" toolbarTitle="Employees" [columnHiding]="true" [columnPinning]="true"
               [exportExcel]="true" [exportCsv]="true" exportExcelText="To Excel" exportCsvText="To CSV">
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="HireDate" dataType="date" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
</igx-tree-grid>
```

섹션에서 이 내용 시작 부분에 있는 코드 결과를 확인할 수 있습니다.

### 기본 키와 외부 키
**기본 키와 외부 키** 옵션을 사용하는 경우에는 모든 데이터 개체에 기본 키와 외부 키가 포함됩니다. 기본 키는 현재 데이터 객체의 고유 식별자이며, 외부 키는 해당 상위 객체의 고유 식별자입니다. 이 경우, 원본 데이터 소스가 포함된 트리 그리드의 [`data`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#data) 속성은 플랫 컬렉션이 됩니다.

다음은 기본 키와 외부 키의 관계를 정의한 플랫 컬렉션을 포함하는 컴포넌트의 예입니다.

```typescript
// treeGridSample.component.ts

@Component({
    ...
})
export class MyComponent implements OnInit {

    public data: any[];

    constructor() { }

    public ngOnInit() {
        // Primary and Foreign keys sample data
        this.data = [
            { ID: 1, ParentID: -1, Name: "Casey Houston", JobTitle: "Vice President", Age: 32 },
            { ID: 2, ParentID: 1, Name: "Gilberto Todd", JobTitle: "Director", Age: 41 },
            { ID: 3, ParentID: 2, Name: "Tanya Bennett", JobTitle: "Director", Age: 29 },
            { ID: 4, ParentID: 2, Name: "Jack Simon", JobTitle: "Software Developer", Age: 33 },
            { ID: 5, ParentID: 8, Name: "Celia Martinez", JobTitle: "Senior Software Developer", Age: 44 },
            { ID: 6, ParentID: -1, Name: "Erma Walsh", JobTitle: "CEO", Age: 52 },
            { ID: 7, ParentID: 2, Name: "Debra Morton", JobTitle: "Associate Software Developer", Age: 35 },
            { ID: 8, ParentID: 10, Name: "Erika Wells", JobTitle: "Software Development Team Lead", Age: 50 },
            { ID: 9, ParentID: 8, Name: "Leslie Hansen", JobTitle: "Associate Software Developer", Age: 28 },
            { ID: 10, ParentID: -1, Name: "Eduardo Ramirez", JobTitle: "Development Manager", Age: 53 }
        ];
    }
}
```

위의 샘플 데이터에서 모든 레코드는 ID, ParentID 및 Name, JobTitle, Age 등의 몇 가지 추가 속성을 가집니다. 앞서 언급했듯이 레코드의 ID는 고유해야 합니다. ParentID에는 상위 노드의 ID가 포함됩니다. 행에 트리 그리드의 행과 일치하지 않는 ParentID가 있는 경우, 이 행은 루트 행임을 의미합니다.

상위-하위 관계는 트리 그리드의 [`기본 키`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#primarykey) and [`외부 키`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#foreignkey) 속성을 사용하여 구성됩니다.

다음은 위의 플랫 컬렉션에 정의된 데이터를 표시하기 위해 트리 그리드를 구성하는 방법을 보여주는 컴포넌트의 템플릿입니다.

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
    [autoGenerate]="false">
    <igx-column field="Name" dataType="string"></igx-column>
    <igx-column field="JobTitle" dataType="string"></igx-column>
    <igx-column field="Age" dataType="number"></igx-column>
</igx-tree-grid>
```

또한, [`rowSelectable`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowselectable) 속성을 사용하여 각 열의 필터링, 정렬, 편집, 이동 및 크기 조정 기능 및 트리 그리드의 행 선택 기능을 활성화합니다.

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
    [autoGenerate]="false" [rowSelectable]="true" [allowFiltering]="true">
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="JobTitle" dataType="string" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
</igx-tree-grid>
```

다음은 최종 결과입니다:


<code-view style="height:450px" 
           data-demos-base-url="{environment:lobDemosBaseUrl}" 
           iframe-src="{environment:lobDemosBaseUrl}/tree-grid/treegrid-primaryforeignkey" >
</code-view>

<div class="divider--half"></div>

### 지속성 및 통합성

**트리 셀**의 인덴트는 필터링, 정렬 및 페이징 등의 다른 트리 그리드 기능과 함께 지속됩니다.

- **sorting**이 열에 적용되면 데이터 행이 수준별로 정렬됩니다. 루트 수준의 행은 해당 하위와 독립적으로 정렬됩니다. 각각의 하위 컬렉션은 각각 독립적으로 정렬됩니다.
- 첫 번째 열([`visibleIndex`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#visibleindex)가 0인 열)은 항상 트리 열입니다.
- 열 고정, 열 숨기기 및 열 이동 등의 작업 후에 0의 [`visibleIndex`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#visibleindex)로 끝나는 열이 트리 열이 됩니다.
- 내보내기를 한 Excel 워크시트는 트리 그리드 자체에 그룹화될 때 레코드를 그룹화하여 계층에 반영합니다. 모든 레코드의 전개 상태도 지속되고 반영됩니다.
- CSV로 내보내기를 할 때 수준 및 전개 상태는 무시되며 모든 데이터는 플랫으로 내보내기가 됩니다.

<div class="divider--half"></div>

### 키보드 탐색

키보드 탐색은 트리 그리드에서 기본적으로 사용할 수 있으며 최종 사용자를 위해 가능한 많은 기능과 시나리오를 포함하도록 하고 있습니다. 특정 셀에 초점을 맞추고 다음 키 조합 중 하나를 누른 경우 설명된 동작이 실행됩니다:

 - `위 화살표` - 한 셀 위로 이동(줄 바꿈 없음);
 - `아래 화살표` - 한 셀 아래로 이동(줄 바꿈 없음);
 - `왼쪽 화살표` - 한 셀 왼쪽으로 이동(라인 간에 줄 바꿈 없음);
 - `오른쪽 화살표` - 한 셀 오른쪽으로 이동(라인 간에 줄 바꿈 없음);
 - `Ctrl + 위 화살표` - 현재 열의 첫 번째 셀로 이동;
 - `Ctrl + 아래 화살표` - 현재 열의 마지막 셀로 이동;
 - `Ctrl + 왼쪽 화살표` -  행의 가장 왼쪽 셀로 이동;
 - `Home` - 행의 가장 왼쪽 셀로 이동;
 - `Ctrl + Home` - 그리드의 왼쪽 상단 셀로 이동;
 - `Ctrl + 오른쪽 화살표` -  행의 가장 오른쪽 셀로 이동;
 - `End` - 행의 가장 오른쪽 셀로 이동;
 - `Ctrl + End` - 그리드의 오른쪽 하단 셀로 이동;
 - `Page Up` - 한 페이지(뷰 포트) 위로 스크롤;
 - `Page Down` -  한 페이지(뷰 포트) 아래로 스크롤;
 - `Enter` - 편집 모드로 들어감;
 - `F2` - 편집 모드로 들어감;
 - `Esc` - 편집 모드를 종료함;
 - `Tab` - 순차적으로 포커스를 행의 다음 셀 위로 이동하고, 마지막 셀에 도달하면 다음 행으로 이동합니다; 셀이 편집 모드인 경우에는 행의 다음 편집 가능한 셀로 이동하고, 편집 가능한 가장 오른쪽 셀에서 `CANCEL` 및 `DONE` 버튼으로 이동하고, `DONE` 버튼으로 현재 편집된 행 안의 편집 가능한 가장 왼쪽 셀로 이동합니다. 다음 셀을 편집할 수 없으면 선택해야 합니다;
 - `Shift + Tab` - 순차적으로 행의 이전 셀로 포커스를 이동하고, 첫 번째 셀에 도달하면 포커스를 이전 행으로 이동합니다. 셀이 편집 모드인 경우에는 행의 이전 편집 가능한 셀로 이동하고, 편집 가능한 가장 오른쪽 셀에서 `CANCEL` 및 `DONE` 버튼으로 이동하고, `DONE` 버튼으로 현재 편집된 행 안의 편집 가능한 가장 왼쪽 셀로 이동합니다. 셀을 편집할 수 없으면 선택해야 합니다;
 - `Space` -  행을 선택할 수 있는 경우에는 스페이스 키를 누르면 행 선택을 트리거합니다;
 - `Alt + 왼쪽 화살표` 트리 그리드 행의 위 - 셀은 선택되고 포커스되어지며 선택된 셀 행에 하위가 있으면 행은 접혀집니다;
 - `Alt + 위 화살표` 트리 그리드 행의 위 - 셀은 선택되고 포커스되어지며 선택된 셀 행에 하위가 있으면 행은 접혀집니다;
 - `Alt + 오른쪽 화살표` 트리 그리드 행의 위 - 셀은 선택되고 포커스되어지며 선택된 셀 행에 하위가 있으면 행은 전개됩니다;
 - `Alt + 아래 화살표` 트리 그리드 행의 위 - 셀은 선택되고 포커스되어지며 선택된 셀 행에 하위가 있으면 행은 전개됩니다;
 - 마우스 `휠` -  포커스 요소를 흐리게 합니다;

<div class="divider--half"></div>

### Sizing

See the [Grid Sizing](sizing.md) topic.

## 알려진 제한 사항

|제한 사항|설명|
|--- |--- |
|템플리트 트리 셀|트리 셀을 템플릿으로 만들 때 셀의 경계 외부에있는 내용은 오버레이에 배치되지 않으면 표시되지 않습니다.|
|Group By|Group By 기능은 트리 그리드에 고유하기 때문에 지원되지 않습니다.|

> [!NOTE]
> `igxTreeGrid` uses `igxForOf` directive internally hence all `igxForOf` limitations are valid for `igxTreeGrid`. For more details see [igxForOf Known Issues](../for-of.html#known-limitations) section.

<div class="divider--half"></div>

## API 참조

<div class="divider--half"></div>

* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxTreeGridCellComponent]({environment:angularApiUrl}/classes/igxtreegridcellcomponent.html)
* [IgxTreeGridRow]({environment:angularApiUrl}/classes/igxtreegridrow.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent 스타일]({environment:sassApiUrl}/#function-igx-grid-theme)
* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [IgxBaseTransactionService]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)


## 추가 리소스

<div class="divider--half"></div>

* [Grid Sizing](sizing.md)
* [데이터 그리드](../grid/grid.md)
* [행 편집](row-editing.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
