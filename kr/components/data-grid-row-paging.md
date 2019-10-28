---
제목: 반응형 데이터 그리드 | 테이블 제어 | Ignite UI for Angular | 페이징 | Infragistics
_description: Ignite UI for Angular Table / Grid 구성 요소는 그리드 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 컬렉션을 바인딩 할 수 있도록합니다.
_keywords: react table, Ignite UI for Angular, infragistics, paging
_language: kr
---

## 페이징

페이징은 현재 Ignite UI for Angular 데이터 표/데이터 그리드 내에서 구현되지 않지만 데이터 소스를 동적으로 전환하면 유사한 결과를 얻을 수 있습니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="live-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-paging' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### 개요

위의 데모에서는 페이징이 Ignite UI for Angular 데이터 그리드에 내장되어 있지 않으므로 데이터 배열을 조합하여 그 데이터의 일부를 페이지로서 출력하도록 설계된 사용자 페이저 컴포넌트를 생성했습니다.  이 페이지 데이터는 Ignite UI for Angular 데이터 그리드에 제공되어 자동으로 새로운 데이터를 표시합니다.

> [!NOTE]
>
> 페이저 컴포넌트의 소스 코드는 Ignite UI for Angular 다운로드에서 사용할 수 있습니다.

페이저 컴포넌트는 정렬, 그룹화 및 필터링 등을 지원하기 위해 데이터 소스의 자체 버전을 유지합니다.  정렬, 그룹 또는 필터링이 Ignite UI for Angular 데이터 그리드에 추가되면 페이저 내의 데이터 소스의 내부 버전이 일치하는 정렬, 그룹 또는 필터링으로 업데이트됩니다.  그런 다음, 데이터 소스는 이를 기반으로 데이터 보기를 변경하고 이것을 반영하도록 업데이트 된 데이터를 제공합니다.

위의 데모에서 이 페이저 컴포넌트를 사용하는 방법은 다음과 같습니다:

페이저 컴포넌트의 `pageChanged` 이벤트는 페이지를 변경하면 알려주며 새로운 페이지의 데이터를 제공합니다.  샘플은 이 데이터를 가져와서 표시하기 위해 그리드에 전달합니다.
