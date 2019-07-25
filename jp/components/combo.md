---
title: Combo コンポーネント
_description: igx-combo は、基本的な HTML input 要素、select 要素、および IgniteUI for Angular igx-drop-down コントロールの機能を組み合わされています。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント, Angular Combo コントロール
_language: ja
---

## Combo
<p class="highlight">
[igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) コンポーネントは、基本的な HTML `input`、選択機能、Ignite UI for Angular [igx-drop-down]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) を組み合わせたコンポーネントです。<br />
Combo コンポーネントは、**[フィルタリング](combo_features.md#フィルタリング)**、項目の**複数選択**、**[グループ化](combo_features.md#グループ化)**、ドロップダウン リストに**[カスタム値](combo_features.md#カスタム値)** の追加などの機能をサポートします。<br />
**[カスタム テンプレート](combo_templates.md)** は、項目、ヘッダー、フッターなどコンポーネントの異なる領域をカスタマイズするために提供されます。<br />
[igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) コンポーネントは、**[テンプレート駆動フォーム](input_group.md)** と **[Reactive フォーム](input_group_reactive_forms.md)** を統合したコンポーネントです。<br />
[igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) は、直感的な **キーボード ナビゲーション**を公開し、**アクセシビリティ規格**に準拠しています。<br />
ドロップダウン項目を**仮想化**することにより、[igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) を大量の項目を持つデータ ソースにバインドした場合もスムーズにスクロールを行うことができます。
</p>
<div class="divider"></div>

### デモ
<div class="sample-container loading" style="height: 400px;">
    <iframe id="combo-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-sample" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>
<div class="divider--half"></div>

> [!WARNING]
> Ignite UI for Angular コンポーネントをプロジェクトに追加する前に、必要なすべての依存関係を構成し、プロジェクトのセットアップが正しく完了したことを確認してください。詳細については、[**インストール**](https://jp.infragistics.com/products/ignite-ui-angular/getting-started#installation) トピックをご確認ください。

### 使用方法
[IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) は、リストから項目の検索および選択が可能です。コンボは、項目コンテナーとして [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) を内部使用します。Ignite UI for Angular Combo で作業を開始する前に `IgxComboModule` を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxComboModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxComboModule],
    ...
})
export class AppModule {}
```

次にテンプレートで [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) をデータにバインドし、`localData` データソースのエントリに対応する [valueKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) と [displayKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#displaykey) を定義します。

```html
<igx-combo [data]="lData" [valueKey]="'ProductID'" [displayKey]="'ProductName'"></igx-combo>
```

```typescript
import { localData } from "./local-data";

export class ComboDemo implements OnInit {
    public lData: any[];

    public ngOnInit() {
        this.lData = localData;
    }
}
```
> 注: [displayKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#displaykey) が省略された場合、代わりに [valueKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) エンティティが項目テキストとして使用されます。

## 機能
Combo コンポーネントは以下の機能を公開します。
    - データ バインディング - ローカル データと [リモート データ](combo_remote.md)
    - [値のバインディング](combo_features.md#値バインディング)
    - [フィルタリング](combo_features.md#フィルタリング)
    - [グループ化](combo_features.md#グループ化)
    - [カスタム値](combo_features.md#カスタム値)
    - [テンプレート](combo_templates.md)
    - [テンプレート駆動フォーム](input_group.md) と [Reactive フォーム](input_group_reactive_forms.md) との統合

## キーボード ナビゲーション

igxCombo が閉じてフォーカスされる場合:
- `ArrowDown` または `Alt` + `ArrowDown` コンボのドロップダウンを開いて、フォーカスを検索入力に移動します。

igxCombo が開いて検索入力がフォーカスされる場合:
- `ArrowUp` または `Alt` + `ArrowUp` はコンボのドロップダウンを閉じて、フォーカスを閉じたコンボに移動します。

- `ArrowDown` はフォーカスを検索入力から最初のリスト項目に移動します。リストが空でカスタム値が有効にされた場合、「新しい項目の追加」ボタンに移動します。
  > 注: その他のキーストロークは入力によって処理されます。

igxCombo が開いてリスト項目がフォーカスされる場合:
- `ArrowDown` は次のリスト項目に移動します。アクティブ項目がリストの最後の項目で、カスタム値が有効にされた場合、フォーカスは「項目の追加」ボタンに移動します。

- `ArrowUp` は以前のリスト項目に移動します。アクティブ項目がリストの最初の項目の場合、フォーカスは検索入力に移動します。

- `End` は最後のリスト項目に移動します。

- `Home` は最初のリスト項目に移動します。

- `Space` はアクティブなリスト項目を選択/選択解除します。

- `Enter` は選択した項目を保存してリストを閉じます。

- `Esc` はリストを閉じます。

igxCombo が開いて、カスタム値が有効で、「項目の追加」ボタンがフォーカスされる場合:

- `Enter` は新しい項目を追加し、valueKey および displayKey を検索入力のテキストに設定して、新しい項目を選択します。

- `ArrowUp` はフォーカスを以前のリスト項目に移動します。リストが空の場合、フォーカスを検索入力に移動します。

## Styling
Using the [Ignite UI for Angular Theming](themes/index.md), we can greatly alter the **igx-combo** appearance. 
Since `igx-combo` extends `igx-drop-down`, it also makes good use of its existing `igx-drop-down` styling, so you can directly refer to the [igx-drop-down styling guide](drop_down.md#styling) for details.
On top of that, `IgxCombo` includes an `IgxInputGroup` as well, so any styling to the input-group will affect the `IgxCombo` component. You can refer to [igx-input-group styling guide](input_group.md#styling) for details.

### Code snippets
We are going to use the following:
```scss
// in component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
$my-primary-color:#FFC314;
$my-secondary-color: #7344df;
$my-info-color: #ffffff;

