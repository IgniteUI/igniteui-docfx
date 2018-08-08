---
title: Combo 機能
_description: Combo コントロールは、データと値のバインディング、カスタム値、フィルタリング、グループ化など複数の機能を公開します。 
_keywords: Ignite UI for Angular, UI コントロール, Angular widgets, web ウィジェット, UI ウィジェット, Angular, Native Angular コンポーネント スイート, Native Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント, Angular 機能, Angular Combo 機能, Angular Combo データ バインディング, Angular Combo 値バインディング, Angular Combo データ フィルタリング, Angular Combo グループ化, Angular Combo カスタム値
_language: ja
---

## Combo 機能
<p class="highlight">
Combo コントロールは、データと値のバインディング、カスタム値、フィルタリング、グループ化など複数の機能を公開します。 
</p>
<div class="divider"></div>

### デモ
以下のデモは、ランタイムで有効または無効にできるいくつかのコンボ機能を確認できます。

<div class="sample-container loading" style="height: 440px;">
    <iframe id="combo-features-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/combo-features" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="combo-features-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### 使用方法
Ignite UI for Angular Combo を初期化する前に、**IgxComboModule** を **app.module.ts** ファイルにインポートします。

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
 デモでは、`igx-switch` コンポーネントを使用して `igx-combo` プロパティ値を切り替えます。グループ化は、`groupKey` を対応するデータソース エンティティに設定、または空文字列に設定して有効または無効にできます。
```html
<div class="combo-container">
    <igx-combo #combo [data]="lData" [displayKey]="'field'" [valueKey]="'field'"
        [allowCustomValues]="customValues"
        [filterable]="filterable"
        [disabled]="disabled">
    </igx-combo>
</div>
<div class="switch-container">
    <igx-switch [(ngModel)]="filterable">Enable Filtering</igx-switch><br />
    <igx-switch [(ngModel)]="customValues">Allow Custom Values</igx-switch><br />
    <igx-switch (change)="enableGroups($event)">Enable Grouping</igx-switch><br />
    <igx-switch [(ngModel)]="disabled">Disabled</igx-switch>
</div>
```

```typescript
    @ViewChild("combo", { read: IgxComboComponent }) public combo: IgxComboComponent;

    public filterable = true;
    public customValues = true;
    public disabled = false;

    public enableGroups(event) {
        this.combo.groupKey = event.checked ? "region" : "";
    }
```

## データ バインディング

ローカル データソースへバインドする `igx-combo` の基本的な使用は、`valueKey` と `displayKey` を定義します。

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

> 注: `displayKey` が省略された場合、`valueKey` エンティティが項目テキストとして使用されます。


詳細については、[`igx-combo` をリモートデータをバインド](combo_remote.md)を参照してください。

## 値バインディング

双方データ バインディングは、以下のように `ngModel` を使用します。 

```html
<igx-combo #combo [(ngModel)]="values"></igx-combo>
```

```typescript
@ViewChild('combo', { read: IgxComboComponent }) public combo: IgxComboComponent;
get values() {
    return this.combo.selectedItems();
}
set values(newValues: Array<any>) {
    this.combo.selectItems(newValues);
}
```

<div class="divider--half"></div>

## フィルタリング
コンボのフィルタリングがデフォルトで有効になります。以下のコードで無効にできます。

```html
<igx-combo [filterable]="false"></igx-combo>
```

<div class="divider--half"></div>

<div class="divider--half"></div>

## カスタム値
カスタム値が有効な場合、コンボ UI で項目を追加できます。

```html
<igx-combo [allowCustomValues]="true"></igx-combo>
```

<div class="divider--half"></div>

## 無効
以下のコードでコンボを無効にできます。

```html
<igx-combo [disabled]="true"></igx-combo>
```

<div class="divider--half"></div>

## グループ化
コンボの groupKey オプションを定義すると、キーに基づいて項目をグループ化します。

```html
<igx-combo [groupKey]="'primaryKey'"></igx-combo>
```

<div class="divider--half"></div>

## API

### 入力
<div class="divider--half"></div>

