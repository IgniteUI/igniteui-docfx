---
title: Angular Date Picker | 日付のピッカー | インフラジスティックス
_description: Ignite UI for Angular Date Picker コントロールのを使用して、カレンダーから Web アプリケーションに日付を選択する機能を使用する方法を学びます。
_keywords: angular date picker, angular 日付のピッカー, angular コンポーネント, ignite ui for angular
_language: ja
---

# Angular Date Picker
Ignite UI for Angular Date Picker コンポーネントを使用すると、ユーザーは月表示のカレンダード ロップダウンまたは編集可能な入力フィールドから単一の日付を選択できます。ピッカーは、カレンダーからのみ選択するための `dialog` モード、ロケール対応でカスタマイズ可能な日付の書式設定と検証の統合もサポートしています。

## Angular Date Picker の例
<!-- TODO: datepicker sample with several options enabled -->
<code-view style="height: 550px;"
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-1" alt="Angular Date Picker の例">
</code-view>
<div class="divider--half"></div>

## 使用方法

### はじめに
Date Picker コンポーネントの使用を開始するには、まず、使用するモジュールに `IgxDatePickerModule` をインポートする必要があります。この例では、**app.module.ts** ファイルを使用します。 

>[!NOTE]
> Date Picker が [**IgxCalendarComponent**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) を使用し、タッチ操作のために **BrowserAnimationsModule** と**HammerModule** に依存関係があり、これらもモジュールに追加する必要があります。

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
`IgxDatePickerComponent` は `date` または `string` にバインドできます。

```html
<igx-date-picker [value]="date"></igx-date-picker>
```

```typescript
public date = new Date(2000, 0, 1);
```

