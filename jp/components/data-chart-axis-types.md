---
title: Angular データ チャート | データ可視化ツール | 軸タイプ | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールを使用して、数値、カテゴリ、日付時間軸などのさまざまな軸タイプを通じてデータをプロットします。Ignite UI for Angular グラフ軸について説明します。
_keywords: Angular charts, data chart, axis, types, Ignite UI for Angular, Infragistics, Angular チャート, データ チャート, 軸, タイプ, インフラジスティックス
mentionedTypes: ['XamDataChart', 'CategoryXAxis', 'NumericYAxis', 'CategoryDateTimeXAxis']
_language: ja
---

# Angular 軸

Angular データ チャート コンポーネントの軸は、軸の主線、グリッド線、目盛り、タイトル、およびラベルの外観を指定するための基本プロパティを提供します。データ チャートがサポートするさまざまなシリーズ タイプのデータ チャート コンポーネントで使用できる複数の軸タイプがあります。シリーズのタイプは、併用できる軸タイプを決定します。

## Angular 軸の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-axis-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 軸の例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

## サポートされる軸

Angular データ チャート コンポーネントは、特定の種類のシリーズで使用することを目的としたさまざまな種類の軸をサポートします。以下の表はシリーズ タイプで使用できます。

| 軸タイプ               | サポートされるシリーズ タイプ                                                                                                                                                                                                                                    |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CategoryYAxis      | [カテゴリ シリーズ](data-chart-type-category-series.md) グループの[棒シリーズ](data-chart-type-category-bar-series.md)のみ                                                                                                                                             |
| CategoryXAxis      | すべての[ファイナンシャル シリーズ](data-chart-type-financial-series.md)、[範囲シリーズ](data-chart-type-range-series.md)、[カテゴリ シリーズ](data-chart-type-category-series.md) ([棒シリーズ](data-chart-type-category-bar-series.md) を除く)                                           |
| TimeXAxis          | すべての[ファイナンシャル シリーズ](data-chart-type-financial-series.md)、[範囲シリーズ](data-chart-type-range-series.md)、[カテゴリ シリーズ](data-chart-type-category-series.md) ([棒シリーズ](data-chart-type-category-bar-series.md) を除く)                                           |
| OrdinalTimeXAxis   | すべての[ファイナンシャル シリーズ](data-chart-type-financial-series.md)、[範囲シリーズ](data-chart-type-range-series.md)、[カテゴリ シリーズ](data-chart-type-category-series.md) ([棒シリーズ](data-chart-type-category-bar-series.md) を除く)                                           |
| PercentChangeYAxis | すべての[ファイナンシャル シリーズ](data-chart-type-financial-series.md)、[範囲シリーズ](data-chart-type-range-series.md)、[カテゴリ シリーズ](data-chart-type-category-series.md)、[散布シリーズ](data-chart-type-scatter-bubble-series.md)、[シェイプ シリーズ](data-chart-type-shape-series.md) |
| NumericYAxis       | すべての[散布シリーズ](data-chart-type-scatter-bubble-series.md)、[シェイプ シリーズ](data-chart-type-shape-series.md)、[ファイナンシャル シリーズ](data-chart-type-financial-series.md)、[範囲シリーズ](data-chart-type-range-series.md)、[カテゴリ シリーズ](data-chart-type-category-series.md) |
| NumericXAxis       | [カテゴリ シリーズ](data-chart-type-category-series.md) グループのすべての[散布シリーズ](data-chart-type-scatter-bubble-series.md)、[シェイプ シリーズ](data-chart-type-shape-series.md)、[棒シリーズ](data-chart-type-category-bar-series.md)                                           |
| NumericAngleAxis   | すべての[極座標シリーズ](data-chart-type-polar-series.md)                                                                                                                                                                                                     |
| NumericRadiusAxis  | すべての[極座標シリーズ](data-chart-type-polar-series.md)と[ラジアル シリーズ](data-chart-type-radial-series.md)                                                                                                                                                       |
| CategoryAngleAxis  | すべての[ラジアル シリーズ](data-chart-type-radial-series.md)                                                                                                                                                                                                  |

## カテゴリ X 軸

[`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html) は、データを一連のカテゴリ データ項目として扱います。この軸のラベルがシーケンスの位置に応じて、X 軸に沿って配置されます。この軸の種類では、数字、文字列などのほぼすべてのデータのタイプを表示できます。このタイプの軸は、[ファイナンシャル シリーズ](data-chart-type-financial-series.md)、[範囲シリーズ](data-chart-type-range-series.md)、[カテゴリ シリーズ](data-chart-type-category-series.md) ([棒シリーズ](data-chart-type-category-bar-series.md) を除く) と互換性があります。

以下のコードは、[`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html) を Angular データ チャート コンポーネントに追加する方法を示します。

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-category-x-axis name="xAxis" />
</igx-data-chart>
```

## カテゴリ Y 軸

[`IgxCategoryYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryyaxiscomponent.html) は、データを一連のカテゴリ データ項目として扱います。この軸のラベルがシーケンスの位置に応じて、Y 軸に沿って配置されます。この軸の種類では、数字、文字列などのほぼすべてのデータのタイプを表示できます。この軸タイプは、[カテゴリ シリーズ](data-chart-type-category-series.md) グループ内の[棒シリーズ](data-chart-type-category-bar-series.md)とのみ互換性があります。

