---
title: Navbar コンポーネント
_description: Ignite UI for Angular Navbar コントロールはアプリケーションでのスムーズな移動を可能にする UI コンポーネントです。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Navbar コンポーネント, Angular Navbar コントロール
_language: ja
---

## Navbar

<p class="highlight">Ignite UI for Angular Navigation Bar コンポーネントは、アプリケーション内の現在位置を示し、ブラウザーの [戻る] ボタンのように戻る機能を提供します。Navigation Bar は検索またはお気に入りなどのリンクも提供します。このように、ユーザーがアプリケーションでスムーズにナビゲーションを実行できます。バーは、バーが含まれるコンテナーの上に配置されます。</p>
<div class="divider"></div>

### Navbar デモ

<div class="sample-container" style="height: 930px">
    <iframe frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/navbar"></iframe>
</div>
<div class="divider--half"></div>

### 使用方法

```html
<igx-navbar title="設定"></igx-navbar>
```

タイトルを設定できます。例: `title="ユーザー設定"`。

#### [戻る] ボタンの例

<div class="divider--half"></div>

```html
<igx-navbar title="設定"
            actionButtonIcon="arrow_back"
            [isActionButtonVisible]="canGoBack()"
            (onAction)="navigateBack()">
</igx-navbar>
```

navbar のタイトルを設定できます。例: `title="設定"`。

navbar のアクション ボタン アイコンを設定できます。例: `actionButtonIcon="arrow_back"`。

navbar のアクション ボタンの表示状態を設定できます。例: `isActionButtonVisible="true"`。

navbar ボタンのアクションを設定できます。例: `(onAction)="executeAction()"`。

<div class="divider--half"></div>
