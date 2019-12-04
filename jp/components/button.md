---
title: Button ディレクティブ
_description: Ignite UI for Angular の Button コントロールで規格のボタンに定義済みテキスト、画像、およびその他の機能を追加します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Button コンポーネント, Angular Button コントロール
_language: ja
---

## Button

Ignite UI for Angular Button ディレクティブを任意の button、span、div、または anchor 要素に適用して高機能なボタンを構成できます。

### Button デモ

<div class="sample-container loading" style="height: 436px">
    <iframe id="buttons-sample-iframe" seamless="" width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/buttons-sample-1" onload="onSampleIframeContentLoaded(this);">
</iframe></div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttons-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 依存関係

Button ディレクティブを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

Button ディレクティブは `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に `IgxButtonModule` をインポートする必要があります。

```typescript
// app.module.ts

import { IgxButtonModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxButtonModule,
        ...
    ]
})
export class AppModule {}
```

### 使用方法

シンプルな [`igxButton`]({environment:angularApiUrl}/classes/igxbuttondirective.html) を設定します。タイプを選択しない場合、デフォルト値は `flat` です。

```html
<button igxButton="flat">Flat</button>
```

結果:

<div class="sample-container loading" style="height: 48px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-2" class="lazyload">
</iframe></div>

リップル エフェクトを追加できます。色を設定します。 `igxRipple="blue"`。

```html
<button igxButton="flat" igxRipple>Flat</button>
```

デフォルトのリップル色。カスタム リップル色。

<div class="sample-container loading" style="height: 48px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-3" class="lazyload">
</iframe></div>

アウトライン付きボタン スタイル:

```html
<button igxButton="outlined">Outlined</button>
```

結果:
<div class="sample-container loading" style="height: 48px">
    <iframe class="lazyload" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-8">
</iframe></div>

[`igxButton`]({environment:angularApiUrl}/classes/igxbuttondirective.html) を使用して `span` 要素を Ignite UI for Angular のスタイル設定済みボタンにします。

```html
<span igxButton="raised" igxButtonColor="yellow" igxButtonBackground="#000" igxRipple="yellow">クリック</span>
```

span は以下のようになります。

<div class="sample-container loading" style="height: 54px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-4" class="lazyload">
</iframe></div>

raised ボタンを作成できます。　

```html
<button igxButton="raised" igxRipple="white">Raised</button>
```

<div class="sample-container loading" style="height: 54px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-5" class="lazyload">
</iframe></div>

フローティング アクション ボタンを作成し、表示するアイコンを使用します。

```html
<button igxButton="fab" igxButtonColor="#FBB13C" igxButtonBackground="#340068" igxRipple="#FBB13C">
  <igx-icon fontSet="material">edit</igx-icon>
</button>
```

<div class="sample-container loading" style="height: 74px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-6" class="lazyload">
</iframe></div>

また、アイコンをボタンとして使用できます。

```html
<button igxButton="icon" igxRipple igxRippleCentered="true">
  <igx-icon fontSet="material">search</igx-icon>
</button>
```

```html
<button igxButton="icon" igxRipple igxButtonColor="#E41C77" igxRippleCentered="true">
  <igx-icon fontSet="material">favorite</igx-icon>
</button>
```

アイコンの結果:

<div class="sample-container loading" style="height: 54px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-7" class="lazyload">
</iframe></div>

<div class="divider--half"></div>

### Button タイプ

| 名前       |                                                  説明                                                  |
| :--------- | :----------------------------------------------------------------------------------------------------: |
| `flat`     |               デフォルトのボタン タイプ。透明な背景およびプライマリ テーマ色のテキスト。               |
| `outlined` |  Flat ボタン タイプに似ていますがボタンの端が細いアウトラインで囲まれます。 |
| `raised`   | このボタン タイプはわずかなシャドウを使用します。背景のパレットにセカンダリ テーマ色を使用。 |
| `fab`      |      フローティング アクションのボタン タイプ。背景用のセカンダリ テーマ色で円形。       |
| `icon`     |        最もシンプルなボタン タイプ。アイコンをボタンとして使用する場合に使用。         |

### 密度の表示

[`displayDensity`]({environment:angularApiUrl}/classes/igxbuttondirective.html#displaydensity) 入力を使用すると、ユーザーは [`igxButton`]({environment:angularApiUrl}/classes/igxbuttondirective.html) 入力の表示密度を選択できるようになります。これには、`IgxButtonGroupModule` をインポートし、[**IgxButtonGroup**](buttonGroup.md) を使用してすべての密度値を表示します。これにより、選択されるたびにボタンの [`displayDensity`]({environment:angularApiUrl}/classes/igxbuttondirective.html#displaydensity) にバインドされた独自の **density** プロパティが更新されます。

> [!NOTE] 
> `icon` タイプのボタンは、異なる表示密度の値に対して視覚的な変化をもたらしません。

```typescript
// app.module.ts
...
import { IgxButtonGroupModule } from 'igniteui-angular';
@NgModule({
    imports: [..., IgxButtonGroupModule]
})
```

```html
<!--buttons-density.component.html-->

