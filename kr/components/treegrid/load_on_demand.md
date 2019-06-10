---
title: 트리 그리드 로드 온디맨드 - 네이티브 Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Tree Grid provides the necessary tools to load child data on demand when a parent row is expanded. That way the volume of data would be greatly reduced and can be retrieved only when the user needs it.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular High Performance Tree Grid, Angular High Performance Tree Table, Tree Grid, Tree Table
_language: kr
---

### 트리 그리드 로드 온디맨드

Ignite UI for Angular [`IgxTreeGrid`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)는 사용자가 가능한 빨리 볼 수 있도록 서버에서 불러오는 데 필요한 최소한의 데이터 양을 필요로 하는 방식으로 렌더링할 수 있습니다. 그 후, 사용자가 행을 확장한 후에만 특정 상위 행에 대한 하위가 로딩됩니다. 로드 온디맨드라고 하는 이 메커니즘은 모든 원격 데이터와 작동하도록 쉽게 설정할 수 있습니다.

#### 데모

<div class="sample-container loading" style="height:450px">
    <iframe id="tree-grid-lod-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-load-on-demand' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-lod-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>

### 사용 방법

로드 온디맨드 기능은 [`기본 키와 외부 키`](tree_grid.md#primary-and-foreign-keys) 또는 [`하위 컬렉션`](tree_grid.md#child-collection)과 같은 2가지 유형의 Tree Grid 데이터 소스와 호환됩니다. 트리 그리드에 루트 수준 데이터를 로딩하고 데이터 소스 유형 중 하나에 필요한 키를 지정하기만 하면 됩니다. 사용자가 행을 확장할 때 하위 행을 로딩하기 위해 Tree Grid가 콜백 입력 속성인 [`loadChildrenOnDemand`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#loadchildrenondemand)를 제공합니다.

```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
        [loadChildrenOnDemand]="loadChildren">
        ...
</igx-tree-grid>
```

[`loadChildrenOnDemand`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#loadchildrenondemand) loadChildrenOnDemand 콜백은 두 개의 매개 변수를 제공합니다:

- parentID - 확장 중인 상위 행의 ID입니다.
- done - 서버에서 검색될 경우, 하위와 함께 호출해야 콜백입니다. 

```typescript
public loadChildren = (parentID: any, done: (children: any[]) => void) => {
    this.dataService.getData(parentID, (children) => done(children));
}
```

사용자가 확장 아이콘을 클릭하면 로딩 인디케이터로 바뀝니다. `done` 콜백이 호출되면 로딩 인디케이터가 사라지고 하위가 로딩됩니다. 트리 그리드는 기본 데이터 소스에 하위를 추가하고 필요한 키를 자동으로 채웁니다. 

확장되기 전에 행에 하위가 있는지 정보를 제공하는 방법이 있는 경우, [`hasChildrenKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#haschildrenkey) 입력 속성을 사용할 수 있습니다. 이렇게 하면 확장 인디케이터를 표시할지를 나타내는 데이터 객체에서 불 속성을 제공할 수 있습니다.

```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
        [loadChildrenOnDemand]="loadChildren" hasChildrenKey="hasEmployees">
        ...
</igx-tree-grid>
```

[`hasChildrenKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#haschildrenkey) 속성을 설정할 필요는 없습니다. 제공하지 않는 경우, 각 행에 대해 확장 인디케이터가 표시됩니다. 하위가 없는 행을 확장한 후에도 정의되지 않거나 비어 있는 배열로 `done` 콜백을 호출해야 합니다. 이 경우, 로딩 인디케이터가 사라진 후 확장 인디케이터는 절대로 표시되지 않습니다.

사용자 로딩 인디케이터를 제공하려면 ng-template을 생성하고 `igxRowLoadingIndicator` 지시문으로 표시할 수 있습니다. 다음 코드 조각은 이러한 사용자 템플릿을 정의하는 방법을 보여줍니다:

```html
<igx-tree-grid ...>

    ...

    <ng-template igxRowLoadingIndicator>
        <igx-icon fontSet="material">loop</igx-icon>
    </ng-template>
</igx-tree-grid>
```

### API 참조

<div class="divider--half"></div>

* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxGridComponent 스타일]({environment:sassApiUrl}/#function-igx-grid-theme)

### 추가 리소스

<div class="divider--half"></div>

* [트리 그리드 개요](tree_grid.md)
* [트리 그리드 가상화 및 성능](virtualization.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
