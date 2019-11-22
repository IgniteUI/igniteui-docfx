---
title: 大規模なデータの処理
_description: Ignite UI for Angular Category Chart コンポーネントは複雑なデータ ビジュアライゼーションを API によって簡素化できます。ユーザーがデータのコレクションまたはコレクションのグループにバインドし、データを指定するプロパティを設定後、チャート コントロールが残りの作業を処理します。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular Category Chart
_language: ja
---

## 大規模なデータの処理

Category Chart コントロールは、数百万に及ぶデータ ポイントを含む大量のデータを高速で処理できます。

### デモ

<div class="sample-container loading" style="height: 570px">
    <iframe id="category-chart-performance-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-high-volume' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="category-chart-performance-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

### パフォーマンスの最適化

> チャートのパフォーマンスに影響を及ぼすチャート機能および Angular 固有の機能があり、アプリケーションでのパフォーマンスを最適化する際に検討する必要があります。
>
> -   コンポーネントにバインドするプロパティで大量のデータを保存する場合、`@Component` デコレーターで `changeDetection: ChangeDetectionStrategy.OnPush` を設定します。
>     -   Angular の各変更検出のサイクルでデータ配列内の変更を確認しないようにする設定です。
> -   チャートに Angular が自動でデータ変更を通知する代わりに、バインドされたデータが変更された方法をコンポーネントに通知できます。
>     -   デルタ通知の処理は、Angular が変更検出を実行する際に 100 万のレコードを含む配列のすべての変更を比較するより効果的に実行できます。
>     -   バインドしたデータの変更をチャートに通知する方法の詳細については、チャートの `notify*` メソッドを参照してください。
> -   Angular が Debug モードで実行されている場合、特定のブラウザーでパフォーマンスを低下させるオーバーヘッドがあります。実環境パフォーマンスを評価する場合、`--prod` を使用して serve または build してください。
>
> 注: アプリケーションでパフォーマンス上の問題が発生した場合、デバッグ ビルドではなくプロダクション ビルドで実行するとチャートのパフォーマンスが改善されます。  これらのケースでは必ずプロダクション ビルドを実行してください。
