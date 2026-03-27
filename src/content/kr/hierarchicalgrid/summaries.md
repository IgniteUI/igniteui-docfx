---
title: Angular Hierarchical Grid Summaries| Group Footer | Ignite UI for Angular | Infragistics
_description: Configure Аngular grid summaries in the group footer of the column and use the option to set custom angular template in the Ignite UI for Angular UI
_keywords: angular grid summaries, ignite ui for angular, infragistics
---


### Hierarchical Grid Summaries Overview

The Angular UI grid in Ignite UI for Angular has a **summaries** feature that functions on a per-column level as group footer. Angular grid summaries is powerful feature which enables the user to see column information in a separate container with a predefined set of default summary items, depending on the type of data within the column or by implementing a custom angular template in the Hierarchical Grid.

#### 데모




  
<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-summary/" >
</code-view>



<div class="divider--half"></div>

> [!NOTE]
> 열 요약은 **모든 열 값의 함수**이지만 필터링이 적용된 경우에는 열 요약은 **필터링된 결과 값의 함수**가 됩니다

**Ignite UI for Angular에서 Hierarchical Grid summaries**을 열 단위 수준으로 활성화하고 필요한 열에 대해서만 활성화할 수 있습니다. Hierarchical Grid 요약은 열의 데이터 유형에 따라 사전 정의된 기본 요약 세트를 제공하므로 시간을 절약할 수 있습니다.


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

**[`hasSummary`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#hassummary) 속성을 `true`로 설정하면 Hierarchical Grid 요약**이 열 단위로 활성화됩니다. 또한, 각 열의 요약은 열 데이터 형식에 따라 해결되는 것에 유의하십시오. `igx-hierarchical-grid`에서 기본 열 데이터 유형은 `string`이므로 `number` 또는 `date` 별 요약을 원하는 경우, [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) 속성을 `number` 또는 `date`로 설정해야 합니다.



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

특정 열 또는 열 목록에서 요약을 활성화/비활성화하는 또 다른 방법은 **igx-hierarchical-grid**의 공개 메소드 [`enableSummaries`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#enablesummaries)/[`disableSummaries`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#disablesummaries)를 사용하는 것입니다.



```html
<igx-hierarchical-grid #hierarchicalGrid [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)" >
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
</igx-hierarchical-grid>
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

이러한 함수가 요구 사항을 충족시키지 못하면 특정 열에 대한 사용자 요약을 제공할 수 있습니다. 이를 실행하려면 열 데이터 유형 및 필요에 따라 기본 클래스인 [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html), [`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html) 또는 [`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html) 중에서 하나를 무효화해야 합니다. 이 방법으로 기존 함수를 다시 정의하거나 새로운 함수를 추가할 수 있습니다. [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html) 클래스는 [`count`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#count) 메소드에 대해서만 기본 실행을 제공합니다. [`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)는 [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html)를 확장하고 [`min`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#min), [`max`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#max), [`sum`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#sum) 및 [`average`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#average)의 구현을 제공합니다. [`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html)는 [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html)를 확장하며 [`earliest`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html#earliest) 및 [`latest`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html#latest)를 제공합니다.



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

위의 코드에서 메소드 [`operate`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#operate)는 인터페이스인 [`IgxSummaryResult`]({environment:angularApiUrl}/interfaces/igxsummaryresult.html)의 목록을 반환하는 것을 볼 수 있습니다.
```typescript
interface IgxSummaryResult {
    key: string;
    label: string;
    summaryResult: any;
}
```

> [!NOTE]
> 요약 행 높이를 올바르게 계산하기 위해 Hierarchical Grid의 [`operate`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#operate) 메소드에서 데이터가 비어있는 경우에도 항상 적절한 길이의 [`IgxSummaryResult`]({environment:angularApiUrl}/interfaces/igxsummaryresult.html) 배열을 반환해야 합니다.



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


#### Custom summaries, which access all Hierarchical Grid data
 Now you can access all grid data inside the custom column summary. Two additional optional parameters are introduced in the IgxSummaryOperand `operate` method.
As you can see in the code snippet below the operate method has the following three parameters:
- columnData - gives you an array that contains the values only for the current column
- allGridData - gives you the whole grid data source
- fieldName - current column field

```typescript
class MySummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }
    operate(columnData: any[], allGridData = [], fieldName?): IgxSummaryResult[] {
        const result = super.operate(allData.map(r => r[fieldName]));
        result.push({ key: 'test', label: 'Total Discontinued', summaryResult: allData.filter((rec) => rec.Discontinued).length });
        return result;
    }
}
```




  
<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-allData-summary/" >
</code-view>





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

* [IgxHierarchicalGridComponent API]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
* [IgxHierarchicalGridComponent 스타일]({environment:sassApiUrl}/themes#function-grid-theme)
* [IgxHierarchicalGridSummaries 스타일]({environment:sassApiUrl}/themes#function-grid-summary-theme)
* [IgxSummaryOperand]({environment:angularApiUrl}/classes/igxsummaryoperand.html)
* [IgxNumberSummaryOperand]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)
* [IgxDateSummaryOperand]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html)
* [IgxColumnGroupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

### 추가 리소스
<div class="divider--half"></div>

* [Hierarchical Grid 개요](hierarchical-grid.md)
* [가상화 및 성능](virtualization.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [열 이동](column-moving.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column-resizing.md)
* [선택](selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
