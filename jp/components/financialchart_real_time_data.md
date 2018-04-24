---
title: Financial Chart - リアルタイム データ
_description: Ignite UI for Angular Financial Chart コンポーネントは簡易な API を使用してファイナンシャル データを表示できます。ユーザーがデータにバインド後にチャートがデータの可視化オプションを複数提供します。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular Financial Chart
_language: ja
---
## リアルタイム データにバインド

`igx-financial-chart` コントロールはリアルタイムでデータの描画をすばやく処理できるコントロールです。以下のデモは Financial Chart でデータ更新の高頻度の処理を紹介します。

### リアルタイム データにバインドするデモ

<div class="sample-container" style="height: 550px">
    <iframe id="financial-chart-high-frequency-iframe" src='{environment:demosBaseUrl}/financial-chart-high-frequency' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-high-frequency-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>


### コード例

高頻度の更新を持つファイナンシャル チャート コントロールを作成するには、データ ソースの最初のデータ項目を削除して、データの終了に新しいデータ項目を追加します。また、チャートに変更について通知するために `notifyRemoveItem` および `notifyInsertItem` 関数を呼び出します。また、バインドしたデータの変更をチャートに通知する方法の詳細については、ファイナンシャル チャートの `notify*` メソッドを参照してください。

以下の例は、高頻度のデータ更新について Financial Chart を通知する方法を紹介します。

```typescript

private tick(): void {
    const newVal = this.getValue();
    const oldVal = this.data[0];

    this.data.push(newVal);
    this.chart.notifyInsertItem(this.data, this.data.length - 1, newVal);

    this.data.splice(0, 1);
    this.chart.notifyRemoveItem(this.data, 0, oldVal);
}

```

<div class="divider--half"></div>

### 追加のリソース
<div class="divider--half"></div>

* [チャートのパフォーマンス](financialchart_performance.md)
* [大量のデータのバインド](financialchart_high_volume_data.md)
* [複数データ ソースへのバインド](financialchart_binding_to_multiple_data.md)
