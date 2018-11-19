---
title: 열 숨기기 컴포넌트 - 네이티브 Angular| Ignite UI for Angular
_description: Ignite UI for Angular 열 숨기기 컴포넌트는 데이터 그리드의 기본 UI를 사용하여 사용자가 열을 숨기거나 표시할 수 있습니다.
_keywords: Ignite UI for Angular, UI 컨트롤, Angular 위젯, 웹 위젯, UI 위젯, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트 라이브러리, 네이티브 Angular 컴포넌트, Angular 데이터 그리드 컴포넌트, Angular 데이터 그리드 컨트롤, Angular 그리드 컴포넌트, Angular 그리드 컨트롤, Angular 고성능 그리드, 그리드 열 숨기기, 열 숨기기, Angular 그리드 열 숨기기, Angular 열 숨기기
_language: kr
---

### 그리드 열 숨기기

Ignite UI for Angular 데이터 그리드는 [`IgxColumnHidingComponent`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html)를 제공하여 사용자가 **UI**를 통해 직접 열을 숨기거나 표시할 수 있도록 합니다. 데이터 그리드에 내장된 열 숨기기 UI가 있으며 그리드 도구 모음을 통해 사용할 수 있습니다. 또한, 개발자가 열 숨기기 UI를 별도의 컴포넌트로 정의하여 페이지에서 원하는 위치에 배치할 수 있습니다.

#### 데모

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-column-hiding-toolbar-sample-iframe" src='{environment:demosBaseUrl}/grid-column-hiding-toolbar-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-column-hiding-toolbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

### 그리드 설정
그리드를 작성하고 데이터를 바인딩하는 것으로 시작합니다. 또한, 열에서 필터링 및 정렬을 사용할 수 있습니다.

```html
<!--columnHiding.component.html-->

<igx-grid #grid id="grid" [data]="data" [autoGenerate]="false" width="100%" height="560px" columnWidth="200px">
    <igx-column [field]="'ID'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'ContactName'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'ContactTitle'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'City'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'Fax'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'Address'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'PostalCode'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'Country'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'Phone'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
</igx-grid>
```

### 도구 모음의 열 숨기기 UI