| 名前|説明|型                        |
|--------------------------|---------------------------------------------------|-----------------------------|
|  id|combo id                                          |string                      |
|  `data`                  |combo data source                                 |any                         |
|  `value`                 |combo value                                       |string                      |
|  `allowCustomValue`      |enables/disables combo custom value                |boolean                     |
|  `filterable`            |コンボのドロップダウンのフィルタリングを有効/無効にします。デフォルトは有効です。|boolean                     |
|  `valueKey`              |コンボ値データソース プロパティ|string                      |
|  `displayKey`            |コンボ表示データソース プロパティ|string                      |
|  `groupKey`              |コンボ項目グループ|string                      |
|  `virtualizationState`   |仮想化データの現在の状態を定義します。`startIndex` と `chunkSize` を含みます。|`IForOfState`               |
|  `width `                |コンボの幅を定義します。|string                      |
|  `height`                |コンボの高さを定義します。|string                      |
|  `itemsMaxHeight `       |ドロップダウンの最大の高さを定義します。|number                      |
|  `itemsWidth `           |ドロップダウンの幅を定義します。|string                      |
|  `itemHeight `           |ドロップダウンの項目の高さを定義します。|number                      |
|  `placeholder `          |"empty value" のテキストを定義します。|string                      |
|  `searchPlaceholder `    |検索入力のプレースホルダー テキストを定義します。|string                      |
|  `collapsed`             |ドロップダウン状態を取得します。|boolean                     |
|  `disabled`              |コントロールがアクティブかどうかを定義します。|boolean                     |
|  `ariaLabelledBy`        |コンボに関連するラベル ID を定義します。|string                      |
|  `type`                  |コンボの型 ("line"、"box"、"border"、"search") を定義します。|string                      |
|  `valid`                 |フォームで使用時のコントロールが有効化どうかを取得します。|boolean                     |


### 出力
<div class="divider--half"></div>

| 名前|説明|キャンセル可能|パラメーター                              |
|------------------   |-------------------------------------------------------------------------|------------- |-----------------------------------------|
| `onSelectionChange` |選択を完了する前にアイテム選択が変更されるときに発生されます。|true         |{ oldSelection: `Array<any>`, newSelection: `Array<any>`, event: Event } |
| `onSearchInput`     |検索入力のイベントがトリガーされたときに発生されます。|false        |{ searchValue: `string` }               |
| `onAddition`        |項目がデータ コレクションに追加されているときに発生されます。|false        |{ oldCollection: `Array<any>`, addedItem: `<any>`, newCollection: `Array<any>` }|
| `onDataPreLoad`     |新しいデータが可視化から読み込まれたときに発生されます。|false|{ event: Event }                        |
| `onOpening`   |ドロップダウンが開かれる前に発生されます。|false|{ event: Event }                        |
| `onOpened`    |ドロップダウンが開かれた後に発生されます。|false|{ event: Event }                        |
| `onClosing`   |ドロップダウンが閉じられる前に発生されます。|false|{ event: Event }                        |
| `onClosed`    |ドロップダウンが閉じられた後に発生されます。|false|{ event: Event }                        |

### メソッド
<div class="divider--half"></div>

| 名前|説明|戻り型|パラメーター                  |
|----------------- |-----------------------------|----------------------|-----------------------------|
| `open`           |Opens drop down             |`void`               |なし                      |
| `close`          |Closes drop down            |`void`               |`None`                      |
| `toggle`         |ドロップダウンを切り替えます。|`void`               |`None`                      |
| `selectedItems`  |現在の選択状態を取得します。|`Array<any>`         |`None`                      |
| `selectItems`    |定義済みの項目を選択します。|`void`               |項目: `Array<any>`, clearCurrentSelection: `boolean` |
| `deselectItems`  |定義済みの項目の選択を解除します。|`void`               |項目: `Array<any>`         |
| `selectAllItems` |Select all (filtered) items |`void`               |ignoreFilter?: `boolean` - `true` の場合、**すべて**の値を選択します。 |
| `deselectAllItems` |フィルター済みのすべての項目の選択を解除します。|`void`           |ignoreFilter?: `boolean` - `true` の場合、**すべて**の値の選択を解除します。 |

## その他のリソース
<div class="divider--half"></div>

* [コンボ リモート バインディング](combo_remote.md)
* [コンボ テンプレート](combo_templates.md)
* [テンプレート駆動フォームの統合](input_group.md)
* [Reactive Forms Integration](input_group_reactive_forms.md)
* [Cascading Scenario](combo_cascading.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
