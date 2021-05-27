---
title: Angular  データ チャート | データ可視化ツール | ナビゲーション | インフラジスティックス
_description: インフラジスティックスの Angular チャートをナビゲートするには、マウスまたはタッチを使用して左右にパンし、水平および垂直にズームします。Ignite UI for Angular のグラフ ナビゲーション機能について説明します。
_keywords: Angular charts, data chart, navigation, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, ナビゲーション, インフラジスティックス
mentionedTypes: ["XamDataChart", "CategoryChart", "FinancialChart", "ModifierKeys"]
_language: ja
---

# Angular チャート ナビゲーション

Ignite UI for Angular チャート コンポーネントを使用すると、マウス、キーボード、およびタッチを介してインタラクティブなパンやズームが可能になります。

## Angular チャート ナビゲーションの例

次の例は、使用可能なすべてのパンやズームのオプションを示しています。ボタンを使用して例を操作したり、ドロップダウンまたはチェックボックスを使用して目的のオプションを選択したりできます。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-chart-navigation"
           alt="Angular ナビゲーションの例"
           github-src="charts/data-chart/chart-navigation">
</code-view>

<div class="divider--half"></div>

このサンプルが気に入りましたか?完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a href="{environment:infragisticsBaseUrl}/products/ignite-ui-angular/download">無料でダウンロードできます。</a>

## ユーザー インタラクションによるチャート ナビゲーション

チャートでは、ズームはデフォルトでオンになっています。UI でナビゲーションを無効にするには、ズームを無効にする方向に応じて、チャートの [`isHorizontalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#ishorizontalzoomenabled) プロパティまたは [`isVerticalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#isverticalzoomenabled) プロパティのいずれかを false に設定する必要があります。

またマウスやタッチでズームまたはパンニングできます。チャートの [`defaultInteraction`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#defaultinteraction) プロパティは、マウスクリック イベントやタッチ イベントで何が起こるかを決定します。このプロパティはデフォルトで `DragZoom` に設定されており、ズームを有効に設定すると、クリックしてドラッグした際にプロット領域の上に四角形のプレビューが配置され、グラフのズーム領域になります。この [`defaultInteraction`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#defaultinteraction) プロパティは、パンニングを許可する場合は `DragPan`、これらの操作を禁止する場合は `None` に設定することもできます。

## タッチ、マウスとキーボードによるチャート ナビゲーション

Angular データ チャートのナビゲーションは、タッチ、マウスまたはキーボードのいずれかを使用して発生します。以下の操作は、デフォルトで以下のタッチ、マウスまたはキーボード操作を使用して呼び出すことができます。

-   **パン**: キーボードの矢印キーを使用するか、Shift キーを押したまま、マウスでクリックしてドラッグするか、タッチで指を押して移動します。
    \-**ズームイン**: キーボードの PageUp キーを使用するか、マウスホイールを上に回転させるか、ピンチしてタッチでズームインします。
    \-**ズームアウト**: キーボードの PageDown キーを使用するか、マウスホイールを下に回転させるか、ピンチしてタッチでズームアウトします。
-   **チャート プロット領域に合わせる**: キーボードのホームキーを使用します。これに対するマウスまたはタッチ操作はありません。
-   **領域ズーム**: [`defaultInteraction`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#defaultinteraction) プロパティをデフォルトの `DragZoom` に設定して、プロット領域内でマウスをクリックしてドラッグします。

ズーム操作とパン操作は、それぞれ [`dragModifier`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#dragmodifier) プロパティと [`panModifier`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#panmodifier) プロパティを設定し、修飾キーを使用して有効にすることもできます。これらのプロパティは以下の修飾キーに設定することができ、押すと対応する操作が実行されます。

-   Shift
-   Alt
-   Control
-   Windows キー
-   Apple キー
-   None

## コードによるチャート ナビゲーション

> 注: チャートのコード ナビゲーションは、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールにのみ使用できます。

Angular データ チャートは、チャートでズームまたはパン操作が行われるたびに更新されるいくつかのナビゲーション プロパティを提供します。各プロパティは、チャートでズームやパンニングするためにコードで設定できます。以下は、これらのプロパティの一覧です。

-   [`windowPositionHorizontal`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#windowpositionhorizontal): コンテンツ ビュー長方形の X 部分を表す数値は、チャートで表示されます。
-   [`windowPositionVertical`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#windowpositionvertical): 数値は、チャートに表示されるコンテンツビュー四角形のの Y 部分を表します。
-   [`windowRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#windowrect): 長方形を表す `Rect` オブジェクトは、現在ビューにあるチャート部分を表します。例えば、[`windowRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#windowrect) の "0, 0, 1, 1" はチャート全体になります。
-   [`windowScaleHorizontal`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#windowscalehorizontal): チャートで表示されるコンテンツ ビュー長方形の幅部分を表す数値。
-   [`windowScaleVertical`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#windowscalevertical): チャートで表示されるコンテンツ ビュー長方形の高さ部分を表す数値。

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

-   [チャート ツールチップ](chart-tooltips.md)
-   [チャート トレンドライン](chart-trendlines.md)

## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです。

-   [`defaultInteraction`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#defaultinteraction)
-   [`dragModifier`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#dragmodifier)
-   [`isHorizontalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#ishorizontalzoomenabled)
-   [`isVerticalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#isverticalzoomenabled)
-   [`panModifier`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#panmodifier)
-   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)
-   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)
-   [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html)
