---
title: Date Range Picker コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Angular Date Range Picker コンポーネントを使用すると、開始日と終了日を定義して日付範囲を選択できます。カレンダー UI から範囲を選択できます。今すぐお試しください。 
_keywords: Angular Date Range Picker, Date Range Picker, Date Picker, Angular Date Range Picker Component, Angular UI Components, Angular component
_language: ja
---

# Angular Date Range Picker (日付範囲ピッカー) コンポーネントの概要

Angular Date Range Picker は、ユーザーが開始日と終了日の値を簡単に選択できるようにするテキスト入力とカレンダー ポップアップを含む軽量のコンポーネントです。範囲制限、フォーマット、データ範囲の選択、開始値と終了値のグループ化などの機能を使用して、アプリの要件に合わせてカスタマイズできます。Angular の Date Range Picker を使用すると、開発者はデフォルトのビュー プロパティを変更して、月、年、または複数年に設定することもできます。

## Angular Date Range Picker の例
コンポーネントの動作を示すために、この基本的な Angular Date Range Picker の例を作成しました。この場合、カレンダーのポップアップが表示され、ユーザーは開始日と終了日の値を選択できます。

<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/basic-daterangepicker" alt="Angular Date Range Picker 例">
</code-view>

<div class="divider--half"></div>


## Getting Started with Ignite UI for Angular Date Range Picker

To get started with the Ignite UI for Angular Datepicker component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxDateRangePickerModule` in your **app.module.ts** file.

`IgxDateRangePicker` は [**IgxCalendarComponent**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) を使用しますが、タッチ操作のために **BrowserAnimationsModule** と **HammerModule** に依存関係があり、これらも `AppModule` に追加する必要があります。

```typescript
// app.module.ts

import { IgxDateRangePickerModule } from 'igniteui-angular';
// import { IgxDateRangePickerModule } from '@infragistics/igniteui-angular'; for licensed package

