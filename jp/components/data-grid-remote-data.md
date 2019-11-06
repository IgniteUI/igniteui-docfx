---
title: Angular Data Grid | Angular アプリケーションの Ignite UI Table コントロール | Infragistics
_description: Ignite UI for Angular Table / Grid コンポーネントは、グリッド ドメインの複雑さを管理しやすい API に簡素化しているためユーザーがデータのコレクションを簡単にバインドできます。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular Grid, Angular Grid Control, Angular Grid 例, Angular Grid コンポーネント, Angular Live Grid
_language: ja
---

## Angular テーブル仮想データソース

Angular データ テーブル/データ グリッドは、1 行のコードでリモート データソースへのバインドをサポートします。  Angular テーブルの仮想データソースを使用すると、リモート URI と返される OData エンティティでグリッドを設定するだけで、残りの作業はグリッドが行います。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-grid-remote-data-iframe" src='{environment:demosBaseUrl}/grids/data-grid-remote-data' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="data-grid-remote-data-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 依存関係

コア パッケージとグリッド パッケージに加えて、データソース パッケージもインストールする必要があります。

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-grids**
-   **npm install --save igniteui-angular-datasources**

### 必要なモジュール

[`IgxLiveGrid`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegrid.html) は、以下のモジュールが必要です。

<div class="divider--half"></div>

### 使用方法

グリッド モジュールがインポートされました。次のステップはリモート データにバインドするグリッドの基本的な設定です。仮想データソースを作成します。データが取得される URL を `baseUri` プロパティに割り当てます。`entitySet` プロパティを設定すると、仮想データソースから取得するテーブルがわかります。

```ts
private virtualData: ODataVirtualDataSource;
...
const vds = new ODataVirtualDataSource();
vds.baseUri = ("https://services.odata.org/V4/Northwind/Northwind.svc");
vds.entitySet = ("Orders");
this.virtualData = vds;
```

```ts
private virtualData: ODataVirtualDataSource;
// ...
const vds = new ODataVirtualDataSource();
vds.baseUri = ("https://services.odata.org/V4/Northwind/Northwind.svc");
vds.entitySet = ("Orders");
this.virtualData = vds;
```

データソースをグリッドに割り当てます。
