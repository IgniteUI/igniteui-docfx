---
title: Angular 重大な変更 | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular の重大な変更とコードを最新の API に更新する方法について説明します。
_keywords: Breaking Changes, Ignite UI for Angular, Infragistics, 重大な変更, インフラジスティックス
_language: ja
---

# Ignite UI for Angular の重大な変更

このトピックでは、Ignite UI for Angular の重大な変更に関する情報と、古いコードを最新の API に更新する方法について説明します。

## Import ステートメントの変更

Import ステートメントは、API クラスと列挙型へのフル パスではなくパッケージ名のみを使用するように簡素化されました。

> [!NOTE]
> これらの重大な変更は、パッケージおよびコンポーネントの **8.2.12** バージョン で導入されました。

| 影響されるパッケージ                                                                                                                     | 影響されるコンポーネント                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <a href="https://www.npmjs.com/package/igniteui-angular-excel/v/8.2.12" target="_blank">igniteui-angular-excel</a>             | [Excel ライブラリ](excel-library.md)                                                                                                                                                            |
| <a href="https://www.npmjs.com/package/igniteui-angular-spreadsheet/v/8.2.12" target="_blank">igniteui-angular-spreadsheet</a> | [スプレッドシート](spreadsheet-overview.md)                                                                                                                                                        |
| <a href="https://www.npmjs.com/package/igniteui-angular-maps/v/8.2.12" target="_blank">igniteui-angular-maps</a>               | [地理マップ](geo-map.md)、 [ツリーマップ](treemap-overview.md)                                                                                                                                         |
| <a href="https://www.npmjs.com/package/igniteui-angular-gauges/v/8.2.12" target="_blank">igniteui-angular-gauges</a>           | [ブレット グラフ](bullet-graph.md)、 [リニア ゲージ](linear-gauge.md)、 [ラジアル ゲージ](radial-gauge.md)                                                                                                       |
| <a href="https://www.npmjs.com/package/igniteui-angular-charts/v/8.2.12" target="_blank">igniteui-angular-charts</a>           | [カテゴリ チャート](category-chart.md)、 [データ チャート](data-chart.md)、 [ドーナツ チャート](doughnut-chart.md)、 [ファイナンシャル チャート](financial-chart.md)、 [円チャート](pie-chart.md)、 [ズーム スライダー](zoomslider-overview.md) |
| <a href="https://www.npmjs.com/package/igniteui-angular-grids/v/8.2.12" target="_blank">igniteui-angular-grids</a>             | [データ グリッド](data-grid.md)                                                                                                                                                                   |
| <a href="https://www.npmjs.com/package/igniteui-angular-core/v/8.2.12" target="_blank">igniteui-angular-core</a>               | すべてのクラスと列挙型                                                                                                                                                                                |

## 変更後のコード

API クラスと列挙型へのフル パスの代わりにパッケージ名のみを使用できます。

注: Data Grid コンポーネントとそれに対応するモジュールの名前も変更されました。

```ts
// gauges:
import { IgxLinearGauge } from "igniteui-angular-gauges";
import { IgxLinearGaugeModule } from "igniteui-angular-gauges";
import { IgxLinearGraphRange } from "igniteui-angular-gauges";

import { IgxRadialGauge } from 'igniteui-angular-gauges}';
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';
import { IgxRadialGaugeRange } from 'igniteui-angular-gauges';
import { SweepDirection } from 'igniteui-angular-core';

// charts:
import { IgxFinancialChartComponent } from "igniteui-angular-charts";
import { IgxFinancialChartModule } from "igniteui-angular-charts";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxDataChartCoreModule } from "igniteui-angular-charts";

// maps:
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicMapModule } from "igniteui-angular-maps";
```

## 変更前のコード

以前は、API クラスと列挙型への完全なパスを使用してインポートする必要がありました。

```ts
// gauges:
import { IgxLinearGaugeComponent } from 'igniteui-webcomponents-gauges/ES5/igx-linear-gauge-component';
import { IgxLinearGaugeModule } from 'igniteui-webcomponents-gauges/ES5/igx-linear-gauge-module';
import { IgxLinearGraphRange } from 'igniteui-webcomponents-gauges/ES5/igx-linear-graph-range';

import { IgxRadialGaugeComponent } from "igniteui-webcomponents-gauges/ES5/igx-radial-gauge-component";
import { IgxRadialGaugeModule } from "igniteui-webcomponents-gauges/ES5/igx-radial-gauge-module";
import { IgxRadialGaugeRange } from "igniteui-webcomponents-gauges/ES5/igx-radial-gauge-range";
import { SweepDirection } from "igniteui-webcomponents-core/ES5/SweepDirection";

// charts:
import { IgxFinancialChartComponent } from "igniteui-webcomponents-charts/ES5/igx-financial-chart-component";
import { IgxFinancialChartModule } from "igniteui-webcomponents-charts/ES5/igx-financial-chart-module";
import { IgxDataChartComponent } from "igniteui-webcomponents-charts/ES5/igx-data-chart-component";
import { IgxDataChartCoreModule } from "igniteui-webcomponents-charts/ES5/igx-data-chart-core-module";

// maps:
import { IgxGeographicMapComponent } from "igniteui-webcomponents-maps/ES5/igx-geographic-map-component";
import { IgxGeographicMapModule } from "igniteui-webcomponents-maps/ES5/igx-geographic-map-module";
```
