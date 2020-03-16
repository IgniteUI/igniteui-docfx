---
title: データ可視化ツール | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular は、開発者が最新のデスクトップ ブラウザー用の最新の高パフォーマンス HTML 5 および TypeScript アプリケーションを構築できるように設計された Angular コンポーネントのコンプリート セットです。
_keywords: Ignite UI for Angular, Getting started, Infragistics, Install Angular, IG, インフラジスティックス, はじめに, Angular のインストール
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

### 既存アプリの更新

既存の Angular CLI プロジェクト (以前のもの) で Ignite UI for Angular を使用する場合は、以下のコマンドを実行します。

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

### アプリの起動

次のコマンドでアプリケーションをビルドまたは起動することができます。

-   **npm run-script build**
-   **npm run-script start**

シンプルなコマンドを実行した後、プロジェクトがビルドされて提供されます。これでデフォルトのブラウザーで自動的に開き、プロジェクトで Ignite UI for Angular コンポーネントを使用できるようになります。

### モジュールのインポート

はじめに、使いたいコンポーネントの必要なモジュールをインポートします。[**GeographicMap**](geo-map.md) に対してこれを行います。

### コンポーネントの使用

マークアップに Ignite UI for Angular マップ コンポーネントを使用する準備が整いました。以下のように定義します。

### アプリケーションの実行

以下のコマンドを使用して新しいアプリケーションを実行できます。

-   **npm run-script start**

以下の画像は、上記を実行した結果です。

<img src="../images/general/geo-map.png" />
