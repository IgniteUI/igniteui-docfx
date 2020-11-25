---
title: Angular チャートおよびグラフ | データ可視化ツール | 大量データ | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールのパフォーマンスを最適化する方法を学びます。Ignite UI for Angular グラフのパフォーマンスを改善します!
_keywords: Angular charts, category chart, performance, Ignite UI for Angular, Infragistics, data binding, Angular チャート, カテゴリ チャート, パフォーマンス, インフラジスティックス、データ バインディング
mentionedTypes: ['CategoryChart']
_language: ja
---

# Angular 大規模データ

Ignite UI for Angular カテゴリ チャート コンポネントは、以下のサンプルに示すように、数百万に及ぶデータ ポイントを含む大量のデータを高速で処理できます。

## Angular 大規模データの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-high-volume-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-high-volume' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 大規模データの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="category-chart-high-volume-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

## パフォーマンスの最適化

チャートのパフォーマンスに影響を及ぼすチャート機能および Angular 固有の機能があり、アプリケーションのパフォーマンスを最適化する際に検討する必要があります。

コンポーネントにバインドするプロパティで大量のデータを保存する場合、`@Component` デコレーターで `changeDetection: ChangeDetectionStrategy.OnPush` を設定します。Angular の各変更検出のサイクルでデータ配列内の変更を確認しないようにする設定です。

-   チャートに Angular が自動でデータ変更を通知する代わりに、バインドされたデータが変更された方法をコンポーネントに通知できます。
    -   デルタ通知の処理は、Angular が変更検出を実行する際に 100 万のレコードを含む配列のすべての変更を比較するより効果的に実行できます。
    -   バインドしたデータの変更をチャートに通知する方法の詳細については、チャートの `notify*` メソッドを参照してください。
-   Angular がデバッグ モードで実行されている場合、特定のブラウザーでパフォーマンスを低下させるオーバーヘッドがあります。実環境パフォーマンスを評価する場合、 `--prod` を使用して serve または build してください。

> 注: アプリケーションでパフォーマンス上の問題が発生した場合、デバッグ ビルドではなくプロダクション ビルドで実行するとチャートのパフォーマンスが改善されます。これらのケースでは必ずプロダクション ビルドを実行してください。
