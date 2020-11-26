---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: Ignite UI for Angular 데이터 차트는 축, 마커, 시리즈, 범례 및 주석 레이어의 모듈 식 디자인을 제공하는 차트 구성 요소입니다. 이 차트를 사용하면 동일한 차트 영역에 이러한 시각적 요소의 인스턴스를 여러 개 만들어 복합 차트 뷰를 만들 수 있습니다.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

# Angular 탐색

[`IgxDataChartComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어에서는 탐색이 기본적으로 비활성화되어 있습니다. 활성화로 설정되면 프로그래밍 방식 또는 UI를 통해 차트를 확대/축소하고 이동할 수 있습니다.

## 데모

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-navigation-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-chart-navigation' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-navigation-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">STACKBLITZ 에서 보기
    </button>


</div>

<div class="divider--half"></div>

차트에서 탐색을 사용하려면 상호 작용 모듈을 가져와 등록해야 합니다. 다음 코드를 사용하여 이 작업을 실행할 수 있습니다:

```ts
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [ IgxDataChartInteractivityModule ]
})
```

## 차트 UI 탐색 개요

UI에서 탐색을 허용하려면 확대/축소를 허용하려는 방향에 따라 차트의 [`isHorizontalZoomEnabled`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#ishorizontalzoomenabled) 및/또는 [`isVerticalZoomEnabled`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#isverticalzoomenabled) 속성을 true로 설정해야 합니다. 이렇게 하면 마우스 휠을 사용해 차트를 확대/축소할 수 있습니다.

마우스 버튼을 클릭하거나 터치를 사용하여 간단하게 확대/축소하거나 이동할 수도 있습니다. 차트의 `DefaultInteraction` 속성은 마우스 클릭 또는 터치 이벤트로 발생하는 동작을 결정합니다. 이 속성은 기본값으로 `DragZoom`으로 설정되며 확대/축소를 활성화 상태로 설정한 경우, 클릭 및 드래그하면 차트의 확대 영역이 될 플롯 영역 위에 사각형의 미리보기가 배치됩니다. 이 `DefaultInteraction` 속성은 이동을 허용하기 위해 `DragPan`으로 설정하거나, 이러한 조작을 금지하기 위해 `None`으로 설정할 수 있습니다.

다음 코드 조각은 차트에서 기본 UI 탐색을 활성화하는 방법을 보여줍니다:

```html
<igx-data-chart #chart
    [dataSource]="data"
    width="100%"
    height="400px"
    isHorizontalZoomEnabled="true"
    isVerticalZoomEnabled="true">
</igx-data-chart>
```

## 마우스 및 키보드를 사용한 차트 탐색

[`IgxDataChartComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어의 탐색은 마우스나 키보드가 활성화된 상태에서 실행됩니다. 다음 조작은 기본적으로 다음의 마우스 또는 키보드 조작을 사용하여 호출할 수 있습니다:

-   **Panning**: 키보드의 화살표 키를 사용하거나 Shift 키를 누른 상태에서 마우스로 클릭하고 드래그합니다.
-   **Zoom In**: 키보드의 PageUp 키를 사용하거나 마우스 휠을 위로 회전시킵니다.
-   **Zoom Out**: 키보드의 PageDown 키를 사용하거나 마우스 휠을 아래로 회전시킵니다.
-   **차트 플롯 영역에 맞춤**: 키보드의 Home 키입니다. 이것에 대한 마우스 조작은 없습니다.
-   **영역 줌**: `DefaultInteraction` 속성을 기본값인 `DragZoom`으로 설정하고 플롯 영역 내에서 마우스를 클릭하고 드래그합니다.

확대/축소 및 이동 조작은 `DragModifier` 및 `PanModifier` 속성을 각각 설정하고 보조 키를 사용하여 활성화할 수도 있습니다. 이러한 속성은 다음의 보조 키로 설정할 수 있으며 누르면 해당 조작이 활성화됩니다:

-   Shift
-   Alt
-   Control
-   Windows 키
-   Apple 키
-   None

