---
title: Angular Avatar コンポーネント
_description: Ignite UI for Angular の Avatar コントロールは、プロファイル ボタンなどのアプリケーションのインスタンスに画像、マテリアル アイコン、またはイニシャルを追加できます。
_keywords: Angular Avatar コンポーネント, Angular Avatar コントロール, Ignite UI for Angular, Angular UI コンポーネント
_language: ja
---

# Angular Avatar (アバター) コンポーネントの概要
<p class="highlight">Angular Avatar コンポーネントは、イニシャル、画像、またはマテリアル アイコンをアプリケーションに追加します。</p>
<div class="divider"></div>

## Angular Avatar の例

<code-view style="height:200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/avatar-sample-3" alt="Angular Avatar の例">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Avatar

Ignite UI for Angular Avatar コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxAvatarModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxAvatarModule } from 'igniteui-angular';
// import { IgxAvatarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxAvatarModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxAvatarComponent` をスタンドアロンの依存関係としてインポートできます。

```typescript
// home.component.ts

...
import { IgxAvatarComponent } from 'igniteui-angular';
// import { IgxAvatarComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-avatar shape="circle"></igx-avatar>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxAvatarComponent]
})
export class HomeComponent {}
```

Ignite UI for Angular Avatar モジュールまたはコンポーネントをインポートしたので、`igx-avatar` コンポーネントの基本構成を開始できます。

## Angular Avatar コンポーネントの使用

Ignite UI for Angular Avatar コンポーネントには、3 つの形状 (正方形、角丸、円) と 3 つのサイズ オプション (大、中、小) があります。イニシャル、画像、またはアイコンを表示できます。

### Avatar の形状
`shape` 属性の値を `square`、`rounded`、または `circle` に設定することで、アバターの形状を変更できます。デフォルトでは、アバターの形状は `square` です。

```html
<igx-avatar shape="circle"></igx-avatar>
```

### イニシャルを表示するアバター
[イニシャル]({environment:angularApiUrl}/classes/igxavatarcomponent.html#initials) ('John Smith' の場合 'JS') を使用した簡易なアバターを作成するには、以下のコードをコンポーネントのテンプレートに追加します。

```html
<igx-avatar initials="JS" shape="circle"></igx-avatar>
```
アバターを丸形に設定し、サイズを大きくします。

```html
<igx-avatar size="medium" initials="JS" shape="circle"></igx-avatar>
```
`background` プロパティを使用して背景色を変更できます。また、`color` プロパティを使用してイニシャルの色を設定します。

```scss
// avatar.component.scss

igx-avatar {
    background: #e41c77;
    color: #000000;
}

```

> [!WARNING]
> `igx-avatar` コンポーネントの `roundShape` プロパティは廃止されました。代わりに `shape` 属性を使用する必要があります。

以下は結果です。

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-sample-1-iframe" data-src='{environment:demosBaseUrl}/layouts/avatar-sample-1' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

### 画像を表示するアバター
画像を表示するアバターを作成するには、`src` プロパティで画像ソースを設定します。

```html
<igx-avatar src="https://randomuser.me/api/portraits/men/1.jpg"
            shape="rounded"
            size="large">
</igx-avatar>
```

ここまでの内容が正しければ、以下のように表示されます。

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-sample-2-iframe" data-src='{environment:demosBaseUrl}/layouts/avatar-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

### アイコンを表示するアバター
アバターでアイコンを表示するには、[`icon`]({environment:angularApiUrl}/classes/igxavatarcomponent.html#icon) プロパティを設定します。現在、マテリアル アイコン セットのすべてのアイコンがサポートされます。

```html
<igx-avatar icon="person"
            shape="rounded"
            size="small">
</igx-avatar>
```

以下は結果です。

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-sample-4-iframe" data-src='{environment:demosBaseUrl}/layouts/avatar-sample-4' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## スタイル設定

Avatar のスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する index ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`avatar-theme`]({environment:sassApiUrl}/index.html#function-avatar-theme) を拡張する新しいテーマを作成し、`$background`、`$color` と `$border-radius` パラメーターを受け取る方法です。

次のマークアップを前提として:

```html
<div class="initials-avatar">
    <igx-avatar>BA</igx-avatar>
</div>
```

テーマを作成する必要があります:

```scss
$custom-avatar-theme: avatar-theme(
    $background: #72da67,
    $color: #000000,
    $border-radius: 16px
);
```

### CSS 変数の使用

最後にアバターのカスタム テーマを渡します。

```scss
.initials-avatar {
    @include css-vars($custom-avatar-theme);
}
```

### ミックスインの使用

Internet Explorer 11 以前などブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチが必要です。 

コンポーネントが [`Emulated`](./themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。一方、カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
:host {
    ::ng-deep {
        // Custom avatar theme を `igx-avatar` ミックスインに渡します
        .initials-avatar {
            @include avatar($custom-avatar-theme);
        }
    }
}
```

ここまでの内容が正しければ、以下のように表示されます。


<code-view style="height:120px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/avatar-styling" >
</code-view>

<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)


## テーマの依存関係
* [IgxAvatar テーマ]({environment:sassApiUrl}/index.html#function-avatar-theme)
* [IgxIcon テーマ]({environment:sassApiUrl}/index.html#function-icon-theme)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)