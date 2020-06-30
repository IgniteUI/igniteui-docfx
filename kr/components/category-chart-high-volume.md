---
제목: 카테고리 차트 | 데이터 비주얼라이제이션 도구 | Ignite UI for Angular | 대용량 데이터 | Infragistics
_description: 범주 차트 구성 요소를 사용하여 데이터를 나타내는 데 가장 적합한 차트 유형을 분석하고 자동으로 선택합니다. 시각화를위한 차트 유형에 대해 알아보십시오.
_keywords: category chart, Ignite UI for Angular, infragistics
_language: kr
---

## 대용량 데이터

Ignite UI for Angular 카테고리 차트 컴포넌트는 다음의 데모에서 설명하는 것처럼 수백만 개에 이르는 데이터 점을 포함한 대용량 데이터를 처리할 수 있습니다.

### 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-high-volume-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-high-volume' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="category-chart-high-volume-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>
</div>

<div class="divider--half"></div>

### 퍼포먼스 최적화

차트의 퍼포먼스에 영향을 주는 여러 기능 및 Angular 고유 기능이 있으므로 애플리케이션에서 퍼포먼스를 최적화할 때 이를 고려해야 합니다.

컴포넌트에 바인딩할 속성에 대량의 데이터를 저장할 경우, `@Component` 데코레이터에서 `changeDetection: ChangeDetectionStrategy.OnPush`를 설정해야 합니다. 이것을 설정하면 Angular에서 데이터 배열 내의 변경 사항을 자세히 검사하지 않으며, 변경 검출 주기마다 Angular가 필요하지 않습니다.

-   Angular가 차트에 자동으로 데이터 변경을 알려주는 대신에 바인딩된 데이터가 변경된 방법을 컴포넌트에 알리도록 할 수 했습니다.
    -   이러한 델타 알림은 Angular가 변경 검출을 실행할 때마다 100만 레코드 배열의 모든 변경을 비교하는 것보다 훨씬 효율적으로 실행할 수 있습니다.
    -   바인딩된 데이터의 변경을 차트에 알리는 방법에 대한 자세한 것은 각 차트의 `notify*` 메소드를 참조하십시오.
-   Angular가 디버그 모드에서 실행된 경우, 일부 브라우저에는 퍼포먼스를 저하시키는 오버헤드가 있습니다. 실제 퍼포먼스를 평가할 경우, 항상 `--prod`를 사용하여 서비스하거나 빌드해야 합니다

> 참고: 애플리케이션에 성능 문제가 있는 경우, 디버그 빌드가 아닌 프로덕션 빌드에서 실행하면 차트 성능이 개선됩니다.  이러한 경우에는 프로덕션 빌드를 실행하십시오.
