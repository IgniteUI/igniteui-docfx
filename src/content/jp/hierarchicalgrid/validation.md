---
title: Angular Hierarchical Grid での編集と検証 - インフラジスティックス
_description: グリッドでユーザーの入力を検証し、Angular Hierarchical Grid の使用中に有効かどうかを通知します。デモと例をお試しください。
_keywords: angular 検証, ignite ui for angular, インフラジスティックス
_license: commercial
_language: ja
---

# Angular Hierarchical Grid の編集と検証

Hierarchical Grid の編集は、セル/行の編集時のユーザー入力の組み込み検証メカニズムを公開します。これは [Angular Form 検証](https://angular.io/guide/form-validation)機能を拡張し、既知の機能と簡単に統合できるようにします。エディターの状態が変更されると、視覚的なインジケーターが編集されたセルに適用されます。

## 構成

### テンプレート駆動で構成する

Angular Forms 検証ディレクティブは、`IgxColumn` で直接動作するよう拡張されています。同じ検証が `igx-column` で宣言的に設定される属性として利用できます。以下の検証は追加設定なしでサポートされます。

- required
- min
- max
- email
- minlength
- maxlength
- pattern

列入力が設定され、値がメールとして書式設定されることを検証するには、関連するディレクティブを使用できます。

```html
<igx-column [field]="email" [header]="User E-mail" required email></igx-column>
```

以下のサンプルは、Hierarchical Grid に組み込み済みの `required`、`email` および `min` 検証ディレクティブを使用する方法を示しています。



<code-view style="height:680px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-validator-service/" alt="Angular Hierarchical Grid 検証の基本例">
</code-view>

<div class="divider--half"></div>


### リアクティブ フォームで構成する

`formGroupCreated` イベントを介して行/セルで編集を開始するときに検証に使用する `FormGroup` を公開します。関連するフィールドに独自の検証を追加して変更できます。




```html
<igx-hierarchical-grid (formGroupCreated)='formCreateHandler($event)' ...>
```







```ts
    public formCreateHandler(args: IGridFormGroupCreatedEventArgs) {
        const formGroup = args.formGroup;
        const orderDateRecord = formGroup.get('OrderDate');
        const requiredDateRecord = formGroup.get('RequiredDate');
        const shippedDateRecord = formGroup.get('ShippedDate');

        orderDateRecord.addValidators(this.futureDateValidator());
        requiredDateRecord.addValidators(this.pastDateValidator());
        shippedDateRecord.addValidators(this.pastDateValidator());
    }
```





独自の検証関数を作成するか、[組み込みの Angular 検証関数](https://angular.io/guide/form-validation#built-in-validator-functions)を使用できます。


## 検証サービス API

グリッドは、[`validation`]({environment:angularApiUrl}/classes/IgxGridComponent.html#validation) プロパティを介して検証サービスを公開します。
このサービスには以下のパブリック API があります。
- [`valid`]({environment:angularApiUrl}/classes/IgxGridValidationService.html#valid) - グリッドの検証状態が有効であるかどうかを返します。
- [`getInvalid`]({environment:angularApiUrl}/classes/IgxGridValidationService.html#getInvalid) - 無効な状態のレコードを返します。
- [`clear`]({environment:angularApiUrl}/classes/IgxGridValidationService.html#clear) - レコードの状態を ID でクリアします。ID が提供されない場合はすべてのレコードの状態をクリアします。
- [`markAsTouched`]({environment:angularApiUrl}/classes/IgxGridValidationService.html#markAsTouched) - 関連するレコード/フィールドをタッチ済みとしてマークします。

無効な状態は、検証ルールに従って検証エラーが修正されるか、クリアされるまで保持されます。

## 検証トリガー

検証は以下のシナリオでトリガーされます。

- グリッドの [`validationTrigger`]({environment:angularApiUrl}/classes/IgxGridComponent.html#validationTrigger) に基づくセルエディターでの編集中。エディター入力中の変更時 (`change`)、またはエディターがフォーカスを失うか (`blur`) 閉じた場合。
- [`updateRow`]({environment:angularApiUrl}/classes/IgxGridComponent.html#updateRow)、[`updateCell`]({environment:angularApiUrl}/classes/IgxGridComponent.html#updateCell) などの API を使用してセル/行を更新する場合 。
- トランザクション サービスの一括編集および [`undo`]({environment:angularApiUrl}/classes/IgxTransactionService.html#undo)/[`redo`]({environment:angularApiUrl}/classes/IgxTransactionService.html#redo) API を使用する場合。

> 注: ユーザー入力または編集 API で編集されていないレコードに対しては、検証はトリガーされません。セルの視覚的なインジケーターは、ユーザー操作または検証サービスの `markAsTouched` API を介して入力がタッチ済みと見なされる場合のみ表示されます。

## Angular Hierarchical Grid 検証のカスタマイズ オプション

### カスタム検証を設定する

テンプレート内の `<igx-column>` で使用する独自の検証ディレクティブを定義することができます。

```ts
@Directive({
    selector: '[phoneFormat]',
    providers: [{ provide: NG_VALIDATORS, useExisting: PhoneFormatDirective, multi: true }]
})
export class PhoneFormatDirective extends Validators {
    @Input('phoneFormat')
    public phoneFormatString = '';

    public validate(control: AbstractControl): ValidationErrors | null {
        return this.phoneFormatString ? phoneFormatValidator(new RegExp(this.phoneFormatString, 'i'))(control)
            : null;
    }
}
```

定義して app モジュールに追加した以降、宣言的にグリッドの指定の列に設定できます。

```html
<igx-column phoneFormat="\+\d{1}\-(?!0)(\d{3})\-(\d{3})\-(\d{4})\b" ...>
```

### デフォルトのエラー テンプレートを変更する

セルが無効な状態になったときにエラー ツールチップに表示されるカスタム エラー テンプレートを定義できます。
これは、カスタム エラー メッセージを追加したり、メッセージの外観やコンテンツを変更したりする場合に便利です。

```html
<igx-column ... >
  <ng-template igxCellValidationError let-cell='cell' let-defaultErr="defaultErrorTemplate">
      <ng-container *ngTemplateOutlet="defaultErr">
      </ng-container>
      <div *ngIf="cell.validation.errors?.['phoneFormat']">
        Please enter correct phone format
      </div>
  </ng-template>
</igx-column>
```

### 無効な状態での編集モードの終了を防止する

場合によっては、データ中の無効な値を送信しないようにしたいことがあります。
その場合は、[`cellEdit`]({environment:angularApiUrl}/classes/IgxGridComponent.html#cellEdit) または [`rowEdit`]({environment:angularApiUrl}/classes/IgxGridComponent.html#rowEdit) イベントを使用し、新しい値が無効な場合にイベントをキャンセルできます。
いずれのイベントも引数には [`valid`]({environment:angularApiUrl}/interfaces/IGridEditEventArgs.html#valid) プロパティがあり、これによってキャンセルできます。その使用方法は、[クロス フィールド検証の例](#クロス-フィールドの例)で確認できます。




```html
<igx-hierarchical-grid (cellEdit)='cellEdit($event)' ...>
```





```ts
public cellEdit(evt) {
  if (!evt.valid) {
    evt.cancel = true;
  }
}
```

### 例

以下の例は、上記のカスタマイズ オプションを示しています。




<code-view style="height:640px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-validator-service-extended/" alt="Angular Hierarchical Grid カスタム検証の例">
</code-view>

<div class="divider--half"></div>


## クロス フィールド検証

場合によっては、1 つのフィールドの検証がレコード内の別のフィールドの値に依存することがあります。
その場合、カスタム検証を使用して共有 `FormGroup` を介してレコード内の値を比較できます。





  クロス フィールド検証は、[`formGroupCreated`]({environment:angularApiUrl}/classes/IgxGridComponent.html#formGroupCreated) イベントで formGroup に追加できます。その中で複数のフィールドの有効状態を比較できます。

  ```ts
  public formCreateCustomerHandler(event: IGridFormGroupCreatedEventArgs) {
        const formGroup = event.formGroup;
        formGroup.addValidators(this.addressValidator());
    }

    public formCreateOrderHandler(event: IGridFormGroupCreatedEventArgs) {
        const formGroup = event.formGroup;
        formGroup.addValidators(this.dateValidator());
    }

    public addressValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const formGroup = control;
            let returnObject = {};
            const city = formGroup.get('City');
            const country = formGroup.get('Country');
            const validCities = this.countryData.get(country.value);
            if (!validCities || !validCities[city.value]) {
                returnObject['invalidAddress'] = true;
            }
            return returnObject;
        }
    }

    public dateValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const formGroup = control;
            let returnObject = {};
            const orderDate = formGroup.get('OrderDate').value;
            const shippedDate = formGroup.get('ShippedDate').value;
            if (new Date(shippedDate) < new Date(orderDate)) {
                returnObject['invalidRange'] = true;
            }
            return returnObject;
        }
    }
  ```

複数フィールド エラーは別の固定列に表示できます。

```html
<igx-column field="row_valid" header=" " [editable]="false" [dataType]="'number'" [pinned]="true" [width]="'50px'">
        <ng-template igxCell let-cell="cell">
            <div *ngIf="isRowValid(cell)" [igxTooltipTarget]="tooltipRef"
            >
                <img width="18" src="assets/images/grid/active.png"/>
            </div>
            <div *ngIf="!isRowValid(cell)" [igxTooltipTarget]="tooltipRef"
            >
                <img width="18" src="assets/images/grid/expired.png"/>
            </div>
            <div #tooltipRef="tooltip" igxTooltip [style.width]="'max-content'">
               <div *ngFor="let message of stateMessage(cell)">
                   {{message}}
               </div>
            </div>
        </ng-template>
    </igx-column>
```

エラーと詳細メッセージは、行とセルの有効性に基づいて決定できます。

```ts
    public isRowValid(cell: CellType) {
        const hasErrors = !!cell.row.validation.errors || cell.row.cells.some(x => !!x.validation.errors);
        return !hasErrors;
    }

    public stateMessage(cell: CellType) {
        const messages = [];
        const row = cell.row;
        if  (row.validation.errors?.invalidAddress) {
            messages.push('The address information is invalid. City does not match the Country.');
        }
        if  (row.validation.errors?.invalidRange) {
            messages.push('The ShippedDate cannot be before the OrderDate.');
        }
        const cellValidationErrors = row.cells.filter(x => !!x.validation.errors);
        if (cellValidationErrors && cellValidationErrors.length > 0) {
            const fields = cellValidationErrors.map(x => x.column.field).join(',');
            messages.push('The following fields are required: ' + fields);
        }

        if (messages.length === 0) {
            // no errors
            return ['Valid'];
        }
        return messages;
    }
```






### クロス フィールドの例





以下のサンプルは、ルート データと子データの両方について、階層グリッドでのクロス フィールド検証を示しています。

<code-view style="height:620px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-cross-field-validation/" alt="Angular Hierarchical Grid クロス フィールド検証の例">
</code-view>




<div class="divider--half"></div>

## スタイル設定

[Ignite UI for Angular テーマ ライブラリ](../themes/index.md)を使用して、編集時のデフォルトの検証スタイルを変更できます。

以下の例では、検証メッセージの公開されたテンプレートを使用します。ツールチップをポップアウトし、および、検証のデフォルトの外観を変更するためにエラー時の色をオーバーライドします。
また、無効な行をより明確にするために背景のスタイルを設定します。

### テーマのインポート

スタイルを設定し、css 変数にアクセスする最も簡単な方法は、`app` のグローバル スタイル ファイル (通常 は `styles.scss` です) でスタイルを定義することです。
はじめに `themes/index` ファイルをインポートすることにより、Ignite UI for Angular Sass フレームワークの強力なツールへアクセスできるようになります。

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

### スタイルを含める

エラーの色を変更するには、css 変数 `--ig-error-500` を使用します。

```scss
--ig-error-500: 34, 80%, 63%;
```

### カスタム テンプレート

デフォルトのエラー テンプレートを変更することで、カスタム クラスとスタイルを設定できます。

```html
<ng-template igxCellValidationError let-cell='cell' let-defaultErr='defaultErrorTemplate'>
  <div class="validator-container">
    <ng-container *ngTemplateOutlet="defaultErr">
    </ng-container>
  </div>
</ng-template>
```

### 無効な行とセルのスタイル

行とセルは、開発者が行またはセルが無効かどうか、およびアクティブなエラーの種類を知るための API を提供します。




```ts
public rowStyles = {
    background: (row: RowType) => row.validation.status === 'INVALID' ? '#FF000033' : '#00000000'
};
public cellStyles = {
  'invalid-cell': (rowData, columnKey) => {
    let cell = this.hierarchicalGrid.getCellByKey(rowData, columnKey);
    // search in child grids
    if (!cell) {
      for (let grid of this.childGrid.gridAPI.getChildGrids()) {
        cell = grid.getCellByKey(rowData, columnKey);
        if (cell) break;
      }
    }
    return cell && cell.validation.status === 'INVALID';
  }
}
```

```html
<igx-hierarchical-grid [rowStyles]="rowStyles">
  <igx-column field="Artist" [editable]="true" [dataType]="'string'" required [cellClasses]="cellStyles">
  ...
  <igx-row-island [key]="'Albums'" [rowStyles]="rowStyles">
    <igx-column field="Album" [editable]="true" [dataType]="'string'" required [cellClasses]="cellStyles">
```







### デモ





<code-view style="height:630px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-validation-style/" >
</code-view>






<div class="divider--half"></div>


## API リファレンス

- [IgxBaseTransactionService]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)
- [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
- [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

## 既知の問題と制限

|制限|説明|
|--- |--- |
| `validationTrigger` が blur の場合、`editValue` と検証は、エディターからフォーカスが外れた後にのみトリガーされます。 | 理由は、これが formControl の [`updateOn`](https://angular.io/api/forms/AbstractControl#updateOn) プロパティを利用しているためです。これにより、formControl が更新され、関連する検証をトリガーするイベントが決定されます。

## その他のリソース

- [igxGrid で CRUD 操作を構築する](../general/how-to/how-to-perform-crud.md)
- [Hierarchical Grid 概要](hierarchical-grid.md)
- [Hierarchical Grid 編集](editing.md)
- [Hierarchical Grid 行編集](row-editing.md)
- [Hierarchical Grid 行追加](row-adding.md)
- [Hierarchical Grid トランザクション](batch-editing.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)