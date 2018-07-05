---
title: Combo コンポーネント
_description: igx-combo は、基本的な HTML input 要素、select 要素、および IgniteUI for Angular igx-drop-down コントロールの機能を組み合わされています。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント, Angular Combo コントロール
_language: ja
---

## Combo
<p class="highlight">
igx-combo コンポーネントは、基本 HTML input 要素、select 要素、および IgniteUI for Angular igx-drop-down コンポーネントの機能を組み合わされています。
Combo コンポーネントは、フィルタリング、複数の項目の選択、グループ化、ドロップダウン リストにカスタム値の追加などの機能を提供します。項目、ヘッダー、フッターなどのコンポーネントの領域をカスタマイズするためにカスタム テンプレートを設定できます。Combo コンポーネントは Template Driven および Reactive Forms と統合されます。
igx-combo はキーボード ナビゲーションを公開しており、アクセシビリティ規格にも対応しています。
ドロップダウン項目は仮想化されます。igx-combo が大量の項目を持つデータ ソースにバインドしてもスクロールはスムーズになります。
</p>
<div class="divider"></div>

### Combo デモ
<div class="sample-container loading" style="height: 540px;">
    <iframe id="combo-features-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/combo-features" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="combo-features-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

> [!WARNING]
> Ignite UI for Angular コンポーネントをプロジェクトに追加する前に、必要なすべての依存関係を構成し、プロジェクトのセットアップが正しく完了したことを確認してください。[**インストール**](https://jp.infragistics.com/products/ignite-ui-angular/getting-started#installation) のトピックで手順を確認できます。

## 使用方法
`IgxComboComponent` はリストの項目を検索して選択する機能があります。コンボは内部に項目コンテナーとして ` を使用します。Ignite UI for Angular Combo を初期化する前に **IgxComboModule** を **app.module.ts** ファイルにインポートします。

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

テンプレートにコンボを追加します。

```html
<igx-combo [data]="localData" [valueKey]="'ProductID'" [displayKey]="'ProductName'"></igx-combo>
```

以下は結果です。
<div class="sample-container loading" style="height: 540px;">
    <iframe id="combo-features-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/combo-features" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="combo-features-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

## 機能

### データ バインディング

以下は、`valueKey` および `displayKey`　を定義してローカル データ ソースにバインドされた `igx-combo` の基本的な使用方法です。

```html
<igx-combo [data]="localData" [valueKey]="'ProductID'" [displayKey]="'ProductName'"></igx-combo>
```

> 注: `displayKey` が設定されない場合、`valueKey` 設定が使用されます。


リモート バインディング、`valueKey` および `displayKey` の定義、`onDataPreLoad` の公開により、コンボにリモート データの新規データを読み込めるようになります。以下の例でこの機能を紹介します。

```html
<igx-combo [data]="remoteData | async" (onDataPreLoad)="dataLoading($event)" [valueKey]="'ProductID'" [displayKey]="'ProductName'" ></igx-combo>
```

```typescript
public ngOnInit() {
    this.remoteData = this.remoteService.remoteData;
}

public ngAfterViewInit() {
    this.remoteService.getData(this.combo.virtualizationState, (data) => {
        this.combo.totalItemCount = data.count;
    });
}

public dataLoading(evt) {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }

        this.prevRequest = this.remoteService.getData(this.combo.virtualizationState, () => {
            this.cdr.detectChanges();
            this.combo.triggerCheck();
        });
    }
