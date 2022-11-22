---
title: Angular @@igComponent での編集と検証 - インフラジスティックス
_description: グリッドでユーザーの入力を検証し、Angular @@igComponent の使用中に有効かどうかを通知します。デモと例をお試しください。
_keywords: angular 検証, ignite ui for angular, インフラジスティックス
_language: ja
---

# Angular @@igComponent の編集と検証
@@igComponent の編集は、セル/行の編集時のユーザー入力の組み込み検証メカニズムを公開します。これは [Angular Form 検証](https://angular.io/guide/form-validation)機能を拡張し、既知の機能と簡単に統合できるようにします。エディターの状態が変更されると、視覚的なインジケーターが編集されたセルに適用されます。

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

以下のサンプルは、@@igComponent に組み込み済みの `required`、`email` および `min` 検証ディレクティブを使用する方法を示しています。
@@if (igxName === 'IgxGrid') {
<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-validator-service" alt="Angular @@igComponent 検証の基本例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-validator-service" alt="Angular @@igComponent 検証の基本例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<code-view style="height:680px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-validator-service" alt="Angular @@igComponent 検証の基本例">
</code-view>

<div class="divider--half"></div>
}

### リアクティブ フォームで構成する

`formGroupCreated` イベントを介して行/セルで編集を開始するときに検証に使用する `FormGroup` を公開します。関連するフィールドに独自の検証を追加して変更できます。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid (formGroupCreated)='formCreateHandler($event)' ...>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid (formGroupCreated)='formCreateHandler($event)' ...>
```
}

@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid (formGroupCreated)='formCreateHandler($event)' ...>
```
}

@@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') {
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
}

@@if (igxName === 'IgxTreeGrid') {
```ts
   public formCreateHandler(args: IGridFormGroupCreatedEventArgs) {
        const formGroup = args.formGroup;
        const hireDateRecord = formGroup.get('HireDate');
        hireDateRecord.addValidators([this.futureDateValidator(), this.pastDateValidator()]);
    }
```
}

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

## Angular @@igComponent 検証のカスタマイズ オプション

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
いずれのイベントも引数には [`valid`]({environment:angularApiUrl}/interfaces/IGridEditEventArgs.html#valid) プロパティがあり、これによってキャンセルできます。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid (cellEdit)='cellEdit($event)' ...>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid (cellEdit)='cellEdit($event)' ...>
```
}

@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid (cellEdit)='cellEdit($event)' ...>
```
}

```ts
public cellEdit(evt) {
  if (!evt.valid) {
    evt.cancel = true;
  }
}
```

### 例

以下の例は、上記のカスタマイズ オプションを示しています。

@@if (igxName === 'IgxGrid') {
<code-view style="height:570px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-validator-service-extended" alt="Angular @@igComponent カスタム検証の例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<code-view style="height:570px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-validator-service-extended" alt="Angular @@igComponent カスタム検証の例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<code-view style="height:640px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-validator-service-extended" alt="Angular @@igComponent カスタム検証の例">
</code-view>

<div class="divider--half"></div>
}

### クロス フィールド検証

場合によっては、1 つのフィールドの検証がレコード内の別のフィールドの値に依存することがあります。
その場合、カスタム検証を使用して共有 `FormGroup` を介してレコード内の値を比較できます。

