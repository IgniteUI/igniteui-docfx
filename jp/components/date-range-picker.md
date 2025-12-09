---
title: Date Range Picker コンポーネント - ネイティブ Angular | Ignite UI for Angular | MITライセンス
_description: Angular Date Range Picker コンポーネントを使用すると、開始日と終了日を定義して日付範囲を選択できます。カレンダー UI から範囲を選択できます。今すぐお試しください。 
_keywords: Angular Date Range Picker, Date Range Picker, Date Picker, Angular Date Range Picker コンポーネント, Angular UI コンポーネント, Angular コンポーネント
_license: MIT
_language: ja
---

# Angular Date Range Picker (日付範囲ピッカー) コンポーネントの概要

Angular Date Range Picker は、テキスト入力とカレンダー ポップアップを含む軽量なコンポーネントで、ユーザーが開始日と終了日を簡単に選択できます。日付範囲の制限や設定可能な日付フォーマットなど、さまざまなアプリケーション要件に合わせて高いカスタマイズ性を提供します。

## Angular Date Range Picker の例

以下は、カレンダーのポップアップを使用して開始日と終了日を選択できる [`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html) コンポーネントのサンプルです。

<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/basic-daterangepicker/" alt="Angular 日付範囲ピッカーの例">
</code-view>

<div class="divider--half"></div>


## Ignite UI for Angular Date Range Picker を使用した作業の開始

Ignite UI for Angular [`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html) を使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックををご覧ください。

次に、**app.module.ts** ファイルに `IgxDateRangePickerModule` をインポートします。

[`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html) は [**IgxCalendarComponent**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) を使用しますが、タッチ操作のために **BrowserAnimationsModule** と**オプション**の **HammerModule** に依存関係があり、これらも `AppModule` に追加する必要があります。

```typescript
// app.module.ts

import { IgxDateRangePickerModule } from 'igniteui-angular/date-range-picker';
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

あるいは、`16.0.0` 以降、[`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html) をスタンドアロンの依存関係としてインポートすることも、[`IGX_DATE_RANGE_PICKER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/date-range-picker/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_DATE_RANGE_PICKER_DIRECTIVES } from 'igniteui-angular/date-range-picker';
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

Ignite UI for Angular Date Range Picker モジュールまたはディレクティブをインポートしたので、`igx-date-range-picker` コンポーネントの使用を開始できます。

## Date Range Picker コンポーネントの使用

### 表示および値

Date Range Picker をデフォルトのモードでインスタンス化するには、以下のコードを使用してください。

```html
<igx-date-range-picker [value]="range"></igx-date-range-picker>
```

```typescript
public range: DateRange = { start: new Date(2020, 4, 20), end: new Date(2020, 4, 25) };
```

>[!NOTE]
> Date Range Picker の値は開始日と終了日を含む [`DateRange`]({environment:angularApiUrl}/interfaces/daterange.html) タイプです。

ピッカーは、日付を表示するために 「シングル インプット モード」 と 「2 インプット モード」 の 2 タイプのモードを提供します。シングル インプット モードでは、フィールドは編集不可で、日付範囲を入力して変更することはできません。一方で 2 インプット モードでは、開始日と終了日を別々の入力欄に入力して編集できます。

カレンダーが表示されている場合、開始日と終了日を選択することで日付範囲を指定できます。最初の日付を選択すると、開始日と終了日の両方がその日付に設定され、次に日付を選ぶと終了日として設定されます。すでに範囲が選択されている状態で別の日付をクリックすると、新しい範囲の選択が開始されます。

双方向のデータバインディングを作成するには、`ngModel` を使用します。

```html
<igx-date-range-picker [(ngModel)]="range"></igx-date-range-picker>
```

### 個別の編集可能なインプットの表示

Angular Date Range Picker コンポーネントは、開始日と終了日の 2 インプットを構成できます。これは、以下のデモに示すように、[`IgxDateRangeStartComponent`]({environment:angularApiUrl}/classes/igxdaterangestartcomponent.html) および [`IgxDateRangeEndComponent`]({environment:angularApiUrl}/classes/igxdaterangeendcomponent.html) を日付範囲ピッカーの子として使用して実現できます。

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
- 両方のインプットで日付編集を有効にするには、[`igxDateTimeEditor`](date-time-editor.md) ディレクティブでデコレートする必要があります。

<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/daterangepicker-start-end/" >
</code-view>

### ポップアップ モード

デフォルトでは、[`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html) をクリックすると、カレンダーのポップアップが `dropdown` モードで表示されます。`Mode` プロパティを `dialog` に設定することで、カレンダーを `dialog` モードで開くこともできます。

```html
<igx-date-range-picker [mode]="'dialog'"></igx-date-range-picker>
```

<code-view style="height:700px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/daterangepicker-mode" >
</code-view>

<div class="divider--half"></div>

シングル インプット (読み取り専用) のデフォルト構成では、インプットの任意の場所 (カレンダーのアイコンを含む) をクリックすると、カレンダーを開くことができます。開始日と終了日の 2 インプットがあり、ドロップダウン モードの場合、両方のインプットがデフォルトで編集可能なため、カレンダーはカレンダー アイコンからのみ開きます。`dialog` モードで 2 インプットを行う場合、インプット内の任意の場所をクリックするとカレンダーが開きます。

範囲値はカレンダーから日付が選択されるときに設定されます。ドロップダウン モードでは、`Done` ボタンは使用できません。ダイアログ モードでは、`Cancel` ボタンを使用すると、閉じるときに選択を元に戻すことができます。

### キーボード ナビゲーション

[`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html) は直感的なキーボード ナビゲーションに対応しており、マウスを使わずに値の増減や入力マスクのセクション間の移動が可能です。

使用可能なキーボード ナビゲーション オプションは、コンポーネントがシングル インプット モードか 2 インプット モードかによって異なります。

**2 インプット モード:**

|キー|説明|
|----|-----------|
| <kbd>&larr;</kbd> | カレットを 1 文字左に移動します |
| <kbd>&rarr;</kbd> | カレットを 1 文字右に移動します |
| <kbd>Ctrl + 左矢印</kbd> | カレットを現在の入力マスク セクションの先頭、またはすでに先頭にいる場合は前のセクションの先頭に移動します |
| <kbd>Ctrl + 右矢印</kbd> | カレットを現在の入力マスク セクションの末尾、またはすでに末尾にいる場合は次のセクションの末尾に移動します |
| <kbd>上矢印</kbd> | 現在フォーカスされている入力マスクのセクションの値を 1 ステップ増加させます |
| <kbd>下矢印</kbd> | 現在フォーカスされている入力マスクのセクションの値を 1 ステップ減少させます |
| <kbd>Home</kbd> | カレットを入力マスクの先頭に移動します |
| <kbd>End</kbd> | カレットを入力マスクの末尾に移動します |
| <kbd>Ctrl + ;</kbd> | 現在の日付をコンポーネントの値として設定します |

**シングル インプットおよび 2 インプット モードの両方:**

|キー|説明|
|----|-----------|
| <kbd>Alt + 下矢印</kbd> | カレンダーのドロップダウンを開きます |
| <kbd>Alt + 上矢印</kbd> | カレンダーのドロップダウンを閉じます |

[カレンダーのキーボード ナビゲーションセクション](calendar.md#キーボード-ナビゲーション)には、カレンダーで使用できるすべてのキーボードの組み合わせが含まれています。

<div class="divider--half"></div>

## レイアウト

### コンポーネントの投影

デフォルトの Date Range Picker UX の機能向上のため、コンポーネントは子コンポーネントの投影を許可します ([`IgxInputGroupComponent`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)と同じです): [`igxLabel`](label-input.md)、[`igx-hint / igxHint`](input-group.md#hints)、[`igx-prefix / igxPrefix`](input-group.md#prefix--suffix)、[`igx-suffix / igxSuffix`](input-group.md#prefix--suffix) ([`IgxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html) を除く)。詳細については、[Label および Input](label-input.md) トピックを参照してください。

```html
<igx-date-range-picker #dateRangePicker [(ngModel)]="range">
    <label igxLabel>Flight dates</label>
    <igx-hint *ngIf="dateRangePicker.invalid">
        Please choose start and end date!
    </igx-hint>
</igx-date-range-picker>
```

または 2 インプットの場合:

```html
<igx-date-range-picker #dateRangePicker [(ngModel)]="range">
    <igx-date-range-start>
        ...
        <label igxLabel>Start Date</label>
        <igx-hint *ngIf="dateRangePicker.invalid">
            Please choose start and end date!
        </igx-hint>
        ...
    </igx-date-range-start>
    <igx-date-range-end>
        ...
        <label igxLabel>End Date</label>
        ...
    </igx-date-range-end>
</igx-date-range-picker>
```

#### アイコンの切り替えとクリア

デフォルト設定では、シングル インプット (読み取り専用) の場合、プレフィックスにデフォルトのカレンダー アイコンが表示され、サフィックスにはクリア アイコンが表示されます。これらのアイコンは、[`IgxPickerToggleComponent`]({environment:angularApiUrl}/classes/igxpickertogglecomponent.html) および [`IgxPickerClearComponent`]({environment:angularApiUrl}/classes/igxpickerclearcomponent.html) を使用して変更または再定義できます。インプットの開始位置または終了位置を定義する [`igxPrefix`](input-group.md#prefix-および-suffix) または [`igxSuffix`](input-group.md#prefix-および-suffix) で設定できます。

```html
<igx-date-range-picker>
    <igx-picker-toggle igxSuffix>
        <igx-icon>calendar_view_day</igx-icon>
    </igx-picker-toggle>
    <igx-picker-clear igxSuffix>
        <igx-icon>clear</igx-icon>
    </igx-picker-clear>
</igx-date-range-picker>
```

日付範囲ピッカーに開始日と終了日の 2 つの個別のインプットがある場合、デフォルトではこれらのアイコンは表示されません。[`IgxPickerToggleComponent`]({environment:angularApiUrl}/classes/igxpickertogglecomponent.html) および [`IgxPickerClearComponent`]({environment:angularApiUrl}/classes/igxpickerclearcomponent.html) は、[`IgxDateRangeStartComponent`]({environment:angularApiUrl}/classes/igxdaterangestartcomponent.html) または [`IgxDateRangeEndComponent`]({environment:angularApiUrl}/classes/igxdaterangeendcomponent.html) の子として追加する必要があります。

```html
<igx-date-range-picker>
    <igx-date-range-start>
        ...
        <igx-picker-toggle igxPrefix>
            <igx-icon>calendar_view_day</igx-icon>
        </igx-picker-toggle>
        <igx-picker-clear igxSuffix>
            <igx-icon>clear</igx-icon>
        </igx-picker-clear>
        ...
    </igx-date-range-start>
    <igx-date-range-end>
        ...
    </igx-date-range-end>
</igx-date-range-picker>
```

### カスタムおよび定義済みの日付範囲

[`customRanges`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#customRanges) プロパティを使用して、範囲選択を高速化するために、カレンダー ポップアップにカスタム日付範囲チップを追加することもできます。たとえば、現在の日付を終了日とし、今後 7 日間の範囲をすぐに選択できるカスタム日付範囲チップを作成できます。さらに、[`usePredefinedRanges`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#usePredefinedRanges) プロパティを設定すると、カスタム チップに加えて定義済みの範囲チップも表示されます。

```ts
public today = new Date();

public nextSeven = new Date(
    this.today.getFullYear(),
    this.today.getMonth(),
    this.today.getDate() + 7
);

public customRanges: CustomDateRange[] = [
    {
        label: 'Next 7 days',
        dateRange: {
          start: this.today,
          end: this.nextSeven
        }
      }
];
```

```html
<igx-date-range-picker [usePredefinedRanges]="true" [customRanges]="customRanges"></igx-date-range-picker>
```

さらに、[`igxPickerActions`]({environment:angularApiUrl}/classes/igxpickeractionsdirective.html) ディレクティブを使用してカスタム コンテンツまたはアクションをテンプレート化できます。次のデモでは、テンプレート化されたアクションとともに、定義済み範囲とカスタム範囲を示します。

<code-view style="height:700px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/daterangepicker-range-buttons/" >
</code-view>

### 書式設定

Date Range Picker コンポーネントはさまざまな表示および入力形式をサポートします。

値の表示形式には、Angular [DatePipe](https://angular.io/api/common/DatePipe) 形式のいずれかを使用します。`shortDate` や `longDate` などの定義済みの形式オプションをサポートできます。

`inputFormat` プロパティは、DatePipe でサポートされる文字 (`MM/dd/yyyy` など) を使用して構成された書式文字列を受け入れますが、`shortDate` や `longDate` などの定義済みの形式オプションはサポートしていません。`inputFormat` プロパティが定義されていない場合、[Angular locale ID](https://angular.io/api/core/LOCALE_ID) トークンがビルド時に使用されます。

```html
<igx-date-range-picker [(ngModel)]="range" required
    inputFormat="dd/MM/yyyy" displayFormat="shortDate">
</igx-date-range-picker>
```

[`inputFormat`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#inputFormat) プロパティが設定されていない場合、入力形式は [`displayFormat`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#displayFormat) から数値の日付と時刻の部分のみを含む形式として解析できる場合に推測されます。

>[!NOTE]
> `IgxDateRangePicker` が IME 入力をサポートするようになりました。合成が終了すると、コントロールはワイド文字の数字を ASCII 文字に変換します。

### フォームと検証

Date Range Picker コンポーネントは、コア [FormsModule](https://angular.io/api/forms/FormsModule) [NgModel](https://angular.io/api/forms/NgModel) と [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule) ([`FormControl`](https://angular.io/api/forms/FormControl)、[`FormGroup`](https://angular.io/api/forms/FormGroup) など) のすべてのフォーム ディレクティブをサポートします。これには、[フォーム バリデーター](https://angular.io/api/forms/Validators)機能も含まれます。さらに、コンポーネントの[最小値と最大値](#最小値と最大値)および [disabledDates](#無効な日付と特別な日付) はフォーム バリデーターとしても機能します。

[NgModel](https://angular.io/api/forms/NgModel) とバリデーターは、[`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html) で、または個々の開始日と終了日で設定できます。

次のスニペットと例は、テンプレート駆動型フォームで `required` バリデーターを使用する方法を示しています。

最初に、コンポーネント レベルで実行される単一の読み取り専用範囲コンポーネントのモデルを設定する必要があります。

```html
<igx-date-range-picker [(ngModel)]="range" required>
    <label igxLabel>Period</label>
</igx-date-range-picker>
```

2 つの異なるインプットを設定する場合も同じ構成を使用できます。この場合、検証は両方のインプットに適用されます。

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

2 つの別々のインプットを使用する場合、各インプットでモデルと必要なプロパティを設定できます。注: 検証は各インプットに固有です。

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
           iframe-src="{environment:demosBaseUrl}/scheduling/daterangepicker-validation/" >
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

`IgxDateRangePickerComponent` はバリデーターです。つまり、`minValue` と `maxValue` を内部で使用して有効性を制御します。`ngModel` で両方にアクセスすることもできます。

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

### 無効な日付と特別な日付

カレンダーで無効な日付を設定して、ユーザーが選択できる日付の範囲を絞り込むこともできます。無効にする日付を設定するには、[`disabledDates`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#disabledDates) プロパティを使用できます。

```ts
export class DateRangeSampleComponent implements OnInit {
    @ViewChild('dateRange') public dateRange: IgxDateRangePicker;

    public minDate = new Date(2025, 4, 1);
    public maxDate = new Date(2025, 4, 31);

    public ngOnInit() {
        this.dateRange.disabledDates = [
        {
            type: DateRangeType.Between,
            dateRange: [minDate, maxDate]
        }
        ] as DateRangeDescriptor[];
    }
}
```

`DisabledDates` プロパティが提供するすべての可能性に関する詳細情報は、以下で確認できます: [カレンダーの無効日](calendar.md#angular-calendar-で日付を無効にする方法)。

同様に、カレンダーに 1 日または複数の日付を特別な日付として設定したい場合も可能です。この場合は `SpecialDates` プロパティを使用します。[特別な日付](./calendar.md#特別な日付)

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

### カレンダー固有の設定

さまざまなプロパティを使用して、ポップアップ カレンダーをさらにカスタマイズできます。これらのプロパティがカレンダーにどのような影響を与えるかについては、[**IgxCalendarComponent**](calendar.md) のトピックをご覧ください。

|名前|タイプ|説明|
|--|--|--|
| `orientation` | 'vertical' または 'horizontal' | カレンダーを縦向きまたは横向きで表示するかを設定できます。 |
| `displayMonthsCount` | string | 一度に表示する月数 (1 または 2) を指定します。 |
| `showWeekNumbers` | string | カレンダーに週番号の列を表示するかどうかを設定します。 |
| `weekStart` | string | 週の最初の曜日を設定します。 |
| `hideOutsideDays` | boolean | 現在の月ビューの範囲外の日を非表示にします。 |
| `hideHeader` | boolean | カレンダー ヘッダーを非表示にします (ダイアログ モードでのみ適用されます)。 |
| `headerOrientation` | 'vertical' または 'horizontal' | カレンダーのヘッダーを縦方向または横方向に配置します (ダイアログ モードのみ)。 |
| `activeDate` | Date | カレンダーで最初にハイライト表示される日付を設定します。設定されていない場合は、現在の日付がアクティブ日付になります。 |

```html
 <igx-date-range-picker [hideHeader]="true"
                        [orientation]="'vertical'"
                        [headerOrientation]="'horizontal'"
                        [displayMonthsCount]="1">
</igx-date-range-picker>
```

カレンダー ヘッダーのヘッダー、サブヘッダー、タイトル部分は、`igxCalendarHeader`、`igxCalendarSubheader`、`igxCalendarHeaderTitle` テンプレート ディレクティブを利用してカスタマイズできます。例:

```html
<igx-date-range-picker [value]="date">
  <ng-template igxCalendarHeader let-format>
    {{ format.month.combined | titlecase }}{{format.day.combined }}{{ format.weekday.combined }}
  </ng-template>
  <ng-template igxCalendarSubheader let-format>
    <span (click)="format.yearView()">{{ format.year.combined }}</span>
    <span (click)="format.monthView()">{{ format.month.combined | titlecase }}</span>
  </ng-template>
    <ng-template igxCalendarHeaderTitle let-format>
    <span>My calendar</span>
  </ng-template>
</igx-date--range-picker>
```

## スタイル設定

`igxDateRangePicker` のスタイル設定は、すべてのテーマ関数とコンポーネントミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Date Range Picker コンポーネントは `date-range-picker-theme` を公開し、`igxInputGroupComponent`、`igxCalendar`、`igxOverlay` などの複数のコンポーネントおよびディレクティブを使用します。前述のコンポーネントおよびディレクティブのグローバル スタイル設定は `igxDateRangeComponent` に影響します。Date Range Picker コンポーネントは入力グループおよびカレンダーテーマを使用するため、[`calendar-theme`]({environment:sassApiUrl}/themes#function-calendar-theme) および [`input-group-theme`]({environment:sassApiUrl}/themes#function-input-group-theme) を拡張する新しいテーマを作成し、それらのパラメーターの一部と日付範囲の選択テーマを使用して日付範囲ピッカーをスタイル設定する必要があります。単一のカスタム カラー パレットを使用して、すべてのテーマで使用する色を定義します。

```scss
// COMMON
$purple: #9E379F;
$blue: #61AEDB;
$light-gray: #efefef;

$custom-palette: palette(
  $primary: $blue, 
  $secondary: $purple, 
  $surface: $light-gray
);

$today-text: color($custom-palette, "primary", 500);
$text-color: color($custom-palette, "secondary", 200);
$color-focused: color($custom-palette, "secondary", 500);

// DATE-RANGE
$custom-date-range-theme: date-range-picker-theme(
  $label-color: $color-focused
);

// INPUT GROUP
$custom-input-group-theme: input-group-theme(
  $filled-text-color: $text-color,
  $idle-text-color: $text-color,
  $focused-text-color: $color-focused,
  $idle-bottom-line-color: $purple,
  $hover-bottom-line-color: $color-focused,
  $interim-bottom-line-color: $color-focused
);

// CALENDAR
$custom-calendar-theme: calendar-theme(
  $date-current-foreground: $today-text,
  $border-radius: 0.5,
  $date-border-radius: 0.5
);
```

最後にカスタム テーマを渡します。

```scss
@include css-vars($custom-date-range-theme);
@include css-vars($custom-input-group-theme);
@include css-vars($custom-calendar-theme);
```

>[!WARNING]
>コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

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
           iframe-src="{environment:demosBaseUrl}/scheduling/styled-daterangepicker/" >
</code-view>


## アプリケーション デモ

以下のデモは、[`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html) を使用する航空券のフォームを定義します。日付が選択されていない場合、検証エラーを表示するために [`IgxHint`]({environment:angularApiUrl}/classes/igxhintdirective.html) が使用されます。日付の選択は、[`IgxDateRangePickerComponent`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html) の [`minValue`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#minValue) および [`maxValue`]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html#maxValue) プロパティによって制限されます。


<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/flight-booking/" >
</code-view>

<div class="divider--half"></div>

## API リファレンス

<div class="divider--half"></div>

- [IgxDateRangePickerComponent]({environment:angularApiUrl}/classes/igxdaterangepickercomponent.html)
- [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
- [IgxCalendarComponent スタイル]({environment:sassApiUrl}/themes#function-calendar-theme)
- [IgxOverlay スタイル]({environment:sassApiUrl}/themes#function-overlay-theme)
- [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)

## テーマの依存関係

- [IgxCalendar テーマ]({environment:sassApiUrl}/themes#function-calendar-theme)
- [IgxOverlay テーマ]({environment:sassApiUrl}/themes#function-overlay-theme)
- [IgxIcon テーマ]({environment:sassApiUrl}/themes#function-icon-theme)
- [IgxButton テーマ]({environment:sassApiUrl}/themes#function-button-theme)
- [IgxInputGroup テーマ]({environment:sassApiUrl}/themes#function-input-group-theme)
- [IgxDropDown テーマ]({environment:sassApiUrl}/themes#function-drop-down-theme)

## その他のリソース

関連トピック:
- [Date Time Editor](date-time-editor.md)
- [Label および Input](label-input.md)
- [リアクティブ フォームの統合](angular-reactive-form-validation.md)
- [Date Picker](date-picker.md)


コミュニティに参加して新しいアイデアをご提案ください。
- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
