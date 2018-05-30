---
title: Financial Chart - カスタム インジケーター
_description: Ignite UI for Angular Financial Chart コンポーネントは簡易な API を使用してファイナンシャル データを表示できます。ユーザーがデータにバインド後にチャートがデータの可視化オプションを複数提供します。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular Financial Chart
_language: ja
---
## カスタム インジケーター

`igx-financial-chart` コントロールでは、インジケーター ペインに表示するカスタム財務指標を定義できます。

### デモ

<div class="sample-container" style="height: 570px">
    <iframe id="financial-chart-custom-indicators-iframe" src='{environment:demosBaseUrl}/financial-chart-custom-indicators' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-custom-indicators-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

`igx-financial-chart` でカスタム財務指標を有効にするには、`customIndicatorNames` プロパティに名前を追加し、`applyCustomIndicators` イベントで計算を実行します。

以下のコード例は、2 つのカスタム インジケーターを設定して計算する方法を紹介します。単純移動平均 (SMA) およびランダム値を表示するインジケーターを使用します。

```html
 <igx-financial-chart
    width="850px"
    height="600px"
    [dataSource]="data"
    (applyCustomIndicators)="applyCustomIndicators($event)"
    customIndicatorNames="Open, Open (SMA)">
 </igx-financial-chart>
```

```typescript
    public applyCustomIndicators(event: { sender: any, args: FinancialChartCustomIndicatorArgs }) {
        if (event.args.index === 0) {
            const info: FinancialEventArgs = event.args.indicatorInfo;
            const ds = info.dataSource;
            const open = ds.openColumn;
            for (let i = 0; i < ds.indicatorColumn.length; i++) {
                ds.indicatorColumn[i] = open[i];
            }
        } else {
            const info: FinancialEventArgs = event.args.indicatorInfo;
            const ds = info.dataSource;
            const close = ds.closeColumn;
            for (let i = 0; i < ds.indicatorColumn.length; i++) {
                let startIndex = i - 9;
                if (startIndex < 0) {
                    startIndex = 0;
                }
                const count = (i - startIndex) + 1;

                let sum = 0;
                for (let j = startIndex; j <= i; j++) {
                    sum += close[j];
                }
                ds.indicatorColumn[i] = sum / count;
            }
        }
    }
```