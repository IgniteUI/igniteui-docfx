---
title: アップデート ガイド | Ignite UI for Angular | インフラジスティックス
_description: 新しいバージョンの Ignite UI for Angular ライブラリにアップデートする方法については、この記事を参照してください。
_keywords: ignite ui for angular, アップデート, npm パッケージ, マテリアル コンポーネント
_language: ja
---

# アップデート ガイド

Ignite UI for Angular [バージョニング](https://github.com/IgniteUI/igniteui-angular/wiki/Ignite-UI-for-Angular-versioning) は、最初の数字がコードでサポートされる Angular のメジャー バージョンで、2 番目の数字はメジャー バージョン リリースの数字です。また重大な変更がメジャー リリース間でリリースされる場合があります。
**Ignite UI for Angular** 各リリースのすべての変更の一覧は、製品 [CHANGELOG](https://github.com/IgniteUI/igniteui-angular/blob/master/CHANGELOG.md) (英語) をご覧ください。

Ignite UI for Angular パッケージは `ng update` Schematics で自動バージョン マイグレーションをサポートします。これにより、すべての可能性のある重大な変更 (セレクターの名前、クラス、@Input/Output プロパティの変更) をマイグレーションを試みます。ただし、マイグレーションできない変更がある場合もあります。通常これらの変更はタイプ スクリプト アプリケーション ロジックに関連しており、[詳細](#その他の手動の変更)は以下をご確認ください。

はじめに [**`ng update`**](https://angular.io/cli/update) コマンドを実行してアプリケーションとパッケージに使用できるアップデートをチェックします。
```cmd
ng update
```

**Ignite UI for Angular** パッケージを更新するには、以下のコマンドを実行してください。
```cmd
ng update igniteui-angular
```
`igniteui-angular` の更新時は、`@angular/core`, `@angular/cli` および `igniteui-cli` パッケージを一致するバージョンにアップデートしてください。 
**Ignite UI CLI** パッケージをアップデートする場合は、以下のコマンドを実行してください。
```cmd
ng update igniteui-cli
```
**Angular Core** パッケージをアップデートする場合は、以下のコマンドを実行してください。
```cmd
ng update @angular/core
```
**Angular CLI** パッケージをアップデートするには、以下のコマンドを使用してください。
```cmd
ng update @angular/cli
```

## その他の手動の変更


自動的にアップデートできない変更もあります。以下の変更はバージョンごとにセクションが分かれています。アッププデートが必要な場合は、現在のバージョンから開始してそれ以降のアップデートを適用しjます。

例: 6.2.4 から 7.1.0 にアップデートする場合、[6.x .. から] セクションから始めて変更を適用していきます。

## 10.0.x から 10.1.x の場合:

* IgxGrid、IgxTreeGrid、IgxHierarchicalGrid
    * Excel スタイル フィルター メニューを再テンプレート化するための `IgxExcelStyleSortingTemplateDirective`、`IgxExcelStyleHidingTemplateDirective`、`IgxExcelStyleMovingTemplateDirective`、`IgxExcelStylePinningTemplateDirective`  `IgxExcelStyleSelectingTemplateDirective` ディレクティブは削除されたため、列操作とフィルター操作領域を再テンプレート化するために新しく追加されたディレクティブ - `IgxExcelStyleColumnOperationsTemplateDirective` と `IgxExcelStyleFilterOperationsTemplateDirective` を使用できます。テンプレート内で使用するために、Excel スタイル フィルター メニューのすべての内部コンポーネントも公開しました。新しいテンプレートディレクティブの使用に関する詳細は、この[トピック](../grid/excel_style_filtering.md#テンプレート)をご覧ください。
* IgxGrid
    * `selectedRows()` メソッドは、`selectedRows`入力プロパティに変更されました。この重大な変更により、ユーザーは実行時にグリッドの選択状態を簡単に変更できます。行の事前選択もサポートされています。`selectedRows()` メソッドが呼び出されるすべてのインスタンスは、括弧なしで書き換える必要があります。
    * `selectedRows` 入力のバインディングは次のようになります:
    ```typescript
    public mySelectedRows = [0, 1, 2];
    ```
    ```html
    <igx-grid [data]="myData" rowSelection="multiple"
        primaryKey="ID" [selectedRows]="mySelectedRows">
        <!-- ... -->
    </igx-grid>
    ```

## 9.0.x から 10.0.x の場合:
* IgxDropdown
    * ドロップダウン項目の表示プロパティが `flex` から `block` に変更されました。これは、切り捨てられたテキストをデフォルトで有効にするために行われました。この変更により、ドロップダウン項目のコンテンツにテキスト以外のものが含まれる場合、レイアウトはアプリケーション レベルで処理する必要があります。

    * 次の例は、アイコンとテキスト コンテンツでドロップダウン アイテムをスタイルし、垂直配置させる方法を示しています。

    ```html
    <igx-drop-down-item>
        <div class="my-styles">
            <igx-icon>alarm</igx-icon>
            <span>item text</span>
        </div>
    </igx-drop-down-item>
    ```
    ```scss
    .my-styles {
        display: flex;
        align-items: center;
        
        span {
          margin-left: 8px;
        }
    } 
    ```

## 8.x.x から 9.0.x の場合:

Angular 9 の重大な変更により、Hammer プロバイダー は暗黙的に追加されていません (詳細は、https://github.com/angular/angular/blob/master/CHANGELOG.md#breaking-changes-9 を参照してください)。このため、以下のコンポネントの**タッチ**操作が正しく動作するには、アプリケーションのルート モジュールに `HammerModule` をインポートする必要があります。

* igxGrid
* igxHierarchicalGrid
* igxTreeGrid
* igxList
* igxNavigationDrawer
* igxTimePicker
* igxDatePicker
* igxMonthPicker
* *igxSlider**
* igxCalendar
* igxCarousel

> **\* 注** - igxSlider のすべてのユーザー操作には HammerModule が必要です。

以下のコード スニペットでアプリのルート モジュール ファイルを更新できます。

```typescript
import { HammerModule } from "@angular/platform-browser";

@NgModule({
    ...
    imports: [
        ...
        HammerModule
    ]
})
```

エクスポートで名前が変更された `Enumeration` があるため、メンバーを手動で更新する必要があります。以下は、手動の更新が必要なすべての変更のリストです。

* AvatarType.`DEFAULT` -> IgxAvatarType.`CUSTOM`
* Type.`DEFAULT` -> IgxBadgeType.`PRIMARY`
* IgxCardType.`DEFAULT` -> IgxCardType.`ELEVATED`
* IgxCardActionsLayout.`DEFAULT` -> IgxCardActionsLayout.`START`
* IgxDividerType.`DEFAULT` -> IgxDividerType.`SOLID`
* IgxProgressType.`DANGER` -> IgxProgressType.`ERROR`

`ng update` プロセスは、`AvatarType`、`Type` などのすべての列挙名を `IgxAvatarType` と `IgxBadgeType` にそれぞれ更新します。その他の列挙メンバー名は変更されません。 

## 8.1.x から 8.2.x の場合:

* IgxDrag
    * `hideBaseOnDrag` と `visible` 入力は非推奨のため、アプリケーションで同じ機能を実現するために、Angular が提供する基本要素を非表示にする任意の方法を使用できます。1 つの例として、可視性スタイルの非表示設定があります。これは、非表示にして DOM で使用するスペースを保持するためです。

        ```html
        <div igxDrag [ngStyle]="{ 'visibility': targetDragged ? 'hidden' : 'visible' }"
            (dragStart)="onDragStarted($event)" (dragEnd)="onDragEnded($event)">
            Drag me!
        </div>
        ```

        ```typescript
        public targetDragged = false;

        public onDragStarted(event) {
            this.targetDragged = true;
        }

        public onDragEnded(event) {
            this.targetDragged = false;
        }
        ```

    * `animateOnRelease` と `dropFinished()` も非推奨のため、`dropFinished()` メソッドの使用は `transitionToOrigin()` に置き換える必要があります。それ以外の場合は、ドラッグした要素を元の位置に戻すタイミングに応じて、`transitionToOrigin()` を呼び出す必要があります。ドラッグされた要素の DOM の位置が変更されると、元の場所もそれに基づいて変更されることに注意してください。

* IgxDrop
    * `IxgDrop` ディレクティブで提供されるデフォルトのドロップ戦略はデフォルトでは適用されなくなったため、同じ動作を継続するには、新しい入力 `dropStrategy` を提供された `IgxAppendDropStrategy` 実装に設定する必要があります。

        ```html
        <div igxDrop [dropStrategy]="appendStrategy"></div>
        ```
        ```typescript
        import { IgxAppendDropStrategy } from 'igniteui-angular';

        public appendStrategy = IgxAppendDropStrategy;
        ```
    * インターフェイス `IgxDropEnterEventArgs` と `IgxDropLeaveEventArgs` を使用する場合は、`IDragBaseEventArgs` に置き換える必要があります。
    * また、`IgxDropEventArgs` インターフェイスの使用はすべて、用する場合は、`IDropDroppedEventArgs` に置き換える必要があります。

* IgxRowDragDirective 
    * `IRowDragStartEventArgs` および `IRowDragEndEventArgs` では、関連先をより明確にするために引数の名前が変更されています。`owner` 引数は `dragDirective` に名前が変更されます。
    `owner` 引数は、owner コンポーネントへの参照を提供するようになりました。コードが以下のような場合:
        ```typescript
        public dragStart(event) {
            const directive = event.owner;
        }
        ```
        バージョン 8.2.x から以下のように更新します。
        ```typescript
        public dragStart(event) {
            const directive = event.dragDirective;
            const grid = event.owner;
        }
        ```

* IgxCombo
    * [`igx-combo`](../combo.md) が選択とデータバインディングを処理する方法が変更されました。

    - コンボの [`valueKey`] 入力が定義されている場合、コントロールは選択を実行するときに、渡されたデータ項目の配列でその特定のプロパティを探します。
    **すべて**の選択イベントは、データ項目の `valueKey` プロパティの値で処理されます。
    `valueKey` が指定されているすべてのコンボには、入力で指定されたオブジェクト プロパティの値のみで構成される選択/双方向バインディングが必要です。
    ```html
    <igx-combo [data]="cities" valueKey="id" displayKey="name"></igx-combo>
    ```
    ```typescript
    export class MyExampleCombo {
        public data: { name: string, id: string }[] = [{ name: 'London', id: 'UK01' }, { name: 'Sofia', id: 'BG01' }, ...];
        ...
        selectFavorites() {
            // Selection is handled with the data entries' id properties
            this.combo.selectItems(['UK01', 'BG01']);
        }
    }
    ```

    - コンボに `valueKey` が定義されて**いない**場合、**すべて**の選択イベントは **equality (===)** で処理されます。
    `valueKey` が指定されて**いない**すべてのコンボでは、データ項目への**参照**で選択/双方向バインディングを処理する必要があります。
    ```html
    <igx-combo [data]="cities" displayKey="name"></igx-combo>
    ```
    ```typescript
    export class MyExampleCombo {
        public data: { name: string, id: string }[] = [{ name: 'London', id: 'UK01' }, { name: 'Sofia', id: 'BG01' }, ...];
        ...
        selectFavorites() {
            // Selection is handled with references to the data entries
            this.combo.selectItems([this.data[0], this.data[1]]);
        }
    }
    ```

    コンボの設定の詳細については、[readme](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/combo/README.md#value-binding) および[ドキュメント](../combo.md#選択)をご覧ください。

## 8.0.x から 8.1.x の場合:
* `igx-paginator` コンポーネントはスタンドアロン コンポーネントとして導入され、Grid コンポーネントでも使用されます。
`paginationTemplate` を設定している場合は、CSS を変更してページネーションを正しく表示する必要がある場合があることに注意してください。これは、コンテンツをセンタリングするための CSS ルールを持つページング固有のコンテナの下にテンプレートが適用されなくなったため、手動で追加する必要がある場合があるためです。
以下はスタイルの例です。

```html
<igx-grid #grid [data]="data" [paging]="true" [perPage]="10" [paginationTemplate]="pager">
</igx-grid>
<ng-template #pager>
    <div class="pagination-container"></div>
</ng-template>
```

```css
.pagination-container {
	display: flex;
	justify-content: center;
	align-items: center;
}
```

## 7.3.x から 8.0.x の場合:
* アップデート中に以下のエラーが発生した場合、`パッケージ "@angular/compiler-cli" は "typescript" と互換性のないピア依存関係を持っているため (">=3.1.1 <3.3" が必要で、"3.4.5" をインストールします。)`、最初に `@angular/core` パッケージを更新する必要があります。このエラーは [Angular CLI](https://github.com/angular/angular-cli/issues/13095) の既知の問題に関連しています
* `igniteui-angular` パッケージの更新中に次のエラーが表示された場合、`パッケージ "igniteui-angular" は "web-animations-js" と互換性のないピア依存関係を持っているため ("^2.3.1" が必要で、"2.3.2-pr208" をインストールします。)`、`ng update igniteui-angular --force` を使用して更新する必要があります。これは、`igniteui-angular` を更新する前に `@angular/core` と `@angular/cli` を更新した場合に発生する場合があります。

## 7.2.x または 7.3.x から 7.3.4 の場合:
* `IgxGrid`、`IgxTreeGrid`、または `IgxHierarchicalGrid` メソッドを使用する場合は、`condition` パラメーターがオプションではなくなったことに注意してください。`filterGlobal` メソッドが無効な条件で呼び出されると、すべての列の既存のフィルターは消去されません。

## 7.1.x から 7.2.x の場合:
* `combo.value` と一緒に IgxCombo を使う場合、`combo.value` が唯一のゲッターであることに注意してください。
* `IgxTextHighlightDirective` を使用している場合、`page` 入力プロパティは推奨されません。`IActiveHighlightInfo` インターフェイスの `rowIndex`、`columnIndex`、`page` プロパティも非推奨です。代わりに、`行`と`列`のオプション プロパティが追加されています。
* `igx-button-theme` を使用する場合は、ボタンの種類ごとに `$button-roundness` が `$flat-border-radius`、`$raised-border-radius`、`$outline-border-radius`、`$fab-border-radius`、`$icon-border-radius` で置き換えられることに注意してください。 

## 7.0.x から 7.1.x
 * アプリケーションで IgxGrid の集計を使用する場合、`IgxSummaryOperand.operate()` メソッドがからデータとともに順番に呼び出されて集計行に必要な高さを計算します。カスタム集計オペランドは、メソッドが常に適切な長さの IgxSummaryResult の配列を返します。

	バージョン 7.1 以前:
```typescript	
export class CustomSummary extends IgxNumberSummaryOperand {
	public operate(data?: any[]): IgxSummaryResult[] {
		return [{
			key: 'average',
			label: 'average',
			summaryResult: IgxNumberSummaryOperand.average(data).toFixed(2)
		}];
	}
}
```

	バージョン 7.1 以降:
```typescript
export class CustomSummary extends IgxNumberSummaryOperand {
	public operate(data?: any[]): IgxSummaryResult[] {
		return [{
			key: 'average',
			label: 'average',
			summaryResult: data.length ?  IgxNumberSummaryOperand.average(data).toFixed(2) : null
		}];
	}
}
```

## 6.0.x から 6.1.x

* アプリケーションで IgxCombo コントロールを使用する場合、`itemsMaxWidth` オプションを設定し、このオプションを `itemsWidth` に変更してください。
