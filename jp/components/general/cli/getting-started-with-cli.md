---
title: Ignite UI CLI を使用した作業の開始 | Ignite UI for Angular | インフラジスティックス
_description: ステップ バイ ステップ モードには、Ignite UI CLI オプションによるガイドが含まれます。
_keywords: angular cli, ignite ui for angular, infragistics
_language: ja
---

## Ignite UI CLI を使用した作業の開始

新しい Angular アプリケーションを最初から作成する場合、ユーザー フレンドリな付きエクスペリエンスを提供するため、以下に説明する方法を使用することをお勧めします。このガイドでは、すべてのセットアップ オプションについて説明します。

はじめに [Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli) をグローバルにインストールします。

```cmd
npm install -g igniteui-cli 
```

### ガイドの使用
アプリケーションを最短でブートストラップする最も簡単な方法は、[Ignite UI CLI を使用したステップ バイ ステップ ガイド](step-by-step-guide-using-cli.md)を使用する方法です。 

Ignite UI for Angular CLI を使用してガイドをアクティブにするには、次のコマンドを実行します。

```cmd
ig
```
または

```cmd
ig new
```

<div style="display:inline-block;">
    <a style="background: url(../../../images/general/buildCLIapp.gif); display:flex; justify-content:center; width: 80vw; max-width:540px; min-height:315px;"
       href="https://youtu.be/QK_NsdtdA70" target="_blank">
        <img src="../../../images/general/play.svg" style="vertical-align: middle;" />
    </a>
    <p style="text-align:center;">最初の Ignite UI CLI アプリを作成</p>
</div>

## 新しいプロジェクトを作成します。

[Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli) を使用する場合、`angular` をフレームワークとして提供し、`igx-ts` を `new` コマンドのプロジェクト タイプ引数として提供する必要があります。

```cmd
ig new newAngularProject --framework=angular --type=igx-ts --template=side-nav
```
新しいアプリケーションが同じ名前でディレクトリに作成されます (`newAngularProject`)。Ignite UI for Angular アプリケーションを作成するときに選択できるいくつかのプロジェクト テンプレートがあります。

| テンプレートの ID   | テンプレートの説明 |
| ---           | ---                  |
| empty         | ルーティングとホームページを備えたプロジェクト構造 |
| side-nav      | サイド ナビゲーション ドロワーを備えたプロジェクト構造 |
| side-nav-auth | ユーザー認証モジュールで拡張されたサイド ナビゲーション プロジェクト<br> プロジェクト テンプレートの詳細は、[Angular 認証プロジェクト テンプレート](auth-template.md) トピックをご覧ください。 |

さらに、**引数**を指定してテーマを制御したり、パッケージのインストールをスキップしたりできます。

<details>
  <summary><u>name</u></summary>
  <p>
    <code>name</code> (alias: <code>-n</code>)
  </p>
  <p>
    アプリケーションの名前。アプリケーションが同じ名前のディレクトリに作成されます。
  </p>
</details>

<details>
  <summary><u>framework</u><span align="right"><strong> (Ignite UI CLI のみ)</strong></span></summary>
  <p>
    <code>--framework</code> (alias: <code>-f</code>) <em>default value: "jquery"</em>
  </p>
  <p>
    プロジェクトの対象フレームワーク。サポートされるフレームワークは jQuery、Angular、および React です。
  </p>
</details>

<details>
  <summary><u>type</u><span align="right"><strong> (Ignite UI CLI のみ)</strong></span></summary>
  <p>
    <code>--type</code> (alias: <code>-t</code>)
  </p>
  <p>
    使用可能なプロジェクト タイプは、選択したフレームワークによって異なります。
  </p>
</details>

<details>
  <summary><u>theme</u></summary>
  <p>
    <code>--theme</code> (alias: <code>-th</code>)
  </p>
  <p>
    プロジェクト テーマ (プロジェクトの種類によって異なります)。
  </p>
</details>

<details>
  <summary><u>skip-git</u></summary>
  <p>
    <code>--skip-git</code> (alias: <code>--sg</code>)
  </p>
  <p>
    このオプションを使用すると、Git によるリポジトリの自動初期化はスキップされます。オプションを省略すると、グローバルな skipGit 構成プロパティが使用されます。
  </p>
</details>

