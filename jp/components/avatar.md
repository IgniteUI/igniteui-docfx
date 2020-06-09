---
title: Avatar コンポーネント
_description: Ignite UI for Angular の Avatar コントロールは、プロファイル ボタンなどのアプリケーションのインスタンスに画像、マテリアル アイコン、またはイニシャルを追加できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Avatar コンポーネント, Angular Avatar コントロール
_language: ja
---

##Avatar

<p class="highlight">Ignite UI for Angular Avatar コンポーネントは、イニシャル、画像、またはマテリアル アイコンをアプリケーションに追加します。</p>
<div class="divider"></div>

### デモ

<div class="sample-container loading" style="height:200px">
    <iframe id="avatar-sample-3-iframe" src='{environment:demosBaseUrl}/layouts/avatar-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="avatar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">        stackblitz で表示
    </button>
</div>
<div class="divider--half"></div>

### 使用方法

Avatar コンポーネントを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module.ts** ファイルに `IgxAvatarModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxAvatarModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxAvatarModule],
    ...
})
export class AppModule {}
```

### 例

Avatar の形式は四角または丸で、3 つのサイズ オプション (大、中、小) があります。イニシャル、画像、またはアイコンを表示できます。

#### イニシャルを表示するアバター
[イニシャル]({environment:angularApiUrl}/classes/igxavatarcomponent.html#initials) ('John Smith' の場合 'JS') を使用した簡易なアバターを作成するには、以下のコードをコンポーネントのテンプレートに追加します。

```html
<igx-avatar initials="JS">
</igx-avatar>
```
アバターを丸形に設定し、サイズを大きくします。

```html
<igx-avatar initials="JS"
            roundShape="true"
            size="medium">
</igx-avatar>
```
`background` プロパティを使用して背景色を変更できます。また、`color` プロパティを使用してイニシャルの色を設定します。

```scss
// avatar.component.scss

.igx-avatar {
    background:  #e41c77;
    color: #000000;
}

```
以下は結果です。

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-sample-1-iframe" data-src='{environment:demosBaseUrl}/layouts/avatar-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>

#### 画像を表示するアバター
画像を表示するアバターを作成するには、`src` プロパティで画像ソースを設定します。

```html
<igx-avatar src="https://randomuser.me/api/portraits/men/1.jpg"
            roundShape="true"
            size="large">
</igx-avatar>
```

ここまでの内容が正しければ、以下のように表示されます。

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-sample-2-iframe" data-src='{environment:demosBaseUrl}/layouts/avatar-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>

#### アイコンを表示するアバター
アバターでアイコンを表示するには、[`icon`]({environment:angularApiUrl}/classes/igxavatarcomponent.html#icon) プロパティを設定します。現在、マテリアル アイコン セットのすべてのアイコンがサポートされます。

```html
<igx-avatar icon="person"
            roundShape="true"
            size="small">
</igx-avatar>
```

以下は結果です。

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-sample-4-iframe" data-src='{environment:demosBaseUrl}/layouts/avatar-sample-4' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>

### スタイル設定

Avatar のスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する index ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

最も簡単な方法は、[`igx-avatar-theme`]({environment:sassApiUrl}/index.html#function-igx-avatar-theme) を拡張する新しいテーマを作成し、`$initials-background`、`$initials-color`、`$icon-background`、`$icon-color` と `$border-radius-square` パラメーターを受け取る方法です。

```scss
$custom-avatar-theme: igx-avatar-theme(
    $initials-background: #72da67,
    $initials-color: #000000,
    $icon-background: #217346,
    $icon-color: #ffffff,
    $border-radius-square: 16px
);
```

#### CSS 変数の使用

最後にアバターのカスタム テーマを渡します。

```scss
@include igx-css-vars($custom-avatar-theme);
```

#### ミックスインの使用

Internet Explorer 11 のコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチが必要です。 

コンポーネントが [`Emulated`](./themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。一方、カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
:host {
    ::ng-deep {
        // Pass the custom avatar theme to the `igx-avatar` mixin
        @include igx-avatar($custom-avatar-theme);
    }
}
```

ここまでの内容が正しければ、以下のように表示されます。

<div class="sample-container loading" style="height:120px">
    <iframe id="avatar-styling-iframe" data-src='{environment:demosBaseUrl}/layouts/avatar-styling' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="avatar-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">        stackblitz で表示
    </button>
</div>
<div class="divider--half"></div>

### API リファレンス
<div class="divider--half"></div>

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxAvatarComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-avatar-theme)

### その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)