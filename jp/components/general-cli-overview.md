---
title: Angular CLI | データ可視化ツールおよびテーブル | インフラジスティックス
_description: Ignite UI for Angular ツールセットには Angular CLI があり、生産性を高め、プロジェクトをすばやく開始できます。今すぐ Ignite UI for Angular アプリケーションを作成してください!
_keywords: Angular cli, command line interface, Ignite UI for Angular, Infragistics, コマンド ライン インターフェイス, インフラジスティックス
_language: ja
---

# Angular Ignite UI CLI

CLI ツールでは、Ignite UI for Angular の定義済みのプロジェクト テンプレートが含まれ、アプリ開発を効率的に行うことができます。<a href="https://github.com/IgniteUI/igniteui-cli/blob/master/README.md#generate-ignite-ui-for-react-project" target="_blank">Ignite UI CLI</a> は、さまざまなフレームワーク用のアプリケーションを作成およびスキャフォールディングするためのスタンドアロン コマンドラインツールです。

## 作業の開始

まずは CLI をインストールします。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install -g igniteui-cli
</pre>

上記のインストール コマンドは、Ignite UI CLI を Ignite UI for Angular アプリケーションの作成、スキャフォールディング、および実行に使用できるようにします。

## 新しいプロジェクトの作成

Ignite UI CLI を使用して、Ignite UI for Angular コントロールを使用するように構成されたアプリケーションを作成するには、コマンドラインで次のテンプレートを使用できます。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
ig new "[name_of_project]" --framework=[target_framework] --type=[project_type]
</pre>

上記のテンプレートを使用して、ES6 をターゲットとする「My Project」という名前の `React` アプリケーションを作成する場合は、次のコマンドを実行します。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
ig new "My Project" --framework=react --type=igr-es6
</pre>

## コンポーネントの追加

プロジェクトの作成後は、いつでも **ig add** を使用してコンポーネント テンプレートを追加することができます。パラメーターを指定せずにこのコマンドを実行した場合、キーボードナビゲーション CLI を使用して、選択したコントロールを追加することにより、使用可能なテンプレートが示されます。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
ig add
</pre>

または、単に **ig list** コマンドを実行して、現在のプロジェクトでサポートされているテンプレートの完全なリストを取得することもできます。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
ig list
</pre>

**ig list** を実行し、追加したいコンポーネント テンプレートを見つけた後、コマンドラインでこのテンプレートを実行することにより、すばやく追加することができます。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
ig add [component_template] [component_name]
</pre>

上記の「component\_template」は通常、Ignite UI for Angular コンポーネント (grid、category-chart、linear-gauge など) と一致します。

たとえば、「MyGrid Component」という名前のデータ グリッド テンプレート コンポーネントをアプリに追加する場合は、次のコマンドを実行します。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
ig add grid MyGridComponent
</pre>

## アプリをビルドして実行する

Ignite UI for Angular アプリをビルドして実行するには、**ig build** コマンドと **ig run** コマンドを呼び出します。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
ig build
ig run
</pre>

## Ignite UI CLI コマンド

使用可能な Ignite UI CLI コマンドとその使用方法 (フラグを渡すなど) の完全なリストは、[Ignite UI CLI wiki ページ](https://github.com/IgniteUI/igniteui-cli/wiki)にあります。

| コマンド                                                                  | エイリアス | 説明                                                                                           |
| --------------------------------------------------------------------- | ----- | -------------------------------------------------------------------------------------------- |
| [ig start](https://github.com/IgniteUI/igniteui-cli/wiki/start)       |       | アプリケーションをビルドしてウェブ サーバーを開始、次にアプリケーションをデフォルト ブラウザーで開きます。                                       |
| [ig build](https://github.com/IgniteUI/igniteui-cli/wiki/build)       |       | アプリケーションをアプトプット ディレクトリへビルドします。                                                               |
| [ig generate](https://github.com/IgniteUI/igniteui-cli/wiki/generate) | g     | サポートされるフレームワークおよびプロジェクト タイプのための新しいカスタム テンプレートを生成します。                                         |
| [ig help](https://github.com/IgniteUI/igniteui-cli/wiki/help)         | -h    | 使用可能なコマンドをリストして手順の簡単な説明を示します。                                                                |
| [ig config](https://github.com/IgniteUI/igniteui-cli/wiki/config)     |       | Ignite UI CLI 構成設定の読み取り / 書き込み操作を実行します。                                                      |
| [ig doc](https://github.com/IgniteUI/igniteui-cli/wiki/doc)           |       | 検索した用語についてインフラジスティックスのサポート情報を検索します。                                                          |
| [ig list](https://github.com/IgniteUI/igniteui-cli/wiki/list)         | l     | 指定したフレームワークとタイプのすべてのテンプレートをリストします。プロジェクト フォルダー内でコマンド実行時にプロジェクトのフレームワークとタイプのテンプレートをすべてリストします。 |
| [ig test](https://github.com/IgniteUI/igniteui-cli/wiki/test)         |       | 現在のプロジェクトのテストを実行します。                                                                         |
| ig version                                                            | -v    | ローカル (ローカルがない場合はグローバル) にインストールされた Ignite UI CLI バージョンを示します。                                  |
