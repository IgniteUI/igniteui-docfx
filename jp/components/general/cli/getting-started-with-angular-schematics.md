---
title: Ignite UI for Angular Schematics を使用した作業の開始 | Ignite UI for Angular | インフラジスティックス
_description: The Step-by-Step mode contains guided experience through the Ignite UI CLI options.
_keywords: angular cli, ignite ui for angular, infragistics
_language: ja
---

## Ignite UI for Angular Schematics を使用した作業の開始
To get started install [Ignite UI for Angular Schematics](https://github.com/IgniteUI/igniteui-cli/tree/master/packages/ng-schematics) globally:

```cmd
npm i -g @igniteui/angular-schematics
```
上記のインストールにより、schematics が `ng new` コマンドのコレクション パラメーターを使用できるようになります。

### ガイドの使用

アプリケーションを最短でブートストラップする最も簡単な方法は、[Ignite UI for Angular Schematics を使用したステップ バイ ステップ ガイド](step-by-step-guide-using-angular-schematics.md)を使用する方法です。 

Ignite UI for Angular Schematics を使用してガイドをアクティブにするには、次のコマンドを実行します。

```cmd
ng new --collection="@igniteui/angular-schematics"
```

## 新しいプロジェクトを作成します。

Ignite UI for Angular コントロールを使用するように設定されたアプリケーションを作成するには、コレクションオプションに `@igniteui/angular-schematics` を提供する `ng new` コマンドを実行します。

```cmd
ng new newAngularProject --collection="@igniteui/angular-schematics" --template=side-nav
```

If you already have an Angular project, created without providing the `@igniteui/angular-schematics` collection as described above, you can add the Ignite UI for Angular product, using the following command:

```cmd
ng add igniteui-angular
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

[利用可能な Ignite UI Angular テンプレート](component-templates.md)を追加するには、新しいコンポーネントのテンプレート ID と名前を指定するか、[ステップ バイ ステップ ガイド](step-by-step-guide.md#add-view)を使用する必要があります。Angular Schematics、Ignite UI CLI で作成された既存のプロジェクト内、または Ignite UI for Angular が [`ng add` でインストールされている](getting_started.md#Ignite-UI-for-Angular-のインストール) 場合にのみサポートされます。

Schematics には、Ignite UI for Angular コレクションと `component [template] [name]` の `ng generate` を使用します。

```cmd
ng g @igniteui/angular-schematics:component grid newGrid
```
List of all the [available templates](component-templates.md).

また、コンポーネントを登録するモジュールを指定するか、アプリ ナビゲーション ルートの自動生成をスキップできます。

<details>
  <summary><u>module</u></summary>
  <p>
    <code>--module</code> (alias: <code>-m</code>)
  </p>
  <p>
    <i>note: module argument is applicable only in Angular projects.</i>
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