---
title: オーバーレイ スタイリング
_description: IgniteUI for Angular Overlay Service は、表示される要素にスタイルを適切に適用およびスコープする方法についての詳細なチュートリアル。
_keywords: Ignite UI for Angular, Angular Overlay Service, Angular UI controls, Overlay Service, View Encapsulation Example, Sass scoped styles in Angular, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
_language: ja
---

## オーバーレイ スタイリング
<p class="highlight">

IgxOverlayService は、コンテンツまたはページ全体の上にコンテンツを表示するために使用されます。Ignite UI for Angular コンポーネントのの多くは、ドロップダウン、コンボ、日付ピッカーなどのオーバーレイを使用しているため、オーバーレイがコンテンツを表示する方法を理解することが重要です。
他の要素上にコンテンツを表示するために、サービスは特別なアウトレット コンテナにへ移動します  (デフォルトではドキュメントの本文の最後にアタッチされています)。この動作は、[特定のコンテナにスコープ](#スコープ-コンポーネント-スタイル)されたスタイルに影響を与える可能性があります。
</p>
<div class="divider--half"></div>

## オーバーレイ コンポーネントのスタイル設定

最も一般的な使用例 - アプリのテーマを[グローバル](themes/global-theme.md)に定義する - では、スタイルは通常オーバーレイ アウトレットの影響を受けません。例として、グローバル [`igx-drop-down-theme` 関数でスタイル設定されたドロップダウンを見てみましょう。

```html
<!-- in overlay-styling.component.html -->
<igx-drop-down #customDropDown height="350px">
    <igx-drop-down-item *ngFor="let item of items" [value]="item.id">
        {{ item.name }}
    </igx-drop-down-item>
</igx-drop-down>
```

```scss
// in styles.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
...

$my-drop-down-theme: igx-drop-down-theme(
    $palette: $my-custom-palette
);

@include igx-drop-down($my-drop-down-theme);
```

グローバル スタイルはスコープされたルール下では生成されず、カプセル化の影響も受けないため、サービスがオーバーレイ アウトレットに移動した `igx-drop-down-item` など、ページ上の任意の要素と一致できます。

あるいは、カスタム コンポーネントのビューのみにスタイルを制限するために、オーバーレイを追加考慮せずに [`ViewEncapsulation`](themes/component-themes.md#表示のカプセル化) を使用することもできます。これは、上記のドロップダウンや [`igxToggle`]() ディレクティブなど、ほとんどテンプレート化されたコンテンツを表示するコンポーネントに適用されます。

たとえば、カスタム コンポーネントのスタイル ファイル `overlay-styling.component.scss` で上記のスタイルを定義できます。

```scss
// in overlay-styling.component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
...
@include igx-drop-down($my-drop-down-theme);
```

`ViewEncapsulation.Emulated` (デフォルト) を使用する場合、スタイルはアプリの `styles.scss` と同じ方法で生成され、Angular は各ルールに特定の属性セレクターを追加します。同じ属性が、`igx-drop-down-item` を含むカスタム コンポーネントのビュー**内**で初期化された要素に適用されます。つまり、生成されたスタイルは、オーバーレイ アウトレットの要素も含めて、属性に基づいてページ上のすべての要素と一致します。

ただし、Angular コンポーネントの Ignite UI のほとんどは、オプションやバインドされたデータ ([`igx-combo`](combo.md), [`igx-grid`](grid/grid.md) など) に基づいて独自のコンテンツを作成します。`::ng-deep` を使用してエミュレートされたカプセル化を突破する必要があり、スタイルがアプリ全体に影響を与えないようにスコープを設定する必要があります。

### スコープ コンポーネント スタイル

オーバーレイに表示される要素のスタイルをスコーピングする際に DOMのオーバーレイ `アウトレット`の位置を指定する必要があります。スコープが設定された CSS ルールには、要素の特定の階層構造が必要です - オーバーレイ コンテンツが、適用するスタイルの正しいコンテキストで表示されることを確認してください。

たとえば、`igx-combo` を取り上げます。コンボは独自のビュー内でコンテンツを定義するため、項目[スタイル](combo.md#スタイル設定)は igx-drop-down テーマを使用します。カスタム テーマがそれらに影響を与えるには、`ViewEncapsulation.Emulated` を使用するときに、`::ng-deep` でカプセル化をペネトレーションし、アプリ全体ににじまないようにスタイルをスコープする必要があります。

```scss
// in overlay-styling.component.scss
:host {
    ::ng-deep {
        @include igx-drop-down($my-drop-down-theme);
    }
}
```
コンボのリスト内項目は、コンポーネント ホストの子孫では**ありません**。現在、`ドキュメント`本文の最後にあるデフォルトのオーバーレイ アウトレットに表示されています。これを変更するには、`overlaySettings` のアウトレット[`outlet`]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet) プロパティを使用します。`アウトレット`は、オーバーレイ コンテナをレンダリングする場所を制御します。

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
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="overlay-styling-simple-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

## オーバーレイのスタイル設定


`ViewEncapsulation` がオーバーレイのアウトレット プロパティとどのように連携するかを説明しました。次にオーバーレイ ラッパー自体のスタイルを設定する方法を示します。
[`igx-overlay-theme`]({environment:sassApiUrl}/index.html#function-igx-overlay-theme) は、単一のプロパティ - `$background-color` を公開します。これは、オーバーレイが `modal: true` に設定されている場合、背景の色に影響します。

### グローバル スタイル

オーバーレイ モーダルをスタイル設定する最も簡単な方法は、アプリのグローバル スタイルにテーマを含める方法です。

```scss
//  styles.scss
$background-purple: #5443b84a;

$my-overlay-theme: igx-overlay-theme(
    $background-color: $background-purple
);

@include igx-overlay($my-overlay-theme);
```

これで、**すべて**のモーダル オーバーレイの背景が紫色になります。

### スコープ オーバーレイ スタイル

特定のコンポーネントの下に**のみ**特定の背景をオーバーレイに表示したい場合は、[テーマをスコープ](#スコープ-コンポーネント-スタイル)できます。
モーダル オーバーレイをスコープする場合、オーバーレイ アウトレットを移動する必要がありますが、これにはいくつかの[制限](overlay_main.md#前提事項と制限)があります。オーバーフロークリッピング、`z-index`、およびビューポートの問題のリスクを最小限に抑えるために、より高いレベルのコンポーネントでのみモーダルオーバーレイのアウトレットを使用することをお勧めします。

```scss
//  styles.scss
...
.purple {
    @include igx-overlay($my-overlay-theme);
}
```

>[!NOTE]
> コンポーネントが[``エミュレート](themes/component-themes.md#表示のカプセル化)された ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化をペネトレーションする必要があります。これは、オーバーレイ ラッパーがコンポーネントのビューの一部**ではない**オーバーレイ サービスによって動的に作成されるためです。
> テーマがアプリの他のコンポーネントの要素に影響を**与えない**ように、`:host` の下の `::ng-deep` ステートメントをスコープします。

```scss
// in overlay-styling.component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
...
:host {
    ::ng-deep {
        @include igx-overlay($my-overlay-theme);
    }
}
```

## その他のリソース
* [IgniteUI for Angular - テーマ ライブラリ](themes/index.md)
* [IgxOverlay スタイル]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)
* [オーバーレイ メイン トピック](overlay_main.md)
