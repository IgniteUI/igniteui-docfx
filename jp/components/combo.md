---
title: Combo コンポーネント
_description: igx-combo は、基本的な HTML input 要素、select 要素、および IgniteUI for Angular igx-drop-down コントロールの機能を組み合わされています。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント, Angular Combo コントロール
_language: ja
---

## Combo
<p class="highlight">
igx-combo コンポーネントは、基本的な HTML `input`、選択機能、IgniteUI for Angular igx-drop-down を組み合わせたコンポーネントです。<br />
Combo コンポーネントは、**[フィルタリング](combo_features.md#フィルタリング)**、項目の**複数選択**、**[グループ化](combo_features.md#グループ化)**、ドロップダウン リストに**[カスタム値](combo_features.md#カスタム値)** の追加などの機能をサポートします。<br />
**[カスタム テンプレート](combo_templates.md)** は、項目、ヘッダー、フッターなどコンポーネントの異なる領域をカスタマイズするために提供されます。<br />
`igx-combo` コンポーネントは、**[テンプレート駆動フォーム](input_group.md)** と **[Reactive フォーム](input_group_reactive_forms.md)** を統合したコンポーネントです。<br />
`igx-combo` は、直感的な **キーボード ナビゲーション**を公開し、**アクセシビリティ規格**に準拠しています。<br />
ドロップダウン項目を**仮想化*することにより、igx-combo を大量の項目を持つデータ ソースにバインドした場合もスムーズにスクロールを行うことができます。
</p>
<div class="divider"></div>

### デモ
<div class="sample-container loading" style="height: 400px;">
    <iframe id="combo-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/combo" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="combo-sample" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>
<div class="divider--half"></div>

> [!WARNING]
> Ignite UI for Angular コンポーネントをプロジェクトに追加する前に、必要なすべての依存関係を構成し、プロジェクトのセットアップが正しく完了したことを確認してください。詳細については、[**インストール**](https://jp.infragistics.com/products/ignite-ui-angular/getting-started#installation) トピックをご確認ください。

### 使用方法
`IgxComboComponent` は、リストから項目の検索および選択が可能です。コンボは、項目コンテナーとして `IgxDropDownComponent` を内部使用します。Ignite UI for Angular Combo で作業を開始する前に **IgxComboModule** を **app.module.ts** ファイルにインポートします。

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

次にテンプレートで `igx-combo` をデータにバインドし、localData データソースのエントリに対応する `valueKey` と `displayKey` を定義します。

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
> 注: `displayKey` が省略された場合、代わりに `valueKey` エンティティが項目テキストとして使用されます。

## 機能
Combo コンポーネントは以下の機能を公開します。
    - データ バインディング - ローカル データと [リモート データ](combo_remote.md)
    - [値のバインディング](combo_features.md#value-binding)
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
- Setting combo's `height` option will currently not affect the component height. Follow [this issue](https://github.com/IgniteUI/igniteui-angular/issues/2410), in our Ignite UI for Angular repository, for further updates.

## その他のリソース

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