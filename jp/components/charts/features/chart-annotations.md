---
title: Angular チャート注釈 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular チャート注釈
_keywords: Angular Charts, Annotations, Infragistics, Angular チャート, 注釈, インフラジスティックス
mentionedTypes: ["DomainChart", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular チャート注釈

Angular チャートのホバー操作と注釈は、シリーズ コレクションに追加されるシリーズであるホバー操作レイヤーを介して実装されます。これらのレイヤーはカーソルの位置に依存します。これらの注釈レイヤーはそれぞれ、個別に使用することも、他のレイヤーと組み合わせて強力なホバー操作を提供することもできる、異なるホバー操作を提供します。

## Angular 注釈の例

次の例は、Angular チャートで使用できる注釈レイヤーを示しています。チェックボックスをクリックして、各レイヤーのオンとオフを切り替えます。

<code-view style="height: 600px" alt="Angular 注釈の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/line-chart-with-annotations"
                                                 github-src="charts/category-chart/line-chart-with-annotations">
</code-view>


<div class="divider--half"></div>

このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a href="{environment:infragisticsBaseUrl}/products/ignite-ui-angular/download">無料でダウンロードできます。</a>

## Angular 十字線レイヤー

[`IgxCrosshairLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcrosshairlayercomponent.html) は、対象にするために構成される各シリーズの実際値で、異なるセットの線を描画する各シリーズと交差する十字線として描画されます。

十字線のタイプは次のとおりです:

*   Horizontal
*   Vertical
*   Both

チャートの十字線は、[`crosshairsSnapToData`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#crosshairsSnapToData) プロパティを true に設定することでデータ ポイントにスナップするように構成することもできます。そうしないと、十字線がデータ ポイント間で補完されます。注釈を有効にして軸に沿って十字線の値を表示できます。

デフォルトではチャート コントロールのすべてのシリーズをターゲットにするため、特定のシリーズを 1 つだけ表示するように十字線レイヤーを構成できます。これには、[`targetSeries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcrosshairlayercomponent.html#targetSeries) プロパティを設定します。

デフォルトでは、十字線の色は交差するシリーズよりも軽い色になります。しかし、このデフォルト値は、十字線に使用される色を選択できるようにオーバーライドできます。これは、十字線レイヤーの [`brush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#brush) プロパティを設定することによって行われます。

次の例は、単一のシリーズをターゲットにして、タイプを垂直に設定し、ブラシの色をスタイリングすることによって、十字線レイヤーを構成する方法を示しています。

<code-view style="height: 500px" alt="Angular 十字線レイヤーのスタイル設定"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/crosshair-layer-styling"
                                                 github-src="charts/data-chart/crosshair-layer-styling">
</code-view>


<div class="divider--half"></div>

## Angular 最終値レイヤー

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) コントロールの [`IgxFinalValueLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinalvaluelayercomponent.html) は、シリーズに表示された最終値の軸に沿ったクイック ビューをサポートします。

複数の最終値レイヤーを異なる設定で使用したい場合は、この注釈を設定して特定のシリーズをターゲットにすることができます。これには [`targetSeries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinalvaluelayercomponent.html#targetSeries) プロパティを設定します。

次のプロパティを設定して、この注釈をカスタマイズすることもできます:

*   [`axisAnnotationBackground`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinalvaluelayercomponent.html#axisAnnotationBackground): このプロパティは注釈の背景色を選択するために使用されます。デフォルトはシリーズのブラシを使用します。
*   [`axisAnnotationTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinalvaluelayercomponent.html#axisAnnotationTextColor): このプロパティは注釈のテキストの色のブラシを選択するために使用されます。
*   [`axisAnnotationOutline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinalvaluelayercomponent.html#axisAnnotationOutline): このプロパティは注釈のアウトライン色を選択するために使用されます。

次の例は、上記のプロパティを設定して、最終的な値レイヤーの注釈のスタイルを設定する方法を示しています。

<code-view style="height: 500px" alt="Angular 最終値レイヤーのスタイル設定"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/final-value-layer-styling"
                                                 github-src="charts/data-chart/final-value-layer-styling">
</code-view>


<div class="divider--half"></div>

```html
<igx-category-chart
    [dataSource]="data"
    finalValueAnnotationsVisible="true">
</igx-category-chart>
```

## Angular コールアウト レイヤー

[`IgxCalloutLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html) はチャート コントロール既存または新しいデータの注釈を表示します。注釈は、データ ソース内の指定されたデータ値の横に表示されます。

コールアウト注釈を使用して、メモやデータ ポイントに関する特定の詳細など、ユーザーに追加情報を表示します。

複数のコールアウト レイヤーを異なる設定で使用する場合は、コールアウトを設定して特定のシリーズをターゲットにできます。これには [`targetSeries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html#targetSeries) プロパティを設定します。

次のプロパティを設定して、この注釈をカスタマイズすることもできます:

*   [`calloutLeaderBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html#calloutLeaderBrush): このプロパティは、レイヤーのコールアウトのリーダー線のブラシを選択するために使用されます。
*   [`calloutOutline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html#calloutOutline): このプロパティは注釈のアウトライン色を選択するために使用されます。
*   [`calloutBackground`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html#calloutBackground): このプロパティは注釈の背景色を選択するために使用されます。デフォルトはシリーズのブラシを使用します。
*   [`calloutTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html#calloutTextColor): このプロパティは注釈のテキストの色のブラシを選択するために使用されます。
*   [`calloutStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html#calloutStrokeThickness): このプロパティは、コールアウト バッキングの厚さを選択するために使用されます。
*   [`calloutCornerRadius`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html#calloutCornerRadius): このプロパティは、コールアウトのコーナーをカーブさせるために使用されます。
*   [`allowedPositions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html#allowedPositions): このプロパティは、コールアウト レイヤーが使用できる位置を選択するために使用されます。例: 上、下

次の例は、上記のプロパティを設定して、コールアウト レイヤーの注釈のスタイルを設定する方法を示しています。

<code-view style="height: 500px" alt="Angular コールアウト レイヤーのスタイル設定"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/callout-layer-styling"
                                                 github-src="charts/data-chart/callout-layer-styling">
</code-view>


<div class="divider--half"></div>

```html
<igx-category-chart
    [dataSource]="data"
    calloutsVisible="true"
    [calloutsDataSource]="calloutData"
    calloutsXMemberPath="index"
    calloutsYMemberPath="value"
    calloutsLabelMemberPath="info">
</igx-category-chart>
```

## API リファレンス

以下は、上記のセクションで説明した API メンバーのリストです。

*   [`crosshairsSnapToData`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#crosshairsSnapToData)
*   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
