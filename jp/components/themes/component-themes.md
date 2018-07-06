---
title: コンポーネント テーマ
_description: Ignite UI for Angular Data Grid コントロールは、タッチ レスポンシブなデータ グリッドです。階層およびリスト ビューなどの機能があります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高パフォーマンス Grid
---

## コンポーネント テーマ
<div class="highlight">コンポーネント テーマは、テーマをグローバルに定義して特定のコンポーネント インスタンスのスタイルを変更できます。</div>
<div class="divider"></div>

### 概要
<div class="divider--half"></div>

Ignite UI for Angular でコンポーネント テーマを設定する方法、次にコンポーネント レベル IE 11 などの古いブラウザーをサポートするためにコンポーネントのテーマ設定に 2 つの方法があります。
- 1 つの方法は、特定のコンポーネントの以前宣言した CSS ルールを上書きする新しい CSS 条件のセットを作成しますがあります。この方法は簡単で古いブラウザーをサポートする唯一の方法ですが、多くの追加 CSS ルールを生成した CSS テーマに追加するため理想的ではありません。
- 2 つ目の方法は、コンポーネント インスタンスを [CSS 変数](https://developer.mozilla.org/ja-JP/docs/Web/CSS/Using_CSS_variables) を使用してスタイル設定する方法です。CSS 変数を使用すると繰り返し複製せずにコンポーネント テーマを作成できます。

これらの方法を実際に使用する方法やコンポーネント レベルのテーマを作成する場合にどちらか一方を使用する方法について説明します。
<div class="divider"></div>

### テーマの作成
<div class="divider--half"></div>

コンポーネント テーマは複数のパーツで構成されます。

- **コンポーネント テーマ関数** - Sass 関数は、渡した引数を正規化してコンポーネントmixin でテーマを作成します。
- **コンポーネント mixin** - コンポーネント テーマを使用し、特定コンポーネントのスタイルに使用される CSS ルールを生成する Sass mixin。
- **CSS 変数 mixin** - コンポーネント テーマを使用し、特定コンポーネントのスタイルに使用される CSS 変数を生成する Sass mixin。

アバターのデフォルトテーマに設定するテーマと異なる背景色を持つ新規のグローバル アバター テーマを作成する場合、[**概要セクション**](#概要) のようにコンポーネント テーマを作成する 2 つの一般的な方法があります。
コンポーネントテーマを体系化し、スコープする方法があります。最も簡単な方法は、[**グローバル テーマ**](./global-theme.md) を定義した同じファイルで行う方法です。

アバター テーマの定義:

```scss
// Some place after igx-theme($my-color-palette);

// Change the initials and icon backgrounds 
// of the avatar to purple.
$new-avatar-theme: igx-avatar-theme(
    $initials-background: purple,
    $icon-background: purple
);

// Pass the theme to a to the `igx-avatar` mixin
@include igx-avatar($new-avatar-theme);
```

上記のコードは、`igx-avatar` コンポーネントに新しい CSS を生成し、この新しい CSS ルールはデフォルトのアバター ルールを上書きします。
同様にグローバル global `scss` ファイルに `igx-avatar` mixin を含む場合、mixin は以前定義されたテーマを再び上書きします。

以下はその例です。

```scss
// ...
@include igx-avatar($new-avatar-theme);

// Later
$another-avatar-theme: igx-avatar-theme(
    $initials-background: royalblue,
    $icon-background: royalblue
);

@include igx-avatar($another-avatar-theme);
```
上記コードでグローバル テーマに以前含まれたすべての `igx-avatar` mixins を上書きするため、実際には `$another-avatar-theme` となります。

次のポイントに移ります。
<div class="divider"></div>

### テーマのスコープ
<div class="divider--half"></div>

前の例のように同じコンポーネントをターゲットにした複数のテーマを同じレベルに追加する場合、最後のテーマ mixin が優先されます。これは CSS のカスケードの動作に起因します。同じコンポーネントタイプをターゲットにした 2 つ以上のテーマが必要な場合、セレクターを使用してスコープする必要があります。例えば、複数の `igx-avatar` テーマを作成して特定の CSS セレクターにスコープし、後でコンポーネントマークアップに使用できます。

```scss
// ...
// CSS class selectors
.avatar-royalblue {
    @include igx-avatar($avatar-royalblue-theme);
}

.avatar-purple {
    @include igx-avatar($avatar-green-theme);
}
```

In a component template:

```html
<div class="avatar-royalblue">
    <igx-avatar initials="AZ"></igx-avatar>
</div>

<div class="avatar-purple">
    <igx-avatar icon="home"></igx-avatar>
</div>
```
<div class="divider"></div>

### 表示のカプセル化
<div class="divider--half"></div>

グローバルにスコープし、単一の `Sass ファイルに含まれるテーマを作成する方法について説明しました。ただし最適な方法ではないため、Sass ファイルを特定アプリのコンポーネントにバインドした方がよい場合があります。この場合、表示のカプセル化、特に Angular で発生させる方法を考慮する必要があります。

Angular では、表示のカプセル化に 3 つの方法 Emulated (デフォルト)、Native、None を採用しています。 各方法の詳細については、 [Angular ヘルプ](https://angular.io/api/core/ViewEncapsulation) をご覧ください。表示をカプセルかした親コンポーネントの一部である Ignite UI for Angular コンポーネントのテーマを処理する方法について詳しく説明します。


インナー セクターをターゲットにした表示のカプセル化コンポーネントのスタイルシートに追加したスタイルのルールは、ホスト要素の固有な属性を参照しないため適用しません。このカプセル化を 'penetrate' するには、表示のカプセル化ペネトレーション ストラテジーをいくつか使用する必要があります。現在の Angular でこのストラテジーは `::ng-deep` です。ホスト要素でカプセル化されたインナー セレクターをターゲットにできます。

実際の例を見てみましょう。特定の親コンポーネントにバインドするアバター テーマを作成します。

Ignite UI for Angular のシンプルなコンポーネントです。

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
@import "~igniteui-angular/lib/core/styles/themes/utilities";
@import "~igniteui-angular/lib/core/styles/components/avatar-theme";
@import "~igniteui-angular/lib/core/styles/components/avatar-component";

$avatar-theme: igx-avatar-theme($initials-background: royalblue);

:host ::ng-deep {
    @include igx-avatar($avatar-theme);
}
```

上記コードで背景色に常に `royalblue` が含まれる `igx-avatar` のバージョンを作成しました。カスタム アバターのテーマは、その他の `igx-avatar` コンポーネントで 'leak' しないため、カスタムの  `app-avatar` コンポーネントないでカプセル化されたままです。
<div class="divider"></div>

### CSS 変数
<div class="divider--half"></div>

[概要](#概要) セクションの説明のように、`$igx-legacy-support` グローバル変数を `false` に設定して `CSS 変数をコンポーネントのスタイル設定に使用できます。`igx-theme` mixin を使用して `false` の値と `$legacy-support` を渡した場合、`$igx-legacy-support` を`false` に設定します。これによって特別な mixin `igx-css-vars` を使用してスタイルが重複することなく Ignite UI for Angular コンポーネントをスタイル設定できます。

`igx-css-vars` mixin は、引数 (コンポーネント テーマ) を 1 つ受け取ります。

#### グローバル テーマの使用

以下は、複数コンポーネントを CSS 変数を使用してスタイル設定する方法の例です。

```scss
// Import the IgniteUI themes library first
@import "~igniteui-angular/lib/core/styles/themes/index";

@include igx-core();
@include igx-theme($default-palette, $legacy-support: false);

// Overwrite the default themes for igx-avatar and igx-badge
// using only css variables;
$avatar-theme: igx-avatar-theme($initials-background: royalblue);
$badge-theme: igx-badge-theme($background-color: white);

// Make sure you scope your css variables
// the code bellow will make the changes global
:root {
    @include igx-css-vars($avatar-theme);
    @include igx-css-vars($badge-theme);
}
```
<div class="divider"></div>

#### カプセル化した表示の使用

以下のサンプルは、[表示のカプセル化](#view-encapsulation) セクションのサンプルを開始点として使用しています。

```scss
@import "~igniteui-angular/lib/core/styles/themes/utilities";
@import "~igniteui-angular/lib/core/styles/components/avatar-theme";
@import "~igniteui-angular/lib/core/styles/components/avatar-component";

// Disable legacy support first.
$igx-legacy-support: false;
$avatar-theme: igx-avatar-theme($initials-background: royalblue);

:host ::ng-deep {
    // We still need to include the base avatar styles just once.
    @include igx-avatar(igx-avatar-theme());

    // Pass the theme to overwrite the default root vars.
    @include igx-css-vars($avatar-theme);
}
```
加えて  `$igx-legacy-support` を  `false` に設定してビルドした Ignite UI for Angular テーマは、プロジェクトに Sass を使用せずにコンポーネントのスタイル設定が可能です。たとえば、`--igx-avatar-initials-background` CSS 変数の値を必要な色に設定して達成することができます。

```css
/* app-avatar.component.css */

:host ::ng-deep {
    --igx-avatar-initials-background: royalblue;
}
```
<div class="divider"></div>

### その他のリソース
<div class="divider--half"></div>

グローバル テーマの設定方法:

* [グローバル テーマ](./global-theme.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)