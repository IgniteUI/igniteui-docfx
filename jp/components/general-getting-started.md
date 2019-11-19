---
title: データ可視化ツール|Ignite UI for Angular |Infragistics
_description: Ignite UI for Angular は、開発者が最新のデスクトップ ブラウザー用の最新の高パフォーマンス HTML 5 および TypeScript アプリケーションを構築できるように設計された Angular コンポーネントのコンプリート セットです。
_keywords: Ignite UI for Angular, Infragistics, はじめに, IG,
_language: ja
---

## Ignite UI for Angular を使用した作業の開始

Ignite UI for Angular は、最新のデスクトップ ブラウザー対応の高パフォーマンス HTML 5 および TypeScript アプリケーションを構築するために設計された Angular コンポーネントのコンプリート セットです。

Ignite UI for Angular を実行する前に、Ignite UI for Angular を含むすべての Angular アプリケーションを実行するためにシステムでセットアップする必要のあるステップが 2 つあります。最初にシステムに NodeJS と Visual Studio Code をインストールします。Angular を使用した最新の Web 開発には NodeJS が必要で、これはブラウザーで実行されている ASP.NET アプリケーションのようなもので、サーバーに ASP.NET ランタイムを配備する必要があります。また Angular アプリケーションを構築するための開発環境は、 Visual Studio Code が最も適しているため、作業を開始する前に Node.js と Visual Studio Code をインストールします。

<div style="display:block;width:100%;margin:50px;">
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../images/general/nodejs.svg"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://nodejs.org/en/download/"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 15px 5px 15px;">
        DOWNLOAD NODE
      </a>
    </div>
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../images/general/vs-code.svg"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://code.visualstudio.com/download"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 15px 5px 15px;">
        DOWNLOAD VS CODE
      </a>
    </div>
</div>

### 新しいアプリの作成

ここまですべての準備が整いました。さっそくアプリケーションを作成してみましょう。

**VS Code** で、**ターミナル** メニュー、**新しいターミナル** オプションを選択し、以下のように入力します。

-   **npx create-react-app my-app-name --typescript**

また

-   **yarn create react-app my-app-name --typescript**

この手順の詳細は、<a href="https://facebook.github.io/create-react-app/docs/adding-typescript" target="_blank">こちら</a> (英語)を参照してください。

次に、VS Code で my-app-name フォルダーを開き、次のコマンドを使用して、Ignite UI for Angular に次のいずれかのパッケージをインストールする必要があります。

-   **npm install --save igniteui-angular-charts igniteui-angular-core**
-   **npm install --save igniteui-angular-excel igniteui-angular-core**
-   **npm install --save igniteui-angular-gauges igniteui-angular-core**
-   **npm install --save igniteui-angular-grids igniteui-angular-core**
-   **npm install --save igniteui-angular-maps igniteui-angular-core**
-   **npm install --save igniteui-angular-spreadsheet igniteui-angular-core**

また

-   **yarn add igniteui-angular-charts igniteui-angular-core**
-   **yarn add igniteui-angular-excel igniteui-angular-core**
-   **yarn add igniteui-angular-gauges igniteui-angular-core**
-   **yarn add igniteui-angular-grids igniteui-angular-core**
-   **yarn add igniteui-angular-maps igniteui-angular-core**
-   **yarn add igniteui-angular-spreadsheet igniteui-angular-core**

最後に、次のコマンドでアプリケーションをビルドして起動することができます。

-   **npm run-script build**
-   **npm run-script start**

シンプルなコマンドの実行した後、新しいプロジェクトがビルドされて提供されます。これでデフォルトのブラウザーで自動的に開き、プロジェクトで ProductName$ ンポーネントを使用できるようになります。

### 既存のアプリの更新

既存の Angular CLIプロジェクト(以前のもの) で Ignite UI for Angular を使用する場合は、以下のコマンドを実行するだけです。

-   **npm install --save igniteui-angular-charts igniteui-angular-core**
-   **npm install --save igniteui-angular-excel igniteui-angular-core**
-   **npm install --save igniteui-angular-gauges igniteui-angular-core**
-   **npm install --save igniteui-angular-grids igniteui-angular-core**
-   **npm install --save igniteui-angular-maps igniteui-angular-core**
-   **npm install --save igniteui-angular-spreadsheet igniteui-angular-core**

また

-   **yarn add igniteui-angular-charts igniteui-angular-core**
-   **yarn add igniteui-angular-excel igniteui-angular-core**
-   **yarn add igniteui-angular-gauges igniteui-angular-core**
-   **yarn add igniteui-angular-grids igniteui-angular-core**
-   **yarn add igniteui-angular-maps igniteui-angular-core**
-   **yarn add igniteui-angular-spreadsheet igniteui-angular-core**

これにより、Ignite UI for Angular のパッケージが、それらのすべての依存関係、フォントのインポート、および既存のプロジェクトへのスタイル参照と共に自動的にインストールされます。

### モジュールのインポート

はじめに、使いたいコンポーネントのそれぞれのモジュールをインポートする必要があります。[**GeographicMap**](geo-map.md) に対してこれを行います。

### コンポーネントを使う

マークアップに GeographicMap を使用する準備が整いました。定義します。

### アプリケーションの実行

以下のコマンドを使用して新しいアプリケーションを実行できます。

-   **npm run-script start**

以下は、実行結果です。

<img src="../images/general/geo-map.png" />
