---
title: 無料の Angular Data Grid (オープン ソース) - Ignite UI Grid Lite | MIT ライセンス
_description: オープン ソースの Grid Lite を使用してアプリを作成できます。軽量でありながら、フィルタリング、非表示、ソート など、必要な機能がすべて搭載されています。今すぐお試しください。
_keywords: 概要, {Platform}, {ComponentKeywords}, {ProductName}, インフラジスティックス
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_language: ja
---

# 無料のオープン ソース Angular データ グリッド (Grid Lite)

Ignite UI for Angular Grid Lite は、軽量で高パフォーマンスな Angular データ グリッドであり、無料で使用でき、オープン ソースで、最新の {Platform} アプリケーション向けに構築されています。

この無料の Angular データ グリッドはオープン ソースの JavaScript データ グリッドで、Web コンポーネントとして構築されているため、Web フレームワークの有無に関係なく依存関係なしで使用できます。必要最小限のオーバーヘッドで本質的なデータ表示機能を提供し、ユーザーが期待するパフォーマンスを実現します。Angular Grid Lite は、高速で軽量なデータ表示を必要とする開発者向けに設計されています。

## 無料 Angular データ グリッドで利用可能な機能

無料のオープン ソース Angular Grid Lite には、次の列ベースの機能が含まれています: ソート、フィルタリング、非表示、サイズ変更、およびさまざまな事前定義されたデータ タイプ。行仮想化を使用することで、非常に高速なパフォーマンスが実現されます。さらに、コンポーネントはキーボード ナビゲーションと [Ignite UI のテーマ フレームワーク](../themes.md)を通じたテーマ化をサポートしています。

Angular はカスタム要素を<a href="https://custom-elements-everywhere.com/#angular" target="_blank">サポート</a>しているため、Grid Lite を容易に利用できます。

## Grid Lite の動作

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/overview/" alt="Angular Grid Lite メイン アプリ サンプル">
</code-view>

## インストールとセットアップ

アプリケーションで Grid Lite を使用するには、エントリ ポイント `igniteui-angular/grids/lite` を通じて `igniteui-angular` から直接インポートできます。ただし、UI を提供する `igniteui-grid-lite` パッケージもインストールする必要があります。IgxGridLiteComponent は Angular バインディング (イベント、テンプレート、DI、変更検出、パイプ) を提供し、視覚的なグリッド ライト UI は `igniteui-grid-lite` によってレンダリングされます。両方をインストールすることで、`igniteui-grid-lite` の完全な UI を活用しながら、グリッド ライトが Angular でネイティブに動作することを保証します。

```shell
npm install igniteui-grid-lite
```

アプリケーションを開始する前に、以下のようにカスタム要素スキーマをインポートして渡すことを確認してください。

```typescript
// app.component.ts

import { Component } from '@angular/core';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent } from 'igniteui-angular/grids/lite';

@Component({
  ...
  imports: [IgxGridLiteComponent, IgxGridLiteColumnComponent],
  template: `
    <div>
      <igx-grid-lite [data]="products">
        <igx-grid-lite-column field="id" header="ID" dataType="number"></igx-grid-lite-column>
        <igx-grid-lite-column field="name" header="Name"></igx-grid-lite-column>
        <!-- Additional columns -->
      </igx-grid-lite>
    </div>
  `
})
export class AppComponent {
  products: Products[] = [...];
}
```

## 機能

### パフォーマンス内蔵

無料で提供される Angular データ グリッドを使用すると、行レベルの仮想化を実装できます。これにより、無制限のデータをスムーズなスクロールでレンダリングできます。

### 自動列タイプ

列タイプはデータ ソースに基づいて自動生成され、列タイプに応じたフィルタリング機能が組み込まれています。

### カスタム列テンプレート

オープン ソースの Angular データ グリッド コントロールでは、列テンプレートを使用してあらゆる種類の UX を提供できます。想像したものはすべて、グリッドの列内にレンダリング可能です!

### インタラクティブ機能

ユーザーが期待するすべてのコアなインタラクティブ機能を提供します。列のフィルタリング、列の非表示、列のリサイズ、列のソートなどが含まれます。

### 美しい UX とブランディング

この無料の Angular データ グリッド (Grid Lite) には、Bootstrap、Material、Fluent 向けの組み込みテーマ サポートが含まれており、カラー パレット、フォント、エレベーション、表示密度など、無限のブランディング オプションがあります。

### 高度なキーボード ナビゲーション

Excel スタイルのフル キーボード ナビゲーションにより、ユーザーは期待通りの操作体験を得られます。高パフォーマンスなキーボード操作が可能です。

## Grid Lite は無料のオープン ソース Angular データ グリッドですか?

はい。Ignite UI Grid Lite は、MIT ライセンスのもとでリリースされた無料のオープン ソース Angular データ グリッドです。ライセンス料なしで、商用またはパーソナル プロジェクトで使用できます。これは、Ignite UI をよりオープンで透明性が高く、アクセスしやすいものにするための取り組みの一環です。

- MIT ライセンス

- 商用利用無料

- コミュニティ主導の開発

- 機能制限なし

ただし、プロジェクトの規模が拡大し、複雑さと機能が増大し、エンタープライズ グレードのアプリケーションが必要になった場合、シームレスなアップグレード戦略が用意されています。これにより、無料の Angular データ グリッド (Grid Lite) からフル機能の高度なデータ グリッドへの移行がよりシンプルかつ迅速になります。

Angular はカスタム要素をサポートしているため、Grid Lite を容易に利用できます。
