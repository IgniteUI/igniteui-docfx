---
title: Angular Calendar コンポーネント – Ignite UI for Angular
_description: Angular Calendar コンポーネントを使用すると、ユーザーはアプリケーション用の直感的なカレンダーを作成して、3 つの異なる選択モードを使用して日付情報を表示できます。今すぐお試しください。
_keywords: angular calendar, angular calendar コンポーネント, angular UI コンポーネント, angular UI ライブラリ, ignite ui for angular
_license: MIT
_language: ja
---

# Angular Calendar (カレンダー) コンポーネントの概要

Angular Calendar は、アプリで日付と曜日を表示するために使用される UI コンポーネントです。さまざまな機能をサポートしているため、ユーザーは簡単にカレンダー機能を管理したり、カレンダーにイベントをドラッグして作成したり、希望の日付に移動したり、Angular カレンダーの月表示、週表示、または日表示でイベントをシングル クリックで表示したりできます。

<p class="highlight">

Ignite UI for Angular Calendar コンポーネントは、ネイティブ [Angular コンポーネント (英語)](https://angular.io/guide/architecture#components) であり、日付情報の表示、日付の有効化、または Angular カレンダー無効日付モードの適用を簡単かつ直感的に行う方法を提供します。ユーザーは、単一選択、複数選択、または範囲選択の 3 つの選択モードから選択できます。
</p>

## Angular Calendar の例

Ignite UI for Angular Calendar パッケージを使用して、次の Angular Calendar の例を作成しました。基本的なカレンダーがどのように見えるか、ユーザーが 1 つの日付を選択して強調表示する方法、特定の日付に前後に移動する方法を簡単に示します。

<div class="divider--half"></div>

<code-view style="height: 480px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-sample-5/" alt="Angular Calendar の例">
</code-view>


## Ignite UI for Angular Calendar を使用した作業の開始

Ignite UI for Angular Calendar コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxCalendarModule` をインポートします。

>[!NOTE]
> [**IgxCalendarComponent**]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) はタッチ操作の [`BrowserAnimationsModule`](https://angular.io/api/platform-browser/animations/BrowserAnimationsModule) と [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) (**オプション**) に依存関係があり、これらも AppModule に追加する必要があります。

```typescript
// app.module.ts
...
import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCalendarModule } from 'igniteui-angular';
// import { IgxCalendarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, HammerModule, IgxCalendarModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxCalendarComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_CALENDAR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/calendar/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_CALENDAR_DIRECTIVES } from 'igniteui-angular';
// import { IGX_CALENDAR_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-calendar></igx-calendar>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [BrowserAnimationsModule, HammerModule, IGX_CALENDAR_DIRECTIVES]
    /* or imports: [BrowserAnimationsModule, HammerModule, IgxCalendarComponent] */
})
export class HomeComponent {}
```

Ignite UI for Angular Calendar モジュールまたはディレクティブをインポートしたので、`igx-calendar` コンポーネントの使用を開始できます。

> [!NOTE]
> [`IgxCalendarComponent`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html) が日付のローカライズおよび書式設定のために [Intl Web API](https://developer.mozilla.org/ja-JP/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) を使用します。
対象プラットフォームがその API をサポートしない場合、[適切なポリフィル](https://github.com/andyearnshaw/Intl.js/)を使用してください。

## Angular Calendar の使用

### Angular 単一選択カレンダー

`IgxCalendarComponent` をインスタンス化するには、セレクター要素をテンプレートに追加します。単一選択カレンダー モードで現在の月を表示します。

```html
<!-- app.component.html -->
<!-- Single selection mode -->
<igx-calendar></igx-calendar>
```

### Angular 複数選択カレンダー

[`selection`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#selection) プロパティを使用してデフォルトのモードを簡単に変更できます。

```html
<!-- app.component.html -->
<!-- Multi selection mode -->
<igx-calendar selection="multi" [showWeekNumbers]="true"></igx-calendar>
```


<code-view style="height: 360px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-sample-1/" >
</code-view>


### Angular Calendar 範囲ピッカー

同じ方法に従って、範囲選択モードに切り替えることができます。

```html
<!-- app.component.html -->
<!-- Range selection mode -->
<igx-calendar selection="range"></igx-calendar>
```


<code-view style="height: 480px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-sample-8/" >
</code-view>


> [!NOTE]
> 選択が `multi` または `range` の場合、カレンダー ヘッダーは描画されません。

### ローカライズおよび書式設定

カレンダーにおいてローカライズおよび書式設定はとても重要な要素です。`IgxCalendarComponent` でこれらは以下のプロパティによって制御およびカスタマイズします - [`locale`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#locale)、[`formatOptions`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#formatOptions)、[`formatViews`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#formatViews)、[`weekStart`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#weekStart)。

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
すべてのプロパティ値が AppCоmponent ファイルに設定されます。

```typescript
// app.component.ts
@ViewChild('calendar', { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;

public formatOptions: any;
public formatViews: any;
public locales = ['EN', 'DE', 'FR', 'AR', 'ZH'];
public locale = 'EN';

public ngOnInit() {
    this.formatOptions = { day: '2-digit', month: 'long', weekday: 'long', year: 'numeric' };
    this.formatViews = { day: true, month: true, year: true };
}
```

すべて適切に設定できると、カスタマイズされた日付を持つカレンダーが表示され、ユーザーの場所に基づいてロケール表現が変更されます。以下は結果です。


<code-view style="height: 580px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-sample-2/" >
</code-view>


### Angular Calendar で日付を無効にする方法
このセクションは、[`disabledDates`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#disabledDates) 機能の使用について説明します。これには、異なる単一の日付または範囲を配列に追加し、`disabledDates` 記述子に渡すことができます。

[`DateRangeType`]({environment:angularApiUrl}/enums/daterangetype.html) は無効にする範囲を指定するために使用します。

現在の月の 3 日から 8 日の日付を無効にするサンプルを作成します。

```typescript
export class CalendarSample6Component {
    @ViewChild('calendar') public calendar: IgxCalendarComponent;
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


<code-view style="height: 480px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-sample-6/" >
</code-view>


### 特別な日付
[`specialDates`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#specialDates) 機能は、`disabledDates` とほとんど同じ構成を使用します。`disabled` と異なる点は `specialDates` を選択してフォーカスする機能です。

`igxCalendar` に `specialDates` を追加します。これを行うには、[`DateRangeType.Specific`]({environment:angularApiUrl}/enums/daterangetype.html#specific) タイプの [`DateRangeDescriptor`]({environment:angularApiUrl}/interfaces/daterangedescriptor.html) 項目を作成し、日付の配列を [`dateRange`]({environment:angularApiUrl}/interfaces/daterangedescriptor.html#dateRange) として渡します。

```typescript
export class CalendarSample7Component {
    @ViewChild('calendar', { static: true })
    public calendar: IgxCalendarComponent;
    @ViewChild('alert', { static: true })
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
    (selected)="selectPTOdays($event)">
</igx-calendar>
<igx-dialog #alert title="Request Time Off"
    leftButtonLabel="OK"
    (leftButtonSelect)="alert.close()">
</igx-dialog>
<button igxButton="contained" (click)="submitPTOdays($event)">Submit Request</button>
```

以下のデモでは、休暇要求オプションのカレンダーを示します。


<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-sample-7/" >
</code-view>


### 週番号

[`showWeekNumbers`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#showWeekNumbers) 入力を使用して、Calendar コンポーネント と DatePicker コンポーネントの両方の週番号を表示できるようになりました。

```html

<!-- app.component.html -->
<igx-calendar selection="multi" [showWeekNumbers]="true"></igx-calendar>
```
以下のデモは、週番号が有効になっているカレンダーを示しています:


<code-view style="height: 380px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-sample-1/" >
</code-view>


## カレンダー イベント
カレンダーが発するイベントを見てみましょう:
- [`selected`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#selected) - カレンダーで日付を選択すると発生されます。
- [`viewDateChanged`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#viewDateChanged) - 表示されている月/年が変更されるたびに発行されます。たとえば、`next` または `previous` の月に移動した後。
- [`activeViewChanged`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#activeViewChanged) - アクティブなビューが変更された後に発生します。たとえば、ユーザーがヘッダーの `month` または `year` セクションをクリックした後。

```html
<!-- app.component.html -->
<igx-calendar #calendar
    (selected)="onSelection($event)"
    (viewDateChanged)="viewDateChanged($event)"
    (activeViewChanged)="activeViewChanged($event)">
</igx-calendar>
```
[`selected`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#selected)イベントは、入力検証ロジックを構築するのに適しています。以下のコードを使用して、選択が 5 日を超えた場合にユーザーに警告し、選択をリセットします。

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

<code-view style="height: 420px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-sample-3/" >
</code-view>



## Angular Calendar ビュー
`IgxCalendarModule` によって提供される個別のビューがあり、別々に使用できます。
- Angular Calendar 日ビュー - [`igx-days-view`]({environment:angularApiUrl}/classes/igxdaysviewcomponent.html)


<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-days-view/" >
</code-view>


- Angular Calendar 月ビュー - [`igx-months-view`]({environment:angularApiUrl}/classes/igxmonthsviewcomponent.html)


<code-view style="height: 290px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-months-view/" >
</code-view>


- Angular Calendar 年ビュー - [`igx-years-view`]({environment:angularApiUrl}/classes/igxyearsviewcomponent.html)


<code-view style="height: 320px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-years-view/" >
</code-view>


## キーボード ナビゲーション
Tab キーを使用してページを移動する場合、*igxCalendarComponent* が [W3 アクセシビリティ推奨事項](https://www.w3.org/TR/wai-aria-practices/#layoutGrid)に基づいて以下のタブストップを導入することに注意してください。
- [前月] ボタン
- [月の選択] ボタン
- [年の選択] ボタン
- [翌月] ボタン
- 日ビューの選択した日付、現在の日付、最初のフォーカス可能な (無効ではない) 日付

複数の選択された日付を含む Angular Calendar では、最初の日付のみがタブ位置として導入されます。たとえば、Angular Calendar の複数選択が有効で、日付を選択した場合: **2020 年 10 月 13 日**、**2020 年 10 月 17 日**および **2020 年 10 月 21 日**のみは、タブ ナビゲーション中にアクセスできます。Angular Calendar 範囲ピッカーでは、選択した範囲の最初の日付のみがページ タブ シーケンスの一部になります。

>[!NOTE]
> *V10.2.0* からの動作変更- 日ビューの Tab キー ナビゲーションは使用できなくなりました。日付ビューの日付間を移動するには、矢印キーを使用します。

`igxCalendar` コンポーネントにフォーカスがある場合、以下を使用してナビゲーションできます。
- <kbd>PageUp</kbd> キーは前の月に移動します。
- <kbd>PageDown</kbd> キーは次の月に移動します。
- <kbd>Shift</kbd> + <kbd>PageUp</kbd> キーは前の年に移動します。
- <kbd>Shift</kbd> + <kbd>PageDown</kbd>> キーは次の年に移動します。
- <kbd>Home</kbd> キーは現在の年の最初の月をフォーカスします。
- <kbd>End</kbd> キーは現在の月の最後の日または最後の月をフォーカスします。

`前`または`次`の月のボタン(サブヘッダー内)にフォーカスがある場合、以下を使用します。
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
- <kbd>上矢印</kbd> キーと <kbd>下矢印</kbd> キーで年を移動します。
- <kbd>Enter</kbd> キーは、現在フォーカスされている年を選択してビューと閉じます。

>[!NOTE]
 >バージョン 8.2.0 に続いて、キーボード ナビゲーションは現在の月以外の日をフォーカスせず、ビューの月を変更します。

## マルチビュー カレンダー
マルチ ビューカレンダーは、3 種類すべての選択をサポートしています。[`monthsViewNumber`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#monthsViewNumber) 入力を使用して、表示される月の数を設定します。これは、フレックス コンテナーに水平に表示されます。設定される最大値に制限はありません。マルチ ビューカレンダーを使用する場合、現在の月に属さない日を非表示にできます。非表示にするには、[`hideOutsideDays`]({environment:angularApiUrl}/classes/igxcalendarcomponent.html#hideOutsideDays)プ ロパティを使用します。キーボード ナビゲーションは、表示されている次/前の月へ移動します。


<code-view style="height: 500px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/multiview-calendar/" >
</code-view>

## カレンダーの方向
方向の設定により、ユーザーはカレンダーのヘッダーとビューの表示方法を選択できます。

#### ヘッダーの方向オプション

ヘッダーの方向を変更して、カレンダーのヘッダーを水平 (カレンダー ビューの上) または垂直 (カレンダー ビューの横) に配置できます。
これを行うには、`[headerOrientation]` プロパティを使用し、それぞれ `horizo​​ntal` または `vertical` に設定します。

#### ビューの方向オプション

ビューの方向を設定して、カレンダー内の月を水平 (並べて) または垂直 (上下に) に配置できます。
これを行うには、`[orientation]` プロパティを使用して、それぞれ `horizo​​ntal` または `vertical` に設定します。

>[!NOTE]
> そのプロパティが機能していることを確認するには、少なくとも 2 か月分のビュー カレンダーが必要です。

```html
<igx-calendar [monthsViewNumber]="2" [headerOrientation]="headerOrientation" [orientation]="orientation"></igx-calendar>
```

```typescript
const orientations = ["horizontal", "vertical"] as const;
type Orientation = (typeof orientations)[number];

export class CalendarSample9Component {
    protected orientations = Array.from(orientations, (o) => o);
    protected headerOrientation: Orientation = "horizontal";
    protected orientation: Orientation = "horizontal";

    protected setHeaderOrientation(orientation: Orientation) {
        this.headerOrientation = orientation;
    }

    protected setOrientation(orientation: Orientation) {
        this.orientation = orientation;
    }
}
```

<code-view style="height: 750px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-sample-9/" alt="Angular Calendar の方向の例">
</code-view>

## スタイル設定

### Calendar テーマのプロパティ マップ

`$header-background` プロパティと `$content-background` プロパティを変更すると、関連するすべての theme プロパティが自動的に調整され、カレンダー コンポーネントのスタイルが一貫して設定されます。影響を受ける theme プロパティの詳細な概要については、以下の表を参照してください。

<div class="theme-switcher-wrapper">
<!-- Theme Switcher Radios and Labels -->
<input type="radio" name="theme" id="material" checked>
<label for="material" class="switch-label">Material</label>
<input type="radio" name="theme" id="fluent">
<label for="fluent" class="switch-label">Fluent</label>
<input type="radio" name="theme" id="bootstrap">
<label for="bootstrap" class="switch-label">Bootstrap</label>
<input type="radio" name="theme" id="indigo">
<label for="indigo" class="switch-label">Indigo</label>

<div class="tables">
    <!-- Material Theme Table -->
    <div class="theme-table material">
        <table class="collapsible-table">
            <thead>
                <tr>
                    <th>プライマリ プロパティ</th>
                    <th>依存プロパティ</th>
                    <th>説明</th>
                </tr>
            </thead>
            <tbody class="group">
                <tr class="primary">
                    <td><details><summary><strong>$header-background</strong></summary></details></td>
                    <td>$header-foreground</td>
                    <td>カレンダー ヘッダーのテキストの色</td>
                </tr>
                <tr class="dependent"><td></td><td>$picker-hover-foreground</td><td>ピッカーのホバー前景</td></tr>
                <tr class="dependent"><td></td><td>$picker-focus-foreground</td><td>ピッカーのフォーカス前景</td></tr>
                <tr class="dependent"><td></td><td>$navigation-hover-color</td><td>ナビゲーションのホバー色</td></tr>
                <tr class="dependent"><td></td><td>$navigation-focus-color</td><td>ナビゲーションのフォーカス色</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-background</td><td>選択された日付の背景</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-current-background</td><td>選択された日付の背景</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-foreground</td><td>選択した日付の前景</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-current-foreground</td><td>選択した現在の日付の前景</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-current-border-color</td><td>選択している現在の日付の境界線の色</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-special-border-color</td><td>選択している現在の特別な日付の境界線の色</td></tr>
                <tr class="dependent"><td></td><td>$ym-selected-background</td><td>選択した年/月の背景</td></tr>
                <tr class="dependent"><td></td><td>$ym-selected-hover-background</td><td>選択した日付の年/月のホバー背景</td></tr>
                <tr class="dependent"><td></td><td>$ym-selected-current-background</td><td>現在選択されている年/月の背景</td></tr>
                <tr class="dependent"><td></td><td>$ym-selected-current-hover-background</td><td>現在選択されている年/月のホバー背景</td></tr>
                <tr class="dependent"><td></td><td>$ym-selected-foreground</td><td>選択した年/月の前景</td></tr>
                <tr class="dependent"><td></td><td>$ym-selected-hover-foreground</td><td>選択した年/月のホバー前景</td></tr>
                <tr class="dependent"><td></td><td>$ym-selected-current-foreground</td><td>現在選択されている年/月の前景</td></tr>
                <tr class="dependent"><td></td><td>$ym-selected-current-hover-foreground</td><td>現在選択されている年/月のホバー前景</td></tr>
            </tbody>
            <tbody class="group">
                <tr class="primary">
                    <td><details><summary><strong>$content-background</strong></summary></details></td>
                    <td>$content-foreground</td>
                    <td>カレンダー コンテンツ領域内のテキストとアイコンの色</td>
                </tr>
                <tr class="dependent"><td></td><td>$weekend-color</td><td>週末の色</td></tr>
                <tr class="dependent"><td></td><td>$inactive-color</td><td>有効範囲外の日付の色</td></tr>
                <tr class="dependent"><td></td><td>$weekday-color</td><td>曜日ラベルの色</td></tr>
                <tr class="dependent"><td></td><td>$picker-background</td><td>ピッカーの背景</td></tr>
                <tr class="dependent"><td></td><td>$date-hover-background</td><td>ホバー時の日付の背景</td></tr>
                <tr class="dependent"><td></td><td>$date-hover-foreground</td><td>ホバー時の日付の前景</td></tr>
                <tr class="dependent"><td></td><td>$date-focus-background</td><td>フォーカス時の日付の背景</td></tr>
                <tr class="dependent"><td></td><td>$date-focus-foreground</td><td>フォーカス時の日付の前景</td></tr>
                <tr class="dependent"><td></td><td>$date-current-background</td><td>現在の日付の背景</td></tr>
                <tr class="dependent"><td></td><td>$date-current-foreground</td><td>現在の日付の前景</td></tr>
                <tr class="dependent"><td></td><td>$date-current-border-color</td><td>現在の日付の境界線の色</td></tr>
                <tr class="dependent"><td></td><td>$ym-current-background</td><td>現在の年/月の背景</td></tr>
                <tr class="dependent"><td></td><td>$ym-current-hover-background</td><td>現在の年/月のホバー時の背景</td></tr>
                <tr class="dependent"><td></td><td>$ym-current-foreground</td><td>現在の年/月の前景</td></tr>
                <tr class="dependent"><td></td><td>$ym-current-hover-foreground</td><td>現在の年/月のホバー時の前景</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-range-background</td><td>選択範囲の背景</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-range-foreground</td><td>選択した日付範囲の前景</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-current-range-background</td><td>現在選択されている日付範囲の背景</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-current-range-hover-background</td><td>現在選択されている日付範囲のホバー時の背景</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-current-range-focus-background</td><td>現在選択されている日付範囲のフォーカス時の背景</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-current-range-foreground</td><td>現在選択されている日付範囲の前景</td></tr>
                <tr class="dependent"><td></td><td>$date-special-foreground</td><td>特別な日付の前景</td></tr>
                <tr class="dependent"><td></td><td>$date-special-border-color</td><td>特別な日付の境界線の色</td></tr>
                <tr class="dependent"><td></td><td>$date-special-hover-border-color</td><td>特別な日付のホバー境界線の色</td></tr>
                <tr class="dependent"><td></td><td>$date-special-focus-foreground</td><td>特別な日付のフォーカス背景</td></tr>
                <tr class="dependent"><td></td><td>$date-special-range-foreground</td><td>特別な日付範囲の前景</td></tr>
                <tr class="dependent"><td></td><td>$date-special-range-border-color</td><td>特別な日付範囲の境界線の色</td></tr>
                <tr class="dependent"><td></td><td>$date-special-range-hover-background</td><td>特別な日付範囲のホバー背景</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-special-border-color</td><td>選択している現在の特別な日付の境界線の色</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-special-hover-border-color</td><td>ホバー時の特別な日付 (選択) の境界線の色</td></tr>
                <tr class="dependent"><td></td><td>$date-selected-special-focus-border-color</td><td>フォーカス時の特別な日付 (選択) の境界線の色</td></tr>
                <tr class="dependent"><td></td><td>$date-disabled-foreground</td><td>無効な日付の前景</td></tr>
                <tr class="dependent"><td></td><td>$date-disabled-range-foreground</td><td>無効な範囲の前景</td></tr>
            </tbody>
            <tbody class="group">
                <tr class="primary">
                    <td><details><summary><strong>$date-border-radius</strong></summary></details></td>
                    <td>$date-range-border-radius</td>
                    <td>日付範囲の境界の半径を制御します</td>
                </tr>
                <tr class="dependent"><td></td><td>$date-current-border-radius</td><td>現在の日付の境界線の半径を制御します</td></tr>
                <tr class="dependent"><td></td><td>$date-special-border-radius</td><td>特別な日付の境界線の半径を制御します</td></tr>
                <tr class="dependent"><td></td><td>$date-border-radius</td><td>指定されておらず、<code>$date-range-border-radius</code> が設定されている場合は、<code>$date-range-border-radius</code> の値が使用されます</td></tr>
            </tbody>
        </div>
        <!-- Fluent Theme Table -->
        <div class="theme-table fluent">
            <table class="collapsible-table">
                <thead>
                    <tr>
                        <th>プライマリ プロパティ</th>
                        <th>依存プロパティ</th>
                        <th>説明</th>
                    </tr>
                </thead>
                <tbody class="group">
                    <tr class="primary">
                        <td><details><summary><strong>$header-background</strong></summary></details></td>
                        <td>$header-foreground</td>
                        <td>カレンダー ヘッダーのテキストの色</td>
                    </tr>
                    <tr class="dependent"><td></td><td>$picker-hover-foreground</td><td>ピッカーのホバー前景</td></tr>
                    <tr class="dependent"><td></td><td>$picker-focus-foreground</td><td>ピッカーのフォーカス前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-background</td><td>現在の日付の背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-hover-foreground</td><td>ホバー時の現在の日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-focus-foreground</td><td>フォーカス時の現在の日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-foreground</td><td>現在選択されている日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-hover-foreground</td><td>ホバー時の現在選択されている日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-focus-foreground</td><td>フォーカス時の現在選択されている日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-special-border-color</td><td>特別な日付の境界線の色</td></tr>
                    <tr class="dependent"><td></td><td>$date-special-hover-foreground</td><td>特別な日付のホバー背景</td></tr>
                </tbody>
                <tbody class="group">
                    <tr class="primary">
                        <td><details><summary><strong>$content-background</strong></summary></details></td>
                        <td>$content-foreground</td>
                        <td>カレンダー コンテンツ領域内のテキストとアイコンの色</td>
                    </tr>
                    <tr class="dependent"><td></td><td>$weekend-color</td><td>週末の色</td></tr>
                    <tr class="dependent"><td></td><td>$inactive-color</td><td>有効範囲外の日付の色</td></tr>
                    <tr class="dependent"><td></td><td>$weekday-color</td><td>曜日ラベルの色</td></tr>
                    <tr class="dependent"><td></td><td>$picker-background</td><td>ピッカーの背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-hover-background</td><td>ホバー時の日付の背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-hover-foreground</td><td>ホバー時の日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-focus-background</td><td>フォーカス時の日付の背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-focus-foreground</td><td>フォーカス時の日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-background</td><td>選択された日付の背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-hover-background</td><td>選択した日付のホバー背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-focus-background</td><td>選択した日付のフォーカス背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-foreground</td><td>選択した日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-hover-foreground</td><td>選択した日付のホバー前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-focus-foreground</td><td>選択した日付のフォーカス前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-range-background</td><td>選択した日付範囲の背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-range-foreground</td><td>選択した日付範囲の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-disabled-foreground</td><td>無効な日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-disabled-range-foreground</td><td>無効な範囲の前景</td></tr>
                </tbody>
                <tbody class="group">
                    <tr class="primary">
                        <td><details><summary><strong>$date-border-radius</strong></summary></details></td>
                        <td>$date-range-border-radius</td>
                        <td>日付範囲の境界の半径を制御します</td>
                    </tr>
                    <tr class="dependent"><td></td><td>$date-current-border-radius</td><td>現在の日付の境界線の半径を制御します</td></tr>
                    <tr class="dependent"><td></td><td>$date-special-border-radius</td><td>特別な日付の境界線の半径を制御します</td></tr>
                    <tr class="dependent"><td></td><td>$date-border-radius</td><td>指定されておらず、<code>$date-range-border-radius</code> が設定されている場合は、<code>$date-range-border-radius</code> の値が使用されます</td></tr>
                </tbody>
            </table>
        </div>
        <!-- Bootstrap Theme Table -->
        <div class="theme-table bootstrap">
            <table class="collapsible-table">
                <thead>
                    <tr>
                        <th>プライマリ プロパティ</th>
                        <th>依存プロパティ</th>
                        <th>説明</th>
                    </tr>
                </thead>
                <tbody class="group">
                    <tr class="primary">
                        <td><details><summary><strong>$header-background</strong></summary></details></td>
                        <td>$header-foreground</td>
                        <td>カレンダー ヘッダーのテキストの色</td>
                    </tr>
                    <tr class="dependent"><td></td><td>$picker-background</td><td>ピッカーの背景</td></tr>
                    <tr class="dependent"><td></td><td>$picker-hover-foreground</td><td>ピッカーのホバー前景</td></tr>
                    <tr class="dependent"><td></td><td>$weekday-color</td><td>曜日ラベルの色</td></tr>
                    <tr class="dependent"><td></td><td>$picker-focus-foreground</td><td>ピッカーのフォーカス前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-special-border-color</td><td>特別な日付の境界線の色</td></tr>
                    <tr class="dependent"><td></td><td>$date-special-focus-foreground</td><td>特別な日付のフォーカス背景</td></tr>
                </tbody>
                <tbody class="group">
                    <tr class="primary">
                        <td><details><summary><strong>$content-background</strong></summary></details></td>
                        <td>$content-foreground</td>
                        <td>カレンダー コンテンツ領域内のテキストとアイコンの色</td>
                    </tr>
                    <tr class="dependent"><td></td><td>$weekend-color</td><td>週末の色</td></tr>
                    <tr class="dependent"><td></td><td>$inactive-color</td><td>有効範囲外の日付の色</td></tr>
                    <tr class="dependent"><td></td><td>$weekday-color</td><td>曜日ラベルの色</td></tr>
                    <tr class="dependent"><td></td><td>$date-hover-background</td><td>ホバー時の日付の背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-hover-foreground</td><td>ホバー時の日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-focus-background</td><td>フォーカス時の日付の背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-focus-foreground</td><td>フォーカス時の日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-background</td><td>現在の日付の背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-foreground</td><td>現在の日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-border-color</td><td>現在の日付の境界線の色</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-background</td><td>選択された日付の背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-background</td><td>現在選択されている日付の背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-foreground</td><td>選択した日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-foreground</td><td>現在選択されている日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-special-border-color</td><td>選択している現在の特別な日付の境界線の色</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-special-hover-border-color</td><td>ホバー時の特別な日付 (選択) の境界線の色</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-special-focus-border-color</td><td>フォーカス時の特別な日付 (選択) の境界線の色</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-range-background</td><td>選択した日付範囲の背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-range-foreground</td><td>選択した日付範囲の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-disabled-foreground</td><td>無効な日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-disabled-range-foreground</td><td>無効な範囲の前景</td></tr>
                </tbody>
                <tbody class="group">
                    <tr class="primary">
                        <td><details><summary><strong>$date-border-radius</strong></summary></details></td>
                        <td>$date-range-border-radius</td>
                        <td>日付範囲の境界の半径を制御します</td>
                    </tr>
                    <tr class="dependent"><td></td><td>$date-current-border-radius</td><td>現在の日付の境界線の半径を制御します</td></tr>
                    <tr class="dependent"><td></td><td>$date-special-border-radius</td><td>特別な日付の境界線の半径を制御します</td></tr>
                    <tr class="dependent"><td></td><td>$date-border-radius</td><td>指定されておらず、<code>$date-range-border-radius</code> が設定されている場合は、<code>$date-range-border-radius</code> の値が使用されます</td></tr>
                </tbody>
            </table>
        </div>
        <!-- Indigo Theme Table -->
        <div class="theme-table indigo">
            <table class="collapsible-table">
                <thead>
                    <tr>
                        <th>プライマリ プロパティ</th>
                        <th>依存プロパティ</th>
                        <th>説明</th>
                    </tr>
                </thead>
                <tbody class="group">
                    <tr class="primary">
                        <td><details><summary><strong>$header-background</strong></summary></details></td>
                        <td>$header-foreground</td>
                        <td>カレンダー ヘッダーのテキストの色</td>
                    </tr>
                    <tr class="dependent"><td></td><td>$picker-background</td><td>ピッカーの背景</td></tr>
                    <tr class="dependent"><td></td><td>$picker-hover-foreground</td><td>ピッカーのホバー前景</td></tr>
                    <tr class="dependent"><td></td><td>$picker-focus-foreground</td><td>ピッカーのフォーカス前景</td></tr>
                    <tr class="dependent"><td></td><td>$navigation-hover-color</td><td>ナビゲーションのホバー色</td></tr>
                    <tr class="dependent"><td></td><td>$navigation-focus-color</td><td>ナビゲーションのフォーカス色</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-background</td><td>現在の日付の背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-border-color</td><td>現在の日付の境界線の色</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-hover-background</td><td>現在の日付にホバーした時の背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-hover-border-color</td><td>現在の日付にホバーした時の境界線の色</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-focus-background</td><td>現在の日付のフォーカス時の背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-focus-border-color</td><td>現在の日付のフォーカス時の境界線の色</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-foreground</td><td>現在の日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-hover-foreground</td><td>現在の日付にホバーした時の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-current-focus-foreground</td><td>現在の日付のフォーカス時の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-border-color</td><td>現在選択されている日付の境界線の色</td></tr>
                </tbody>
                <tbody class="group">
                    <tr class="primary">
                        <td><details><summary><strong>$content-background</strong></summary></details></td>
                        <td>$content-foreground</td>
                        <td>カレンダー コンテンツ領域内のテキストとアイコンの色</td>
                    </tr>
                    <tr class="dependent"><td></td><td>$weekend-color</td><td>週末の色</td></tr>
                    <tr class="dependent"><td></td><td>$inactive-color</td><td>有効範囲外の日付の色</td></tr>
                    <tr class="dependent"><td></td><td>$weekday-color</td><td>曜日ラベルの色</td></tr>
                    <tr class="dependent"><td></td><td>$date-hover-background</td><td>ホバー時の日付の背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-hover-foreground</td><td>ホバー時の日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-focus-background</td><td>フォーカス時の日付の背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-focus-foreground</td><td>フォーカス時の日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-background</td><td>選択された日付の背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-background</td><td>現在選択されている日付の背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-foreground</td><td>選択した日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-foreground</td><td>現在選択されている日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-border-color</td><td>現在選択されている日付の境界線の色</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-range-background</td><td>選択した日付範囲の背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-range-foreground</td><td>選択した日付範囲の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-range-background</td><td>選択した範囲内の現在の日付の背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-range-hover-background</td><td>ホバー時の選択した範囲内の日付の背景</td></tr>
                    <tr class="dependent"><td></td><td>$date-selected-current-range-foreground</td><td>選択した範囲内の現在の日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-disabled-foreground</td><td>無効な日付の前景</td></tr>
                    <tr class="dependent"><td></td><td>$date-disabled-range-foreground</td><td>無効な範囲の前景</td></tr>
                </tbody>
                <tbody class="group">
                    <tr class="primary">
                        <td><details><summary><strong>$date-border-radius</strong></summary></details></td>
                        <td>$date-range-border-radius</td>
                        <td>日付範囲の境界の半径を制御します</td>
                    </tr>
                    <tr class="dependent"><td></td><td>$date-current-border-radius</td><td>現在の日付の境界線の半径を制御します</td></tr>
                    <tr class="dependent"><td></td><td>$date-special-border-radius</td><td>特別な日付の境界線の半径を制御します</td></tr>
                    <tr class="dependent"><td></td><td>$date-border-radius</td><td>指定されておらず、<code>$date-range-border-radius</code> が設定されている場合は、<code>$date-range-border-radius</code> の値が使用されます</td></tr>
                </tbody>
            </table>
        </div>
    </div>
</div><!-- .theme-switcher-wrapper -->

カレンダーのスタイル設定を開始するには、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最もシンプルな方法として、[`calendar-theme`]({environment:sassApiUrl}/themes#function-calendar-theme) を拡張し、`$header-background` と `$content-background` のみを指定して新しいテーマを作成します。これにより、インタラクション状態に応じた色やコントラストのある前景の色が自動的に算出されます。必要に応じて任意のテーマ パラメーターをオーバーライドすることも可能です。

```scss
$custom-calendar-theme: calendar-theme(
  $header-background: #ecaa53,
  $content-background: #011627,
);
```

最後に calendar のカスタム テーマを設定します。

```scss
 @include css-vars($custom-calendar-theme);
```

以下のサンプルでは、カスタマイズした CSS 変数を使用したカレンダー コンポーネントが、[`SAP UI5`](https://ui5.sap.com/#/entity/sap.ui.unified.Calendar/sample/sap.ui.unified.sample.CalendarSingleDaySelection) デザイン システムのカレンダーに視覚的に似たデザインを実現している様子を確認できます。 

<code-view style="height:350px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-styling-sample/" >
</code-view>

### Tailwind によるスタイル設定

カスタム Tailwind ユーティリティ クラスを使用して `calendar` をスタイル設定できます。まず [Tailwind を設定して](themes/misc/tailwind-classes.md)ください。

グローバル スタイルシートに Tailwind をインポートした上で、以下のように必要なテーマ ユーティリティを適用します:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

ユーティリティ ファイルには、`light` テーマと `dark` テーマの両方のバリエーションが含まれています。
- `light-*` クラスはライト テーマ用です。
- `dark-*` クラスはダーク テーマ用です。
- プレフィックスの後にコンポーネント名を追加します (例: `light-calendar`、`dark-calendar`)。

これらのクラスを適用すると、動的なテーマの計算が可能になります。そこから、`任意のプロパティ`を使用して、生成された CSS 変数をオーバーライドできます。コロンの後に、有効な CSS カラー形式 (HEX、CSS 変数、RGB など) を指定します。

プロパティの完全なリストは、[calendar-theme]({environment:sassApiUrl}/themes#function-calendar-theme) で確認できます。構文は次のとおりです:

```html
<igx-calendar
class="!light-calendar
![--header-background:#4F6A5A]
![--content-background:#A3C7B2]"
[weekStart]="1">
</igx-calendar>
```

>[!NOTE]
>ユーティリティ クラスが優先されるようにするには、感嘆符 (`!`) が必要です。Tailwind はスタイルをレイヤーに適用しますが、これらのスタイルを重要としてマークしないと、コンポーネントのデフォルトのテーマによってオーバーライドしてしまいます。

最終的に、calendar は次のようになります:

<div class="sample-container loading" style="height:500px">
    <iframe id="calendar-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/scheduling/calendar-tailwind-styling-sample' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## API リファレンス
<div class="divider--half"></div>

* [IgxCalendarComponent]({environment:angularApiUrl}/classes/igxcalendarcomponent.html)
* [IgxCalendarComponent スタイル]({environment:sassApiUrl}/themes#function-calendar-theme)
* [DateRangeType]({environment:angularApiUrl}/enums/daterangetype.html)
* [DateRangeDescriptor]({environment:angularApiUrl}/interfaces/daterangedescriptor.html)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
