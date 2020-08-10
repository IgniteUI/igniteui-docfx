---
title: オーバーレイ スタイリング
_description: IgniteUI for Angular Overlay Service は、表示される要素にスタイルを適切に適用およびスコープする方法についての詳細なチュートリアル。
_keywords: Ignite UI for Angular, Angular Overlay Service, Angular UI controls, Overlay Service, View Encapsulation Example, Sass scoped styles in Angular, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
_language: ja
---

## オーバーレイ スタイリング
<p class="highlight">

[`IgxOverlayService`](overlay_main.md) は、ページ コンテンツの上にコンテンツを表示するために使用されます。Ignite UI for Angular コンポーネントの多くは、[ドロップダウン](drop_down.md)、[コンボ](combo.md)、[日付ピッカー](date_picker.md)などのオーバーレイを使用しているため、オーバーレイがコンテンツを表示する方法を理解することが重要です。
他の要素上にコンテンツを表示するために、サービスはコンテンツを特別なアウトレット コンテナに移します (デフォルトではドキュメントの本文の最後にアタッチされています)。この動作は、[特定のコンテナにスコープされた](#スコープ-コンポーネント-スタイル) スタイルに影響を与える可能性があります。
</p>
<div class="divider--half"></div>

### オーバーレイ コンポーネントのスタイル設定

ほとんどの場合、[グローバル](themes/global-theme.md) テーマのスタイルはオーバーレイ アウトレットの影響を受けません。例として、グローバル [`igx-css-vars`]({environment:sassApiUrl}/index.html#mixin-igx-css-vars) mixin で[スタイル設定された](drop_down.md#スタイル設定)ドロップダウンを見てみましょう。

```html
<!-- overlay-styling.component.html -->
<igx-drop-down #customDropDown height="350px">
    <igx-drop-down-item *ngFor="let item of items" [value]="item.id">
        {{ item.name }}
    </igx-drop-down-item>
</igx-drop-down>
```

```scss
// styles.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
...

$my-drop-down-theme: igx-drop-down-theme(
    $palette: $my-custom-palette
);

@include igx-css-vars($my-drop-down-theme);
```

グローバル スタイルはスコープされたルール下では生成されず、カプセル化の影響も受けないため、サービスがオーバーレイ アウトレットに移動した `igx-drop-down-item` など、ページ上の任意の要素と一致できます。

### スコープ コンポーネント スタイル

オーバーレイに表示される要素のスタイルをスコーピングする際に DOM のオーバーレイ `アウトレット`の位置を指定する必要があります。スコープが設定された CSS ルールには、要素の特定の階層構造が必要です - オーバーレイ コンテンツが、適用するスタイルの正しいコンテキストで表示されることを確認してください。

たとえば、`igx-combo` を取り上げます。コンボは独自のビュー内でコンテンツを定義するため、項目の[スタイル設定](combo.md#スタイル設定)は `igx-drop-down` テーマを使用します。

> [!NOTE]
> スタイルが他に影響しないようにするには、スタイルのスコープを `:host` セレクター内にしてください。

```scss
// overlay-styling.component.scss
:host {
    @include igx-css-vars($my-drop-down-theme);
}
```

テーマの `$legacy-support` 変数が `true` に設定されている場合、コンポーネントのテーマ関数を使用してスタイル設定します。

>[!NOTE]
>コンポーネントが [`Emulated`](./themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
// overlay-styling.component.scss
:host {
   ::ng-deep{ 
        @include igx-drop-down($my-drop-down-theme);
    }
}
```

コンボのリスト内項目は、コンポーネント `ホスト`の子孫ではありません。現在、ドキュメント本文の最後にあるデフォルトのオーバーレイ アウトレットに表示されています。変更するには、`overlaySettings` の [`outlet`]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet) プロパティを使用します。`outlet` は、オーバーレイ コンテナをレンダリングする場所を制御します。

以下でコンテナを配置する要素への参照を渡すことができます。

```html
<igx-combo [data]="items" valueKey="name" displayKey="name" [overlaySettings]="{ outlet: element }">
</igx-combo>
```

```typescript
export class OverlayStylingComponent {
    ...
    constructor(public element: ElementRef) {
    }
}
```

コンボのアイテムのリストがコンポーネントのホスト**内**に適切にレンダリングされます。つまり、カスタムテーマが有効になります。

<div class="sample-container loading" style="height: 400px">
    <iframe id="overlay-styling-simple-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/interactions/overlay-styling-simple" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="overlay-styling-simple-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-styling-simple-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

### オーバーレイのスタイル設定

`ViewEncapsulation` がオーバーレイの `outlet` プロパティとどのように連携するかを説明しました。次にオーバーレイ ラッパー自体のスタイルを設定する方法を示します。
[`igx-overlay-theme`]({environment:sassApiUrl}/index.html#function-igx-overlay-theme) は、単一のプロパティ - `$background-color` を公開します。これは、オーバーレイが `modal: true` に設定されている場合、背景の色に影響します。

#### グローバル スタイル

オーバーレイ モーダルをスタイル設定する最も簡単な方法は、アプリのグローバル スタイルにテーマを含める方法です。

```scss
//  styles.scss
$background-purple: #5443b84a;

$my-overlay-theme: igx-overlay-theme(
    $background-color: $background-purple
);

@include igx-css-vars($my-overlay-theme);
```

テーマの `$legacy-support` 変数が `true` に設定されている場合、オーバーレイのテーマ関数を使用してコンポーネントをスタイル設定します。

```scss
// styles.scss
...
@include igx-overlay($my-overlay-theme);
```        

これで、**すべて**のモーダル オーバーレイの背景が紫色になります。

#### スコープ オーバーレイ スタイル

特定のコンポーネントの下に**のみ**特定の背景をオーバーレイに表示したい場合は、テーマを[スコープできます](#スコープ-コンポーネント-スタイル)。モーダル オーバーレイをスコープする場合、オーバーレイ アウトレットを移動する必要がありますが、これにはいくつかの[制限](overlay_main.md#前提事項と制限)があります。
オーバーフロークリッピング、z-index、およびビューポートの問題のリスクを最小限に抑えるために、より高いレベルのコンポーネントでのみモーダルオーバーレイのアウトレットを使用することをお勧めします。

```scss
//  styles.scss
...
.purple {
    @include igx-css-vars($my-overlay-theme);
}
```

テーマがアプリの他のコンポーネントに影響を与えないように、`:host` セレクターを使用します。

```scss
// overlay-styling.component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
...
:host {
    @include igx-css-vars($my-overlay-theme);
}
```

>[!NOTE]
>コンポーネントが [`Emulated`](./themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用していて、`$legacy-support` が `true` に設定されている場合、オーバーレイのテーマ関数を使用して `::ng-deep` によってこのカプセル化を`ペネトレーションします`。

### API リファレンス
* [IgniteUI for Angular - テーマ ライブラリ](themes/index.md)
* [IgxOverlay スタイル]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

### その他のリソース
* [IgniteUI for Angular - テーマ ライブラリ](themes/index.md)
* [オーバーレイ メイン トピック](overlay_main.md)
* [配置ストラテジ](overlay_position.md)
* [スクロール ストラテジ](overlay_scroll.md)
