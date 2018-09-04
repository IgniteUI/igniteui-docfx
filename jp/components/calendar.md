---
title: Calendar コンポーネント
_description: Ignite UI for Angular の Calendar コンポーネントを使用して、アプリケーションで日付情報の表示および日付の入力を可能なカレンダーを作成します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Calendar コンポーネント, Angular Calendar コントロール
_language: ja
---

## Calendar
<p class="highlight">Ignite UI for Angular Calendar コンポーネントは、ネイティブ [Angular コンポーネント](https://angular.io/guide/architecture#components)です。アプリケーションで日付情報を 3 つの方法で表示できます。ユーザーが単一の日付、複数の日付、または日付の範囲を選択できます。</p>

### Calendar デモ
<div class="sample-container loading" style="height: 590px">
    <iframe id="calendar-sample-5-iframe" src='{environment:demosBaseUrl}/calendar-sample-5' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### 使用方法
Ignite UI for Angular Calendar を初期化する前に、**IgxCalendarModule** をアプリケーションの AppModule (**app.module.ts** ファイル) にインポートします。注: **IgxCalendar** に **BrowserAnimationsModule** の依存関係があるため、それを AppModule に追加する必要もあります。

```typescript
// app.module.ts
...
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCalendarModule } from 'igniteui-angular';
@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, IgxCalendarModule],
    ...
})
export class AppModule {}
```

カレンダー API の型を宣言する前に **IgxCalendarComponent** を AppComponent ファイルにインポートします。エディターが自動的にインポートすることが可能です。

```typescript
import { IgxCalendarComponent } from 'igniteui-angular';
...

@ViewChild('calendar', { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;
```

> [!WARNING]
> 注: **igxCalendarComponent** が日付のローカライズおよび書式設定のために [Intl](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) WebAPI を使用します。
> 対象プラットフォームがその API をサポートしない場合、[適切なポリフィル](https://github.com/andyearnshaw/Intl.js/)を使用してください。

### 選択
**IgxCalendarComponent** をインスタンス化するには、セレクター要素をテンプレートに追加します。カレンダーで現在の月が表示され、単一選択モードが使用されます。その他の選択モードに変更するには、`selection` プロパティを `multi` または `range` に設定します。

```html
<!-- app.component.html -->
<!-- Single selection mode -->
<igx-calendar></igx-calendar>
<!-- Multi selection mode -->
<igx-calendar selection="multi"></igx-calendar>
<!-- Range selection mode -->
<igx-calendar selection="range"></igx-calendar>
```

選択が `multi` または `range` の場合、カレンダー ヘッダーは描画されません。

<div class="sample-container" style="height: 590px">
    <iframe id="calendar-sample-1-iframe" src='{environment:demosBaseUrl}/calendar-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### ローカライズおよび書式設定

カレンダーにおいてローカライズおよび書式設定はとても重要な要素です。**IgxCalendarComponent** では、その機能が `locale`、`formatOptions`、および `formatViews` プロパティによって制御してカスタマイズ化されます。

| 名前 | 説明 |
|:--:|:---|:---|
| `locale` | カレンダーで日付の書式および表示のためのロケールを制御します。予期される文字列値は [BCP 47 言語タグ](https://tools.ietf.org/html/rfc5646)です。設定されない場合、デフォルト値は "en" です。 |
| `formatOptions` | 書式設定付きの出力に使用する日時コンポーネントおよびその表現を制御します ([詳細](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat))。デフォルト値は { day: 'numeric', month: 'short', weekday: 'short', year: 'numeric' } です。 |
| `formatViews` |カレンダー ビューの日付部分が提供された locale および formatOptions に基づいて書式設定するかどうかを制御します。デフォルト値は { day: false, month: true, year: false } です。false に設定したプロパティの場合、ビューが相対する `Date.getFullYear` / `Date.getDate()` / `Date.getMonth()` 値を表示します。 |
<br>
これらの設定に加え、**IgxCalendarComponent** API のその他のカスタマイズ機能も使用できます。EFTA (欧州自由貿易連合) 国内からページへアクセスする場合、カレンダーを対応するカルチャで表示する必要があります。最初に週の開始日を制御する `weekstart` を設定し、デフォルト値が 0 (日曜日) であるため、値を 1 に設定します。

以下のマークアップで表示書式設定をカスタマイズするには `formatOptions` および `formatViews` プロパティもバインドしています。最後に、`locale` プロパティをユーザーの場所選択に基づいて値にバインドします。

```html
<!-- app.component.html -->
<igx-calendar #calendar
    weekstart="1"
    [locale]="locale"
    [formatOptions]="formatOptions"
    [formatViews]="formatViews">
</igx-calendar>
<select id="locations" (change)="changeLocale($event)">...</select>
```

すべてのプロパティ値が AppComponent ファイルに設定されます。

```typescript
// app.component.ts
@ViewChild('calendar', { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;

public formatOptions: any;
public formatViews: any;
public locale: string;
public select: HTMLSelectElement;

public ngOnInit() {
    this.select = document.getElementById("locations") as HTMLSelectElement;
    this.locale = this.select.value;
    this.formatOptions = { day: "2-digit", month: "long", weekday: "long", year: "numeric" };
    this.formatViews = { day: true, month: true, year: true };
}

// change the calendar locale
public changeLocale(event) {
    this.locale = event.target.value;
}
```

カスタマイズされた日付を持つカレンダーが表示され、ユーザーの場所に基づいてロケール表現を変更します。以下は結果です。

<div class="sample-container" style="height: 570px">
    <iframe id="calendar-sample-2-iframe" src='{environment:demosBaseUrl}/calendar-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### イベント
このサンプルを拡張します。ユーザーが 5 日以下の日付範囲を入力する必要があります。カレンダーの `selection` モードを range に設定し、範囲が無効な場合にユーザーに選択を変更するための通知を表示する `onSelection` イベントを使用します。

```html
<!-- app.component.html -->
<igx-calendar #calendar
    ...
    selection="range"
    (onSelection)="verifyRange($event)">
</igx-calendar>
```

`onSelection` イベントに渡した値が選択した日付のコレクションで、その長さに基づいてロジックを実行します。無効な選択をユーザーに通知する場合、選択を範囲の最初の日のみを含むために `selectDate` メソッドを使用してリセットします。

```typescript
// app.component.ts
...
public verifyRange(dates: Date[]) {
    if (dates.length > 5) {
        this.calendar.selectDate(dates[0]);
        this.dialog.open();
    }
}
```

以下で範囲の選択動作を確認できます。

<div class="sample-container" style="height: 460px">
    <iframe id="calendar-sample-3-iframe" src='{environment:demosBaseUrl}/calendar-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### テンプレート

**IgxCalendarComponent** API (プロパティ、イベント、メソッド) を使用して要件によってカレンダーを構成し、コードで操作する方法を説明しました。次にヘッダーおよびサブヘッダーのテンプレート機能を使用して外観をカスタマイズします。

カスタマイズは、カレンダーの ng-template を **igxCalendarHeader** または **igxCalendarSubheader** ディレクティブでデコレートし、返されたコンテキストを使用して日付の表示をカスタマイズします。
**igxCalendarHeader** ディレクティブでデコレートされるテンプレートは、カレンダーの選択が単一に設定された場合のみ描画されます。**igxCalendarSubheader** はすべての選択モードで利用可能です。

この例ではヘッダーに完全な日付を表示し、サブヘッダーに曜日を含むためにデフォルト テンプレートを変更します。

```html
<!-- app.component.html-->
<igx-calendar>
    <!-- Modify the header to display the month (in titlecase), day and weekday -->
    <ng-template igxCalendarHeader let-parts>
        {{ parts.month.combined | titlecase }} {{parts.day.combined }} {{ parts.weekday.combined }}
    </ng-template>
    <ng-template igxCalendarSubheader let-parts>
        <span class="date__el" (click)="parts.monthView()">{{ parts.month.combined }}</span>
        <span class="date__el" (click)="parts.yearView()">{{ parts.year.combined }}</span>
    </ng-template>
</igx-calendar>
```

> [!NOTE]
> Internet Explorer および Edge ブラウザーの場合、両方のブラウザーがこの機能を提供する Intl API を実装しないため、日付部分は空の文字列です。 ([formatToParts](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts) を参照)

このブラウザーをサポートするには、[ngIf](https://angular.io/api/common/NgIf#using-non-inlined-then-template) ディレクティブを使用する代わりのテンプレートを使用します。

```html
<!-- app.component.html-->
<igx-calendar #component locale="fr">
    <div *ngIf="formatParts; else parseTemplate">
        <ng-template igxCalendarHeader let-parts>
            {{ parts.month.combined | titlecase }} {{ parts.day.combined }} {{ parts.weekday.combined }}
        </ng-template>
        <ng-template igxCalendarSubheader let-parts>
            <span class="date__el" (click)="parts.monthView()">{{ parts.month.combined }}</span>
            <span class="date__el" (click)="parts.yearView()">{{ parts.year.combined }}</span>
        </ng-template>
    </div>

    <!-- Parse template for browsers not supporting Intl parts-->
    <ng-template #parseTemplate>
        <ng-template igxCalendarHeader let-parts>
            {{ getDatePart(parts, component, 'month') | titlecase }} {{ getDatePart(parts, component, 'day') }} {{ getDatePart(parts, component, 'weekday') }}
        </ng-template>
        <ng-template igxCalendarSubheader let-parts>
            <span class="date__el" (click)="parts.monthView()">{{ getDatePart(parts, component, 'month') }}</span>
            <span class="date__el" (click)="parts.yearView()">{{ getDatePart(parts, component, 'year') }}</span>
        </ng-template>
    </ng-template>
</igx-calendar>
```

**ngIf** は、使用するテンプレートを制御するために **formatParts** 式の値を評価します。代わりの **#parseTemplate** テンプレートを参照します。{} にある式は評価された値を返す **getDatePart** メソッドを起動します。この場合、書式設定された日付部分 (年、曜日、月など) を返します。**getDatePart** に渡されたパラメーターは、書式設定が **IgxCalendarComponent** の locale および format オプションに基づいて設定されるために必要です。

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

この条件付きテンプレート化および日付解析を実装後、ブラウザーの間の書式設定が統一されます。

<div class="sample-container" style="height: 570px">
    <iframe id="calendar-sample-4-iframe" src='{environment:demosBaseUrl}/calendar-sample-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### Disabled dates
This section demonstrates the usage of `disabledDates` functionallity. Different `single dates` or `range` elements of type `DateRangeDescriptor` could be added to Array, and passed to the `disabledDates` descriptor.

```typescript
this.calendar.disabledDates = [new DateRangeDescriptor(DateRangeType.Between, [
    new Date(2018, 8, 2),
    new Date(2018, 8, 8)
])];
```

The `DateRangeType` is used to specify the range that is going to be disabled. For example, `DateRangeType.Between` will disable the dates between two specific dates in Array. Code snippet above.
Check the API table below for all available `DateRangeType` values.

This feature is covering the situations when we may need to restrict some dates to be selectable and focusable.

Let's create a sample that is disabling dates within specific range of dates:

```typescript
export class CalendarSample6Component {
    @ViewChild("calendar") public calendar: IgxCalendarComponent;
    public today = new Date(Date.now());
    public range = [
        new Date(this.today.getFullYear(), this.today.getMonth(), 3),
        new Date(this.today.getFullYear(), this.today.getMonth(), 8)
    ];

    public ngOnInit() {
        this.calendar.disabledDates = [new DateRangeDescriptor(DateRangeType.Between, this.range)];
    }
}

```

This is the result.

<div class="sample-container" style="height: 480px">
    <iframe id="calendar-sample-6-iframe" src='{environment:demosBaseUrl}/calendar-sample-6' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="calendar-sample-6-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>


### Special dates

`Special dates` feature is using almost the same configuration principles as `Disabled dates`. The difference here is dates `styling` and `interaction`. You are able to select and focus `Special date`.

Let's add a `Special dates` to our `igxCalendar`, we are going to create a `DateRangeDescriptor` item of type `DateRangeType.Specific` and pass array of dates as `dateRange`:

```typescript
export class CalendarSample7Component {
    @ViewChild("calendar") public calendar: IgxCalendarComponent;
    @ViewChild(IgxSnackbarComponent) public snackbar: IgxSnackbarComponent;
    public range = [];

    ...
    public selectPTOdays(dates: Date[]) {
        this.range = dates;
    }

    public submitPTOdays(eventArgs) {
        this.calendar.specialDates =
            [new DateRangeDescriptor(DateRangeType.Specific, this.range)];

        this.range.forEach((item) => {
            this.calendar.selectDate(item);
        });

        ...
    }
}
```

```html
<article class="sample-column calendar-wrapper">
    <span>Request Time Off</span>
    <igx-calendar #calendar
        selection="multi"
        (onSelection)="selectPTOdays($event)">
    </igx-calendar>
    <button igxButton="raised" (click)="submitPTOdays($event)">Submit Request</button>
</article>
```

We are going to use the selected dates array to define `Special dates` descriptor.

Result:

<div class="sample-container" style="height: 540px">
    <iframe id="calendar-sample-7-iframe" src='{environment:demosBaseUrl}/calendar-sample-7' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="calendar-sample-7-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### キーボード ナビゲーション

**IgxCalendarComponent** コンポーネントがフォーカスを持つ場合:

* `PageUp` は前の月へ移動します。
* `PageDown` は次の月へ移動します。
* `Shift + PageUp` は前の年へ移動します。
* `Shift + PageDown` は次の年へ移動します。
* `Home` は表示されている現在月の最初日にフォーカスします。
* `End` は表示されている現在月の最後日にフォーカスします。

現在月の日がフォーカスされる場合:

* 矢印キーは日を移動します。
* `Enter` はフォーカスされている日を選択します。
<div class="divider--half"></div>

### API

#### 入力
<div class="divider--half"></div>

| 名前        |      型      |  説明 |
|:----------:|:-------------|:------|
| `weekStart`| `Number` または `WEEKDAYS` | 週の最初の日を設定します。 |
| `locale` | `string` | カレンダーで日付の書式および表示のためのロケールを設定します。有効な書式の詳細については、[この](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl)ページを参照してください。 |
| `selection` | `string` | カレンダーの選択タイプを設定します。有効な値は `single` (デフォルト)、`multi`、および `range` です。 |
| `viewDate` | `Date` | カレンダーを描画するときにデフォルト ビューで表示される年と月を設定します。デフォルト値は現在の年と月です。   |
| `value` | `Date` または `Date[]` | カレンダー ウィジェットの現在値を取得または設定します。複数選択および範囲選択は選択日付の配列を返します。 |
| `formatOptions` | `Object` | 日付を書式設定するために使用される `locale` プロパティと渡される書式オプション。デフォルト値は { day: 'numeric', month: 'short', weekday: 'short', year: 'numeric' } です。 |
|`formatViews`| `Object`| カレンダー ビューの日付コンポーネントが提供された locale および formatOptions に基づいて書式設定するかどうかを制御します。デフォルト値は { day: false, month: true, year: false } です。ヘッダーの描画に影響しません。|
| `vertical` | `boolean` | カレンダー コンポーネントのレイアウトを制御します。`vertical` が true に設定される場合、カレンダー ヘッダーはカレンダーの隣に描画されます。|
| `disabledDates` | `DateRangeDescriptor[]` | Gets/Sets the disabled dates descriptors. |
| `specialDates` | `DateRangeDescriptor[]` | Gets/Sets the special dates descriptors. |

#### 出力
<div class="divider--half"></div>

| 名前 |戻り値の型 | 説明 |
|:--:|:---|:---|
| `onSelection` | `Date` または `Date[]` | カレンダーで選択が実行されるときに発生します。イベントは、コンポーネントの選択タイプに基づいた選択値を含みます。 |

#### メソッド
<div class="divider--half"></div>


| 名前   | 引数 | 戻り値の型 | 説明 |
|:----------:|:------|:------|:------|
| `selectDate` | `date: Date` または `Date[]` | `void` | カレンダーの選択を変更します。このメソッドの呼び出しは `onSelection` イベントを発生させます。 |
| `isDateDisabled` | `date: Date` | `boolean` | Checks whether a date is disabled. |
| `isDateSpecial` | `date: Date` | `boolean` | Checks whether a date is special. |
<div class="divider--half"></div>

#### Enumerations
<div class="divider--half"></div>

| Name   | Description |
|:----------:|:------|
| `DateRangeType ` |  Constants After, Before, Between, Specific, Weekdays, Weekends of type `DateRangeType` |

<div class="divider--half"></div>

#### テンプレート コンテキスト
<div class="divider--half"></div>

| 名前 | 戻り値の型 | 説明 |
|:--:|:---|:---|
| `date` | `Date` | テンプレートのコンテキストの日付オブジェクト。 |
| `full` | `string` | formatOptions を適用した後に返された完全な日付の表現。 |
| `monthView` | `function` | カレンダーを月表示に設定する関数。 |
| `yearView` | `function` | カレンダーを年表示に設定する関数。 |
| `era` | `object` | 提供されたロケールに書式設定される年号の日付コンポーネント (適用可能な場合)。 |
| `year` | `object` | 提供されたロケールに書式設定される年の日付コンポーネント (適用可能な場合)。 |
| `month` | `object` | 提供されたロケールに書式設定される月の日付コンポーネント (適用可能な場合)。 |
| `day` | `object` | 提供されたロケールに書式設定される日の日付コンポーネント (適用可能な場合)。 |
| `weekday` | `object` | 提供されたロケールに書式設定される曜日の日付コンポーネント (適用可能な場合)。 |
<div class="divider--half"></div>
