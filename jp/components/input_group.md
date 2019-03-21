---
title: Input Groups コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Input Groups は、データ入力のための使用安いフォームの入力を提供し、検証およびエラーの処理機能も提供します。
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

テンプレート駆動フォームを使用する前に Ignite UI コンポーネントのすべてのモジュールと **FormsModule** をインポートします。

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
> [`igxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html)、`igxLabel`、`igx-prefix`、`igx-suffix`、または [`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html) ディレクティブを使用するには、`<igx-input-group>` コンテナーにラップする必要があります。

#### Label および Input
`igxLabel` および [`igxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html) ディレクティブとその検証、データ バインディング、API については、[このトピック](label_input.md)を参照してください。

#### Prefix と Suffix
Ignite UI for Angular Prefix または Suffix を使用して入力のプレフィックスまたはサフィックスを追加できます。両方のディレクティブに HTML 要素、文字列、またはその他のコンポーネントを含むことができます。文字列 **prefix** (`+359`) および [`igx-icon`]({environment:angularApiUrl}/classes/igxiconcomponent.html) **suffix** (`<igx-icon>phone</igx-icon>`) を持つ新しい入力フィールドを追加します。

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

結果は以下のようになります。

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

### API リファレンス
* [IgxHintDirective]({environment:angularApiUrl}/classes/igxhintdirective.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxInputGroupComponent Styles]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)

### その他のリソース
関連トピック:

* [リアクティブ フォームの統合](input_group_reactive_forms.md)
* [Label と Input](label_input.md)
* [Combo](combo.md)
* [Select](select.md)
* [Display Density](display_density.md)

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)