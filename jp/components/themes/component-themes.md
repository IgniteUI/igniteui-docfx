---
title: コンポーネント テーマ
_description: Ignite UI for Angular Theming コンポーネントは SASS で開発されます。使用が簡単な API は単一のコンポーネント、複数のコンポーネント、またはスイート全体のスタイル変更を適用できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Theming コンポーネント, Angular テーマ
_language: ja
---

## コンポーネント テーマ
<div class="highlight">コンポーネント テーマは、テーマをグローバルに定義して特定のコンポーネント インスタンスのスタイルを変更できます。</div>
<div class="divider"></div>

### 概要
<div class="divider--half"></div>

Ignite UI for Angular でコンポーネント テーマを設定する方法、次にコンポーネント レベル IE 11 などの古いブラウザーをサポートするためにコンポーネントのテーマ設定に 2 つの方法があります。
- 一つ目の方法は、コンポーネント インスタンスを [CSS 変数](https://developer.mozilla.org/ja-JP/docs/Web/CSS/Using_CSS_variables) を使用してスタイル設定する方法です。CSS 変数を使用するとスタイルを繰り返し定義することなくコンポーネント テーマを作成できます。この方法は、CSS 変数の値をランタイムで変更できます。
- 2 つ目の方法は、特定のコンポーネントで既に宣言されているCSSルールを上書きする新しいルールを作成することです。この方法は古いブラウザーをサポートする簡単で唯一の方法ですが、多くの追加 CSS ルールを生成した CSS テーマに追加するため理想的ではありません。

これらの方法を実際に使用する方法やコンポーネント レベルのテーマを作成する場合にどちらか一方を使用する方法について説明します。
<div class="divider"></div>

### テーマの作成
<div class="divider--half"></div>

コンポーネント テーマは複数のパーツで構成されます。

- **コンポーネント テーマ関数** - Sass 関数は、渡した引数を正規化してコンポーネント mixin でテーマを作成します。
- **CSS 変数 mixin** - コンポーネント テーマを使用し、特定コンポーネントのスタイルに使用される CSS 変数を生成する Sass mixin。
- **コンポーネント mixin** - コンポーネント テーマを使用し、特定コンポーネントのスタイルに使用される CSS ルールを生成する Sass mixin。

アバターのデフォルトテーマに設定するテーマと異なる背景色を持つ新規のグローバル アバター テーマを作成する場合、[**概要セクション**](#概要)のようにコンポーネント テーマを作成する 2 つの一般的な方法があります。
コンポーネントテーマを体系化し、スコープする方法があります。最も簡単な方法は、[**グローバル テーマ**](global-theme.md)を定義した同じファイルで行う方法です。

アバター テーマの定義:

```scss
// igx-theme($my-color-palette); の後

// アバターの initials-background と icon-background 
// を purple に変更します。
$new-avatar-theme: igx-avatar-theme(
    $initials-background: purple,
    $icon-background: purple
);

// css-vars を `igx-css-vars` mixin に渡します。
@include igx-css-vars($new-avatar-theme);
```

上記のコードは、`igx-avatar` コンポーネントに対して新しい CSS 変数を生成します。これらの新しい CSS 変数は、デフォルトのアバター ルールを上書きします。 
同様に、グローバルな`scss` ファイルに `igx-css-vars` mixin を追加した場合、mixin は定義済みのテーマを再び上書きします。 

以下はその例です。

```scss
// ...
@include igx-css-vars($new-avatar-theme);

// Later
$another-avatar-theme: igx-avatar-theme(
    $initials-background: royalblue,
    $icon-background: royalblue
);

@include igx-css-vars($another-avatar-theme);
```
上記コードでは、以前の`igx-css-vars` mixin はすべて上書きされるため、事実上のグローバル テーマは `$another-avatar-theme` なります。 

次のポイントに移ります。
<div class="divider"></div>

### テーマのスコープ
<div class="divider--half"></div>

前の例のように同じコンポーネントをターゲットにした複数のテーマを同じレベルに追加する場合、最後のテーマ mixin が優先されます。これは CSS のカスケードの動作に起因します。同じコンポーネントタイプをターゲットにした 2 つ以上のテーマが必要な場合、セレクターを使用してスコープする必要があります。例えば、複数の `igx-avatar` テーマを作成して特定の CSS セレクターにスコープし、後でコンポーネントマークアップに使用できます。

```scss
// ...
// CSS クラス セレクター
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

### 表示のカプセル化
<div class="divider--half"></div>

グローバルにスコープし、単一の Sass ファイルに含まれるテーマを作成する方法について説明しました。ただし最適な方法ではないため、Sass ファイルを特定アプリのコンポーネントにバインドした方がよい場合があります。この場合、表示のカプセル化、特に Angular で発生させる方法を考慮する必要があります。

Angular では、表示のカプセル化に 3 つの方法 Emulated (デフォルト)、Native、None を採用しています。 各方法の詳細については、 [Angular ヘルプ](https://angular.io/api/core/ViewEncapsulation)をご覧ください。表示をカプセルかした親コンポーネントの一部である Ignite UI for Angular コンポーネントのテーマを処理する方法について詳しく説明します。

エミュレートされた表示のカプセル化とは？このタイプの表示のカプセル化は、Shadow DOM 仕様の利点を享受しませんが、ホスト要素に適用された一意の属性識別子を使用してコンポーネントとその子のスタイルをバインドする方法を利用します。インナー セレクターをターゲットにした表示のカプセル化コンポーネントのスタイルシートに追加したスタイルのルールは、ホスト要素の一意の属性を参照しないため適用されません。このカプセル化をペネトレーションするには、View Encapsulation ペネトレーション ストラテジーをいくつか使用する必要があります。現在の Angular でこれを行うのは  `::ng-deep` です。ホスト要素でカプセル化された内部のセレクターをターゲットにできます。CSS 変数の代わりに CSS ルールを扱っている場合やコンポーネントの単一のインスタンスをカスタマイズする場合は、`::ng-deep` の使用をお勧めします。次のセクションで例を示します。

以下は CSS 変数を使用する例です。特定の親コンポーネントにバインドするアバター テーマを作成します。

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

// すべての必要な関数と mixin をインポートします。
@import '~igniteui-angular/lib/core/styles/themes/utilities';
@import '~igniteui-angular/lib/core/styles/components/avatar/avatar-theme';
@import '~igniteui-angular/lib/core/styles/components/avatar/avatar-component';

$avatar-theme: igx-avatar-theme($initials-background: royalblue);

:host {
    @include igx-css-vars($avatar-theme);
}

```

CSS 変数を使用すれば、 `:: ng-deep` 擬似セレクターは必要ありません。上記コードでは `igx-avatar` に対して背景色が常に `royalblue` がとなる CSS 変数を作成しました。カスタム アバターのテーマは、その他の `igx-avatar` コンポーネントに影響しないため、カスタムの  `app-avatar` コンポーネント内でカプセル化されたままです。

加えて `$igx-legacy-support` を `false` に設定してビルドした Ignite UI for Angular テーマは、プロジェクトの Sass を使用せずにコンポーネントのスタイル設定が可能です。たとえば、上記は `--igx-avatar-initials-background` CSS 変数に色の値を設定することにより実現できます。

```css
/* app-avatar.component.css */
:host {
    --igx-avatar-initials-background: royalblue;
}
```
<div class="divider"></div>

### 古いブラウザーの場合
<div class="divider--half"></div>

[概要](#概要)セクションの説明にあったように、`$igx-legacy-support` グローバル変数を `true` に設定することにより、ハードコーディングされた値をコンポーネントのスタイル設定に使用できます。`igx-theme` mixin を使用して `$legacy-support` に`true` を渡した場合、`$igx-legacy-support` もまた`true` に設定されます。 

#### グローバル テーマの使用

テーマ設定の方法を決定する - true の場合、テーマはハードコーディングされた値で設定されます。

```scss
// 最初に、IgniteUI テーマ ライブラリをインポートします。
@import '~igniteui-angular/lib/core/styles/themes/index';

@include igx-core();
@include igx-theme($default-palette, $legacy-support: true);

// ハードコーディングされた値で
// igx-avatar と igx-badge のデフォルトの テーマを上書きします;
$avatar-theme: igx-avatar-theme($initials-background: royalblue);
$badge-theme: igx-badge-theme($background-color: white);

@include igx-avatar($avatar-theme);
@include igx-badge($badge-theme);

```
<div class="divider"></div>

#### カプセル化した表示の使用

以下のサンプルは、[表示のカプセル化](#表示のカプセル化)セクションのサンプルを開始点として使用しています。

```scss
@import '~igniteui-angular/lib/core/styles/themes/utilities';
@import '~igniteui-angular/lib/core/styles/components/avatar/avatar-theme';
@import '~igniteui-angular/lib/core/styles/components/avatar/avatar-component'; 
// 最初に legacy-support を有効にします。
$igx-legacy-support: true;
$avatar-theme: igx-avatar-theme($initials-background: royalblue);

:host ::ng-deep {
    @include igx-avatar($avatar-theme);
}
```
<div class="divider"></div>

### API
* [Global テーマ]({environment:sassApiUrl}/index.html#mixin-igx-theme)
* [Avatar テーマ]({environment:sassApiUrl}/index.html#function-igx-avatar)

<div class="divider--half"></div>

### その他のリソース
<div class="divider--half"></div>

グローバル テーマの設定方法:

* [グローバル テーマ](global-theme.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)