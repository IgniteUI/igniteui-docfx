---
제목: 반응형 데이터 그리드 | 테이블 제어 | Ignite UI for Angular | 정렬 | Infragistics
_description: Ignite UI for Angular Table / Grid 구성 요소는 그리드 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 컬렉션을 바인딩 할 수 있도록합니다.
_keywords: react table, Ignite UI for Angular, infragistics
_language: kr
---

## 정렬

Ignite UI for Angular 데이터 표/데이터 그리드는 단일 열, 다중 열 및 3상태 열의 정렬 구성으로 오름차순 및 내림차순 열 정렬을 지원합니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-grid-column-sorting-iframe" src='{environment:demosBaseUrl}/grids/data-grid-column-sorting' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="data-grid-column-sorting-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### 정렬 형식 설정

Angular 데이터 그리드에서 단일 또는 다중 열을 오름차순 또는 내림차순으로 정렬할 수 있습니다. TriState가 활성화된 경우, 열에 적용된 정렬을 삭제할 수 있습니다.

-   `SortByMultipleColumns`
-   `SortByMultipleColumnsTriState`
-   `SortByOneColumnOnly`
-   `SortByOneColumnOnlyTriState`

```ts
import { HeaderClickAction } from "igniteui-react-grids/ES5/HeaderClickAction";
```

### API를 사용한 정렬

```ts
import { ColumnSortDescription } from "igniteui-react-grids/ES5/igr-column-sort-description";
import { ListSortDirection } from "igniteui-react-core/ES5/ListSortDirection";
```
