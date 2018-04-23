---
title: Category Chart コンポーネント - ネイティブ Angular | Ignite UI for Angular 
_description: Ignite UI for Angular Category Chart コンポーネントは複雑なデータ ビジュアライゼーションを API によって簡素化できます。ユーザーがデータのコレクションまたはコレクションのグループにバインドし、データを指定するプロパティを設定後、チャート コントロールが残りの作業を処理します。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular Category Chart
_language: ja
---
## Category Chart 

Category Chart はカテゴリ データを可視化するチャート コンポーネントです。複雑なデータ ビジュアライゼーションを API で簡素化できます。ユーザーがデータのコレクョンまたはコレクション グループにバインドし、データを指定するプロパティの設定後、残りの作業はチャート コントロールによって処理されます。コンポーネントはデータを解析し、データを表すための最適なシリーズを自動的に選択します。また、ユーザーが `chartType` プロパティを設定して定義済みのチャート タイプから選択できます。チャート タイプは折れ線、エリア、柱状、ポイント、スプライン、スプライン エリア、ステップ エリア、ステップ折れ線、およびウォーターフォールを含みます。

### Category Chart デモ

<div class="sample-container" style="height: 550px">
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

利用可能なシリーズのサブセットおよびその他のオプションの機能を除外するカテゴリ チャートの最小構成を読み込むことができます。それにより、igxCategoryChartCoreModule および igxLineSeriesDynamicModule などの使用されるシリーズの動的なモジュールのみを読み込みます。`chartType` が `auto` の場合、読み込んだシリーズ型が選択されます。

<div class="divider--half"></div>

### 使用方法

カテゴリ チャート モジュールをインポートした後、チャートをデータにバインドします。

`igx-category-chart` コントロールを作成するには、はじめにデータをバインドする必要があります。以下のコード スニペットは、シンプルなデータソースを作成する方法を示します。

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

