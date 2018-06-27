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
    <iframe id="date-picker-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

> [!WARNING]
> Ignite UI for Angular コンポーネントをプロジェクトに追加する前に、すべての必要な依存関係を構成し、プロジェクトのセットアップが正しく完了したことを確認してください。「[**インストール**](https://jp.infragistics.com/products/ignite-ui-angular/getting-started#installation)」のトピックで手順を参照できます。

### 使用方法
`IgxDatePickerComponent` を使用してカレンダーから日付を選択できます。ピッカーは内部で `IgxCalendarComponent` をカレンダーとして使用します。Ignite UI for Angular Date Picker を初期化する前に、**IgxDatePickerModule** を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxDatePickerModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxDatePickerModule],
    ...
})
export class AppModule {}
```

テンプレートに日付ピッカーを追加します。

```html
<igx-datePicker></igx-datePicker>
```

以下は結果です。

<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-1" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-1" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

#### 日付の設定

`IgxDatePickerComponent` に日付を設定するには、`value` 入力を設定します。日付を追加します。

```typescript
public date: Date = new Date(Date.now());
```

テンプレートで `value` 入力を使用します。

```html
<igx-datePicker [value]="date"></igx-datePicker>
```

以下は結果です。

<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-2" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-2" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

TwoWay データ バインディングを使用するには、`ngModule` を以下のように使用します。

```html
<igx-datePicker [(ngModel)]="date"></igx-datePicker>
```

#### ボタンの追加

`IgxDatePickerComponent` は、カレンダーからの現在の日を選択する [今日] ボタンをサポートします。[キャンセル] ボタンも有効にできます。テンプレートでボタンを有効にするには、以下のコードを使用します。

```html
<igx-datePicker cancelButtonLabel="cancel" todayButtonLabel="today" [(ngModel)]="date"></igx-datePicker>
```

ボタンが表示されるサンプル:

<div class="sample-container loading" style="height: 580px;">
    <iframe id="date-picker-sample-3" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-3" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

#### カスタム書式設定

デフォルトで日付は設定した `locale` に基づいて書式設定され、カスタム フォーマッタも使用できます。フォーマッタ関数の追加:

```typescript
public date: Date = new Date(Date.now());

private dayFormatter = new Intl.DateTimeFormat("en", { weekday: "long" });
private monthFormatter = new Intl.DateTimeFormat("en", { month: "long" });

public formatter = (date: Date) => {
  return `You selected ${this.dayFormatter.format(date)}, ${date.getDate()} ${this.monthFormatter.format(date)}, ${date.getFullYear()}`;
}
```

次に `IgxDatePickerComponent` の `formatter` 入力を使用します。

```html
<igx-datePicker [value]="date" [formatter]="formatter"></igx-datePicker>
```

書式設定した日付を表示するサンプル:

<div class="sample-container loading" style="height: 540px;">
    <iframe id="date-picker-sample-4" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-4" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### インターナショナリゼーション

`IgxDatePickerComponent` はロケールをサポートします。`locale` 入力を使用して設定できます。ヘッダー (`igxCalendarHeader`) およびサブヘッダー (`igxCalendarSubheader`) の `IgxCalendarComponent` テンプレートを使用してヘッダーおよびサブヘッダーの外観を設定できます。このテンプレートを使用する方法の詳細については、`IgxCalendarComponent` [ヘルプ](calendar.md)を参照してください。以下は日本ロケール定義を持つ日付ピッカーです。

```html
<igx-datePicker locale="ja-JP" [value]="date">
  <ng-template igxCalendarHeader let-format>
    {{ format.month.combined | titlecase }}{{format.day.combined }}{{ format.weekday.combined }}
  </ng-template>
  <ng-template igxCalendarSubheader let-format>
    <span class="date__el" (click)="format.yearView()">{{ format.year.combined }}</span>
    <span class="date__el" (click)="format.monthView()">{{ format.month.combined | titlecase }}</span>
  </ng-template>
</igx-datePicker>
```

> [!NOTE]
> Internet Explorer および Edge ブラウザーの場合、両方のブラウザーがこの機能を提供する Intl API を実装しないため、日付部分は空の文字列です。 ([formatToParts](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts) を参照)

このブラウザーをサポートするには、[ngIf](https://angular.io/api/common/NgIf#using-non-inlined-then-template) ディレクティブを使用する代わりのテンプレートを使用します。

```html
<!-- app.component.html-->
<igx-datePicker id="date-picker" locale="ja-JP" [value]="date" #component>
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
</igx-datePicker>
```

**ngIf** は、使用するテンプレートを制御するために **formatParts** 式の値を評価します。代わりの **#parseTemplate** テンプレートを参照します。{} にある式は評価された値を返す **getDatePart** メソッドを起動します。この場合、書式設定された日付部分 (年、曜日、月など) を返します。**getDatePart** に渡されたパラメーターは、書式設定が **IgxDatePickerComponent** の locale および format オプションに基づいて設定されるために必要です。

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
    <iframe id="date-picker-sample-5" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/datepicker-sample-5" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="date-picker-sample-5" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### API

#### 入力

<div class="divider--half"></div>

| 名前   |      型      |  説明 |
|:----------|:-------------:|:------|
| `value` | `Date` | 選択された日付を設定します。 |
| `todayButtonLabel` | `string` | [今日] ボタンをカスタム名で描画します。ボタンはカレンダーで今日の日付を選択し、datePicker フィールドに入力します。 |
| `cancelButtonLabel` | `string` | [キャンセル] ボタンをカスタム名で描画します。ボタンはカレンダーを閉じます。 |
| `formatter` | `function` | 選択した日付または渡した日付にカスタム書式を適用します。 |
| `isDisabled` | `boolean` | datePicker を無効にします。 |
| `weekStart`| `Number` または `WEEKDAYS` | 週の最初の曜日を設定します。 |
| `locale` | `string` | カレンダーで日付の書式および表示のためのロケールを設定します。有効な書式の詳細については、[このページ](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl)を参照してください。 |
| `formatOptions` | `Object` | 日付を書式設定するために使用される `locale` プロパティと渡される書式オプション。 |
| `formatViews` | `Object` | 日付を書式設定するために使用される `locale` プロパティと渡される書式ビュー。 |
| `label` | `string` | デフォルト テキスト ラベルを変更します。 |
| `labelVisibility` | `string ` | ラベルを表示または非表示にします。 |

#### 出力

<div class="divider--half"></div>

|     名前      | 戻り値の型   | 説明                                                                                                             |
| :-----------: | :----------- | :--------------------------------------------------------------------------------------------------------------- |
| `onSelection` | `Date`       | カレンダーで選択が実行されるときに発生します。イベントは、コンポーネントの選択タイプに基づいた選択値を含みます。 |
|   `onOpen`    | `datePicker` | datePicker カレンダーが開いているときに発生します。         |
| `onClose`  | `datePicker` | datePicker カレンダーが閉じているときに発生します。  |                                                     |

#### メソッド

<div class="divider--half"></div>

|     名前     | 引数         | 戻り値の型 | 説明                                                                                          |
| :----------: | :----------- | :--------- | :-------------------------------------------------------------------------------------------- |
| `selectDate` | `date: Date` | `void`     | カレンダーの選択を変更します。このメソッドの呼び出しは `onSelection` イベントを発生させます。 |

<div class="divider--half"></div>

### 追加のリソース
<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
