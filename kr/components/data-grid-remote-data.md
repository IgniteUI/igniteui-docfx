---
제목: 반응형 데이터 그리드 | 테이블 제어 | Ignite UI for Angular | 원격 데이터 바인딩 | Infragistics
_description: Ignite UI for Angular Table / Grid 구성 요소는 그리드 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 컬렉션을 바인딩 할 수 있도록합니다.
_keywords: react table, Ignite UI for Angular, infragistics
_language: kr
---

## 가상 데이터 소스

Ignite UI for Angular 데이터 표/데이터 그리드는 하나의 코드 행으로 원격 데이터 소스에의 바인딩을 지원합니다.  Angular 데이터 표의 가상 데이터 소스를 사용하면 원격 URI와 반환할 OData 엔터티로 Angular 그리드를 설정하는 것만으로 Angular 그리드가 나머지 작업을 실행합니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-grid-remote-data-iframe" src='{environment:demosBaseUrl}/grids/data-grid-remote-data' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="data-grid-remote-data-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### 의존성

코어 및 Angular 데이터 그리드 패키지 외에도 데이터 소스 패키지를 설치해야 합니다.

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-grids**
-   **npm install --save igniteui-angular-datasources**

### 필요한 모듈

[`IgxLiveGrid`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegrid.html)에는 다음 모듈이 필요합니다:

<div class="divider--half"></div>

## 사용 방법

Angular 데이터 그리드 모듈을 가져 왔으므로 다음 단계는 원격 데이터에 바인딩하는 Angular 그리드의 기본 설정입니다. 가상 데이터 소스를 생성합니다. 데이터를 검색할 URL을 `baseUri` 속성에 할당합니다. `entitySet` 속성을 설정하면 가상 데이터 소스에서 검색할 테이블을 알 수 있습니다.

```ts
private virtualData: ODataVirtualDataSource;
// ...
const vds = new ODataVirtualDataSource();
vds.baseUri = ("https://services.odata.org/V4/Northwind/Northwind.svc");
vds.entitySet = ("Orders");
this.virtualData = vds;
```

데이터 소스를 그리드에 할당합니다.
