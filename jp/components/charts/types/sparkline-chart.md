---
title: Angular スパークライン | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの Angular スパークライン チャート コントロールを使用して、グリッド セルやスタンドアロンなどのコンパクトなレイアウトで描画します。Ignite UI for Angular スパークライン チャートの設定可能な要素について説明します。
_keywords: Sparkline, Ignite UI for Angular, Infragistics, WinLoss, Area, Column, スパークライン, インフラジスティックス, エリア, 列
mentionedTypes: ["XamSparkline", "SparklineDisplayType", "TrendLineType"]
_language: ja
---

# Angular スパークライン

Ignite UI for Angular スパークラインは、軽量なチャート コントロールです。グリッド セル内などのコンパクトなレイアウト内でのレンダリングを目的としていますが、単独でレンダリングすることもできます。

スパークライン コントロールには、チャートの種類、マーカー、範囲、トレンドライン、不明な値のプロット、ツールチップなど、構成およびカスタマイズが可能ないくつかの視覚的要素とそれに対応する機能があります。

## Angular スパークラインの例

次の例は、使用可能なすべての異なるスパークライン タイプを示しています。タイプは [`displayType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#displaytype) プロパティの設定により定義されます。[`displayType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#displaytype) プロパティが指定されていない場合は、既定では [`Line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#line) 型が表示されます。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-display-types"
           alt="Angular スパークラインの例"
           github-src="charts/sparkline/display-types">
</code-view>

<div class="divider--half"></div>

このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a href="{environment:infragisticsBaseUrl}/products/ignite-ui-angular/download">無料でダウンロードできます。</a>

## スパークラインの推奨事項

### スパークライン チャートはプロジェクトに適していますか?

他のチャート コントロールと比較したスパークラインの利点は、グリッド セルなどの限られたスペースに、そのすべてのビジュアル要素を表示できることです。

Angular スパークライン コンポーネントには、最高、最低、最初、最後、そして負の値を示す楕円形のアイコンによってデータ ポイントをマークする機能があります。マーカーは、任意のシェイプ、色、または画像でカスタマイズできます。

### スパークライン ユースケース

-   チャートを表示するためのコンパクトなスペースがある場合。
-   週ごとの収益など、一連の値の傾向を示したい場合。

### スパークラインのベスト プラクティス

-   データ比較が正確になるように Y 軸 (左軸または右軸) を常に 0 から開始する。
-   時系列データを左から右へ並べ替える。
-   実線などの視覚属性を使用して一連のデータを表示する。

### 次の場合にスパークラインを使用しないでください:

-   データを詳細に分析する必要がある場合。
-   データ ポイントのすべてのラベルを表示する必要がある場合。Y 軸上には最大値と最小値のみを表示でき、X 軸には最初の値と最後の値のみを表示できます。

### スパークラインのデータ構造

-   一次元データが必要です。
-   データ セットには少なくとも 2 つの数値フィールドを含む必要があります。
-   データ ソース フィールドのテキストを使用して、X 軸の最初と最後のラベルを表示できます。

## スパークラインのタイプ

Angular スパークライン コンポーネントは、それに応じて  [`displayType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#displaytype) プロパティを設定することにより、以下のスパークライン タイプをサポートしています。

-   [`Line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#line):  スパークラインの折れ線チャート タイプを数値データで表示し、データ ポイントを線分で接続します。スパークラインでデータを視覚化するには、少なくとも 2 つのデータ ポイントを指定する必要があります。
-   [`Area`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#area): Area: スパークラインのエリア チャート タイプを数値データで表示します。これは折れ線タイプに似ており、各線が描画された後に領域を閉じる追加の手順があります。スパークラインでデータを視覚化するには、少なくとも 2 つのデータ ポイントを指定する必要があります。
-   [`Column`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#column): スパークラインの縦棒チャート タイプを数値データで表示します。縦棒と表現される場合もあります。このタイプは単一データ ポイントを描画できますが、Sparkline に最小の値範囲プロパティ (minimum) を指定する必要があるので、供給される単一データ ポイントは表示可能です。そうでなければ、値は最小値として取り扱われ、表示されません。
-   [`WinLoss`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#winloss): このタイプは、外観は柱状チャートに似ています。各列の値はデータセットの正の最大値 (正の値の場合) または負の最小値 (負の値の場合) に等しくなります。ウィンまたはロス シナリオを示すのが目的です。Win/Loss チャートを正しく表示するには、データセットには正の値と負の値がなければなりません。WinLoss スパークラインが、数値のコレクションにバインドできる Line タイプなどの他のタイプと同じデータにバインドされている場合、Angular スパークライン コンポーネントはそのコレクションから最大値と最小値の 2 つの値を選択し、それらの値に基づいてスパークラインをレンダリングします。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-display-types"  >
</code-view>

<div class="divider--half"></div>

## マーカー

Angular スパークライン コンポーネントを使用すると、マーカーをシリーズ上の円形のアイコンとして表示して、X/Y 座標に基づいて個々のデータポイントを示すことができます。マーカーは、表示タイプが [`Line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#line)、[`Area`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#area)、および [`Column`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#column) のスパークラインに設定できます。[`WinLoss`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#winloss) 型のスパークラインは、現在マーカーを設定できません。デフォルトでは、マーカーは表示されませんが、対応するマーカーの可視性プロパティを設定することで有効にできます。

スパークライン内のマーカーは、以下の場所を任意に組み合わせて配置できます。

-   `すべて`: スパークライン内のすべてのデータ ポイントにマーカーを表示します。
-   `低値`: 最低値のデータ ポイントにマーカーを表示します。最小値に複数の点がある場合は、その値を持つ各点に表示されます。
-   `高値`: 最低値のデータ ポイントにマーカーを表示します。最高値に複数のポイントがある場合は、その値を持つ各ポイントに表示されます。
-   `始値`: スパークラインの最初のデータポイントにマーカーを表示します。
-   `終値`: スパークラインの最後のデータ ポイントにマーカーを表示します。
-   `負数`: スパークラインにプロットされた負のデータ点にマーカーを表示します。

上記のすべてのマーカーは、色、可視性、およびサイズの観点で関連マーカー タイプのプロパティを使用してカスタマイズできます。たとえば、上記の `Low` マーカーは、[`lowMarkerBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#lowmarkerbrush)、[`lowMarkerVisibility`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#lowmarkervisibility)、[`lowMarkerSize`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#lowmarkersize) の各プロパティを持ちます。

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-markers"  >
</code-view>

<div class="divider--half"></div>

## 標準範囲

Angular スパークラインの通常の範囲機能は、データが視覚化されているときに定義済みの意味のある範囲を表す水平方向の縞模様です。標準範囲は、指定した色のアウトラインで網掛けエリアとして設定できます。

通常の範囲は、最大データ ポイントよりも広い場合もあれば、それを超える場合もあります。また、しきい値インジケータとして機能するように、スパークラインの [`Line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#line) 表示タイプと同じ幅にすることもできます。正常範囲の幅は、正常範囲を表示するために最低限必要な以下の 3 つのプロパティによって決まります。

-   [`normalRangeVisibility`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#normalrangevisibility): 標準範囲が表示されるかどうか。
-   [`normalRangeMaximum`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#normalrangemaximum): 範囲の下境界線。
-   [`normalRangeMinimum`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#normalrangeminimum): 範囲の上境界線。

既定では、標準範囲は表示されません。有効にすると、標準範囲は薄い灰色の外観で表示されますが、[`normalRangeFill`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#normalrangefill) プロパティを使用して構成することもできます。

[`displayNormalRangeInFront`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#displaynormalrangeinfront) プロパティを設定することで、Angular スパークラインのプロットされたシリーズの前または後ろに標準範囲を表示するかどうかを設定することもできます。

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-normal-range"  >
</code-view>

<div class="divider--half"></div>

## トレンドライン

Angular スパークラインは、実際のスパークライン レイヤーの上に別のレイヤーとして表示される一連のトレンドラインをサポートしています。近似曲線を表示するには、[`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#trendlinetype) プロパティを使用します。

近似曲線は、チャートがバインドされているデータの値を使用して、[`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#trendlinetype) プロパティで指定されたアルゴリズムに従って計算されます。

近似曲線は一度に 1 つだけ表示でき、デフォルトでは近似曲線は表示されません。

以下のサンプルは、ドロップダウンを介して利用可能なすべてのトレンドラインを示しています:

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-trendlines"  >
</code-view>

<div class="divider--half"></div>

## 不明な値の補間

Angular スパークラインは、不明な値を検出し、指定された補間アルゴリズムを介して不明な値のためのスペースを描画することができます。データに null 値が含まれていて、この機能を使用しない場合、つまり補間が指定されていない場合、不明な値はプロットされません。

未知の値をプロットするために、Angular スパークラインの [`unknownValuePlotting`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#unknownvalueplotting) プロパティを設定することができます。以下のサンプルは、[`unknownValuePlotting`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#unknownvalueplotting) プロパティの値の違いを示しており、チェックボックスを使用してオンとオフを切り替えることができます。

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-unknown-values"  >
</code-view>

<div class="divider--half"></div>

## データ グリッドのスパークライン

Angular スパークラインは、データ グリッドのテンプレート列またはテンプレートをサポートする他の UI コントロールに埋め込むことができます。以下のコード例ではその方法を示します。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/sparkline-grid"  >
</code-view>

## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

-   [エリア チャート](area-chart.md)
-   [縦棒チャート](column-chart.md)
-   [折れ線チャート](line-chart.md)

## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです。

-   [`displayNormalRangeInFront`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#displaynormalrangeinfront)
-   [`displayType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#displaytype)
-   [`lowMarkerBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#lowmarkerbrush)
-   [`lowMarkerSize`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#lowmarkersize)
-   [`lowMarkerVisibility`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#lowmarkervisibility)
-   [`normalRangeFill`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#normalrangefill)
-   [`unknownValuePlotting`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#unknownvalueplotting)
-   [`IgxSparklineComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html)
