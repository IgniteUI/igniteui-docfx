---
제목: 반응형 데이터 그리드 | 테이블 제어 | Ignite UI for Angular | 애니메이션 | Infragistics
_description: Ignite UI for Angular Table / Grid 구성 요소는 그리드 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 컬렉션을 바인딩 할 수 있도록합니다.
_keywords: react table, Ignite UI for Angular, infragistics
_language: kr
---

## 열 애니메이션

Ignite UI for Angular 데이터 표/데이터 그리드는 열 숨기기 또는 열 이동 등의 이벤트 시에 열 애니메이션을 지원합니다.  Angular 데이터 그리드에서 열 애니메이션을 설정하면 해당 애니메이션이 해당 열의 모든 셀에 대해 실행됩니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="live-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-column-animation' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### 열 애니메이션

각 열 애니메이션 속성은 아래와 같습니다.

-   `columnAddingAnimationMode`: 열을 추가하면 열 헤더와 셀을 왼쪽, 오른쪽, 위쪽 또는 아래쪽으로 슬라이드 인할 수 있습니다. 또한, 슬라이드 및 페이드 인뿐만 아니라 페이드 인할 수 있는 옵션도 있습니다.
-   `columnExchangingAnimationMode`: 열을 교환하는 경우, 교환된 열 헤더와 셀을 왼쪽, 오른쪽, 위쪽 또는 아래쪽으로 슬라이드할 수 있습니다. 또한, 슬라이드 및 페이드뿐만 아니라 페이드할 수 있는 옵션도 있습니다.
-   `columnHidingAnimationMode`: 열 숨기기를 하면 열 헤더와 셀을 왼쪽, 오른쪽, 위쪽 또는 아래쪽으로 슬라이드 아웃할 수 있습니다. 또한, 슬라이드 및 페이드 아웃뿐만 아니라 페이드 아웃할 수 있는 옵션도 있습니다.
-   `columnMovingAnimationMode`: 열을 이동할 때 열 헤더와 셀을 슬라이드 오버할 수 있습니다.
-   `columnPropertyUpdatingAnimationMode`: 열 속성이 변경되면 변경을 보간하거나 더 많이 보간하여 해당 속성의 변경을 애니메이션으로 할 수 있습니다.
-   `columnShowingAnimationMode`: 열을 추가하면 열 헤더와 셀을 왼쪽, 오른쪽, 위쪽 또는 아래쪽으로 슬라이드 인할 수 있습니다. 또한, 슬라이드 및 페이드 인뿐만 아니라 페이드 인할 수 있는 옵션도 있습니다.

### 코드 조각

다음은 이 항목에서 설명한 각 열 애니메이션의 구현을 보여 줍니다.