<igx-buttongroup [values]="displayDensities" (onSelect)="selectDensity($event)"></igx-buttongroup>
...
<button igxButton="flat" [displayDensity]="density">Flat</button>
```

```typescript
// buttons-density.component.ts
public density = "comfortable";
public displayDensities;
public ngOnInit() {
    this.displayDensities = [
        { label: 'comfortable', selected: this.density === 'comfortable', togglable: true },
        { label: 'cosy', selected: this.density === 'cosy', togglable: true },
        { label: 'compact', selected: this.density === 'compact', togglable: true }
    ];
}
public selectDensity(event) {
    this.density = this.displayDensities[event.index].label;
}
```

結果は以下のようになります:

<div class="sample-container loading" style="height: 300px">
    <iframe id="buttons-display-density-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/buttons-display-density" onload="onSampleIframeContentLoaded(this);">
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttons-display-density-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### スタイル設定

ボタンのスタイル設定を始めるには、すべてのテーマ関数とコンポーネント mixins が存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

次に、[`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme) を拡張し、それぞれのホバー パラメーターとフォーカス パラメーターと共に `$raised-text-color` と `$raised-background` パラメーターを受け入れる新しいテーマを作成します。

```scss
$dark-button: igx-button-theme(
    $raised-text-color: #FFCD0F, 
    $raised-hover-text-color: #292826, 
    $raised-background: #292826,
    $raised-hover-background: #FFCD0F,
    $raised-focus-text-color: #292826,
    $raised-focus-background: #FFCD0F,
    $raised-border-radius: 10px,
    $disabled-color: #16130C
);
```

上記のテーマでは、**Raised ボタン**にのみパラメーター値を提供しましたが、他のタイプのボタンも同様の方法で実装できます。スタイルを設定するボタン タイプに固有のパラメーターをターゲットにするだけです。
[`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme) には、あらゆるタイプのボタンをスタイル設定するための多数のパラメーターがあります。

最後のステップは、ボタンテーマをアプリケーションに**含めます**。

```scss
@include igx-button($dark-button);
```

>[!NOTE]
>コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化に`ペネトレーション`する必要があります。

```scss
:host {
     ::ng-deep {
        @include igx-button($dark-button);
    }
}
```


#### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;

$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

また [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。 

```scss
$dark-button: igx-button-theme(
    $palette: $dark-palette,
    $raised-text-color: igx-color($dark-palette, "secondary", 700),
    $raised-hover-text-color: igx-color($dark-palette, "primary", 500),
    $raised-background:  igx-color($dark-palette, "primary", 500),
    $raised-hover-background: igx-color($dark-palette, "secondary", 500),
    $raised-focus-text-color: igx-color($dark-palette, "primary", 500),
    $raised-focus-background: igx-color($dark-palette, "secondary", 500),
    $disabled-color: #16130C
);
```

>[!NOTE]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[`パレット`](themes/palette.md)のトピックを参照してください。

#### スキーマの使用

テーマ エンジンを使用して [**スキーマ**](themes/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (ここでは [`dark-button`]({environment:sassApiUrl}/index.html#variable-_dark-button)) の 1 つを拡張します。 

```scss
// Extending the dark button schema
$dark-button-schema: extend($_dark-button,
    (
        raised-text-color:(
            igx-color:("secondary", 700)
        ),
        raised-hover-text-color:(
            igx-color:("primary", 500)
        ),
        raised-background:(
            igx-color:("primary", 500)
        ),
        raised-hover-background:(
            igx-color:("secondary", 500)
        ),
        raised-focus-text-color:(
            igx-color:("primary", 500)
        ),
        raised-focus-background:(
            igx-color:("secondary", 500)
        ),
        disabled-color: #16130C
    )
);
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを**拡張**する必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-button: $dark-button-schema
));

// Defining button-theme with the global dark schema
$dark-button: igx-button-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

#### デモ

<div class="sample-container loading" style="height: 100px">
    <iframe id="buttons-style-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/buttons-style" class="lazyload no-theming">
</iframe></div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttons-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### API リファレンス
<div class="divider--half"></div>

* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxButton スタイル]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)

### API リファレンス
<div class="divider--half"></div>

* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxButton スタイル]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