<details>
  <summary><u>skip-install</u></summary>
  <p>
    <code>--skip-install</code> (alias: <code>--si</code>)
  </p>
  <p>
    <code>new</code> コマンドは、プロジェクトの作成時にパッケージの依存関係をインストールします。</code> このフラグを渡すと、最初のインストールがスキップされます。
  </p>
</details>

<details>
  <summary markdown='span'><u>template</u></summary>
  <p>
    <code>--template</code>
  </p>
  <p>
    特定のフレームワーク タイプに異なるプロジェクト テンプレートがある場合、このオプションを使用します。 
    現在、このオプションは、Angular igx-ts プロジェクトタイプの Ignite UI でのみ使用できます。</p>
</details>

## テンプレートの追加

[利用可能な Ignite UI Angular テンプレート](component-templates.md)を追加するには、新しいコンポーネントのテンプレート ID と名前を指定するか、[ステップ バイ ステップ ガイド](step-by-step-guide-using-cli.md#add-view)を使用する必要があります。Angular Schematics、Ignite UI CLI で作成された既存のプロジェクト内、または Ignite UI for Angular が [`ng add` でインストールされている](../getting_started.md#Ignite-UI-for-Angular-のインストール)場合にのみサポートされます。

`ig add [template] [name]` コマンドを使用します。

```cmd
ig add grid newGrid
```

すべての[利用可能なテンプレート](component-templates.md)のリストを取得するには、プロジェクトディレクトリで [`ig list`](https://github.com/IgniteUI/igniteui-cli/wiki/list) コマンドを実行することもできます。

また、コンポーネントを登録するモジュールを指定するか、アプリ ナビゲーション ルートの自動生成をスキップできます。

<details>
  <summary><u>module</u></summary>
  <p>
    <code>--module</code> (alias: <code>-m</code>)
  </p>
  <p>
    <i>注: module 引数は Angular プロジェクトにのみ適用できます。</i>
  </p> 
  <p>
    新しいコンポーネントを登録するモジュールの、/src/app/ folder を基準とした module.ts ファイルのパス。
  </p>
  <code>ig add combo newCombo --module=myModule/myModule.module.ts</code>
</details>

<details>
  <summary><u>skip-route</u></summary>
  <p>
    <code>--skip-route</code> (alias: <code>-srk</code>)
  </p>
  <p>
    新しいコンポーネントのアプリ ナビゲーション ルートを自動生成しません。
  </p>
</details>

## アプリケーションの実行

`start` コマンドはアプリケーションがビルドされ、Web サーバーが起動してデフォルトのブラウザーで開きます。

```cmd
ig start
```

## Ignite UI CLI コマンド
使用可能な Ignite UI CLI コマンドとその使用方法 (フラグを渡すなど) の完全なリストは、[Ignite UI CLI wiki ページ](https://github.com/IgniteUI/igniteui-cli/wiki)ページにあります。

| コマンド | エイリアス | 説明 |
| --- | --- | --- |
| [ig start](https://github.com/IgniteUI/igniteui-cli/wiki/start)  | | アプリケーションをビルドしてウェブ サーバーを開始、次にアプリケーションをデフォルト ブラウザーで開きます。
| [ig build](https://github.com/IgniteUI/igniteui-cli/wiki/build) | | アプリケーションをアプトプット ディレクトリへビルドします。
| [ig generate](https://github.com/IgniteUI/igniteui-cli/wiki/generate) | g | サポートされるフレームワークおよびプロジェクト タイプのための新しいカスタム テンプレートを生成します。
| [ig help](https://github.com/IgniteUI/igniteui-cli/wiki/help) | -h | 使用可能なコマンドをリストして手順の簡単な説明を示します。
| [ig config](https://github.com/IgniteUI/igniteui-cli/wiki/config) | | Ignite UI CLI 構成設定の読み取り / 書き込み操作を実行します。
| [ig doc](https://github.com/IgniteUI/igniteui-cli/wiki/doc) | | 検索した用語についてインフラジスティックスのサポート情報を検索します。
| [ig list](https://github.com/IgniteUI/igniteui-cli/wiki/list) | l |  指定したフレームワークとタイプのすべてのテンプレートをリストします。プロジェクト フォルダー内でコマンド実行時にプロジェクトのフレームワークとタイプのテンプレートをすべてリストします。
| [ig test](https://github.com/IgniteUI/igniteui-cli/wiki/test) |  | 現在のプロジェクトのテストを実行します。
| ig version | -v | ローカル (ローカルがない場合はグローバル) にインストールされた Ignite UI CLI バージョンを示します。 |