以下のコード スニペットは、[`IgxCategoryYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryyaxiscomponent.html) を Angular データ チャート コンポーネントに追加する方法を示します。

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-category-y-axis name="yAxis" />
</igx-data-chart>
```

## カテゴリ DateTime X 軸

<!-- Angular, React, WebComponents -->

[`IgxCategoryDateTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorydatetimexaxiscomponent.html) 軸は、日付順にソートされた一連のカテゴリデータ項目としてデータを扱います。この軸のラベルは、
この軸の [`dateTimeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimeaxisbasecomponent.html#datetimememberpath) プロパティを使用してマッピングされたデータ列の値に従って、X軸に沿って配置されます。また、書式設定されたラベルを表示するには、[`formatLabel`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#formatlabel) イベントを使用できます。

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-category-date-time-x-axis name="xAxis"
        (FormatLabel)=”xAxisFormatLabel()”
        dateTimeMemberPath="Date" >
        </igx-category-date-time-x-axis>
</igx-data-chart>
```

## 数字 X 軸

[`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) は、データを連続的に変化する数値データ項目として扱います。この軸のラベルは X-Axis に沿ってに配置されます。ラベルの位置は、対応する値マッピング プロパティを使用してマップされたデータ列の値に基づいて変わります。このタイプの軸は、[散布シリーズ](data-chart-type-scatter-bubble-series.md)と[シェイプ シリーズ](data-chart-type-shape-series.md)のタイプと互換性があります。また、この軸は [棒シリーズ](data-chart-type-category-bar-series.md) タイプの[カテゴリ シリーズ](data-chart-type-category-series.md)と互換性があります。ここでは、`ValueMemberPath` プロパティを使用してデータ列をマップします。

以下のコードは、[`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) を Angular データ チャート コンポーネントに追加する方法を示します。

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-numeric-x-axis name="xAxis" />
</igx-data-chart>
```

## 数字 Y 軸

[`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) は、データを連続的に変化する数値データ項目として扱います。この軸のラベルは Y 軸に沿ってに配置されます。ラベルの位置は、対応する値マッピング プロパティを使用してマップされたデータ列の値に基づいて変わります。このタイプの軸は、[散布シリーズ](data-chart-type-scatter-bubble-series.md)と [シェイプ シリーズ](data-chart-type-shape-series.md) のタイプと互換性があります。また、このタイプの軸は、[ファイナンシャル シリーズ](data-chart-type-financial-series.md)、[範囲シリーズ](data-chart-type-range-series.md)、[カテゴリ シリーズ](data-chart-type-category-series.md) ([棒シリーズ](data-chart-type-category-bar-series.md) を除く) タイプと互換性があります。

以下のコードは、[`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) を Angular データ チャート コンポーネントに追加する方法を示します。

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-numeric-y-axis name="yAxis" />
</igx-data-chart>
```

## 時間 X 軸

[`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) は、日付順にソートされた一連のカテゴリデータ項目としてデータを扱います。この軸のラベルは、この軸の [`dateTimeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimeaxisbasecomponent.html#datetimememberpath) プロパティを使用してマッピングされたデータ列の値に従って、X軸に沿って配置されます。このタイプの軸は、[ファイナンシャル シリーズ](data-chart-type-financial-series.md)、[範囲シリーズ](data-chart-type-range-series.md)、[カテゴリ シリーズ](data-chart-type-category-series.md) と互換性があります。

[`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) に [`breaks`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html#breaks) を使用してデータの間隔を除外するオプションがあります。その結果として、ラベルは除外された間隔で表示されません。たとえば、勤務日/休業日、休日、週末などです。

以下のコードは、[`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) を Angular データ チャート コンポーネントに追加する方法を示します。

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-time-x-axis name="xAxis" dateTimeMemberPath="Date"
    DataSource="@data"/>
</igx-data-chart>
```

## 序数時間 X 軸

[`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html) と [`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) の主な違いは、序数軸で表示される日付は等距離であると見なされることです。[`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) は現在、日付を時系列に従ってソートします。そのため、パフォーマンスを向上させるため、またはデータ項目が同じ時間間隔で時系列順になっている場合は、[`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html) を使用することをお勧めします。

以下のコードは、[`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html) を Angular データ チャート コンポーネントに追加する方法を示します。

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-ordinal-time-x-axis name="xAxis" dateTimeMemberPath="Date"/>
</igx-data-chart>
```

## Y 軸の変化率

[`IgxPercentChangeYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpercentchangeyaxiscomponent.html) は、参照値としてシリーズの最初のポイントを取得します。それ以後の値は参照値に比較して増減パーセントに基づいて拡大縮小されます。

この軸タイプは [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) に基づいているため、同じシリーズ タイプをサポートします。[カテゴリ シリーズ](data-chart-type-category-series.md)の場合、参照値はそれらのシリーズの `ValueMemberPath` に対応します。[散布シリーズ](data-chart-type-scatter-bubble-series.md)の場合、参照値はそれらのシリーズの `YMemberPath` に対応します。[ファイナンシャル シリーズ](data-chart-type-financial-series.md)の場合、参照値は `OpenMemberPath` プロパティにマッピングされた最初の値に対応します。

以下のコードは、[`IgxPercentChangeYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpercentchangeyaxiscomponent.html) を Angular データ チャート コンポーネントに追加する方法を示します。

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-percent-change-y-axis name="yAxis" />
</igx-data-chart>
```

### その他のリソース

-   [軸タイプ](data-chart-axis-types.md)
-   [軸の共有](data-chart-axis-sharing.md)
-   [軸の設定](data-chart-axis-settings.md)
-   [チャートの凡例](data-chart-legends.md)
-   [シリーズのマーカー](data-chart-series-markers.md)
-   [シリーズ タイプ](data-chart-series-types.md)
