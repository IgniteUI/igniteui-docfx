---
title: Angular Avatar コンポーネント - MITライセンス
_description: Ignite UI for Angular の Avatar コントロールは、プロファイル ボタンなどのアプリケーションのインスタンスに画像、マテリアル アイコン、またはイニシャルを追加できます。
_keywords: Angular Avatar コンポーネント, Angular Avatar コントロール, Ignite UI for Angular, Angular UI コンポーネント
_license: MIT
_language: ja
---

# Angular Avatar (アバター) コンポーネントの概要
<p class="highlight">Angular Avatar コンポーネントは、イニシャル、画像、またはマテリアル アイコンをアプリケーションに追加します。</p>
<div class="divider"></div>

## Angular Avatar の例

<code-view style="height:200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/avatar-sample-3/" alt="Angular Avatar の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Avatar を使用した作業の開始

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
`background` プロパティを使用して背景の色を変更できます。また、`color` プロパティを使用してイニシャルの色を設定します。

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

### Avatar テーマのプロパティ マップ

`$background` プロパティを変更すると、次の依存プロパティが自動的に更新されます。

<table class="collapsible-table">
  <thead>
    <tr>
      <th>プライマリ プロパティ</th>
      <th>依存プロパティ</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody class="group">
    <tr class="primary">
      <td><strong>$background</strong></td>
      <td>$color</td>
      <td>アバターに使用されるテキストの色</td>
    </tr>
    <tr>
      <td></td>
      <td>$icon-color</td>
      <td>アバターに使用されるアイコンの色</td>
    </tr>
  </tbody>
</table>

Avatar のスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最もシンプルな方法として、[`avatar-theme`]({environment:sassApiUrl}/themes#function-avatar-theme) を拡張し、`$background` および `$border-radius` パラメーターを指定して新しいテーマを作成します。`$color` (または `$icon-color`) は、指定された背景に対してよりコントラストの高い色 (黒または白) が自動的に設定されます。なお、`$border-radius` プロパティはアバターの `shape` が `rounded` に設定されている場合のみ適用されます。

次のマークアップを前提として:

```html
<div class="avatar-sample initials">
  <igx-avatar initials="JS" shape="rounded" size="medium"></igx-avatar>
</div>
```

以下のアバター テーマを作成します。

```scss
$custom-avatar-theme: avatar-theme(
  $background: #72da67,
  $border-radius: 16px
);
```

最後にアバターのカスタム テーマを渡します。

```scss
.initials {
  @include css-vars($custom-avatar-theme);
}
```

ここまでの内容が正しければ、以下のように表示されます。


<code-view style="height:120px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/avatar-styling/" >
</code-view>

### Tailwind によるスタイル設定

カスタム Tailwind ユーティリティ クラスを使用して `avatar` をスタイル設定できます。まず [Tailwind を設定して](themes/misc/tailwind-classes.md)ください。

グローバル スタイルシートに Tailwind をインポートした上で、以下のように必要なテーマ ユーティリティを適用します:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

ユーティリティ ファイルには、`light` テーマと `dark` テーマの両方のバリエーションが含まれています。

- `light-*` クラスはライト テーマ用です。
- `dark-*` クラスはダーク テーマ用です。
- プレフィックスの後にコンポーネント名を追加します (例: `light-avatar`、`dark-avatar`)。

これらのクラスを適用すると、動的なテーマの計算が可能になります。そこから、`任意のプロパティ`を使用して、生成された CSS 変数をオーバーライドできます。コロンの後に、有効な CSS カラー形式 (HEX、CSS 変数、RGB など) を指定します。

プロパティの完全なリストは、[avatar-theme]({environment:sassApiUrl}/themes#function-avatar-theme) で確認できます。構文は次のとおりです:

```html
<igx-avatar
class="!light-avatar ![--background:#FF4E00]"
initials="DY"
shape="rounded">
</igx-avatar>
```

>[!NOTE]
>ユーティリティ クラスが優先されるようにするには、感嘆符 (`!`) が必要です。Tailwind はスタイルをレイヤーに適用しますが、これらのスタイルを重要としてマークしないと、コンポーネントのデフォルトのテーマによってオーバーライドしてしまいます。

最終的に、avatar は次のようになります:

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/layouts/avatar-tailwind-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

### カスタム サイズ変更

`igx-avatar` を直接ターゲットとして `--size` 変数を使用することができます。

```scss
igx-avatar {
  --size: 200px;
}
```

または、ユニバーサル変数 `--igx-avatar-size` を使用して、すべてのインスタンスをターゲットにすることもできます。

```html
<div class="my-app">
  <igx-avatar></igx-avatar>
</div>
```
```scss
.my-app {
  --igx-avatar-size: 200px;
}
```

size 属性が適用されていない場合は、事前定義されたサイズの 1 つを使用して、それを `--ig-size` 変数に割り当てることもできます。`--ig-size` に使用可能な値は、`--ig-size-small`、`--ig-size-medium`、`--ig-size-large` です。

```scss
igx-avatar {
  --ig-size: var(--ig-size-small);
}
```

詳細については、[サイズ](display-density.md)の記事をご覧ください。

<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)


## テーマの依存関係
* [IgxAvatar テーマ]({environment:sassApiUrl}/themes#function-avatar-theme)
* [IgxIcon テーマ]({environment:sassApiUrl}/themes#function-icon-theme)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)