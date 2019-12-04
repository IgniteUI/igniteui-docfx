@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Summaries| Group Footer | Ignite UI for Angular | Infragistics
_description: Configure Аngular grid summaries in the group footer of the column and use the option to set custom angular template in the Ignite UI for angular Material UI
_keywords: angular grid summaries, igniteui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Summaries| Group Footer | Ignite UI for Angular | Infragistics
_description: Configure Аngular grid summaries in the group footer of the column and use the option to set custom angular template in the Ignite UI for angular Material UI
_keywords: angular grid summaries, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Summaries| Group Footer | Ignite UI for Angular | Infragistics
_description: Configure Аngular grid summaries in the group footer of the column and use the option to set custom angular template in the Ignite UI for angular Material UI
_keywords: angular grid summaries, ignite ui for angular, infragistics
---
}

### @@igComponent Summaries Overview

The Angular UI grid in Ignite UI for Angular has a **summaries** feature that functions on a per-column level as group footer. Angular grid summaries is powerful feature which enables the user to see column information in a separate container with a predefined set of default summary items, depending on the type of data within the column or by implementing a custom angular template in the @@igComponent.

#### 데모

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-summary-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:750px">
    <iframe id="treegrid-summary-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
  <div class="sample-container loading" style="height:650px">
    <iframe id="hierarchical-grid-summary-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}

<div class="divider--half"></div>

> [!NOTE]
> 열 요약은 **모든 열 값의 함수**이지만 필터링이 적용된 경우에는 열 요약은 **필터링된 결과 값의 함수**가 됩니다

**Ignite UI for Angular에서 @@igComponent summaries**을 열 단위 수준으로 활성화하고 필요한 열에 대해서만 활성화할 수 있습니다. @@igComponent 요약은 열의 데이터 유형에 따라 사전 정의된 기본 요약 세트를 제공하므로 시간을 절약할 수 있습니다.


`string` 및 `boolean` [`data types`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype)의 경우 다음의 함수를 사용할 수 있습니다:
 - count

`number` 데이터 유형의 경우 다음의 함수를 사용할 수 있습니다:
 - count
 - min
 - max
 - average
 - sum

`date` 데이터 유형의 경우 다음의 함수를 사용할 수 있습니다:
 - count
 - earliest
 - latest

