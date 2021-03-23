@@if (igxName === 'IgxGrid') {
---
title: Angular Grid search | search data | Ignite UI for Angular | Infragistics 
_description: Learn how to perform grid seach with the Ignite Angular Material table using rich API. It also allows instant content search in the virtualized data of the Grid
_keywords: Content search, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid search | search data | Ignite UI for Angular | Infragistics
_description: Learn how to perform grid seach with the Ignite Angular Material table using rich API. It also allows instant content search in the virtualized data of the Grid
_keywords: Content search, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid search | search data | Ignite UI for Angular | Infragistics
_description: Learn how to perform grid seach with the Ignite Angular Material table using rich API. It also allows instant content search in the virtualized data of the Grid
_keywords: Content search, ignite ui for angular, infragistics
---
}

### @@igComponent Searching through virtualized content

While browsers natively provide content search functionality, most of the time the @@igComponent virtualizes its columns and rows that are out of view. In these cases, the native grid search is unable to search data in the virtualized cells, since they are not part of the DOM. We have extended the Ignite UI for Angular Material table-based grid with a **search API** that allows you to search through the **virtualized content** of the @@igComponent.

#### 데모

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-search-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-search-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-search-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="treegrid-search-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-search' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-search-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<!-- TODO -->
}

### 사용 방법

#### 그리드 설정
그리드를 작성하고 데이터를 바인딩하는 것으로 시작합니다. 사용할 컴포넌트에 사용자 스타일도 추가합니다!

