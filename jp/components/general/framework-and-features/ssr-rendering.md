---
title: Angular Universal のサーバー側レンダリング
_description: Ignite UI for Angular で Angular Universal レンダリングを使用する方法。
_keywords: Ignite UI for Angular, Universal, サーバー側レンダリング
---

## Angular Universal のサーバー側レンダリング

このトピックは、サーバー側レンダリングについて、および Ignite UI for Angular アプリケーションでそれを構成する方法を説明します。 

### Angular Universal

すべての Angular アプリケーションがクライアントのブラウザーで実行されるため、[First Meaningful Paint (FMP)](https://web.dev/first-meaningful-paint) のパフォーマンスが低下する場合があります (ブラウザーが最初にページの主要コンテンツをレンダリングする場合など)。 サーバー ページの完全な HTML を生成できるため、[Angular Universal](https://angular.io/guide/universal) が役に立ちます。サーバーでクライアント サイドのページを HTML にレンダリングし、後でクライアントでブートストラップします。操作方法について説明します。

> [FMP](https://web.dev/first-meaningful-paint)）は、ページの主要コンテンツがユーザーに表示されるタイミングを測定します。[FCP](https://web.dev/first-contentful-paint) メトリックは、ユーザーがページに移動した後ブラウザーが DOM コンテンツの最初の部分をレンダリングする時間を測定します。詳細については、[Lighthouse パフォーマンス スコアリング](https://web.dev/performance-scoring) を参照してください。



### 操作方法

Angular Universal を使用すると、アプリのランディング ページの静的バージョンを提供すると同時に、Angular アプリケーション全体がバックグラウンドで読み込まれます。ランディング ページは Pure HTML であり、JavaScript が無効になっている場合も表示されます。サーバーレンダリングの詳細については、[こちら](https://developers.google.com/web/updates/2019/02/rendering-on-the-web) をご覧ください。

### 使用方法

サーバー側 レンダリングは、[Web上のレンダリング](https://developers.google.com/web/updates/2019/02/rendering-on-the-web) ガイドラインの技術の 1 つであり、以下が可能です。
- Web クローラーが検索でウェブサイトを上位にインデックス付け - Search Engine Optimization (SEO) を向上します。
- 最初のページをすばやく表示 - 最初のページの読み込みが遅いため、ユーザーに解放されません (読み込みに 3 秒以上かかる場合)。
- アプリのパフォーマンスを向上 - [First Meaningful Paint](https://web.dev/first-meaningful-paint) と [First Contentful Paint](https://web.dev/first-contentful-paint) 両方にプラスの影響を与えます。 

> SEO およびソーシャル メディア プレビューを制御し、ユーザーが最初に描画されたビューを表示できるようにすることで、アプリケーションの全体的なパフォーマンスを向上させます。

### 既存の Ignite UI アプリケーションに SSR を追加する

#### 手順 1 - @nguniversal を追加します 
Angular CLI schematic を使用すると、次のコマンドを実行できます。

```
ng add @nguniversal/express-engine --clientProject ssr-example
```

この schematic は、npm コマンドや app.module 更新、アプリのクライアントおよびサーバーの構成などに複数の変更を実行します。

#### 手順 2 - 不足しているブラウザー固有のすべてのオブジェクトを定義します
`Window`、`document`、`location` などのブラウザー固有のオブジェクトが不足しているため、サーバー側の DOM 抽象化には [domino](https://github.com/fgnass/domino#server-side-dom-implementation-based-on-mozillas-domjs) を使用することをお勧めします。Domino は、Mozilla の dom.js に基づくサーバー側の DOM 実装です。

- サーバー側の DOM 抽象化には domino `npm install domino` をインストールします。
- IgxIconService を使用してアイコンを登録する場合は、xmlhttprequest `npm i xmlhttprequest` をインストールします。
- 「server.ts」 を設定します。

```typescript
// server.ts
const domino = require('domino');
const fs = require('fs');
const path = require('path');
const template = fs
  .readFileSync(path.join('dist/browser', 'index.html'))
  .toString();
const window = domino.createWindow(template);

// Ignite UI browser objects abstractions
(global as any).window = window;
(global as any).document = window.document;
(global as any).Event = window.Event;
(global as any).KeyboardEvent = window.KeyboardEvent;
(global as any).MouseEvent = window.MouseEvent;
(global as any).FocusEvent = window.FocusEvent;
(global as any).PointerEvent = window.PointerEvent;
(global as any).HTMLElement = window.HTMLElement;
(global as any).HTMLElement.prototype.getBoundingClientRect = () => {
    return {
      left: '',
      right: '',
      top: '',
      bottom: ''
  };
};

// If using IgxIconService to register icons
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Other optional depending on your application configuration
(global as any).object = window.object;
(global as any).navigator = window.navigator;
(global as any).localStorage = window.localStorage;
(global as any).DOMTokenList = window.DOMTokenList;
```

#### 手順 3 - Universal アプリを起動します
以下のコマンドを実行します。

```
npm run build:ssr && npm run serve:ssr
```

> サーバー側レンダリングの Angular アプリを実行するために、[Angular Express Engine](https://github.com/angular/universal/blob/master/modules/express-engine/README.md) の代わりとして、[ASP.NET Core Engine](https://github.com/angular/universal/tree/master/modules/aspnetcore-engine) を使用できます。

### ゼロから新しいアプリケーションを作成する 

1. `ng new` または [Ignite UI CLI](../cli-overview.md) の `ig new` コマンドを使用します。
2. ライブラリの npm パッケージをワークスペースにインストールし、そのライブラリを使用するように現在の作業ディレクトリにプロジェクトを構成する `ng add igniteui-angular` コマンドを実行します。
4. `ng add @nguniversal/express-engine --clientProject ig-ssr-example` で Angular Universal を追加します。「ig-ssr-example」はプロジェクトの名前です。
3. Ignite UI for Angular コンポーネント (Grid、Calendar など) を追加します。
4. 「server.ts」 ファイルを設定して、「window」、「document」、「location」 など、すべての必要なブラウザー固有のオブジェクトを定義します。
	- domino をインストールします `npm install domino` - サーバー側の dom 抽象化用
	- ixmlhttprequest をインストールします `npm i xmlhttprequest` - IgxIconService を使用してアイコンを登録する場合

### スターター プロジェクトを使用する

Ignite UI for Angular コンポーネントを含むスターター プロジェクトを使用します。このプロジェクトは Angular CLI を使用して、Angular Universal で簡単なアプリケーションをすばやく作成します。

#### 手順 1 - スターター リポジトリをクローンします

```
git clone https://github.com/IgniteUI/ng-universal-example.git
```

#### 手順 2 - NPM で必要な依存関係をインストールします

```
npm install
```

#### 手順 3 - 次のコマンドを使用して、アプリケーションを作成および起動します

```
npm run build:ssr && npm run serve:ssr
```

### 注:

- アプリケーションが他のブラウザー固有のオブジェクトを使用している場合、ブラウザーで Angular のみが使用するように、その使用方法を条件付きステートメントでラップします。`isPlatformBrowser` と `isPlatformServer` 関数を `@angular/common` からインポートし、コンポーネントに `PLATFORM_ID` トークンを挿入し、インポートした関数を実行してサーバー上かブラウザー上かを確認します。 
- HTML 要素の処理に ElementRef を使用する場合、nativeElement を使用して要素の属性を操作しないでください。代わりに、[Renderer2 メソッド](https://alligator.io/angular/using-renderer2) を挿入して使用します。
- サーバー要求のすべての URL は絶対である必要があります。 サーバーから実行すると、相対 URL からのデータ要求は失敗することに注意してください。
- ブラウザー イベントを処理するために、Angular チームは [preboot](https://github.com/angular/preboot) ライブラリを提供します。このライブラリはイベントをバッファリングし、クライアント側スクリプトが読み込まれるとそれらを再生します。
- Angular Universal を使用する場合、サーバーはユーザーに表示されるページを事前にレンダリングしますが、相互作用は制限されます。クライアント側アプリがバックグラウンドで読み込まれると、サーバーでレンダリングされたページの表示からクライアント側アプリにシームレスに切り替わります。

### 便利なリソース

<div class="divider--half"></div>

* [Angular Universal ガイド (英語)](https://angular.io/guide/universal)
* [Ignite UI スターターキット (英語)](https://github.com/IgniteUI/ng-universal-example)
* [サーバー側レンダリング用語](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)
* [Ignite UI で作業を開始](../getting_started.md)
* [Ignite UI CLI ガイド](../cli/step-by-step-guide.md)