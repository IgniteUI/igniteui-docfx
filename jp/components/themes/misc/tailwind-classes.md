---
title: Ignite UI の Tailwind 統合
_description: Ignite UI for Angular のテーマ エンジンのカスタム ユーティリティ クラスと Tailwind CSS を統合する方法について説明します。このガイドでは、セットアップの手順を説明し、ユーティリティ ファーストのアプローチでカラー、タイポグラフィ、シャドウのデザイン トークンを使用する方法について説明します。
_keywords: Ignite UI for Angular, Tailwind CSS, Angular スタイル、Angular テーマ設定, カスタム CSS, ユーティリティ クラス, テーマ設定エンジン, タイポグラフィ, シャドウ, カラー
_language: ja
---

# Tailwind CSS と Ignite UI for Angular の統合

<p class="highlight">Ignite UI for Angular は、CSS 変数と強力な Sass エンジンを通じて完全なテーマ カスタマイズを提供します。このガイドでは、Tailwind CSS を Angular プロジェクトに統合し、`igniteui-theming` パッケージが提供するカスタム ユーティリティ クラスを活用する方法を紹介します。これらのクラスは Ignite UI のデザイン トークンをユーティリティとして公開し、カラー・シャドウ・タイポグラフィの一貫したスタイリングを可能にします。</p>
<br>

## 概要

> [!NOTE]
> このガイドでは、**Ignite UI for Angular** がすでにインストールされていることを前提としています。そうでない場合は、次を実行します:
>
> ```cmd
> ng add igniteui-angular
> ```

### 1. Tailwind のインストール

次のコマンドを使用して tailwind をインストールします。

```cmd
npm install tailwindcss @tailwindcss/postcss postcss --force
```

### 2. PostCSS プラグインの設定

プロジェクトのルートに `.postcssrc.json` ファイルを作成し、PostCSS 設定に `@tailwindcss/postcss` プラグインを追加します。

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

### 3. Tailwind CSS のインポート

メインのスタイルシート (`styles.css` または `styles.scss`) に Tailwind と Ignite UI Tailwind テーマ設定をインポートします。

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/themes/base";
```

プロジェクトでスタイル設定に `sass` を使用している場合:

```scss
@import "tailwindcss";
@use "igniteui-theming/tailwind/themes/base";
```

> インポート パスが `node_modules` から正しく解決されることを確認してください。

## Ignite UI カスタム ユーティリティ クラスの使用

`igniteui-theming` パッケージには、Ignite UI のデザイン トークンをユーティリティ クラスとして公開する Tailwind のカスタム設定が含まれています。これには以下が含まれます:

- カラーとコントラスト カラー

- エレベーション (シャドウ)

- タイポグラフィ スタイル

それぞれの使い方を見ていきましょう。

#### カラー ユーティリティ クラス

Ignite UI のカラー トークンを HTML で直接使用できます。

```html
<h1 class="bg-primary-500 text-primary-500-contrast">This is a title</h1>
```

Tailwind の完全なカラー システムは[こちら](https://tailwindcss.com/docs/color)で確認でき、Ignite UI が提供するクラス名を使って適用できます。
<br>

#### シャドウ ユーティリティ クラス

定義済みの[エレベーション レベル](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/themes/elevations) (0 ～ 24) のいずれかを使用して深度を追加できます。

```html
<div class="shadow-elevation-8">Elevated container</div>
```

Tailwind が提供するすべてのシャドウ関連のユーティリティ クラスは、[こちら](https://tailwindcss.com/docs/box-shadow)で見つけることができます。
<br>

#### タイポグラフィ カスタム ユーティリティ スタイル

フォントを適用するには、トップ レベルの要素に `font-ig` クラスを追加します。`text-base` ユーティリティ クラスを使用して基本フォント サイズを定義することもできます。
各タイポグラフィ レベル (例: h1、h2、body-1) ごとにカスタム ユーティリティ クラスを提供しています。以下のように使用してください。

```html
<p class="type-style-h3">This paragraph gets the h3 styles</p>
```

各クラスは、[Ignite UI のタイプ スケール](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/themes/typography)に応じて、必要なすべてのフォント設定、間隔、サイズを適用します。

>[!NOTE]
>これらのカスタム タイポグラフィ ユーティリティは、`ig-typography` の外部でのみ機能します。トップ レベル要素に `ig-typography` CSS クラスを設定すると、これらのスタイルは適用されません。
<div class="divider--half"></div>

## サンプル

以下のサンプルでは、`shadows`、`colors`、`typography` 用の`カスタム ユーティリティ`を含む、Tailwind ユーティリティ クラスのみを使用して構築された 404 ページが表示されます。

> 各コンポーネントのスタイルを設定する方法については、それぞれのドキュメント トピックの**「スタイル設定」**セクションを参照してください。

<code-view style="height: 610px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/theming/tailwind-sample/" alt="Tailwind サンプル">
</code-view>

>[!NOTE]
>このサンプルは架空の完全カスタム例であり、Ignite UI コンポーネント ライブラリの一部ではありません。

## まとめ

わずか数ステップの設定で、Tailwind のユーティリティ ファースト アプローチと Ignite UI の堅牢なデザイン システムを組み合わせることができます。この統合により、カラー・エレベーション・タイポグラフィのトークンを直接 HTML で活用し、一貫性のあるテーマ付き UI コンポーネントを迅速に構築できます。

## その他のリソース

<br>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
