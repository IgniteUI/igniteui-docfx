---
title: Ignite UI for Angular Schematics を使用した作業の開始 | Ignite UI for Angular | インフラジスティックス
_description: ステップ バイ ステップ モードには、Ignite UI CLI オプションによるガイドが含まれます。
_keywords: angular cli, ignite ui for angular, infragistics
_language: ja
---

## Ignite UI for Angular Schematics を使用した作業の開始
はじめに [Ignite UI for Angular Schematics](https://github.com/IgniteUI/igniteui-cli/tree/master/packages/ng-schematics) をグローバルにインストールします。

```cmd
npm i -g @igniteui/angular-schematics
```
上記のインストールにより、schematics が `ng new` コマンドのコレクション パラメーターを使用できるようになります。

`yarn` パッケージ マネージャーを使用している場合:

```cmd
yarn global add @igniteui/angular-schematics
```

### ガイドの使用

アプリケーションを最短でブートストラップする最も簡単な方法は、[Ignite UI for Angular Schematics を使用したステップ バイ ステップ ガイド](step-by-step-guide-using-angular-schematics.md)を使用する方法です。 

Ignite UI for Angular Schematics を使用してガイドをアクティブにするには、次のコマンドを実行します。

```cmd
ng new --collection="@igniteui/angular-schematics"
```

## 新しいプロジェクトを作成します。

Ignite UI for Angular コントロールを使用するように設定されたアプリケーションを作成するには、コレクション オプションに `@igniteui/angular-schematics` を提供する `ng new` コマンドを実行します。

```cmd
ng new newAngularProject --collection="@igniteui/angular-schematics" --template=side-nav
```

さらに、`--type=igx-ts-legacy` のようにプロジェクトの `type` を設定することで、モジュール ベースのブートストラップを使用してプロジェクトを生成することを指定できます。これを指定しないと、デフォルトでスタンドアロン コンポーネントを使用するプロジェクトが使用されます。

上記のように `@igniteui/angular-schematics` コレクションを提供せずに作成された Angular プロジェクトが既にある場合、以下のコマンドを使用して Ignite UI for Angular 製品を追加できます。

```cmd
ng add igniteui-angular
```

新しいアプリケーションが同じ名前でディレクトリに作成されます (`newAngularProject`)。Ignite UI for Angular アプリケーションを作成するときに選択できるいくつかのプロジェクト テンプレートがあります。

| テンプレートの ID   | テンプレートの説明 |
| ---           | ---                  |
| empty         | ルーティングとホーム ページを備えたプロジェクト構造 |
| side-nav      | サイド ナビゲーション ドロワーを備えたプロジェクト構造 |
| side-nav-auth | ユーザー認証モジュールで拡張されたサイド ナビゲーション プロジェクト<br> プロジェクト テンプレートの詳細は、[Angular 認証プロジェクト テンプレート](auth-template.md)トピックをご覧ください。 |

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

[利用可能な Ignite UI Angular テンプレート](component-templates.md)を追加するには、新しいコンポーネントのテンプレート ID と名前を指定するか、[ステップ バイ ステップ ガイド](step-by-step-guide-using-cli.md#add-view)を使用する必要があります。Angular Schematics、Ignite UI CLI で作成された既存のプロジェクト内、または Ignite UI for Angular が [`ng add` でインストールされている](../getting-started.md#ignite-ui-for-angular-のインストール)場合にのみサポートされます。

Schematics には、Ignite UI for Angular コレクションと `component [template] [name]` の `ng generate` を使用します。

```cmd
ng g @igniteui/angular-schematics:component grid newGrid
```
すべての[利用可能なテンプレート](component-templates.md)のリスト。

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
  <code>ng g @igniteui/angular-schematics:component combo newCombo --module=myModule/myModule.module.ts</code>
  <br>
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

`start` schematic を実行すると、アプリケーションがビルドされ、Web サーバーが起動してデフォルトのブラウザーで開きます。

```cmd
ng g @igniteui/angular-schematics:start
```