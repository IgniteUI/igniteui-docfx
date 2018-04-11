---
title: Icon コンポーネント
_description: Ignite UI for Angular Icon コンポーネントを使用して、様々なアイコンおよびフォント セットを統合して交互に使用し、カスタム色を定義できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Icon コンポーネント, Angular Icon コントロール
_language: ja
---

## Icon

<p class="highlight">Ignite UI for Angular Icon コンポーネントはアイコンおよびフォント セットを統合するため、交互の使用やマテリアル アイコンをマークアップに追加できます。コンポーネントはカスタム色をサポートします。アイコンを非アクティブに設定できます。</p>
<div class="divider"></div>

### Icon デモ

<div class="sample-container" style="height: 384px">
    <iframe id="icon-sample-1-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/icon-sample-1"  onload="onSampleIframeContentLoaded(this);">
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="icon-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で表示
    </button>
</div>
<div class="divider--half"></div>

### 依存関係

Icon コンポーネントが `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` への _IgxIconModule_ のインポートのみが必要になります。

```typescript
// app.module.ts

import { IgxIconModule } from 'igniteui-angular/main';

@NgModule({
    imports: [
        ...
        IgxIconModule,
        ...
    ]
})
export class AppModule {}
```

### 使用方法

```html
<igx-icon name=[..options] color=[..options] isActive=[..options]></igx-icon>
```

### コード例

`igx-icon` を使用して `active` ホーム アイコンをマゼンタ `color` に設定します。

```html
<igx-icon name="home" color="magenta" isActive="true"></igx-icon>
```

`inactive` アイコンを設定します。

```html
<igx-icon name="volume_off" isActive="false"></igx-icon>
```

<div class="divider--half"></div>

### API まとめ

この記事で Icon コンポーネントを説明しました。以下は、その他の API のリストです。

#### 属性

次の属性を使用して、アイコン コンポーネントのすべてのプロパティに設定できます。

| 名前   |       例      |  説明 |
|:----------|:-------------:|:------|
| `name` |  `name="home"` | アイコンを設定するには、名前を公式の[マテリアル アイコン セット](https://material.io/icons/)から提供します。 |
| `active` |  `isActive="true"` | アイコンをアクティブ/非アクティブに設定します。デフォルト値は true です。 |
| `color` |  `color="#474747"` | 文字列値を指定してアイコンの色を設定します。 |

<div class="divider--half"></div>

#### セッター

アイコンのすべてのプロパティを以下のアイコン セッターによってコードで設定できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `color(color: string)` | string | アイコンの色を設定します。 |
| `name(icon: string)` | string | アイコンの名前を設定します。 |
| `isActive(state: boolean)` | boolean | false に設定される場合にアイコン スタイルを非アクティブに設定します。 |

#### ゲッター

アイコンのすべてのプロパティを以下のアイコン ゲッターによってコードで取得できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `getIconColor()` | string | アイコンの色を返します。 |
| `getIconName()` | string | アイコンの名前を返します。 |
| `getActive()` | boolean | アイコンのアクティブ状態を返します。 |

<div class="divider"></div>

### 追加のリソース

<div class="divider--half"></div>
是非コミュニティに参加してください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

