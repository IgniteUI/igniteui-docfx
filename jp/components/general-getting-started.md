---
title: Angular データ可視化ツール | 作業の開始 | インフラジスティックス
_description: インフラジスティックスの Angular コンポーネントを使用してアプリを作成し、世界最速の仮想化されたリアルタイムの Angular データ グリッドとファイナンシャル ストリーミングおよびビジネスとファイナンシャル チャートでデータの可視化を改善します。
_keywords: Ignite UI for Angular, Infragistics, Getting Started, インフラジスティックス, 作業の開始
_language: ja
---

# Ignite UI for Angular を使用した作業の開始

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

## コンポーネントの使用

マークアップに Ignite UI for Angular マップ コンポーネントを使用する準備が整いました。以下のように定義します。

## アプリケーションの実行

以下のコマンドを使用して新しいアプリケーションを実行できます。

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm run-script start
</pre>

コマンドを実行した後、プロジェクトがローカルでビルドされて提供されます。これでデフォルトのブラウザーで自動的に開き、プロジェクトで Ignite UI for Angular コンポーネントを使用できるようになります。

以下の画像は、上記を実行した結果です。

<img src="../images/general/geo-map.png" />
<!-- end: Angular, React -->
