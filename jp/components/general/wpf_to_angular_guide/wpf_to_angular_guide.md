---
title: WPF から Angular へ移行チュートリアル | IgniteUI for Angular | Infragistics
_description: Angular から WPF に切り替える方法を両フレームワークを比較しながら説明します。バインディング、イベント、コンポーネントなどの類似点を確認します。
_keywords: Angular ツール チュートリアル, igniteui for angular, インフラジスティックス
_language: ja
---

## チュートリアル: WPF から Angular への移行

このチュートリアルは、`デスクトップ`から `Web` フレームワークへのスムーズな移行を行うための最初のステップです。このチュートリアルは、Web 開発を始める予定の WPF 開発者を対象としており、アプリケーション構造、データバインディング、イベント、コンポーネントなど、両方のフレームワークの相違点と類似点を検証します。ガイドは以下のトピックで構成されています。

<p align="center">
    <img src="../../../images/general/wpf_to_angular_guide.png" style="vertical-align: middle;" />
</p>

#### [はじめての Angular アプリを作成](create_first_angular_app.md)

はじめに、Angular を使用した最新の Web アプリ開発の前提条件をインストールする必要があります。このセクションでは、Node.js パッケージ マネージャの使用、Visual Studio Code IDE のインストール、および最新の Web 開発に必要な基本概念について説明します。

#### [Angular コンポーネントを使用した UI の作成](create_ui_with_components.md)
Angularで UI を作成する方法は、WPF で UI を作成する方法と非常に似ています。通常、UserControl クラスで表されるユーザー コントロールを使用します。UserControl は、マークアップとコードを再利用可能なコンテナにグループ化し、複数の異なる場所で同じインターフェイスと機能を使用できるようにします。Angular のコンポーネントの理解は、このシリーズの残りの部分に重要です。はじめに、WPF コンポーネントがどのように Angular のコンポーネントに変換されるかを説明します。

#### [Angular 一方向バインディング](one_way_binding.md)

WPF で最も強力で広く使用されている機能の 1 つは、データ バインディングです。これにより、ビジネス ロジックとビューの同期や非同期が最小限のコードで可能なため、開発者の負荷を大幅に軽減できます。この機能なしでは、WPF は見栄えの良い Windows Forms のようなものです。Angular ではデータ バインディングをサポートしており、一方向バインディングと双方向バインディングの 2 種類をサポートします。このセクションでは、一方向データバインディングを実現する方法と、WPF との比較方法を示します。

#### [Angular イベント](angular_events.md)

ユーザー入力イベントへのバインドは、アプリで大変重要です。ユーザー インタラクションに反応しないアプリを作成するユースケースはほぼないでしょう。応答で最も一般的な方法は、イベント システムを使用することです。WPF は、ルーティング イベント、CLR イベント、およびコマンドを提供します。Angular では、DOM イベントがあります。このセクションでは、DOM イベントとユーザー入力の処理方法について説明します。

#### [Angular 双方向バインディング](two_way_binding.md)

Angular 一方向バインディングは、コンポーネント クラスからのデータでビューを更新します。WPF の場合と同様に、反対の操作を実行してビューからコンポーネント クラスを更新します。その場合、双方向バインディングを使用する必要があります。このセクションでは、WPF の双方向バインディングを比較します。

#### [Angular パイプでデータを変換](angular_pipes.md)

WPF で は、IValueConverter を使用してデータを変換します。Angular アプリケーションでは、Angular Pipes を使用します。パイプは WPF コンバーターに似ています。データを入力として受け取り、そのデータを表示用の目的の出力に変換します。このセクションでは、定義済みの Angular パイプのいくつかと、それらをアプリで使用する方法を示します。

#### [Angular の構造ディレクティブ](structural_directives.md)

WPF 開発者として、ビジュアル ツリーから要素を追加または削除するには、コード ビハインドにジャンプして C# を記述するか、バインディングと表示コンバーターの組み合わせを使用でき、カスタムロジックと静的リソースが必要となります。これは WPF で常に行ってきた方法ですが、Angular を使用すると非常に簡単になります。このセクションでは、構造ディレクティブを使用して、Angular アプリの要素を操作する方法を示します。

#### [レイアウト要素](layout.md)

WPF では、アプリケーション内で要素をレイアウトするには、要素を Panel 内に配置する必要があります。Angular では、CSS を使用します。このトピックでは、レイアウト、および Flexbox や CSS Grid などの CSS 機能の使用方法について説明します。 

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)