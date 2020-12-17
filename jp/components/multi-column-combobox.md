---
title: Angular コンボ | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの Angular コンボ コンポーネントは、データを表示するのに最適なチャートを選択するのに役立ちます。Ignite UI for Angular でグラフと視覚化を改善します!
_keywords: Angular combo, drop down, Ignite UI for Angular, Infragistics, Angular コンボ, ドロップダウン, インフラジスティックス
mentionedTypes: []
_language: ja
---

# Angular 複数列コンボ ボックスの概要

複数列コンボ ボックスは、データ オブジェクトのプロパティ列を自動的に生成します。このコンポーネントは、ドロップダウンに埋め込まれたデータ グリッドのように大量のデータを可視化するコンボ ボックスであるという点で独特です。

## 使用方法

次のプロパティは、コンポーネントを構成するために一般的に最も使用されます:

-   `DataSource` - ドロップダウン メニューに表示される複雑なオブジェクトの配列の形式でデータをバインドできます。
-   `TextField` - このプロパティをデータソースのフィールドに設定して、ユーザーが選択したときに項目の表示テキストとして表示される内容を反映します。 
-   `ValueField` - このプロパティを、選択する基になるデータ項目のキーまたは一意の ID を表すデータソースのフィールドに設定します。これは、オブジェクトのリストに複数のプロパティがある場合に必要です。これは、 `ValueField` が指定されていない場合、データソースの最初のフィールドが使用されるためです。


-   `Fields` 文字列配列プロパティは、どのフィールドが含まれ、表示されるかを決定します。配列にリストされていないすべてのフィールドは、ドロップダウンに表示されません。
-   `PlaceHolder` プロパティを使用すると、コントロールの編集部分で、何も選択されていないときにテキストを表示できます。 
-   `SortMode` プロパティを使用すると、次の構成でフィールドのソートを構成できます:

    -   `None`
    -   `SortByOneColumnOnly`
    -   `SortByOneColumnOnlyTriState`
    -   `SortByMultipleColumns`
    -   `SortByMultipleColumnsTriState`

TriState オプションを使用すると、ソートされた列のソートを解除できます。

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
npm install --save {PackageInputs}
</pre>

<!-- end: Angular, React, WebComponents -->

## モジュールの要件

複数列コンボ ボックスを作成するには、以下のモジュールが必要です。

<div class="divider--half"></div>

## コード スニペット
