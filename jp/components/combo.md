---
title: Combo コンポーネント
_description: igx-combo は、基本的な HTML input 要素、select 要素、および IgniteUI for Angular igx-drop-down コントロールの機能を組み合わされています。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント, Angular Combo コントロール
_language: ja
---

# Combo
<p class="highlight">

[igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) コンポーネントは、基本的な HTML `input`、選択機能、Ignite UI for Angular [igx-drop-down]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) を組み合わせたコンポーネントです。<br/>
Combo コンポーネントは、**[フィルタリング](combo_features.md#フィルタリング)**、項目の**複数選択**、**[グループ化](combo_features.md#グループ化)**、ドロップダウン リストに**[カスタム値](combo_features.md#カスタム値)** の追加などの機能をサポートします。<br/>
**[カスタム テンプレート](combo_templates.md)** は、項目、ヘッダー、フッターなどコンポーネントの異なる領域をカスタマイズするために提供されます。<br/>
[igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) コンポーネントは、**[テンプレート駆動フォーム](input_group.md)** と **[Reactive フォーム](input_group_reactive_forms.md)** を統合したコンポーネントです。<br/>
[igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) は、直感的な **キーボード ナビゲーション**を公開し、**アクセシビリティ規格**に準拠しています。<br/>
ドロップダウン項目を**仮想化**することにより、[igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) を多くの項目を持つデータ ソースにバインドした場合もスムーズにスクロールを行うことができます。
</p>
<div class="divider"></div>

## デモ
<div class="sample-container loading" style="height: 400px;">
    <iframe id="combo-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-sample" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>

## 使用方法
[IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) は、リストから項目の検索および選択が可能です。コンボは、項目コンテナーとして [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) を内部使用します。

Combo コンポーネントを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールします。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module.ts** ファイルに  `IgxComboModule` をインポートします。

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

次に、テンプレートで [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) をいくつかのデータにバインドします。

```typescript
export class ComboDemo implements OnInit {
    public cities: { name: string, id: string }[] = [];

    public ngOnInit() {
        this.cities = [{ name: 'London', id: 'UK01' }, { name: 'Sofia', id: 'BG01'}, ...];
    }
}
```

```html
<igx-combo [data]="cities"></igx-combo>
```

これで、コンボの city の配列にバインドされました。

### データ値と表示プロパティ

上記の構成では、コンボは複雑なデータ (オブジェクト) の配列にバインドされているため、選択したアイテムを処理するためにコントロールが使用するプロパティを指定する必要があります。コントロールは、`@Input` properties - [`valueKey`]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) と [`displayKey`]({environment:angularApiUrl}/classes/igxcombocomponent.html#displaykey) の 2 つの `@Input` properties - [`valueKey`]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) and [`displayKey`]({environment:angularApiUrl}/classes/igxcombocomponent.html#displaykey) プロパティを公開します。

 - `valueKey`: **Optional.オブジェクト配列に推奨。**コンボの選択のために保存されるデータ エントリのプロパティを指定します。`valueKey` が省略された場合、コンボ値はデータ エントリへの参照を使用します (選択は `combo.data` からのエントリの配列になります)。
 - `displayKey`: **オブジェクト配列に必須。**アイテムのテキストに使用するプロパティを指定します。`displayKey` に値が指定されていない場合、コンボは指定された `valueKey` (存在する場合) を使用します。 

この例では、コンボに各都市の`名前`を表示し、コンボ値には各都市の `id` を格納します。格納するには、これらのプロパティをコンボの`displayKey` と `valueKey` にそれぞれ提供します。

```html
<igx-combo [data]="cities" displayKey="name" valueKey="id">
```

これでコンボがデータにバインドされ、初期化されると項目のリストが表示されます。ユーザーは、マウスとキーボードの操作を介して項目を選択済みとしてマークし、コンボを視覚的に更新して現在の選択を反映します (入力で選択した項目を表示し、リストで選択した項目を強調表示します)。コンボ選択には、[双方向バインディング](#two-way-バインディング)または[選択 API](#選択) を使用してアクセスできます。 

> [!Note]
> データソースが単純なタイプ (`string[]`、`number[]` など）で構成されている場合、`valueKey` と `displayKey` を**指定しないでください**。

### Two-Way バインディング

このコンボは、`[(ngModel)]` との双方向のデータ バインディングを完全にサポートし、[テンプレート駆動型](https://angular.io/guide/forms)および[リアクティブ型](https://angular.io/guide/reactive-forms)での使用もサポートします。コンボの選択項目 ([`valueKey` に基づく](#data-value-and-display-properties)) と同じタイプの項目の配列を渡すことができ、いずれかが変更されるたびに、他方がそれに応じて更新されます。

上記例の構成に従った場合:

```html
<igx-combo [data]="cities" [(ngModel)]="selectedCities" displayKey="name" valueKey="id"></igx-combo>
```
```typescript
export class MyCombo {
    public cities: { name: string, id: string }[] = [{ name: "Sofia", id: "BG01" }, { name: "London", id: "UK01" }, ...];
    public selectedCities: string[] = ["BG01", "UK01"];
}
```
この設定では、cities の Sofia と London があらかじめ選択済みになります。コンボの選択におけるそれ以上の変更は、`selectedCities` 配列に反映されます。

`valueKey` を指定しない場合も双方向バインディングを設定できます。
たとえば、`valueKey` を省略すると、バインドされたモデルは次のようになります。

```typescript
export class MyCombo {
    public cities: { name: string, id: string }[] = [{ name: "Sofia", id: "BG01" }, { name: "London", id: "UK01" }, ...];
    public selectedCities: { name: string, id: string }[] = [this.cities[0], this.cities[1]];
}
```

### 選択
このコンボは、コントロールの現在の選択状態を取得および操作できる API を公開します。 

コンボの選択を取得する 1 つの方法は、[`selectedItems()`]({environment:angularApiUrl}/classes/igxcombocomponent.html#selecteditems) メソッドを使用することです。[指定された `valueKey`](#data-value-and-display-properties) (存在する場合) に応じて、選択された項目に対応する値の配列を返します。

cities の例では、`selectedItems` は選択された都市の `id` の配列を返します。

```typescript
export class MyCombo {
    ...
    public selectedItems: string[] = this.combo.selectedItems();
}
```

選択 API を使用すると、ユーザーがコントロールと対話することなく、コンボの選択された項目をボタンクリック、Observable 変更への応答などで変更することもできます。

たとえば、cities の例をもう一度見て、combo の [`selectItems`]({environment:angularApiUrl}/classes/igxcombocomponent.html#selectitems) メソッドを使用して、一連の cities を選択するボタンを実装する方法を見てみましょう。

```html
<igx-combo [data]="cities" displayKey="name" valueKey="id"></igx-combo>
<button igxButton (click)="selectFavorites()">Select Favorites</button>
```
```typescript
export class MyExampleCombo {
    @ViewChild(IgxComboComponent, { read: IgxComboComponent, static: true })
    public combo: IgxComboComponent;
    ...
    selectFavorites(): void {
        this.combo.selectItems(['UK01', 'BG01']);
    }
}
```

ボタンをクリックすると、都市 London と Sofia がコンボの選択に追加されます。

また、コンボは、選択が変更されるたびにイベントを発生させます - [`onSelectionChange()`]({environment:angularApiUrl}/classes/igxcombocomponent.html#onselectionchange)。発行されたイベント引数 [`IComboSelectionChangeEventArgs`]({environment:angularApiUrl}/interfaces/icomboselectionchangeeventargs.html) には、変更前の選択、現在の選択、追加および削除された項目に関する情報が含まれています。また、イベントをキャンセルして、新しいアイテムの配列で選択を更新できないようにすることもできます。

イベントへのバインドは、`igx-combo` タグの適切な `@Output` を介して実行できます。
```html
<igx-combo [data]="cities" displayKey="name" valueKey="id" (onSelectionChange)="handleCityChange($event)">
```
たとえば、選択したすべての cities の統計をページに表示できます。その選択に対して都市が追加または削除された場合、統計ビジュアライゼーションに都市を適切に追加/削除するハンドラーを起動できます。

```typescript
export class MyExampleCombo {
    ...
    handleCityChange(event: IComboSelectionChangeEventArgs): void {
        for (const item of event.added) {
            this.addToVisualization(item);
        }
        for (const item of event.removed) {
            this.removeFromVisualization(item);
        }
    }
}
```

### デモ

以下のデモでは、コンボをデータにバインドするさまざまな方法を並べて比較できます。

<div class="sample-container loading" style="height: 600px;">
    <iframe id="combo-binding-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo-binding" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-binding-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

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

## スタイル設定
[Ignite UI for Angular テーマ ](themes/index.md)を使用して、**igx-combo** の外観を変更できます。 

`Igx-combo` は `igx-drop-down` を拡張するため、既存の `igx-drop-down` スタイル設定を活用できます。詳細については [igx-drop-down スタイリング ガイド](drop_down.md#スタイル設定)をご覧ください。
さらに、`IgxCombo` には `IgxInputGroup` も含まれているため、入力グループのスタイル設定は `IgxCombo` コンポーネントに影響します。詳細については、[igx-input-group スタイリング ガイド](input_group.md#スタイル設定) を参照できます。また `IgxCheckbox` も関連コンポーネントです。詳細については、[`igx-checkbox スタイリング ガイド`](checkbox.md#スタイル設定) を確認してください。

### コード スニペット
以下を使用します。
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

### 適用
あとは新しく作成したテーマを適切にスコープするだけです。ここでは、アプリケーション内のこのタイプの他のコンポーネントがカスタム テーマの影響を受けないよう、特定の `IgxCombo` にスタイルを設定します。テーマをグローバルに適用、またはスコープの適用に関する詳細については、[igx-drop-down スタイリング ガイド](drop_down.md#applying)をご覧ください。

```scss
// Pass our custom-drop-down-theme and custom-combo-theme to respectively `igx-drop-down` and igx-combo mixins.
:host {
   ::ng-deep {
           @include igx-drop-down($custom-drop-down-theme);
           @include igx-combo($custom-combo-theme);
   }
}
```

> [!NOTE]
> [**IgxCombo**]({environment:angularApiUrl}/classes/igxcombocomponent.html) コンポーネントは、[IgxOverlay](overlay_main.md) を使用して、`igx-combo-items` リスト コンテナを保持および表示します。スタイルを適切にスコープするには、[OverlaySetting.outlet]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet) を使用してください。詳細については、[`IgxOverlay スタイリング ガイド`](overlay_styling.md)を確認してください。

### デモ
<div class="sample-container loading" style="height:410px">
    <iframe id="combo-styling" src='{environment:demosBaseUrl}/lists/combo-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-styling" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

<div class="divider--half"></div>

## API
<div class="divider--half"></div>

* [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) 
* [IgxComboComponent スタイル]({environment:sassApiUrl}/index.html#themes-mixin-igx-combo)
* [IgxOverlay スタイル]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

## 既知の問題

- 選択した項目を表示するコンボ入力は編集可能ではありませんが、IE および Firefox でカーソルが表示される問題。
- IE で無効なコンボで BackSpace キーが使用できる問題。
- Combo は高さのサイズ変更のための入力はありません。 [IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)  は、カスタムのサイズ変更オプションを公開し、[IgxCombo]({environment:angularApiUrl}/classes/igxcombocomponent.html) は適切なスタイル設定と外観の統一に同じ機能を使用します。

> [!NOTE]
> `igxCombo` は内部で ` igxForOf` ディレクティブを使用するため、すべての `igxForOf`制限が ` igxCombo` に対して有効です。詳細については、[igxForOf 既知の問題](for_of.html#known-limitations) セクションを参照してください。

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
