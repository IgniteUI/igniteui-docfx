---
title: Time Picker コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Time Picker コンポーネントを使用すると、スピン ボタンがあるダイアログから時間を選択し、入力フィールドに値が設定されます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Time Picker コンポーネント, Angular Time Picker コントロール、Time Picker, Angular Time Picker
_language: ja
---

## Time Picker
<p class="highlight">Date Picker のデザインや機能と同様 Ignite UI for Angular Time Picker コンポーネントは、ダイアログのスピン ボタンで時間を選択して入力フィールドに値を設定します。</p>
<div class="divider"></div>

### Time Picker デモ
<div class="sample-container loading" style="height: 540px;">
    <iframe id="time-picker-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/timepicker-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="time-picker-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

### 使用方法

Ignite UI for Angular Time Picker を初期化する前に、**IgxTimePickerModule** を **app.module.ts** ファイルにインポートします。注: IgxTimePicker に **BrowserAnimationsModule** の依存関係があるため、AppModule にも追加する必要があります。

```typescript
// app.module.ts

...
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxTimePickerModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, IgxTimePickerModule],
    ...
})
export class AppModule {}
```
<div class="divider--half"></div>

#### デフォルト

タイムピッカーを追加するには、ミーティング コンポーネントのテンプレートで、以下のコードを追加するとデフォルトのタイムピッカーが作成されます。

```html
<!--meeting.component.html-->

<igx-time-picker ></igx-time-picker>
```

以下は結果です。

<div class="sample-container loading" style="height:540px">
    <iframe id="timepicker-sample-1-iframe" src='{environment:demosBaseUrl}/timepicker-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="timepicker-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

#### 値の設定

値を設定するには、value 入力を使用します。日付を追加します。

```typescript
public date: Date = new Date(Date.now());
```

テンプレートで `value` 入力を使用します。

```html
<igx-time-picker [value]="date"></igx-time-picker>
```

以下は結果です。

<div class="sample-container loading" style="height: 540px;">
    <iframe id="time-picker-sample-2" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/timepicker-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="time-picker-sample-2" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

TwoWay データ バインディングを使用するには、`ngModel` を以下のように使用します。

```html
<igx-time-picker [(ngModel)]="date"></igx-time-picker>
```

#### デルタおよびスピン モードの変更

項目のデルタを変更するには、`itemsDelta` を設定します。スピン モードを変更するには、`isSpinLoop` を使用します。

```html
<igx-time-picker [isSpinLoop]="false" [itemsDelta]="{hours:1, minutes:5}"></igx-time-picker>
```

以下は結果です。

<div class="sample-container loading" style="height: 540px;">
    <iframe id="time-picker-sample-3" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/timepicker-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="time-picker-sample-3" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

#### 検証

ユーザー入力を制限するために `minValue` および `maxValue` を設定できます。`onInvalidValueSelected` を処理して、無効な時間が選択された場合にユーザーを通知できます。注: 最小値/最大値が `format` と一致する必要があります。

```typescript
// app.module.ts

...
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxTimePickerModule, IgxToastModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, IgxTimePickerModule, IgxToastModule],
    ...
})
export class AppModule {}

// app.component.ts

public min: string = "09:00";
public max: string = "18:00";

@ViewChild("toast")
private toast: ElementRef;    

public show(toast) {
    toast.show();
}

public onValidationFailed(timepicker){
    this.show(this.toast);
}
```

```html
<igx-time-picker format="HH:mm" [vertical]="true" [minValue]="min" [maxValue]="max" (onValidationFailed)="onValidationFailed($event)"></igx-time-picker>
<igx-toast #toast message="Value must be between 09:00 and 18:00"></igx-toast>
```

以下は結果です。

<div class="sample-container loading" style="height: 540px;">
    <iframe id="time-picker-sample-4" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/timepicker-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="time-picker-sample-4" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

#### Templating Input Group

We have seen how to make use of the  API (properties, events, methods) so that we configure the time picker per our requirements and interact with it programatically. Now we want to go further and customize its input group look.

To do that we need to decorate the nested ng-template inside the time picker with IgxTimePickerTemplate directive. ng-template context exposes the following members: `openDialog` method can be used to open the time picker dialog; `displayValue` property contains the formatted value; `value` contains the real value. You could use those by declaring a variables in the ng-template element.

In the following example we modify the default label "Time" add a second icon as suffix. Bellow the input group we're using a label to display the real time picker value:

```html
<igx-time-picker [value]="date">
    <ng-template igxTimePickerTemplate let-openDialog="openDialog" let-value="value" let-displayTime="displayTime">
        <igx-input-group (click)="openDialog()">
            <igx-prefix>
                <igx-icon>home</igx-icon>
            </igx-prefix>
            <label igxLabel>Home Time </label>
            <input igxInput [value]="displayTime" />
            <igx-suffix>
                <igx-icon>access_alarm</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <label>{{value}}</label>
    </ng-template>
</igx-time-picker>
```
```typescript
public date: Date = new Date(Date.now());
```

And there we have it:
<div class="sample-container loading" style="height: 540px;">
    <iframe id="time-picker-sample-5" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/timepicker-sample-5" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="time-picker-sample-5" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### API まとめ

以下の表は便利な **igx-time-picker** コンポーネントの入力、出力、およびメソッドを示します。

#### 入力

以下の入力は **igx-time-picker** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `okButtonLabel` | string | [OK] ボタンをカスタム テキストで描画します。ボタンは選択した時間を保存し、timePicker 入力の値を設定します。デフォルトで `okButtonLabel` が `OK` に設定されます。|
| `cancelButtonLabel` | string | [キャンセル] ボタンをカスタム テキストで描画します。ボタンはダイアログを閉じます。デフォルトで `cancelButtonLabel` が `Cancel` に設定されます。 |
| `value` | Date | timePicker の値を取得または設定します。 |
| `disabled` | boolean | timePicker を無効にします。 |
| `itemsDelta`| object | 時および分項目が表示されるデルタを取得または設定します。デフォルトで `itemsDelta` が `{hours:1, minutes:1}` に設定されます。 注:実行時では設定できません。 |
| `minValue` | string | 最小値を取得または設定します。timePicker の `format` と一致する必要があります。 |
| `maxValue` | string | 最大値の設定を取得します。timePicker の `format` と一致する必要があります。 |
| `vertical` | boolean | timePicker の方向を取得または設定します。デフォルトで、`vertical` は `false` に設定されます。 |
| `isSpinLoop` | boolean | スピン動作を決定します。true に設定した場合、時および分のスピンが折り返されます。デフォルトで `isSpinLoop` が true に設定されます。注:実行時では設定できません。 |
| `format` | string | timePicker がフォーカスを持っていないときの時間書式を取得または設定します。デフォルトの `format` は `hh:mm tt` です。注:実行時では設定できません。<br>時間フラグのリスト。<br> `h` : 先行するゼロがない 12 時間形式の時フィールド。<br>`hh` : 先行するゼロがある 12 時間形式の時フィールド。<br>`H` : 先行するゼロがない 24 時間形式の時フィールド。<br>`HH` : 先行するゼロがある 24 時間形式の時フィールド。<br>`m` : 先行するゼロがない分フィールド。<br>`mm` : 先行するゼロがある分フィールド。<br>`tt` : AM/PM フィールドを表す 2 文字の文字列。 |

<div class="divider--half"></div>

#### 出力

以下の出力は **igx-time-picker** コンポーネントで利用できます。

| 名前 | 説明 |
| :--- | :--- |
| `onValueChanged` | 選択が実行されたときに発生します。イベントは選択済みの値を含みます。`{oldValue: Date, newValue: Date}` を返します。 |
| `onValidationFailed` | 無効な値が設定されているときに発生します。`{timePicker: any, currentValue: Date, setThroughUI: boolean}` を返します。 |
| `onOpen` | timePicker が開いているときに発生します。 |

#### メソッド

以下のメソッドは **igx-time-picker** コンポーネントで利用できます。

| 構文 | 戻り値の型 | 説明 |
| :--- | :--- | :--- |
| `okButtonClick()` | `boolean` | 現在の値が有効な場合、その値を選択し、ダイアログを閉じて true を返します。それ以外の場合は false を返します。 |
| `cancelButtonClick()` | `void` | 現在の値を選択しないでダイアログを閉じます。 |
| `hoursInView()` | `string[]` | 現在表示されている時の配列を返します。 |
| `minutesInView()` | `string[]` | 現在表示されている分の配列を返します。 |
| `ampmInView()` | `string[]` | 現在表示されている AM/PM の配列を返します。 |
| `scrollHourIntoView(item: string)` | `void` | 時項目を表示可能領域にスクロールします。 |
| `scrollMinuteIntoView(item: string)` | `void` | 分項目を表示可能領域にスクロールします。 |
| `scrollAmPmIntoView(item: string)` | `void` | AM/PM 項目を表示可能領域にスクロールします。 |


#### ゲッター

以下のゲッターは **igx-time-picker** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `displayTime` | `string` | 表示されている時間を返します。 |

### 追加のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)