```

> 注: コンボをリモート データにバインドするには、サーバーからデータ部分を取得するサービスが必要です。
コンボは、コンボの状態 (最初のインデックスおよび読み込む項目の数) を指定する `virtualizationState` プロパティを公開します。
サービスが `totalItemCount` プロパティを使用してサーバーにある項目の数をコンボに通知する必要があります。

### 値バインディング

TwoWay データ バインディングを使用するには、 `ngModel` を以下のように使用します。

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

### フィルタリング
コンボのフィルタリング機能はデフォルトで有効にされます。ただし、以下のコードによって無効にできます。

```html
<igx-combo [filterable]="false"></igx-combo>
```

<div class="divider--half"></div>

<div class="divider--half"></div>

### カスタム値
カスタム値の有効化は、コンボのインターフェイスからリストに含まらない項目の追加を許可します。

```html
<igx-combo [allowCustomValues]="true"></igx-combo>
```

<div class="divider--half"></div>

### 無効化
以下のコードによってコンボを無効にできます。

```html
<igx-combo [disabled]="true"></igx-combo>
```

<div class="divider--half"></div>

### グループ化
コンボの groupKey オプションを定義すると、そのキーに基づいて項目をグループ化します。

```html
<igx-combo [groupKey]="'primaryKey'"></igx-combo>
```

<div class="divider--half"></div>

### テンプレート
igx-combo コンポーネントの項目、ヘッダー、フッター、空のリスト、および追加ボタンなどの領域にカスタム テンプレートを定義できます。以下のテンプレートの定義で、以下の定義済み名前を使用して参照します。

項目テンプレートの定義:

```html
<igx-combo>
	<ng-template #itemTemplate let-display let-key="valueKey">
		<div class="item">
			<span class="state">State: {{ display[key] }}</span>
			<span class="region">Region: {{ display.region }}</span>
		</div>
	</ng-template>
</igx-combo>
```

ヘッダー テンプレートの定義:

```html
<igx-combo>
    <ng-template #headerTemplate>
        <div class="header-class">Custom header</div>
        <img src=""/>
    </ng-template>
</igx-combo>
```

ヘッダー テンプレートの定義:

```html
<igx-combo>
    <ng-template #footerTemplate>
        <div class="footer-class">Custom footer</div>
        <img src=""/>
    </ng-template>
</igx-combo>
```

空のテンプレートの定義:

```html
<igx-combo>
    <ng-template #emptyTemplate>
        <span>List is empty</div>
    </ng-template>
</igx-combo>
```

追加のテンプレートの定義:

```html
<igx-combo>
    <ng-template #addItemTemplate>
        <span>Add town</span>
    </ng-template>
</igx-combo>
```
<div class="divider--half"></div>

### Template Driven および Reactive Forms との統合

Template Forms:

<div class="sample-container loading" style="height: 540px;">
    <iframe id="input-group-sample-6-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/input-group-sample-6" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="input-group-sample-6-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>


Reactive Forms:

<div class="sample-container loading" style="height: 540px;">
    <iframe id="reactive-forms-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/reactive-forms" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="reactive-forms-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

## カスケード シナリオ

以下のサンプルはカスケードする igx-drop-down および igx-combo コンポーネントを紹介します。

<div class="sample-container loading" style="height: 540px;">
    <iframe id="cascading-combos-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/cascading-combos" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="cascading-combos-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>


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
|  `valueKey`              | コンボの値データ ソース プロパティ                              | string                      |
|  `displayKey`            | コンボの表示データ ソース プロパティ                            | string                      |
|  `groupKey`              | コンボの項目グループ                                      | string                      |
|  `virtualizationState`   | 仮想化されたデータの現在の状態を定義します。`startIndex` および `chunkSize` を含みます。 | `IForOfState`                |
|  `totalItemCount`        | リモート サービスを使用する場合、仮想データ項目の合計数。              | number                      |
|  `width `                | コンボの幅を定義します。                                    | string                      |
|  `height`                | コンボの高さを定義します。                                   | string                      |
|  `itemsMaxHeight `       | ドロップダウンの高さを定義します。                               | string                      |
|  `itemsMaxWidth `        | ドロップダウンの幅を定義します。                                | string                      |
|  `itemHeight `           | ドロップダウン項目の高さを定義します。                            | string                      |
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
| `dropDownOpening`   | ドロップダウンが開かれる前に発生されます。                                   | false        | { event: Event }                        |
| `dropDownOpened`    | ドロップダウンが開かれた後に発生されます。                                   | false        | { event: Event }                        |
| `dropDownClosing`   | ドロップダウンが閉じられる前に発生されます。                                   | false        | { event: Event }                        |
| `dropDownClosed`    | ドロップダウンが閉じられた後に発生されます。                                    | false        | { event: Event }                        |

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
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)