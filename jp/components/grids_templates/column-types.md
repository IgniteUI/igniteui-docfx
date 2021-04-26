@@if (igxName === 'IgxGrid') {
---
title: Angular Grid 列タイプ | データ型 | Ignite UI for Angular | インフラジスティックス
_description: Angular UI Grid の定義済みの列タイプの使用を開始し、セルと編集テンプレートの両方のデフォルト処理のために数値、通貨、パーセント、ブール値、日付タイプを設定します
_keywords: 列データ型, ignite ui for angular, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid 列タイプ | データ型 | Ignite UI for Angular | インフラジスティックス
_description: Angular UI Tree Grid の定義済みの列タイプの使用を開始し、セルと編集テンプレートの両方のデフォルト処理のために数値、通貨、パーセント、ブール値、日付タイプを設定します
_keywords: 列データ型, ignite ui for angular, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid 列タイプ | データ型 | Ignite UI for Angular | インフラジスティックス
_description: Angular UI Hierarchical Grid の定義済みの列タイプの使用を開始し、セルと編集テンプレートの両方のデフォルト処理のために数値、通貨、パーセント、ブール値、日付タイプを設定します
_keywords: 列データ型, ignite ui for angular, インフラジスティックス
_language: ja
---
}

# @@igComponent 列タイプ

Ignite UI for Angular @@igComponent は、デフォルトおよび編集テンプレートの外観に基づいて、*number* (数値)、*string* (文字列)、*date* (日付)、*boolean* (ブール値)、*currency* (通貨) および *percent* (パーセント) 列のデータ型のデフォルト処理を提供します。


@@if (igxName === 'IgxGrid') {
## Angular 列タイプの例


<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-column-data-types" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {
}
@@if (igxName === 'IgxHierarchicalGrid') {
}

## デフォルトのテンプレート
データ型固有のテンプレートを有効にする場合、列の [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) 入力を設定する必要があります。設定しない場合、列は文字列の列として処理されます (これは列 dataType のデフォルト値であるためです)。次に各型のデフォルト テンプレートについて説明します。

### String (文字列)
この列 [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) はセル値の外観または書式を変更しません。