$my-color-palette: igx-palette(
    $primary: $my-primary-color,
    $secondary: $my-secondary-color,
    $info: $my-info-color
);

$custom-drop-down-theme: igx-drop-down-theme(
    $background-color: igx-color($my-color-palette, "secondary", 100),
    $header-text-color: igx-color($my-color-palette, "secondary", 600),
    $item-text-color: igx-color($my-info-color, "info", 100),

    $selected-item-background: igx-color($my-color-palette, "secondary", 400),
    $selected-item-text-color: igx-color($my-color-palette, "info"),
    $selected-hover-item-background: igx-color($my-color-palette, "secondary", 400),
    $selected-hover-item-text-color: igx-color($my-color-palette, "info"),
    $selected-focus-item-background: igx-color($my-color-palette, "secondary", 400),
    $selected-focus-item-text-color: igx-color($my-color-palette, "info"),

    $focused-item-background: igx-color($my-color-palette, "secondary", 300),
    $focused-item-text-color: igx-color($my-color-palette, "info"),

    $hover-item-background: igx-color($my-color-palette, "info"),
    $hover-item-text-color: igx-color($my-color-palette, "secondary", 600)
);

// igx-combo-theme exposes several parameters on top of the igx-drop-down-theme.
// change $search-separator-border-color to one matching better our purple theme
$custom-combo-theme: igx-combo-theme(
    $search-separator-border-color: igx-color($my-color-palette, "secondary", 600)
);
```

### Applying
All that's left is to properly scope our newly created themes. Here we will assume you want to style a particular `IgxCombo` so the other components of this type in your application will not be affected by the custom themes. For details regarding applying theme globally or scoped, you can refer to [igx-drop-down styling guide](drop_down.md#applying)

```
// Pass our custom-drop-down-theme and custom-combo-theme to respectively `igx-drop-down` and igx-combo mixins.
:host {
   ::ng-deep {
           @include igx-drop-down($custom-drop-down-theme);
           @include igx-combo($custom-combo-theme);
   }
}
```

> [!NOTE]
> The [**IgxCombo**]({environment:angularApiUrl}/classes/igxcombocomponent.html) component uses [IgxOverlay](overlay_main.md) to hold and display the `igx-combo-items` list container. To properly scope your styles you might have to use an [OverlaySetting.outlet]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet). For more details check: [`IgxOverlay styling guide`](overlay_styling.md).

### Demo
<div class="sample-container loading" style="height:410px">
    <iframe id="combo-styling" src='{environment:demosBaseUrl}/lists/combo-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-styling" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

## API

### 入力
<div class="divider--half"></div>

* [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) 
* [IgxComboComponent Styles]({environment:sassApiUrl}/index.html#themes-mixin-igx-combo)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

## 既知の問題

- 選択した項目を表示するコンボ入力は編集可能ではありませんが、IE および Firefox でカーソルが表示される問題。
- IE で無効なコンボで BackSpace キーが使用できる問題。
- Combo は高さのサイズ変更のための入力はありません。 [IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)  は、カスタムのサイズ変更オプションを公開し、[IgxCombo]({environment:angularApiUrl}/classes/igxcombocomponent.html) は適切なスタイル設定と外観の統一に同じ機能を使用します。

## その他のリソース

<div class="divider--half"></div>

* [コンボ機能](combo_features.md)
* [コンボ リモート バインディング](combo_remote.md)
* [コンボ テンプレート](combo_templates.md)
* [テンプレート駆動フォームの統合](input_group.md)
* [リアクティブ フォームの統合](input_group_reactive_forms.md)
* [カスケーディング](combo_cascading.md)
* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)
* [IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) 

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)