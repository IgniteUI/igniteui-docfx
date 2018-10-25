---
title: 대용량 데이터
_description: Ignite UI for 카테고리 차트 컴포넌트는 데이터 시각화 도메인의 복잡성을 관리 가능한 API로 단순화하여 사용자가 데이터 수집, 그룹 수집, 데이터 속성을 바인딩하고 나머지는 차트 컨트롤이 실행할 수 있도록 합니다. 
_keywords: Ignite UI for Angular, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트, 네이티브 Angular 컴포넌트 라이브러리, Angular 차트, Angular 차트 컨트롤, Angular 차트 예제, Angular 그리드 컴포넌트, Angular 차트 컴포넌트, Angular 카테고리 차트 
_language: kr
---
## 대용량 데이터

카테고리 차트 컨트롤은 다음의 데모에서 설명하는 것처럼 수백만 개에 이르는 데이터 점을 포함한 대용량 데이터를 처리할 수 있습니다.

### 데모 
<div class="sample-container" style="height: 570px">
    <iframe id="category-chart-high-volume-sample-iframe" src='{environment:demosBaseUrl}/category-chart-high-volume-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="category-chart-high-volume-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### 퍼포먼스 최적화 
차트의 퍼포먼스에 영향을 주는 여러 기능 및 Angular 고유 기능이 있으므로 애플리케이션에서 퍼포먼스를 최적화할 때 이를 고려해야 합니다.

* 컴포넌트에 바인딩할 속성에 대량의 데이터를 저장할 경우, @Component 데코레이터에서 changeDetection: ChangeDetectionStrategy.OnPush를 설정해야 합니다.  
     * Angular가 모든 변경 검출 주기에서 데이터 배열 내의 변경 사항을 확인하지 않도록 설정합니다.
* Angular가 차트에 자동으로 데이터 변경을 알려주는 대신에 바인딩된 데이터가 변경된 방법을 컴포넌트에 알리도록 할 수 했습니다. 
    * 이러한 델타 알림은 Angular가 변경 검출을 실행할 때마다 100만 레코드 배열의 모든 변경을 비교하는 것보다 훨씬 효율적으로 실행할 수 있습니다. 
    * 바인딩된 데이터의 변경을 차트에 알리는 방법에 대한 자세한 것은 각 차트의 notify*메소드를 참조하십시오.
* Angular가 디버그 모드에서 실행된 경우, 일부 브라우저에는 퍼포먼스를 저하시키는 오버헤드가 있습니다. 실제 퍼포먼스를 평가할 경우, 항상 --prod를 사용하여 서비스하거나 빌드해야 합니다.


