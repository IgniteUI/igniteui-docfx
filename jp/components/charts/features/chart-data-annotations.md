---
title: Angular チャート データの注釈 | データ可視化 | インフラジスティックス
_description: Infragistics' Angular チャート データの注釈
_keywords: Angular Charts, Data Annotations, Infragistics, Angular チャート, データの注釈, インフラジスティックス
mentionedTypes: ["DomainChart", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular チャート データの注釈 <label class="badge badge--preview">PREVIEW</label>

Angular チャートでは、データ注釈レイヤーを使用して、データ チャートにプロットされたデータに、傾斜線、垂直/水平線 (軸スライス)、垂直/水平ストリップ (特定の軸をターゲットとする)、四角形、さらには平行四辺形 (バンド) で注釈を付けることができます。データ バインディングがサポートされているため、チャートをカスタマイズするために必要な数の注釈を作成できます。また、さまざまな注釈レイヤーを組み合わせて、プロット領域内にテキストをオーバーレイし、データ内の重要なイベント、パターン、領域に注釈を付けることもできます。

> \[!Note]
> これらの機能はデカルト軸をサポートするように設計されており、現在は半径または角度の軸には対応していません。

たとえば、株式イベントやパターンを用いて株価に注釈を付けることができます。

<code-view style="height: 600px" alt="Angular 複数のデータ注釈の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/data-annotation-multiple-with-stocks"
                                                 github-src="charts/data-chart/data-annotation-multiple-with-stocks">
</code-view>


このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a href="{environment:infragisticsBaseUrl}/products/ignite-ui-angular/download">無料でダウンロードできます。</a>

## Angular データ注釈スライス レイヤーの例

Angular では、DataAnnotationSliceLayer は、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) コンポーネントの軸の複数の値でチャートをスライスする複数の垂直線または水平線を描画します。このデータ注釈レイヤーは、X 軸上の重要なイベント (例: 企業の四半期決算) または Y 軸上の重要な値に注釈を付けるためによく使用されます。TargetAxis プロパティを y 軸に設定すると、データ注釈レイヤーは水平スライスとして描画され、TargetAxis プロパティを x 軸に設定すると、データ注釈レイヤーは垂直スライスとして描画されます。すべてのシリーズと同様に、DataAnnotationSliceLayer も `DataSource` プロパティを介したデータ バインディングをサポートします。このプロパティは、`AnnotationValueMemberPath` プロパティにマッピングされた少なくとも 1 つの数値データ列を持つデータ項目のコレクションに設定できます。

たとえば、DataAnnotationSliceLayer を使用して、株式分割や収益報告の結果などの重要なイベントを株価に注釈として付けることができます。

<code-view style="height: 500px" alt="Angular データ注釈スライス レイヤーの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/data-annotation-slice-layer"
                                                 github-src="charts/data-chart/data-annotation-slice-layer">
</code-view>


<div class="divider--half"></div>

## Angular データ注釈ストリップ レイヤーの例

Angular では、[`IgxDataAnnotationStripLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationstriplayercomponent.html) は、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) コンポーネントの軸上の 2 つの値の間に複数の垂直または水平のストリップを描画します。このデータ注釈レイヤーを使用して、X 軸にイベントの期間 (株式市場の暴落など) または Y 軸に重要な範囲の値に注釈を付けることができます。TargetAxis プロパティを y 軸に設定すると、データ注釈レイヤーは水平ストリップとして描画され、TargetAxis プロパティを x 軸に設定すると、データ注釈レイヤーは垂直ストリップとして描画されます。すべてのシリーズと同様に、[`IgxDataAnnotationStripLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationstriplayercomponent.html) も `DataSource` プロパティを介したデータ バインディングをサポートします。このプロパティは、AnnotationValueMemberPath プロパティにマッピングされた少なくとも 1 つの数値データ列を持つデータ項目のコレクションに設定できます。

たとえば、[`IgxDataAnnotationStripLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationstriplayercomponent.html) を使用して、株式市場の暴落や連邦金利の変更をチャートに注釈として付けることができます。

<code-view style="height: 500px" alt="Angular データ注釈ストリップ レイヤーの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/data-annotation-strip-layer"
                                                 github-src="charts/data-chart/data-annotation-strip-layer">
</code-view>


<div class="divider--half"></div>

## Angular データ注釈ライン レイヤーの例

Angular では、[`IgxDataAnnotationLineLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationlinelayercomponent.html) は、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) コンポーネントのプロット領域内の 2 つのポイント間に複数の線を描画します。このデータ注釈レイヤーを使用すると、株価の上昇と下落を株価チャートに注釈として表示できます。すべてのシリーズと同様に、DataAnnotationLineLayer も `DataSource` プロパティによるデータ バインディングをサポートしています。このプロパティは、線の開始ポイントと終了ポイントの x/y 座標を表す、少なくとも 4 つの数値データ列を持つデータ項目のコレクションを設定する必要があります。開始ポイントは `StartValueXMemberPath` および `StartValueYMemberPath` プロパティを使用してマップする必要があり、終了ポイントは `EndValueXMemberPath` および `EndValueYMemberPath` プロパティを使用してマップする必要があります。

たとえば、DataAnnotationLineLayer を使用して、Y 軸に株価の増加と減少のパターン、および株価の 52 週間の高値と安値の注釈を付けることができます。

