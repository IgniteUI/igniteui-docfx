---
title: 트리 그리드 집계- 네이티브 Angular | Ignite UI for Angular
_description: With the Ignite UI for Angular Tree Grid aggregations, see the data grouped and aggregated.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Tree Grid, Angular Tree Grid component, Angular Tree Grid control, Angular High Performance Tree Grid, Summaries, Summary, Aggregate, Aggregations
_language: kr
---

### 트리 그리드 집계
계층 이외의 데이터와 하나 이상의 열을 **그룹화**하고 **집계된 값**으로 상위 행을 채우려는 경우, [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)와 아래의 데모와 같은 사용자 구현을 사용할 수 있습니다.

#### 데모

<div class="sample-container loading" style="height:850px">
    <iframe id="treegrid-finjs-iframe" src='{environment:lobDemosBaseUrl}/treegrid-finjs-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-finjs-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> 이 샘플은 [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)에 포함되지 않은 사용자 논리를 포함하고 있습니다. [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html)의 그룹화 및 요약 기능과 유사하지만 별도의 요약 행 안이 아닌 계산된 데이터가 상위 행 내부에 표시됩니다.

#### 구현

이 샘플에서는 `TreeGridGroupingPipe`라는 파이프 클래스를 작성했는데 이 클래스는 **"Category"**, **"Type"**, **"Contract"** 필드로 표 형식의 데이터를 그룹화합니다. 그 결과는 계층 구조가 새롭게 작성된 **"Categories"** 열에 표시됩니다. 또한, 파이프는 **"Price"**, **"Change"**, **"Change(%)"** 열에 생성된 상위 행의 집계값을 계산합니다. 이 파이프의 작동 방법에 대한 자세한 것은 `tree-grid-grouping.pipe.ts` 파일의 `TreeGridGroupingPipe` 클래스를 참조하십시오. 파이프는 완전히 설정 가능하므로 자신의 프로젝트에서 복사하여 다시 사용할 수 있습니다.

다음은 템플릿에서 파이프를 사용하는 방법의 예입니다:

```html
<igx-tree-grid #grid1 
               [data]="data | treeGridGrouping:groupColumns:aggregations:groupColumnKey:primaryKey:childDataKey"
               [primaryKey]="primaryKey" [childDataKey]="childDataKey">
    <igx-column [field]="groupColumnKey" [width]="'180px'" [sortable]='true' [resizable]='true' [disableHiding]="true"></igx-column>
```

파이프 인수는 다음과 같습니다:
- groupColumns - 계층 생성을 위해 사용된 필드를 포함한 문자열 값의 배열
- aggregations - 집계 함수에 대한 정보를 포함하는 `ITreeGridAggregation` 객체의 배열
- groupColumnKey - 생성된 계층 열의 이름에 대한 문자열 값
- primaryKey - 기본 키 필드의 문자열 값
- childDataKey - 생성된 상위 행의 하위 컬렉션이 저장되는 필드의 문자열 값

```typescript
public groupColumns = ["Category", "Type", "Contract"];
public aggregations: ITreeGridAggregation[] = [
    {
        aggregate: (parent: any, data: any[]) => {
            return data.map((r) => r.Change).reduce((ty, u) => ty + u, 0);
        },
        field: "Change"
    },
    {
        aggregate: (parent: any, data: any[]) => {
            return data.map((r) => r.Price).reduce((ty, u) => ty + u, 0);
        },
        field: "Price"
    },
    {
        aggregate: (parent: any, data: any[]) => {
            return parent.Change / (parent.Price - parent.Change) * 100;
        },
        field: "Change(%)"
    }
];
public primaryKey = "ID";
public childDataKey = "Children";
public groupColumnKey = "Categories";
```

### API 참조

<div class="divider--half"></div>

* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxGridComponent 스타일]({environment:sassApiUrl}/#function-igx-grid-theme)

### 추가 리소스

<div class="divider--half"></div>

* [TreeGrid 개요](tree_grid.md)
* [TreeGrid 요약](summaries.md)
* [그리드 요약](../grid/summaries.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)



