---
title: Angular Schematics | Angular CLI | Ignite UI for Angular | インフラジスティックス
_description: Angular Schematics & Ignite UI CLI は Ignite UI for Angular コンポーネントでプロジェクトを作成して変更できるためのヘルプを提供します。
_keywords: igniteui for angular, angular schematics, cli, infragistics, インフラジスティックス 
_language: ja
---

## Angular Schematics & Ignite UI CLI
CLI ツールでは、Ignite UI for Angular の定義済みのプロジェクト テンプレートが含まれ、アプリ開発を効率的に行うことができます。プロジェクトにさらに追加できる Ignite UI for Angular コンポーネントを備えたビューの選択により、開発者の生産性が大幅に向上します。

[Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli) は、さまざまなフレームワーク用のアプリケーションを作成およびスキャフォールディングするためのスタンドアロン コマンドラインツールです。

[Ignite UI for Angular Schematics](https://github.com/IgniteUI/igniteui-cli/tree/master/packages/ng-schematics) は同じプロジェクトの一部であり、[Angular CLI](https://angular.io/guide/schematics#schematics-for-the-angular-cli) で使用するコレクションとして利用できます。Ignite UI CLI のようなコア機能を提供しますが、Schematics ワークフローと統合され、製品に特化しています。[Ignite UI for Angular をインストールする](getting-started.md#ignite-ui-for-angular-のインストール)と、schematics コレクションがプロジェクトに追加されます。

ツールの両方バージョンにより、異なるプロジェクト、コンポーネント、およびシナリオビュー (テンプレート)を生成し、ガイドモードを提供します。

## 作業の開始

Ignite UI for Angular Schematics をグローバルにインストールする方法:
```cmd
npm i -g @igniteui/angular-schematics
```

上記のインストールにより、schematics が `ng new` コマンドのコレクション パラメーターを使用できるようになります。

IgniteUI CLI を使用する場合、npm でインストールできます。
```cmd
npm install -g igniteui-cli 
```

### ガイドの使用
アプリケーションを最短でブートストラップする最も簡単な方法は、[Step-by-Step ガイド](cli/step-by-step-guide.md)を使用する方法です。

Ignite UI for Angular Schematics を使用してガイドをアクティブにするには、次のコマンドを実行します。

```cmd
ng new --collection="@igniteui/angular-schematics"
```
Ignite UI CLI を使用している場合は、次のコマンドを実行します。
```cmd
ig
```

<div style="display:inline-block;">
    <a style="background: url(../../images/general/buildCLIapp.gif); display:flex; justify-content:center; width: 80vw; 
    max-width:540px; min-height:315px;" href="https://youtu.be/QK_NsdtdA70" target="_blank">
        <img src="../../images/general/play.svg" style="vertical-align: middle;" />
    </a>
    <p style="text-align:center;">Building Your First Ignite UI CLI App</p>
</div>

## 新しいプロジェクトの作成

Ignite UI for Angular コントロールを使用するように設定されたアプリケーションを作成するには、コレクションオプションに `@igniteui/angular-schematics` を提供する `ng new` コマンドを実行します。

```cmd
ng new newAngularProject --collection="@igniteui/angular-schematics" --template=side-nav
```

Ignite UI CLI を使用する場合、`angular` をフレームワークとして提供し、`igx-ts` を `new` コマンドのプロジェクト タイプ引数として提供する必要があります。
```cmd
ig new newAngularProject --framework=angular --type=igx-ts --template=side-nav
```
新しいアプリケーションが同じ名前でディレクトリに作成されます (`newAngularProject`)。Ignite UI for Angular アプリケーションを作成するときに選択できるいくつかのプロジェクト テンプレートがあります。

| テンプレートの ID   | テンプレートの説明 |
| ---           | ---                  |
| empty         | ルーティングとホームページを備えたプロジェクト構造 |
| side-nav      | サイド ナビゲーション ドロワーを備えたプロジェクト構造 |
| side-nav-auth | ユーザー認証モジュールで拡張されたサイド ナビゲーション プロジェクトプロジェクト テンプレートの詳細は、[Angular 認証プロジェクト テンプレート](cli/auth-template.md)トピックをご覧ください。 |

さらに、**引数**を指定してテーマを制御したり、パッケージのインストールをスキップしたりできます。

<details>
  <summary>name</summary>
  <p>
    <code>name</code> (alias: <code>-n</code>)
  </p>
  <p>
    アプリケーションの名前。アプリケーションが同じ名前のディレクトリに作成されます。
  </p>
</details>

<details>
  <summary>framework<span align="right"><strong> (Ignite UI CLI only)</strong></span></summary>
  <p>
    <code>--framework</code> (alias: <code>-f</code>) <em>default value: "jquery"</em>
  </p>
  <p>
    プロジェクトの対象フレームワーク。サポートされるフレームワークは jQuery、Angular、および React です。
  </p>
</details>

<details>
  <summary>type<span align="right"><strong> (Ignite UI CLI only)</strong></span></summary>
  <p>
    <code>--type</code> (alias: <code>-t</code>)
  </p>
  <p>
    使用可能なプロジェクト タイプは、選択したフレームワークによって異なります。
  </p>
</details>

<details>
  <summary>theme</summary>
  <p>
    <code>--theme</code> (alias: <code>-th</code>)
  </p>
  <p>
    プロジェクト テーマ (プロジェクトの種類によって異なります)。
  </p>
</details>

<details>
  <summary>skip-git</summary>
  <p>
    <code>--skip-git</code> (alias: <code>--sg</code>)
  </p>
  <p>
    このオプションを使用すると、Git によるリポジトリの自動初期化はスキップされます。オプションを省略すると、グローバルな <a href="config">skipGit</a>構成プロパティが使用されます。
  </p>
</details>

<details>
  <summary>skip-install</summary>
  <p>
    <code>--skip-install</code> (alias: <code>--si</code>)
  </p>
  <p>
    <code>new</code> コマンドは、プロジェクトの作成時にパッケージの依存関係をインストールします。このフラグを渡すと、最初のインストールがスキップされます。
  </p>
</details>

<details>
  <summary markdown='span'>template</summary>
  <p>
    <code>--template</code>
  </p>
  <p>
    特定のフレームワーク タイプに異なるプロジェクト テンプレートがある場合、このオプションを使用します。 
    現在、このオプションは、Angular igx-ts プロジェクトタイプの Ignite UI でのみ使用できます。</p>
</details>


## テンプレートの追加
[利用可能な Ignite UI Angular テンプレート](cli/component-templates.md)を追加するには、新しいコンポーネントのテンプレート ID と名前を指定するか、[Step-by-Step Guide](cli/step-by-step-guide.md#ビューの追加) を使用する必要があります。Angular Schematics、Ignite UI CLI で作成された既存のプロジェクト内、または Ignite UI for Angular が [`ng add` でインストールされている](getting-started.md#Ignite-UI-for-Angular-のインストール) 場合にのみサポートされます。

Schematics には、Ignite UI for Angular コレクション と `component [template] [name]` の `ng generate` を使用します。

```cmd
ng g @igniteui/angular-schematics:component grid newGrid
```

Ignite UI CLI には、`ig add [template] [name]` コマンドを使用します。

```cmd
ig add grid newGrid
```

すべての[利用可能なテンプレート](cli/component-templates.md) のリストを取得するには、プロジェクトディレクトリで [`ig list`](https://github.com/IgniteUI/igniteui-cli/wiki/list) コマンドを実行することもできます。

また、コンポーネントを登録するモジュールを指定するか、アプリ ナビゲーション ルートの自動生成をスキップできます。

<details>
 <summary>module</summary>
  <p>
    <code>--module</code> (alias: <code>-m</code>)
  </p>
  <p>
    注: module 引数は、Angular プロジェクトでのみ適用できます。
  </p> 
  <p>
    新しいコンポーネントを登録するモジュールの、/src/app/ folder を基準とした module.ts ファイルのパス。
  </p>
  <code>ng g @igniteui/angular-schematics:component combo newCombo --module=myModule/myModule.module.ts</code>
  <br>
  <code>ig add combo newCombo --module=myModule/myModule.module.ts</code>
</details>

<details>
  <summary>skip-route</summary>
  <p>
    <code>--skip-route</code> (alias: <code>-srk</code>)
  </p>
  <p>
    新しいコンポーネントのアプリ ナビゲーション ルートを自動生成しないでください。
  </p>
</details>

## アプリケーションの実行

`start` schematic またはコマンドはアプリケーションがビルドされ、Web サーバーが起動してデフォルトのブラウザーで開きます。

Ignite UI for Angular Schematics の使用:
```cmd
ng g @igniteui/angular-schematics:start
```
Ignite UI CLI の使用:
```cmd
ig start
```

## Ignite UI CLI コマンド
使用可能な Ignite UI CLI コマンドとその使用方法 (フラグを渡すなど) の完全なリストは、[Ignite UI CLI wiki ページ](https://github.com/IgniteUI/igniteui-cli/wiki)にあります。

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