import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    ...
    imports: [..., IgxDateRangePickerModule, BrowserAnimationsModule, HammerModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxDateRangePickerComponent` as a standalone dependency, or use the [`IGX_DATE_RANGE_PICKER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/date-range-picker/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts
import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_DATE_RANGE_PICKER_DIRECTIVES } from 'igniteui-angular';
// import { IGX_DATE_RANGE_PICKER_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package
@Component({
    selector: 'app-home',
    template: '<igx-date-range-picker [value]="range"></igx-date-range-picker>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [BrowserAnimationsModule, HammerModule, IGX_DATE_RANGE_PICKER_DIRECTIVES]
    /* or imports: [BrowserAnimationsModule, HammerModule, IgxDateRangePickerComponent] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Date Range Picker module or directives imported, you can start using the `igx-date-range-picker` component.

## Using the Angular Date Range Picker Component
### Date Range Picker の表示
Date Range Picker をデフォルトのモードでインスタンス化するには、以下のコードを使用してください。

```html
<igx-date-range-picker [value]="range"></igx-date-range-picker>
```

```typescript
public range: DateRange = { start: new Date(2020, 4, 20), end: new Date(2020, 4, 25) };
```

>注: Date Range Picker の値は開始日と終了日を含む [`DateRange`]({environment:angularApiUrl}/interfaces/daterange.html) 型です。

双方向のデータバインディングを作成するには、`ngModel` を使用します。
```html
<igx-date-range-picker [(ngModel)]="range"></igx-date-range-picker>
```

### コンポーネントの投影

デフォルトの Date Range Picker UX の機能向上のため、コンポーネントは子コンポーネントの投影を許可します - [`IgxInputGroupComponent`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) 、[`igxLabel`](label-input.md)、[`igx-hint / igxHint`](input-group.md#hint)、[`igx-prefix / igxPrefix`](input-group.md#prefix-および-suffix)、[`igx-suffix / igxSuffix`](input-group.md#prefix-および-suffix) ([`IgxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html) を除く) と同じです。詳細については、[Label および Input](label-input.md) トピックを参照してください。

さらに、Ignite UI for Angular Date Range Picker は [`IgxPickerToggleComponent`]({environment:angularApiUrl}/classes/igxpickertogglecomponent.html) を投影するように構成できます。IgxPickerToggleComponent は、カレンダーの切り替えを制御し、[カレンダーの切り替え](#カレンダーの切り替え)セクションに示すように変更できます。

```html
<igx-date-range-picker #dateRangePicker [(ngModel)]="range">
    <label igxLabel>Flight dates</label>
    <igx-hint *ngIf="dateRangePicker.invalid">
        Please choose start and end date!
    </igx-hint>
</igx-date-range-picker>
```

### 個別の編集可能な入力の表示
Angular Date Range Picker コンポーネントは、開始日と終了日の 2 つの入力を構成できます。これは、以下のデモに示すように、[`IgxDateRangeStartComponent`]({environment:angularApiUrl}/classes/igxdaterangestartcomponent.html) および [`IgxDateRangeEndComponent`]({environment:angularApiUrl}/classes/igxdaterangeendcomponent.html) を日付範囲ピッカーの子として使用して実現できます。

```html
<igx-date-range-picker [(ngModel)]="range">
    <igx-date-range-start>
        <input igxInput igxDateTimeEditor type="text">
    </igx-date-range-start>
    <igx-date-range-end>
        <input igxInput igxDateTimeEditor type="text">
    </igx-date-range-end>
</igx-date-range-picker>
```
- [`IgxDateRangeStartComponent`]({environment:angularApiUrl}/classes/igxdaterangestartcomponent.html) と [`IgxDateRangeEndComponent`]({environment:angularApiUrl}/classes/igxdaterangeendcomponent.html) は、既存の [`IgxInputGroupComponent`](input-group.md) を拡張します。このような構成を操作するには、[`IgxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html) に定義する必要があります。さらに、[`IgxInputGroupComponent`](input-group.md) で利用可能なすべての他のコンポーネントおよびディレクティブも使用できます。
- 両方の入力で日付編集を有効にするには、[`igxDateTimeEditor`](date-time-editor.md) ディレクティブでデコレートする必要があります。


<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/daterangepicker-start-end" >
</code-view>

<div class="divider--half"></div>

### ユーザー エクスペリエンス

単一の読み取り専用入力のデフォルト構成では、入力の任意の場所 (カレンダーのアイコンを含む) をクリックすると、カレンダーを開くことができます。開始日と終了日の 2 つの入力がある場合、両方の入力がデフォルトで編集可能なため、カレンダーはカレンダー アイコンからのみ開きます。

カレンダーが表示されている場合、開始日と終了日を選択して範囲を選択できます。日付を選択すると、2 番目の日付が選択されるまで開始日と終了日が設定されます。選択された範囲がある場合、カレンダーでその他の日付をクリックすると、新しい範囲選択を開始します。

コンポーネントの読み取り専用入力で表示される場合、開始日と終了日はハイフン (-) で区切られます。Start と end に異なる入力を定義する場合、`to` で区切ります。後者はローカライズまたはテンプレートで上書きできます。詳細については、以下の[テンプレート化](#テンプレート化)の例を参照してください。

## コード例

### ラベル
日付範囲ピッカーのラベルを定義するには、以下のスニペットに示すように [`igxLabel`](label-input.md) ディレクティブを使用する必要があります。

```html
<igx-date-range-picker [(ngModel)]="range">
    <label igxLabel>Flight dates</label>
</igx-date-range-picker>
```

### カレンダーの切り替え
単一の読み取り専用入力を使用するデフォルト構成では、デフォルトのカレンダーのアイコンがプレフィックスとして表示されます。カレンダーのアイコンは、[`IgxPickerToggleComponent`]({environment:angularApiUrl}/classes/igxpickertogglecomponent.html) コンポーネントを使用して変更または再定義できます。入力の開始位置または終了位置を定義する [`igxPrefix`](input-group.md#prefix-および-suffix) または [`igxSuffix`](input-group.md#prefix-および-suffix) で設定できます。デフォルトの位置を変更し、アイコンをサフィックスとして表示するには、以下を実行する必要があります。

```html
<igx-date-range-picker>
    <igx-picker-toggle igxSuffix>
        <igx-icon>calendar_view_day</igx-icon>
    </igx-picker-toggle>
</igx-date-range-picker>
```

Date Range Picker に開始日と終了日の 2 つの入力がある場合、デフォルトでカレンダーアイコンを公開しません。[`IgxPickerToggleComponent`]({environment:angularApiUrl}/classes/igxpickertogglecomponent.html) は、[`IgxDateRangeStartComponent`]({environment:angularApiUrl}/classes/igxdaterangestartcomponent.html) または [`IgxDateRangeEndComponent`]({environment:angularApiUrl}/classes/igxdaterangeendcomponent.html) の子として追加する必要があります。

```html
<igx-date-range-picker>
    <igx-date-range-start>
        ...
        <igx-picker-toggle igxPrefix>
            <igx-icon>calendar_view_day</igx-icon>
        </igx-picker-toggle>
        ...
    </igx-date-range-start>
    <igx-date-range-end>
        ...
    </igx-date-range-end>
</igx-date-range-picker>
```

### ダイアログ モード

[`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html) コンポーネントには、ドロップダウン (デフォルト) とダイアログの 2 つのモードがあります `dialog` モードに切り替えるには、以下の手順を実行します。

```html
<igx-date-range-picker [mode]="'dialog'"></igx-date-range-picker>
```


<code-view style="height:500px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/daterangepicker-mode" >
</code-view>

<div class="divider--half"></div>

範囲値はカレンダーから日付が選択されるときに設定されます。ドロップダウン モードでは、`Done` ボタンは使用できません。

### カスタム動作ボタン

Date Range Picker のアクション ボタンは、[`igxPickerActions`]({environment:angularApiUrl}/classes/igxpickeractionsdirective.html) ディレクティブを使用してテンプレート化できます。一般的なシナリオは、以下のデモのように、ユーザーが事前定義された範囲から選択できるようにすることです。

<code-view style="height:500px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/daterangepicker-range-buttons" >
</code-view>

### キーボード ナビゲーション
> 注: [ダイアログ モード](#ダイアログ-モード)のデモおよび[個別の編集可能な入力の表示](#個別の編集可能な入力の表示)を使用して、以下で定義するキーボードの組み合わせをお試しください。

[`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html) カレンダー UI をキーボードで開く、または閉じる動作は、`dropdown` モードでのみ使用でき、以下のキーの組み合わせでトリガーできます。

- <kbd>Alt</kbd> + <kbd>下矢印</kbd> - カレンダー UI を含むドロップダウンを開いてフォーカスします。
- <kbd>Alt</kbd> + <kbd>上矢印</kbd> - ロップダウンを閉じて入力フィールド (2 つの異なる入力が使用されている場合は開始日の入力フィールド) にフォーカスします。
- <kbd>Esc</kbd> - ドロップダウンを閉じて入力フィールド (2 つの異なる入力が使用されている場合は開始日の入力フィールド) にフォーカスします。

Date Range Picker のカレンダー UI 内のキーボード ナビゲーションは、すべてのモードと構成で使用できます。カレンダーを開くとフォーカスが取得され、以下のキーボードの組み合わせを使用できます。

- <kbd>Enter</kbd> - 開始日と終了日を選択します。
- <kbd>PageUp</kbd>、<kbd>PageDown</kbd>、<kbd>Shift</kbd> + <kbd>PageUp</kbd>、<kbd>Shift</kbd> + <kbd>PageDown</kbd>、<kbd>Home</kbd>、<kbd>End</kbd>、<kbd>Tab</kbd> - カレンダーをナビゲートします。

[カレンダーのキーボード ナビゲーションセクション](calendar.md#キーボード-ナビゲーション)には、カレンダーで使用できるすべてのキーボードの組み合わせが含まれています。

2 つの異なる入力を使用する場合、[`igxDateTimeEditor`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html) ディレクティブの[キーボード ナビゲーション](date-time-editor.md#キーボード-ナビゲーション)は Date Range Picker コンポーネントにも適用できます。

- <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>左矢印</kbd> / <kbd>右矢印</kbd> -日付セクション間を移動します。<kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>右矢印</kbd>でセクションの最後に移動します。既にセクションの最後にある場合、次のセクションの最後に移動します。反対方向も同様です。
- <kbd>上矢印</kbd> / <kbd>下矢印</kbd> - 日付部分を増減します。
- <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>;</kbd> - エディターに現在の日時を設定します。

<div class="divider--half"></div>

### 書式設定

Date Range Picker コンポーネントはさまざまな表示および入力形式をサポートします。

値の表示形式には、Angular [DatePipe](https://angular.io/api/common/DatePipe) 形式のいずれかを使用します。`shortDate` や `longDate` などの定義済みの形式オプションをサポートできます。

`inputFormat` プロパティは、DatePipe でサポートされる文字 (`MM/dd/yyyy` など) を使用して構成された書式文字列を受け入れますが、`shortDate` や `longDate` などの定義済みの形式オプションはサポートしていません。`inputFormat` プロパティが定義されていない場合、[Angular locale ID](https://angular.io/api/core/LOCALE_ID) トークンがビルド時に使用されます。

```html
<igx-date-range-picker [(ngModel)]="range" required
    inputFormat="dd/MM/yyyy" displayFormat="shortDate">
</igx-date-range-picker>
```

> 注: `IgxDateRangePicker` が IME 入力をサポートするようになりました。合成が終了すると、コントロールはワイド文字の数字を ASCII 文字に変換します。

### フォームと検証
Date Range Picker コンポーネントは、コア FormsModule [NgModel](https://angular.io/api/forms/NgModel) と [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule) ([`FormControl`](https://angular.io/api/forms/FormControl)、[`FormGroup`](https://angular.io/api/forms/FormGroup) など) のすべてのフォーム ディレクティブをサポートします。これには、[フォーム バリデータ](https://angular.io/api/forms/Validators)機能も含まれます。さらに、コンポーネントの[最小値と最大値](#最小値と最大値)もフォーム バリデータとして機能します。

[NgModel](https://angular.io/api/forms/NgModel) とバリデータは、[`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html) で、または個々の開始日と終了日で設定できます。

次のスニペットと例は、テンプレート駆動型フォームで `required` バリデータを使用する方法を示しています。

最初に、コンポーネント レベルで実行される単一の読み取り専用範囲コンポーネントのモデルを設定する必要があります。

```html
<igx-date-range-picker [(ngModel)]="range" required>
    <label igxLabel>Period</label>
</igx-date-range-picker>
```

2 つの異なる入力を設定する場合も同じ構成を使用できます。この場合、検証は両方の入力に適用されます。

```html
<igx-date-range-picker [(ngModel)]="range" required>
    <igx-date-range-start>
        <label igxLabel>Start Date</label>
        <input igxInput igxDateTimeEditor type="text">
        <igx-picker-toggle igxPrefix>
            <igx-icon>calendar_today</igx-icon>
        </igx-picker-toggle>
    </igx-date-range-start>
    <igx-date-range-end>
        <label igxLabel>End Date</label>
        <input igxInput igxDateTimeEditor type="text">
    </igx-date-range-end>
</igx-date-range-picker>
```

2 つの別々の入力を使用する場合、各入力でモデルと必要なプロパティを設定できます。注: 検証は各入力に固有です。

```html
<igx-date-range-picker>
    <igx-date-range-start>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.start" type="text" required>
    </igx-date-range-start>
    <igx-date-range-end>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.end" type="text" required>
    </igx-date-range-end>
</igx-date-range-picker>
```

<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/daterangepicker-validation" >
</code-view>

<div class="divider--half"></div>

### 最小値と最大値
[`minValue`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#minValue) および [`maxValue`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#maxValue) プロパティを指定して、これらの値で定義された範囲外のカレンダー日付を無効にすることにより、ユーザー入力を制限できます。

```typescript
public minDate = new Date(2020, 1, 15);
public maxDate = new Date(2020, 11, 1);
```

```html
<igx-date-range-picker [(ngModel)]="range" required
    [minValue]="minDate" [maxValue]="maxDate">
</igx-date-range-picker>
```

```html
<igx-date-range-picker [minValue]="minDate" [maxValue]="maxDate">
    <igx-date-range-start>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.start" type="text" required>
    </igx-date-range-start>
    <igx-date-range-end>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.end" type="text" required>
    </igx-date-range-end>
</igx-date-range-picker>
```

`IgxDateRangePickerComponent` はバリデータです。つまり、`minValue` と `maxValue` を内部で使用して有効性を制御します。`ngModel` で両方にアクセスすることもできます。
```html
<igx-date-range-picker #dateRangePicker="ngModel" [(ngModel)]="range" required
    [minValue]="minDate" [maxValue]="maxDate">
    <igx-date-range-start>
        <input igxInput igxDateTimeEditor type="text">
    </igx-date-range-start>
    <igx-date-range-end>
        <input igxInput igxDateTimeEditor type="text">
    </igx-date-range-end>
</igx-date-range-picker>

<!-- minValue & maxValue will be true if the current range does not satisfy them -->
<div *ngIf="dateRangePicker.minValue || dateRangePicker.maxValue">
    <p>Value not in range.</p>
</div>
```

### テンプレート化

2 つのエディターを使用する場合、[`igxDateRangeSeparator`]({environment:angularApiUrl}/classes/igxdaterangeseparatordirective.html) ディレクティブを使用してデフォルトのセパレーターを置き換えることができます。以下は日付のセパレーターをハイフン `-` に変更する方法を示します。

```html
<igx-date-range-picker>
    <igx-date-range-start>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.start" type="text" required>
    </igx-date-range-start>
    <ng-template igxDateRangeSeparator>-</ng-template>
    <igx-date-range-end>
        <input igxInput igxDateTimeEditor [(ngModel)]="range.end" type="text" required>
    </igx-date-range-end>
</igx-date-range-picker>
```

## スタイル設定

`igxDateRangePicker` のスタイル設定は、すべてのテーマ関数とコンポーネントミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Date Range Picker コンポーネントは `date-range-picker-theme` を公開し、`igxInputGroupComponent`、`igxCalendar`、`igxOverlay` などの複数のコンポーネントおよびディレクティブを使用します。前述のコンポーネントおよびディレクティブのグローバル スタイル設定は `igxDateRangeComponent` に影響します。Date Range Picker コンポーネントは入力グループおよびカレンダーテーマを使用するため、[`calendar-theme`]({environment:sassApiUrl}/index.html#function-calendar-theme) および [`input-group-theme`]({environment:sassApiUrl}/index.html#function-input-group-theme) を拡張する新しいテーマを作成し、それらのパラメーターの一部と日付範囲の選択テーマを使用して日付範囲ピッカーをスタイル設定する必要があります。単一のカスタム カラー パレットを使用して、すべてのテーマで使用する色を定義します。

```scss
// COMMON
$purple: #9E379F;
$blue: #61AEDB;

$custom-palette: palette($primary: $blue, $secondary: $purple);

$today-text: color($custom-palette, "primary", 500);
$text-color: color($custom-palette, "secondary", 200);
$color-focused: color($custom-palette, "secondary", 500);

// DATE-RANGE
$custom-date-range-theme:date-range-picker-theme(
    $label-color: $color-focused
);

// INPUT GROUP
$custom-input-group-theme: input-group-theme(
  $palette: $custom-palette,
  $filled-text-color: $text-color,
  $idle-text-color: $text-color,
  $focused-text-color: $color-focused,
  $hover-bottom-line-color: $color-focused,
  $idle-bottom-line-color: $purple
);

// CALENDAR
$custom-calendar-theme: calendar-theme(
    $palette: $custom-palette,
    $date-current-text-color: $today-text,
    $border-radius: 0.5,
    $date-border-radius: 0.5
);
```

### CSS 変数の使用
最後にカスタム テーマを渡します。

```scss
@include css-vars($custom-date-range-theme);
@include css-vars($custom-input-group-theme);
@include css-vars($custom-calendar-theme);
```

### テーマ オーバーライドの使用

Internet Explorer 11 などの古いブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチを用いる必要があります。

コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

 ```scss
:host {
    ::ng-deep {
        @include date-range-picker($custom-date-range-theme);
        @include input-group($custom-input-group-theme);
        @include calendar($custom-calendar-theme);
    }
}
```

### スタイルのスコーピング
スタイルのスコーピングについては、詳細は[オーバーレイのスコープ コンポーネント スタイル](overlay-styling.md#スコープ-コンポーネント-スタイル)および[入力グループのスタイル スコーピング](input-group.md#スタイル設定)の両方のスタイル設定セクションを参照してください。


<code-view style="height:600px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/styled-daterangepicker" >
</code-view>


## アプリケーション デモ
以下のデモは、[`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html) を使用する航空券のフォームを定義します。日付が選択されていない場合、検証エラーを表示するために [`IgxHint`]({environment:angularApiUrl}/classes/igxhintdirective.html)  が使用されます。日付の選択は、[`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html) の [`minValue`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#minValue) および [`maxValue`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#maxValue) プロパティによって制限されます。


<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/flight-booking" >
</code-view>

<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxDateRangePickerComponent]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html)
* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent スタイル]({environment:sassApiUrl}/index.html#function-calendar-theme)
* [IgxOverlay スタイル]({environment:sassApiUrl}/index.html#function-overlay-theme)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)

## テーマの依存関係

* [IgxCalendar テーマ]({environment:sassApiUrl}/index.html#function-calendar-theme)
* [IgxOverlay テーマ]({environment:sassApiUrl}/index.html#function-overlay-theme)
* [IgxIcon テーマ]({environment:sassApiUrl}/index.html#function-icon-theme)
* [IgxButton テーマ]({environment:sassApiUrl}/index.html#function-button-theme)
* [IgxInputGroup テーマ]({environment:sassApiUrl}/index.html#function-input-group-theme)
* [IgxDropDown テーマ]({environment:sassApiUrl}/index.html#function-drop-down-theme)

## その他のリソース
関連トピック:
* [Date Time Editor](date-time-editor.md)
* [Label および Input](label-input.md)
* [リアクティブ フォームの統合](angular-reactive-form-validation.md)
* [Date Picker](date-picker.md)


コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
