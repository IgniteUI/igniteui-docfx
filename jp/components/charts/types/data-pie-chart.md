---
title: Angular 円チャートとグラフ | Ignite UI for Angular
_description: Ignite UI for Angular データ円チャートは、セクションに分割された円形の領域で構成される、円チャートを表示するための UI コントロールです。無料でお試しください。
_keywords: Angular charts, pie chart, Ignite UI for Angular, Infragistics, data binding, slice selection, animation, highlighting, legend, Angular チャート, 円チャート, インフラジスティックス, データ バインディング, スライスの選択, アニメーション, ハイライト表示, 凡例
mentionedTypes: ["XamDataPieChart", "XamDataChart"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular Data Pie Chart (データ円チャート)

Ignite UI for Angular データ円チャートは、データ セットのカテゴリ (部分) がどのように合計 (全体) 値に構成されるかを示す部分対全体のチャートです。カテゴリは、円形または円グラフのセクションとして表示されます。各セクションまたは円スライスには、基本データ値に比例する円弧の長さがあります。カテゴリは、分析されている合計値に対する値のパーセンテージ (100 または 100% の一部) に基づいて、他のカテゴリに比例して表示されます。

## Angular データ円チャートの例

データ項目を文字列と数値データでバインドすることで、`XamDataPieChart` の Angular 円チャートが作成できます。これらのデータ値を足すと可視化率100%になります。

<code-view style="height: 600px" alt="Angular データ円チャートの概要"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-pie-chart/overview"
                                                 github-src="charts/data-pie-chart/overview">
</code-view>


<div class="divider--half"></div>

## Angular データ円チャートの推奨事項

円チャートは小さなデータ セットに適しており、一目で読みやすいです。円チャートは、部分から全体への視覚化の 1 つのタイプにすぎません。その他は次のとおりです。

*   ドーナツ (リング)
*   ファンネル
*   積層型エリア
*   積層型 100% エリア (積層型パーセンテージ エリア)
*   積層型棒
*   積層型 100% 棒 (積層型パーセンテージ棒)
*   ツリーマップ
*   ウォーターフォール

Angular データ円チャートには、次のようなデータを分析するためのビューア ツールを提供するインタラクティブ機能が含まれています。

*   凡例
*   スライスの選択
*   スライスのハイライト表示
*   チャート アニメーション

円チャートのベスト プラクティス:

*   スライスまたはセグメントを、合計値または全体に比例するパーセンテージ値として比較します。
*   カテゴリのグループがどのように小さなセグメントに分割されるかを示します。
*   小規模で階層化されていないデータ セット (6 ～ 8 セグメント未満のデータ) を提示します。
*   データ セグメントの合計が 100% になるようにします。
*   データの順序を最大 (最高) から最小 (最低) に並べます。
*   12 時の位置から始めて時計回りに続けるなどの標準的なプレゼンテーション手法を使用します。
*   パーツのセグメント/スライスでカラー パレットを区別できるようにします。
*   読みやすさを考慮して、セグメント内のデータ ラベルと凡例を比較します。
*   理解しやすさに基づいて、円チャートの代わりに棒やリング などのチャートを選択します。
*   比較分析のために複数の円チャートを隣り合わせに配置することは避けます。

以下の場合に円チャートを使用しないでください。

*   時間の経過に伴う変化を比較する場合は、棒、折れ線、またはエリア チャートを使用します。
*   正確なデータ比較が必要な場合は、棒、折れ線、またはエリア チャートを使用します。
*   6 つまたは 8 つを超えるセグメント (大量のデータ) がある場合 — データ ストーリーに適している場合は、棒、折れ線、またはエリア チャートを検討してください。
*   棒チャートで、ビューアが値の違いを認識しやすくなります。

## Angular データ円チャートの凡例

凡例は、各ポイントに関する情報を表示し、合計に対する各ポイントの貢献度を知るために使用されます。

円チャートの隣に凡例を表示するには、ItemLegend を作成し、[`IgxLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxlegendcomponent.html) プロパティに割り当てます。ItemLegend はデフォルトでは項目を縦方向に表示しますが、これは [`orientation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxlegendcomponent.html#orientation) プロパティを設定することで変更できます。

凡例に表示されるラベルには、デフォルトで `XamDataPieChart` の各スライスに表示されるラベルと同じ内容が表示されますが、チャートの `LegendSliceLabelContentMode` プロパティを使用してこれを変更できます。これにより、ラベル、値、パーセンテージ、またはそれらの任意の組み合わせをチャート内の各スライスの凡例のコンテンツとして表示できる列挙が公開されます。

ItemLegend バッジを変更することもできます。デフォルトでは、関連付けられているチャートのスライスの色に対応する塗りつぶされた円として表示されます。これを設定するには、チャートの [`legendItemBadgeShape`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#legendItemBadgeShape) プロパティを使用し、円、折れ線、棒、縦棒などに設定できます。

以下は、`XamDataPieChart` での ItemLegend の使用例です。

<code-view style="height: 600px" alt="Angular データ円チャートの凡例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-pie-chart/legend"
                                                 github-src="charts/data-pie-chart/legend">
</code-view>


<div class="divider--half"></div>

## Angular 円チャートのその他カテゴリ

円チャートの基本データに、小さい値を含む多くの項目が含まれる場合があります。この場合、Others カテゴリは、単一スライスへの複数のデータ値の自動集計を許可します。

`XamDataPieChart` の「その他」カテゴリには、[`OthersCategoryType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.otherscategorytype.html)、`OthersCategoryThreshold`、`OthersCategoryText` という 3 つの主要な構成可能なプロパティがあり、これらを使用して、チャート内の「その他」スライスの表示方法を構成できます。これらについては、それぞれ以下で説明します。

[`OthersCategoryType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.otherscategorytype.html) プロパティは、`XamDataPieChart` の `OthersCategoryThreshold` プロパティと連動して機能します。[`OthersCategoryType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.otherscategorytype.html) では、`OthersCategoryThreshold` を数値として評価するか、パーセンテージとして評価するかを定義できます。たとえば、数値を選択し、`OthersCategoryThreshold` を 5 に設定すると、5 未満の値を持つスライスはすべて「その他」カテゴリの一部になります。パーセント タイプで同じ値 5 を使用すると、`XamDataPieChart` の合計値の 5 パーセント未満の値はすべて「その他」カテゴリの一部になります。

デフォルトでは、「その他」スライスは「その他」というラベルで表されます。チャートの `OthersCategoryText` プロパティを変更することでこれを変更できます。

`XamDataPieChart` に「その他」カテゴリが表示されないようにするには、`OthersCategoryThreshold` を 0 に設定します。

以下のサンプルは、`XamDataPieChart` 内の Others スライスの使用方法を示しています。

<code-view style="height: 600px" alt="Angular 円チャートのその他"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-pie-chart/others"
                                                 github-src="charts/data-pie-chart/others">
</code-view>


<div class="divider--half"></div>

## Angular データ円チャートの選択

`XamDataPieChart` は、チャートにプロットされたスライスをマウスでクリックしてスライスを選択できる機能をサポートしています。これは、以下で説明するチャートの `SelectionBehavior` プロパティと `SelectionMode` プロパティを利用して構成できます。

`SelectionBehavior` の主な 2 つのオプションは `PerDataItemSingleSelect` と `PerDataItemMultiSelect` で、それぞれ単一選択と複数選択を有効にします。

`SelectionMode` プロパティは、円チャートのスライスが選択された場合にどのように反応するかを決定します。以下はその列挙体のオプションとその機能です。

*   `Brighten`: 選択したスライスがハイライト表示されます。
*   `FadeOthers`: 選択したスライスは同じ色のまま残り、他のスライスは色が薄くなります。
*   `FocusColorFill`: 選択したスライスの背景がチャートの FocusBrush に変更されます。
*   `FocusColorOutline`: 選択されたスライスには、チャートの FocusBrush によって定義された色のアウトラインが表示されます。
*   `FocusColorThickOutline`: 選択されたスライスには、チャートの FocusBrush によって定義された色のアウトラインが表示されます。このアウトラインの太さは、コントロールの Thickness プロパティを使用して設定することもできます。
*   `GrayscaleOthers`: 選択されていないスライスにはグレー色のフィルターが適用されます。
*   `None`: 選択されたスライスには影響はありません。
*   `SelectionColorFill`: 選択されたスライスの背景がチャートの SelectionBrush に変更されます。
*   `SelectionColorOutline`: 選択されたスライスには、チャートの SelectionBrush によって定義された色のアウトラインが表示されます。
*   `SelectionColorThickOutline`: 選択されたスライスには、チャートの FocusBrush によって定義された色のアウトラインが表示されます。このアウトラインの太さは、コントロールの Thickness プロパティを使用して設定することもできます。
*   `ThickOutline`: 選択されたスライスには、チャートの Thickness プロパティに応じて太さが異なるアウトラインが適用されます。

スライスが選択されると、その基になるデータ項目がチャートの SelectedSeriesItems コレクションに追加されます。そのため、XamDataPieChart は SelectedSeriesItemsChanged イベントを公開して、スライスが選択されてこのコレクションが変更されたことを検出します。

以下のサンプルは、`XamDataPieChart` コントロールの選択機能を示しています。

<code-view style="height: 600px" alt="Angular 円チャートの選択"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-pie-chart/selection"
                                                 github-src="charts/data-pie-chart/selection">
</code-view>


<div class="divider--half"></div>

## Angular データ円チャートのハイライト表示

`XamDataPieChart` は、マウス オーバーによるハイライト表示と、別のデータ ソースを提供することで設定できるハイライト表示オーバーレイをサポートしています。

[`highlightingBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#highlightingBehavior) 列挙プロパティは、スライスがどのようにハイライト表示されるかを決定します。以下はそのプロパティのオプションとその機能です。

*   `DirectlyOver`: スライスは、マウスがその上に直接置かれている場合にのみハイライト表示されます。
*   `NearestItems`: マウスの位置に最も近いスライスがハイライト表示されます。
*   `NearestItemsAndSeries`: マウスの位置に最も近いスライスとシリーズがハイライト表示されます。
*   `NearestItemsRetainMainShapes`: マウスの位置に最も近い項目がハイライト表示され、シリーズのメイン図形はハイライト表示されなくなります。

[`highlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#highlightingMode) 列挙プロパティは、データ円チャートのスライスがハイライト表示されたときにどのように反応するかを決定します。以下はそのプロパティのオプションとその機能です。

*   `Brighten`: マウスの位置がそのシリーズ上または近くにあると、そのシリーズの色が明るくなります。
*   `BrightenSpecific`: マウスの位置が特定のスライスの上または近くにある場合、そのスライスの色が明るくなります。
*   `FadeOthers`: マウスの位置がそのシリーズ上または近くにある場合、そのシリーズは色を保持しますが、他の部分は薄く表示されます。
*   `FadeOthersSpecific`: マウスの位置がそのスライスの上または近くにある場合、そのスライスの色は保持されますが、他のスライスの色は薄く表示されます。
*   `None`: シリーズとスライスはハイライト表示されません。

以下の例は、`XamDataPieChart` コンポーネントのマウスハイライト表示の動作を示しています。

<code-view style="height: 600px" alt="Angular データ円チャートのハイライト表示"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-pie-chart/highlighting"
                                                 github-src="charts/data-pie-chart/highlighting">
</code-view>


マウスのハイライト表示に加えて、`XamDataPieChart` はデータのサブセットを表示できるハイライト表示フィルター機能を公開します。これは、コントロールの `HighlightedDataSource` を指定し、[`highlightedValuesDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#highlightedValuesDisplayMode) プロパティを `Overlay` に設定することによって適用されます。`HighlightedDataSource` は、`XamDataPieChart` の `DataSource` プロパティに割り当てられたデータのサブセットを想定しています。

これらの条件が満たされると、サブセットの値がハイライト表示され、データの全セットの残りの部分はフェードアウトされます。これにより、サブセットが効果的にハイライトされ、同じコントロール内でデータのサブセットをより簡単に視覚化できるようになります。

<div class="divider--half"></div>

## Angular データ円チャートのアニメーション

`XamDataPieChart` は、スライスの表示や値の変更時のアニメーション化をサポートしています。

`IsTransitionInEnabled` プロパティを **true** に設定すると、円チャートがアニメーションで表示されます。実行されるアニメーションのタイプは、`TransitionInMode` 列挙プロパティを表示したいアニメーションのタイプに設定することで構成できます。さらに、[`TransitionInSpeedType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.transitioninspeedtype.html) プロパティを、インデックス、値、通常、またはランダム化でスケー​​ルするように設定することもできます。このアニメーションの期間は、`TimeSpan` を受け取る `TransitionInDuration` プロパティで制御できます。

データの変更をアニメーション化する場合は、[`animateSeriesWhenAxisRangeChanges`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#animateSeriesWhenAxisRangeChanges) プロパティを **true** に設定することでも実行できます。この変更の期間は、`TransitionDuration` プロパティを設定することでも構成できます。

以下のは、`XamDataPieChart` コントロールでのアニメーションを使用する方法を示しています。

<code-view style="height: 600px" alt="Angular データ円チャートのアニメーション"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-pie-chart/animation"
                                                 github-src="charts/data-pie-chart/animation">
</code-view>


<div class="divider--half"></div>

## その他のリソース

*   [ドーナツ チャート](donut-chart.md)
*   [極座標チャート](polar-chart.md)
*   [ラジアル チャート](radial-chart.md)

## API リファレンス

以下のテーブルは、上記のセクションで説明した API メンバーをリストします。

*   `OthersCategoryThreshold`
*   [`OthersCategoryType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.otherscategorytype.html)
*   `SelectionMode`

|チャート タイプ       | コントロール名   | API メンバー |
|-----------------|----------------|------------ |
|データ円チャート      | `XamDataPieChart`     | `XamDataPieChart` |
|項目凡例 | [`IgxItemLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxitemlegendcomponent.html) | [`IgxItemLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxitemlegendcomponent.html) |