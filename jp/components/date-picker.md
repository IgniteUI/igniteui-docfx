---
title: Angular Datepicker コンポーネント – Ignite UI for Angular
_description: Ignite UI の Angular Datepicker コントロールのを使用して、カレンダーから Web アプリケーションに日付を選択する機能を使用する方法について説明します。今すぐお試しください。 
_keywords: angular datepicker, angular datepicker component, angular UI components, angular component, ignite ui for angular
_language: ja
---

# Angular Datepicker (日付ピッカー) コンポーネントの概要
Angular DatePicker は、手動でテキストを入力して日付を入力するか、ポップアップするカレンダー ダイアログから日付値を選択するために使用される機能豊富なコンポーネントです。軽量で使いやすい Angular の DatePicker を使用すると、ユーザーは、月、年、10 年の複数の表示オプションを使用して目的の日付に移動できます。検証を追加するための通常の min、max、および required プロパティがあります。

Ignite UI for Angular DatePicker コンポーネントを使用すると、ユーザーは月表示のカレンダード ロップダウンまたは編集可能な入力フィールドから単一の日付を選択できます。Angular DatePicker は、カレンダーからのみ選択するための dialog モード、ロケール対応でカスタマイズ可能な日付の書式設定と検証の統合もサポートしています。

## Angular Datepicker の例

以下は、ユーザーが手動のテキスト入力で日付を選択し、左側のカレンダー アイコンをクリックしてナビゲートできるようになったときに、Angular DatePicker がどのように機能するかを示すサンプルです。描画する方法は以下のとおりです。

<!-- TODO: datepicker sample with several options enabled -->
<code-view style="height: 550px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-1" alt="Angular Datepicker の例">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Datepicker

