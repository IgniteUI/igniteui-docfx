---
제목: 반응형 데이터 그리드 | 테이블 제어 | Ignite UI for Angular | 필터링 | Infragistics
_description: Ignite UI for Angular Table / Grid 구성 요소는 그리드 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 컬렉션을 바인딩 할 수 있도록합니다.
_keywords: react table, Ignite UI for Angular, infragistics
_language: kr
---

## 열 필터 API

Ignite UI for Angular 데이터 표/데이터 그리드에는 필터링되는 열의 데이터 유형을 기반으로 정렬 조건을 실행할 수 있는 열 필터 API가 포함되어 있습니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="live-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-column-filtering' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### API를 통한 필터링

FilterExpression 및 FilterFactory를 불러와서 필터 컬렉션을 생성할 수 있습니다.

```ts
import { FilterExpression } from "igniteui-react-core/ES5/FilterExpression";
import { FilterFactory } from "igniteui-react-core/ES5/FilterFactory";
```

필터 컬렉션에 추가하기 위한 FilterExpression을 생성합니다.
