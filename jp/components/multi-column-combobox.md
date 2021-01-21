---
title: Angular コンボ | データ可視化ツール | インフラジスティックス
_description: インフラジスティックスの Angular コンボ コンポーネントは、データを表示するのに最適なチャートを選択するのに役立ちます。Ignite UI for Angular でグラフと視覚化を改善します!
_keywords: Angular combo, drop down, Ignite UI for Angular, Infragistics, Angular コンボ, ドロップダウン, インフラジスティックス
mentionedTypes: []
_language: ja
---

# Angular 複数列コンボ ボックスの概要

複数列コンボ ボックスは、データ オブジェクトのプロパティ列を自動的に生成します。このコンポーネントは、ドロップダウンに埋め込まれたデータ グリッドのように大量のデータを可視化するコンボ ボックスであるという点で独特です。

## Angular 複数列コンボ ボックスの例

<div class="sample-container loading" style="height: 400px">
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

## 使用方法

### データ ソースのバインド

オブジェクトを複数列コンボ ボックス コンポーネントに表示するには、`DataSource` プロパティをバインドする必要があります。これは、複雑なオブジェクトの配列の形式としてバインドできます。以下のコードは、データ ソース プロパティをバインドする方法を示します。

### 表示値とデータ値の設定

複数列コンボ ボックスのバインドされた `DataSource` のさまざまなプロパティを構成して、コントロールの表示テキストとして機能し、選択が行われたときに既定値としても機能します。コントロールの `TextField` と `ValueField` プロパティをこれらを表現したいデータ項目のプロパティ名に設定します。

以下のコード スニペットは、基本データ項目に "Country" および "ID" プロパティがある場合、これらのプロパティを設定する方法を示しています。

### フィールドの設定

デフォルトで、複数列コンボ ボックスは基本データ項目のすべてのプロパティを表示しますが、これはコンポーネントの `Fields` プロパティを設定することで制御できます。このプロパティは表示されるプロパティを決定するために基本データ項目のプロパティ パスの `string[]` を取得します。

以下のコード スニペットはこれを設定する方法を示します。結果のドロップダウンは ID および Country 列のみを表示します。

### プレースホルダー テキストの設定

複数列コンボ ボックス コンポーネントに選択がない場合にプレースホルダーとして表示するテキストを設定できます。`Placeholder` プロパティを表示したい文字列に設定します。以下のコードは設定する方法を示します。

### ソート モードの設定

ユーザーは、ドロップダウンで列のヘッダーをクリックして、複数列コンボ ボックスに表示される列をソートすることができます。列は単一の列または複数の列でソートすることができ、昇順または降順に制限したり、3 ステートにしたり、ソートの構成方法も変更できます。コンポーネントの `SortMode` プロパティを使用して設定します。

注: TriState のソート オプションを使用すると、ソートされた列のソートを解除できます。

以下のコードは、複数列の 3 ステートでソートできるように複数列コンボ ボックスを設定する方法を示します。