@@if (igxName === 'IgxGrid') {
```html
<!--searchgrid.component.html-->

<igx-grid #grid1 id="grid1" [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column [field]="'IndustrySector'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'IndustryGroup'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'SectorType'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'KRD'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'MarketNotion'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'Date'" dataType="date" [sortable]="true"></igx-column>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<!--searchgrid.component.html-->

<igx-tree-grid #treeGrid1 [data]="data" [autoGenerate]="false" primaryKey="ID" foreignKey="ParentID" [allowFiltering]="true">
    <igx-column [field]="'Name'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'ID'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'Title'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Age'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'HireDate'" dataType="date" [sortable]="true"></igx-column>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
<!-- TODO -->
}

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
```css
/* searchgrid.component.css */

.grid__wrapper {
    margin: 15px;
}

.offset {
    margin-bottom: 15px;
}

.resultsText {
    font-size: 0.875rem;
}

.chips {
    margin-left: 5px;
}

.searchButtons {
    margin-left: 5px;
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
<!-- TODO -->
}

이제 @@igComponent의 검색 API를 구성합니다! 현재 검색된 텍스트를 저장하고 검색에서 대/소문자를 구분할지 여부에 사용할 수 있는 몇 가지 속성을 작성할 수 있습니다.

```typescript
// searchgrid.component.ts

public searchText: string = "";
public caseSensitive: boolean = false;
public exactMatch: boolean = false;
```

#### 검색 입력 상자

이제 검색 입력을 작성합니다! **searchText**를 ngModel로서 새로 생성된 입력에 바인딩하고 ngModelChange 이벤트에 서브스크라이브시킴으로써 사용자가 모든 **searchText** 변경을 검출할 수 있습니다. 이렇게 하면 @@igComponent의 [`findNext`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findnext) 및 [`findPrev`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findprev) 메소드를 사용하여 **searchText**의 모든 항목을 강조 표시하고 다음/이전 항목(호출한 메소드에 따라 다름)으로 스크롤할 수 있습니다.

[`findNext`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findnext) 및 [`findPrev`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findprev) 메소드는 모두 3개의 인수가 있습니다:
- `text`: **string**(검색 텍스트)
- (옵션)`caseSensitive`: **boolean**(대소문자의 구분 여부, 기본값은 false임)
- (옵션)`exactMatch`: **boolean**(검색이 정확히 일치하는지 여부, 기본값은 false임)

정확한 일치로 검색할 때 검색 API는 대소문자 구분을 고려하여 **searchText**와 완전히 일치하는 셀 값만 결과로 강조 표시합니다. 예를 들면, 문자열 'software' 및 'Software'는 대소문자 구분을 무시한 것과 정확히 일치합니다.

위의 메소드는 **number** 값(@@igComponent에 주어진 문자열이 포함된 횟수)을 반환합니다.

```html
<!--searchgrid.component.html-->

<input #search1 id="search1" placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="@@igObjectRef.findNext(searchText, caseSensitive, exactMatch)" />
```

#### 결과 수 표시
총 결과 수와 함께 현재 검색 위치를 표시합니다! 그리드의 `lastSearchInfo` 속성을 사용하여 이것을 실행할 수 있습니다. 이 속성은 **find** 메소드를 사용할 때 자동으로 업데이트됩니다.

- `@@igObjectRef.lastSearchInfo.matchInfoCache.length` 값은 총 결과 수입니다.
- `@@igObjectRef.lastSearchInfo.activeMatchIndex` 값은 현재 검색(일치)의 인덱스 위치입니다.

```html
<!--searchgrid.component.html-->

<div class="resultsText" *ngIf="@@igObjectRef.lastSearchInfo">
    <span *ngIf="@@igObjectRef.lastSearchInfo.matchInfoCache.length > 0">
        {{ @@igObjectRef.lastSearchInfo.activeMatchIndex + 1 }} of {{ @@igObjectRef.lastSearchInfo.matchInfoCache.length }} results
    </span>
    <span *ngIf="@@igObjectRef.lastSearchInfo.matchInfoCache.length == 0">
        No results
    </span>
</div>
```

#### 검색 버튼 추가

버튼의 각 클릭 이벤트 핸들러 내에서 [`findNext`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findnext) 및 [`findPrev`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findprev) 메소드를 호출하여 검색 결과를 자유롭게 검색하고 탐색하기 위해 두 개의 버튼을 작성합니다.

```html
<!--searchgrid.component.html-->

<div class="searchButtons">
    <input type="button" value="Previous" (click)="@@igObjectRef.findPrev(searchText, caseSensitive, exactMatch)" />
    <input type="button" value="Next" (click)="@@igObjectRef.findNext(searchText, caseSensitive, exactMatch)" />
</div>
```

#### 키보드 검색 추가

키보드의 화살표 키와 Enter 키로 사용자가 결과를 탐색할 수도 있습니다. preventDefault() 메소드의 기본 캐럿 이동을 방지하는 검색 입력의 **keydown** 이벤트를 처리하고 사용자가 누른 키에 따라 [`findNext`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findnext)/[`findPrev`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findprev) 메소드를 호출합니다.

```html
<!--searchgrid.component.html-->

<input #search1 id="search1" placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="@@igObjectRef.findNext(searchText, caseSensitive, exactMatch)"
       (keydown)="searchKeyDown($event)" />
```

```typescript
// searchgrid.component.ts

public searchKeyDown(ev) {
    if (ev.key === "Enter" || ev.key === "ArrowDown" || ev.key === "ArrowRight") {
        ev.preventDefault();
        this.@@igObjectRef.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    } else if (ev.key === "ArrowUp" || ev.key === "ArrowLeft") {
        ev.preventDefault();
        this.@@igObjectRef.findPrev(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
```

#### 대소문자 구분 및 정확한 일치

사용자가 검색에서 대소문자의 구분 여부를 선택하고/ 또는 정확히 일치하는지 여부를 선택할 수 있습니다. 이를 위해 **caseSensitive** 및 **exactMatch** 속성을 입력 **checked** 속성에 각각 바인딩하고 간단한 체크 박스 입력을 사용해 속성을 전환하고 **change** 이벤트를 처리하며 [`findNext`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findnext) 메소드를 호출합니다.

```html
<!--searchgrid.component.html-->

<span>Case sensitive</span>
<input type="checkbox" [checked]="caseSensitive" (change)="updateSearch()">

<span>Exact match</span>
<input type="checkbox" [checked]="exactMatch" (change)="updateExactSearch()">
```

```typescript
// searchgrid.component.ts

public updateSearch() {
    this.caseSensitive = !this.caseSensitive;
    this.@@igObjectRef.findNext(this.searchText, this.caseSensitive, this.exactMatch);
}

public updateExactSearch() {
    this.exactMatch = !this.exactMatch;
    this.@@igObjectRef.findNext(this.searchText, this.caseSensitive, this.exactMatch);
}
```

#### 지속성

@@igComponent를 필터링하고 정렬하거나 레코드를 추가하고 제거하려는 경우 어떻게 해야 합니까? 이러한 처리가 끝나면 현재 검색의 강조 표시가 자동으로 업데이트되고 **searchText**와 일치하는 텍스트가 유지됩니다! 또한, 검색이 페이징으로 작동하며 @@igComponent의 [`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) 속성 변경 시에도 강조 표시가 유지됩니다.

#### 아이콘 추가

다른 컴포넌트 중 일부를 사용하여 사용자 인터페이스를 작성하고 전체 검색 줄의 전반적인 디자인을 향상시킬 수 있습니다! 검색 입력의 왼쪽에는 멋진 검색 또는 삭제 아이콘, 오른쪽에는 소재 디자인 아이콘 및 리플 스타일의 버튼과 결합된 검색 옵션 및 탐색을 표시합니다. 입력 그룹 내의 컴포넌트를 래핑하여 보다 세련된 디자인으로 할 수 있습니다.
이를 위해 [**IgxInputGroup**](../input-group.md), [**IgxIcon**](../icon.md),  [**IgxRipple**](../ripple.md), [**IgxButton**](../button.md) 및 [**IgxChip**](../chip.md) 모듈을 사용합니다.

```typescript
// app.module.ts

...
import {
    @@igxNameModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxRippleModule,
    IgxButtonModule,
    IgxChipsModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxInputGroupModule, IgxIconModule, IgxRippleModule, IgxButtonModule, IgxChipsModule],
})
export class AppModule {}
```

마지막으로 템플릿을 새로운 컴포넌트로 업데이트합니다!

[**IgxInputGroup**](../input-group.md) 내의 모든 컴포넌트를 래핑합니다. 왼쪽에서 검색과 삭제/지우기 아이콘을 전환합니다(검색 입력이 비었는지 여부에 따라). 중앙에 입력 위치를 지정합니다. 또한, 삭제 아이콘을 클릭할 때마다 **searchText**를 업데이트하고 @@igComponent의 [`clearSearch`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#clearsearch) 메소드를 호출하여 강조 표시를 지웁니다.

```html
<!--searchgrid.component.html-->

