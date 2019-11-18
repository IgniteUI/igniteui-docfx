---
title: Input Groups コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Input Groups は、データ入力のための使いやすいフォーム、さらに検証およびエラー処理などの機能も提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Label コンポーネント, Angular Label コントロール, Angular Input Group コンポーネント, Angular Input Group コントロール, Angular Input コンポーネント, Angular Input コントロール, Input コンポーネント, Input コントロール, Label コンポーネント, Label コントロール, Angular Input ディレクティブ, Angular Label ディレクティブ, Angular Forms, Angular Reactive Forms, Angular フォームの検証
_language: ja
---

## Input Group

Ignite UI for Angular Input Group は、簡単に使用できるデータ入力フォームを作成できます。データ入力を簡素化し、入力コントロールには検証やエラーの処理機能も提供します。

### Input Group デモ
<div class="sample-container loading" style="height:800px">
<iframe id="input-group-sample-6-frame" src='{environment:demosBaseUrl}/data-entries/input-group-sample-6' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="input-group-sample-6-frame" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

### 使用方法
Input Group コンポーネントおよびその関連するディレクティブのデフォルト スタイル設定は、マテリアル デザイン [**ガイドライン**](https://material.io/guidelines/components/text-fields.html)のテキスト フィールド仕様を実装します。

まず、以下のコマンドを実行して Ignite UI for Angular をインストールします。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、テンプレート駆動フォームを機能させるために、すべての必要なモジュールを `igniteui-angular` ツールキットと **FormsModule** からインポートします。

```typescript
// app.module.ts

...
import { IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxDatePickerModule, IgxTimePickerModule, IgxComboModule, igxSelectModule } from "igniteui-angular";
import { FormsModule } from "@angular/forms";

@NgModule({
    ...
    imports: [..., IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxDatePickerModule, IgxTimePickerModule, IgxComboModule, igxSelectModule, FormsModule],
    ...
})
export class AppModule {}
```

> [!NOTE]
> [`igxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html)、`igxLabel`、`igx-prefix`、`igx-suffix`、または [`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html) ディレクティブを使用するには、`<igx-input-group>` コンテナにラップする必要があります。

#### Label および Input
`igxLabel` および [`igxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html) ディレクティブとその検証、データ バインディング、API については、[このトピック](label_input.md)を参照してください。

#### Prefix と Suffix
Ignite UI for Angular Prefix または Suffix を使用して入力にプレフィックスまたはサフィックスを追加できます。両方のディレクティブに HTML 要素、文字列、またはその他のコンポーネントを含むことができます。文字列 **prefix** (`+359`) および [`igx-icon`]({environment:angularApiUrl}/classes/igxiconcomponent.html) **suffix** (`<igx-icon>phone</igx-icon>`) を持つ新しい入力フィールドを追加します。

```html
<igx-input-group>
    <igx-prefix>+359</igx-prefix>
    <label igxLabel for="phone">Phone</label>
    <input igxInput name="phone" type="text" [(ngModel)]="user.phone" />
    <igx-suffix>
        <igx-icon>phone</igx-icon>
    </igx-suffix>
</igx-input-group>
```

以下は結果です。

<div class="sample-container loading" style="height:100px">
<iframe id="input-group-sample-3-frame" data-src='{environment:demosBaseUrl}/data-entries/input-group-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div class="divider--half"></div>

#### Hint
Ignite UI for Angular Hint は、入力の下に配置されるヘルパー テキストを提供します。ヒントは入力の開始または終了に配置できます。[`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html) の位置は [`position`]({environment:angularApiUrl}/classes/igxhintdirective.html#position) プロパティを使用して設定します。以下は phone 入力にヒントを追加します。

```html
<igx-input-group>
    <igx-prefix>+359</igx-prefix>
    <label igxLabel for="phone">Phone</label>
    <input igxInput name="phone" type="text" [(ngModel)]="user.phone" />
    <igx-suffix>
        <igx-icon>phone</igx-icon>
    </igx-suffix>
    <igx-hint position="start">Ex.: +359 888 123 456</igx-hint>
</igx-input-group>
```

ヒントを追加した phone フィールドは以下のようになります。

<div class="sample-container loading" style="height:110px">
<iframe id="input-group-sample-4-frame" data-src='{environment:demosBaseUrl}/data-entries/input-group-sample-4' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div class="divider--half"></div>

#### スタイル設定
入力にスタイルを適用するには、[`igxInputGroup`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) コンポーネントの [`type`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html#type) プロパティを使用します。現在 line (デフォルト)、box、border、および search のスタイル設定をサポートします。スタイル設定の結果:

<div class="sample-container loading" style="height:520px">
<iframe id="input-group-sample-5-frame" data-src='{environment:demosBaseUrl}/data-entries/input-group-sample-5' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="input-group-sample-5-frame" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>

### スタイル設定

入力グループ コンポーネントは、[Ignite UI Theming ライブラリ](themes/index.md) を使用し、[igx-input-theme]({environment:sassApiUrl}/index.html#function-igx-input-group-theme) によって公開されるプロパティの大きな配列を持っています。
以下の手順では、入力のラベル、境界線、テキスト、および背景のスタイル設定を行います。 

#### スタイルを含む

はじめにスタイルファイルに `index` ファイルを含めます。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

これで、カスタム [palette](themes/palette.md) の構築を開始し、それを使用して入力用の[テーマ](themes/component-themes.md)を生成できます。

#### カラーパレットの定義

ハードコーディングされた色の代わりに [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) を作成し、提供される色範囲を使用してカスタム [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を作成します。

```scss
$purple: #9E379F;
$blue: #61AEDB;

$custom-palette: igx-palette($primary: $blue, $secondary: $purple);

$text-color: igx-color($custom-palette, "secondary", 400);
$border-color:  igx-color($custom-palette, "secondary", 900);
$background-color: #91CEFB27;

```

>[!NOTE]
>`Igx-color` と ` igx-palette` は色の生成や取得のための関数です。使い方の詳細については [`パレット`](themes/palette.md) のトピックを参照してください。

#### テーマの定義

適切な色を選択後、入力用のテーマを生成します。テーマの生成は、[`igx-input-group-theme`]({environment:sassApiUrl}/index.html#function-igx-input-group-theme) を呼び出し、変更するパラメーターを渡します。

```scss
$input-group-theme: igx-input-group-theme(
  $palette: $custom-palette,
  $filled-text-color: $text-color,
  $focused-text-color: $text-color,
  $idle-text-color: $text-color,
  $idle-bottom-line-color: $border-color,
  $focused-bottom-line-color: $border-color,
  $interim-bottom-line-color: $border-color,
  $hover-bottom-line-color: $border-color,
  $box-background: $background-color
);
```

入力グループのテキストの色と、表示される下の境界線を変更するように指定しました。あとは、テーマを含めるだけです。

#### テーマを含む

テーマを含める最も簡単な方法は、グローバル スタイル ファイルの SASS `@include` ステートメントで [`igx-input-group` mixin]({environment:sassApiUrl}/index.html#mixin-igx-input-group) を使用する方法です。

```scss
@include igx-input-group($input-group-theme);

```

#### スタイルのスコーピング

グローバル スタイル ファイル (デフォルトでは styles.scss) に igx-input-group ミックスインを含めると、カスタム テーマはアプリケーションのすべての入力グループに影響します。入力グループ要素の*特定のサブセット*のみにカスタム スタイルを適用する場合は、それに応じてテーマをスコープする必要があります。

例のコンテキストで続けると、サンプル コンポーネントの下の `igx-input-group` 要素にのみ適用するようにテーマをスコープできます。これを行うには、カスタム スタイルをコンポーネントのスタイル ファイル (`input-group-style.component.scss`) に移動します。ただし、[include 手順](#including-the-theme)に示すように、インクルード ステートメントをそのままにすると、スタイルは適切に適用されません。テキストの色が適切に変更された場合も、下の境界線と背景は同じままです。これは、Angular の `View カプセル化`によるものです。コンポーネントは `エミュレートされた` ビューのカプセル化 (デフォルト) を使用しているため、`@include` ステートメントのスタイルは、コンポーネントのテンプレートのみにスコープされます。`Input` 要素と `label` 要素はビューの一部であるため、スタイルが正しく適用されます。ただし、入力の下の境界線は `igx-input-group` コンポーネントによって生成され、コンポーネントのスタイルの影響を**受けません**。

境界線のスタイルを設定するには、コンポーネントの scss ファイルで `::ng-deep` セレクターを使用して、Angular の`エミュレート`されたビューのカプセル化をペネトレーションする必要があります。`::ng-deep` を使用する場合、スタイルを `:host` セレクターでスコープし、これらのスタイルがコンポーネントの下の要素にのみ適用されるようにする必要があります。

```scss
// input-group-style.component.scss
:host {
    ::ng-deep {
 @include igx-input-group($input-group-theme);
    }
}
```

 >[!NOTE]
 > コンポーネントが[`エミュレート`](themes/component-themes.md#view-encapsulation)された ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化をペネトレーションする必要があります。テーマがアプリの他のコンポーネントの入力グループに影響を**与えない**ように、`:host` の下に `::ng-deep` ステートメントをスコープします。

#### デモ

以下は、スタイルを適用した結果のデモです。

<div class="sample-container loading" style="height:240px">
    <iframe id="input-group-style-iframe" src='{environment:demosBaseUrl}/data-entries/input-group-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="input-group-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### API リファレンス
* [IgxHintDirective]({environment:angularApiUrl}/classes/igxhintdirective.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxInputGroupComponent Styles]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)

### その他のリソース
関連トピック:

* [リアクティブ フォームの統合](input_group_reactive_forms.md)
* [ラベルと入力](label_input.md)
* [コンボ](combo.md)
* [選択](select.md)
* [表示密度](display_density.md)

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)