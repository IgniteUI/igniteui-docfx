---
title: Combo コンポーネント
_description: igx-combo は、基本的な HTML input 要素、select 要素、および IgniteUI for Angular igx-drop-down コントロールの機能を組み合わされています。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント, Angular Combo コントロール
_language: ja
---

## Combo
<p class="highlight">
The igx-combo component provides a powerful input, combining the features of the basic HTML `input`, select and the IgniteUI for Angular `igx-drop-down` components.<br />
The combo component provides easy **[filtering](combo_features.md#features)** and **multiple selection** of items, **[grouping](combo_features.md#grouping)** and adding **[custom values](combo_features.md#custom-values)** to the dropdown list.<br />
**[Custom templates](combo_templates.md)** could be provided in order to customize different areas of the components, such as items, header, footer, etc.<br />
The `igx-combo` component is integrated with the **[Template Driven](input_group_reactive_forms.md)** and **[Reactive](input_group_reactive_forms.md)** Forms.<br />
The `igx-combo` exposes intuitive **keyboard navigation** and it is **accessibility compliant**.<br />
Drop Down items are **virtualized**, which guarantees smooth work, even if the `igx-combo` is bound to data source with a lot of items.
</p>
<div class="divider"></div>

### Demo
<div class="sample-container loading" style="height: 400px;">
    <iframe id="combo-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/combo" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="combo-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!WARNING]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

### Usage
The `IgxComboComponent` allows you to search and select items from the list. The combo uses the `IgxDropDownComponent` internally as an item container. To get started with the Ignite UI for Angular Combo, let's first import the **IgxComboModule** in our **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxComboModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxComboModule],
    ...
})
export class AppModule {}
```

Then in the template bind the `igx-combo` with some data and define `valueKey` and `displayKey` corresponding to entities from the `localData` data source:

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
> Note: If `displayKey` is omitted then `valueKey` entity will instead be used as item text.
## 機能

## Features
Combo control exposes the following features:
    - Data Binding - local data and [remote data](combo_remote.md)
    - [Value Binding](combo_features.md#value-binding)
    - [Filtering](combo_features.md#filtering)
    - [Grouping](combo_features.md#grouping)
    - [Custom values](combo_features.md#custom-values)
    - [Templates](combo_templates.md)
    - Integration with [Template Driven](input_group.md) and [Reactive](input_group_reactive_forms.md) Forms

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

## API

### 入力
<div class="divider--half"></div>

| 説明                     　| 説明                                   　　　　　　　　　   | 型　　　                       |
|--------------------------|---------------------------------------------------|-----------------------------|
|  `id`                    | コンボ id                                          | string                      |
|  `data`                  | コンボのデータ ソース                                      | any                        |
|  `value`                 | コンボの値                                            | string                      |
|  `allowCustomValue`      | コンボのカスタム値を有効/無効にします。                          | boolean                     |
|  `filterable`            | コンボのドロップダウンのフィルタリングを有効/無効にします。デフォルトは有効です。                 | boolean                     |
|  `valueKey`              | コンボの値データ ソース プロパティ                              | string                      |
|  `displayKey`            | コンボの表示データ ソース プロパティ                            | string                      |
|  `groupKey`              | コンボの項目グループ                                      | string                      |
|  `virtualizationState`   | 仮想化されたデータの現在の状態を定義します。`startIndex` および `chunkSize` を含みます。 | `IForOfState`                |
|  `width `                | コンボの幅を定義します。                                    | string                      |
|  `height`                | コンボの高さを定義します。                                   | string                      |
|  `itemsMaxHeight `       | ドロップダウンの高さを定義します。                               | number                      |
|  `itemsWidth `           | ドロップダウンの幅を定義します。                                | string                      |
|  `itemHeight `           | ドロップダウン項目の高さを定義します。                            | number                      |
|  `placeholder `          | 空の値のテキストを定義します。                                | string                      |
|  `searchPlaceholder `    | 検索入力のプレースホルダー テキストを定義します。                    | string                      |
|  `collapsed`             | ドロップダウン状態を取得します。                                | boolean                     |
|  `disabled`              | コントロールがアクティブかどうかを定義します。                         | boolean                     |
|  `ariaLabelledBy`        | コンボに相対するラベル ID を定義します。                         | string                     |
|  `type`                  | コンボの型 ("line"、"box"、"border"、または "search" ) を定義します。| string                   |
|  `valid`                 | フォームで使用時のコントロールが有効化どうかを取得します。     | boolean                     |

### 出力
<div class="divider--half"></div>

| 名前                | 説明                                                             | キャンセル可能   | パラメーター                             |
|------------------   |-------------------------------------------------------------------------|------------- |-----------------------------------------|
| `onSelectionChange` | 選択を完了する前に項目選択が変更されるときに発生されます。 | true         | { oldSelection: `Array<any>`, newSelection: `Array<any>`, event: Event } |
| `onSearchInput`     | 検索入力の input イベントがトリガーされたときに発生されます。             | false        | { searchValue: `string` }               |
| `onAddition`        | 項目がデータ コレクションに追加されるときに発生されます。              | false        | { oldCollection: `Array<any>`, addedItem: `<any>`, newCollection: `Array<any>` }|
| `onDataPreLoad`     | データの新しい部分が仮想化から読み込んだときに発生されます。        | false        | { event: Event }                        |
| `onOpening`   | ドロップダウンが開かれる前に発生されます。                                   | false        | { event: Event }                        |
| `onOpened`    | ドロップダウンが開かれた後に発生されます。                                   | false        | { event: Event }                        |
| `onClosing`   | ドロップダウンが閉じられる前に発生されます。                                   | false        | { event: Event }                        |
| `onClosed`    | ドロップダウンが閉じられた後に発生されます。                                    | false        | { event: Event }                        |

### メソッド
<div class="divider--half"></div>

| 名前             | 説明                 | 戻り型          | パラメーター                  |
|----------------- |-----------------------------|----------------------|-----------------------------|
| `open`           | ドロップダウンを開きます。             | `void`               | `None`                      |
| `close`          | ドロップダウンを閉じます。            | `void`               | `None`                      |
| `toggle`         | ドロップダウンを切り替えます。         | `void`               | `None`                      |
| `selectedItems`  | 現在の選択状態を取得します。 | `Array<any>`         | `None`                      |
| `selectItems`    | 定義した項目を選択します。        | `void`               | items: `Array<any>`, clearCurrentSelection: `boolean` |
| `deselectItems`  | 定義した項目を選択解除します。      | `void`               | items: `Array<any>`         |
| `selectAllItems` | フィルターされた項目をすべて選択します。 | `void`               | ignoreFilter?: `boolean` - `true` の場合、**すべて** の値を選択します。 |
| `deselectAllItems` | フィルターされた項目をすべて選択解除します。 | `void`           | ignoreFilter?: `boolean` - `true` の場合、**すべて** の値を選択解除します。 |

## 既知の問題

- 選択した項目を表示するコンボ入力は編集可能ではありませんが、IE および Firefox でカーソルが表示
- IE で無効なコンボで BackSpace キーが使用できる問題。

## その他のリソース

<div class="divider--half"></div>

* [Combo Remote Binding](combo_remote.md)
* [Combo Features](combo_features.md)
* [Combo Templates](combo_templates.md)
* [Template Driven Forms Integration](input_group.md)
* [Reactive Forms Integration](input_group_reactive_forms.md)
* [Cascading Scenario](combo_cascading.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)