---
title: Category Chart コンポーネント
_description: Ignite UI for Angular Category Chart コンポーネントは、カテゴリ データを表示するタッチ対応、高いパフォーマンス、軽量なチャート コントロールです。
_keywords: Ignite UI for Angular, データ ビジュアライゼーション, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Chart コンポーネント, Angular Category Chart コンポーネント, Angular Chart コントロール, Angular Category Chart コントロール
_language: ja
---
## Category Chart 

カテゴリー チャートは軽量で高パフォーマンスなチャートです。このチャートは、シンプルで直感的な API を使用したカテゴリ データの表示を簡単に構成できます。データ (コレクションまたはコレクションのコレクション) をバインドするだけで後の作業はチャートがすべて行います。

<div class="divider"></div>

### Category Chart デモ

<div class="sample-container" style="height: 650px">
    <iframe id="category-chart-overview-sample-iframe" src='{environment:demosBaseUrl}/category-chart-overview-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-overview-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

スマート データ アダプターは、データを分析して適切なビジュアライゼーションを描画します。たとえば `chartType` を `Auto` に設定した場合、大きなデータセットで折れ線チャートを描画する間、コントロールは小さなデータセットを提供して柱状チャートがプロットされるかどうかを決定します。

ただし、`chartType` を明示的に以下に設定してチャート タイプを指定することもできます。
    
- Line
- Area
- Column
- Point
- Spline
- SplineArea
- StepArea
- StepLine
- Waterfall

その他のカテゴリ チャート コントロールの直感的な動作の例は、明示的にラベルを設定する必要がないことです。カテゴリ チャートは、提供したデータ内で最初の適切な文字列プロパティを使用し、ラベルに使用します。

### 依存関係

カテゴリ チャートが `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に `IgxCategoryChartModule` をインポートする必要があります。

```typescript
// app.module.ts
import { IgxCategoryChartModule } from '@infragistics/ignite-ui-xplatform-for-angular/Debug/ES5/ig-categorychart-module';

@NgModule({
    imports: [
        ...
        IgxCategoryChartModule,
        ...
    ]
})
export class AppModule {}
```

利用可能なシリーズのサブセットおよびその他のオプションの機能を除外するカテゴリ チャートの最小構成を読み込むことができます。それにより、CategoryChartCoreModule および LineSeriesDynamicModule などの使用されるシリーズの動的なモジュールのみを読み込みます。chartType が auto の場合、読み込んだシリーズ型が選択されます。

<div class="divider--half"></div>

### 使用方法

カテゴリ チャート モジュールをインポートした後、チャートをデータにバインドします。

カテゴリ チャート コントロールを作成するには、はじめにデータをバインドする必要があります。以下のコード スニペットは、シンプルなデータソースを作成する方法を示します。

```typescript
var data = [
 { "CountryName": "China", "Pop1995": 1216, "Pop2005": 1297, "Pop2015": 1361, "Pop2025": 1394 },
 { "CountryName": "India", "Pop1995": 920, "Pop2005": 1090, "Pop2015": 1251, "Pop2025": 1396 },
 { "CountryName": "United States", "Pop1995": 266, "Pop2005": 295, "Pop2015": 322, "Pop2025": 351 },
 { "CountryName": "Indonesia", "Pop1995": 197, "Pop2005": 229, "Pop2015": 256, "Pop2025": 277 },
 { "CountryName": "Brazil", "Pop1995": 161, "Pop2005": 186, "Pop2015": 204, "Pop2025": 218 }
];

```

以下のコードはカテゴリ チャートを上記のデータにバインドします。

```html 
 <igx-category-chart [dataSource]="data"
                     width="700px"
                     height="500px">
 </igx-category-chart>
```

<div class="divider--half"></div>

### チャート タイプ

表示するチャート型を設定するために、カテゴリ チャートのデフォルト動作をオーバーライドできます。これを実行するには、`chartType` プロパティを設定します。以下は、カテゴリ チャートでサポートされるすべてのタイプです。

> [!NOTE]
> 特別なケースにプロパティの `auto` 設定があります。`auto` を使用した場合、チャートがデータを分析し、最も適したチャート タイプを割り当てます。

#### サポートされるチャート タイプ

プロパティ|説明|例
---|---|---
`line`|各データ ポイントにマーカーがあるカテゴリ折れ線シリーズを指定します。|![](../images/category_chart_line.png)
`area`|カテゴリ エリア シリーズを指定します。|![](../images/category_chart_area.png)
`column`|各データ ポイントに垂直長方形があるカテゴリ柱状チャートを指定します。|![](../images/category_chart_column.png)
`point`|各データ ポイントにマーカーがあるカテゴリ ポイント チャートを指定します。|![](../images/category_chart_point.png)
`stepLine`|カテゴリ ステップ折れ線チャートを指定します。|![](../images/category_chart_stepline.png)
`stepArea`|カテゴリ ステップ エリア チャートを指定します。|![](../images/category_chart_steparea.png)
`spline`|各データ ポイントにマーカーがあるカテゴリ スプライン折れ線シリーズを指定します。|![](../images/category_chart_spline.png)
`splineArea`|カテゴリ スプライン エリア シリーズを指定します。|![](../images/category_chart_splinearea.png)
`waterfall`|カテゴリ ウォーターフォール チャートを指定します。|![](../images/category_chart_waterfall.png)
`auto`|データ アダプターからの提案に基づいてチャート タイプの自動選択を指定します。|

