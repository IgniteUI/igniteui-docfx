---
title: Angular コンボ | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの Angular コンボ コンポーネントは、データを表示するのに最適なチャートを選択するのに役立ちます。Ignite UI for Angular でグラフと視覚化を改善します!
_keywords: Angular combo, drop down, Ignite UI for Angular, Infragistics, Angular コンボ, ドロップダウン, インフラジスティックス
mentionedTypes: []
_language: ja
---

# Angular 複数列コンボ ボックスの概要

複数列コンボ ボックスは、データ オブジェクトのプロパティ列を自動的に生成します。このコンポーネントは、ドロップダウンに埋め込まれたデータ グリッドのように大量のデータを可視化するコンボ ボックスであるという点で独特です。

データ バインディングは、列の `DataSource` プロパティで複合オブジェクトの配列を使用して実現できます。

`TextField` プロパティはユーザーが選択を行うときに表示する値を決定します。

`ValueField` プロパティは選択された基本データ項目のバインド値を決定します。オブジェクトのリストに複数のプロパティがある場合に必要です。

## Angular 複数列コンボ ボックスの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/editors/multi-column-combobox-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 複数列コンボ ボックスの例"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="multi-column-combobox-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<!-- Angular, React, WebComponents -->

## 依存関係

Chart コンポーネントをインストールするときに core パッケージもインストールする必要があります。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save igniteui-angular-core
npm install --save igniteui-angular-charts
</pre>

<!-- end: Angular, React, WebComponents -->

## モジュールの要件

複数列コンボ ボックスを作成するには、以下のモジュールが必要です。<!-- Angular, React, WebComponents --> <!-- end: Angular, React, WebComponents --><!-- Blazor -->モジュールはアプリケーションのエントリ ポイントに登録する必要があります。

-   MultiColumnComboBoxModule
    <!-- end: Blazor -->

## コード スニペット
