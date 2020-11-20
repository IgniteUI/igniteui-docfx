---
title: Angular データ可視化ツール | 作業の開始 | インフラジスティックス
_description: インフラジスティックスの Angular コンポーネントを使用してアプリを作成し、世界最速の仮想化されたリアルタイムの Angular データ グリッドと財務ストリーミングおよびビジネスと財務チャートでデータの可視化を改善します。
_keywords: Ignite UI for Angular, Infragistics, Getting Started, インフラジスティックス, 作業の開始
_language: ja
---

# Ignite UI for Angular を使用した作業の開始

Ignite UI for Angular は、最新のデスクトップ ブラウザー対応の高パフォーマンス HTML 5 および TypeScript アプリケーションを構築するために設計された Angular コンポーネントのコンプリート セットです。

<!-- Angular, React, WebComponents -->

## コンピューターのセットアップ

Ignite UI for Angular を実行する前に、Ignite UI for Angular を含むすべての Angular アプリケーションを実行するためにシステムでセットアップする必要のあるステップが 2 つあります。最初にシステムに NodeJS と Visual Studio Code をインストールします。Angular を使用した最新の Web 開発には NodeJS が必要で、これはブラウザーで実行されている ASP.NET アプリケーションのようなもので、サーバーに ASP.NET ランタイムを配備する必要があります。また Angular アプリケーションを構築するための開発環境は、 Visual Studio Code が最も適しているため、作業を開始する前に Node.js と Visual Studio Code をインストールします。

<div style="display:block;width:100%;margin:50px;">
    <div style="display:inline-block;width:45%;text-align:center;">
      <img src="../images/general/nodejs.svg"
           style="display:flex;max-height:100px;margin:auto auto 20px auto;" />
      <a target="_blank" href="https://nodejs.org/en/download/"
         style="color:white;background-color:#09f;text-decoration:none;font-weight:700;font-size:16px;padding: 5px 15px 5px 15px;">
        DOWNLOAD NODE JS
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

<!-- end: Angular, React, WebComponents -->

<!-- Angular, React -->

## 既存アプリの更新

既存の Angular CLI プロジェクト (以前のもの) で Ignite UI for Angular を使用する場合は、以下のコマンドを実行します。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save igniteui-angular-charts igniteui-angular-core
npm install --save igniteui-angular-excel igniteui-angular-core
npm install --save igniteui-angular-gauges igniteui-angular-core
npm install --save igniteui-angular-grids igniteui-angular-core
npm install --save igniteui-angular-maps igniteui-angular-core
npm install --save igniteui-angular-spreadsheet igniteui-angular-core
</pre>

また

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
yarn add igniteui-angular-charts igniteui-angular-core
yarn add igniteui-angular-excel igniteui-angular-core
yarn add igniteui-angular-gauges igniteui-angular-core
yarn add igniteui-angular-grids igniteui-angular-core
yarn add igniteui-angular-maps igniteui-angular-core
yarn add igniteui-angular-spreadsheet igniteui-angular-core
</pre>

これにより、Ignite UI for Angular のパッケージが、それらのすべての依存関係、フォントのインポート、および既存のプロジェクトへのスタイル参照と共に自動的にインストールされます。

## モジュールのインポート

はじめに、使いたいコンポーネントの必要なモジュールをインポートします。[**GeographicMap**](geo-map.md) に対してこれを行います。
