---
title: Excel ライブラリ| データ スプレッドシート | Ignite UI for Angular | インフラジスティックス
_description: Excel ライブラリは、Microsoft Excel 機能を使用してスプレッドシート データを使用した作業が可能になります。
_keywords: Excel library, Ignite UI for Angular, Infragistics, Excel ライブラリ, インフラジスティックス
mentionedTypes: ['Workbook']
_language: ja
---

## ワークブックの使用

Infragistics Angular Excel Engine は、データを Microsoft® Excel® に保存、また Microsoft® Excel® からの読み込みを可能にします。ライブラリのさまざまなクラスを使用してワークブックやワークシートを作成、データを入力、データを Excel にエクスポートできます。Infragistics Angular Excel Engine は、Excel スプレッドシートでアプリケーションのデータの表示や Excel からアプリケーションへのデータのインポートが簡単にできます。

### サンプル

<div class="sample-container loading" style="height: 500px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel-library/operations-on-workbooks' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### 既定のフォントを変更

[`IWorkbookFont`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/iworkbookfont.html) の新しいインスタンスを作成します。[`Workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html) の `styles` コレクションに新しいフォントを追加します。このスタイルにはワークブックのすべてのセルのデフォルトのプロパティが含まれています。ただし、行、列またはセルで指定されている場合はその限りではありません。スタイルのプロパティを変更すると、ワークブックのデフォルトのセル書式プロパティが変更します。

```ts
var workbook = new Workbook();
var font: IWorkbookFont;
font = workbook.styles().normalStyle.styleFormat.font;
font.name = "Times New Roman";
font.height = 16 * 20;
```

### ワークブック プロパティの設定

Microsoft Excel® ドキュメント プロパティは、ドキュメントの整理やトラッキングを改善するための情報を提供します。[`Workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html) オブジェクトの `documentProperties` プロパティを使用してこれらのプロパティを設定するために、Infragistics Angular Excel Engine を使用できます。使用可能なプロパティは以下のとおりです。

-   `author`

-   `title`

-   `subject`

-   `keywords`

-   `category`

-   `status`

-   `comments`

-   `company`

-   `manager`

以下のコードは、ブックを作成し、`title` および `status` ドキュメント プロパティを設定する方法を示します。

```ts
var workbook = new Workbook();
workbook.documentProperties.title = "Expense Report";
workbook.documentProperties.status = "Complete";
```

### ブックの保護

ブック保護機能は、ブックの構造を保護できます。つまり、ユーザーがそのブック内のワークシートを追加、名前変更、削除、非表示、および並べ替えができます。

Infragistics Excel Engine のオブジェクト モデルから保護が強制されることはありません。これらの保護設定を履行し、対応する操作の実行をユーザーに許可または制限することは、このオブジェクト モデルを表示する UI の役割です。

保護は、`protect` メソッドを呼び出すことによってブックに適用されます。

[`Workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html) がパスワードを使用せずに保護される場合、エンドユーザーは Excel で [`Workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html) の保護をパスワードを入力せずに解除できます。[`Workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html) の保護をコードで解除するには、`Workbook.unprotect` メソッドを使用できます。

[`Workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html) が保護される場合、この Workbook の `Workbook.protection` プロパティの [`WorkbookProtection`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbookprotection.html) インスタンスのプロパティの値は無効な操作を示します。

[`isProtected`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html#isprotected) が既に true の場合、`protect` メソッドは無視されます。

```ts
var workbook = new Workbook();
workbook.protect(false, false);
```

-   isProtected

ブックが保護されているかどうかの確認この読み取り専用プロパティは、ワークブックに Protect メソッドのオーバーロードを使用して設定された保護がある場合、true を返します。

```ts
var workbook = new Workbook();
var protect = workbook.isProtected;
```

-   protection

この読み取り専用プロパティは、保護の各設定を個別に取得するためにプロパティを含む WorkbookProtection 型のオブジェクトを返します。

```ts
var workbook = new Workbook();
var protection = workbook.protection;
```