To get started with the Ignite UI for Angular Datepicker component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxDatePickerModule` in your **app.module.ts** file.

>[!NOTE]
> ピッカーが [**IgxCalendarComponent**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) を使用し、タッチ操作のために **BrowserAnimationsModule** と**HammerModule** に依存関係があり、これらもモジュールに追加する必要があります。

```typescript
import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxDatePickerModule } from 'igniteui-angular';
// import { IgxDatePickerModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxDatePickerModule, BrowserAnimationsModule, HammerModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxDatePickerComponent` as a standalone dependency, or use the [`IGX_DATE_PICKER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/date-picker/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts
import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_DATE_PICKER_DIRECTIVES } from 'igniteui-angular';
// import { IGX_DATE_PICKER_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package
@Component({
    selector: 'app-home',
    template: `
    <igx-date-picker>
        <label igxLabel>Date</label>
    </igx-date-picker>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [BrowserAnimationsModule, HammerModule, IGX_DATE_PICKER_DIRECTIVES]
    /* or imports: [BrowserAnimationsModule, HammerModule, IgxDatePickerComponent, IgxLabelDirective] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Datepicker module or directives imported, you can start using the `igx-date-picker` component.

## Using the Angular Datepicker Component
### Datepicker の表示
デフォルトの `dropdown` 状態の Datepicker をインスタンス化するには、以下のコードを使用してください。

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

文字列がピッカーにバインドされている場合は、`ISO 8601` 形式の日付のみの文字列である必要があります。
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
[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) は、[`IgxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html) を除く [`IgxInputGroupComponent`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) がサポートする子コンポーネントの投影を許可します。それは、[`igxLabel`](label-input.md)、[`igx-hint / IgxHint`](input-group.md#hint)、[`igx-prefix / igxPrefix`](input-group.md#prefix-および-suffix)、[`igx-suffix / igxSuffix`](input-group.md#prefix-および-suffix) です。詳細については、[Label および Input](label-input.md) トピックを参照してください。

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

#### カスタム動作ボタン
ピッカーのアクション ボタンは、次の 2 つの方法で変更できます:
- ボタンのテキストは、[`todayButtonLabel`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#todayButtonLabel) と [`cancelButtonLabel`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#cancelButtonLabel) 入力プロパティを使用して変更できます:
```html
<igx-date-picker [todayButtonLabel]="'今日'" [cancelButtonLabel]="'キャンセル'"></igx-date-picker>
```

- ボタン全体は、[`igxPickerActions`]({environment:angularApiUrl}/classes/igxpickeractionsdirective.html) ディレクティブを使用してテンプレート化できます。これを使用すると、日付ピッカーの [`calendar`](calendar.md) とそのすべてのメンバーにアクセスできます。
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
[`inputFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#inputFormat) および [`displayFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displayFormat) は、ピッカーのエディターが指定された形式に従うように設定できるプロパティです。[`inputFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#inputFormat) プロパティは、ピッカーが `dropdown` モードのときに使用され、入力の編集可能なマスクとそのプレースホルダー (何も設定されていない場合) を管理します。さらに、[`inputFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#inputFormat) はロケール ベースであるため、何も指定されていない場合、ピッカーはデフォルトでブラウザーで使用されるものになります。

注意すべき点は、Ignite UI の Angular DatePicker Component が `date` と `month` の部分がない形式で提供された場合、それらの部分に常に先行ゼロを追加することです。 例えば、`d/M/yy` は `dd/MM/yy` になります。これは編集中にのみ適用されます。

一方、[`displayFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displayFormat) は Angular の [`DatePipe`](https://angular.io/api/common/DatePipe) を使用し、フォーカスされていないときにピッカーの入力を書式設定するために使用されます。[`displayFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displayFormat) が指定されていない場合、ピッカーは [`inputFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#inputFormat) を [`displayFormat`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displayFormat) として使用します。

これらの詳細については、[`IgxDateTimeEditor`](date-time-editor.md#例) の例のセクションを参照してください。

<code-view style="height: 680px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-3" >
</code-view>

<div class="divider--half"></div>

> 注: `IgxDatePicker` が IME 入力をサポートするようになりました。合成が終了すると、コントロールはワイド文字の数字を ASCII 文字に変換します。

### 増加および減少
[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) は、[`increment`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#increment) メソッドと [`decrement`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#decrement) メソッドを公開します。どちらも [`IgxDateTimeEditorDirective`](date-time-editor.md#increment-decrement) から取得され、現在設定されている日付の特定の [`DatePart`]({environment:angularApiUrl}/enums/datepart.html) を増加および減少するために使用できます。

```html
<igx-date-picker #datePicker>
    <igx-icon igxPrefix (click)="datePicker.increment(DatePart.Month, 3)">keyboard_arrow_up</igx-icon>
    <igx-icon igxPrefix (click)="datePicker.decrement(DatePart.Year. 4)">keyboard_arrow_down</igx-icon>
</igx-date-picker>
```

また、[`spinDelta`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#spinDelta) 入力プロパティとして、現在設定されている日付の特定の日付部分を増加または減少するために使用できます。
```html
<igx-date-picker [spinDelta]="{date: 2, month: 3, year: 4}"></igx-date-picker>
```

### Angular Forms で
[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) は、コア [FormsModule](https://angular.io/api/forms/FormsModule)、[NgModel](https://angular.io/api/forms/NgModel)、および [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule) ([`FormControl`](https://angular.io/api/forms/FormControl)、[`FormGroup`](https://angular.io/api/forms/FormGroup) など) からのすべてのディレクティブをサポートします。これには、[フォーム バリデータ](https://angular.io/api/forms/Validators)機能も含まれます。さらに、コンポーネントの [`minValue`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#minValue) プロパティと [`maxValue`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#maxValue) プロパティはフォーム バリデータとして機能します。

[リアクティブ フォームの統合](angular-reactive-form-validation.md)トピックにアクセスすると、[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) をリアクティブ フォームで確認できます。

#### 日付ピッカーとタイム ピッカーを併用する
IgxDatePicker と [`IgxTimePicker`](time-picker.md) を一緒に使用する場合、それらを 1 つの同じ Date オブジェクト値にバインドする必要がある場合があります。

テンプレート駆動フォームでこれを実現するには、`ngModel` を使用して両方のコンポーネントを同じ Date オブジェクトにバインドします。

<code-view style="height: 540px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/template-driven-form" >
</code-view>

<div class="divider--half"></div>

リアクティブ フォームでは、各コンポーネントの [`valueChange`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#valueChange) イベントを処理し、他のコンポーネントの値を更新できます。

<code-view style="height: 540px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/reactive-form" >
</code-view>

<div class="divider--half"></div>

### カレンダー固有の設定
[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) は [`IgxCalendarComponent`](calendar.md) を使用し、日付ピッカーが公開するプロパティを介してその設定の一部を変更できます。これらの一部には、ピッカーが展開されたときに複数のカレンダーを表示できる [`displayMonthsCount`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displayMonthsCount)、週の開始日を決定する [`weekStart`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#weekStart)、年の各週の番号を表示する [`showWeekNumbers`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#showWeekNumbers) などが含まれます。

## インターナショナリゼーション
[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) のローカライズは、[`locale`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#locale) 入力で制御できます。さらに、[`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) によって提供される `igxCalendarHeader` と `igxCalendarSubheader` テンプレートを使用して、ヘッダーとサブヘッダーの外観を指定できます。このテンプレートを使用する方法の詳細については、[**IgxCalendarComponent**](calendar.md) トピックを参照してください。

以下は日本ロケール定義を持つ Angular DatePicker です。
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
日付ピッカーのスタイル設定には、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Angular DatePicker はカレンダーのテーマを使用するため、[`calendar-theme`]({environment:sassApiUrl}/index.html#function-calendar-theme) を拡張する新しいテーマを作成し、そのパラメーターを使用して日付ピッカーの項目をスタイル設定します。

```scss
$custom-datepicker-theme: calendar-theme(
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

最後に Angular DatePicker のカスタム テーマを設定します。

```scss
@include css-vars($custom-datepicker-theme);
```

### テーマ オーバーライドの使用

Internet Explorer 11 などの古いブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチを用いる必要があります。

コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化に解除する必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

 ```scss
:host {
    ::ng-deep {
        @include calendar($custom-datepicker-theme);
    }
}
```

<code-view style="height:500px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/datepicker-styling-sample" >
</code-view>

## API リファレンス
<div class="divider--half"></div>

* [IgxDatePickerComponent]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)
* [IgxDateTimeEditorDirective]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html)
* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent スタイル]({environment:sassApiUrl}/index.html#function-calendar-theme)
* [IgxOverlay スタイル]({environment:sassApiUrl}/index.html#function-overlay-theme)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)

## テーマの依存関係
<div class="divider--half"></div>

* [IgxCalendar テーマ]({environment:sassApiUrl}/index.html#function-calendar-theme)
* [IgxOverlay テーマ]({environment:sassApiUrl}/index.html#function-overlay-theme)
* [IgxIcon テーマ]({environment:sassApiUrl}/index.html#function-icon-theme)
* [IgxButton テーマ]({environment:sassApiUrl}/index.html#function-button-theme)
* [IgxInputGroup テーマ]({environment:sassApiUrl}/index.html#function-input-group-theme)
* [IgxDropDown テーマ]({environment:sassApiUrl}/index.html#function-drop-down-theme)


## その他のリソース
* [Time Picker](time-picker.md)
* [Date Time Editor](date-time-editor.md)
* [Date Range Picker](date-range-picker.md)
* [リアクティブ フォームの統合](angular-reactive-form-validation.md)

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)