내장 열 숨기기 UI는 그리드 도구 모음의 [`IgxDropDownComponent`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) 안에 있습니다. 이 정밀한 드롭 다운을 사용하여 열 숨기기 UI를 표시/비표시할 수 있습니다.
이를 위해 [`showToolbar`]({environment:angularApiUrl}/classes/igxgridcomponent.html#showtoolbar)와 그리드의 [`columnhiding`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnhiding) 속성을 모두 true로 설정해야 합니다. 도구 모음이 활성화되어 있지 않은 경우, [`columnhiding`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnhiding) 속성을 활성화해도 아무런 효과가 없습니다.
또한, [`toolbarTitle`]({environment:angularApiUrl}/classes/igxgridcomponent.html#toolbartitle) 속성과 그리드 래퍼의 사용자 스타일을 사용하여 도구 모음에 제목을 추가합니다.

```html
<!--columnHiding.component.html-->

<div class="grid__wrapper">
    <igx-grid ... [showToolbar]="true" [columnHiding]="true" toolbarTitle="Employees">
        ...
    </igx-grid>
</div>
```

```css
/* columnHiding.component.css */

.grid__wrapper {
    margin: 20px 150px 0px 150px;
}

```

그리드는 도구 모음의 열 숨기기 UI를 사용할 때 유용한 속성을 제공합니다.
[`columnHidingTitle`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnhidingtitle) 및 [`hiddenColumnsText`]({environment:angularApiUrl}/classes/igxgridcomponent.html#hiddencolumnstext) 속성을 사용하여 도구 모음의 드롭다운 버튼 안에 표시되는 제목과 텍스트를 설정합니다. 보다 구체적으로, [`hiddenColumnsText`]({environment:angularApiUrl}/classes/igxgridcomponent.html#hiddencolumnstext)는 기본적으로 버튼에 포함된 열 카운트 수의 바로 옆에 표시됩니다.
[`hiddenColumnsText`]({environment:angularApiUrl}/classes/igxgridcomponent.html#hiddencolumnstext) 속성은 로컬리제이션으로도 사용할 수 있어 매우 유용합니다.

```html
<!--columnHiding.component.html-->

<div class="grid__wrapper">
    <igx-grid ... [showToolbar]="true" [columnHiding]="true" toolbarTitle="Employees" columnHidingTitle="Column Hiding" hiddenColumnsText="Hidden">
        ...
    </igx-grid>
</div>
```

열 숨기기 UI의 [`columnsAreaMaxHeight`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#columnsareamaxheight) 속성을 사용하여 열이 포함된 영역의 최대 높이를 설정합니다. 이 방법으로 열이 너무 많아 컨테이너에 모두 들어가지 않을 경우, 스크롤바가 표시되어 임의의 열로 이동할 수 있으며, 검색 입력은 상단에 핀 고정되고 표시/숨기기 버튼은 하단에 핀 고정됩니다.

```typescript
// columnHiding.component.ts

public ngAfterViewInit() {        
    this.grid.toolbar.columnHidingUI.columnsAreaMaxHeight = "200px";
}
```

열 숨김 UI에 확장된 기능 세트를 사용하기 위해 열 숨김 UI 컴포넌트 자체에 대한 참조를 반환하는 도구 모음의 [`columnHidingUI`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#columnhidingui) 속성을 사용할 수 있습니다. 이렇게 하면 각 API에 접속하여 애플리케이션의 요구에 따라 사용할 수 있습니다.

이 조항 시작 부분에 있는 코드의 결과는 [열 숨기기 데모](#데모) 부분에서 확인할 수 있습니다.

### 사용자 열 숨기기 UI

[`IgxColumnHidingComponent`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html)를 수동으로 정의하고 페이지에 원하는 위치에 배치하는 경우를 가정해 보겠습니다. 단순히 마크업에 컴포넌트의 인스턴스를 작성함으로써 쉽게 실행할 수 있습니다. 이 작업을 하려면 먼저 [`IgxColumnHidingModule`]({environment:angularApiUrl}/classes/igxcolumnhidingmodule.html)을 잡습니다.

```typescript
// app.module.ts

...
import {
    ...
    IgxColumnHidingModule 
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxColumnHidingModule],
})
export class AppModule {}
```

이제 [`IgxColumnHidingComponent`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html)를 생성해 보겠습니다! 이 애플리케이션에서는 그리드 옆에 배치합니다(도구 모음의 열 숨기기 UI와 다르며, 컴포넌트는 디자인에 의해 드롭 다운 안에 있음). 또한 컴포넌트의 [`columns`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#columns) 속성을 그리드의 열로 설정하고 애플리케이션을 훨씬 더 멋지게 보이도록 사용자 스타일을 포함시킵니다!

```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    <igx-column-hiding #columnHidingUI [columns]="grid.columns">
    </igx-column-hiding>
</div>
<div class="gridContainer">
    <igx-grid #grid [data]="data" [autoGenerate]="false" width="100%" height="500px" columnWidth="200px">
        ...
    </igx-grid>
</div>
```


```css
/* columnHiding.component.css */

.grid__wrapper {
    margin: 15px;
    display: flex;
    flex-direction: row;
}

.columnHidingContainer {
    min-width: 250px;
    height: 560px;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px gray;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 2px rgba(50, 50, 50, 0.25);
    igx-column-hiding {
        height: 460px;
    }
}

.columnsOrderOptionsContainer {
    margin-top: 20px;
    margin-bottom: 20px;
}

.gridContainer {
    width: 100%;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    margin-left: 30px;    
}
```

#### 제목 및 필터 프롬프트 추가

열 숨기기 컴포넌트의 사용자 환경을 개선하기 위해 할 수 있는 몇 가지 작업은 [`title`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#title) 및 [`filterColumnsPrompt`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#filtercolumnsprompt) 속성을 설정하는 것입니다! [`title`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#title)은 상단에 표시되고 [`filterColumnsPrompt`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#filtercolumnsprompt)는 열 숨기기 UI의 필터 입력에 표시되는 프롬프트 텍스트입니다.

```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    <igx-column-hiding #columnHidingUI [columns]="grid.columns"
                       title="Column Hiding" filterColumnsPrompt="Type here to search">
    </igx-column-hiding>
</div>
```

#### 열 표시 순서 옵션 추가

사용자가 열 숨기기 UI에서 열의 표시 순서를 선택할 수도 있습니다. 이를 위해 [`columnDisplayOrder`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#columndisplayorder) 속성을 사용하며, 이 속성은 열거 유형 속성으로 다음과 같은 옵션이 있습니다:

- **Alphabetical** (알파벳순으로 열 순서를 정렬)
- **DisplayOrder** (그리드에 표시되는 순서에 따라 열 순서를 정렬)

이 옵션에 잘 디자인된 두 개의 라디오 버튼을 추가합니다! [**IgxRadio**](radio_button.md) 모듈에 추가하기만 하면 됩니다.

```typescript
// app.module.ts

...
import {
    ...
    IgxRadioModule    
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxRadioModule],    
})
export class AppModule {}
```

이제 두 라디오 버튼의 [`checked`]({environment:angularApiUrl}/classes/igxradiocomponent.html#checked) 속성을 서로 다른 조건으로 바인딩하고 클릭 이벤트를 처리하면 됩니다.

```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    ...
    <div class="columnsOrderOptionsContainer">
        <igx-radio [checked]="columnHidingUI.columnDisplayOrder === 'Alphabetical'"
                   (click)="columnHidingUI.columnDisplayOrder = 'Alphabetical'">
            Alphabetical order
        </igx-radio>
        <igx-radio [checked]="columnHidingUI.columnDisplayOrder === 'DisplayOrder'"
                   (click)="columnHidingUI.columnDisplayOrder = 'DisplayOrder'">
            Display order
        </igx-radio>
    </div>
</div>
```

#### 열 숨기기 해제
[`disableHiding`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disablehiding) 속성을 true로 설정하여 사용자가 열 숨기기 UI를 통해 열을 숨길 수 없도록 쉽게 차단할 수 있습니다.

```html
<!--columnHiding.component.html-->

<div class="gridContainer">
    <igx-grid ... >
        ...
        <igx-column [field]="'ContactName'" dataType="string" [filterable]="true" [sortable]="true" [disableHiding]="true"></igx-column>
        <igx-column [field]="'ContactTitle'" dataType="string" [filterable]="true" [sortable]="true" [disableHiding]="true"></igx-column>
        ...
    </igx-grid>
</div>
```

모든 것이 잘 진행되었다면 다음과 같이 열 숨기기 UI 컴포넌트가 표시됩니다:

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-column-hiding-sample-iframe" src='{environment:demosBaseUrl}/grid-column-hiding-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-column-hiding-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>


### API 참조

이 조항에서는 그리드 툴바에 내장된 열 숨기기 UI를 사용하는 방법과 별도의 컴포넌트로 정의하는 방법을 설명했습니다. 사용자가 다른 열 순서 중에서 선택할 수 있는 기능을 제공하는 UI를 장착하여 사용자 제목 및 필터 프롬프트 텍스트를 설정했습니다. 또한, Ignite UI for Angular 컴포넌트 [**IgxRadio**](radio_button.md) 버튼을 추가로 사용했습니다.
열 숨기기 UI에는 아래에 나열된 몇 가지 API가 추가로 포함되어 있습니다.

* [`IgxColumnHidingComponent`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html)
* [`IgxColumnHidingComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-column-hiding-theme)

사용된 상대 API가 있는 추가 컴포넌트 및/또는 지시문:

[`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) properties:
* [`columnHiding`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnhiding)
* [`columnHidingTitle`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnhidingtitle)
* [`hiddenColumnsCount`]({environment:angularApiUrl}/classes/igxgridcomponent.html#hiddencolumnscount)
* [`hiddenColumnsText`]({environment:angularApiUrl}/classes/igxgridcomponent.html#hiddencolumnstext)

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) properties:
* [`disableHiding`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disablehiding)

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) properties:
* [`columnHidingUI`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#columnhidingui)
* [`columnHidingDropdown`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#columnhidingdropdown)

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) methods:
* [`toggleColumnHidingUI`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#togglecolumnhidingui)

[`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) events:
* [`onColumnVisibilityChanged`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnvisibilitychanged)

[`IgxRadioComponent`]({environment:angularApiUrl}/classes/igxradiocomponent.html)

스타일:

* [`IgxGridComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [`IgxRadioComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-radio-theme)

### 추가 리소스
<div class="divider--half"></div>

* [그리드 개요](grid.md)
* [가상화 및 성능](grid_virtualization.md)
* [필터링](grid_filtering.md)
* [페이징](grid_paging.md)
* [정렬](grid_sorting.md)
* [요약](grid_summaries.md)
* [열 핀 고정](grid_column_pinning.md)
* [열 크기 조정](grid_column_resizing.md)
* [선택](grid_selection.md)
* [검색](grid_search.md)
* [Excel로 내보내기](exporter_excel.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
