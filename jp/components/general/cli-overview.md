---
title: Ignite UI CLI
_description: Ignite UI CLI は、さまざまなフレームワークでアプリケーションを初期化、開発、スキャフォールディング、および保守するためのツールです。
_keywords: Ignite UI for Angular, UI controls, CLI, Templates, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
_language: ja
---

## Ignite UI CLI

[Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli) は、さまざまなフレームワーク用のアプリケーションを作成およびスキャフォールディングするためのコマンドラインツールです。
Ignite UI for Angular の定義済みのプロジェクト テンプレートが含まれ、アプリ開発を効率的に行うことができます。プロジェクトにさらに追加できる Angular コンポーネント用の Ignite UI を備えたビューの選択により、開発者の生産性が大幅に向上します。

### 作業の開始

npm パッケージ マネージャーを使用して [Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli) をインストールします。
```cmd
npm install -g igniteui-cli 
```
インストールの完了後、ガイドまたは特定のコマンドを使用してツールを開始できます。

#### ガイドの使用
アプリケーションを最短でブートストラップする最も簡単な方法は、Ignite UI CLI [ステップバイステップ ガイド](cli/step-by-step-guide.md) を使用する方法です。アプリのビルド後、1 コマンドで開始できます。 
```cmd
ig
```

<div style="display:inline-block;">
    <a style="background: url(../../images/general/buildCLIapp.gif); display:flex; justify-content:center; min-width:540px; min-height:315px;"
       href="https://youtu.be/QK_NsdtdA70" target="_blank">
        <img src="../../images/general/play.svg" style="vertical-align: middle;" />
    </a>
    <p style="text-align:center;">Building Your First Ignite UI CLI App</p>
</div>

#### コマンドの使用
新しいプロジェクトを作成するには、コンポーネントテンプレートを追加してビルドし、次の Ignite UI CLI [コマンド](#コマンド) を使用します。
```cmd
ig new <project name> --framework=angular --type=igx-ts 
cd <project name>
ig add <component/template> <component_name>
ig start 
```

上記のコマンドを実行するには、*プロジェクト名*と*コンポーネント名*のプレースホルダーを実際の値に置き換える必要があります。
これらのコマンドを実行すると、新しいプロジェクトがビルド、提供され、デフォルトのブラウザーで自動的に開かれます。


### コマンド

#### 新しいプロジェクトの作成

Ignite UI for Angular コントロールに Ignite UI を使用するように構成されたアプリケーションを作成するには、フレームワークとして `angular` を、プロジェクトタイプ引数として `igx-ts` を提供する必要があります。

```cmd
ig new newAngularProject --framework=angular --type=igx-ts --template=side-nav
```
新しいアプリケーションが同じ名前でディレクトリに作成されます (`newAngularProject`)。[Ignite UI CLI](https://github.com/IgniteUI/igniteui-cli) は、Angular アプリケーション用の Ignite UI を作成するときに選択できるいくつかのプロジェクト テンプレートも提供します。

| テンプレートの ID   | テンプレートの説明 |
| ---           | ---                  |
| empty-project | ルーティングとホームページを備えたプロジェクト構造 |
| side-nav      | サイド ナビゲーション ドロワーを備えたプロジェクト構造 |
| side-nav-auth | ユーザー認証モジュールで拡張されたサイド ナビゲーション プロジェクトプロジェクト テンプレートの詳細は、[Angular 認証プロジェクト テンプレート](cli/auth-template.md) トピックをご覧ください。 |

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
  <summary>framework</summary>
  <p>
    <code>--framework</code> (alias: <code>-f</code>) <em>default value: "jquery"</em>
  </p>
  <p>
    プロジェクトの対象フレームワーク。サポートされるフレームワークは jQuery、Angular、および React です。
  </p>
</details>

<details>
  <summary>type</summary>
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
  <summary>skip-install <span align="right"><strong>(v4.0.0)</strong></span></summary>
  <p>
    <code>--skip-install</code> (alias: <code>--si</code>)
  </p>
  <p>
    v4.0.0以降、<code> ig new </ code>コマンドは、プロジェクトの作成時にパッケージの依存関係をインストールします。このフラグを渡すと、最初のインストールがスキップされます。
  </p>
</details>

<details>
  <summary markdown='span'>template <span align="right"><strong>(v3.0.0)</strong></span></summary>
  <p>
    <code>--template</code>
  </p>
  <p>
    特定のフレームワーク タイプに異なるプロジェクト テンプレートがある場合、このオプションを使用します。 
    現在、このオプションは、Angular igx-ts プロジェクトタイプの Ignite UI でのみ使用できます。</p>
</details>


#### テンプレートの追加

`ig add [template] [name]` は、指定された名前で [利用可能なテンプレート](cli/component-templates.md) から ID でテンプレートを追加します。

```cmd
cd newAngularProject
ig add grid newGrid
```

`Add` コマンドは、Ignite UI CLI で作成された既存のプロジェクトでのみサポートされます。すべての[利用可能なテンプレート](cli/component-templates.md)のリストを取得するには、プロジェクトディレクトリで [`ig list`](https://github.com/IgniteUI/igniteui-cli/wiki/list) コマンドを実行することもできます。

さらに、**引数**を指定してテーマを制御したり、パッケージのインストールをスキップしたりできます。

<details>
  <summary>module <span align="right"><strong>(v2.0.0)</strong></span></summary>
  <p>
    <code>--module</code> (alias: <code>-m</code>)
  </p>
  <p>
    注: module 引数は、Angular プロジェクトでのみ適用できます。
  </p> 
  <p>
    新しいコンポーネントを登録するモジュールの、 /src/app/ folder を基準とした module.ts ファイルのパス。
  </p>
  <code>ig add grid newCombo --name=myModule/myModule.module.ts</code>
</details>

<details>
  <summary>skip-route <span align="right"><strong>(v3.2.0)</strong></span></summary>
  <p>
    <code>--skip-route</code> (alias: <code>-srk</code>)
  </p>
  <p>
    新しいコンポーネントのアプリ ナビゲーション ルートを自動生成しないでください。
  </p>
</details>

#### アプリケーションの実行

[ig start](https://github.com/IgniteUI/igniteui-cli/wiki/start) コマンドを実行すると、アプリケーションがビルドされ、Web サーバーが起動してデフォルトのブラウザーで開きます。

```cmd
ig start
```

#### 利用可能なコマンド
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