---
title: Angular Grid Lite の概要 | Ignite UI for Angular | MIT ライセンス
_description: オープンソースの Grid Lite を使用してアプリを作成できます。軽量でありながら、フィルタリング、非表示、ソート など、必要な機能がすべて搭載されています。今すぐお試しください。
_keywords: 概要, {Platform}, {ComponentKeywords}, {ProductName}, インフラジスティックス
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_language: ja
---

# あらゆるプロジェクトに対応するオープンソース JavaScript Grid

Ignite UI for Angular Grid Lite コンポーネントは、インフラジスティックスの新しいオープンソース UI コンポーネント セットの一部であり、今後も継続的にサポートおよびメンテナンスされます。これはオープンソースの JavaScript データ グリッドで、Web コンポーネントとして構築されているため、Web フレームワークの有無に関係なく依存関係なしで使用できます。現在、Angular、React、Blazor、Web Components 向けに 50 以上の OSS コントロールが MIT ライセンスのもとで利用可能です。

Angular Grid Lite は、必要最小限のオーバーヘッドで本質的なデータ表示機能を提供し、ユーザーが期待するパフォーマンスを実現します。これは、エンタープライズ グリッドの複雑さを避けつつ、高速で軽量なデータ表示を必要とする開発者向けに設計されています。

Angular Grid Lite の機能:

- 列フィルタリング
- 非表示
- サイズ変更
- ソート
- 行仮想化
- ユーザー補助
- テーマとスタイル設定
- 列のデータ タイプ

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/overview/" alt="Angular Grid Lite メイン アプリ サンプル">
</code-view>

Grid Lite コントロールは完全に無料で、MIT ライセンスの下で提供されており、Ignite UI をよりオープンで透明性が高く、アクセスしやすいものにするための取り組みの一環です。しかし、プロジェクトが拡大し、複雑さや機能が増し、エンタープライズ グレードのアプリケーションが必要になった場合には、Grid Lite からフル機能で高度な Data Grid へ移行するためのアップグレード戦略をご用意しています。  

Angular は<a href="https://custom-elements-everywhere.com/#angular" target="_blank">カスタム要素</a>をサポートしているため、Grid Lite を容易に利用できます。

## インストール

Grid Lite を Angular アプリケーションに追加するには、npm からパッケージをインストールします。

```shell
npm install igniteui-grid-lite
```

## 構成

アプリケーションを開始する前に、以下のようにカスタム要素スキーマをインポートして渡すことを確認してください。

```typescript
// app.component.ts

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IgcGridLite, ColumnConfiguration } from 'igniteui-grid-lite';

IgcGridLite.register();

@Component({
  ...
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  template: `
    <main>
      <igc-grid-lite [columns]="columns" [data]="products">
      </igc-grid-lite>
    </main>
  `
})
export class AppComponent {
  columns: ColumnConfiguration<Products> = [...];
  products: Products[] = [...];
}

```

## パフォーマンス内蔵

行レベルの仮想化により、無制限のデータをスムーズなスクロールでレンダリングできます。

## 自動列タイプ

列タイプはデータ ソースに基づいて自動生成され、列タイプに応じたフィルタリング機能が組み込まれています。

## カスタム列テンプレート

列テンプレートを使用して、あらゆるタイプの UX を提供できます。想像したものはすべて、グリッドの列内にレンダリング可能です!

## インタラクティブ機能

ユーザーが期待するすべてのコアなインタラクティブ機能を提供します。列のフィルタリング、列の非表示、列のリサイズ、列のソートなどが含まれます。

## 美しい UX とブランディング

Bootstrap、Material、Fluent 向けの組み込みテーマ ポートに加え、カラー パレット、フォント、エレベーション、表示密度など無限のブランディング オプションがあります。

## 高度なキーボード ナビゲーション

Excel スタイルのフル キーボード ナビゲーションにより、ユーザーは期待通りの操作体験を得られます。高パフォーマンスなキーボード操作が可能です。