文字列がピッカーにバインドされている場合は、`ISO8601` 形式の日付のみの文字列である必要があります。
```html
<igx-date-picker [value]="'2000-01-01'"></igx-date-picker>
```
これについての詳細は、[DateTime Editor の ISO セクション](date-time-editor.md#iso)にあります。

`ngModel` を介して双方向バインディングが可能です:
```html
<igx-date-picker [(ngModel)]="date"></igx-date-picker>
```

`value` 入力を介しても可能です:
```html
<igx-date-picker [(value)]="date"></igx-date-picker>
```

さらに、`formControlName` をピッカーに設定して、リアクティブ フォームで使用することができます:
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
> ピッカーは常に `Date` 値を返します。これは、モデルにバインドされている場合、または文字列変数への双方向バインドの場合、新しい日付が選択された後、タイプが `Date` になることを意味します。

### コンポーネントの投影
[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) は、[`IgxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html) を除く [`IgxInputGroupComponent`]({input-group.md) がサポートする子コンポーネントの投影を許可します。それは、[`igxLabel`](label-input.md)、[`IgxHint`](input-group.md#hint)、[`igxPrefix`](input-group.md#prefix--suffix)、[`igxSuffix`](input-group.md#prefix--suffix) です。詳細については、[Label および Input](label-input.md) トピックを参照してください。

```html
<igx-date-picker #datePicker>
    <igx-icon igxSuffix (click)="datePicker.open()">keyboard_arrow_down</igx-icon>
</igx-date-picker>
```
上記のサンプルでは、​​入力の最後、デフォルトのクリア アイコンの直後に追加のトグル アイコンが追加されます。プレフィックスとサフィックスを次々に積み重ねることができるため、これによってデフォルトのトグル アイコンが削除されることはありません。 

#### トグル アイコンとクリア アイコンのカスタマイズ 
[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) は [`IgxPickerToggleComponent`]({environment:angularApiUrl}/classes/igxpickertogglecomponent.html) と [`IgxPickerClearComponent`]({environment:angularApiUrl}/classes/igxpickerclearcomponent.html) で構成できます。これらを使用すると、独自のクリック ハンドラーを追加しなくても、トグル アイコンとクリア アイコンを変更できます。

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
ピッカーのアクション ボタンは、次の 2 つの方法で変更できます:
- ボタンのテキストは、[`todayButtonLabel`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#todaybuttonlabel) と [`cancelButtonLabel`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#cancelbuttonlabel) 入力プロパティを使用して変更できます:
```html
<igx-date-picker [todayButtonLabel]="'今日'" [cancelButtonLabel]="'キャンセル'"></igx-date-picker>
```

- ボタン全体は、[`igxPickerActions`]({environment:angularApiUrl}/classes/pickeractionsdirective.html) ディレクティブを使用してテンプレート化できます。これを使用すると、日付ピッカーの [`calendar`](calendar.md) とそのすべてのメンバーにアクセスできます。
```html
<igx-date-picker>
    <ng-template igxPickerActions let-calendar>
        <button igxButton="flat" (click)="calendar.viewDate = today">Today</button>
    </ng-template>
</igx-date-picker>
```

### キーボード ナビゲーション

キーボードを使用して [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) のカレンダー UI を開いたり閉じたりすることは、`dropdown` モードでのみ使用でき、以下のキーの組み合わせを介してトリガーできます。

|キー|説明|
|----|-----------|
| <kbd>Space</kbd> | カレンダーのポップアップを表示し、フォーカスを合わせます。 |
| <kbd>Alt</kbd> + <kbd>&darr;</kbd> | カレンダーのポップアップを表示し、フォーカスを合わせます。 |
| <kbd>Esc</kbd> | カレンダーのポップアップを閉じて、入力フィールドにフォーカを合わせます。 |
| <kbd>Enter</kbd> | カレンダーのポップアップを閉じ、フォーカスされた日付を選択して、フォーカスを入力フィールドに移動します。 |
| <kbd>Alt</kbd> + <kbd>&uarr;</kbd> | カレンダーのポップアップを閉じて、入力フィールドにフォーカを合わせます。 |

[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) は [`IgxDateTimeEditorDirective`](date-time-editor.md) を使用するため、キーボード ナビゲーションを継承します。

## コード例

### ダイアログ モード
[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) は、`dialog` モードもサポートしています:
```html
<igx-date-picker [mode]="'dropdown'"></igx-date-picker>
```
<code-view style="height: 540px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-2" >
</code-view>

<div class="divider--half"></div>

### 表示および入力形式
[`inputFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#inputformat) および [`displayFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displayFormat) は、ピッカーのエディターが指定された形式に従うように設定できるプロパティです。[`inputFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#inputformat) プロパティは、ピッカーが `dropdown` モードのときに使用され、入力の編集可能なマスクとそのプレースホルダー (何も設定されていない場合) を管理します。さらに、[`inputFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#inputformat) はロケール ベースであるため、何も指定されていない場合、ピッカーはデフォルトでブラウザーで使用されるものになります。

注意すべき点は、ピッカーが `date` と `month` の部分がない形式で提供された場合、それらの部分に常に先行ゼロを追加することです。例えば、`d/M/yy` は `dd/MM/yy` になります。これは編集中にのみ適用されます。

一方、[`displayFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displayformat) は Angular の [`DatePipe`](https://angular.io/api/common/DatePipe) を使用し、フォーカスされていないときにピッカーの入力を書式設定するために使用されます。[`displayFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displayformat) が指定されていない場合、ピッカーは [`inputFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#inputformat) を [`displayFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displayformat) として使用します。

これらの詳細については、[`IgxDateTimeEditor`](date-time-editor.md#例) の例のセクションを参照してください。

<code-view style="height: 680px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-3" >
</code-view>

<div class="divider--half"></div>

### 増加および減少
[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) は、[`increment`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#increment) メソッドと [`decrement`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#decrement) メソッドを公開します。どちらも [`IgxDateTimeEditorDirective`](date-time-editor.md#increment-decrement) から取得され、現在設定されている日付の特定の [`DatePart`]({environment:angularApiUrl}/classes/datepart.html) を増加および減少するために使用できます。

```html
<igx-date-picker #datePicker>
    <igx-icon igxPrefix (click)="datePicker.increment(DatePart.Month, 3)">keyboard_arrow_up</igx-icon>
    <igx-icon igxPrefix (click)="datePicker.decrement(DatePart.Year. 4)">keyboard_arrow_down</igx-icon>
</igx-date-picker>
```

また、[`spinDelta`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#spindelta) 入力プロパティとして、現在設定されている日付の特定の日付部分を増加または減少するために使用できます。 
```html
<igx-date-picker [spinDelta]="{date: 2, month: 3, year: 4}"></igx-date-picker>
```

### Angular Forms で
[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) は、コア [FormsModule](https://angular.io/api/forms/FormsModule)、[NgModel](https://angular.io/api/forms/NgModel)、および [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule) ([`FormControl`](https://angular.io/api/forms/FormControl)、[`FormGroup`](https://angular.io/api/forms/FormGroup) など) からのすべてのディレクティブをサポートします。これには、[フォーム バリデーター](https://angular.io/api/forms/Validators)機能も含まれます。さらに、コンポーネントの [`minValue`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#minvalue) プロパティと [`maxValue`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#maxvalue) プロパティはフォーム バリデーターとして機能します。

[リアクティブ フォームの統合](input-group-reactive-forms.md)トピックにアクセスすると、[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) をリアクティブ フォームで確認できます。

### カレンダー固有の設定
[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) は [`IgxCalendarComponent`](calendar.md) を使用し、日付ピッカーが公開するプロパティを介してその設定の一部を変更できます。これらの一部には、ピッカーが展開されたときに複数のカレンダーを表示できる [`displayMonthsCount`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displaymonthscount)、週の開始日を決定する [`weekStart`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#weekstart)、年の各週の番号を表示する [`showWeekNumbers`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#showweeknumbers) などが含まれます。

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
