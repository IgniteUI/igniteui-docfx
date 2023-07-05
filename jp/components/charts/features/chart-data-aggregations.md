---
title: Angular データ集計 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular データ集計
_keywords: Angular Charts, Markers, Infragistics, Angular チャート, マーカー, インフラジスティックス
mentionedTypes: ["DomainChart", "CategoryChart"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular データ集計

Ignite UI for Angular [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) コントロールのデータ集計機能を使用すると、チャート内のデータを `XAxis` の一意の値でグループ化し、それらのグループをソートすることができます。次に、`YAxis` の範囲に反映され、シリーズにカーソルを合わせるとツールチップに表示される集計を適用できます。

# Angular データ集計の例

次の例は、`XAxis` の Country メンバーごとにグループ化する[縦棒チャート](../types/column-chart.md)を示しており、各データ項目内の他のプロパティ (Product、MonthName、Year など) に変更して販売データを集計できます。また、グループ化されたプロパティを望ましい順序で取得するために、概要とソートのオプションも利用できます。

[`initialSummaries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialsummaries) と [`groupSorts`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#groupsorts) のドロップダウン内にある短縮関数は、割り当てたプロパティに基づいて正しい結果が得られるように適用されていることに注意してください (例: Sum(sales) as Sales | Sales Desc)。

<code-view style="height: 500px" alt="Angular データ集計の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/data-aggregations"
                                                 github-src="charts/category-chart/data-aggregations">
</code-view>


```html
<igx-category-chart
    [dataSource]="salesData"
    initialGroups="country"
    initialSummaries="Sum(sales) as Sales"
    groupSorts="Sales Desc">
</igx-category-chart>
```

## API リファレンス

以下は上記のセクションで説明した API メンバーのリストです。

*   [`initialSortDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialsortdescriptions)
*   [`initialSorts`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialsorts)
*   [`sortDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#sortdescriptions)
*   [`initialGroups`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialgroups)
*   [`initialGroupDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialgroupdescriptions)
*   [`groupDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#groupdescriptions)
*   [`initialSummaries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialsummaries)
*   [`initialSummaryDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialsummarydescriptions)
*   [`summaryDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#summarydescriptions)
*   [`initialGroupSortDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialgroupsortdescriptions)
*   [`groupSorts`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#groupsorts)
*   [`groupSortDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#groupsortdescriptions)

> \[!Note]
> [`includedProperties`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#includedproperties) | [`excludedProperties`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#excludedproperties) を使用する場合、チャート集計は機能しません。チャートのこれらのプロパティは非集計データ用です。データを集計しようとすると、これらのプロパティは使用できなくなります。うまくいかない理由は、描画のためにチャートに渡されたコレクションを集計により置き換えるためです。include/exclude プロパティは、そのデータの in/out プロパティをフィルターするように設計されており、それらのプロパティは新しい集計されたコレクションには存在しません。
