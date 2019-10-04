---
제목: 반응형 데이터 그리드 | 테이블 제어 | Ignite UI for Angular | 셀 활성화 | Infragistics 
_description: Ignite UI for Angular Table / Grid 구성 요소는 그리드 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 컬렉션을 바인딩 할 수 있도록합니다.
_keywords: react table, Ignite UI for Angular, infragistics
_language: kr
---

## 셀 활성화

Ignite UI for Angular 데이터 표/데이터 그리드는 그리드 셀을 통한 키보드 탐색을 가능하게 하는 셀 활성화 기능을 지원합니다. 그리드의 `ActivationMode` 속성을 `Cell`에 설정함으로써 활성화됩니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="live-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-cell-activation' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### 키보드 탐색

그리드의 `ActivationMode` 속성을 `Cell`에 설정하면 그리드에서 다양한 키보드 탐색 옵션을 사용할 수 있습니다. 아래는 현재 활성화된 셀에 대한 키 누름/조합과 그 효과에 대한 설명입니다.

-   `위 화살표 키`: 한 셀 위로 이동합니다.
-   `아래 화살표 키`: 한 셀 아래로 이동합니다.
-   `왼쪽 화살표 키`: 현재 행에서 셀을 하나 왼쪽으로 이동합니다.
-   `오른쪽 화살표 키`: 현재 행에서 셀을 하나 오른쪽으로 이동합니다.
-   `Page Up`: 그리드를 한 뷰포트 페이지 위로 스크롤합니다.
-   `Page Down`: 그리드를 한 뷰포트 페이지 아래로 스크롤합니다.
-   `Tab`: 활성화 셀을 오른쪽의 다음 셀로 이동하거나 해당 행의 마지막 셀에 도달한 경우, 다음 행의 가장 왼쪽 셀로 이동합니다.
-   `Shift + Tab`: 활성화 셀을 왼쪽의 다음 셀로 이동하거나 이전 행의 첫 번째 셀에 도달한 경우, 이전 행의 가장 오른쪽 셀로 이동합니다.
-   `Ctrl + 위 화살표 키`: 열의 가장 위 셀로 이동합니다.
-   `Ctrl + 아래 화살표 키`: 열의 가장 아래 셀로 이동합니다.
-   `Ctrl + 왼쪽 화살표 키`: 열의 가장 왼쪽 셀로 이동합니다.
-   `Ctrl + 오른쪽 화살표 키`: 열의 가장 오른쪽 셀로 이동합니다.
-   `Ctrl + Home`: 그리드의 왼쪽 위 셀로 이동합니다.
-   `Ctrl + End`: 그리드의 오른쪽 아래 셀로 이동합니다.

### 코드 조각

다음은 그리드에서 셀 활성화를 구현하는 방법을 보여 줍니다:
