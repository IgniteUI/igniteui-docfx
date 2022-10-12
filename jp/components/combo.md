---
title: Angular Combobox コンポーネント | データ バインディング ComboBox | インフラジスティックス
_description: Ignite UI for Angular ComboBox は、基本的な HTML 入力、選択、フィルタリング、およびカスタム ドロップダウン リストの機能を組み合わせた強力な入力を提供します。無料でお試しください。
_keywords: angular combobox, ignite ui for angular, インフラジスティックス
_language: ja
---

# Angular ComboBox (コンボボックス) の概要

Angular ComboBox コンポーネントは、編集可能な機能を提供するドロップダウン リストを表し、ユーザーが事前定義されたリストからオプションを選択できるようにします。Ignite UI for Angular ComboBox コンポーネントは、フィルタリング機能、項目の選択、グループ化、ドロップダウン リストにカスタム値の追加などの機能をサポートします。HTML select タグの代わりに使用でき、データ バインディング (ローカルおよびリモート)、フィルタリング、グループ化、カスタム テンプレート、カスタム値など、すぐに使用できる機能がいくつかあります。


## Angular ComboBox の例

この Angular ComboBox の例では、ユーザーが項目をフィルターし、提供されたデータを使用して選択を実行する方法を表します。さらに、ComboBox は、キーボード ナビゲーションとカスタム スタイル設定機能を公開します。

<div class="divider--half"></div>

<code-view style="height: 400px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/combo-main" alt="Angular ComboBox の例">
</code-view>


## Angular ComboBox 機能

コンボボックス コントロールは以下の機能を公開します。
    - データ バインディング- ローカル データおよび[リモート データ](combo-remote.md)
    - [値バインディング](combo-features.md#データ-バインディング)
    - [フィルタリング](combo-features.md#フィルタリング)
    - [グループ化](combo-features.md#グループ化)
    - [カスタム値](combo-features.md#カスタム値)
    - [テンプレート](combo-templates.md)
    - [テンプレート駆動フォーム](input-group.md)および[リアクティブ フォーム](angular-reactive-form-validation.md)との統合

## 使用方法

ComboBox コンポーネントを初期化にするには、まず `IgxComboModule` を **app.module.ts**  ファイルにインポートします。

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

これで、コンボボックスの city の配列にバインドされました。

### データ値と表示プロパティ

コンボボックスは複雑なデータ (オブジェクト) の配列にバインドされているため、選択したアイテムを処理するためにコントロールが使用するプロパティを指定する必要があります。コントロールは、[valueKey]({environment:angularApiUrl}/classes/IgxComboComponent.html#valueKey) と [displayKey]({environment:angularApiUrl}/classes/IgxComboComponent.html#displayKey) の 2 つの `@Input` プロパティを公開します。

 - `valueKey` - **オプション、オブジェクト配列に推奨。** - コンボボックスの選択のために保存されるデータ エントリのプロパティを指定します。`valueKey` が省略された場合、コンボボックス値はデータ エントリへの参照を使用します (選択は `igxCombo.data` からのエントリの配列になります)。
 - `displayKey` - **オブジェクト配列に必須。** - アイテムのテキストに使用するプロパティを指定します。`displayKey` に値が指定されていない場合、コンボボックスは指定された `valueKey` (存在する場合) を使用します。

この例では、コンボボックスに各都市の`名前`を表示し、コンボボックス値には各都市の `id` を格納します。格納するには、これらのプロパティをコンボボックスの`displayKey` と `valueKey` にそれぞれ提供します。

```html
<igx-combo [data]="cities" displayKey="name" valueKey="id"></igx-combo>
```

> [!Note]
> データソースが単純なタイプ (`string[]`、`number[]` など) で構成されている場合、`valueKey` と `displayKey` を**指定しないでください**。

### 双方向バインディング

コンボボックス コンポーネントは、`[(ngModel)]` との双方向のデータ バインディングを完全にサポートし、[テンプレート駆動型](https://angular.io/guide/forms)および[リアクティブ型](https://angular.io/guide/reactive-forms)での使用もサポートします。コンボボックス選択には、双方向バインディングまたは[選択 API](#選択-api)を使用してアクセスできます。コンボボックスの選択項目 (`valueKey` に基づく) と同じタイプの項目の配列を渡すことができ、いずれかが変更されるたびに、他方がそれに応じて更新されます。

以下の例は、cities の Sofia と London があらかじめ選択済みになります。コンボボックスの選択におけるそれ以上の変更は、`selectedCities` 配列に反映されます。

```html
<igx-combo [data]="cities" [(ngModel)]="selectedCities" displayKey="name" valueKey="id"></igx-combo>
```

```typescript
export class MyCombo {
    public cities: { name: string, id: string }[] = [
                   { name: 'Sofia', id: 'BG01' }, { name: 'London', id: 'UK01' }, ...];
    public selectedCities: string[] = ['BG01', 'UK01'];
}
```


<code-view style="height: 550px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/combo-valuekey" >
</code-view>


`valueKey` を指定しない場合も双方向バインディングを設定できます。たとえば、`valueKey` を省略すると、バインドされたモデルは次のようになります。

```typescript
export class MyCombo {
    public cities: { name: string, id: string }[] = [
                   { name: 'Sofia', id: 'BG01' }, { name: 'London', id: 'UK01' }, ...];
    public selectedCities: { name: string, id: string }[] = [this.cities[0], this.cities[1]];
}
```


<code-view style="height: 600px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/combo-binding" >
</code-view>


### 選択 API

コンボボックス コンポーネントは、コントロールの現在の選択状態を取得および操作できる API を公開します。

コンボボックスの選択を取得する 1 つの方法は、[selection]({environment:angularApiUrl}/classes/igxcombocomponent.html#selection) プロパティを使用することです。指定された [valueKey](#data-value-and-display-properties) (存在する場合) に応じて、選択された項目に対応する値の配列を返します。

例では、`selection` は選択された都市の `id` の配列を返します。

```typescript
export class MyCombo {
    ...
    public selection: string[] = this.combo.selection;
}
```

選択 API を使用すると、コントロールのユーザー操作なしで、コンボボックスの選択された項目を変更できます - ボタン クリックを介して、Observable 変更への応答としてなどです。たとえば、[select()]({environment:angularApiUrl}/classes/igxcombocomponent.html#select) メソッドを使用して複数の都市を選択するボタンを実装できます。

```html
<igx-combo [data]="cities" displayKey="name" valueKey="id"></igx-combo>
<button igxButton (click)="selectFavorites()">Select Favorites</button>
```

ボタンをクリックすると、都市 London と Sofia がコンボボックスの選択に追加されます。

```typescript
export class MyExampleCombo {
    @ViewChild(IgxComboComponent, { read: IgxComboComponent, static: true })
    public combo: IgxComboComponent;
    ...
    selectFavorites(): void {
        this.combo.select(['UK01', 'BG01']);
    }
}
```

また、コンボボックスは、選択が変更されるたびにイベントを発生させます - [selectionChanging()]({environment:angularApiUrl}/classes/IgxComboComponent.html#selectionChanging)。発行されたイベント引数 [IComboSelectionChangingEventArgs]({environment:angularApiUrl}/interfaces/icomboselectionchangingeventargs.html) には、変更前の選択、現在の選択、追加または削除された項目に関する情報が含まれています。また、イベントをキャンセルして、新しいアイテムの配列で選択を更新できないようにすることもできます。

イベントへのバインドは、`igx-combo` タグの適切な `@Output` プロパティを介して実行できます。

```html
<igx-combo [data]="cities" displayKey="name" valueKey="id"
           (selectionChanging)="handleCityChange($event)">
</igx-combo>
```

以下の例では、都市が選択に追加または選択から削除されると、統計の可視化を更新するハンドラーが発生します。

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

## 単一選択

デフォルトでは、Combo コントロールは複数選択を提供します。以下のスニペットは、ハンドラーを `selectionChanging` イベントにアタッチすることで、コンポーネントで単一選択を可能にする方法を示します。

```html
<igx-combo [data]="lData" (selectionChanging)="singleSelection($event)"></igx-combo>
```

```typescript
public singleSelection(event: IComboSelectionChangeEventArgs) {
    if (event.added.length) {
        event.newSelection = event.added;
    }
}
```

> 注: igxCombo を変更する代わりに、[igxSimpleCombo](simple-combo.md) を使用することをお勧めします (上記を参照)。

<div class="divider--half"></div>

## キーボード ナビゲーション

コンボボックスを閉じてフォーカスされている場合:
- `下矢印`または `Alt` キー + `下矢印`はコンボボックス ドロップダウンを開き、検索入力にフォーカスを移動します。

コンボボックスを開いて検索入力にフォーカスがある場合:
- `上矢印`または `Alt` キー + `上矢印`はコンボボックス ドロップダウンを閉じ、フォーカスを閉じたコンボボックスに移動します。

- `下矢印`は、フォーカスを検索入力から最初のリスト項目に移動します。リストが空でカスタム値が有効な場合、新しい項目の追加ボタンに移動します。

> [!NOTE]
> その他のキー ストロークは入力によって処理されます。

コンボボックスを開いてリスト項目にフォーカスがある場合:
- `下矢印`は次のリスト項目に移動します。アクティブな項目がリストの最後の項目で、カスタム値が有効な場合、フォーカスは [項目の追加] ボタンに移動します。

- `上矢印`は前のリスト項目に移動します。アクティブな項目がリストの最初の項目である場合、フォーカスは検索入力に戻ります。

- `End` キーは最後のリスト項目に移動します。

- `Home` キーは最初のリスト項目に移動します。

- `Space` キーはアクティブなリスト項目を選択/選択解除します。

- `Enter` キーはすでに選択した項目を確定し、リストを閉じます。

- `Esc` キーはリストを閉じます。

コンボボックスを開くと、カスタム値が有効になり、項目の追加ボタンがフォーカスされます。

- `Enter` キーは、検索入力のテキストと等しい `valueKey` と `displayKey` を持つ新しい項目を追加し、その項目を選択します。

- `上矢印` - フォーカスは最後のリスト項目に戻るか、あるいはリストが空の場合、検索入力に移動します。


## Angular ComboBox スタイル設定

[Ignite UI for Angular テーマ](themes/index.md)を使用して、コンボボックスの外観を変更できます。はじめに、テーマ エンジンによって公開されている関数を使用するために、スタイル ファイルに `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

[combo-theme]({environment:sassApiUrl}/index.html#function-combo-theme) を拡張する新しいテーマを作成し、`$search-separator-border-color` パラメーターを受け取ります。
```scss
$custom-combo-theme: combo-theme(
    $search-separator-border-color: #1a5214
);
```

[IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) は、項目コンテナーとして [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) を内部使用します。[IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) および [IgxCheckbox]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html) コンポーネントも含まれます。これらのコンポーネントのテーマを拡張する新しいテーマを作成し、それぞれのクラスの下にスコープすることで、コンボボックスのスタイル設定を変更できます。

```scss
$custom-drop-down-theme: drop-down-theme(
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

$custom-checkbox-theme: checkbox-theme(
    $border-radius: 10px,
    $fill-color: #1a5214,
    $empty-color: #1a5214,
);
```

最後にコンポーネントのテーマを含めます。

```scss
:host {
    @include css-vars($custom-combo-theme);
    @include css-vars($custom-drop-down-theme);
    @include css-vars($custom-checkbox-theme);
}
```

> [!NOTE]
> [IgxCombo]({environment:angularApiUrl}/classes/igxcombocomponent.html) は、[IgxOverlay](overlay.md) サービスを使用して、コンボボックス項目のリスト コンテナーを保持および表示します。スタイルを適切にスコープするには、[OverlaySetting.outlet]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet) を使用してください。詳細については、[IgxOverlay スタイル ガイド](overlay-styling.md)を確認してください。

> [!NOTE]
> `IgxCombo` のデフォルト `type` は `box` です。[IgxSelect](select.md) は `line` です。

### デモ

<code-view style="height:410px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/combo-styling" >
</code-view>


<div class="divider--half"></div>

## 既知の問題

- 選択した項目を表示するコンボボックス入力は編集できません。ただし、IE および FireFox のブラウザー仕様により、カーソルは表示されます。
- コンボボックスの高さを変更するための入力はありません。将来、[IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) コンポーネントは、カスタムのサイズ変更オプションを公開し、[IgxCombo]({environment:angularApiUrl}/classes/igxcombocomponent.html) は適切なスタイル設定と外観の統一に同じ機能を使用します。
- コンボボックスが `undefined` (例: `[ undefined, ...]`) を含むプリミティブ データの配列にバインドされる場合、`undefined` はドロップダウンに表示されません。複合データ (オブジェクトなど) の配列にバインドされ、`valueKey` に使用される値が `undefined` の場合、項目はドロップダウンに表示されますが、選択はできません。
- コンボボックスがリモート サービスにバインドされ、定義済みの選択がある場合、要求されたデータが読み込まれるまでその入力は空白のままになります。

> [!NOTE]
> コンボボックスは内部で `igxForOf` ディレクティブを使用するため、すべての `igxForOf` の制限がコンボボックスで有効です。詳細については、[igxForOf 既知の制限](for-of.md#既知の制限)セクションを参照してください。

## API まとめ
<div class="divider--half"></div>

* [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html)
* [IgxComboComponent スタイル]({environment:sassApiUrl}/index.html#function-combo-theme)

その他のコンポーネントおよびディレクティブ (またはそのいずれか) で使用した API:

* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)

## テーマの依存関係
* [IgxDropDown テーマ]({environment:sassApiUrl}/index.html#function-drop-down-theme)
* [IgxIcon テーマ]({environment:sassApiUrl}/index.html#function-icon-theme)
* [IgxCheckbox テーマ]({environment:sassApiUrl}/index.html#function-checkbox-theme)
* [IgxOverlay テーマ]({environment:sassApiUrl}/index.html#function-overlay-theme)

## その他のリソース
<div class="divider--half"></div>

* [コンボボックス機能](combo-features.md)
* [コンボボックス リモート バインディング](combo-remote.md)
* [コンボボックス テンプレート](combo-templates.md)
* [テンプレート駆動フォームの統合](input-group.md)
* [リアクティブ フォームの統合](angular-reactive-form-validation.md)
* [単一選択コンボボックス](simple-combo.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
