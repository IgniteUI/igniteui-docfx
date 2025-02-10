﻿---
title: コンポーネント テーマ
_description: Ignite UI for Angular テーマ コンポーネントは SASS で開発されます。使用が簡単な API は単一のコンポーネント、複数のコンポーネント、またはスイート全体のスタイル変更を適用できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Theming コンポーネント, Angular テーマ
_language: ja
---

# コンポーネント テーマ

<p class="highlight">コンポーネント テーマは、テーマをグローバルに定義して特定のコンポーネント インスタンスのスタイルを変更できます。</p>

## 概要

<div class="divider--half"></div>

Ignite UI for Angular でコンポーネント テーマを設定する方法、次にコンポーネント レベル テーマの作成方法について説明します。IE 11 などの古いブラウザーをサポートするためにコンポーネントのテーマ設定に 2 つの方法があります。

- 1 つ目の方法は、コンポーネント インスタンスを [CSS 変数](https://developer.mozilla.org/ja-JP/docs/Web/CSS/Using_CSS_variables) を使用してスタイル設定する方法です。CSS 変数を使用するとスタイルを繰り返し定義することなくコンポーネント テーマを作成できます。この方法は、CSS 変数の値をランタイムで変更できます。
- 2 つ目の方法は、特定のコンポーネントで既に宣言されている CSS ルールを上書きする新しいルールを作成することです。この方法は古いブラウザーに適切なテーマをサポートする簡単で唯一の方法ですが、多くの追加 CSS ルールを生成した CSS テーマに追加するため理想的ではありません。

これらの方法を実際に使用する方法やコンポーネント レベルのテーマを作成する場合にどちらか一方を使用する方法について説明します。

<div class="divider"></div>

## テーマの作成

<div class="divider--half"></div>

コンポーネント テーマは複数のパーツで構成されます。

- **コンポーネント テーマ関数** - Sass 関数は、渡した引数を正規化して コンポーネント ミックスインでテーマを作成します。
- **CSS 変数 mixin** - コンポーネント テーマを使用し、特定コンポーネントのスタイルに使用される **CSS 変数**を生成する Sass mixin。
- **コンポーネント mixin** - コンポーネント テーマを使用し、特定コンポーネントのスタイルに使用される **CSS ルール**を生成する Sass mixin。

アバターのデフォルトテーマに設定するテーマと異なる背景色を持つ新規のグローバル アバター テーマを作成する場合、[**概要セクション**](#概要)のようにコンポーネント テーマを作成する 2 つの一般的な方法があります。 
コンポーネントテーマを体系化し、スコープする方法があります。最も簡単な方法は、[**グローバル テーマ**](./global-themes.md)を定義した同じファイルで行う方法です。

アバター テーマの定義:

```scss
// Some place after @include theme(...);

// Change the background of the avatar to purple.
$avatar-purple-theme: avatar-theme(
  $background: purple,
);

// Pass the css-vars to the `css-vars` mixin
@include css-vars($avatar-purple-theme);
```

上記のコードは、`igx-avatar` コンポーネントに対して新しい CSS 変数を生成します。これらの新しい CSS 変数は、デフォルトのアバター ルールを上書きします。
同様に、グローバルな `scss` ファイルに `css-vars` ミックスインを追加した場合、ミックスイン は定義済みのテーマを再び上書きします。

次に例を示します。 

```scss
// ...
@include css-vars($avatar-purple-theme);

// Later
$avatar-royalblue-theme: avatar-theme(
  $background: royalblue,
);

@include css-vars($avatar-royalblue-theme);
```

上記コードでは、以前の `css-vars` ミックスインはすべて上書きされるため、事実上のグローバル テーマは `$avatar-royalblue-theme` なります。

ここで次のポイントに移ります。

<div class="divider"></div>

## テーマのスコープ

<div class="divider--half"></div>

前の例のように同じコンポーネントをターゲットにした複数のテーマを同じレベルに追加する場合、最後のテーマ ミックスインが優先されます。これは CSS のカスケードの動作に起因します。同じコンポーネントタイプをターゲットにした 2 つ以上のテーマが必要な場合、セレクターにスコープする必要があります。例えば、複数の `igx-avatar` テーマを作成して特定の CSS セレクターにスコープし、後でコンポーネントマークアップに使用できます。

```scss
// ...
// CSS class selectors
.avatar-royalblue {
  @include css-vars($avatar-royalblue-theme);
}

.avatar-purple {
  @include css-vars($avatar-purple-theme);
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

Angular では、表示のカプセル化に 3 つの方法 Emulated (デフォルト)、Shadow DOM、None を採用しています。各方法の詳細については、[Angular ヘルプ](https://angular.io/api/core/ViewEncapsulation) をご覧ください。表示をカプセル化した親コンポーネントの一部である Ignite UI for Angular コンポーネントのテーマを処理する方法について詳しく説明します。

`エミュレートされた`表示のカプセル化とは？このタイプの表示のカプセル化は、Shadow DOM 仕様の利点を享受しませんが、ホスト要素に適用された一意の属性識別子を使用してコンポーネントとその子のスタイルをバインドする方法を利用します。

以下は CSS 変数を使用する例です。特定の親コンポーネントにバインドするアバター テーマを作成します。

シンプルなコンポーネントです。

```typescript
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-avatar",
  styleUrls: ["./app-avatar.component.scss"],
  template: `<igx-avatar [initials]="initials"></igx-avatar>`,
})
export class AvatarComponent extends Component {
  @Input() public initials = "AZ";
}
```

以下は Sass スタイルシートの例です。

```scss
// app-avatar.component.scss

// Import the theming module
@use "igniteui-angular/theming" as *;

// !IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';

$avatar-royalblue-theme: avatar-theme(
  $background: royalblue,
);

:host {
  @include css-vars($avatar-royalblue-theme);
}
```

CSS 変数を使用する間は、`::ng-deep` 擬似セレクターは必要ありません。上記コードで背景色に常に `royalblue` が含まれる `igx-avatar` の CSS 変数を作成しました。カスタム アバターのテーマは、その他の `igx-avatar` コンポーネントに影響しないため、カスタムの `app-avatar` コンポーネント内でカプセル化されたままです。

上記のインスタンスは、Sass を使用せずに実現することもできます。 `--igx-avatar-background` CSS 変数の値を希望のカラーに設定します。

```css
/* app-avatar.component.css */
:host {
  --igx-avatar-background: royalblue;
}
```

<div class="divider-half"></div>

## API の概要

<div class="divider--half"></div>

- [グローバル テーマ]({environment:sassApiUrl}/index.html#mixin-theme)
- [Avatar テーマ]({environment:sassApiUrl}/index.html#function-avatar-theme)

## その他のリソース

<div class="divider--half"></div>

グローバル テーマの設定方法:

- [グローバル テーマ](./global-themes.md)

コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
