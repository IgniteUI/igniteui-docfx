---
title: Navbar コンポーネント
_description: Ignite UI for Angular Navbar コントロールはアプリケーションでのスムーズな移動を可能にする UI コンポーネントです。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Navbar コンポーネント, Angular Navbar コントロール
_language: ja
---

## Navbar

<p class="highlight">Ignite UI for Angular Navigation Bar コンポーネントは、アプリケーション内の現在位置を示し、ブラウザーの [戻る] ボタンのように戻る機能を提供します。Navigation Bar の検索またはお気に入りなどのリンクによって、ユーザーはアプリケーションでナビゲーションをスムーズに実行できます。バーは、バーが含まれるコンテナーの上に配置されます。</p>
<div class="divider"></div>

### Navbar デモ

<div class="sample-container loading" style="height: 530px">
    <iframe id="nav-bar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/navbar" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-bar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

Ignite UI for Angular NavBar コンポーネントを初期化する前に **IgxNavbarModule** を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxNavbarModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxNavbarModule],
    ...
})
export class AppModule {}
```

コンポーネントのテンプレートで、以下のコードを追加し、タイトルのみのベーシックな NavBar を作成します。

```html
<!--navbar.component.html-->

<igx-navbar title="Sample App">
</igx-navbar>
```

#### [戻る] ボタンの例

開いたアプリケーションが確認でき、メニューでアプリケーションの機能も表示できます。以下のコードは、アクション ボタンを表示し、ボタンにメニュー アイコンを使用します。

```html
<!--navbar.component.html-->

<igx-navbar title="Sample App"
    actionButtonIcon="menu"
    [isActionButtonVisible]="true">
</igx-navbar>
```

以下は結果です:

<div class="sample-container loading" style="height: 330px">
    <iframe id="nav-bar-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src='{environment:demosBaseUrl}/navbar-sample-1' onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-bar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

#### アイコンの追加

アプリケーションのメニューを実装した後、検索、お気に入りなどのオプションを追加できます。要素を追加するには、[**IgxIcon**](icon.md) モジュールを **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import {
    IgxNavbarModule,
    IgxIconModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxIconModule],
})
export class AppModule {}
```

各オプションにアイコンを追加するためにテンプレートを更新します。

```html
<!--navbar.component.html-->

 <igx-navbar title="Sample App" actionButtonIcon="menu">
    <igx-icon>search</igx-icon>
    <igx-icon>favorite</igx-icon>
    <igx-icon>more_vert</igx-icon>
</igx-navbar>
```

<div class="divider"></div>

### API まとめ

このトピックでは NavBar コンポーネントの使用例を紹介しました。以下は、使用したコンポーネントの API です。

#### 入力

以下の入力が **igx-navbar** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `actionButtonIcon` | String | アクション ボタンに使用するマテリアル アイコンの名前を提供します。 |
| `isActionButtonVisible` | Boolean | アクション ボタンが表示されるかどうか。 |
| `title` | String | NavBar に表示されるタイトルを提供します。 |

<div class="divider"></div>

#### 出力

以下の出力が **igx-navbar** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `onAction` | EventEmitter | アクションが実行されたときにイベントを発生します。 |

<div class="divider"></div>

### 追加のリソース

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
