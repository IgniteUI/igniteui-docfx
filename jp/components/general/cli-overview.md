---
title: Ignite UI CLI を使用
_description: Ignite UI CLI は、さまざまなフレームワークでアプリケーションの初期化、開発、スキャフォールディング、および処理を可能にするツールです。
_keywords: Ignite UI for Angular, UI コントロール, CLI, テンプレート, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---

## Ignite UI CLI

[`Ignite UI CLI`](https://github.com/IgniteUI/igniteui-cli) はさまざまなフレームワークのためにアプリケーションを作成して scaffold するコマンドライン ツールです。Ignite UI CLI は、Ignite UI for Angular の定義済みのプロジェクト テンプレートが含まれ、アプリ開発を効率的に行うことができます。Ignite UI for Angular コンポーネントのビュー選択により、生産性を向上します。

### 作業の開始

ターミナルを開き、[`Ignite UI CLI`](https://github.com/IgniteUI/igniteui-cli) をインストールします。
```cmd
npm install -g igniteui-cli 
```
 [`Ignite UI CLI`](https://github.com/IgniteUI/igniteui-cli) のインストール後、ツールを開始する 2 つのオプション/モデル (ガイドまたはコマンド) があります。

#### ガイドの使用
アプリケーションを最短でブートストラップする最も簡単な方法は、Ignite UI CLI [`ガステップバイステップ モード`](https://github.com/IgniteUI/igniteui-cli/wiki/step-by-step) を使用する方法です。アプリをビルドしたあとは 1 コマンドで開始できます。 
```cmd
ig
```

<div style="display:inline-block;">
    <a style="background: url(../../images/general/buildCLIapp.gif); display:flex; justify-content:center; min-width:540px; min-height:315px;"
       href="https://youtu.be/QK_NsdtdA70" target="_blank">
        <img src="../../images/general/play.svg" style="vertical-align: middle;" />
    </a>
    <p style="text-align:center;">はじめての Ignite UI CLI アプリを作成</p>
</div>

#### コマンドの使用
Ignite UI CLI [コマンド](#available-commands)を使用し、Ignite UI プロジェクトを生成、新しいコンポーネントの追加、プロジェクトのビルドができます。以下のコマンドを使用できます。
```cmd
ig new <project name> --framework=angular --type=igx-ts 
cd <project name>
ig add <component/template> <component_name>
ig start 
```
- **コンポーネント/テンプレート**値の一覧は[こちら](https://github.com/IgniteUI/igniteui-cli/wiki/add#ignite-ui-for-angular-templates)をご覧ください。プロジェクトのディレクトリで[`ig list`](#available-commands) コマンドを実行するとすべての使用可能なテンプレートがリストされます。
- **プロジェクト名**とコンポーネント名の両方をカスタムに設定できます。
以下は、igxGrid コントロールで新しい Ignite UI for Angular プロジェクトを作成する例です。

```cmd
ig new newAngularProject --framework=angular --type=igx-ts
cd newAngularProject
ig add grid newGrid
ig start
```

シンプルなコマンドの実行した後、新しいプロジェクトがビルドされて提供されます。これによりデフォルト ブラウザーが自動的に開かれ、グリッド コントロールをインスペクトしてプロジェクトに変更を加えることができます。

### コマンド

 Ignite UI CLI コマンドと使用についての詳細は、[Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli/wiki) (英語) をご覧ください。

| コマンド | エイリアス | 説明 |
| --- | --- | --- |
| [ig new](https://github.com/IgniteUI/igniteui-cli/wiki/new) | | 新しい Angular、jQuery、React を作成します。アプリケーションを Ignite UI for Angular または Ignite UI for JavaScript で使用するために構成します。
| [ig add](https://github.com/IgniteUI/igniteui-cli/wiki/add) | | ID でテンプレートを追加し、既存にプロジェクトに名前を付けます。
| [ig start](https://github.com/IgniteUI/igniteui-cli/wiki/start) | | アプリケーションをビルドしてウェブ サーバーを開始、次にアプリケーションをデフォルト ブラウザーで開きます。
| [ig build](https://github.com/IgniteUI/igniteui-cli/wiki/build) | | アプリケーションをアプトプット ディレクトリへビルドします。
| [ig generate](https://github.com/IgniteUI/igniteui-cli/wiki/generate) | g | サポートされるフレームワークおよびプロジェクト タイプのための新しいカスタム テンプレートを生成します。
| [ig help](https://github.com/IgniteUI/igniteui-cli/wiki/help) | -h | 使用可能なコマンドをリストして手順の簡単な説明を示します。
| [ig config](https://github.com/IgniteUI/igniteui-cli/wiki/config) | | Ignite UI CLI 構成設定の読み取り / 書き込み操作を実行します。
| [ig doc](https://github.com/IgniteUI/igniteui-cli/wiki/doc) | | 検索した用語についてインフラジスティックスのサポート情報を検索します。
| [ig list](https://github.com/IgniteUI/igniteui-cli/wiki/list) | l |  指定したフレームワークとタイプのすべてのテンプレートをリストします。プロジェクト フォルダー内でコマンド実行時にプロジェクトのフレームワークとタイプのテンプレートをすべてリストします。
| [ig test](https://github.com/IgniteUI/igniteui-cli/wiki/test) |  | 現在のプロジェクトのテストを実行します。
| ig version | -v | ローカル (ローカルがない場合はグローバル) にインストールされた Ignite UI CLI バージョンを示します。|
