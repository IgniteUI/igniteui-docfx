---
title: Angular Date Picker | 日付のピッカー | インフラジスティックス
_description: Ignite UI for Angular Date Picker コントロールのを使用して、カレンダーから Web アプリケーションに日付を選択する機能を使用する方法を学びます。
_keywords: angular date picker, angular 日付のピッカー, angular コンポーネント, ignite ui for angular
_language: ja
---

# Angular Date Picker
The Ignite UI for Angular Date Picker Component lets users pick a single date through a month-view calendar dropdown or editable input field. The picker also supports a `dialog` mode for selection from the calendar only, locale-aware and customizable date formatting and validation integration.

## Angular Date Picker の例
<!-- TODO: datepicker sample with several options enabled -->
<code-view style="height: 550px;"
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-1" alt="Angular Date Picker の例">
</code-view>
<div class="divider--half"></div>

## 使用方法

### はじめに
To get started with the Date Picker component, first you need to import the `IgxDatePickerModule` in the module that you would like to use it in, for our example we will be using the **app.module.ts** file. 

>[!NOTE]
> デートピッカーが [**IgxCalendarComponent**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) を使用し、 タッチ操作のために **BrowserAnimationsModule**  と **HammerModule** に依存関係があり、これらもモジュールに追加する必要があります。

```typescript
...
import { HammerModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxDatePickerModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [ 
        ...,
        IgxDatePickerModule,
        BrowserAnimationsModule,
        HammerModule,
        ...
    ],
    ...
})
export class AppModule {}
```

### Date Picker の表示
デフォルトの`ドロップダウン`状態の Date Picker をインスタンス化するには、以下のコードを使用してください。

```html
<igx-date-picker>
    <label igxLabel>Date</label>
</igx-date-picker>
```

### オプション
The `IgxDatePickerComponent` can be bound to a `date` or a `string`.

```html
<igx-date-picker [value]="date"></igx-date-picker>
```

```typescript
public date = new Date(2000, 0, 1);
```

