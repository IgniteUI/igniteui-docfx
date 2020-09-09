---
title: Combo コンポーネント
_description: igx-combo は、基本的な HTML input 要素、select 要素、および IgniteUI for Angular igx-drop-down コントロールの機能を組み合わされています。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント, Angular Combo コントロール
_language: ja
---

## コンボ
<p class="highlight">
Ignite UI for Angular Combo コンポーネントは、フィルタリング、項目の単一と複数選択、グループ化、ドロップダウン リストにカスタム値の追加などの機能をサポートします。
</p>

### デモ
<div class="divider--half"></div>
<div class="sample-container loading" style="height: 400px;">
    <iframe id="combo-main-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo-main" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-main-sample" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-main-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### 機能

Combo コンポーネントは以下の機能を公開します。
    - データ バインディング- ローカル データおよび[リモート データ](combo_remote.md)
    - [値バインディング](combo_features.md#value-binding)
    - [フィルタリング](combo_features.md#フィルタリング)
    - [グループ化](combo_features.md#グループ化)
    - [カスタム値](combo_features.md#カスタム値)
    - [テンプレート](combo_templates.md)
    - [テンプレート駆動フォーム](input_group.md)および[リアクティブ フォーム](input_group_reactive_forms.md) との統合

### 使用方法

Combo コンポーネントを初期化にするには、まず `IgxComboModule` を **app.module.ts**  ファイルにインポートします。

```typescript
import { IgxComboModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxComboModule,
        ...
    ]
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

#### データ値と表示プロパティ

コンボは複雑なデータ (オブジェクト) の配列にバインドされているため、選択したアイテムを処理するためにコントロールが使用するプロパティを指定する必要があります。コントロールは、[valueKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) と [displayKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#displaykey) の 2 つの `@Input` プロパティを公開します。

 - `valueKey` - **オプション、オブジェクト配列に推奨。** - コンボの選択のために保存されるデータ エントリのプロパティを指定します。`valueKey` が省略された場合、コンボ値はデータ エントリへの参照を使用します (選択は `combo.data` からのエントリの配列になります)。
 - `displayKey` - **オブジェクト配列に必須。** - アイテムのテキストに使用するプロパティを指定します。`displayKey` に値が指定されていない場合、コンボは指定された `valueKey` (存在する場合) を使用します。 

この例では、コンボに各都市の`名前`を表示し、コンボ値には各都市の `id` を格納します。格納するには、これらのプロパティをコンボの`displayKey` と `valueKey` にそれぞれ提供します。

```html
<igx-combo [data]="cities" displayKey="name" valueKey="id"></igx-combo>
```

> [!Note]
> データソースが単純なタイプ (`string[]`、`number[]` など）で構成されている場合、`valueKey` と `displayKey` を**指定しないでください**。

#### 双方向バインディング

Combo コンポーネントは、`[(ngModel)]` との双方向のデータ バインディングを完全にサポートし、[テンプレート駆動型](https://angular.io/guide/forms)および[リアクティブ型](https://angular.io/guide/reactive-forms)での使用もサポートします。コンボ選択には、双方向バインディングまたは[選択 API](#selection)を使用してアクセスできます。コンボの選択項目 (`valueKey` に基づく) と同じタイプの項目の配列を渡すことができ、いずれかが変更されるたびに、他方がそれに応じて更新されます。

以下の例は、cities の Sofia と London があらかじめ選択済みになります。コンボの選択におけるそれ以上の変更は、`selectedCities` 配列に反映されます。

```html
<igx-combo [data]="cities" [(ngModel)]="selectedCities" displayKey="name" valueKey="id"></igx-combo>
```

```typescript
export class MyCombo {
    public cities: { name: string, id: string }[] = [
                   { name: "Sofia", id: "BG01" }, { name: "London", id: "UK01" }, ...];
    public selectedCities: string[] = ["BG01", "UK01"];
}
```

<div class="sample-container loading" style="height: 550px;">
    <iframe id="combo-valuekey-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo-valuekey" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-valuekey-sample" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-valuekey-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

`valueKey` を指定しない場合も双方向バインディングを設定できます。たとえば、`valueKey` を省略すると、バインドされたモデルは次のようになります。

```typescript
export class MyCombo {
    public cities: { name: string, id: string }[] = [
                   { name: "Sofia", id: "BG01" }, { name: "London", id: "UK01" }, ...];
    public selectedCities: { name: string, id: string }[] = [this.cities[0], this.cities[1]];
}
```

<div class="sample-container loading" style="height: 600px;">
    <iframe id="combo-binding-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo-binding" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-binding-sample" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-binding-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

#### 選択 API

Combo コンポーネントは、コントロールの現在の選択状態を取得および操作できる API を公開します。 

コンボの選択を取得する 1 つの方法は、[selectedItems()]({environment:angularApiUrl}/classes/igxcombocomponent.html#selecteditems) メソッドを使用することです。指定された [valueKey](#data-value-and-display-properties) (存在する場合) に応じて、選択された項目に対応する値の配列を返します。

例では、`selectedItems` は選択された都市の `id` の配列を返します。

```typescript
export class MyCombo {
    ...
    public selectedItems: string[] = this.combo.selectedItems();
}
```

Using the selection API, you can also change the combo's selected items without user interaction with the control - via a button click, as a response to an Observable changing, etc. For example, we can implement a button that selects a set of cities, using the [selectItems()]({environment:angularApiUrl}/classes/igxcombocomponent.html#selectitems) method:

```html
<igx-combo [data]="cities" displayKey="name" valueKey="id"></igx-combo>
<button igxButton (click)="selectFavorites()">Select Favorites</button>
```

ボタンをクリックすると、都市 London と Sofia がコンボの選択に追加されます。

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

また、コンボは、選択が変更されるたびにイベントを発生させます - [onSelectionChange()]({environment:angularApiUrl}/classes/igxcombocomponent.html#onselectionchange)。発行されたイベント引数 [IComboSelectionChangeEventArgs]({environment:angularApiUrl}/interfaces/icomboselectionchangeeventargs.html) には、変更前の選択、現在の選択、追加または削除された項目に関する情報が含まれています。また、イベントをキャンセルして、新しいアイテムの配列で選択を更新できないようにすることもできます。

イベントへのバインドは、`igx-combo` タグの適切な `@Output` プロパティを介して実行できます。

```html
<igx-combo [data]="cities" displayKey="name" valueKey="id"
           (onSelectionChange)="handleCityChange($event)">
</igx-combo>
```

In the following example, when a city is added or removed from the selection, a handler that updates the statistic visualization is fired:

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

### 単一選択

デフォルトでは、Combo コントロールは複数選択を提供します。以下のコード例は、ハンドラーを `onSelectionChange` イベントにアタッチすることで、コンポーネントで単一選択を可能にする方法を示します。

```html
<igx-combo [data]="lData" (onSelectionChange)="singleSelection($event)"></igx-combo>
```

```typescript
public singleSelection(event: IComboSelectionChangeEventArgs) {
    if (event.added.length) {
        event.newSelection = event.added;
    }
}
```

<div class="sample-container loading" style="height: 400px;">
    <iframe id="combo-single-selection-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo-single-selection" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-single-selection-sample" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-single-selection-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### キーボード ナビゲーション

When igxCombo is closed and focused:
- `ArrowDown` or `Alt` + `ArrowDown` will open the combo drop down and will move focus to the search input.

When igxCombo is opened and search input is focused:
- `ArrowUp` or `Alt` + `ArrowUp` will close the combo drop down and will move focus to the closed combo.

- `ArrowDown` will move focus from the search input to the first list item. If the list is empty and custom values are enabled will move it to the Add new item button.
  
> [!NOTE]
> Any other key stroke will be handled by the input.

When igxCombo is opened and list item is focused:
- `ArrowDown` will move to the next list item. If the active item is the last one in the list and custom values are enabled, the focus will be moved to the Add item button.

- `ArrowUp` will move to the previous list item. If the active item is the first one in the list, the focus will be moved back to the search input.

- `End` will move to the last list item.

- `Home` will move to the first list item.

- `Space` will select/deselect the active list item.

- `Enter` will confirm the already selected items and will close the list.

- `Esc` will close the list.

When igxCombo is opened, allow custom values are enabled and add item button is focused:

- `Enter` will add a new item with valueKey and displayKey equal to the text in the search input and will select the new item.

- `ArrowUp` focus will be moved back to the last list item or if the list is empty, will be moved to the search input.


### スタイル設定

[Ignite UI for Angular テーマ](themes/index.md)を使用して、drop-down の外観を変更できます。はじめに、テーマ エンジンによって公開されている関数を使用するために、スタイル ファイルに `index` ファイルをインポートする必要があります。 

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

[igx-combo-theme]({environment:sassApiUrl}/index.html#function-igx-combo-theme) を拡張する新しいテーマを作成し、`$search-separator-border-color` パラメーターを受け取ります。 
```scss
$custom-combo-theme: igx-combo-theme(
    $search-separator-border-color: #1a5214
);
```

[IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) は、項目コンテナーとして [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) を内部使用します。 It also includes the [IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) and the [IgxCheckbox]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html) components. Creating new themes that extend theirs and scoping them under the respective classes will let you drill deeper and change the combo styles more: 

```scss
$custom-drop-down-theme: igx-drop-down-theme(
    $background-color: #d9f5d6,
    $header-text-color: #1a5214,
    $item-text-color: #1a5214,

    $focused-item-background: #72da67,
    $focused-item-text-color: #1a5214,
    $hover-item-background: #a0e698,
    $hover-item-text-color: #1a5214,

    $selected-item-background: #a0e698,
    $selected-item-text-color: #1a5214,
    $selected-hover-item-background: #72da67,
    $selected-hover-item-text-color: #1a5214,
    $selected-focus-item-background: #72da67,
    $selected-focus-item-text-color: #1a5214,
);

$custom-checkbox-theme: igx-checkbox-theme(
    $border-radius: 10px,
    $fill-color: #1a5214,
    $empty-color: #1a5214,
);
```

#### CSS 変数の使用 

最後にコンポーネントのテーマを含めます。

```scss
:host {
    @include igx-css-vars($custom-combo-theme);
    @include igx-css-vars($custom-drop-down-theme);
    @include igx-css-vars($custom-checkbox-theme);
}
```

#### テーマ オーバーライドの使用

Internet Explorer 11 などの古いブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチを用いる必要があります。 

コンポーネントが [Emulated](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
:host {
    ::ng-deep {
        @include igx-combo($custom-combo-theme);
        @include igx-drop-down($custom-drop-down-theme);
        @include igx-checkbox($custom-checkbox-theme);
    }
}
```

> [!NOTE]
> [IgxCombo]({environment:angularApiUrl}/classes/igxcombocomponent.html) は、[IgxOverlay](overlay_main.md) サービスを使用して、コンボ項目のリスト コンテナーを保持および表示します。スタイルを適切にスコープするには、[OverlaySetting.outlet]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet) を使用してください。詳細については、[IgxOverlay スタイル ガイド](overlay_styling.md)を確認してください。

#### デモ
<div class="sample-container loading" style="height:410px">
    <iframe id="combo-styling" src='{environment:demosBaseUrl}/lists/combo-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-styling" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-styling" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

### 既知の問題

- 選択した項目を表示するコンボ入力は編集できません。ただし、IE および FireFox のブラウザー仕様により、カーソルは表示されます。
- IEでは、Backspace は無効なコンボで動作します。
- コンボの高さを変更するための入力はありません。将来、[IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) コンポーネントは、カスタムのサイズ変更オプションを公開し、[IgxCombo]({environment:angularApiUrl}/classes/igxcombocomponent.html) は適切なスタイル設定と外観の統一に同じ機能を使用します。

> [!NOTE]
> `igxCombo` は内部で `igxForOf` ディレクティブを使用するため、すべての `igxForOf` の制限が Combo で有効です。詳細については、[igxForOf Known Issues](for_of.html#known-limitations) の既知の問題のセクションを参照してください。

### API まとめ
<div class="divider--half"></div>

* [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) 
* [IgxComboComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-combo-theme)

その他のコンポーネントおよびディレクティブ (またはそのいずれか) で使用した API:

* [IgxOverlay スタイル]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)
* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) 
* [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)

### その他のリソース
<div class="divider--half"></div>

* [コンボ機能](combo_features.md)
* [コンボ リモート バインディング](combo_remote.md)
* [コンボ テンプレート](combo_templates.md)
* [テンプレート駆動フォームの統合](input_group.md)
* [リアクティブ フォームの統合](input_group_reactive_forms.md)
* [カスケーディング](combo_cascading.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