@@if (igxName === 'IgxGrid') {

以下のサンプルは、同じレコードの異なるフィールド間のクロスフィールド検証を示しています。レコードのアクティブな日付と作成日付とを現在の日付と比較した有効性、および各従業員の商談成立/失効を確認します。すべてのエラーは別のピン固定列に収集され、レコードが無効であることを示し、関連するエラーを表示します。

次のコード行は、比較を含み、それらに関連する関連エラーを設定するクロス フィールド検証関数を示しています。

```ts
private rowValidator(): ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors | null => {
        let returnObject = {};
        const createdOnRecord = formGroup.get('created_on');
        const lastActiveRecord = formGroup.get('last_activity');
        const winControl = formGroup.get('deals_won');
        const loseControl = formGroup.get('deals_lost');
        const actualSalesControl = formGroup.get('actual_sales');

        // Validate dates
        const curDate = new Date();
        if (new Date(createdOnRecord.value) > curDate) {
            // The created on date shouldn't be greater than current date.
            returnObject['createdInvalid'] =  true;
        }
        if (new Date(lastActiveRecord.value) > curDate) {
            // The last active date shouldn't be greater than current date.
            returnObject['lastActiveInvalid'] = true;
        }
        if (new Date(createdOnRecord.value) > new Date(lastActiveRecord.value)) {
            // The created on date shouldn't be greater than last active date.
            returnObject['createdLastActiveInvalid'] = true;
        }
        
        // Validate deals
        const dealsRatio = this.calculateDealsRatio(winControl.value, loseControl.value);
        if (actualSalesControl.value === 0 && dealsRatio > 0) {
            // If the actual sales value is 0 but there are deals made.
            returnObject['salesZero'] = true;
        }
        if (actualSalesControl.value > 0 && dealsRatio === 0) {
            // If the deals ratio based on deals won is 0 but the actual sales is bigger than 0.
            returnObject['salesNotZero'] = true;
        }
        
        return returnObject;
    };
}

public calculateDealsRatio(dealsWon, dealsLost) {
    if (dealsLost === 0) return dealsWon + 1;
    return Math.round(dealsWon / dealsLost * 100) / 100;
}
```

クロス フィールド検証は、編集モードに入ったときに各行の新しい `formGroup` を返す [`formGroupCreated`]({environment:angularApiUrl}/classes/IgxGridComponent.html#formGroupCreated) イベントから、その行の `formGroup` に追加することができます。

```html
<igx-grid #grid1 [data]="transactionData" [width]="'100%'" [height]="'480px'" [autoGenerate]="false" 
        [batchEditing]="true" [rowEditable]="true" [primaryKey]="'id'"
        (formGroupCreated)='formCreateHandler($event)'>
    <!-- ... -->
</igx-grid>

```

```typescript
public formCreateHandler(evt: IGridFormGroupCreatedEventArgs) {
    evt.formGroup.addValidators(this.rowValidator());
}
```

異なるエラーはテンプレート セルに表示され、すべてのエラーは一つのツールチップに結合されます。行の有効状態に応じて、異なるアイコンが表示されます。

```html
<igx-column field="row_valid" header=" " [editable]="false" [pinned]="true" [width]="'50px'">
    <ng-template igxCell let-cell="cell">
        <div *ngIf="isRowValid(cell)" [igxTooltipTarget]="tooltipRef"  style="margin-right: '-10px';">
            <img width="18" src="assets/images/grid/active.png"/>
        </div>
        <div *ngIf="!isRowValid(cell)" [igxTooltipTarget]="tooltipRef" style="margin-right: '-10px';">
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

各列にはテンプレート化されたフォーム検証があり、カスタム `rowValidator` によって行ごとのエラーを確認するため、エラー メッセージ は各セルのエラーを収集する `stateMessage` 関数で収集されます。

```typescript
public stateMessage(cell: CellType) {
    const messages = [];
    const row = cell.row;
    const cellValidationErrors = row.cells.filter(x => !!x.validation.errors);
    cellValidationErrors.forEach(cell => {
        if (cell.validation.errors) {
            if (cell.validation.errors.required) {
                messages.push(`The \`${cell.column.header}\` column is required.`);
            }
            // Other cell errors ...
        }
    });

    if (row.validation.errors?.createdInvalid) {
        messages.push(`The \`Date of Registration\` date cannot be in the future.`);
    }
    // Other cross-field errors...

    return messages;
}

```

以下のサンプルは、クロス フィールド検証の動作を示しています。

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-cross-field-validator-service" alt="Angular @@igComponent クロス フィールド検証の例">
</code-view>


<div class="divider--half"></div>

}

@@if (igxName === 'IgxHierarchicalGrid') {

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

以下のサンプルは、ルート データと子データの両方について、階層グリッドでのクロス フィールド検証を示しています。

<code-view style="height:530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-cross-field-validation" alt="Angular @@igComponent クロス フィールド検証の例">
</code-view>

<div class="divider--half"></div>
}


@@if (igxName === 'IgxTreeGrid') {

以下のサンプルは、同じレコードの異なるフィールド間のクロスフィールド検証を示しています。ある人に指定された City が現在設定されている Country にあるかどうか、およびその逆を確認します。また、ある人が雇用されたときにその人が 18 歳かどうかも確認します。

次のコード行はクロス フィールド検証関数を示しています。この関数は上記の比較を含み、関連するエラーを設定します。

```ts
private rowValidator(): ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors | null => {
        let returnObject = {};
        
        const age = formGroup.get('Age');
        const hireDate = formGroup.get('HireDate');
        if((new Date().getFullYear() - new Date(hireDate.value).getFullYear()) + 18 >= age.value) {
            returnObject['ageLessHireDate'] = true;
        }

        const city = formGroup.get('City');
        const country = formGroup.get('Country');
        const validCities = this.countryData.get(country.value);
        if (!validCities || !validCities[city.value]) {
            returnObject['invalidAddress'] = true;
        }

        return returnObject;
    };
}
```

クロス フィールド検証は、編集モードに入ったときに各行の新しい `formGroup` を返す [`formGroupCreated`]({environment:angularApiUrl}/classes/IgxGridComponent.html#formGroupCreated) イベントから、その行の `formGroup` に追加することができます。

```html
<igx-tree-grid igxPreventDocumentScroll #treeGrid [batchEditing]="true" [data]="data" primaryKey="ID"
    foreignKey="ParentID" [width]="'100%'" [height]="'500px'" [rowEditable]="true" [pinning]="pinningConfig"
    (formGroupCreated)="formCreateHandler($event)">
    <!-- ... -->
</igx-tree-grid>

```

```typescript
public formCreateHandler(evt: IGridFormGroupCreatedEventArgs) {
    evt.formGroup.addValidators(this.rowValidator());
}
```

異なるエラーはテンプレート セルに表示され、すべてのエラーは一つのツールチップに結合されます。行の有効状態に応じて、異なるアイコンが表示されます。

```html
<igx-column field="row_valid" header=" " [editable]="false" [dataType]="'number'" [pinned]="true" [width]="'150px'">
    <ng-template igxCell let-cell="cell">
        <div *ngIf="isRowValid(cell)" [igxTooltipTarget]="tooltipRef"  style="margin: 'auto';">
            <img width="18" src="assets/images/grid/active.png"/>
        </div>
        <div *ngIf="!isRowValid(cell)" [igxTooltipTarget]="tooltipRef" style="margin: 'auto';">
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

各列にはテンプレート化されたフォーム検証があり、カスタム `rowValidator` によって行ごとのエラーを確認するため、エラー メッセージ は各セルのエラーを収集する `stateMessage` 関数で収集されます。

```typescript
public stateMessage(cell: CellType) {
    const messages = [];
    const row = cell.row;
    const cellValidationErrors = row.cells.filter(x => !!x.validation.errors);
    cellValidationErrors.forEach(cell => {
        if (cell.validation.errors) {
            if (cell.validation.errors.required) {
                messages.push(`The \`${cell.column.header}\` column is required.`);
            }
            // Other cell errors...
        }
    });

    if (row.validation.errors?.ageLessHireDate) {
        messages.push(`\`Age\` cannot be less than 18 when the person was hired.`);
    }
    if (row.validation.errors?.invalidAddress) {
        messages.push(`Selected \`City\` does not match the \`Country\`.`);
    }

    if (messages.length === 0 && this.isRowValid(cell)) {
        messages.push('OK');
    }

    return messages;
}
```

以下のサンプルは、クロス フィールド検証の動作を示しています。

<code-view style="height:570px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-cross-field-validator-service" alt="Angular @@igComponent クロス フィールド検証の例">
</code-view>

<div class="divider--half"></div>
}

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
エラーの色を変更するには、css 変数 `--igx-error-500` を使用します。
```scss
--igx-error-500: 34, 80%, 63%;
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
@@if (igxName === 'IgxGrid'){
```ts
public rowStyles = {
    background: (row: RowType) => row.validation.status === 'INVALID' ? '#FF000033' : '#00000000'
};
public cellStyles = {
    'invalid-cell': (rowData, columnKey) => {
        const pKey = this.grid.primaryKey;
        const cell = this.grid.getCellByKey(rowData[pKey], columnKey);
        return cell && cell.validation.status === 'INVALID';
    }
}
```
```html
<igx-grid [rowStyles]="rowStyles">
    <igx-column field="ReorderLevel" header="ReorderLever" required [cellClasses]="cellStyles">
```
}

