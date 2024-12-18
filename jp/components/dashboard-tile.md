---
title: Angular Dashboard Tile コンポーネント | Ignite UI for Angular
_description: Angular Dashboard Tile コンポーネントを簡単に使い始める方法をご覧ください。
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Dashboard components, Angular Dashboard Tile controls, UI コントロール, Angular ウィジェット, Web ウィジェット, UI ウィジェット, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Dashboard コンポーネント, Angular Dashboard Tile コントロール
mentionedTypes: ["Toolbar", "CategoryChart", "XamDataChart", "XamRadialGauge", "XamLinearGauge", "XamGeographicMap"]
_language: ja
---

# Angular Dashboard Tile (ダッシュボード タイル) の概要

Angular Dashboard Tile は、データ ソース コレクション/配列または単一のデータ ポイントを分析して、表示する最も適切な視覚化を決定する自動データ視覚化コンポーネントです。また、埋め込みの [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) で提供される一連のツールを使用して、さまざまな方法で表示される視覚化を変更できます。

提供されたデータの形状に応じて、以下を含む多種多様な視覚化が選択可能です。これには以下が含まれますが、これらに限定されません: カテゴリ チャート、\`ラジアル チャートと極座標チャート、散布図、地理マップ、ラジアル ゲージとリニア ゲージ、ファイナンシャル チャート、積層型チャート。

ツールバー内のチャート タイプ メニューを操作すると、候補リストの中から異なる視覚化を選択できます。

## Angular Dashboard Tile の例

<!-- TODO -->

<code-view style="height: 600px" alt="Angular Dashboard Tile の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/dashboard-tile/chart-dashboard"
                                                 github-src="charts/dashboard-tile/chart-dashboard">
</code-view>


## 依存関係

<!-- Angular, WebComponents, React -->

Ignite UI for Angular ツールセットに次のパッケージをインストールします:

```cmd
npm install igniteui-angular-charts
npm install igniteui-angular-core
npm install igniteui-angular-dashboards
npm install igniteui-angular-gauges
npm install igniteui-angular-grids
npm install igniteui-angular-inputs
npm install igniteui-angular-layouts
npm install igniteui-angular-maps
```

Dashboard Tile コンポーネントを使用する場合、以下のモジュールを使用することをお勧めします:

```ts
import { IgxDashboardTileModule, IgxDataChartDashboardTileModule, IgxRadialGaugeDashboardTileModule,
         IgxLinearGaugeDashboardTileModule, IgxGeographicMapDashboardTileModule,
         IgxPieChartDashboardTileModule } from "igniteui-angular-dashboards";

@NgModule({
    imports: [
        IgxDataChartDashboardTileModule,
        IgxRadialGaugeDashboardTileModule,
        IgxLinearGaugeDashboardTileModule,
        IgxGeographicMapDashboardTileModule,
        IgxPieChartDashboardTileModule,
        IgxDashboardTileModule
    ]
})
export class AppModule {}
```

<!-- end:Angular, WebComponents, React -->

## 使用方法

コントロールはバインドしたデータを評価し、Ignite UI for Angular ツールセットから表示する視覚エフェクトを選択するため、Dashboard Tile の `DataSource` プロパティを何にバインドするかによって、デフォルトで表示される視覚エフェクトが決まります。Dashboard Tile に表示されるデータ視覚化コントロールは次のとおりです。

*   [IgxCategoryChart](charts/chart-overview.md)
*   [IgxDataChart](charts/chart-overview.md)
*   [IgxDataPieChart](charts/types/data-pie-chart.md)
*   [IgxGeographicMap](geo-map.md)
*   [IgxLinearGauge](linear-gauge.md)
*   [IgxRadialGauge](radial-gauge.md)

デフォルトで選択されるデータ視覚化は、主にスキーマとバインドした `DataSource` の数によって決まります。たとえば、単一の数値をバインドすると [`IgxRadialGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html) が取得されますが、互いに区別しやすい値とラベルのペアのコレクションをバインドすると `XamDataPieChart` が取得されます。より多くの値パスを持つ `DataSource` をバインドすると、バインドされたコレクションの数に応じて、複数の列シリーズまたは線シリーズを持つ `DataChart` を受け取ります。また、[`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) を取得するために、`ShapeDataSource` または地理的ポイントを含むデータにバインドすることもできます。

`DataSource` をバインドするときに単一の視覚化にロックされることはなく、`VisualizationType` プロパティを設定することで、特定の視覚化を表示することをコントロールに指示できます。たとえば、特に折れ線チャートを表示したい場合は、次のように Dashboard Tile を定義できます。

<!-- TODO SAMPLE -->

<code-view style="height: 600px" alt="Angular Dashboard Tile Gauge の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/dashboard-tile/gauge-dashboard"
                                                 github-src="charts/dashboard-tile/gauge-dashboard">
</code-view>


視覚化または視覚化のプロパティも、コントロールの上部にある [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) を使用して構成できます。この [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) には、現在の視覚化の既定のツールに加えて、以下で強調表示されている 4 つの Dashboard Tile 固有のツールが含まれています。

<img src="../images/dashboard-tile-toolbar.png" />

左から右へ:

*   最初のツールは、コントロールに提供された `DataSource` を含むデータ グリッドを表示します。これは切り替えツールなので、グリッドを表示した後にもう一度クリックすると、視覚化に戻ります。
*   2 番目のツールを使用すると、現在のデータ視覚化の設定を構成できます。
*   3 番目のツールを使用すると、現在の視覚化を変更して、異なるシリーズ タイプをプロットしたり、まったく異なるタイプの視覚化を表示したりすることができます。これは、前述の `VisualizationType` プロパティを設定することによってコントロール上で設定できます。
*   最後のツールを使用すると、基になるデータ項目のどのプロパティをコントロールに含めるかを構成できます。これを構成するには、コントロールに [`includedProperties`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#includedProperties) または [`excludedProperties`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#excludedProperties) コレクションを設定します。

このデモでは、ダッシュボード タイルと Angular 円チャートの統合を示します。右上のツールバー オプションを使用すると、スタイル設定やデータ視覚化の変更にアクセスできます。

<code-view style="height: 600px" alt="Angular Dashboard Tile Pie の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/dashboard-tile/pie-dashboard"
                                                 github-src="charts/dashboard-tile/pie-dashboard">
</code-view>


このデモでは、ダッシュボード タイルと Angular 地理マップの統合を示します。右上のツールバー オプションを使用すると、スタイル設定やデータ視覚化の変更にアクセスできます。

<code-view style="height: 600px" alt="Angular Dashboard Tile Map の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/dashboard-tile/map-dashboard"
                                                 github-src="charts/dashboard-tile/map-dashboard">
</code-view>


## API リファレンス

*   [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html)
*   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
*   [`IgxDataPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html)
*   [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html)
*   [`IgxLinearGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html)
*   [`IgxRadialGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html)

## その他のリソース

*   [Ignite UI for Angular **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
*   [Ignite UI for Angular **GitHub (英語)**](https://github.com/IgniteUI/igniteui-angular)
