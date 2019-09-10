---
title: アップデート ガイド
_description: このトピックでは、新しいバージョンの Ignite UI for Angular ライブラリにアップデートする方法についてご紹介します。
_keywords: Ignite UI for Angular, アップデート, npm パッケージ, バージョン, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---

## アップデート ガイド

Ignite UI for Angular [バージョニング](https://github.com/IgniteUI/igniteui-angular/wiki/Ignite-UI-for-Angular-versioning) は、最初の数字がコードでサポートされる Angular のメジャー バージョンで、2 番目の数字はメジャー バージョン リリースの数字です。また重大な変更がメジャー リリース間でリリースされる場合があります。
**Ignite UI for Angular** 各リリースのすべての変更の一覧は、製品 [CHANGELOG](https://github.com/IgniteUI/igniteui-angular/blob/master/CHANGELOG.md) (英語) をご覧ください。

Ignite UI for Angular パッケージは `ng update` Schematics で自動バージョン マイグレーションをサポートします。これにより、すべての可能性のある重大な変更 (セレクターの名前、クラス、@Input/Output プロパティの変更) をマイグレーションを試みます。ただし、マイグレーションできない変更がある場合もあります。通常これらの変更はタイプ スクリプト アプリケーション ロジックに関連しており、[詳細](#additional-manual-changes)は以下をご確認ください。

最初に [**`ng update`**](https://angular.io/cli/update) コマンドを実行して
```cmd
ng update
```

> [!NOTE]
> アップデートする前にすべての変更をコミットすることをお勧めします。 

**Ignite UI for Angular** パッケージを更新するには、以下のコマンドを実行してください。
```cmd
ng update igniteui-angular
```
`Igniteui-angular` の更新時は、@angular/core`, `@angular/cli` and `igniteui-cli` パッケージを一致するバージョンにアップデートしてください。 
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

### From 8.1.x to 8.2.x

* IgxDrag
    * Since `hideBaseOnDrag` and `visible` inputs are being deprecated, in order to achieve the same functionality in your application, you can use any way of hiding the base element that Angular provides. One example is setting the `visibility` style to `hidden`, since it will only make in invisible and keep its space that it takes in the DOM:

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

    * Since `animateOnRelease` and `dropFinished()` are also being deprecated, any `dropFinished()` method usage should be replaced with `transitionToOrigin()`. Otherwise you would need to call `transitionToOrigin()` depending on when you would want the dragged element to transition back to its original location. Note that  if the dragged element DOM position is changed, then its original location will also change based on that.

* IgxDrop
    * Due to the default drop strategy provided with the `IxgDrop` directive is no longer applied by default, in order to continue having the same behavior, you need to set the new input `dropStrategy` to be the provided `IgxAppendDropStrategy` implementation.

        ```html
        <div igxDrop [dropStrategy]="appendStrategy"></div>
        ```
        ```typescript
        import { IgxAppendDropStrategy } from 'igniteui-angular';

        public appendStrategy = IgxAppendDropStrategy;
        ```
    * Any use of interfaces `IgxDropEnterEventArgs` and `IgxDropLeaveEventArgs` should be replaced with `IDragBaseEventArgs`.
    * Also any use of the  `IgxDropEventArgs` interface should be replaced with `IDropDroppedEventArgs`.


### From 8.0.x to 8.1.x
* The `igx-paginator` component is introduced as a standalone component and is also used in the Grid components.
Keep in mind that if you have set the `paginationTemplate`, you may have to modify your CSS to display the pagination correctly. This is due to the fact that the template is no longer applied under a paging-specific container with CSS rules to center content, so you might need to add them manually.
The style should be something similar to:

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

### 7.3.x から 8.0.x の場合:
* アップデート中に以下のエラーが発生した場合、`パッケージ "@angular/compiler-cli" は "typescript" と互換性のないピア依存関係を持っているため (">=3.1.1 <3.3" が必要で、"3.4.5" をインストールします。)`、最初に `@angular/core` パッケージを更新する必要があります。このエラーは [Angular CLI](https://github.com/angular/angular-cli/issues/13095) の既知の問題に関連しています
* `igniteui-angular` パッケージの更新中に次のエラーが表示された場合、`パッケージ "igniteui-angular"は "web-animations-js"と互換性のないピア依存関係を持っているため ("^2.3.1" が必要で、 "2.3.2-pr208"をインストールします。)`、`ng update igniteui-angular --force` を使用して更新する必要があります。これは、`igniteui-angular` を更新する前に `@angular/core` と `@angular/cli` を更新した場合に発生する場合があります。

### 7.2.x または 7.3.x から 7.3.4 の場合:
* `IgxGrid`、`IgxTreeGrid`、または `IgxHierarchicalGrid` メソッドを使用する場合は、`condition` パラメーターがオプションではなくなったことに注意してください。`filterGlobal` メソッドが無効な条件で呼び出されると、すべての列の既存のフィルターは消去されません。

### 7.1.x から 7.2.x の場合:
* `combo.value` と一緒に IgxCombo を使う場合、`combo.value` が唯一のゲッターであることに注意してください。
* `IgxTextHighlightDirective` を使用している場合、`page` 入力プロパティは推奨されません。`IActiveHighlightInfo` インターフェイスの `rowIndex`、`columnIndex`、`page` プロパティも非推奨です。代わりに、`行`と`列`のオプション プロパティが追加されています。
* `igx-button-theme` を使用する場合は、ボタンの種類ごとに `$button-roundness` が `$flat-border-radius`、`$raised-border-radius`、`$outline-border-radius`、`$fab-border-radius`、`$icon-border-radius` で置き換えられることに注意してください。 

### 7.0.x から 7.1.x
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

### 6.0.x から 6.1.x

* アプリケーションで IgxCombo コントロールを使用する場合、`itemsMaxWidth` オプションを設定し、このオプションを `itemsWidth` に変更してください。
