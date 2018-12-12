---
title: 요약 컴포넌트- 네이티브 Angular| Ignite UI for Angular
_description: Ignite UI for Angular 요약 컴포넌트는 열의 데이터 유형에 따라 사전 정의된 기본 요약 항목 세트를 가진 별도의 컨테이너에서 열 정보를 표시할 수 있습니다.
_keywords: Ignite UI for Angular, UI 컨트롤, Angular 위젯, 웹 위젯, UI 위젯, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트 라이브러리, 네이티브 Angular 컴포넌트, Angular 그리드, Angular 데이터 그리드 컴포넌트, Angular 데이터 그리드 컨트롤, Angular 그리드 컴포넌트, Angular 그리드 컨트롤, Angular 고성능 그리드, 요약, 개요
_language: kr
---

### 그리드 요약

Ignite UI for Angular 그리드 컴포넌트에는 열 단위 수준에서 작동하는 **summaries** 기능이 있습니다.

#### 데모

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-summary-sample-iframe" src='{environment:demosBaseUrl}/grid-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> 열 요약은 **모든 열 값의 함수**이지만 필터링이 적용된 경우에는 열 요약은 **필터링된 결과 값의 함수**가 됩니다

사용자는 열의 데이터 유형에 따라 사전 정의된 기본 요약 항목 세트를 가진 별도의 컨테이너에서 열 정보를 표시할 수 있습니다. Ignite UI for Angular에서 **Grid summaries**을 열 단위 수준으로 활성화하고 필요한 열에 대해서만 활성화할 수 있습니다. 그리드 요약은 열의 데이터 유형에 따라 사전 정의된 기본 요약 세트를 제공하므로 시간을 절약할 수 있습니다.


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

