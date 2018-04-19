---
title: Financial Chart コンポーネント
_description: Ignite UI for Angular Financial Chart コンポーネントは、財務データを表示するタッチ対応、高いパフォーマンス、軽量なチャート コントロールです。
_keywords: Ignite UI for Angular, データ ビジュアライゼーション, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Chart コンポーネント, Angular Financial Chart コンポーネント, Angular Chart コントロール, Angular Financial Chart コントロール
_language: ja
---
## ファイナンシャル チャート

Financial Chart は軽量で高パフォーマンスなチャートです。このチャートは、シンプルで直感的な API を使用した財務データの表示を簡単に構成できます。データ (コレクションまたはコレクションのコレクション) をバインドするだけで後の作業はチャートがすべて行います。チャートは data プロパティにバインドされるデータ ソースの構造を解析します。データ ソースにある各コレクション用に単一の財務物価シリーズをプロットします。また、各コレクションのデータ項目で Open、High、Low、Close、および Volume 名前を持つ 5 つの数値データ列および Time 名前を持つ単一の日刻列を検索して解析します。チャートを使用してデータを可視化する複数方法を提供します。価格およびボリュームに複数の表示モードおよび財務指標の大量を提供します。チャートにデータ コンテキストを表示するためにラベルの書式設定を使用します。

### Financial Chart デモ

<div class="sample-container" style="height: 550px">
    <iframe id="financial-chart-overview-sample-iframe" src='{environment:demosBaseUrl}/financial-chart-overview-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-overview-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

`chartType` プロパティを以下のオプションの 1 つに設定してチャート タイプを明示的に指定することもできます。
    
プロパティ|説明
---|---
`bar`|各データ ポイントにマーカーがある棒シリーズを指定します。
`candle`|ローソク足シリーズを指定します。
`column`|柱状シリーズを指定します。
`line`|折れ線シリーズを指定します。
`auto`|データ アダプターからの提案に基づいてチャート タイプの自動選択を指定します。

### ツールバー

ファイナンシャル チャートの上側にツールバーが表示されます。チャートで表示されるデータの詳細を変更でき、複数のペインの表示もできます。ツールバーには次のセレクターが含まれます:

- インジケーター タイプ セレクター - 財務指標のタイプを選択できます。これらのインジケーターは同じ Y 軸を共有しないため、価格ペインの下のインジケーター ペインに表示されます。
- オーバーレイ タイプ - 財務オーバーレイのタイプを選択できます。これらのオーバーレイは、同じ Y 軸スケールを共有する財務物価シリーズの前に表示されます。オーバーレイには、BollingerBands および PriceChannel の 2 種類があります。
- トレンドライン タイプ セレクター - トレンドラインのタイプを選択できます。トレンドラインは価格ペインおよびボリューム ペインのトレンドライン レイヤーで表示されます。
- 日付範囲セレクター - データを表示するために定義済みの範囲を選択できます。
- チャート タイプ セレクター - ファイナンシャル チャートのチャート タイプを選択できます。これは価格ペインで表示されます。
- ボリューム タイプ セレクター - ボリューム ペインで出来高を表示します。None、Column、Line、および Area チャート タイプから選択できます。

### 依存関係

ファイナンシャル チャートが `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に `IgxFinancialChartModule` をインポートする必要があります。

```typescript
// app.module.ts
import {IgxFinancialChartModule} from '@infragistics/igniteui-angular-charts/ES5/ig-financialchart-module'

@NgModule({
    imports: [
        ...
        IgxFinancialChartModule,
        ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

### 使用方法

ファイナンシャル チャート モジュールをインポートした後、チャートをデータにバインドします。

ファイナンシャル チャート コントロールを作成するには、はじめにデータをバインドする必要があります。以下のコード スニペットは、シンプルなデータソースを作成する方法を示します。

```typescript

var data = [
	{ time: new Date(2013, 1, 1), open: 268.93, high: 268.93, low: 262.80, close: 265.00, volume: 6118146 },
	{ time: new Date(2013, 1, 4), open: 262.78, high: 264.68, low: 259.07, close: 259.98, volume: 3723793 },
	{ time: new Date(2013, 1, 5), open: 262.00, high: 268.03, low: 261.46, close: 266.89, volume: 4013780 },
	{ time: new Date(2013, 1, 6), open: 265.16, high: 266.89, low: 261.11, close: 262.22, volume: 2772204 },
	{ time: new Date(2013, 1, 7), open: 264.10, high: 264.10, low: 255.11, close: 260.23, volume: 3977065 },
	{ time: new Date(2013, 1, 8), open: 261.40, high: 265.25, low: 260.56, close: 261.95, volume: 3879628 },
	{ time: new Date(2013, 1, 11), open: 263.20, high: 263.25, low: 256.60, close: 257.21, volume: 3407457 },
	{ time: new Date(2013, 1, 12), open: 259.19, high: 260.16, low: 257.00, close: 258.70, volume: 2944730 },
	{ time: new Date(2013, 1, 13), open: 261.53, high: 269.96, low: 260.30, close: 269.47, volume: 5295786 },
	{ time: new Date(2013, 1, 14), open: 267.37, high: 270.65, low: 265.40, close: 269.24, volume: 3464080 },
	{ time: new Date(2013, 1, 15), open: 267.63, high: 268.92, low: 263.11, close: 265.09, volume: 3981233 }
];

```

以下のコードはファイナンシャル チャートを上記のデータにバインドします。

```html 
 <igx-financial-chart [dataSource]="data" 
    width="850px"
    height="600px">
 </igx-financial-chart>
```


