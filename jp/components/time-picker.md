---
title: Time Picker コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Time Picker コンポーネントを使用すると、スピン ボタンがあるダイアログから時間を選択し、入力フィールドに値が設定されます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Time Picker コンポーネント, Angular Time Picker コントロール、Time Picker, Angular Time Picker
_language: ja
---

# Time Picker
<p class="highlight">The time picker component allows users to input or select time portions from a dropdown/dialog with spinners, which is then mirrored in the input field. In dropdown mode, which is the default one, the input field is editable and users can also edit selected time.</p>
<div class="divider--half"></div>

## Angular Time Picker の例

<code-view style="height:540px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-dropdown" >
</code-view>

<div class="divider--half"></div>

## 使用方法
はじめに、**app.module.ts** ファイルに `IgxTimePickerModule` をインポートします。 

>[!NOTE]
>IgxTimePicker は、タッチ操作において、**BrowserAnimationsModule** と **HammerModule** に依存しています。これらも AppModule に追加する必要があります。

```typescript
// app.module.ts

...
import { HammerModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxTimePickerModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, HammerModule, IgxTimePickerModule],
    ...
})
export class AppModule {}
```
<div class="divider--half"></div>

### デフォルト

Time Picker の追加は、以下のコードを使用してください。

```html
<!--meeting.component.html-->
<igx-time-picker></igx-time-picker>
```

出力はデモと同じです。

<div class="divider--half"></div>

