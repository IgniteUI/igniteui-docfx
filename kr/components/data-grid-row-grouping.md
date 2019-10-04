---
제목: 반응형 데이터 그리드 | 테이블 제어 | Ignite UI for Angular | 행 그룹화 | Infragistics
_description: Ignite UI for Angular Table / Grid 구성 요소는 그리드 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 컬렉션을 바인딩 할 수 있도록합니다.
_keywords: react table, Ignite UI for Angular, infragistics
_language: kr
---

## 열 그룹화

Ignite UI for Angular 데이터 표/데이터 그리드를 사용하면 열 값을 '고정 헤더' 행 그룹으로 그룹화할 수 있습니다.  이것은 Microsoft Outlook의 그룹화 기능과 유사하며, 독자적인 기준에 따라 데이터를 시각적으로 그룹화할 수 있는 간단한 방법입니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-grid-row-grouping-iframe" src='{environment:demosBaseUrl}/grids/data-grid-row-grouping' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="data-grid-row-grouping-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### API를 사용한 열 그룹화

```ts
import { ColumnGroupDescription } from "igniteui-react-grids/ES5/igr-column-group-description";
import { ListSortDirection } from "igniteui-react-core/ES5/ListSortDirection";
```
