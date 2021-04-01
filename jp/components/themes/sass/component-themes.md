---
title: コンポーネント テーマ
_description: Ignite UI for Angular Theming コンポーネントは SASS で開発されます。使用が簡単な API は単一のコンポーネント、複数のコンポーネント、またはスイート全体のスタイル変更を適用できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Theming コンポーネント, Angular テーマ
_language: ja
---

# コンポーネント テーマ
<div class="highlight">コンポーネント テーマは、テーマをグローバルに定義して特定のコンポーネント インスタンスのスタイルを変更できます。</div>
<div class="divider"></div>

## 概要
<div class="divider--half"></div>

Ignite UI for Angular でコンポーネント テーマを設定する方法、次にコンポーネント レベル テーマの作成方法について説明します。IE 11 などの古いブラウザーをサポートするためにコンポーネントのテーマ設定に 2 つの方法があります。
- 1 つ目の方法は、コンポーネント インスタンスを [CSS 変数](https://developer.mozilla.org/ja-JP/docs/Web/CSS/Using_CSS_variables) を使用してスタイル設定する方法です。CSS 変数を使用するとスタイルを繰り返し定義することなくコンポーネント テーマを作成できます。この方法は、CSS 変数の値をランタイムで変更できます。
- 2 つ目の方法は、特定のコンポーネントで既に宣言されている CSS ルールを上書きする新しいルールを作成することです。 This approach is pretty straight-forward, and it is the only way we can provide sensible theming support for older browser, albeit it is not ideal as it adds a lot of additional CSS rules to the generated CSS theme.

これらの方法を実際に使用する方法やコンポーネント レベルのテーマを作成する場合にどちらか一方を使用する方法について説明します。
<div class="divider"></div>

## テーマの作成
<div class="divider--half"></div>

コンポーネント テーマは複数のパーツで構成されます。

- **コンポーネント テーマ関数** - Sass 関数は、渡した引数を正規化してコンポーネント mixin でテーマを作成します。
- **CSS 変数 mixin** - コンポーネント テーマを使用し、特定コンポーネントのスタイルに使用される *CSS 変数*を生成する Sass mixin。
- **コンポーネント mixin** - コンポーネント テーマを使用し、特定コンポーネントのスタイルに使用される *CSS ルール*を生成する Sass mixin。

Say you want to create a new global avatar theme that has a different background color to the one we set in the avatar's default theme. As mentioned in the [**overview section**](#overview) there are 2 general approaches to creating a component theme. 
コンポーネントテーマを体系化し、スコープする方法があります。最も簡単な方法は、[**グローバル テーマ**](./global-theme.md)を定義した同じファイルで行う方法です。

アバター テーマの定義:

```scss
// Some place after @include igx-theme(...);

// Change the background of the avatar to purple.
$new-avatar-theme: igx-avatar-theme(
    $background: purple
);

// Pass the css-vars to the `igx-css-vars` mixin
@include igx-css-vars($new-avatar-theme);
```

上記のコードは、`igx-avatar` コンポーネントに対して新しい CSS 変数を生成します。これらの新しい CSS 変数は、デフォルトのアバター ルールを上書きします。
同様に、グローバルな `scss` ファイルに `igx-css-vars` mixin を追加した場合、mixin は定義済みのテーマを再び上書きします。

次に例を示します。 

```scss
// ...
@include igx-css-vars($new-avatar-theme);

// Later
$another-avatar-theme: igx-avatar-theme(
    $background: royalblue
);

@include igx-css-vars($another-avatar-theme);
```
上記コードでは、以前の `igx-css-vars` mixin はすべて上書きされるため、事実上のグローバル テーマは `$another-avatar-theme` なります。

ここで次のポイントに移ります。
<div class="divider"></div>

## テーマのスコープ
<div class="divider--half"></div>

前の例のように同じコンポーネントをターゲットにした複数のテーマを同じレベルに追加する場合、最後のテーマ mixin が優先されます。これは CSS のカスケードの動作に起因します。同じコンポーネントタイプをターゲットにした 2 つ以上のテーマが必要な場合、セレクターにスコープする必要があります。例えば、複数の `igx-avatar` テーマを作成して特定の CSS セレクターにスコープし、後でコンポーネントマークアップに使用できます。

```scss
// ...
// CSS class selectors
.avatar-royalblue {
    @include igx-css-vars($avatar-royalblue-theme);
}

.avatar-purple {
    @include igx-css-vars($avatar-green-theme);
}
```

コンポーネント テンプレート:

```html
<div class="avatar-royalblue">
    <igx-avatar initials="AZ"></igx-avatar>
</div>

<div class="avatar-purple">
    <igx-avatar icon="home"></igx-avatar>
</div>
```
<div class="divider"></div>

## 表示のカプセル化
<div class="divider--half"></div>

グローバルにスコープし、単一の Sass ファイルに含まれるテーマを作成する方法について説明しました。ただし最適な方法ではないため、Sass ファイルを特定のコンポーネントにバインドした方がよい場合があります。この場合、表示のカプセル化、特に Angular で発生させる方法を考慮する必要があります。

Angular では、表示のカプセル化に 3 つの方法 Emulated (デフォルト)、Shadow DOM、None を採用しています。各方法の詳細については、 [Angular ヘルプ](https://angular.io/api/core/ViewEncapsulation) をご覧ください。表示をカプセル化した親コンポーネントの一部である Ignite UI for Angular コンポーネントのテーマを処理する方法について詳しく説明します。

`エミュレートされた`表示のカプセル化とは？このタイプの表示のカプセル化は、Shadow DOM 仕様の利点を享受しませんが、ホスト要素に適用された一意の属性識別子を使用してコンポーネントとその子のスタイルをバインドする方法を利用します。インナー セレクターをターゲットにした表示のカプセル化コンポーネントのスタイルシートに追加したスタイルのルールは、ホスト要素の一意の属性を参照しないため適用されません。このカプセル化をペネトレーションするには、View Encapsulation ペネトレーション ストラテジーをいくつか使用する必要があります。現在の Angular でこれを行うのは `::ng-deep` です。ホスト要素でカプセル化された内部のセレクターをターゲットにできます。CSS 変数の代わりに CSS ルールを扱っている場合やコンポーネントの単一のインスタンスをカスタマイズする場合は、`:: ng-deep` の使用をお勧めします。次のセクションで例を示します。

以下は CSS 変数を使用する例です。特定の親コンポーネントにバインドするアバター テーマを作成します。

シンプルなコンポーネントです。

```typescript
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-avatar',
    styleUrls: ['./app-avatar.component.scss'],
    template: `<igx-avatar [initials]="initials"></igx-avatar>`
})
export class AvatarComponent extends Component {
    @Input() public initials = 'AZ';
}
```

以下は Sass スタイルシートの例です。

```scss
// app-avatar.component.scss

// Import all required functions and mixins
@import '~igniteui-angular/lib/core/styles/themes/utilities';
@import '~igniteui-angular/lib/core/styles/components/avatar/avatar-theme';
@import '~igniteui-angular/lib/core/styles/components/avatar/avatar-component';

$avatar-theme: igx-avatar-theme($background: royalblue);

:host {
    @include igx-css-vars($avatar-theme);
}

```

When using CSS variables, we don't have to use the `::ng-deep` pseudo-selector. With the code above we've created CSS variables for the `igx-avatar`,  which will always have `royalblue` as its background color. The theme for our custom avatar will not 'leak' into other `igx-avatar` component instances, thus staying encapsulated within our custom `app-avatar` component.

Any Ignite UI for Angular theme built with the `$igx-legacy-support` set to `false` will allow styling of components without the need of Sass in your project. For instance the above could be achieved by setting the value of `--igx-avatar-background` CSS variable to the desired color:

```css
/* app-avatar.component.css */
:host {
    --igx-avatar-background: royalblue;
}
```

<div class="divider"></div>

## 古いブラウザーの場合
<div class="divider--half"></div>

In the [overview](#overview) section I mentioned you could use hard-coded values to style your components by setting the `$igx-legacy-support` global variable to `true`. If you use the `igx-theme` mixin and pass it `$legacy-support` with value of `true` it will set the `$igx-legacy-support` to `true`, too.

### グローバル テーマの使用

以下は、ハードコーディングされた値で複数コンポーネントをスタイル設定する方法の例です。

```scss
// Import the IgniteUI themes library first
@import '~igniteui-angular/lib/core/styles/themes/index';

@include igx-core();
@include igx-theme(
    $palette: $default-palette,
    $legacy-support: true
);

// Overwrite the default themes for igx-avatar using hard-coded values:
$avatar-theme: igx-avatar-theme($background: royalblue);

@include igx-avatar($avatar-theme);
```
<div class="divider"></div>

### カプセル化した表示の使用 

The below sample uses the sample from the [View Encapsulation](#view-encapsulation) section as a starting point:

```scss
@import '~igniteui-angular/lib/core/styles/themes/utilities';
@import '~igniteui-angular/lib/core/styles/components/avatar/avatar-theme';
@import '~igniteui-angular/lib/core/styles/components/avatar/avatar-component'; 

// Enable legacy support first.
$igx-legacy-support: true;
$avatar-theme: igx-avatar-theme($initials-background: royalblue);

:host ::ng-deep {
    @include igx-avatar($avatar-theme);
}
```
<div class="divider"></div>

## API の概要
* [Global テーマ]({environment:sassApiUrl}/index.html#mixin-igx-theme)
* [Avatar テーマ]({environment:sassApiUrl}/index.html#function-igx-avatar)

<div class="divider--half"></div>

## その他のリソース
<div class="divider--half"></div>

グローバル テーマの設定方法:

* [グローバル テーマ](./global-theme.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