<code-view style="height: 500px" alt="Angular データ注釈ライン レイヤーの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/data-annotation-line-layer"
                                                 github-src="charts/data-chart/data-annotation-line-layer">
</code-view>


<div class="divider--half"></div>

## Angular データ注釈矩形レイヤーの例

Angular では、[`IgxDataAnnotationRectLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationrectlayercomponent.html) は、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) コンポーネントのプロット領域内の開始ポイントと終了ポイントによって定義された複数の四角形をを描画します。このデータ注釈レイヤーは、株価の弱気パターンなどのプロットエリアの領域に注釈を付けることに使用できます。すべてのシリーズと同様に、DataAnnotationRectLayer も `DataSource` プロパティによるデータ バインディングをサポートしています。このプロパティは、矩形の開始ポイントと終了ポイントの x/y 座標を表す、少なくとも 4 つの数値データ列を持つデータ項目のコレクションを設定する必要があります。開始ポイントは `StartValueXMemberPath` および `StartValueYMemberPath` プロパティを使用してマップする必要があり、終了ポイントは `EndValueXMemberPath` および `EndValueYMemberPath` プロパティを使用してマップする必要があります。

たとえば、DataAnnotationRectLayer を使用して、株価の弱気パターンとギャップを Y 軸に注釈付けできます。

<code-view style="height: 500px" alt="Angular データ注釈矩形レイヤーの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/data-annotation-rect-layer"
                                                 github-src="charts/data-chart/data-annotation-rect-layer">
</code-view>


<div class="divider--half"></div>

## Angular データ注釈バンド レイヤーの例

Angular では、[`IgxDataAnnotationBandLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationbandlayercomponent.html) は、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) コンポーネントのプロット領域内の 2 つのポイント間に複数の傾斜した四角形を描画します。このデータ注釈レイヤーは、株価の上昇と下落の範囲を注釈するために使用できます。すべてのシリーズと同様に、DataAnnotationBandLayer も `DataSource` プロパティによるデータ バインディングをサポートしています。このプロパティには、線の開始ポイントと終了ポイントの x/y 座標を表す、少なくとも 4 つの数値データ列を持つデータ項目のコレクションを設定します。開始ポイントは `StartValueXMemberPath` および `StartValueYMemberPath` プロパティを使用してマップする必要があり、終了ポイントは `EndValueXMemberPath` および `EndValueYMemberPath` プロパティを使用してマップする必要があります。さらに、数値データ列を AnnotationBreadthMemberPath プロパティにバインドすることで、傾斜した四角形の太さ/サイズを指定することもできます。

たとえば、DataAnnotationBandLayer を使用して株価の成長範囲に注釈を付けることができます。

<code-view style="height: 600px" alt="Angular データ注釈バンド レイヤーの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/data-annotation-band-layer"
                                                 github-src="charts/data-chart/data-annotation-band-layer">
</code-view>


<div class="divider--half"></div>

## API リファレンス

以下は上記のセクションで説明した API メンバーのリストです。

*   `TargetAxis`: このプロパティは、どの軸に有効な DataAnnotationBandLayer、DataAnnotationLineLayer、および DataAnnotationRectLayer を設定するかを指定します。
*   `DataSource`: このプロパティは、データを注釈レイヤーにバインドして正確な形状を提供します。
*   `StartValueXMemberPath`: このプロパティは、DataAnnotationBandLayer、DataAnnotationLineLayer、および DataAnnotationRectLayer の開始位置となる x 座標を含むデータ列の列名にマッピングします。
*   `StartValueYMemberPath`: このプロパティは、DataAnnotationBandLayer、DataAnnotationLineLayer、および DataAnnotationRectLayer の開始位置となる y 座標を含むデータ列の列名にマッピングします。
*   `EndValueXMemberPath`: このプロパティは、DataAnnotationBandLayer、DataAnnotationLineLayer、および DataAnnotationRectLayer の終了位置となる x 座標を含むデータ列にマッピングします。
*   `EndValueYMemberPath`: このプロパティは、DataAnnotationBandLayer、DataAnnotationLineLayer、および DataAnnotationRectLayer の終了位置となる y 座標を含むデータ列にマッピングします。
*   `StartLabelXMemberPath`: このプロパティは、軸に沿った xAxis の開始位置のオーバーレイ ラベルを表すデータ列へのマッピングです。
*   `StartLabelXDisplayMode` | `StartLabelYDisplayMode` | `EndLabelXDisplayMode` | `EndLabelYDisplayMode` | `CenterLabelXDisplayMode`: これらのプロパティは、注釈形状の開始、終了、または中央に注釈ラベルとして何を表示するかを指定します。たとえば、マップされたデータ値、データ ラベル、軸の値を表示したり、特定の注釈ラベルを非表示にします。
*   `StartLabelYMemberPath`: このプロパティは、y 軸上の [`IgxDataAnnotationBandLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationbandlayercomponent.html)、[`IgxDataAnnotationLineLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationlinelayercomponent.html)、[`IgxDataAnnotationRectLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationrectlayercomponent.html) の開始位置の軸ラベルを表すデータ列へのマッピングです。
*   `EndLabelYMemberPath`: このプロパティは、y 軸上の [`IgxDataAnnotationBandLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationbandlayercomponent.html)、[`IgxDataAnnotationLineLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationlinelayercomponent.html)、[`IgxDataAnnotationRectLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdataannotationrectlayercomponent.html) の終了位置の軸ラベルを表すデータ列へのマッピングです。