**[`hasSummary`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#hassummary) 속성을 `true`로 설정하면 @@igComponent 요약**이 열 단위로 활성화됩니다. 또한, 각 열의 요약은 열 데이터 형식에 따라 해결되는 것에 유의하십시오. `@@igSelector`에서 기본 열 데이터 유형은 `string`이므로 `number` 또는 `date` 별 요약을 원하는 경우, [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) 속성을 `number` 또는 `date`로 설정해야 합니다.

@@if (igxName !== 'IgxHierarchicalGrid') {
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColumn($event)">
    <igx-column field="ProductID" header="Product ID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</@@igSelector>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
        <igx-column field="Artist" [hasSummary]='true'></igx-column>
        <igx-column field="Photo">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" [hasSummary]='true'></igx-column>
        <igx-column field="Grammy Nominations" [hasSummary]='true' [dataType]="'number'" [summaries]="mySummary"></igx-column>
        <igx-column field="Grammy Awards" [hasSummary]='true' [dataType]="'number'"></igx-column>
        ...
    </igx-hierarchical-grid>

```
}
특정 열 또는 열 목록에서 요약을 활성화/비활성화하는 또 다른 방법은 **@@igSelector**의 공개 메소드 [`enableSummaries`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#enablesummaries)/[`disableSummaries`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#disablesummaries)를 사용하는 것입니다.

@@if (igxName !== 'IgxHierarchicalGrid') {
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColumn($event)" >
    <igx-column field="ProductID" header="Product ID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="false">
    </igx-column>
</@@igSelector>
<button (click)="enableSummary()">Enable Summary</button>
<button (click)="disableSummary()">Disable Summary </button>
```
```typescript
public enableSummary() {
    this.grid1.enableSummaries([
        {fieldName: "ReorderLevel", customSummary: this.mySummary},
        {fieldName: "ProductID"}
    ]);
}
public disableSummary() {
    this.grid1.disableSummaries("ProductName");
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<@@igSelector #hierarchicalGrid [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColumn($event)" >
  <igx-column field="Artist" [hasSummary]='true'></igx-column>
        <igx-column field="Photo">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" [hasSummary]='true'></igx-column>
        <igx-column field="Grammy Nominations" [hasSummary]='true' [dataType]="'number'" [summaries]="mySummary"></igx-column>
        <igx-column field="Grammy Awards" [hasSummary]='true' [dataType]="'number'"></igx-column>
</@@igSelector>
<button (click)="enableSummary()">Enable Summary</button>
<button (click)="disableSummary()">Disable Summary </button>
```
```typescript
public enableSummary() {
    this.hierarchicalGrid.enableSummaries([
        {fieldName: "Grammy Nominations", customSummary: this.mySummary},
        {fieldName: "Artist"}
    ]);
}
public disableSummary() {
    this.hierarchicalGrid.disableSummaries("Photo");
}
```
}
이러한 함수가 요구 사항을 충족시키지 못하면 특정 열에 대한 사용자 요약을 제공할 수 있습니다. 이를 실행하려면 열 데이터 유형 및 필요에 따라 기본 클래스인 [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html), [`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html) 또는 [`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html) 중에서 하나를 무효화해야 합니다. 이 방법으로 기존 함수를 다시 정의하거나 새로운 함수를 추가할 수 있습니다. [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html) 클래스는 [`count`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#count) 메소드에 대해서만 기본 실행을 제공합니다. [`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)는 [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html)를 확장하고 [`min`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#min), [`max`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#max), [`sum`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#sum) 및 [`average`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#average)의 구현을 제공합니다. [`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html)는 [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html)를 확장하며 [`earliest`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html#earliest) 및 [`latest`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html#latest)를 제공합니다.

@@if (igxName !== 'IgxHierarchicalGrid') {
```typescript
import { IgxSummaryResult, IgxSummaryOperand, IgxNumberSummaryOperand, IgxDateSummaryOperand } from 'igniteui-angular/grid/grid-summary';

class MySummary extends IgxNumberSummaryOperand {

    constructor() {
        super();
    }

    operate(data?: any[]): IgxSummaryResult[] {
        const result = super.operate(data);
        result.push({
            key: 'test',
            label: 'Test',
            summaryResult: data.filter(rec => rec > 10 && rec < 30).length
        });
        return result;
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
import { IgxRowIslandComponent, IgxHierarchicalGridComponent, IgxNumberSummaryOperand, IgxSummaryResult } from "igniteui-angular";

class MySummary extends IgxNumberSummaryOperand {

    constructor() {
      super();
    }
    public operate(data?: any[]): IgxSummaryResult[] {
      const result = super.operate(data);
      result.push({
        key: "test",
        label: "More than 5",
        summaryResult: data.filter((rec) => rec > 5).length
      });

      return result;
    }
  }
```
}
위의 코드에서 메소드 [`operate`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#operate)는 인터페이스인 [`IgxSummaryResult`]({environment:angularApiUrl}/interfaces/igxsummaryresult.html)의 목록을 반환하는 것을 볼 수 있습니다.
```typescript
interface IgxSummaryResult {
    key: string;
    label: string;
    summaryResult: any;
}
```

> [!NOTE]
> 요약 행 높이를 올바르게 계산하기 위해 @@igComponent의 [`operate`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#operate) 메소드에서 데이터가 비어있는 경우에도 항상 적절한 길이의 [`IgxSummaryResult`]({environment:angularApiUrl}/interfaces/igxsummaryresult.html) 배열을 반환해야 합니다.
@@if (igxName !== 'IgxHierarchicalGrid') {
이제 `UnitsInStock` 열에 사용자 요약을 추가해 보겠습니다. [`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries) 속성을 아래에서 작성하는 클래스로 설정하면 됩니다.
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColumn($event)" >
    <igx-column field="ProductID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="UnitsInStock" width="200px" [dataType]="'number'" [hasSummary]="true" [summaries]="mySummary" [sortable]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</@@igSelector>
```

```typescript
...
export class GridComponent implements OnInit {
    mySummary = MySummary;
    ....
}
```
}

@@if (igxName === 'IgxHierarchicalGrid') {
이제 `GramyNominations` 열에 사용자 요약을 추가해 보겠습니다. [`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries) 속성을 아래에서 작성하는 클래스로 설정하면 됩니다.
```html
 <igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
        <igx-column field="Artist" [hasSummary]='true'></igx-column>
        <igx-column field="Photo">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" [hasSummary]='true'></igx-column>
        <igx-column field="Grammy Nominations" [hasSummary]='true' [dataType]="'number'" [summaries]="mySummary"></igx-column>
        <igx-column field="Grammy Awards" [hasSummary]='true' [dataType]="'number'"></igx-column>
...
</igx-hierarchical-grid>
```

```typescript
...
export class HGridSummarySampleComponent implements OnInit {
    mySummary = MySummary;
    ....
}
```
}

#### Custom summaries, which access all @@igComponent data
 Now you can access all grid data inside the custom column summary. Two additional optional parameters are introduced in the IgxSummaryOperand `operate` method.
As you can see in the code snippet below the operate method has the following tree parameters:
- columnData - gives you an array that contains the values only for the certain column
- gridDataSource - gives you the whole grid data source
- fieldName - current column field

```typescript
class MySummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }
    operate(columnData: any[], allGridData = [], fieldName?): IgxSummaryResult[] {
        const result = super.operate(allData.map(r => r[fieldName]));
        result.push({ key: 'test', label: 'Total Discounted', summaryResult: allData.filter((rec) => rec.Discontinued).length });
        return result;
    }
}
```

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-alldata-summaries-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-alldata-summaries' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-alldata-summaries-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="tree-grid-allData-summary-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-allData-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-allData-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
  <div class="sample-container loading" style="height:650px">
    <iframe id="hierarchical-grid-allData-summary-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-allData-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-allData-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

@@if (igxName === 'IgxGrid') {
### 그룹별 요약

열 단위로 그룹화하면 @@igComponent는 [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) 및 [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) 속성을 사용하여 요약 위치 및 계산 모드를 변경할 수 있습니다.

[`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) 속성의 사용 가능한 값은 다음과 같습니다:
 - rootLevelOnly - 요약은 루트 수준에 대해서만 계산됩니다.
 - childLevelsOnly - 요약은 하위 수준에 대해서만 계산됩니다.
 - rootAndChildLevels - 요약은 루트 및 하위 수준 모두에 대해 계산됩니다. 이것이 기본값입니다.

[`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) 속성의 사용 가능한 값은 다음과 같습니다:
 - top - 요약 행은 그룹화 행의 하위 앞에 표시됩니다.
 - bottom - 요약 행은 그룹화 행의 하위 뒤에 표시됩니다. 이것이 기본값입니다.

> [!NOTE]
> [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) 속성은 하위 수준 요약에만 적용됩니다. 루트 수준 요약은 @@igComponent의 아래에 항상 고정되어 표시됩니다.

#### 데모

<div class="sample-container loading" style="height:720px">
    <iframe id="grid-groupby-summary-iframe" data-src='{environment:demosBaseUrl}/grid/grid-groupby-summary' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-groupby-summary-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
### 하위 요약

@@igComponent는 루트 노드와 각 중첩된 하위 노드 수준에 대해 별도의 요약을 지원합니다. 표시된 요약은 [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) 속성을 사용하여 구성할 수 있습니다. 하위 수준 요약은 [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) 속성을 사용하여 하위 노드 전후에 표시할 수 있습니다.

[`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) 속성의 사용 가능한 값은 다음과 같습니다:
 - rootLevelOnly - 요약은 루트 수준 노드에 대해서만 계산됩니다.
 - childLevelsOnly - 요약은 하위 수준에 대해서만 계산됩니다.
 - rootAndChildLevels - 요약은 루트 및 하위 수준 모두에 대해 계산됩니다. 이것이 기본값입니다.

[`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) 속성의 사용 가능한 값은 다음과 같습니다:
 - top - 요약 행은 하위 행의 목록 앞에 나타납니다.
 - bottom - 요약 행은 하위 행의 목록 뒤에 나타납니다. 이것이 기본값입니다.

> [!NOTE]
> [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) 속성은 하위 수준 요약에만 적용됩니다. 루트 수준 요약은 @@igComponent의 아래에 항상 고정되어 표시됩니다.

<div class="sample-container loading" style="height:720px">
    <iframe id="treegrid-child-summary-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-summary2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-child-summary-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
}
<div class="divider--half"></div>

#### 키보드 탐색

요약 행은 다음과 같은 키보드 조작으로 탐색할 수 있습니다:

- <kbd>UP</kbd> - 한 셀 위로 이동
- <kbd>DOWN</kbd> - 한 셀 아래로 이동
- <kbd>LEFT</kbd> - 한 셀 왼쪽으로 이동
- <kbd>RIGHT</kbd> - 한 셀 오른쪽으로 이동
- <kbd>CTRL</kbd> + <kbd>LEFT</kbd> 또는 <kbd>HOME</kbd> - 가장 왼쪽 셀로 이동
- <kbd>CTRL</kbd> + <kbd>RIGHT</kbd> 또는 <kbd>END</kbd> - 가장 오른쪽 셀로 이동
- <kbd>TAB</kbd> - 행의 다음 셀로 순차적으로 이동하고 마지막 셀에 도달하면 다음 행으로 이동
- <kbd>SHIFT</kbd> + <kbd>TAB</kbd> - 행의 이전 셀로 순차적으로 이동하고 첫 번째 셀에 도달하면 이전 행으로 이동

### API 참조

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent 스타일]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [@@igxNameSummaries 스타일]({environment:sassApiUrl}/index.html#function-igx-grid-summary-theme)
* [IgxSummaryOperand]({environment:angularApiUrl}/classes/igxsummaryoperand.html)
* [IgxNumberSummaryOperand]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)
* [IgxDateSummaryOperand]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html)
* [IgxColumnGroupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

### 추가 리소스
<div class="divider--half"></div>

* [@@igComponent 개요](@@igMainTopic.md)
* [가상화 및 성능](virtualization.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [열 이동](column_moving.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column_resizing.md)
* [선택](selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
