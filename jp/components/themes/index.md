---
title: テーマ
_description: Ignite UI for Angular Theming コンポーネントは SASS で開発されます。使用が簡単な API は単一のコンポーネント、複数のコンポーネント、またはスイート全体のスタイル変更を適用できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Theming コンポーネント, Angular テーマ
_language: ja
---

# テーマ

<div class="highlight">最小限のコードで、コンポーネントのテーマを簡単に変更できます。SASS で開発されている API は簡単で、単一のコンポーネント、複数のコンポーネント、またはすべてのコンポーネントでテーマをカスタマイズできます。</div>

## 概要
**Ignite UI for Angular** はコンポーネントのデザインを**<a href="https://material.io/guidelines/material-design/introduction.html" target="_blank">マテリアル デザイン ガイドライン</a>**に基づき、Google によって作成されたコンポーネントの色、サイズ、タイポグラフィ、およびルックアンドフィールにできるだけ近づけるようデザインしています。

テーマのアプローチは、複数のシンプルな概念に基づきます。

> [!NOTE]
> Ignite UI for Angular テーマ ライブラリは [**Sass**](https://sass-lang.com) に基づいて実装されます。アプリケーションをブートストラップするために **<a href="https://github.com/IgniteUI/igniteui-cli" target="_blank">Ignite UI CLI</a>** を使用した場合、**angular.json** 構成ファイルでスタイルを _scss_ に設定すると、CLI は Sass スタイルをコンパイルします。Ignite UI CLI を使用しなかった場合、ビルダーを Sass スタイルをコンパイルするために構成する必要があります。

## パレット
<div class="divider--half"></div>

最初の概念は色パレットです。ビジュアル ツールでは、アプリケーションを差別化する色があります。マテリアル デザイン ガイドラインでは基本色の色合いおよび輝度の範囲がある定義済みの色パレットを規定しています。それによって、色が調和し、背景色および前景のテキスト色とコントラストを保つことができます。ただし色が制限されるため、ブランド化と一致するカスタム パレットを使用することはできません。この問題を回避するため、ユーザーが提供する基本色からマテリアル デザインのようなパレットを生成するアルゴリズムが使用できます。更にパレットで各色合いにコントラスト テキスト色を生成します。

<div class="divider--half"></div>

## スキーマ
<div class="divider--half"></div>

2 番目に重要なコンセプトはテーマのスキーマです。テーマのスキーマは、コンポーネント テーマのレシピのようなものです。色、マージン、パディングなど各コンポーネント テーマの情報を提供します。たとえば、コンポーネント スキーマはコンポーネント テーマに要素の背景色が `primary` パレットの  `500` バリアントであることを伝えます。ただし、ユーザーがコンポーネント テーマに渡すパレットは無視します。

<div class="divider--half"></div>

## テーマ
<div class="divider--half"></div>

最後にコンポーネント テーマがあります。パレットとスキーマは、テーマと一緒に使用する必要があります。パレットは通常テーマで使用します。各コンポーネントにはテーマがあり、アプリケーション全体および含まれる各コンポーネントをスタイル設定するグローバル テーマもあります。生成したパレットとスキーマをグローバル テーマへ渡すと残りは自動で処理されます。各コンポーネントのスタイルを個別にカスタマイズすることもできます。

## タイポグラフィ
<div class="divider--half"></div>

Typography は Sass theming フレームワークは別でコンポーネント テーマから分離したモジュールです。デフォルトで使用されるタイポグラフィもありますが、アプリケーションのスタイル設定をさらにカスタマイズできます。タイポグラフィはスタイル設定で中心的な役割を担います。アプリケーションで見出し、サブ見出し、ボタン、本文などのフォント ファミリ、サイズ、ウェイトを変更するメソッドを提供します。
<div class="divider--half"></div>

## その他のリソース
<div class="divider--half"></div>

グローバル テーマの作成方法:

* [グローバル テーマ](global-theme.md)
* [コンポーネント テーマ](component-themes.md)

コンポーネント スキーマの作成する方法:
* [スキーマ](./schemas.md)

色パレットを作成する方法:
* [パレット](./palette.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)