<igx-input-group type="search" class="offset">
    <igx-prefix>
        <igx-icon *ngIf="searchText.length == 0">search</igx-icon>
        <igx-icon *ngIf="searchText.length > 0" (click)="clearSearch()">clear</igx-icon>
    </igx-prefix>

    <input #search1 id="search1" igxInput placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="@@igObjectRef.findNext(searchText, caseSensitive, exactMatch)"
        (keydown)="searchKeyDown($event)" />

    <igx-suffix *ngIf="searchText.length > 0">
        ...
    </igx-suffix>
</igx-input-group>
```

```typescript
// searchgrid.component.ts

public clearSearch() {
    this.searchText = "";
    this.@@igObjectRef.clearSearch();
}
```

오른쪽의 입력 그룹에 다음과 같은 목적을 가진 세 가지 개별 컨테이너를 작성합니다:
- 검색 결과를 표시합니다.

```html
<!--searchgrid.component.html-->

<igx-suffix *ngIf="searchText.length > 0">
    <div class="resultsText" *ngIf="@@igObjectRef.lastSearchInfo">
        <span *ngIf="@@igObjectRef.lastSearchInfo.matchInfoCache.length > 0">
            {{ @@igObjectRef.lastSearchInfo.activeMatchIndex + 1 }} of {{ @@igObjectRef.lastSearchInfo.matchInfoCache.length }} results
        </span>
        <span *ngIf="@@igObjectRef.lastSearchInfo.matchInfoCache.length == 0">
            No results
        </span>
    </div>
    ...
```
- **caseSensitive** 및 **exactMatch** 속성을 토글하는 두 개의 칩을 표시합니다. 이 속성을 기반으로 색상을 변경하는 두 개의 세련된 칩을 가진 체크 박스로 교체했습니다. 칩을 클릭할 때마다 클릭한 칩에 따라 해당 핸들러인 - **updateSearch** 또는 **updateExactSearch**가 호출됩니다.

```html
<!--searchgrid.component.html-->

    ...
    <div class="chips">
        <igx-chips-area>
            <igx-chip (click)="updateSearch()" [color]="caseSensitive? 'lightgrey' : 'rgba(0, 0, 0, .04)'">
                <span>Case Sensitive</span>
            </igx-chip>
            <igx-chip (click)="updateExactSearch()" [color]="exactMatch? 'lightgrey' : 'rgba(0, 0, 0, .04)'">
                <span>Exact Match</span>
            </igx-chip>
        </igx-chips-area>
    </div>
    ...
