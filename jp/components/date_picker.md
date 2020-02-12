---
title: Date Picker コンポーネント
_description: Ignite UI for Angular Date Picker コントロールを使用して web アプリケーションにカレンダーから日付を選択する機能を追加できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Date Picker コンポーネント, Angular Date Picker コントロール
_language: ja
---

## Date Picker
<p class="highlight">Ignite UI for Angular Date Picker コンポーネントは、単一の日付選択が可能な月表示カレンダーまたはポップアップ カレンダーを表示します。ロケールおよびカスタム日付書式設定のサポートやコンポーネントに [今日] および [キャンセル] ボタンも表示できます。</p>
<div class="divider"></div>

### Date Picker デモ
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/scheduling/datepicker-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法
デフォルトで、[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) でカレンダーから日付を選択できます。ピッカーは内部で [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) をカレンダーとして使用します。

Date Picker コンポーネントを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module.ts** ファイルに `IgxDatePickerModule` をインポートします。

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

デートピッカーの追加は、以下のコードを使用してください。

```html
<!-- date-picker-sample.component.html -->

<igx-date-picker></igx-date-picker>
```

以下は結果です。

<div class="sample-container loading" style="height: 550px;">
    <iframe id="date-picker-sample-1" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-1" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-1" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

#### 日付の設定

