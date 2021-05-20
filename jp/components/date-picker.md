---
title: Angular Date Picker | 日付のピッカー | インフラジスティックス
_description: Ignite UI for Angular Date Picker コントロールのを使用して、カレンダーから Web アプリケーションに日付を選択する機能を使用する方法を学びます。
_keywords: angular date picker, angular 日付のピッカー, angular コンポーネント, ignite ui for angular
_language: ja
---

# Angular Date Picker
<p class="highlight">Ignite UI for Angular Date Picker コンポーネントは単一の日付選択が可能な月表示カレンダーを表示するか、ドロップダウン モードで日付を変更するための入力機能を提供します。ロケールおよびカスタム日付書式設定をサポートします。</p>

## Angular Date Picker の例

<code-view style="height: 550px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-1" alt="Angular Date Picker の例">
</code-view>

<div class="divider--half"></div>

## 使用方法

### はじめに
Date Picker コンポーネントを初期化する前に、`IgxDatePickerModule` を **app.module.ts** ファイルにインポートします。

日付ピッカーが [**IgxCalendarComponent**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) を使用し、タッチ操作のために **BrowserAnimationsModule**  と **HammerModule** に依存関係があり、これらも AppModule に追加する必要があります。

```typescript
// app.module.ts

...
import { HammerModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxDatePickerModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, HammerModule, IgxDatePickerModule],
    ...
})
export class AppModule {}
```

### Date Picker の表示
デフォルトの`ダイアログ モード`の Date Picker を追加するには、以下のコードを使用してください。

```html
<!-- date-picker-sample.component.html -->

<igx-date-picker></igx-date-picker>
```

## 例

### 日付の設定
`IgxDatePickerComponent` に日付を設定するには、以下のコードを使用して日付を追加します。

```typescript
// date-picker-sample.component.ts

public date: Date = new Date(Date.now());
```

