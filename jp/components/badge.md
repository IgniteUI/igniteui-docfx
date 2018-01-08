---
title: Badge コンポーネント
_description: Ignite UI for Angular の Badge コントロールは、アプリケーションでその他のコンポーネントを装飾するために定義済みスタイルでアクティブ カウントまたはアイコンを表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Badge コンポーネント, Angular Badge コントロール
---

## Badge
<p class="highlight">Ignite UI for Angular の Badge はアプリケーションでアクティブ インジケーターが必要なアバター、ナビゲーション メニュー、またはその他のコンポーネントをデコレートする絶対配置要素です。Badge はアクティブ カウントを表示できます。情報、成功、警告、またはエラーを示す定義済みのスタイルを持つアイコンとして設定できます。</p>
<div class="divider"></div>

### Badge デモ
<div class="sample-container" style="height:530px">
    <iframe src='https://{environment:host}/angular-demos/badge' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

### 使用方法
```html
<igx-badge value="8"></igx-badge>
```
<div class="divider--half"></div>

### コード例

`igx-badge` を `igx-avatar` コンポーネントにアクティブ状態を示すために使用します。
```html
<igx-avatar [src]="src" [roundShape]="true">
    <igx-badge type="info" value="8"></igx-badge>
</igx-avatar>
```
<div class="divider--half"></div>

### API 概要
| 名前   |      型      |  説明 |
|:----------|:-------------:|:------|
| `type` | string | バッジの型を `default`、`info`、`success`、`warning`、または `error` に設定します。デフォルト テーマで設定される値に基づいてバッジの背景色を変更します。 |
| `position` | string | 親コンテナーに相対するバッジの位置を `top-right`、`top-left`、`bottom-right`、または `bottom-left` に設定します。|
| `value` | string | バッジで表示する値を設定します。 |
| `icon` | string | マテリアル アイコン セットからバッジのアイコンを設定します。バッジの `value` が既に設定されている場合は表示されません。 |
<div class="divider--half"></div>