[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) に日付を設定するには、[`value`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#value) 入力を設定します。日付を追加します。

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

<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-2" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-2" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-2" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

双方向データ バインディングを作成するには、以下のように `ngModel` を設定します。

```html
<igx-date-picker [(ngModel)]="date"></igx-date-picker>
```

#### ボタンの追加

[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) は、カレンダーで今日を選択する ‘今日’ ボタンをサポートします。'キャンセル 'ボタンも有効にできます。 

ボタンを有効にするには、 [`cancelButtonLabel`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#cancelbuttonlabel) と [`todayButtonLabel`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#todaybuttonlabel) 入力を使用してボタン テキストを設定します。 

```html
<!-- date-picker-sample.component.html -->

<igx-date-picker cancelButtonLabel="cancel" todayButtonLabel="today" [(ngModel)]="date"></igx-date-picker>
```

#### マルチビュー モードの設定
[`monthsViewNumber`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#monthsviewnumber) 入力を使用して、カレンダーに表示される月数を設定します。現在の月に属さない日を非表示にするには、[`hideOutsideDays`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#hideoutsidedays) を使用します。


ボタンが表示されるサンプル:
<div class="sample-container loading" style="height: 680px;">
    <iframe id="date-picker-sample-3" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-3" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-3" data-demos-base-url="{environment:demosBaseUrl}">stackblitz　で表示</button>
</div>
<div class="divider--half"></div>

#### カスタム書式設定

デフォルトで表示する値は指定した [`locale`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#locale) に基づいて書式設定され、カスタム フォーマッタも使用できます。フォーマッタ関数の追加:

```typescript
public date: Date = new Date(Date.now());

private dayFormatter = new Intl.DateTimeFormat("en", { weekday: "long" });
private monthFormatter = new Intl.DateTimeFormat("en", { month: "long" });

public formatter = (date: Date) => {
  return `You selected ${this.dayFormatter.format(date)}, ${date.getDate()} ${this.monthFormatter.format(date)}, ${date.getFullYear()}`;
}
```

次に [`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) の [`formatter`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#formatter) 入力を使用します。

```html
<!-- date-picker-sample.component.html -->

<igx-date-picker [value]="date" [formatter]="formatter"></igx-date-picker>
```

書式設定した日付を表示するサンプル:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-4" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-4" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-4" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

#### ドロップダウン モード
デフォルトでデート ピッカーは読み取り専用モードで表示されます。ドロップダウン モードに変更するには、[`mode`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#mode) 入力を [`dropdown`]({environment:angularApiUrl}/enums/interactionmode.html#dropdown) に設定します。

```html
<!-- date-picker-sample.component.html -->

<igx-date-picker mode="editable"></igx-date-picker>
```

デートピッカーは、以下のデートピッカー入力を設定して更にカスタマイズできます。

| 入力 | タイプ | 説明 | 
| ------------- |:-------------:|:-------------:| 
| [`format`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#format) | `string` | 日付の表示書式を設定します。有効な記号と含む書式を受け付けます。詳細については、[DatePipe](https://angular.io/api/common/DatePipe) をご覧ください。shortDate, mediumDate, longDate and fullDate など定義済みの書式オプションもサポートされます。 |
| [`mask`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#mask)|`string`|日付エディター マスクの設定d、M、y 記号の数値表記や dd-MM-y などの任意のセパレーターの組み合わせを受け付けます。エディターは MMM、MMMM、MMMMM の文字表記を受け取りません。有効なマスクの日の部分は d と dd、月部分は M と MM、年部分は y、yy、yyyy となります。|
| [`isSpinLoop`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#isspinloop) | `boolean` | エディターで <kbd>UP</kbd> および <kbd>DOWN</kbd> 矢印キーを使用するときに連続スピンループを構成します。false に設定された場合、最小/最大の日付/月に達すると、日付部分のスピンが停止します。デフォルトでスピン ループは無限ループです。 |
| [`locale`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#locale) | `string` | ロケール プロパティを設定する場合に Angular に含まれるロケールが en-US のみであることに注意してください。その他の日付をローカライズするためには対応するロケール データをインポートする必要があります。詳細については、[I18n](https://angular.io/guide/i18n#i18n-pipes) ガイドをご覧ください。|


> 注: [`formatter`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#formatter) および [`format`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#format) 両方の入力が設定されている場合、編集可能なデートピッカーは [`formatter`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#formatter) の入力を無視します。

編集可能なデートピッカーは、無効な日付と無効な入力を処理するために次のアウトプットを提供します。

| アウトプット | 引数 | 説明 | 
| ------------- |:-------------:|:-------------:|
|[`onDisabledDate`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#ondisableddate) | [`IDatePickerDisabledDateEventArgs`]({environment:angularApiUrl}/interfaces/idatepickerdisableddateeventargs.html) | デートピッカーでユーザーが無効な日付を入力またはスピンした場合に発生します。 |
| [`onValidationFailed`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#onvalidationfailed) | [`IDatePickerValidationFailedEventArgs`]({environment:angularApiUrl}/interfaces/idatepickervalidationfailedeventargs.html) | デートピッカーでユーザー無効なな日付を入力またはスピンした場合に発生します。 |

##### キーボード ナビゲーション
* デートピッカー ドロップダウンを開く: 
    * <kbd>SPACE</kbd>
    * <kbd>ALT</kbd> + <kbd>DOWN</kbd> 
*  デートピッカー ドロップダウンを閉じる:
    * <kbd>ESC</kbd>
    * <kbd>ALT</kbd> + <kbd>UP</kbd> 
*  日付部分のインクリメント:
    * 日付部分にフォーカス + <kbd>UP</kbd> 
*  日付部分のデクリメント:
    * 日付部分にフォーカス + <kbd>DOWN</kbd> 

<div class="sample-container loading" style="height: 650px;">
    <iframe id="date-picker-dropdown" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-dropdown" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-dropdown" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>


#### 入力グループのテンプレート化

Date Picker の入力グループをカスタマイズできます。そのために `IgxDatePickerTemplate`ディレクティブでデートピッカーに入れ子になった ng-template をデコレートする必要があります。ng-template コンテキストは、以下のメンバーを公開しています。 コンテキストは以下のメンバーを公開します。

| メンバー | 説明 | 
| ------------- |:-------------:| 
| [`openDialog`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#opendialog) | 日付の選択 ダイアログを開くために使用できるメソッド。 |
| [`disabled`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#disabled) | デートピッカーの無効状態を制御します。 |
| [`disabledDates`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#disableddates) | 無効な日付を含みます。 |
| [`displayData`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#displaydata) | デートピッカーが読み取り専用モード時に書式設定付きの値を含みます。 |
| [`format`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#format) | デートピッカーの編集モード時に表示書式を含みます。 |
| [`isSpinLoop`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#isspinloop) | デートピッカーの編集モード時に連続スピンループを制御します。 |
| [`label`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#label) | 入力テキストを含みます。 |
| [`labelVisibility`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#labelvisibility) | 入力ラベル テキストの表示を制御します。 |
| [`locale`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#locale) | 日付の書式設定と表示のためのロケールを含みます。 |
| [`mask`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#mask) | デートピッカーの編集モード時にマスクを含みます。 |
| [`mode`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#mode) | デートピッカー モードを含みます。 |
| [`specialDates`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#specialDates) | 特定の日付を含みます。 |
| [`value`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#value) | 実数値を含みます。 |
| [`monthsViewNumber`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#monthsviewnumber) | 表示される月の数を設定します。 |
| [`hideOutsideDays`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#hideoutsidedays) | 現在の月に属さない日を非表示にします。 |

ng-template 要素で変数を宣言して使用することができます。

以下の例では、デフォルトのラベル "Date" を変更して 2 つ目のアイコンをサフィックスとして追加します。以下は入力グループで実際のデートピッカーの値を表示するラベルを設定します。

```html
<igx-date-picker [value]="date">
    <ng-template igxDatePickerTemplate let-openDialog="openDialog" let-value="value" let-displayData="displayData">
        <igx-input-group (click)="openDialog()">
            <igx-prefix>
                <igx-icon>favorite</igx-icon>
            </igx-prefix>
            <label igxLabel>My Custom Date<</label>
            <input igxInput [value]="displayData" />
            <igx-suffix>
                <igx-icon>today</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <label>{{value}}</label>
    </ng-template>
</igx-date-picker>
```
```typescript
public date: Date = new Date(Date.now());
```

再テンプレートした入力グループ:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-6" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-6" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-6" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

#### ドロップダウン モード デート ピッカーのテンプレート
<a href="#入力グループのテンプレート化"> テンプレート ダイアログ モードのデートピッカー</a>セクションに記載されているすべての情報は、ドロップダウン デートピッカーを再テンプレートするときに適用できます。唯一の要件は、HTML 要素が `openDialog(target)` に渡されて、その要素が生成されているドロップダウンの配置ターゲットとして使用されることです。

<div class="sample-container loading" style="height: 650px;">
    <iframe id="date-picker-sample-7" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-7" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-7" data-demos-base-url="{environment:demosBaseUrl}">stackblitz　で表示</button>
</div>

<div class="divider--half"></div>

#### カスタム ボタン アクション
[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) は、定義済みの 'Today' と 'Cancel' ボタンをサポートしますが、カスタム アクション ボタンも追加できます。これを行うには、`igxDatePickerActions` ディレクティブ セレクターでマークされた `ng-template` でボタンをラップします。

以下の例では、年と月のカレンダー ビューに切り替えるための 2 つのカスタム アクション ボタンが含まれています。

```html
<!-- sample.component.html -->
 <igx-date-picker mode="dropdown" #picker [(ngModel)]="date">
    <ng-template igxDatePickerActions>
        <div class="container action-buttons">
            <button igxButton="flat" (click)="monthsView(picker)">months view</button>
            <button igxButton="flat" (click)="yearsView(picker)">years view</button>
        </div>
    </ng-template>
</igx-date-picker>
```

```typescript
// sample.component.ts
...
public date = new Date();
public monthsView(datePicker: IgxDatePickerComponent) {
    datePicker.calendar.activeViewYear();
}

public yearsView(datePicker: IgxDatePickerComponent) {
    datePicker.calendar.activeViewDecade();
}
...
```

以下は結果です。
<div class="sample-container loading" style="height: 680px;">
    <iframe id="date-picker-sample-8" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-8" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-8" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### インターナショナリゼーション

[`IgxDatePickerComponent`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html) はロケールをサポートします。[`locale`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#locale) 入力を使用して設定できます。ヘッダー (`igxCalendarHeader`) およびサブヘッダー (`igxCalendarSubheader`) の  [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) テンプレートを使用してヘッダーおよびサブヘッダーの外観を設定できます。このテンプレートを使用する方法の詳細については、`IgxCalendarComponent` [ヘルプ](calendar.md)を参照してください。以下は日本ロケール定義を持つ日付ピッカーです。

```html
<igx-date-picker locale="ja-JP" [value]="date">
  <ng-template igxCalendarHeader let-format>
    {{ format.month.combined | titlecase }}{{format.day.combined }}{{ format.weekday.combined }}
  </ng-template>
  <ng-template igxCalendarSubheader let-format>
    <span class="date__el" (click)="format.yearView()">{{ format.year.combined }}</span>
    <span class="date__el" (click)="format.monthView()">{{ format.month.combined | titlecase }}</span>
  </ng-template>
</igx-date-picker>
```

> [!NOTE]
> Internet Explorer および Edge ブラウザーの場合、両方のブラウザーがこの機能を提供する Intl API を実装しないため、日付部分は空の文字列です。 ([formatToParts](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts) を参照)

このブラウザーをサポートするには、[ngIf](https://angular.io/api/common/NgIf#using-non-inlined-then-template) ディレクティブを使用する代わりのテンプレートを使用します。

```html
<!-- app.component.html-->
<igx-date-picker id="date-picker" locale="ja-JP" [value]="date" #component>
    <div *ngIf="formatParts; else parseTemplate">
        <ng-template igxCalendarHeader let-format>
            {{ format.month.combined | titlecase }} {{ format.day.combined }} {{ format.weekday.combined }}
        </ng-template>
        <ng-template igxCalendarSubheader let-format>
            <span class="date__el" (click)="format.yearView()">{{ format.year.combined }}</span>
            <span class="date__el" (click)="format.monthView()">{{ format.month.combined | titlecase }}</span>
        </ng-template>
    </div>

    <!-- Parse template for browsers not supporting Intl-->
    <ng-template #parseTemplate>
        <ng-template igxCalendarHeader let-format>
            {{ getDatePart(format, component, 'month') | titlecase }} {{ getDatePart(format, component, 'day') }} {{ getDatePart(format, component, 'weekday') }}
        </ng-template>
        <ng-template igxCalendarSubheader let-format>
            <span class="date__el" (click)="format.yearView()">{{ getDatePart(format, component, 'year') }}</span>
            <span class="date__el" (click)="format.monthView()">{{ getDatePart(format, component, 'month') }}</span>
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

<div class="sample-container loading" style="height: 580px;">
    <iframe id="date-picker-sample-5" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/scheduling/datepicker-sample-5" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="date-picker-sample-5" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### API
<div class="divider--half"></div>

* [IgxDatePickerComponent]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)
* [IgxDatePickerComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-date-picker-theme)
* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-calendar-theme)
* [IgxOverlay スタイル]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

<div class="divider--half"></div>

### その他のリソース
<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