テンプレートで [`value`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#value) 入力を使用します。

```html
<!-- date-picker-sample.component.html -->

<igx-date-picker [value]="date"></igx-date-picker>
```

以下は結果です。

<code-view style="height: 540px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-2" >
</code-view>

<div class="divider--half"></div>

### ドロップダウン モード
デフォルトで日付ピッカーは読み取り専用モードで表示されます。ドロップダウン モードに変更するには、[`mode`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#mode) 入力を [`dropdown`]({environment:angularApiUrl}/enums/interactionmode.html#dropdown) に設定します。

```html
<!-- date-picker-sample.component.html -->

<igx-date-picker mode="dropdown"></igx-date-picker>
```

日付ピッカーは、以下の日付ピッカー入力を設定して更にカスタマイズできます。

| 入力 | タイプ | 説明 | 
| ------------- |:-------------:|:-------------:| 
| [`format`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#format) | `string` | 日付の表示書式を設定します。有効な記号と含む書式を受け付けます。詳細については、[DatePipe](https://angular.io/api/common/DatePipe) をご覧ください。shortDate、mediumDate、longDate および fullDate など定義済みの書式オプションもサポートされます。 |
| [`mask`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#mask)|`string`|日付エディター マスクの設定 d、M、y 記号の数値表記や dd-MM-y などの任意のセパレーターの組み合わせを受け付けます。エディターは MMM、MMMM、MMMMM の文字表記を受け取りません。有効なマスクの日の部分は d と dd、月部分は M と MM、年部分は y、yy、yyyy となります。|
| [`isSpinLoop`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#isspinloop) | `boolean` | エディターで <kbd>UP</kbd> および <kbd>DOWN</kbd> 矢印キーを使用するときに連続スピンループを構成します。false に設定された場合、最小/最大の日付/月に達すると、日付部分のスピンが停止します。デフォルトでスピン ループは無限ループです。 |
| [`locale`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#locale) | `string` | `locale` プロパティを設定する場合に Angular に含まれるロケールが en-US のみであることに注意してください。その他の日付をローカライズするためには対応するロケール データをインポートする必要があります。詳細については、[I18n](https://angular.io/guide/i18n#i18n-pipes) ガイドをご覧ください。|


> [!NOTE]
> [`formatter`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#formatter) および [`format`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#format) 両方の入力が設定されている場合、編集可能な日付ピッカーは [`formatter`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#formatter) の入力を無視します。

編集可能な日付ピッカーは、無効な日付と無効な入力を処理するために次のアウトプットを提供します。

| アウトプット | 引数 | 説明 | 
| ------------- |:-------------:|:-------------:|
|[`onDisabledDate`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#ondisableddate) | [`IDatePickerDisabledDateEventArgs`]({environment:angularApiUrl}/interfaces/idatepickerdisableddateeventargs.html) | 日付ピッカーでユーザーが無効な日付を入力またはスピンした場合に発生します。 |
| [`onValidationFailed`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#onvalidationfailed) | [`IDatePickerValidationFailedEventArgs`]({environment:angularApiUrl}/interfaces/idatepickervalidationfailedeventargs.html) | 日付ピッカーでユーザー無効なな日付を入力またはスピンした場合に発生します。 |

### キーボード ナビゲーション
* 日付ピッカー ドロップダウンを開く: 
    * <kbd>SPACE</kbd> キー
    * <kbd>ALT</kbd> キー + <kbd>DOWN</kbd> キー
*  日付ピッカー ドロップダウンを閉じる:
    * <kbd>ESC</kbd> キー
    * <kbd>ALT</kbd> キー + <kbd>UP</kbd> キー
*  日付部分のインクリメント:
    * 日付部分にフォーカス + <kbd>UP</kbd> キー
*  日付部分のデクリメント:
    * 日付部分にフォーカス + <kbd>DOWN</kbd> キー

以下のサンプルでは、表示形式を longDate ('MMMM d, y') に設定し、日付エディター マスクを 'dd-MM-y' に設定します。

```html
<igx-date-picker mode="dropdown"
                 format="longDate" 
                 mask="dd-MM-y">
</igx-date-picker>
```


<code-view style="height: 500px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-dropdown" >
</code-view>

<div class="divider--half"></div>

### 週番号

[`showWeekNumbers`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#showWeekNumbers) 入力を使用して、Calendar コンポーネント と DatePicker コンポーネントの両方の週番号を表示できるようになりました。

```html
<igx-date-picker [showWeekNumbers]="true">
</igx-date-picker>
```

以下のデモは、週番号が有効になっている日付のピッカーを示しています:


<code-view style="height: 550px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-1" >
</code-view>

<div class="divider--half"></div>

### ボタンの追加
`IgxDatePickerComponent` に today および cancel ボタンを表示できます。

テンプレートで有効にするには、[`cancelButtonLabel`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#cancelbuttonlabel) および [`todayButtonLabel`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#todaybuttonlabel) 入力を使用します。

双方向のデータ バインディングを作成するには、`ngModel` を使用できます。

```html
<!-- date-picker-sample.component.html -->

<igx-date-picker cancelButtonLabel="cancel" todayButtonLabel="today" [(ngModel)]="date"></igx-date-picker>
```

#### カスタム ラベル
`igxLabel` ディレクティブを使用して、デフォルトのラベルをカスタム ラベルに変更できます:

````html
<!-- datepicker-label.component.html -->
<igx-date-picker>
    <label igxLabel>Custom label</label>
</igx-date-picker>
````

次のセクションにあるマルチ ビュー モードのサンプルで、カスタム ラベルの外観を確認できます。

> [!NOTE]
> ラベルの間にテキストを設定しないことで、ラベルを削除できます: `<label igxLabel></label>`。

> [!NOTE]
> 現在、`label` プロパティは非推奨となる予定です。

### マルチ ビュー モード

マルチビューの Date Picker は、`dropdown` と `dialog` モードの両方をサポートします。

[`monthsViewNumber`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#monthsviewnumber) 入力を使用して、カレンダーに表示される月数を設定します。現在月に属さない日を非表示にするには、[`hideOutsideDays`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#hideoutsidedays) プロパティを使用します。

```html
<!-- date-picker-sample.component.html -->

<label>Dialog Mode</label>
<igx-date-picker [monthsViewNumber]="2" [hideOutsideDays]="true">
	<label igxLabel>Custom label</label>
</igx-date-picker>

<label>Drop Down Mode</label>
<igx-date-picker mode="dropdown" [monthsViewNumber]="2" [hideOutsideDays]="true"></igx-date-picker>
```

以下のサンプルは、日付ピッカーのモード、ボタン、および双方向データ バインディングの使用方法を示します。

<code-view style="height: 680px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-3" >
</code-view>

<div class="divider--half"></div>

### カスタム アクション ボタン
`IgxDatePickerComponent` は、定義済みの ‘Today’ と ‘Cancel’ ボタンをサポートしますが、カスタム アクション ボタンも追加できます。これを行うには、`igxDatePickerActions` ディレクティブ セレクターでマークされた `ng-template` でボタンをラップします。

以下の例では、年と月のカレンダー ビューに切り替えるための 2 つのカスタム アクション ボタンが含まれています。

```html
<!-- sample.component.html -->
<igx-date-picker #picker [(ngModel)]="date">
    <ng-template igxDatePickerActions>
        <div class="action-buttons">
            <button igxButton="flat" (click)="monthsView(picker)">months view</button>
            <button igxButton="flat" (click)="yearsView(picker)">years view</button>
        </div>
    </ng-template>
</igx-date-picker>
```

```typescript
// sample.component.ts
public date = new Date();
public monthsView(datePicker: IgxDatePickerComponent) {
    datePicker.calendar.activeViewYear();
}

public yearsView(datePicker: IgxDatePickerComponent) {
    datePicker.calendar.activeViewDecade();
}
```


<code-view style="height: 680px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-8" >
</code-view>

<div class="divider--half"></div>

### カスタム書式設定
デフォルトで、表示値は指定した [`locale`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#locale) プロパティに基づいて書式設定されます。独自のフォーマッタをフォーマッタ関数ジュに追加して使用することもできます。

```typescript
public date: Date = new Date(Date.now());

private dayFormatter = new Intl.DateTimeFormat("en", { weekday: "long" });
private monthFormatter = new Intl.DateTimeFormat("en", { month: "long" });

public formatter = (date: Date) => {
  return `You selected ${this.dayFormatter.format(date)}, ${date.getDate()} ${this.monthFormatter.format(date)}, ${date.getFullYear()}`;
}
```

次に `IgxDatePickerComponent` の [`formatter`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#formatter) 入力を使用します。

```html
<!-- date-picker-sample.component.html -->

<igx-date-picker [value]="date" [formatter]="formatter"></igx-date-picker>
```

書式設定した日付を表示するサンプル:

<code-view style="height: 540px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-4" >
</code-view>

<div class="divider--half"></div>

## テンプレート  

### ダイアログ モードの日付ピッカー

日付ピッカーの入力グループの外観は、`ng-template` コンテキストで公開される [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) プロパティのいくつかを使用してカスタマイズできます。そのためには、まず入力グループを `ng-template` でラップし、`IgxDatePickerTemplate` ディレクティブで装飾します。次に、`ng-template` 要素内で変数を宣言できます。

以下の例では、デフォルトのラベル "Date" を変更してプレフィックス アイコンを変更します。以下は入力グループで実際の日付ピッカーの値を表示するラベルを設定します。

```html
<igx-date-picker [value]="date">
    <ng-template igxDatePickerTemplate 
                 let-openDialog="openDialog" 
                 let-value="value" 
                 let-displayData="displayData">
        <igx-input-group (click)="openDialog()">
            <igx-prefix>
                <igx-icon>event_note</igx-icon>
            </igx-prefix>
            <label igxLabel>Date Picker</label>
            <input igxInput [value]="displayData"/>
        </igx-input-group>
        <label>{{value}}</label>
    </ng-template>
</igx-date-picker>
```

再テンプレートした入力グループ:

<code-view style="height: 540px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-6" >
</code-view>

<div class="divider--half"></div>

#### ドロップダウン モード日付ピッカー
<a href="#ダイアログ-モードの日付ピッカー">テンプレート ダイアログ モードの日付ピッカー</a> セクションに記載されているすべての情報は、ドロップダウン日付ピッカーを再テンプレートするときにも適用できます。唯一の要件は、HTML 要素が `openDialog(target)` に渡されて、その要素が生成されているドロップダウンの配置ターゲットとして使用されることです。

以下の例では、デフォルトのアイコンを変更し、入力要素の後ろに配置します。日付ピッカーの値を表示する入力グループの下にもラベルがあります。

```html
<igx-date-picker [value]="currentDate" mode="dropdown">
    <ng-template igxDatePickerTemplate 
                 let-openDialog="openDialog" 
                 let-value="value"
                 let-displayData="displayData">
        <igx-input-group>
            <input #dropDownTarget igxInput [value]="displayData" (blur)="changeDate($event)"/>
            <igx-suffix (click)="openDialog(dropDownTarget)">
                <igx-icon>event_note</igx-icon>
            </igx-suffix>
        </igx-input-group>
    </ng-template>
</igx-date-picker>
<label>Date: {{ currentDate | date:'longDate'}}</label>
<igx-snackbar #snackbar></igx-snackbar>
```


<code-view style="height: 550px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-7" >
</code-view>


<div class="divider--half"></div>

## インターナショナリゼーション
`IgxDatePickerComponent` のローカライズは、[`locale`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#locale) 入力で制御できます。[`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) によって提供される `igxCalendarHeader` と `igxCalendarSubheader` テンプレートを使用して、ヘッダーとサブヘッダーの外観を指定できます。このテンプレートを使用する方法の詳細については、[**IgxCalendarComponent**](calendar.md) トピックを参照してください。

以下は日本ロケール定義を持つ日付ピッカーです。

```html
<igx-date-picker locale="ja-JP" [value]="date">
  <ng-template igxCalendarHeader let-format>
    {{ format.month.combined | titlecase }}{{format.day.combined }}{{ format.weekday.combined }}
  </ng-template>
  <ng-template igxCalendarSubheader let-format>
    <span (click)="format.yearView()">{{ format.year.combined }}</span>
    <span (click)="format.monthView()">{{ format.month.combined | titlecase }}</span>
  </ng-template>
</igx-date-picker>
```

> [!NOTE]
> Internet Explorer および Edge ブラウザーの場合、両方のブラウザーがこの機能を提供する Intl API を実装しないため、日付部分は空の文字列です。 ([formatToParts](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts) を参照)

このブラウザーをサポートするには、[ngIf](https://angular.io/api/common/NgIf#using-non-inlined-then-template) ディレクティブと代わりのテンプレートを使用します。

```html
<!-- app.component.html-->
<igx-date-picker id="date-picker" locale="ja-JP" [value]="date" #component>
    <div *ngIf="formatParts; else parseTemplate">
        <ng-template igxCalendarHeader let-format>
            {{ format.month.combined | titlecase }} 
            {{ format.day.combined }} 
            {{ format.weekday.combined }}
        </ng-template>
        <ng-template igxCalendarSubheader let-format>
            <span (click)="format.yearView()">{{ format.year.combined }}</span>
            <span (click)="format.monthView()">{{ format.month.combined | titlecase }}</span>
        </ng-template>
    </div>

    <!-- Parse template for browsers not supporting Intl-->
    <ng-template #parseTemplate>
        <ng-template igxCalendarHeader let-format>
            {{ getDatePart(format, component, 'month') | titlecase }} 
            {{ getDatePart(format, component, 'day') }} 
            {{ getDatePart(format, component, 'weekday') }}
        </ng-template>
        <ng-template igxCalendarSubheader let-format>
            <span (click)="format.yearView()">{{ getDatePart(format, component, 'year') }}</span>
            <span (click)="format.monthView()">{{ getDatePart(format, component, 'month') }}</span>
        </ng-template>
    </ng-template>
</igx-date-picker>
```
**ngIf** は、使用するテンプレートを制御するために **formatParts** 式の値を評価します。代わりの **#parseTemplate** テンプレートを参照します。{} にある式は評価された値を返す **getDatePart** メソッドを起動します。この場合、書式設定された日付部分 (年、曜日、月など) を返します。**getDatePart** に渡されたパラメーターは、書式設定が [**IgxDatePickerComponent**]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) の locale および format オプションに基づいて設定されるために必要です。

```typescript
// app.component.ts
public intlDateTimeFormat = new Intl.DateTimeFormat() as any;
public formatParts: boolean = this.intlDateTimeFormat.formatToParts;

public getDatePart(val: any, component: any, datePart: string) {
    const date = val.date as Date;
    const locale = component.locale;
    const formatOptions: Intl.DateTimeFormatOptions = {};
    formatOptions[datePart] = component.formatOptions[datePart];

    return date.toLocaleString(locale, formatOptions);

    // instead of toLocaleString we can use Intl.DateTimeFormat.format as well:
    // const partFormatter = new Intl.DateTimeFormat(locale, formatOptions);
    // return partFormatter.format(date);
}
```

以下は結果です。

<code-view style="height: 580px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-5" >
</code-view>

<div class="divider--half"></div>

## スタイル設定
日付ピッカーのスタイル設定には、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

日付ピッカーはカレンダーのテーマを使用するので、[`igx-calendar-theme`]({environment:sassApiUrl}/index.html#function-igx-calendar-theme) を拡張する新しいテーマを作成し、そのパラメーターを使用して日付ピッカーの項目をスタイル設定します。

```scss
$custom-datepicker-theme: igx-calendar-theme(
    $header-background: #345779,
    $content-background: #fdfdfd,
    $header-text-color: #ffffff,
    $date-current-text-color: #2dabe8,
    $picker-arrow-color: #2dabe8,
    $date-selected-text-color: #fdfdfd,
    $date-current-bg-color: #fdfdfd,
    $picker-arrow-hover-color: #345779,
    $year-current-text-color: #2dabe8,
    $year-hover-text-color: #2dabe8,
    $month-current-text-color: #2dabe8,
    $month-hover-text-color: #2dabe8,
    $picker-text-color: #2dabe8,
    $picker-text-hover-color: #345779,
);
```

### CSS 変数の使用 

最後に日付ピッカーのカスタム テーマを設定します。 

```scss
@include igx-css-vars($custom-datepicker-theme);
```

### テーマ オーバーライドの使用

Internet Explorer 11 などの古いブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチを用いる必要があります。

コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

 ```scss
:host {
    ::ng-deep {
        @include igx-calendar($custom-datepicker-theme);
    }
}
```


<code-view style="height:500px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-styling-sample" >
</code-view>


## API リファレンス
<div class="divider--half"></div>

* [IgxDatePickerComponent]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)
* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-calendar-theme)
* [IgxOverlay スタイル]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)

## Theming Dependencies
<div class="divider--half"></div>

* [IgxCalendar Theme]({environment:sassApiUrl}/index.html#function-igx-calendar-theme)
* [IgxOverlay Theme]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)
* [IgxIcon Theme]({environment:sassApiUrl}/index.html#function-igx-icon-theme)
* [IgxButton Theme]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [IgxInputGroup Theme]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)
* [IgxDropDown Theme]({environment:sassApiUrl}/index.html#function-igx-drop-down-theme)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)