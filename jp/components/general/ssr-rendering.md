---
title: サーバー側レンダリング | Angular SSR | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular で Angular サーバー側レンダリングを使用する方法。
_keywords: Ignite UI for Angular, Angular SSR, サーバー側レンダリング
_language: ja
---

# Angular SSR のサーバー側レンダリング

このトピックは、サーバー側レンダリングについて、および Ignite UI for Angular アプリケーションでそれを構成する方法を説明します。 

## Angular サーバー側レンダリング

すべての Angular アプリケーションがクライアントのブラウザーで実行されるため、[Largest Contentful Paint (LCP)](https://web.dev/articles/lcp) のパフォーマンスが低下する場合があります (ブラウザーが最初にページの最大のコンテンツをレンダリングする場合など)。サーバー ページの完全な HTML を生成できるため、[Angular SSR](https://angular.dev/guide/ssr) が役に立ちます。サーバーでクライアント サイドのページを HTML にレンダリングし、後でクライアントでブートストラップします。操作方法について説明します。

> [LCP](https://web.dev/articles/lcp) は、ページの最大のコンテンツがユーザーに表示されるタイミングを測定します。[FCP](https://web.dev/first-contentful-paint) メトリックは、ユーザーがページに移動した後ブラウザーが DOM コンテンツの最初の部分をレンダリングする時間を測定します。詳細については、[Lighthouse パフォーマンススコアリング](https://web.dev/performance-scoring) を参照してください。



## 操作方法

Angular SSR を使用すると、アプリのランディング ページの静的バージョンを提供すると同時に、Angular アプリケーション全体がバックグラウンドで読み込まれます。ランディング ページは Pure HTML であり、JavaScript が無効になっている場合も表示されます。サーバーレンダリングの詳細については、[こちら](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)をご覧ください。

## 使用方法

サーバー側 レンダリングは、[Web 上のレンダリング](https://developers.google.com/web/updates/2019/02/rendering-on-the-web) ガイドラインの技術の 1 つであり、以下が可能です。
- Web クローラーが検索でウェブサイトを上位にインデックス付け - Search Engine Optimization (SEO) を向上します。
- 最初のページをすばやく表示 - 最初のページの読み込みが遅いため、ユーザーに解放されません (読み込みに 3 秒以上かかる場合)。
- アプリのパフォーマンスを向上 - [First Contentful Paint](https://web.dev/first-contentful-paint) と [Largest Contentful Paint](https://web.dev/articles/lcp) 両方にプラスの影響を与えます。 

> SEO およびソーシャル メディア プレビューを制御し、ユーザーが最初に描画されたビューを表示できるようにすることで、アプリケーションの全体的なパフォーマンスを向上させます。

## 既存の Ignite UI アプリケーションに SSR を追加する

### 手順 1 - @angular/ssr を追加します
Angular CLI スキーマティックを使用すると、次のコマンドを実行できます。

```
ng add @angular/ssr
```

このスキーマティックは、アプリのクライアントとサーバーの構成にいくつかの変更を加え、プロジェクト構造に追加のファイルを追加します。

### 手順 2 - Angular SSR アプリを起動します
以下のコマンドを実行します。

```
ng serve
```

## ゼロから新しいアプリケーションを作成する 

1. `ng new` または [Ignite UI CLI](./cli/getting-started-with-cli.md) `ig new` コマンドを使用します。または、`ng new --ssr` を使用して、手順 3 をスキップし、新しい Angular SSR プロジェクトを直接作成します。
2. ライブラリの npm パッケージをワークスペースにインストールし、そのライブラリを使用するように現在の作業ディレクトリにプロジェクトを構成する `ng add igniteui-angular` コマンドを実行します。
3. `ng add @angular/ssr` を使用して Angular SSR を追加します。
4. Ignite UI for Angular コンポーネント (Grid、Calendar など) を追加します。

## その他の考慮事項

- アプリケーションが他のブラウザー固有のオブジェクトを使用している場合、ブラウザーで Angular のみが使用するように、その使用方法を条件付きステートメントでラップします。`isPlatformBrowser` と `isPlatformServer` 関数を `@angular/common` からインポートし、コンポーネントに `PLATFORM_ID` トークンを挿入し、インポートした関数を実行してサーバー上かブラウザー上かを確認します。 
- HTML 要素の処理に ElementRef を使用する場合、nativeElement を使用して要素の属性を操作しないでください。代わりに、[Renderer2 メソッド](https://alligator.io/angular/using-renderer2)を挿入して使用します。
- サーバー要求のすべての URL は絶対である必要があります。サーバーから実行すると、相対 URL からのデータ要求は失敗することに注意してください。
- ブラウザー イベントを処理するために、Angular チームは [withEventReplay()](https://angular.dev/guide/hydration#capturing-and-replaying-events) 関数を提供します。この機能により、ハイドレーションが完了する前に発生したすべてのイベントをキャプチャし、ハイドレーション完了後にそれらのイベントを再実行することが可能になります。
- IgxIconService を使用してアイコンを登録する場合は、プロバイダーで [provideHttpClient()](https://angular.dev/api/common/http/provideHttpClient) が構成されていることを確認してください。
- Angular SSR を使用する場合、サーバーはユーザーに表示されるページを事前にレンダリングしますが、相互作用は制限されます。クライアント側アプリがバックグラウンドで読み込まれると、サーバーでレンダリングされたページの表示からクライアント側アプリにシームレスに切り替わります。

## 便利なリソース

<div class="divider--half"></div>

* [Angular SSR ガイド (英語)](https://angular.dev/guide/ssr)
* [サーバー側レンダリング用語](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)
* [Ignite UI を使用した作業の開始](getting-started.md)
* [Ignite UI CLI ガイド](cli/step-by-step-guide-using-cli.md)
* [Ignite UI for Angular Schematics](cli/step-by-step-guide-using-angular-schematics.md)