**열 요약**은 [`hasSummary`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#hassummary) 속성을 `true`로 설정하여 열 단위로 활성화됩니다. 또한, 각 열의 요약은 열 데이터 형식에 따라 해결되는 것에 유의하십시오. `igx-grid`에서 기본 열 데이터 유형은 `string`이므로 `number` 또는 `date`별 요약을 원하는 경우 [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) 속성을 `number` 또는 `date`로 설정해야 합니다.

```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColumn($event)" >
    <igx-column field="ProductID" header="Product ID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</igx-grid>
```

특정 열 또는 열 목록에서 요약을 활성화/비활성화하는 또 다른 방법은 **igx-grid**의 공개 메소드 [`enableSummaries`]({environment:angularApiUrl}/classes/igxgridcomponent.html#enablesummaries)/[`disableSummaries`]({environment:angularApiUrl}/classes/igxgridcomponent.html#disablesummaries)를 사용하는 것입니다.

```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColumn($event)" >
    <igx-column field="ProductID" header="Product ID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="false">
    </igx-column>
</igx-grid>
<button (click)="enableSummary()">Enable Summary</button>
<button (click)="disableSummary()">Disable Summary </button>
```
```typescript
public enableSummary() {
    this.grid1.enableSummaries([{fieldName: "ReorderLevel", customSummary: this.mySummary},
    {fieldName: "ProductID"}]);
  }
public disableSummary() {
    this.grid1.disableSummaries("ProductName");
}
```

이러한 함수가 요구 사항을 충족시키지 못하면 특정 열에 대한 사용자 요약을 제공할 수 있습니다. 이를 실행하려면 열 데이터 유형 및 필요에 따라 기본 클래스인 [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html), [`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html) 또는 [`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html) 중에서 하나를 무효화해야 합니다. 이 방법으로 기존 함수를 다시 정의하거나 새로운 함수를 추가할 수 있습니다. [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html) 클래스는 [`count`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#count) 메소드에 대해서만 기본 실행을 제공합니다. [`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)는 [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html)를 확장하고 [`min`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#min), [`max`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#max), [`sum`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#sum) 및 [`average`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#average)의 구현을 제공합니다. [`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html)는 [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html)를 확장하며 [`earliest`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html#earliest) 및 [`latest`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html#latest)를 제공합니다.

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

In the code above you can see that method [`operate`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#operate) returns a list of [`IgxSummaryResult`]({environment:angularApiUrl}/interfaces/igxsummaryresult.html), which is an interface.
```typescript
interface IgxSummaryResult {
    key: string;
    label: string;
    summaryResult: any;
}
```

> [!NOTE]
> In order to calculate the summary row height properly, the grid needs the [`operate`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#operate) method to always return an array of [`IgxSummaryResult`]({environment:angularApiUrl}/interfaces/igxsummaryresult.html) with the proper length even when the data is empty.

이제 `UnitsInStock` 열에 사용자 요약을 추가해 보겠습니다. [`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries) 속성을 아래에서 작성하는 클래스로 설정하면 됩니다.
```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColumn($event)" >
    <igx-column field="ProductID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="UnitsInStock" width="200px" [dataType]="'number'" [hasSummary]="true" [summaries]="mySummary" [sortable]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</igx-grid>
```

```typescript
...
export class GridComponent implements OnInit {

  mySummary = MySummary;

    ....
}
```

### Summaries with Group By

When you have grouped by columns, the grid allows you to change the summary position and calculation mode using the [`summaryCalculationMode`]({environment:angularApiUrl}/classes/igxgridcomponent.html#summarycalculationmode) and [`summaryPosition`]({environment:angularApiUrl}/classes/igxgridcomponent.html#summaryposition) properties.

The available values of the [`summaryCalculationMode`]({environment:angularApiUrl}/classes/igxgridcomponent.html#summarycalculationmode) property are:
 - rootLevelOnly - Summaries are calculate only for the root level.
 - childLevelsOnly - Summaries are calculated only for the child levels.
 - rootAndChildLevels - Summaries are calculated for both root and child levels. This is the default value.

The available values of the [`summaryPosition`]({environment:angularApiUrl}/classes/igxgridcomponent.html#summaryposition) property are:
 - top - The summary row appears before the group by row children.
 - bottom - The summary row appears after the group by row children. This is the default value.

> [!NOTE]
> The [`summaryPosition`]({environment:angularApiUrl}/classes/igxgridcomponent.html#summaryposition) property applies only for the child level summaries. The root level summaries appear always fixed at the bottom of the grid.

#### Demo

<div class="sample-container loading" style="height:720px">
    <iframe id="grid-groupby-summary-iframe" src='{environment:demosBaseUrl}/grid-groupby-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-groupby-summary-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Keyboard Navigation

The summary rows can be navigated with the following keyboard interactions:

- <kbd>UP</kbd> - navigates one cell up
- <kbd>DOWN</kbd> - navigates one cell down
- <kbd>LEFT</kbd> - navigates one cell left
- <kbd>RIGHT</kbd> - navigates one cell right
- <kbd>CTRL</kbd> + <kbd>LEFT</kbd> or <kbd>HOME</kbd> - navigates to the leftmost cell
- <kbd>CTRL</kbd> + <kbd>RIGHT</kbd> or <kbd>END</kbd> - navigates to the rightmost cell
- <kbd>TAB</kbd> - sequentially navigates to the next cell on the row and if the last cell is reached navigates to the next row
- <kbd>SHIFT</kbd> + <kbd>TAB</kbd> - sequentially navigates to the previous cell on the row and if the first cell is reached navigates to the previous row

### API References

* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxGridSummaries Styles]({environment:sassApiUrl}/index.html#function-igx-grid-summary-theme)
* [IgxSummaryOperand]({environment:angularApiUrl}/classes/igxsummaryoperand.html)
* [IgxNumberSummaryOperand]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)
* [IgxDateSummaryOperand]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html)
* [IgxColumnGroupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

### 추가 리소스
<div class="divider--half"></div>

* [그리드 개요](grid.md)
* [가상화 및 성능](grid_virtualization.md)
* [페이징](grid_paging.md)
* [필터링](grid_filtering.md)
* [정렬](grid_sorting.md)
* [열 이동](grid_column_moving.md)
* [열 핀 고정](grid_column_pinning.md)
* [열 크기 조정](grid_column_resizing.md)
* [선택](grid_selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
