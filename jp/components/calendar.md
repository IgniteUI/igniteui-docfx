---
title: Angular Calendar | Calendar | インフラジスティックス
_description: Ignite UI for Angular の Calendar コンポーネントを使用して、アプリケーションで日付情報の表示および日付の入力を可能なカレンダーを作成します。
_keywords: angular calendar, angular カレンダー, angular コンポーネント, ignite ui for angular
_language: ja
---

# Angular Calendar
<p class="highlight">Ignite UI for Angular Calendar コンポーネントは、ネイティブ [Angular コンポーネント](https://angular.io/guide/architecture#components)であり、日付情報を簡単に表示できます。ユーザーは、単一選択、複数選択、または範囲選択の 3 つの選択モードから選択できます。</p>

## Angular Calendar の例
<div class="divider--half"></div>
<div class="sample-container loading" style="height: 500px">
    <iframe id="calendar-sample-5-iframe" src='{environment:demosBaseUrl}/scheduling/calendar-sample-5' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="calendar-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

## 使用方法

### はじめに

Calendar コンポーネントを初期化する前に、`IgxCalendarModule` を **app.module.ts** ファイルにインポートします。

注: タッチ操作のために、[**IgxCalendar**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) は **BrowserAnimationsModule** と **HammerModule** に依存関係があり、これらも AppModule に追加する必要があります。

```typescript
// app.module.ts
...
import { HammerModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCalendarModule } from 'igniteui-angular';
@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, HammerModule, IgxCalendarModule],
    ...
})
export class AppModule {}
```

> [!WARNING]
> [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) が日付のローカライズおよび書式設定のために [Intl Web API](https://developer.mozilla.org/ja-JP/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) を使用します。
対象プラットフォームがその API をサポートしない場合、[適切なポリフィル](https://github.com/andyearnshaw/Intl.js/)を使用してください。

## 例 

### 単一選択のカレンダー

`IgxCalendarComponent` をインスタンス化するには、セレクター要素をテンプレートに追加します。単一選択カレンダー モードで現在の月を表示します。

```html
<!-- app.component.html -->
<!-- Single selection mode -->
<igx-calendar></igx-calendar>
```

### 複数選択

[`selection`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#selection) プロパティを使用してデフォルトのモードを簡単に変更できます。

```html
<!-- app.component.html -->
<!-- Multi selection mode -->
<igx-calendar selection="multi" [showWeekNumbers]="true"></igx-calendar>
```

<div class="sample-container loading" style="height: 420px">
    <iframe id="calendar-sample-1-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-sample-1' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="calendar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

### 範囲選択

同じ方法に従って、範囲選択モードに切り替えることができます。

```html
<!-- app.component.html -->
<!-- Range selection mode -->
<igx-calendar selection="range"></igx-calendar>
```

<div class="sample-container loading" style="height: 420px">
    <iframe id="calendar-sample-8-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-sample-8' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="calendar-sample-8-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-8-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

> [!NOTE]
> 選択が `multi` または `range` の場合、カレンダー ヘッダーは描画されません。

### ローカライズおよび書式設定

カレンダーにおいてローカライズおよび書式設定はとても重要な要素です。`IgxCalendarComponent` でこれらは以下のプロパティによって制御およびカスタマイズします - [`locale`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#locale)、[`formatOptions`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#formatoptions)、[`formatViews`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#formatviews)、[`weekStart`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#weekstart)。

これらの設定に加え、`IgxCalendarComponent API` のその他のカスタマイズ機能も使用できます。最初に週の開始日を制御する `weekStart` を設定します。デフォルト値が 0 (日曜日) であるため、値を 1 (月曜日) に設定します。以下のマークアップで表示書式設定をカスタマイズするために、`formatOptions` および `formatViews` プロパティもバインドしています。最後に、`locale` プロパティをユーザーの選択した場所に基づいて値にバインドします。

```html
<!-- app.component.html -->
<igx-select #select [(ngModel)]="locale">
    <igx-select-item *ngFor="let locale of locales" [value]="locale">
        {{ locale }}
    </igx-select-item>
</igx-select>

<igx-calendar #calendar
    [weekStart]="1"
    [locale]="locale"
    [formatOptions]="formatOptions"
    [formatViews]="formatViews">
</igx-calendar>
```
すべてのプロパティ値が AppComponent ファイルに設定されます。

```typescript
// app.component.ts
@ViewChild('calendar', { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;

public formatOptions: any;
public formatViews: any;
public locales = ["EN", "DE", "FR", "AR", "ZH"];
public locale = "EN";

public ngOnInit() {
    this.formatOptions = { day: "2-digit", month: "long", weekday: "long", year: "numeric" };
    this.formatViews = { day: true, month: true, year: true };
}
```

すべて適切に設定できると、カスタマイズされた日付を持つカレンダーが表示され、ユーザーの場所に基づいてロケール表現が変更されます。以下は結果です。

<div class="sample-container loading" style="height: 620px">
    <iframe id="calendar-sample-2-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="calendar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

### 日付の無効化
このセクションは、[`disabledDates`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#disableddates) 機能の使用について説明します。これには、異なる単一の日付または範囲を配列に追加し、`disabledDates` 記述子に渡すことができます。

[`DateRangeType`]({environment:angularApiUrl}/enums/daterangetype.html) は無効にする範囲を指定するために使用します。

現在の月の 3 日から 8 日の日付を無効にするサンプルを作成します。

```typescript
export class CalendarSample6Component {
    @ViewChild("calendar") public calendar: IgxCalendarComponent;
    public today = new Date(Date.now());
    public range = [
        new Date(this.today.getFullYear(), this.today.getMonth(), 3),
        new Date(this.today.getFullYear(), this.today.getMonth(), 8)
    ];

    public ngOnInit() {
        this.calendar.disabledDates = [{ type: DateRangeType.Between, dateRange: this.range }];
    }
}
```

これらの構成の結果は以下のようになります。

<div class="sample-container loading" style="height: 480px">
    <iframe id="calendar-sample-6-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-sample-6' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="calendar-sample-6-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-6-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

### 特別な日付
[`specialDates`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#specialdates) 機能は、`disabledDates` とほとんど同じ構成を使用します。`disabled` と異なる点は `specialDates` を選択してフォーカスする機能です。

`igxCalendar` に `specialDates` を追加します。これを行うには、[`DateRangeType.Specific`]({environment:angularApiUrl}/enums/daterangetype.html#specific) タイプの [`DateRangeDescriptor`]({environment:angularApiUrl}/interfaces/daterangedescriptor.html) 項目を作成し、日付の配列を [`dateRange`]({environment:angularApiUrl}/interfaces/daterangedescriptor.html#daterange) として渡します。

```typescript
export class CalendarSample7Component {
    @ViewChild("calendar", { static: true })
    public calendar: IgxCalendarComponent;
    @ViewChild("alert", { static: true })
    public dialog: IgxDialogComponent;
    public range = [];

    public selectPTOdays(dates: Date[]) {
        this.range = dates;
    }

    public submitPTOdays(eventArgs) {
        this.calendar.specialDates =
            [{ type: DateRangeType.Specific, dateRange: this.range }];

        this.range.forEach((item) => {
            this.calendar.selectDate(item);
        });

        ...
    }
}
```

```html
<igx-calendar #calendar weekStart="1"
    selection="multi" 
    (onSelection)="selectPTOdays($event)">
</igx-calendar>
<igx-dialog #alert title="Request Time Off" 
    leftButtonLabel="OK" 
    (onLeftButtonSelect)="alert.close()">
</igx-dialog>
<button igxButton="raised" (click)="submitPTOdays($event)">Submit Request</button>
```

以下のデモでは、休暇要求オプションのカレンダーを示します。

<div class="sample-container loading" style="height: 450px">
    <iframe id="calendar-sample-7-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-sample-7' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="calendar-sample-7-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-7-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

### 週番号

[`showWeekNumbers`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#showWeekNumbers) 入力を使用して、Calendar コンポーネント と DatePicker コンポーネントの両方の週番号を表示できるようになりました。

```html

<!-- app.component.html -->
<igx-calendar selection="multi" [showWeekNumbers]="true"></igx-calendar>
```
以下のデモは、週番号が有効になっているカレンダーを示しています:

<div class="sample-container loading" style="height: 420px">
    <iframe id="calendar-sample-1-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-sample-1' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="calendar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

## カレンダー イベント
カレンダーが発するイベントを見てみましょう:
- [`onSelection`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#onselection) - カレンダーで日付を選択すると発生されます。
- [`viewDateChanged`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#viewdatechanged) - 表示されている月/年が変更されるたびに発行されます。たとえば、`next` または `previous` の月に移動した後。
- [`activeViewChanged`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#activeviewchanged) - アクティブなビューが変更された後に発生します。たとえば、ユーザーがヘッダーの `month` または `year` セクションをクリックした後。

```html
<!-- app.component.html -->
<igx-calendar #calendar
    (onSelection)="onSelection($event)"
    (viewDateChanged)="viewDateChanged($event)"
    (activeViewChanged)="activeViewChanged($event)">
</igx-calendar>
```
[`onSelection`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#onselection)イベントは、入力検証ロジックを構築するのに適しています。以下のコードを使用して、選択が 5 日を超えた場合にユーザーに警告し、選択をリセットします。

```typescript
// app.component.ts
...
public onSelection(dates: Date[]) {
    if (dates.length > 5) {
        this.calendar.selectedDates = [];
        // alert the user
    }
}
public viewDateChanged(event: IViewDateChangeEventArgs) {
    // use event.previousValue to get previous month/year that was presented.
    // use event.currentValue to get current month/year that is presented.
}

public activeViewChanged(event: CalendarView) {
    // use CalendarView[event] to get the current active view (DEFAULT, YEAR or DECADE)
}
```

以下のデモを試して (選択を変更し、月と年を移動し)、リアルタイムで記録されたイベントを確認してください:
<div class="sample-container loading" style="height: 420px">
    <iframe id="calendar-sample-3-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="calendar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>


## ビュー
`IgxCalendarModule` によって提供される個別のビューがあり、別々に使用できます。
- 日ビュー - [`igx-days-view`]({environment:angularApiUrl}/classes/igxdaysviewcomponent.html)

<div class="sample-container loading" style="height: 420px">
    <iframe id="calendar-days-view-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-days-view' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="calendar-days-view-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-days-view-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

- 月ビュー - [`igx-months-view`]({environment:angularApiUrl}/classes/igxmonthsviewcomponent.html)

<div class="sample-container loading" style="height: 520px">
    <iframe id="calendar-months-view-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-months-view' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="calendar-months-view-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-months-view-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

- 年ビュー - [`igx-years-view`]({environment:angularApiUrl}/classes/igxyearsviewcomponent.html)

<div class="sample-container loading" style="height: 500px">
    <iframe id="calendar-years-view-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-years-view' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="calendar-years-view-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-years-view-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

## キーボード ナビゲーション
Tab キーを使用してページを移動する場合、*igxCalendarComponent* が [W3 アクセシビリティ推奨事項](https://www.w3.org/TR/wai-aria-practices/#layoutGrid)に基づいて以下のタブストップを導入することに注意してください。
- [前月] ボタン
- [月の選択] ボタン
- [年の選択] ボタン
- [翌月] ボタン
- 日ビューの選択した日付、現在の日付、最初のフォーカス可能な (無効ではない) 日付

選択した複数の日付を含むカレンダーでは、最初の日付のみがタブ位置として表示されます。たとえば、複数選択カレンダーで日付を選択した場合: タブ ナビゲーションのときに *13/10/2020*、*17/10/2020* および *21/10/2020* のみアクセスできます。範囲を選択したカレンダーでは、選択した範囲の最初の日付のみがページ タブ シーケンスの一部になります。

>[!NOTE]
> *V10.2.0* からの動作変更- 日ビューの Tab キー ナビゲーションは使用できなくなりました。日付ビューの日付間を移動するには、矢印キーを使用します。

`igxCalendar` コンポーネントにフォーカスがある場合、以下を使用してナビゲーションできます。
- <kbd>PageUp</kbd> キーは前の月に移動します。
- <kbd>PageDown</kbd> キーは次の月に移動します。
- <kbd>Shift</kbd> + <kbd>PageUp</kbd> キーは前の年に移動します。
- <kbd>Shift</kbd> + <kbd>PageDown</kbd>> キーは次の年に移動します。
- <kbd>Home</kbd> キーは現在の年の最初の月をフォーカスします。
- <kbd>End</kbd> キーは現在の月の最後の日または最後の月をフォーカスします。

`前` または`次`の月のボタン(サブヘッダー内)にフォーカスがある場合、以下を使用します。
- <kbd>Space</kbd> または <kbd>Enter</kbd> キーは次の月または前の月のビューへスクロールします。

サブヘッダーの`月`ボタンのフォーカス時:
- <kbd>Space</kbd> または <kbd>Enter</kbd> キーは月ビューを開きます。

サブヘッダーの`年`ボタンのフォーカス時:
- <kbd>Space</kbd> または <kbd>Enter</kbd> キーは10 年ビューを開きます。

現在月の`日`がフォーカスされる場合:
- 矢印キーで日を移動します。注: 無効な日付はスキップされます。
- フォーカスはビューの現在の月に保持され、ナビゲーションは月の**最終日** / **初日** **から** / **まで**になります。
- キーボード ナビゲーションは連続です。つまり、矢印でナビゲーションしている間、すべての月を移動します。
- <kbd>Enter キー</kbd> を使用して、現在フォーカスされている日を選択します。

月ビュー内の`月`のフォーカス時:
- 矢印キーで月を移動します。
- <kbd>Home</kbd> キーは月ビューの最初の月にフォーカスします。
- <kbd>End</kbd> キーは月ビューの最後の月にフォーカスします。
- <kbd>Enter</kbd> キーは、現在フォーカスされている月を選択してビューと閉じます。

10 年ビュー内の`年`のフォーカス時:
- <kbd>上矢印</kbd>キーと<kbd>下矢印</kbd>キーで年を移動します。
- <kbd>Enter</kbd> キーは、現在フォーカスされている年を選択してビューと閉じます。

>[!NOTE]
 >バージョン 8.2.0 に続いて、キーボード ナビゲーションは現在の月以外の日をフォーカスせず、ビューの月を変更します。

## マルチビュー カレンダー
マルチ ビューカレンダーは、3 種類すべての選択をサポートしています。[`monthsViewNumber`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#monthsviewnumber) 入力を使用して、表示される月の数を設定します。これは、フレックス コンテナーに水平に表示されます。設定される最大値に制限はありません。マルチ ビューカレンダーを使用する場合、現在の月に属さない日を非表示にできます。非表示にするには、[`hideOutsideDays`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#hideoutsidedays)プ ロパティを使用します。キーボード ナビゲーションは、表示されている次/前の月へ移動します。

<div class="sample-container loading" style="height: 540px">
    <iframe id="multiview-calendar" data-src='{environment:demosBaseUrl}/scheduling/multiview-calendar' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="multiview-calendar" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="multiview-calendar" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

## スタイル設定

カレンダーのスタイル設定を開始するには、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`igx-calendar-theme`]({environment:sassApiUrl}/index.html#function-igx-calendar-theme) を拡張する新しいテーマを作成し、デフォルト テーマのいくつかのパラメーターを受け取る方法です。

```scss
$custom-calendar-theme: igx-calendar-theme(
  $header-background: #345779,
  $content-background: #fdfdfd,
  $header-text-color: #ffffff,
  $date-current-text-color: #2dabe8,
  $picker-arrow-color: #2dabe8,
  $date-selected-text-color: #fdfdfd,
  $date-current-bg-color: #fdfdfd,
  $picker-arrow-hover-color:  #345779,
  $year-current-text-color: #2dabe8,
  $year-hover-text-color: #2dabe8,
  $month-current-text-color: #2dabe8,
  $month-hover-text-color: #2dabe8,
  $picker-text-color: #2dabe8,
  $picker-text-hover-color:  #345779
);
```

### CSS 変数の使用

最後に Calendar のカスタム テーマを設定します。

```scss
 @include igx-css-vars($custom-calendar-theme);
```

### テーマ オーバーライドの使用

Internet Explorer 11 などの古いブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチを用いる必要があります。 

コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

 ```scss
:host {
  ::ng-deep {
    @include igx-calendar($custom-calendar-theme);
  }
}
```

<div class="sample-container loading" style="height:500px">
    <iframe id="calendar-styling-sample-iframe" src='{environment:demosBaseUrl}/scheduling/calendar-styling-sample' width="100%" height="100%"
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="calendar-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="calendar-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

## API リファレンス
<div class="divider--half"></div>

* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-calendar-theme)
* [DateRangeType]({environment:angularApiUrl}/enums/daterangetype.html)
* [DateRangeDescriptor]({environment:angularApiUrl}/interfaces/daterangedescriptor.html)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular) 
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular) 
