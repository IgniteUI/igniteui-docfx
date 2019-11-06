---
title: Data Chart コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、シリーズ、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。このチャートでは、複合チャート ビューを作成するために、同じチャート プロット領域にこれらの視覚要素の複数のインスタンスを作成できます。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular Chart, Angular Chart コントロール, Angular Chart 例, Angular Chart コンポーネント, Angular Data Chart
_language: ja
---

## 軸

[`IgxDataChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachart.html) コントロールの軸は、軸の主線、グリッド線、目盛り、タイトル、およびラベルの外観を指定するための基本プロパティを提供します。チャートがサポートするさまざまなシリーズ タイプの [`IgxDataChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachart.html) で使用できる複数の軸タイプがあります。シリーズのタイプは、一緒に使用できる軸タイプを決定します。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-axis-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

### サポートされる軸

[`IgxDataChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachart.html) コントロールは、特定の種類のシリーズで使用することを目的としたさまざまな種類の軸をサポートします。以下の表はシリーズ タイプで使用できます。

| 軸タイプ               | サポートされるシリーズ タイプ                                                                                                                                                                                                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CategoryYAxis      | [Category ](data-chart-type-category-series.md) グループの [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) のみ                                                                                                             |
| CategoryXAxis      | すべての [Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md) ([`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) 以外)    |
| TimeXAxis          | すべての [Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md) ([`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) 以外)    |
| OrdinalTimeXAxis   | すべての [Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md) ([`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) 以外)    |
| PercentChangeYAxis | すべての [Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md)、[Scatter シリーズ](data-chart-type-scatter-bubble-series.md)、[Shape シリーズ](data-chart-type-shape-series.md)                       |
| NumericYAxis       | すべての [Scatter シリーズ](data-chart-type-scatter-bubble-series.md)、[Shape シリーズ](data-chart-type-shape-series.md)、[Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md)                       |
| NumericXAxis       | [Category シリーズ](data-chart-type-category-series.md) グループのすべての [Scatter シリーズ](data-chart-type-scatter-bubble-series.md)、[Shape シリーズ](data-chart-type-shape-series.md)、[`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) |
| NumericAngleAxis   | すべての [極座標シリーズ](data-chart-type-polar-series.md)                                                                                                                                                                                                                                           |
| NumericRadiusAxis  | すべての [極座標シリーズ](data-chart-type-polar-series.md) と [ラジアル シリーズ](data-chart-type-radial-series.md)                                                                                                                                                                                           |
| CategoryAngleAxis  | すべての [ラジアル シリーズ](data-chart-type-radial-series.md)                                                                                                                                                                                                                                        |

### カテゴリ X 軸

[`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html)は、データをカテゴリのデータ項目のシーケンスとして扱っています。この軸のラベルがシーケンスの位置に応じて、X 軸に沿って配置されます。この軸の種類では、数字、文字列などのほぼすべてのデータのタイプを表示できます。軸のタイプは、[Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md) ([`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) 以外)と互換性があります。

以下のコードは、[`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html) を [`IgxDataChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachart.html) コントロールに追加する方法を示します。

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-category-x-axis name="xAxis" />
</igx-data-chart>
```

### カテゴリ Y 軸

[`IgxCategoryYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryyaxiscomponent.html)は、データをカテゴリのデータ項目のシーケンスとして扱っています。この軸のラベルがシーケンスの位置に応じて、Y 軸に沿って配置されます。この軸の種類では、数字、文字列などのほぼすべてのデータのタイプを表示できます。この軸タイプは、[Category Series](data-chart-type-category-series.md) グループ内の [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) とのみ互換性があります。

以下のコード スニペットは、[`IgxCategoryYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryyaxiscomponent.html) を [`IgxDataChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachart.html) コントロールに追加する方法を示します。

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-category-y-axis name="yAxis" />
</igx-data-chart>
```

### カテゴリ DateTime X 軸

[`IgxCategoryDateTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorydatetimexaxiscomponent.html) は、日付順に並べ替えられた一連のカテゴリデータ項目としてデータを扱います。この軸のラベルは、この軸の `DateTimeMemberPath` プロパティを使用してマップされるデータ列の値に基づいて X 軸に沿って配置されます。軸のタイプは、[Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md) ([`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) 以外)と互換性があります。

以下のコード スニペットは、[`IgxCategoryDateTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorydatetimexaxiscomponent.html) を [`IgxDataChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachart.html) コントロールに追加する方法を示します。

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-category-date-time-x-axis name="yAxis"
        (FormatLabel)=”xAxisFormatLabel()”
        dateTimeMemberPath="Date" />
</igx-data-chart>
```

### 数字 X 軸

[`IgxNumericXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) は、データをカテゴリのデータ項目のシーケンスとして扱っています。この軸のラベルは X-Axis に沿ってに配置されます。ラベルの位置は、対応する値マッピング プロパティを使用してマップされたデータ列の値に基づいて変わります。このタイプの軸は、[Scatter シリーズ](data-chart-type-scatter-bubble-series.md)と [Shape シリーズ](data-chart-type-shape-series.md) のタイプと互換性があります。また、この軸は [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) タイプの [カテゴリ シリーズ](data-chart-type-category-series.md) と互換性があります。ここでは、`ValueMemberPath` プロパティを使用してデータ列をマップします。

以下のコード スニペットは、[`IgxNumericXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) を [`IgxDataChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachart.html) コントロールに追加する方法を示します。

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-numeric-x-axis name="xAxis" />
</igx-data-chart>
```

### 数字 Y 軸

[`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) は、データをカテゴリのデータ項目のシーケンスとして扱っています。この軸のラベルは Y 軸に沿ってに配置されます。ラベルの位置は、対応する値マッピング プロパティを使用してマップされたデータ列の値に基づいて変わります。このタイプの軸は、[Scatter シリーズ](data-chart-type-scatter-bubble-series.md)と [Shape シリーズ](data-chart-type-shape-series.md) のタイプと互換性があります。また、このタイプの軸は、[Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md) ([`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) を除く) タイプと互換性があります。

以下のコード スニペットは、[`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) を [`IgxDataChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachart.html) コントロールに追加する方法を示します。

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-numeric-y-axis name="yAxis" />
</igx-data-chart>
```

### 時間 X 軸

[`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) は、日付順に並べ替えられた一連のカテゴリデータ項目としてデータを扱います。この軸のラベルは、この軸の `DateTimeMemberPath` プロパティを使用してマップされるデータ列の値に基づいて X 軸に沿って配置されます。このタイプの軸は、[Financial シリーズ](data-chart-type-financial-series.md)、[Range シリーズ](data-chart-type-range-series.md)、[Category シリーズ](data-chart-type-category-series.md) と互換性があります。

[`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) に [`breaks`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html#breaks) を使用してデータの間隔を除外するオプションがあります。その結果として、ラベルは除外された間隔で表示されません。たとえば、勤務日/休業日、休日、週末などです。

以下のコード スニペットは、[`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) を [`IgxDataChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachart.html) コントロールに追加する方法を示します。

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-time-x-axis name="xAxis" dateTimeMemberPath="Date"/>
</igx-data-chart>
```

### 序数時間 X 軸の

[`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html) と [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) の主な違いは、序数軸で表示される日付は等距離であると見なされることです。[`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) は現在、日付を時系列に従って並べ替えます。そのため、パフォーマンスを向上させるため、またはデータ項目が同じ時間間隔で時系列順になっている場合は、[`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html) を使用することをお勧めします。

以下のコード スニペットは、[`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html) を [`IgxDataChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachart.html) コントロールに追加する方法を示します。

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-ordinal-time-x-axis name="xAxis" dateTimeMemberPath="Date"/>
</igx-data-chart>
```

### Y軸の変化率

[`IgxPercentChangeYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpercentchangeyaxiscomponent.html) は、参照値としてシリーズの最初のポイントを取得します。それ以後の値は参照値に比較して増減パーセントに基づいて拡大縮小されます。

この軸タイプは [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) に基づいているため、同じシリーズ タイプをサポートします。[Category シリーズ](data-chart-type-category-series.md)の場合、参照値はそれらのシリーズの `ValueMemberPath` に対応します。[散布シリーズ](data-chart-type-scatter-bubble-series.md)の場合、参照値はそれらのシリーズの `YMemberPath` に対応します。[ファイナンシャル シリーズ](data-chart-type-financial-series.md)の場合、参照値は `OpenMemberPath` プロパティにマッピングされた最初の値に対応します。

以下のコード スニペットは、[`IgxPercentChangeYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpercentchangeyaxiscomponent.html) を [`IgxDataChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachart.html) コントロールに追加する方法を示します。

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-percent-change-y-axis name="yAxis" />
</igx-data-chart>
```

### その他のリソース

-   [軸のタイプ](data-chart-axis-types.md)
-   [軸の共有](data-chart-axis-sharing.md)
-   [軸設定](data-chart-axis-settings.md)
-   [チャート凡例](data-chart-legends.md)
-   [シリーズ マーカー](data-chart-series-markers.md)
-   [シリーズ タイプ](data-chart-series-types.md)
