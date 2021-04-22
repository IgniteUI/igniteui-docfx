---
title: Angular 軸グリッド線 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular 軸グリッド線
_keywords: Angular Axis, Gridlines, Infragistics, Angular 軸, グリッド線, インフラジスティックス
mentionedTypes: ["CategoryChart"]
_language: ja
---

# Angular 軸グリッド線

すべての Ignite UI for Angular チャートには、軸線の外観、X 軸と Y 軸に描画される主/副グリッド線および目盛りの頻度を変更するための組み込み機能が含まれています。

> 注: 次の例は、[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) および [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) コントロールに適用されます。

軸の主グリッド線は、軸ラベルの位置から水平 (Y 軸) または垂直 (X 軸) に伸びる長い線であり、チャートのプロット領域を介して描画されます。軸の副グリッド線は、軸の主グリッド線の間に描画される線です。

軸目盛りは、Angular チャートのすべての主線の位置で各ラベルのすべての水平軸および垂直軸に沿って表示されます。

## Angular 軸グリッド線の例

この例は、指定した間隔で主グリッド線と副グリッド線を表示するために軸グリッド線を構成する方法を示しています。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-gridlines"
           alt="Angular 軸グリッド線の例"
           github-src="charts/category-chart/axis-gridlines">
</code-view>

<div class="divider--half"></div>

## Angular 軸グリッド線のプロパティ

軸間隔プロパティを設定すると、主グリッド線と軸ラベルが軸に描画される頻度を指定します。同様に、軸副間隔のプロパティは副グリッド線が軸に描画される頻度を指定します。

副間隔に対応する副グリッド線を表示するには、軸に [`xAxisMinorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisminorstroke) と [`xAxisMinorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisminorstrokethickness) プロパティを設定する必要があります。これは、副グリッド線にはデフォルトの色または太さがなく、最初に割り当てるまで表示されないためです。

以下のプロパティを設定して、Angular チャートでのグリッド線の表示をカスタマイズできます。

| 軸ビジュアル     | タイプ    | プロパティ名                                                                                                                                                                                                                                                                                                                                                     | 説明                                     |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| 主なストロークの色  | string | [`xAxisMajorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxismajorstroke) <br> [`yAxisMajorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxismajorstroke)                                     | これらのプロパティは、軸の主グリッド線の色を設定します。           |
| 副ストロークの色   | string | [`xAxisMinorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisminorstroke) <br> [`yAxisMinorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisminorstroke)                                     | これらのプロパティは、軸の副グリッド線の色を設定します。           |
| 主なストロークの太さ | number | [`xAxisMajorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxismajorstrokethickness) <br> [`yAxisMajorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxismajorstrokethickness) | これらのプロパティは、軸の主グリッド線の太さをピクセル単位で設定します。   |
| 副ストロークの太さ  | number | [`xAxisMinorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisminorstrokethickness) <br> [`yAxisMinorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisminorstrokethickness) | これらのプロパティは、軸の副グリッド線の太さをピクセル単位で設定します。   |
| 主間隔        | number | [`xAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisinterval) <br> [`yAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxisinterval)                                    | これらのプロパティは、軸の主グリッド線とラベルの間隔を設定します。      |
| 副間隔        | number | [`xAxisMinorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisminorinterval) <br> [`yAxisMinorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxisminorinterval)                | これらのプロパティは、軸の副グリッド線の間隔を設定します (使用する場合)。 |

上記のテーブルの主間隔と副間隔については、軸ラベルの主間隔も、この値によって設定され、間隔に関連付けられた軸のポイントにラベルが 1 つ表示されることに注意してください。副間隔グリッド線は常に主グリッド線の間に描画されるため、副間隔プロパティは常に主間隔プロパティの値よりもはるかに小さい値 (通常は 2〜5 倍小さい値) に設定する必要があります。

カテゴリ軸では、間隔は、最初の項目から最後のカテゴリ項目の範囲のインデックスとして表されます。通常、この値は、主間隔のカテゴリ項目の合計数の 10～20% に相当します。その結果、すべての軸ラベルは軸にフィットし、他の軸ラベルによって切り取られることはありません。副間隔の場合、主間隔プロパティの一部として表されます。通常、この値の範囲は 0.25～0.5 です。

数値軸では、間隔値は軸の最小値と最大値の間の double 値として表されます。数値軸はデフォルトで、軸の最小値および最大値から四捨五入されたバランスの良い数値に、自動的に計算されます。

日付/時刻軸では、この値は軸の最小値から最大値の範囲の時間間隔として表されます。

以下の例は、上記のプロパティを設定してグリッド線をカスタマイズする方法を示しています。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-gridlines"
           alt="Angular 軸グリッド線の例"
           github-src="charts/category-chart/axis-gridlines">
</code-view>

<div class="divider--half"></div>

## Angular 軸目盛りの例

軸の目盛りは、[`xAxisTickLength`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisticklength) と [`yAxisTickLength`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisticklength) プロパティを 0 より大きい値に設定することで有効になります。これらのプロパティは、目盛りを形成する線セグメントの長さを指定します。

目盛りは常に軸線から伸び、ラベルの方向を指します。ラベルは、重ならないように目盛りの長さの値でオフセットされます。たとえば、[`yAxisTickLength`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisticklength) プロパティが 5 に設定されている場合、軸ラベルはその量だけ左にシフトされます。

以下の例は、上記のプロパティを設定して目盛りをカスタマイズする方法を示します。

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-tickmarks"
           alt="Angular 軸目盛りの例"
           github-src="charts/category-chart/axis-tickmarks">
</code-view>

<div class="divider--half"></div>

## Angular 軸目盛りのプロパティ

以下のプロパティを設定して、Angular チャートで軸の目盛りの表示方法をカスタマイズできます。

| 軸ビジュアル      | タイプ | プロパティ名                                                                                                                                                                                                                                                                                                                                                 | 説明                         |
| ----------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| 目盛りストロークの色  | 文字列 | [`xAxisTickStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxistickstroke) <br> [`yAxisTickStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxistickstroke)                                     | これらのプロパティは、目盛りの色を設定します。    |
| 目盛りストロークの太さ | 数   | [`xAxisTickStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxistickstrokethickness) <br> [`yAxisTickStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxistickstrokethickness) | これらのプロパティは、軸の目盛りの太さを設定します。 |
| 目盛りストロークの長さ | 数   | [`xAxisTickLength`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisticklength) <br> [`yAxisTickLength`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisticklength)                                     | これらのプロパティは、軸の目盛りの長さを設定します。 |

## その他のリソース

関連するチャート機能の詳細については、以下のトピックを参照してください。

-   [軸レイアウト](chart-axis-layouts.md)
-   [軸オプション](chart-axis-options.md)

## API メンバー

以下は、上記のセクションで説明されている API メンバーのリストです。

-   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)
-   [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html)
-   [`xAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisinterval)
-   [`yAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxisinterval)
-   [`xAxisMinorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisminorinterval)
-   [`yAxisMinorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxisminorinterval)
-   [`xAxisMajorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxismajorstrokethickness)
-   [`yAxisMajorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxismajorstrokethickness)
-   [`xAxisMinorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisminorstrokethickness)
-   [`yAxisMinorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisminorstrokethickness)
-   [`xAxisTickLength`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisticklength)
-   [`yAxisTickLength`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisticklength)
-   [`xAxisTickStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxistickstroke)
-   [`yAxisTickStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxistickstroke)
-   [`xAxisMajorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxismajorstroke)
-   [`yAxisMajorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxismajorstroke)
