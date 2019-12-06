---
title: Calendar コンポーネント
_description: Ignite UI for Angular の Calendar コンポーネントを使用して、アプリケーションで日付情報の表示および日付の入力を可能なカレンダーを作成します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Calendar コンポーネント, Angular Calendar コントロール
_language: ja
---

## Calendar
<p class="highlight">Ignite UI for Angular Calendar コンポーネントは、ネイティブ [Angular コンポーネント](https://angular.io/guide/architecture#components)です。アプリケーションで日付情報を 3 つの方法で表示できます。ユーザーが単一の日付、複数の日付、または日付の範囲を選択できます。</p>

### Calendar デモ
<div class="sample-container loading" style="height: 730px">
    <iframe id="calendar-sample-5-iframe" src='{environment:demosBaseUrl}/scheduling/calendar-sample-5' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### 使用方法
Calendar コンポーネントを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、アプリケーションの AppModule に `IgxCalendarModule`をインポートします。通常、これは **app.module.ts** ファイルです。注: [**IgxCalendar**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) は **BrowserAnimationsModule** に依存関係があるため、AppModule にも追加する必要があります。

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

カレンダー API の型を宣言する前に [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) を AppComponent ファイルにインポートします。エディターが自動的にインポートすることが可能です。

```typescript
import { IgxCalendarComponent } from 'igniteui-angular';
...

@ViewChild('calendar', { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;
```

> [!Note]
> 注: [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) が日付のローカライズおよび書式設定のために [Intl](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) WebAPI を使用します。
> 対象プラットフォームがその API をサポートしない場合、[適切なポリフィル](https://github.com/andyearnshaw/Intl.js/)を使用してください。

### 選択
[`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) をインスタンス化するには、セレクター要素をテンプレートに追加します。カレンダーで現在の月が表示され、単一選択モードが使用されます。その他の選択モードに変更するには、[`selection`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#selection) プロパティを `multi` または `range` に設定します。

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

<div class="sample-container loading" style="height: 730px">
    <iframe id="calendar-sample-1-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### ローカライズと書式設定

カレンダーにおいてローカライズや書式設定はとても重要な要素です。[`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) では、その機能が [`locale`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#locale)、[`formatOptions`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#formatoptions)、および [`formatViews`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#formatviews) プロパティによって制御してカスタマイズ化されます。
<br>
これらの設定に加え、[`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) API のその他のカスタマイズ機能も使用できます。EFTA (欧州自由貿易連合) 国内からページへアクセスする場合、カレンダーを対応するカルチャで表示する必要があります。最初に週の開始日を制御する [`weekstart`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#weekstart) を設定し、デフォルト値が 0 (日曜日) であるため、値を 1 に設定します。

以下のマークアップは、[`formatOptions`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#formatoptions) および [`formatViews`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#formatviews) プロパティをバインドして表示書式設定をカスタマイズします。最後に、[`locale`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#locale) プロパティをユーザーの選択した場所に基づいて値にバインドします。

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

<div class="sample-container loading" style="height: 570px">
    <iframe id="calendar-sample-2-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### イベント
このサンプルを拡張します。ユーザーが 5 日以下の日付範囲を入力する必要があります。カレンダーの [`selection`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#selection) モードを range に設定し、範囲が無効な場合にユーザーに選択を変更するための通知を表示する [`onSelection`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#onselection) イベントを使用します。

```html
<!-- app.component.html -->
<igx-calendar #calendar
    ...
    selection="range"
    (onSelection)="verifyRange($event)">
</igx-calendar>
```

[`onSelection`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#onselection) イベントに渡した値が選択した日付のコレクションで、その長さに基づいてロジックを実行します。無効な選択をユーザーに通知する場合、選択を範囲の最初の日のみを含むために [`selectDate`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#selectdate) メソッドを使用してリセットします。

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

<div class="sample-container loading" style="height: 460px">
    <iframe id="calendar-sample-3-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### テンプレート

[`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) API (プロパティ、イベント、メソッド) を使用して要件によってカレンダーを構成し、コードで操作する方法を説明しました。次にヘッダーおよびサブヘッダーのテンプレート機能を使用して外観をカスタマイズします。

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

**ngIf** は、使用するテンプレートを制御するために **formatParts** 式の値を評価します。代わりの **#parseTemplate** テンプレートを参照します。{} にある式は評価された値を返す **getDatePart** メソッドを起動します。この場合、書式設定された日付部分 (年、曜日、月など) を返します。**getDatePart** に渡されたパラメーターは、書式設定が [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) の locale および format オプションに基づいて設定されるために必要です。

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

<div class="sample-container loading" style="height: 570px">
    <iframe id="calendar-sample-4-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-sample-4' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### 日付の無効化
このセクションは、[`disabledDates`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#disableddates) 機能の使用について説明します。異なる`単一の日付`または`範囲`の要素を配列に追加し、[`disabledDates`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#disableddates) 記述子に渡すことができます。

```typescript
this.calendar.disabledDates = [new DateRangeDescriptor(DateRangeType.Between, [
    new Date(2018, 8, 2),
    new Date(2018, 8, 8)
])];
```

[`DateRangeType`]({environment:angularApiUrl}/enums/daterangetype.html) は無効にする範囲を指定するために使用します。たとえば、[`DateRangeType.Between`]({environment:angularApiUrl}/enums/daterangetype.html#between) は配列の特定の 2 つの日付間を無効にします。上記のコード スニペット。
以下の API の表は、使用可能なすべての [`DateRangeType`]({environment:angularApiUrl}/enums/daterangetype.html) 値です。

この機能は、選択およびフォーカスが可能な日付を制限する必要がある場合に使用します。

特定の範囲の日付を無効にするサンプルを作成します。

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

以下は結果です。

<div class="sample-container loading" style="height: 480px">
    <iframe id="calendar-sample-6-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-sample-6' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-6-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>


### 特定の日付

[`Special dates`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#specialdates) 機能は、[`Disabled dates`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#disableddates) とほとんど同じ構成を使用します。違いは、日付の `styling` と `interaction` です。また [`Special dates`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#specialdates) の選択やフォーカスが可能です。

[`Special dates`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#specialdates) を [`igxCalendar`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) に追加し、[`DateRangeType.Specific`]({environment:angularApiUrl}/enums/daterangetype.html#specific) の [`DateRangeDescriptor`]({environment:angularApiUrl}/interfaces/daterangedescriptor.html) 項目を作成して [`dateRange`]({environment:angularApiUrl}/interfaces/daterangedescriptor.html#daterange) で日付の配列を渡します。

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

選択した日付配列を使用して `Special dates` 記述子を定義します。

結果:

<div class="sample-container loading" style="height: 540px">
    <iframe id="calendar-sample-7-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-sample-7' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-7-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

### ビュー
`IgxCalendarModule` によって提供される個別のビューがあり、別々に使用できます。
- Days ビュー - [`igx-days-view`]({environment:angularApiUrl}/classes/igxdaysviewcomponent.html)
- Months ビュー - [`igx-months-view`]({environment:angularApiUrl}/classes/igxmonthsviewcomponent.html)
- Years ビュー - [`igx-years-view`]({environment:angularApiUrl}/classes/igxyearsviewcomponent.html)

<div class="sample-container loading" style="height: 540px">
    <iframe id="calendar-views-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-views' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-views-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

### キーボード ナビゲーション
[**igxCalendar**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) コンポーネントにフォーカスがある場合、以下を使用してナビゲーションできます。
- <kbd>PageUp</kbd> キーは前の月に移動します。
- <kbd>PageDown</kbd> キーは次の月に移動します。
- <kbd>Shift</kbd> + <kbd>PageUp</kbd> キーは前の年に移動します。
- <kbd>Shift</kbd> + <kbd>PageDown</kbd>> キーは次の年に移動します。
- <kbd>Home</kbd> キーは現在の年の最初の月をフォーカスします。
- <kbd>End</kbd> キーは現在の月の最後の日または最後の月をフォーカスします。
- <kbd>Tab</kbd> キーはサブヘッダー ボタン間を移動します。

`前` または`次`の月のボタン(サブヘッダー内)にフォーカスがある場合、以下を使用します。
- <kbd>Space</kbd> または <kbd>Enter</kbd> キーは次の月または前の月のビューへスクロールします。

サブヘッダーの`月`ボタンのフォーカス時:
- <kbd>Space</kbd> または <kbd>Enter</kbd> キーは月ビューを開きます。

サブヘッダーの`年`ボタンのフォーカス時:
- <kbd>Space</kbd> または <kbd>Enter</kbd> キーは10 年ビューを開きます。

現在月の日のフォーカス時:
- 矢印キーで日を移動します。
- 矢印キーで前/翌月に移動します。
- 現在の月の最終日から次の日または現在の月の最初の日から前に移動すると、表示されている次の月または前の月にフォーカスが移動します。
- 現在の月の最終日から次の日または現在の月の最初の日から前に移動すると、表示されている次の月または前の月にフォーカスが移動します。
- <kbd>Enter</kbd> キーを使用して、現在フォーカスされている日を選択します。

月ビュー内の月のフォーカス時:
- 矢印キーで月を移動します。
- <kbd>Home</kbd> キーは月ビューの最初の月にフォーカスします。
- <kbd>End</kbd> キーは月ビューの最後の月にフォーカスします。
- <kbd>Enter</kbd> キーは、現在フォーカスされている月を選択してビューと閉じます。

10 年ビュー内の年のフォーカス時:
- 矢印キーで年を移動します。
- <kbd>Enter</kbd> キーは、現在フォーカスされている年を選択してビューと閉じます。

>[!NOTE]
 >バージョン 8.2.0 に続いて、キーボード ナビゲーションは現在の月以外の日をフォーカスせず、ビューの月を変更します。

<div class="divider--half"></div>


### マルチビュー カレンダー
[`monthsViewNumber`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#monthsviewnumber) 入力を使用して、表示される月の数が設定されます。
設定される最大値に制限はなく、月はフレックス コンテナに水平に表示されます。マルチ ビューカレンダーを表示する場合、[`hideOutsideDays`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#hideoutsidedays) を使用して、現在の月に属さない日を非表示にできます。マルチビュー カレンダーは、3 種類すべての選択をサポートしています。キーボード ナビゲーションは、表示されている次/前の月へ移動します。

結果:

<div class="sample-container loading" style="height: 540px">
    <iframe id="multiview-calendar" data-src='{environment:demosBaseUrl}/scheduling/multiview-calendar' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="multiview-calendar" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

### スタイル設定

カレンダーのスタイル設定を開始するには、すべてのテーマ関数とコンポーネント mixins が存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

最も簡単な方法は、[`igx-calendar-theme`]({environment:sassApiUrl}/index.html#function-igx-calendar-theme) を拡張する新しいテーマを作成し、`$header-background` `$content-background`、`$header-text-color`、`$date-current-text-color`, `$picker-arrow-color`、`$picker-arrow-hover-color`、`$year-current-text-color`、`$year-hover-text-color`、`$month-current-text-color`、`$month-hover-text-color`、`$picker-text-color`、および `$picker-text-hover-color` パラメーターを受け取る方法です。

```scss
$my-calendar-theme: igx-calendar-theme(
  $header-background: #345779,
  $content-background: #fdfdfd,
  $header-text-color: #ffffff,
  $date-current-text-color: #2dabe8,
  $picker-arrow-color: #2dabe8,
  $picker-arrow-hover-color: #000000,
  $year-current-text-color: #2dabe8,
  $year-hover-text-color: #2dabe8,
  $month-current-text-color: #2dabe8,
  $month-hover-text-color: #2dabe8,
  $picker-text-color: #2dabe8,
  $picker-text-hover-color: #000000
);
```
最後の手順は、それぞれのテーマを持つコンポーネント mixins を**含める**ことです。 

```scss
 @include igx-calendar($my-calendar-theme);
```

>[!NOTE]
 >コンポーネントが [`Emulated`](./themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を`ペネトレーション`する必要があります。

 ```scss
:host {
  ::ng-deep {
    @include igx-calendar($my-calendar-theme);
  }
}
```

#### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) と [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$blue-color: #345779;
$light-gray-color: #fdfdfd;

$my-custom-palette: igx-palette(
    $primary: $blue-color,
    $secondary: $light-gray-color
);
```

次に [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取得できます。

```scss
$my-calendar-theme: igx-calendar-theme(
  $header-background: igx-color($my-custom-palette, "primary", 500),
  $content-background: igx-color($my-custom-palette, "secondary", 500),
  $header-text-color: igx-color($my-custom-palette, "secondary", 50),
  $date-current-text-color: igx-color($my-custom-palette, "primary", 50),
  $picker-arrow-color: igx-color($my-custom-palette, "primary", 50),
  $picker-arrow-hover-color: igx-color($my-custom-palette, "grays", 900),
  $year-current-text-color: igx-color($my-custom-palette, "primary", 50),
  $year-hover-text-color: igx-color($my-custom-palette, "primary", 50),
  $month-current-text-color: igx-color($my-custom-palette, "primary", 50),
  $month-hover-text-color: igx-color($my-custom-palette, "primary", 50),
  $picker-text-color: igx-color($my-custom-palette, "primary", 50),
  $picker-text-hover-color: igx-color($my-custom-palette, "grays", 900),
  $date-selected-background: igx-color($my-custom-palette, "primary", 500),
  $date-selected-text-color: igx-color($my-custom-palette, "secondary", 500)
);
```

>[!NOTE]
>`Igx-color` と `igx-palette` は色の生成や取得のための関数です。 使い方の詳細については [`パレット`](./themes/palette.md) のトピックを参照してください。

#### スキーマの使用

テーマ エンジンを使用して [**スキーマ**](./themes/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ [`_light-badge`]({environment:sassApiUrl}/index.html#variable-_light-calendar) の 1 つを拡張します。  

```scss
// Extending the light calendar schema
$custom-calendar-schema: extend($_light-calendar,
    (
        header-background: (igx-color: ('primary', 500)),
        content-background: (igx-color: ('secondary', 500)),
        header-text-color: (igx-color: ('secondary', 50)),
        date-current-text-color: (igx-color: ('primary', 50)),
        picker-arrow-color: (igx-color: ('primary', 50)),
        picker-arrow-hover-color: (igx-color: ('grays', 900)),
        year-current-text-color: (igx-color: ('primary', 50)),
        year-hover-text-color: (igx-color: ('primary', 50)),
        month-current-text-color: (igx-color: ('primary', 50)),
        month-hover-text-color: (igx-color: ('primary', 50)),
        picker-text-color: (igx-color: ('primary', 50)),
        picker-text-hover-color: (igx-color: ('grays', 900)),
        date-selected-background: (igx-color: ('primary', 500)),
        date-selected-text-color: (igx-color: ('secondary', 500))
    )
);
```

カスタム スキーマを適用するには、グローバル  ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを**拡張**する必要があります。これは基本的にカスタム スキーマでコンポーネントをポイントし、その後それぞれのコンポーネントテーマに追加するものです。

```scss
// Extending the global light-schema
$my-custom-schema: extend($light-schema, 
    (
        igx-calendar: $custom-calendar-schema
    )
);

// Defining our custom theme with the custom schema
$my-calendar-theme: igx-calendar-theme(
  $palette: $my-custom-palette,
  $schema: $my-custom-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

#### デモ

<div class="sample-container loading" style="height:550px">
    <iframe id="calendar-styling-sample-iframe" src='{environment:demosBaseUrl}/scheduling/calendar-styling-sample' width="100%" height="100%" 
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

### API リファレンス
<div class="divider--half"></div>

* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-calendar-theme)
* [DateRangeType]({environment:angularApiUrl}/enums/daterangetype.html)
* [DateRangeDescriptor]({environment:angularApiUrl}/interfaces/daterangedescriptor.html)

<div class="divider--half"></div>

### その他のリソース
<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular) 
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular) 
