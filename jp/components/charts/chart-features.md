---
title: Angular チャート機能 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular チャート機能
_keywords: Angular Charts, Features, Infragistics, Angular チャート, 機能, インフラジスティックス
mentionedTypes: []
_language: ja
---

# Angular チャート機能

Ignite UI for Angular チャート コンポーネントを使用すると、さまざまな機能を表示して、チャートで伝えられる完全なデータ ストーリーを表現できます。これらの各機能は完全にカスタマイズ可能であり、デザインのニーズにに合わせてスタイルを設定できるため、完全に制御できます。強調表示や注釈などの操作により、重要なデータの詳細を呼び出すことができ、チャート内のより深いデータ分析が可能になります。

Angular チャートは、次のチャート機能を提供します。

### 軸

異なる軸プロパティを使用して、X 軸と Y 軸の両方のすべての側面を変更またはカスタマイズします。グリッド線を表示したり、目盛りのスタイルをカスタマイズしたり、軸のタイトルを変更したり、軸の位置や交差値を変更したりすることもできます。Angular チャートのカスタマイズについての詳細には、[軸グリッド線](features/chart-axis-gridlines.md)、[軸レイアウト](features/chart-axis-layouts.md)、および[軸オプション](features/chart-axis-options.md)のトピックをご覧ください。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-axis-crossing"
           alt="Angular 軸交差軸の例"
           github-src="charts/data-chart/axis-crossing">
</code-view>

<div class="divider--half"></div>

### 注釈

これらの追加のレイヤーは、マウス/タッチに依存するほかのチャートレイヤーの上にあります。個別にまたは組み合わせて使用すると、チャート内の特定の値を強調するのに役立つ強力な操作を提供します。この機能の詳細については、[チャート注釈](features/chart-annotations.md)トピックを参照してください。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-with-annotations"
           alt="Angular 注釈の例"
           github-src="charts/category-chart/line-chart-with-annotations">
</code-view>

<div class="divider--half"></div>

### アニメーション

アニメーションを有効にして、新しいデータ ソースを読み込むときにチャートをアニメーション化します。これらは、さまざまなタイプのアニメーションとそれらのアニメーションが実行される速度を設定することでカスタマイズできます。この機能の詳細については、[チャート アニメーション](features/chart-animations.md)トピックを参照してください。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-with-animations"
           alt="Angular 構成オプションの例"
           github-src="charts/category-chart/line-chart-with-animations">
</code-view>

<div class="divider--half"></div>

### 強調表示

線、列、マーカーなどのビジュアルに、マウスをデータ項目の上に置いたときに強調表示して、フォーカスを合わせます。この機能は、すべてのチャート タイプで有効になっています。この機能の詳細については、[チャート強調表示](features/chart-highlighting.md)トピックを参照してください。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-with-highlighting"
           alt="Angular 強調表示の例"
           github-src="charts/category-chart/category-chart-column-chart-with-highlighting">
</code-view>

<div class="divider--half"></div>

### マーカー

チャート シリーズのマーカーを使用して値が主要なグリッド線の間にある場合でも、データ ポイントをすばやく識別します。これらは、スタイル、カラー、および形状で完全にカスタマイズ可能です。この機能の詳細については、[チャート マーカー](features/chart-markers.md)トピックを参照してください。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-marker-options"
           alt="Angular 構成オプションの例"
           github-src="charts/category-chart/marker-options">
</code-view>

<div class="divider--half"></div>

### ナビゲーション

マウス、キーボード、およびタッチ操作でズームおよびパンすることにより、チャートをナビゲートできます。この機能の詳細については、[チャート ナビゲーション](features/chart-navigation.md)トピックを参照してください。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-chart-navigation"
           alt="Angular ナビゲーションの例"
           github-src="charts/data-chart/chart-navigation">
</code-view>

<div class="divider--half"></div>

### オーバーレイ

オーバーレイを使用すると、チャートに水平線または垂直線をプロットして、重要な値としきい値に注釈を付けることができます。この機能の詳細については、[チャート オーバーレイ](features/chart-overlays.md)トピックを参照してください。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-series-value-overlay"
           alt="Angular 値オーバーレイの例"
           github-src="charts/data-chart/series-value-overlay">
</code-view>

<div class="divider--half"></div>

### パフォーマンス

Angular チャートは、数百万のデータ ポイントを描画し、それらを数ミリ秒ごとに更新する高性能のために最適化されています。ただし、チャートのパフォーマンスに影響を与えるいくつかのチャート機能があり、アプリケーションのパフォーマンスを最適化するときにそれらを考慮する必要があります。この機能の詳細については、[チャート パフォーマンス](features/chart-performance.md)トピックを参照してください。

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-high-volume"
           alt="Angular チャート パフォーマンスの例" >
</code-view>

<div class="divider--half"></div>

### ツールチップ

ツールチップを使用して、特定のシリーズ タイプに関連するすべての情報を表示します。項目レベルやカテゴリ レベルのツールチップなど、有効にできるさまざまなツールチップがあります。この機能の詳細については、[チャート ツールチップ](features/chart-tooltips.md)トピックを参照してください。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-with-tooltips"
           alt="Angular ツールチップ タイプの例"
           github-src="charts/category-chart/column-chart-with-tooltips">
</code-view>

<div class="divider--half"></div>

### トレンドライン

トレンドラインを使用して、トレンドを特定したり、データ内のパターンを見つけたりします。Angular チャートでは、CubicFit や LinearFit など、さまざまなトレンドラインがサポートされています。この機能の詳細については、[チャート トレンドライン](features/chart-trendlines.md)トピックを参照してください。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-trendlines"
           alt="Angular トレンドラインの例"
           github-src="charts/financial-chart/trendlines">
</code-view>

<div class="divider--half"></div>
