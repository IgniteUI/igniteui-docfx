---
title: Angular データ チャート | データ可視化ツール | ナビゲーション | インフラジスティックス
_description: インフラジスティックスの Angular チャートをナビゲートするには、マウスまたはタッチを使用して左右にパンし、水平および垂直にズームします。Ignite UI for Angular のグラフ ナビゲーション機能について説明します。
_keywords: Angular charts, data chart, navigation, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, ナビゲーション, インフラジスティックス
mentionedTypes: ['XamDataChart', 'ModifierKeys']
_language: ja
---

# Angular ナビゲーション

Angular データ チャート コンポーネントでは、チャート ナビゲーションがデフォルトで無効になっています。有効にするとコードや UI を介してチャートのズームやパンニングができるようになります。

## Angular ナビゲーションの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-navigation-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-chart-navigation' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular ナビゲーションの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-navigation-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

チャートでナビゲーションする場合、インポートしてからインタラクティブ モードを登録します。以下のコードを使用できます。

<!-- Blazor -->

-   DataChartInteractivityModule
    <!-- end: Blazor -->

```ts
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [ IgxDataChartInteractivityModule ]
})
```

## チャート UI ナビゲーションの概要

UI でのナビゲーションを許可するには、ズームを許可する方向に応じて、チャートの [`isHorizontalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#ishorizontalzoomenabled) プロパティおよび [`isVerticalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#isverticalzoomenabled) プロパティを true に設定する必要があります。マウスホイールを回転してチャートをズームできます。

またマウスやタッチでボタンをクリックしてズームまたはパンニングできます。チャートの [`defaultInteraction`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#defaultinteraction) プロパティは、マウスクリック イベントやタッチ イベントで何が起こるかを決定します。このプロパティはデフォルトで `DragZoom` に設定されており、ズームを有効に設定すると、クリックしてドラッグした際にプロット領域の上に四角形のプレビューが配置され、グラフのズーム領域になります。この [`defaultInteraction`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#defaultinteraction) プロパティは、パンニングを許可する場合は `DragPan`、これらの操作を禁止する場合は `None` に設定することもできます。

以下のコード スニペットは、チャートで基本的な UI ナビゲーションを有効にする方法を示しています。

```html
<igx-data-chart #chart
    [dataSource]="data"
    width="100%"
    height="400px"
    isHorizontalZoomEnabled="true"
    isVerticalZoomEnabled="true">
</igx-data-chart>
```

## マウスとキーボードによるチャート ナビゲーション

Angular データ チャート コンポーネントのナビゲーションは、マウスまたはキーボードのいずれかを有効にすると発生します。以下の操作は、デフォルトで以下のマウスまたはキーボード操作を使用して呼び出すことができます。

-   **Panning**:  キーボードの矢印キーを使用するか、Shift キーを押しながらマウスでクリックしてドラッグします。
-   **Zoom In**:  キーボードのPageUpキーを使用するか、マウスホイールを回転させます。
-   **Zoom Out**:  キーボードの PageDown キーを使用するか、マウスホイールを回転させます。
-   **チャート プロット領域に合わせる**: キーボードの Home キー。これに対するマウス操作はありません。
-   **領域ズーム**: [`defaultInteraction`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#defaultinteraction) プロパティをデフォルトの `DragZoom` に設定して、プロット領域内でマウスをクリックしてドラッグします。

ズーム操作とパン操作は、それぞれ [`dragModifier`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#dragmodifier) プロパティと [`panModifier`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#panmodifier) プロパティを設定し、修飾キーを使用して有効にすることもできます。これらのプロパティは以下の修飾キーに設定することができ、押すと対応する操作が有効になります。

-   Shift
-   Alt
-   Control
-   Windows キー
-   Apple キー
-   None

以下のコード スニペットは、チャートで UI ナビゲーションを有効にする方法を示しています。以下の例では、**Shift** キーを押しながらズーム、**Alt** キーを押しながらパンのみ可能です。

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

## コードによるチャート ナビゲーション

Angular データ チャート コンポーネントは、チャートでズームまたはパン操作が行われるたびに更新されるいくつかのナビゲーション プロパティを提供します。各プロパティは、チャートでズームやパンニングするためにコードで設定できます。以下は、これらのプロパティの一覧です。

-   [`windowPositionHorizontal`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#windowpositionhorizontal): コンテンツ ビュー長方形の X 部分を表す数値は、チャートで表示されます。
-   [`windowPositionVertical`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#windowpositionvertical): 数値は、チャートに表示されるコンテンツビュー四角形のの Y 部分を表します。
-   [`windowRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#windowrect): 長方形を表す `IgRect` オブジェクトは、現在ビューにあるチャート部分を表します。例えば、[`windowRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#windowrect) の "0, 0, 1, 1" はチャート全体になります。
-   [`windowScaleHorizontal`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#windowscalehorizontal): チャートで表示されるコンテンツ ビュー長方形の幅部分を表す数値。
-   [`windowScaleVertical`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#windowscalevertical): チャートで表示されるコンテンツ ビュー長方形の高さ部分を表す数値。

以下のコード スニペットは、Angular データ チャート コンポーネントのビューをプログラムで変更する方法を示しています。以下では、Angular データ チャート コンポーネントを表す変数名 chart があると仮定します。

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