If a string is bound to the picker, it needs to be a date-only string in the `ISO 8601` format:
```html
<igx-date-picker [value]="'2000-01-01'"></igx-date-picker>
```
More information about this can be found in [DateTime Editor's ISO section](date-time-editor.md#iso).

Two-way binding is possible through `ngModel`:
```html
<igx-date-picker [(ngModel)]="date"></igx-date-picker>
```

As well as through the `value` input:
```html
<igx-date-picker [(value)]="date"></igx-date-picker>
```

Additionally, `formControlName` can be set on the picker, to use it in a reactive form:
```html
<form [formGroup]="form">
    <igx-date-picker formControlName="datePicker"></igx-date-picker>
</form>
```

```typescript
export class SampleFormComponent {
    // ...
    public form: FormGroup;
    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            datePicker: ['', Validators.required]
        });
    }
}
```

> [!NOTE]
> The picker always returns a `Date` value, this means that If it is model bound or two-way bound to a string variable, after a new date has been chosen, it will be of type `Date`.

### コンポーネントの投影
The [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) allows the projection of child components that the  [`IgxInputGroupComponent`]({input-group.md) supports (with the exception of [`IgxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html)) - [`igxLabel`](label-input.md), [`IgxHint`](input-group.md#hints), [`igxPrefix`](input-group.md#prefix--suffix), [`igxSuffix`](input-group.md#prefix--suffix). 詳細については、[Label および Input](label-input.md) トピックを参照してください。

```html
<igx-date-picker #datePicker>
    <igx-icon igxSuffix (click)="datePicker.open()">keyboard_arrow_down</igx-icon>
</igx-date-picker>
```
The above sample will add an additional toggle icon at the end of the input, right after the default clear icon. This will not remove the default toggle icon, though as prefixes and suffixes can be stacked one after the other. 

#### Customizing the toggle and clear icons 
The [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) can be configured with [`IgxPickerToggleComponent`]({environment:angularApiUrl}/classes/igxpickertogglecomponent.html) and [`IgxPickerClearComponent`]({environment:angularApiUrl}/classes/igxpickerclearcomponent.html), these can be used to change the toggle and clear icons without having to add your own click handlers.

```html
 <igx-date-picker>
    <label igxLabel>Select a Date</label>
    <igx-picker-toggle igxPrefix>
        <igx-icon>calendar_view_day</igx-icon>
    </igx-picker-toggle>
    <igx-picker-clear igxSuffix>
        <igx-icon>delete</igx-icon>
    </igx-picker-clear>
</igx-date-picker>
```

#### カスタム アクション ボタン
The picker's action buttons can be modified in two ways:
- the button's text can be changed using the [`todayButtonLabel`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#todaybuttonlabel)) and the [`cancelButtonLabel`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#cancelbuttonlabel) input properties:
```html
<igx-date-picker [todayButtonLabel]="'今日'" [cancelButtonLabel]="'キャンセル'"></igx-date-picker>
```

- the whole buttons can be templated using the [`igxPickerActions`]({environment:angularApiUrl}/classes/pickeractionsdirective.html) directive:
With it you gain access to the date picker's [`calendar`](calendar.md) and all of its members:
```html
<igx-date-picker>
    <ng-template igxPickerActions let-calendar>
        <button igxButton="flat" (click)="calendar.viewDate = today">Today</button>
    </ng-template>
</igx-date-picker>
```

### キーボード ナビゲーション

Opening and closing the [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)'s calendar UI with the keyboard is available only for `dropdown` mode and can be triggered via the key combinations below:

|キー|説明|
|----|-----------|
| <kbd>Space</kbd> | Displays the calendar pop-up and focuses it |
| <kbd>Alt</kbd> + <kbd>&darr;</kbd> | Displays the calendar pop-up and focuses it |
| <kbd>Esc</kbd> | Closes the calendar pop-up and focuses the input field |
| <kbd>Enter</kbd> | Closes the calendar pop-up, selecting the focused date and moves the focus to the input field |
| <kbd>Alt</kbd> + <kbd>&uarr;</kbd> | Closes the calendar pop-up and focuses the input field |

Since the [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)` uses the [`IgxDateTimeEditorDirective`](date-time-editor.md) it inherits its keyboard navigation.

## コード例

### Dialog Mode
The [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) also supports a `dialog` mode:
```html
<igx-date-picker [mode]="'dropdown'"></igx-date-picker>
```
<code-view style="height: 540px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-2" >
</code-view>

<div class="divider--half"></div>

### 表示および入力形式
[`inputFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#inputformat) and [`displayFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displayFormat) are properties which can be set to make the picker's editor follow a specified format. The [`inputFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#inputformat) property is used when the picker is in `dropdown` mode and it governs the input's editable mask, as well as its placeholder (if none is set). Additionally, the [`inputFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#inputformat) is locale based, so if none is provided, the picker will default to the one used by the browser.

A good thing to note is that the picker will always add a leading zero on the `date` and `month` portions if they were provided in a format that does not have it, e.g. `d/M/yy` becomes `dd/MM/yy`. This applies only during editing.

[`displayFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displayformat) on the other hand uses Angular's [`DatePipe`](https://angular.io/api/common/DatePipe) and is used to format the picker's input when it is not focused. If no [`displayFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displayformat) is provided, the picker will use the [`inputFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#inputformat) as its [`displayFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displayformat).

More information about these can be found in the [`IgxDateTimeEditor`](date-time-editor.md#examples) examples section.

<code-view style="height: 680px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-3" >
</code-view>

<div class="divider--half"></div>

### 増加および減少
The [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) exposes [`increment`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#increment) and [`decrement`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#decrement) methods. Both of which come from the  [`IgxDateTimeEditorDirective`](date-time-editor.md#increment-decrement) and can be used for incrementing and decrementing a specific [`DatePart`]({environment:angularApiUrl}/classes/datepart.html) of the currently set date.

```html
<igx-date-picker #datePicker>
    <igx-icon igxPrefix (click)="datePicker.increment(DatePart.Month, 3)">keyboard_arrow_up</igx-icon>
    <igx-icon igxPrefix (click)="datePicker.decrement(DatePart.Year. 4)">keyboard_arrow_down</igx-icon>
</igx-date-picker>
```

It also has as a [`spinDelta`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#spindelta) input property which can be used to increment or decrement a specific date part of the currently set date. 
```html
<igx-date-picker [spinDelta]="{date: 2, month: 3, year: 4}"></igx-date-picker>
```

### In Angular Forms
The [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) supports all directives from the core [FormsModule](https://angular.io/api/forms/FormsModule), [NgModel](https://angular.io/api/forms/NgModel) and [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule) ([`FormControl`](https://angular.io/api/forms/FormControl), [`FormGroup`](https://angular.io/api/forms/FormGroup), etc.). これには、[フォーム バリデーター](https://angular.io/api/forms/Validators)機能も含まれます。 In addition, the component's [`minValue`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#minvalue) and [`maxValue`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#maxvalue) properties act as form validators.

You can see the [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) in a reactive form by visiting our [Reactive Forms Integration](input-group-reactive-forms.md) topic.

### Calendar Specific settings
The [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) uses the [`IgxCalendarComponent`](calendar.md) and you can modify some of its settings via the properties that the date picker exposes. Some of these include [`displayMonthsCount`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displaymonthscount) which allows more than one calendar to be displayed when the picker expands, [`weekStart`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#weekstart) which determines the starting day of the week, [`showWeekNumbers`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#showweeknumbers) which shows the number for each week in the year and more.

## インターナショナリゼーション
[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) のローカライズは、[`locale`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#locale) 入力で制御できます。さらに、[`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) によって提供される `igxCalendarHeader` と `igxCalendarSubheader` テンプレートを使用して、ヘッダーとサブヘッダーの外観を指定できます。このテンプレートを使用する方法の詳細については、[**IgxCalendarComponent**](calendar.md) トピックを参照してください。

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

## スタイル設定
日付ピッカーのスタイル設定には、すべてのテーマ関数とコンポーネント mixins が存在する `index` ファイルをインポートする必要があります。

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

コンポーネントが [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化に`ペネトレーション`する必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

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
* [IgxDateTimeEditorDirective]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html)
* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-calendar-theme)
* [IgxOverlay スタイル]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)

## その他のリソース
* [Time Picker](time-picker.md)
* [Date Time Editor](date-time-editor.md)
* [Date Range Picker](date-range-picker.md)
* [リアクティブ フォームの統合](input-group-reactive-forms.md)

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