### バインディング
The time picker can be bound to either a Date object or time-only string value in `ISO 8601` format by setting the [`value`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#value) property or `ngModel`.

First create a time string in `ISO 8601` format:

```typescript
public time = '09:15:30';
```

Then use the  `ngModel` to create a two-way data-binding:

```html
<igx-time-picker [(ngModel)]="time"></igx-time-picker>
```

or set [`value`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#value) input in the template:

```html
<igx-time-picker [value]="time"></igx-time-picker>
```

To use it in a reactive form you need to set a `formControlName` on the picker
```html
<form [formGroup]="form">
    <igx-time-picker formControlName="timePicker"></igx-time-picker>
</form>
```

```typescript
export class SampleFormComponent {
    // ...
    public form: FormGroup;
    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            timePicker: ['', Validators.required]
        });
    }
}
```

### コンポーネントの投影
The time picker component allows projecting child components - the same as in the [`IgxInputGroupComponent`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html): [`igxLabel`](label-input.md), [`IgxHint`](input-group.md#hints), [`igxPrefix`](input-group.md#prefix--suffix), [`igxSuffix`](input-group.md#prefix--suffix), excluding [`IgxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html). 詳細については、[Label および Input](label-input.md) トピックを参照してください。

In the default configuration, a dropdown/dialog toggle icon is shown as a prefix. It can be changed or redefined using the [`IgxPickerToggleComponent`]({environment:angularApiUrl}/classes/igxpickertogglecomponent.html) component. 入力の開始位置または終了位置を定義する [`igxPrefix`](input-group.md#prefix--suffix) または [`igxSuffix`](input-group.md#prefix--suffix) で設定できます。 

In the following example we have added a custom label and hint and changed the default toggle icon position to be displayed as a suffix:

```html
<igx-time-picker [(ngModel)]="date" mode="dialog" [inputFormat]="'hh:mm'">
    <label igxLabel>Home Time </label>
    <igx-picker-toggle igxSuffix>
        <igx-icon>home</igx-icon>
    </igx-picker-toggle>
    <igx-hint>{{date.toLocaleString()}}</igx-hint>
</igx-time-picker>
```
```typescript
public date: Date = new Date();
```

以下はテンプレート化された Time Picker です。

<code-view style="height: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-5" >
</code-view>

## カスタム アクション ボタン
The [`IgxTimePickerComponent`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html) supports action button customization. To achieve that, wrap the buttons in `ng-template` marked with the `igxTimePickerActions` directive selector.

In the example below, custom action buttons are added for 'CANCEL', 'DONE' and 'NOW' actions.

```html
<!-- sample.component.html -->

<igx-time-picker #picker format="hh:mm" mode="dropdown">
    <ng-template igxTimePickerActions>
        <div class="container action-buttons">
            <button igxButton="flat" (click)="picker.cancelButtonClick()">cancel</button>
            <button igxButton="flat" (click)="picker.okButtonClick()">done</button>
            <button igxButton="flat" (click)="selectNow(picker)">now</button>
        </div>
    </ng-template>
</igx-time-picker>
```

```typescript
// sample.component.ts
...
public selectNow(timePicker: IgxTimePickerComponent) {
    timePicker.value = new Date();
    timePicker.close();
}
...
```

ドロップダウン、カスタム アクションと双方向バインディングをサポートする、再テンプレート化されたタイムピッカーです。

<code-view style="height: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-6" >
</code-view>

<div class="divider--half"></div>

### キーボード ナビゲーション
* Users can navigate the component's time portions via the keyboard <kbd>Up</kbd> and <kbd>Down</kbd> arrow keys or by scrolling in the input field and in the dropdown/dialog. Navigation in the input is possible regardless of the [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minvalue) or [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxvalue), while navigation in the dropdown/dialog will be restricted within the [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minvalue) and [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxvalue) range.
* The time picker dropdown can be opened either by toggle icon click, <kbd>Space</kbd> key or <kbd>Alt</kbd> + <kbd>Down</kbd> keys press. In dialog mode this can be done by input click.
* <kbd>Enter</kbd> key press or mouse click outside the dropdown/dialog applies the selection and closes the dropdown/dialog.
* Pressing the <kbd>Escape</kbd> key cancels the selection and closes the dropdown/dialog.
* When entered a new value while dropdown is closed, click outside of the time picker or press <kbd>Tab</kbd> to move the focus so that the value is accepted.

## コード例
### Dialog Mode
The default time picker mode is editable dropdown mode. To change the time picker mode to read-only dialog mode, set the [`mode`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#mode) input to [`dialog`]({environment:angularApiUrl}/enums/interactionmode.html#dialog):

```typescript
// timePickerDropdown.component.ts

import { InteractionMode } from 'igniteui-angular';
...
public mode = PickerInteractionMode.Dialog;
```

```html
<!--timePickerDropdown.component.html-->
<igx-time-picker [mode]="mode"></igx-time-picker>
```

or just change the [`mode`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#mode) in the time picker like this:

```html
<!--timePickerDropdown.component.html-->
<igx-time-picker mode="dialog"></igx-time-picker>
```

In dialog mode, the dialog header displays the currently selected time in the picker's [`input format`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#inputformat). You can change the header position by setting the [`headerOrientation`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#headerorientation) property.

<code-view style="height: 600px;"
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-1" alt="Angular Time Picker Example">
</code-view>

<div class="divider--half"></div>

When the [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minvalue) and [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxvalue) are set the dialog displays the time within that range only. See the [Min max value](#min-max-value) example below, for more details.

### 表示および入力形式
The time picker component supports different display and input formats.

The display format is the format of the value when in edit mode and can be one of the listed Angular [DatePipe](https://angular.io/api/common/DatePipe) formats. This allows it to support predefined format options, such as `shortTime` and `longTime`.

The input format is the format of the value when not in edit mode and the format, in which the time portions are displayed in the dropdown/dialog. The `inputFormat` property accepts a constructed format string using characters supported by the DatePipe, e.g. `hh:mm:ss`, but doesn't support predefined format options, such as `shortTime` and `longTime`. If the `inputFormat` property is not defined, it defaults to `hh:mm tt`.

```html
<igx-time-picker
[(ngModel)]="time"
[inputFormat]="`hh:mm:ss`"
[displayFormat]="`shortTime`">
</igx-time-picker>
```

### 増加および減少
The time picker exposes public [`increment`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#increment) and [`decrement`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#decrement) methods, which accept two optional parametars: the `DatePart` to be modified and the `delta` by which it will be changed. If not specified the `DatePart` defaults to `Hours` and the `delta` defaults to [`itemsDelta`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#itemsdelta).

You can find a sample that illustrates the use of both methods at [Date Time Editor Directive](date-time-editor.md#increment-and-decrement).

### フォームと検証
The time picker component supports all directives from the core FormsModule [NgModel](https://angular.io/api/forms/NgModel) and [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule) (FormControl, FormGroup, etc.). これには、[フォーム バリデーター](https://angular.io/api/forms/Validators)機能も含まれます。 In addition, the component's [min and max values](#min-and-max-values) also act as form validators.

The [Reactive Forms Integration](input-group-reactive-forms.md) sample demonstrates how to use the igxTimePicker in Reactive Forms.

#### 最小値と最大値
You can specify [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minvalue) and [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxvalue) to restrict the user input, in which case the dropdown/dialog will display the time within that range only. In dropdown mode however, it is still possible for the user to type in an invalid time. You can handle the [`validationFailed`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#validationfailed) event in order to notify the user if that happens. 

>[!NOTE]
>The min/max values should be a Date object or a time-only string in the `ISO 8601` format:

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

public time = '10:00:00';
public min = '09:15:30';
public max = '18:15:30';

@ViewChild("toast", { static: true })
private toast;

public onValidationFailed() {
    this.toast.open();
}
```

```html
<igx-time-picker
	[(ngModel)]="time"
    [itemsDelta]="{hours:2, minutes:5}"
    [inputFormat]="'hh:mm:ss tt'"
    [headerOrientation]="true"
    [minValue]="min"
    [maxValue]="max"
	(onValidationFailed)="onValidationFailed()">
	<label igxLabel>Meeting Start</label>
</igx-time-picker>

<igx-toast #toast message="Value must be between 09:15:30 AM and 06:15:30 PM"></igx-toast>

```

The dropdown displays values within the min/max range (09:15:30 AM~06:15:30 PM) based on the items delta. A toast is added to show a message when an invalid time has been typed in.

 >[!NOTE]
>The displayed values for each time portion in the dropdown/dialog are calculated based on the items delta always starting from zero. If the [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minvalue) and [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxvalue) does not match the items delta, the displayed values will start/end from the next/last possible value that matches the threshold.

以下は結果です。

<code-view style="height: 540px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-4" >
</code-view>

<div class="divider--half"></div>

## スタイル設定

Time Picker のスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

[`igx-time-picker-theme`]({environment:sassApiUrl}/index.html#function-igx-dialog-theme) を拡張する新しいテーマを作成し、Time Picker のスタイルを設定できるさまざまなパラメーターを受け取ります。

```scss
$my-time-picker-theme: igx-time-picker-theme(
  $text-color: #E4C8A5,
  $hover-text-color: #ECAA53,
  $selected-text-color: #ECAA53,
  $header-background: #ECAA53,
  $header-hour-text-color: #011627,
  $header-time-period-color: #011627,
  $background-color: #011627
);
```

>[!NOTE]
>Time Picker ウィンドウのコンテンツの一部として使用される追加コンポーネント ([`IgxButton`](button.md) など) をスタイルするには、それぞれのコンポーネントに固有の追加テーマを作成し、ダイアログ ウィンドウのスコープ内のみに配置する必要があります (残りのアプリケーションの影響を受けません)。

Time Picker ウィンドウは [`IgxOverlayService`](overlay.md) を使用するため、カスタム テーマがスタイルを設定する Time Picker ウィンドウに適用されるように、ダイアログ ウィンドウが表示されたときに DOM に配置される特定のアウトレットを提供します。

Time Picker内の項目は、コンポーネント `ホスト`の子孫**ではありません**。現在、`ドキュメント`本文の最後にあるデフォルトのオーバーレイ アウトレットに表示されています。これを変更するには、`overlaySettings` の [`outlet`]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet) プロパティを使用します。`outlet` は、オーバーレイ コンテナをレンダリングする場所を制御します。

以下でコンテナを配置する要素への参照を渡すことができます。

```html
<igx-time-picker #picker [overlaySettings]="{ outlet: element }">
</igx-time-picker>
```

```typescript
export class TimepickerStylingComponent {
    ...
    constructor(public element: ElementRef) {
    }
}
```

Time Picker の項目がコンポーネントのホスト**内**に適切にレンダリングされます。つまり、カスタム テーマが有効になります。

>[!NOTE]
>[`IgxOverlayService`](overlay.md) を使用して表示される要素にテーマを提供するためのさまざまなオプションの詳細については、[こちら](overlay.md#スタイル設定)をご覧ください。

### テーマを含む

<div class="divider"></div>

最後にコンポーネントのテーマを**含めます**。

`$legacy-support` が `true` に設定されている場合、**テーマ**を以下のように含めます。

```scss
 @include igx-time-picker($my-time-picker-theme);
```
>[!NOTE]
>コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
     ::ng-deep {
        @include igx-time-picker($my-time-picker-theme);
    }
}
```

<div class="divider"></div>

`$legacy-support` が `false` (デフォルト) に設定されている場合、**css 変数** を以下のように含めます。

```scss
@include igx-css-vars($my-time-picker-theme);
```

>[!NOTE]
>コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合においても、変数をオーバーライドするにはグローバル セレクターが必要なため、`:host` を使用する必要があります。

```scss
:host {
    @include igx-css-vars($my-time-picker-theme);
}
```

### デモ

<code-view style="height: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-styling" >
</code-view>

<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxTimePickerComponent]({environment:angularApiUrl}/classes/igxtimepickercomponent.html)
* [IgxTimePickerComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-time-picker-theme)
* [IgxOverlayService]({environment:angularApiUrl}/classes/igxoverlayservice.html)
* [IgxOverlay スタイル]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

## その他のリソース
* [Date Time Editor](date-time-editor.md)
* [Label および Input](label-input.md)
* [リアクティブ フォームの統合](input-group-reactive-forms.md)

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