```
- 검색 탐색 버튼의 경우 재료 아이콘을 사용해 입력을 리플 스타일 버튼으로 변환했습니다. 클릭 이벤트의 핸들러는 그대로 유지되며 [`findNext`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findnext)/[`findPrev`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findprev) 메소드를 호출합니다.

```html
<!--searchgrid.component.html-->

    ...
    <div class="searchButtons">
        <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="@@igObjectRef.findPrev(searchText, caseSensitive, exactMatch)">
            <igx-icon fontSet="material">navigate_before</igx-icon>
        </button>
        <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="@@igObjectRef.findNext(searchText, caseSensitive, exactMatch)">
            <igx-icon fontSet="material">navigate_next</igx-icon>
        </button>
    </div>
</igx-suffix>
```

### 알려진 제한 사항

|제한 사항|설명|
|--- |--- |
|템플릿으로 셀 검색|검색 기능은 모든 셀 템플릿을 div 요소 및 셀 값에서 검색된 텍스트를 강조 표시하는 범위를 바꿉니다. 즉, 템플릿에 여러 요소 또는 이벤트가 포함된 복잡한 템플릿이 있는 경우, 예기치 않은 동작이 발생할 수 있습니다. 이러한 템플릿을 가진 열이 있는 경우, 열 형식과 같은 다른 방법을 사용하거나 열의 [`searchable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#searchable) 속성을 false로 설정해야 합니다.|
|원격 가상화| 원격 가상화를 사용할 경우 검색이 제대로 작동하지 않습니다|
|컷오프 텍스트가 있는 셀| 셀의 텍스트가 너무 커서 텍스트에 맞지 않을 경우, 찾고 있는 텍스트가 생략되어 컷오프된 경우, 셀로 스크롤하여 매치 카운트에 포함시켜도 아무 것도 강조 표시되지 않습니다 |

### API 참조

검색 결과의 탐색은 @@igComponent에 사용자 검색 줄 기능을 추가하여 구현했습니다. 또한 아이콘, 칩, 입력 등의 Ignite UI for Angular 컴포넌트를 추가로 사용했습니다. 검색 API는 다음과 같습니다.

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) 메소드:
-   [findNext]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findnext)
-   [findPrev]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findprev)
-   [clearSearch]({environment:angularApiUrl}/classes/@@igTypeDoc.html#clearsearch)
-   [refreshSearch]({environment:angularApiUrl}/classes/@@igTypeDoc.html#refreshsearch)

[`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html) 메소드:
-   [highlightText]({environment:angularApiUrl}/classes/igxgridcellcomponent.html#highlighttext)
-   [clearHighlight]({environment:angularApiUrl}/classes/igxgridcellcomponent.html#clearhighlight)

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) 속성:
-   [searchable]({environment:angularApiUrl}/classes/igxcolumncomponent.html#searchable)

[ISearchInfo]({environment:angularApiUrl}/interfaces/isearchinfo.html)

사용된 상대 API가 있는 추가 컴포넌트 및/또는 지시문:

* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)
* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxChipComponent]({environment:angularApiUrl}/classes/igxchipcomponent.html)

스타일:

* [@@igxNameComponent 스타일]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxInputGroupComponent 스타일]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)
* [IgxIconComponent 스타일]({environment:sassApiUrl}/index.html#function-igx-icon-theme)
* [IgxRippleDirective 스타일]({environment:sassApiUrl}/index.html#function-igx-ripple-theme)
* [IgxButtonDirective 스타일]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [IgxChipComponent 스타일]({environment:sassApiUrl}/index.html#function-igx-chip-theme)

### 추가 리소스
<div class="divider--half"></div>

* [@@igComponent 개요](@@igMainTopic.md)
* [가상화 및 성능](virtualization.md)
* [필터링](filtering.md)
* [페이징](paging.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 이동](column-moving.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column-resizing.md)
* [선택](selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