@@if (igxName === 'IgxHierarchicalGrid'){
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
}


@@if (igxName === 'IgxTreeGrid'){
```ts
public rowStyles = {
    background: (row: RowType) => row.cells.find(c => c.validation.errors !== null && c.validation.errors !== undefined) ? '#FF000033' : '#00000000'
};
public cellStyles = {
    'invalid-cell': (rowData, columnKey) => {
        const pKey = this.treeGrid.primaryKey;
        const cell = this.treeGrid.getCellByKey(rowData[pKey], columnKey);
        return cell && cell.validation.status === 'INVALID';
    }
}
```
```html
<igx-tree-grid [rowStyles]="rowStyles">
        <igx-column *ngFor="let c of columns" [field]="c.field" [dataType]="c.dataType" [header]="c.label" [required]="c.required" [cellClasses]="cellStyles">
```
}


### デモ

@@if (igxName === 'IgxGrid'){

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-validation-style" >
</code-view>
}

@@if (igxName === 'IgxHierarchicalGrid'){

<code-view style="height:630px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-validation-style" >
</code-view>

}


@@if (igxName === 'IgxTreeGrid'){

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-validation-style" >
</code-view>

}

<div class="divider--half"></div>


## API リファレンス

* [IgxBaseTransactionService]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

## 既知の問題と制限

|制限|説明|
|--- |--- |
| `validationTrigger` が blur の場合、`editValue` と検証は、エディターからフォーカスが外れた後にのみトリガーされます。 | 
理由は、これが formControl の [`updateOn`](https://angular.io/api/forms/AbstractControl#updateOn) プロパティを利用しているためです。これにより、formControl が更新され、関連する検証をトリガーするイベントが決定されます。

## その他のリソース

* [igxGrid で CRUD 操作を構築する](../general/how-to/how-to-perform-crud.md)
* [@@igComponent 概要](@@igMainTopic.md)
* [@@igComponent 編集](editing.md)
* [@@igComponent 行編集](row-editing.md)
* [@@igComponent 行追加](row-adding.md)
* [@@igComponent トランザクション](batch-editing.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