### Number (数値)
[`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) が *number* に設定されている場合、セル値はアプリケーションまたはグリッドの [`locale`]({environment:angularApiUrl}/classes/igxgridcomponent.html#locale) 設定に基づいて書式設定され、[`pipeArgs`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#pipeArgs) プロパティが指定されている場合にも同じように設定されます。数値書式はそれらに基づいて変更されます。たとえば、以下を変更します:
 - 小数点後の桁数。
 - `,` または `.` の少数桁の区切り文字

```ts
public options = {
  digitsInfo: '1.4-4',
};
public formatOptions = this.options;
```

```html
<igx-column [pipeArgs]="formatOptions" [dataType]="'number'">
</igx-column>
```
### DateTime、Date と Time
日付部分の外観は、[`locale`]({environment:angularApiUrl}/classes/igxgridcomponent.html#locale) の形式または [`pipeArgs`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#pipeArgs) 入力に基づいて設定されます (例: 日、月、年)。Pipe 引数はカスタム[日付書式](https://angular.io/api/common/DatePipe#pre-defined-format-options)または[タイムゾーン](https://angular.io/api/common/DatePipe#parameters)を指定するために使用できます。
 - **format** - 日付の書式設定のデフォルト値は 'mediumDate' です。その他の利用可能なオプションは 'short'、'long'、'shortDate'、'fullDate'、'longTime'、'fullTime' などです。以下は利用可能なすべての[定義済みの書式オプション](https://angular.io/api/common/DatePipe#pre-defined-format-options)の完全なリストです。
 - **timezone** - ユーザーのローカル システム タイムゾーンがデフォルト値です。タイムゾーン オフセットまたは標準の UTC/GMT または米国本土のタイムゾーンの略語も渡すことができます。世界の任意の場所の対応する時間を表示するさまざまなタイムゾーンの例:


```ts
public formatDateOptions = {
    /** The date/time components that a date column will display, using predefined options or a custom format string. */
    /** e.g 'dd/mm/yyyy' or 'shortDate' **/
    format: 'longDate',
    /** A timezone offset (such as '+0430'), or a standard UTC/GMT or continental US timezone abbreviation. */
    timezone: 'GMT'
};
public formatOptions = this.options;
```

```html
<igx-column [pipeArgs]="formatDateOptions" [dataType]="'date'">
</igx-column>
```

利用可能なタイムゾーン:

| タイムゾーン                  | 値                     |
|---------------------------| ------------------------- |
| Alpha Time Zone           |‘UTC+1’                    |
| Australian Central Time   |‘UTC+9:30/ +10:30’         |
| Arabia Standard Time      |‘UTC+3’                    |
| Central Standard Time     |‘UTC-6’                    |
| China Standard Time       |‘UTC+8’                    |
| Delta Time Zone           |‘UTC+4’                    |
| Greenwich Mean Time       |‘UTC+0’                    |
| Gulf Standard Time        |‘UTC+4’                    |
| Hawaii Standard Time      |‘UTC-10’                   |
| India Standard Time       |‘UTC+4’                    |

<div class="divider--half"></div>


@@igComponent は、**Date オブジェクト**、**数値 (ミリ秒)** または **ISO 日付/時刻文字列**の日付値を受け取ります。このセクションは、[カスタム表示書式を構成する方法](grid.md#カスタム表示形式)を示します。

サンプルでは、特定の列タイプで使用可能な書式を紹介するために、さまざまな書式設定オプションを指定しています。たとえば、以下は日付オブジェクトの *time* 部分の書式設定オプションのサンプルです。

```ts
// Time format with equivalent example
public timeFormats = [
    { format: "shortTime", eq: "'h:mm a'" },
    { format: "mediumTime", eq: "'h:mm:ss a'"},
    { format: "longTime", eq: "'h:mm:ss a z'"},
    { format: "fullTime", eq: "'h:mm:ss a zzzz'"},
];
```

#### セル編集
列タイプに基づくセル編集に関しては、別のエディターが表示されます。
- dateTime - [IgxDateTimeEditor ディレクティブ]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html) が使用されます。このエディターは、DateTime オブジェクトの入力要素部分のマスクを提供します。
- date - [IgxDatePicker コンポーネント]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)が使用されます。 
- time - [IgxTimePicker コンポーネント]({environment:angularApiUrl}/classes/igxtimepickercomponent.html)が使用されます。

#### フィルタリング
クイック フィルタリング/Excel スタイル フィルタリングに関しては、上記と同じエディターが使用されます。これらは、各タイプが公開する次のフィルタリング オペランドです。
- dateTime and date - Equals、Does Not Equal、Before、After、Today、Yesterday、This Month、Last Month、Next Month、This Year、Last Year、Next Year、Empty、Not Empty、Null、Not Null;
- time - At、Not At、Before、After、At または Before、At または After、Empty、Not Empty、Null、Not Null;

#### 集計
使用可能な集計オペランドは、**Count**、**Earliest** (date/time)、および **Latest** (date/time) になります。

#### ソート

Time タイプの列は、オブジェクトの時間部分に基づいてソートされます。分/秒は無視されます。
Date タイプの列は、日付部分に基づいてソートされ、時間部分は無視されます。
DateTime 列は、日付に基づいてソートされます。
### Boolean (ブール値)

デフォルトのテンプレートは、ブール値の可視化にマテリアル アイコンを使用します。*false* 値には 'clear' アイコン、*true* 値には 'check' アイコンを使用します。編集テンプレートは [igx-checkbox]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html) コンポーネントを使用しています。

```html
<igx-column [dataType]="'boolean'">
</igx-column>
```

### Currency (通貨)

#### デフォルトのテンプレート
デフォルトのテンプレートには、プレフィックスまたはサフィックスが付いた通貨記号を含む数値を表示します。通貨記号の位置と数値の書式設定は、提供された Application [`LOCALE_ID`](https://angular.io/api/core/LOCALE_ID) または @@igComponent の [`locale`]({environment:angularApiUrl}/classes/igxgridcomponent.html#locale) に基づいています。

*LOCALE_ID を使用する場合*
```ts
import { LOCALE_ID } from '@angular/core';
...

 @Component({
    selector: 'app-component.sample',
    templateUrl: 'grid-component.sample.html',
    providers: [{provide: LOCALE_ID, useValue: 'fr-FR' }]
})
```

*グリッドの locale を使用する場合*
```html
<igx-grid [locale]="'fr-FR'" [data]="data">
</igx-grid>
```

[`pipeArgs`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#pipeArgs) 入力を使用することにより、エンドユーザーは*小数点*、*currencyCode* および *display* によって数値書式をカスタマイズできます。

```ts
public options = {
  digitsInfo: '3.4-4',
  currencyCode: 'USD',
  display: 'symbol-narrow'
};
public formatOptions = this.options;
```

```html
<igx-column field="UnitsInStock"
    [pipeArgs]="formatOptions"
    [dataType]="'currency'">
</igx-column>
```

| パラメーター                 | 説明                                                |
|---------------------------| -------------------------                                  |
| digitsInfo                | 通貨値の 10 進数表現を表します        |
| currencyCode              | ISO 4217 通貨コード                                     |
| display*                  | 省略記号または記号で値を表示します                |

*display - デフォルトの en-US ロケールの場合、USD コードは省略記号 ($) または記号 (US$) で表すことができます。

セルの値を編集すると、**通貨記号**がサフィックスまたはプレフィックスとして表示されます。詳細については、公式の[セル編集トピック](cell-editing.md#セル編集テンプレート)を参照してください。

> 上/下矢印キーを使用する場合、値は digitsInfo-minFractionDigits (小数点以下の最小桁数。デフォルトは 0 です。) に基づいてステップで増減します。


### Percent (パーセント)

デフォルトのテンプレートは、基になる数値に相当するパーセントを表示します。表示されるセル値は、'100' の表示ファクタで乗算された結果です。たとえば、デフォルトのファクタは 100 で、セルに渡される値は 0.123 であるため、表示されるセル値は 12.3% になります。

セル編集の場合、値はデータ ソース値と同じになります。表示ファクタは '1' です。セルを編集すると、パーセント値のプレビューがサフィックス要素として表示されます。たとえば、'0.0547' の編集中にプレビュー要素に '5.47%' が表示されます。

```ts
public options = {
    /**
    * Decimal representation options, specified by a string in the following format:
    * `{minIntegerDigits}`.`{minFractionDigits}`-`{maxFractionDigits}`.
    * `minIntegerDigits`: The minimum number of integer digits before the decimal point. Default is 1.
    * `minFractionDigits`: The minimum number of digits after the decimal point. Default is 0.
    * `maxFractionDigits`: The maximum number of digits after the decimal point. Default is 3.
    */
    digitsInfo: '2.2-3'
};
public formatPercentOptions = this.options;
```

```html
<igx-column field="UnitsInStock"
    [pipeArgs]="formatPercentOptions"
    [dataType]="'percent'">
</igx-column>
```

> 注: 上/下矢印キーを使用する場合、値は digitsInfo-minFractionDigits (小数点以下の最小桁数。デフォルトは 0 です。) に基づいてステップで増減します。

## デフォルトの編集テンプレート

[@@igComponent 編集トピック](editing.md#テンプレートの編集)の編集テンプレート部分を参照してください。

## カスタム編集テンプレートとフォーマッタ

カスタム テンプレートと列フォーマッタの定義は、列データ型セットより常に優先されます。

### カスタム テンプレート

```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="true" [dataType]="'currency'">
    <igx-column [field]="'OrderDate'" [dataType]="'currency'" [pipeArgs]="formatDateOptions" [editable]="true">
        <ng-template let-value>
            {{ value | currency:'USD':'symbol':'1.0-0'}}
        </ng-template>
    </igx-column>
</igx-grid>
```

### 列フォーマッタ

```ts
 // Through column formatter property
public formatCurrency(value: number) {
    return `Dollar sign {value.toFixed(0)}`;
}

init(column: IgxColumnComponent, template) {
switch (column.field) {
    ...
    case "Open Price":
    column.formatter = this.formatCurrency;
    break;
    default:
    return;
}
```

## API リファレンス

* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* Column [pipeArgs]({environment:angularApiUrl}/classes/igxcolumncomponent.html#pipeArgs)
* @@igComponent [locale]({environment:angularApiUrl}/classes/igxgridcomponent.html#locale)
* Column [dataType]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype)

## その他のリソース
<div class="divider--half"></div>

* カスタム テンプレートについては、[セル編集トピック](cell-editing.md#セル編集テンプレート)を参照してください。
* [@@igComponent 概要トピック](@@igMainTopic.md)
* [編集トピック](editing.md)
* [集計トピック](summaries.md)
