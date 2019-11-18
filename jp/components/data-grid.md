---
title: Angular Data Grid | Angular アプリケーションの Ignite UI Table コントロール | Infragistics
mentionedTypes: ['XamDataGrid']
_description: Ignite UI for Angular Table / Grid コンポーネントは、グリッド ドメインの複雑さを管理しやすい API に簡素化しているためユーザーがデータのコレクションを簡単にバインドできます。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular グリッド, Angular グリッド コントロール, Angular Grid 例, Angular Grid コンポーネント, Angular Live Grid, React Table
_language: ja
---

## Angular テーブル / Grid

Angular データ テーブル/データ グリッドは、表形式の Angular コンポーネントでコーディングや設定をほとんど行わずにデータをすばやくバインドして表示できます。機能には、フィルタリング、ソート、テンプレート、行選択、行のグループ化、行の固定、および列移動があります。  Angular Tableは、ライブ ストリーミング データ用に最適化されており、複数の行や列でサイズ無制限のデータセットを処理することができます。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="live-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-local-data' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="live-grid-overview-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 依存関係

grid パッケージをインストールするときに core パッケージもインストールする必要があります。

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-grids**

### 必要なモジュール

[`IgxLiveGrid`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegrid.html) は、以下のモジュールが必要です。

<div class="divider--half"></div>

### 使用方法

グリッド モジュールがインポートされました。次のステップはローカル データにバインドするグリッドの基本的な設定です。

```ts
    this.data = [{
        Discontinued: false,
        OrderDate: new Date("2012-02-12"),
        ProductID: 1,
        ProductName: "Chai",
        QuantityPerUnit: "10 boxes x 20 bags",
        ReorderLevel: 10,
        UnitPrice: 18.0000,
        UnitsInStock: 39
    }, {
        Discontinued: false,
        OrderDate: new Date("2003-03-17"),
        ProductID: 2,
        ProductName: "Chang",
        QuantityPerUnit: "24 - 12 oz bottles",
        ReorderLevel: 25,
        UnitPrice: 19.0000,
        UnitsInStock: 17
    }, {
        Discontinued: false,
        OrderDate: new Date("2006-03-17"),
        ProductID: 3,
        ProductName: "Aniseed Syrup",
        QuantityPerUnit: "12 - 550 ml bottles",
        ReorderLevel: 25,
        UnitPrice: 10.0000,
        UnitsInStock: 13
    }, {
        Discontinued: false,
        OrderDate: new Date("2016-03-17"),
        ProductID: 4,
        ProductName: "Chef Antons Cajun Seasoning",
        QuantityPerUnit: "48 - 6 oz jars",
        ReorderLevel: 0,
        UnitPrice: 22.0000,
        UnitsInStock: 53
    }, {
        Discontinued: true,
        OrderDate: new Date("2011-11-11"),
        ProductID: 5,
        ProductName: "Chef Antons Gumbo Mix",
        QuantityPerUnit: "36 boxes",
        ReorderLevel: 0,
        UnitPrice: 21.3500,
        UnitsInStock: 0
    }];
```

以下のコードは、Angular Data Grid を上記のローカル データにバインドします。

自動生成された列:

列の手動定義:
