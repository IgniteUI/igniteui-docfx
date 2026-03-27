---
title: Angular Conditional Cell Styling | Ignite UI for Angular | Infragistics 
_description: Define a variety of styles with the help of the conditional styling feature of the Material UI grid, by using different material styling guidelines with a rich API
_keywords: conditional styling, ignite ui for angular, infragistics
---


### IgxHierarchicalGrid Conditional Cell Styling
The IgxHierarchicalGrid component in Ignite UI for Angular provides **conditional styling of cells** based on custom rules.

This can be achieved by setting the [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) input [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) to an object literal containing key-value pairs. The key is the name of the CSS class, while the value is either a callback function that returns a boolean, or boolean value. The result is a convenient material styling of the cell.

#### 데모




<!-- TODO -->

<div class="divider--half"></div>

#### 개요
[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) [`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) 입력을 설정하고 사용자 규칙을 정의하여 IgxHierarchicalGrid 셀의 조건부 스타일을 지정할 수 있습니다.




<!-- TODO -->


[`cellClasses`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#cellclasses) 입력은 키 값 쌍을 포함하는 객체 리터럴을 허용하며 여기서 키는 CSS 클래스의 이름이고 값은 불 또는 불 값을 반환하는 콜백 함수입니다.




<!-- TODO -->


**::ng-deep** 또는 **`ViewEncapsulation.None`**을 사용하여 사용자 스타일을 현재 컴포넌트와 그 하위 요소를 통해 강제로 적용할 수 있습니다.

### API 참조
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
* [IgxHierarchicalGridComponent 스타일]({environment:sassApiUrl}/themes#function-grid-theme)

### 추가 리소스
<div class="divider--half"></div>

* [Hierarchical Grid 개요](hierarchical-grid.md)
* [가상화 및 성능](virtualization.md)
* [편집](editing.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 이동](column-moving.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column-resizing.md)
* [열 숨기기](column_hiding.md)
* [선택](selection.md)
* [검색](search.md)
* [도구 모음](toolbar.md)
* [복수 열 헤더](multi-column-headers.md)
* [표시 밀도](display-density.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
