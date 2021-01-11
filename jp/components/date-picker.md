---
title: Angular 日付選択 | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの Angular日付選択コンポーネントは、ユーザーの日付選択を支援します。Ignite UI for Angular でグラフと視覚化を改善します!
_keywords: Angular date picker, drop down, Ignite UI for Angular, Infragistics, 日付選択, ドロップダウン, インフラジスティックス
mentionedTypes: ['DatePicker']
_language: ja
---

# Angular 日付選択の概要

日付選択コンポーネントは、ドロップダウン カレンダー UI を使用して日、月、年を直感的に選択できます。これは、アプリケーション ユーザーが特定の日付を選択する必要があり、複数のエディターを組み合わせて日付範囲 UI を作成する場合に便利です。

## 使用方法

Angular 日付選択エディター コンポーネントは、デフォルトでは、テキスト領域、カレンダー ドロップダウン ボタン、およびクリア ボタンの 3 つの構成されます。これらの領域について以下に説明します。

-   テキスト領域: エディターの `Value` プロパティに保存されている選択した日付を表示します。

-   カレンダー: カレンダー ボタンをクリックすると、日付選択のカレンダー ドロップダウンが開きます。カレンダーが開き、現在選択されている `Value` の月が表示されます。`Value` が指定されていない場合、カレンダーは現在の日付に対応する月を表示します。上部の月をクリックすると、月のリストが表示され、年も同様です。月と年の可視化の左右にある矢印ボタンは、表示されている月を時系列で増減します。カレンダー ボタンの色を変更するには、コントロールの `IconColor` プロパティを設定します。

-   クリア ボタン: クリア ボタンはカレンダー ボタンのすぐ左にあり、X で表示されます。クリックすると、日付選択の `Value` をクリアします。クリア ボタンの表示/非表示は、日付選択の `ShowClearButton` プロパティを設定して切り替えることができます。

ユーザーは、コントロールのさまざまなテキスト プロパティを使用して日付選択のフォントをカスタマイズできます。使用できるプロパティは `TextColor`、`TextFontFamily`、`TextFontSize`、`TextFontStyle`、および `TextFontWeight` です。

## Angular 日付選択の例

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/editors/date-picker-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 日付選択の例"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="multi-column-combobox-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

## モジュールの要件

日付選択コンポーネントを使用するには、以下のモジュールを登録する必要があります。

<div class="divider--half"></div>

## コード スニペット

以下のコードは、`DatePicker` コンポーネントの値を追加および設定する方法を示します。