다음 코드 조각은 차트에서 UI 탐색을 활성화하는 방법을 보여줍니다: 다음은 **Shift** 키를 누른 상태에서 확대/축소, **Alt** 키를 누른 상태에서 이동만 가능합니다:

```html
<igx-data-chart #chart
    [dataSource]="data"
    width="100%"
    height="400px"
    defaultInteraction="None"
    dragModifier="Shift"
    panModifier="Alt"
    isHorizontalZoomEnabled="true"
    isVerticalZoomEnabled="true">
</igx-data-chart>
```

<!-- ## Chart Navigation with Overview Plus Detail Pane

In the `XamDataChart` control, there is an overlaid control that allows navigation. This control supports a preview of most supported series types as well as all navigation methods described above. This overlay is the overview plus detail pane, and it can be enabled by setting the `overviewPlusDetailPaneVisibility` property.

The following is a summary of the operations a user can carry out with the overview plus detail pane:

- `Zoom a chart incrementally`: Use the mouse wheel or the zoom in/out buttons of the overview plus detail pane.
- `Zoom a chart to a specific level`: Use the zoom slider of the overview plus detail pane.
- `Reset a chart to 100% zoom level`: Use the zoom reset button of the overview plus detail pane.
- `Pan chart in all directions`: Click and drag the window rectangle inside of the preview plot area on the overview plus detail pane.
- `Pan to a specific region of the chart`: Clicking outside of the window rectangle inside of the preview area will move the window rectangle to that area.
- `Change mouse drag interaction in the chart`: Use the cursor button on the overview plus detail pane. This will switch between panning and drag zooming with the mouse.

The following code snippet demonstrates how to enable the overview plus detail pane:

```html
// TODO
```

```tsx
<IgrDataChart dataSource={this.data}
    width="100%"
    height="400px"
    overviewPlusDetailPaneVisibility="Visible">
</IgrDataChart>
``` -->

## 코드를 통한 차트 탐색

[`IgxDataChartComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어는 차트에서 확대/축소 또는 이동 조작이 발생할 때마다 업데이트되는 여러 탐색 속성을 제공합니다. 이러한 각 속성을 설정하여 차트를 프로그래밍 방식으로 확대/축소 또는 이동할 수도 있습니다. 다음은 이러한 속성 목록입니다:

-   `WindowPositionHorizontal`: 차트에 표시되는 콘텐츠 뷰 직사각형의 X부분을 나타내는 수치 값입니다.
-   `WindowPositionVertical`: 차트에 표시되는 콘텐츠 뷰 직사각형의 Y부분을 나타내는 수치 값입니다.
-   `WindowRect`: 현재 뷰에 있는 차트 부분을 표시하는 직사각형을 나타내는 `IgRect` 객체입니다. 예를 들면, "0, 0, 1, 1"의 `WindowRect`는 전체 차트입니다.
-   [`windowScaleHorizontal`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#windowscalehorizontal): 차트에 표시되는 콘텐츠 뷰 직사각형의 너비 부분을 나타내는 수치 값입니다.
-   [`windowScaleVertical`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#windowscalevertical): 차트에 표시되는 콘텐츠 뷰 직사각형의 높이 부분을 나타내는 수치 값입니다.

다음의 코드 조각은 [`IgxDataChartComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어의 뷰를 프로그래밍 방식으로 변경하는 방법을 보여줍니다. 다음은 [`IgxDataChartComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) 제어를 나타내는 "chart"라는 변수가 있다고 가정한 경우입니다:

```ts
// Zoom in by a factor of 0.05
this.chart.windowScaleVertical -= 0.05;
this.chart.windowScaleHorizontal -= 0.05;
// Zoom out by a factor of 0.05
this.chart.windowScaleVertical += 0.05;
this.chart.windowScaleHorizontal += 0.05;
// Pan up by a factor of 0.05
this.chart.actualWindowPositionVertical -= 0.05;
// Pan down by a factor of 0.05
this.chart.actualWindowPositionVertical += 0.05;
// Pan left by a factor of 0.05
this.chart.actualWindowPositionHorizontal -= 0.05;
// Pan right by a factor of 0.05
this.chart.actualWindowPositionHorizontal += 0.05;
```
