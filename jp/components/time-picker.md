---
title: Time Picker コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Time Picker コンポーネントを使用すると、スピン ボタンがあるダイアログから時間を選択し、入力フィールドに値が設定されます。今すぐお試しください。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Time Picker コンポーネント, Angular Time Picker コントロール、Time Picker, Angular Time Picker
_language: ja
---

# Angular Time Picker (タイム ピッカー) の概要
<p class="highlight">タイム ピッカー コンポーネントを使用すると、ドロップダウンまたはスピナーを備えたダイアログから `Date` オブジェクトの時間部分を入力または選択し、入力フィールドに値が設定されます。デフォルトのドロップダウン モードでは、入力フィールドは編集可能であり、ユーザーは選択した時間を編集することもできます。</p>

<div class="divider--half"></div>

<p>タイム ピッカー コンポーネントには、時計ボタンを表示するためのさまざまな組み込みテンプレートと、検証、カスタム時間形式などの機能があります。</p>

## Angular Time Picker の例
一般に、ユーザーは、テキスト入力を使用するか、Angular Time Picker ドロップダウンから時間値を選択することにより、優先時間を入力できます。以下の基本的な Angular Time Picker の例は、ユーザーがドロップダウンまたはキーボードを使用して値を簡単に入力する方法を示しています。

<code-view style="height:540px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-dropdown/" >
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Time Picker を使用した作業の開始

Ignite UI for Angular Time Picker コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxTimePickerModule` をインポートします。

>[!NOTE]
>IgxTimePicker は、タッチ操作において、**BrowserAnimationsModule** と **HammerModule** (オプション) に依存しています。これらも AppModule に追加する必要があります。

```typescript
// app.module.ts

...
import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxTimePickerModule } from 'igniteui-angular';
// import { IgxTimePickerModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., BrowserAnimationsModule, HammerModule, IgxTimePickerModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxTimePickerComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_TIME_PICKER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/time-picker/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { FormsModule } from '@angular/forms';
import { IGX_TIME_PICKER_DIRECTIVES } from 'igniteui-angular';
// import { IGX_TABS_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-time-picker [(ngModel)]="time"></igx-time-picker>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_TIME_PICKER_DIRECTIVES, FormsModule]
    /* or imports: [IgxTimePickerComponent, FormsModule] */
})
export class HomeComponent {
    public time: Date;
}
```

Ignite UI for Angular Time Picker モジュールまたはディレクティブをインポートしたので、`igx-time-picker` コンポーネントの使用を開始できます。

## Angular Time Picker の使用

### デフォルト

テンプレートにタイム ピッカーを追加するには、以下のコードを使用してください。

```html
<!--meeting.component.html-->
<igx-time-picker></igx-time-picker>
```

出力はデモと同じです。

<div class="divider--half"></div>

### バインディング
The Time Picker in Angular は、[`value`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#value) プロパティまたは `ngModel` を設定することにより、Date オブジェクトまたは `ISO 8601` 形式の時刻のみの文字列値のいずれかにバインドできます。

まず、`ISO 8601` 形式で時刻文字列を作成します。

```typescript
public time = '09:15:30';
```

次に、`ngModel` を使用して、双方向のデータ バインディングを作成します:

```html
<igx-time-picker [(ngModel)]="time"></igx-time-picker>
```

または、テンプレートに [`value`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#value) 入力を設定します:

```html
<igx-time-picker [value]="time"></igx-time-picker>
```

リアクティブ フォームで使用するには、ピッカーで `formControlName` を設定する必要があります。
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
Time Picker コンポーネントを使用すると、子コンポーネントを投影できます。これは [`IgxInputGroupComponent`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) と同じです: [`IgxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html) を除いて、[`igxLabel`](label-input.md)、[`IgxHint`](input-group.md#hint)、[`igxPrefix`](input-group.md#prefix-および-suffix)、[`igxSuffix`](input-group.md#prefix-および-suffix)。詳細については、[Label および Input](label-input.md) トピックを参照してください。

デフォルト設定では、ドロップダウン/ダイアログ トグル アイコンがプレフィックスとして表示されます。[`IgxPickerToggleComponent`]({environment:angularApiUrl}/classes/igxpickertogglecomponent.html) コンポーネントを使用して変更または再定義できます。入力の開始位置または終了位置を定義する [`igxPrefix`](input-group.md#prefix-および-suffix) または [`igxSuffix`](input-group.md#prefix-および-suffix) で設定できます。

次の例では、カスタム ラベルとヒントを追加し、サフィックスとして表示されるようにデフォルトのトグル アイコンの位置を変更しました。

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

テンプレート化された Ignite UI for Angular Time Picker は次のとおりです。

<code-view style="height: 600px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-5/" >
</code-view>

## カスタム動作ボタン
[`IgxTimePickerComponent`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html) は、アクション ボタンのカスタマイズをサポートしています。これを実現するには、[`igxPickerActions`]({environment:angularApiUrl}/classes/igxpickeractionsdirective.html) ディレクティブ セレクターでマークされた `ng-template` でボタンをラップします。

以下の例では、'CANCEL'、'DONE'、および 'NOW' アクションにカスタム動作ボタンが追加されています。

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

ドロップダウン、カスタム動作と双方向バインディングをサポートする、再テンプレート化されたタイムピッカーです。

<code-view style="height: 600px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-6/" >
</code-view>

<div class="divider--half"></div>

## トグル アイコンとクリア アイコンのカスタマイズ
[`IgxTimePickerComponent`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html) は [`IgxPickerToggleComponent`]({environment:angularApiUrl}/classes/igxpickertogglecomponent.html) と [`IgxPickerClearComponent`]({environment:angularApiUrl}/classes/igxpickerclearcomponent.html) で構成できます。これらを使用すると、独自のクリック ハンドラーを追加しなくても、トグル アイコンとクリア アイコンを変更できます。

```html
 <igx-time-picker>
    <label igxLabel>Select time</label>
    <igx-picker-toggle igxPrefix>
        <igx-icon>snooze</igx-icon>
    </igx-picker-toggle>
    <igx-picker-clear igxSuffix>
        <igx-icon>delete</igx-icon>
    </igx-picker-clear>
</igx-time-picker>
```

### キーボード ナビゲーション
* ユーザーは、キーボードの <kbd>Up</kbd> および <kbd>Down</kbd> 矢印キーを使用するか、入力フィールドとドロップダウン/ダイアログをスクロールして、コンポーネントの時間部分をナビゲートできます。[`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minValue) または [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxValue) に関係なく、入力でのナビゲーションが可能ですが、ドロップダウン/ダイアログでのナビゲーションは [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minValue) および [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxValue) の範囲内に制限されます。
* Time Picker のドロップダウンは、トグル アイコンをクリックするか、<kbd>Space</kbd> キーを押すか、<kbd>Alt</kbd> + <kbd>Down</kbd> キーを押すことで開くことができます。ダイアログ モードでは、これは入力クリックで実行できます。
* ドロップダウン/ダイアログの外側で <kbd>Enter</kbd> キーを押すかマウス クリックすると、選択が適用され、ドロップダウン/ダイアログが閉じます。
* <kbd>Escape</kbd> キーを押すと、選択がキャンセルされ、ドロップダウン/ダイアログが閉じます。
* ドロップダウンが閉じているときに新しい値を入力したら、Time Picker の外側をクリックするか、<kbd>Tab</kbd> を押してフォーカスを移動し、値が受け入れられるようにします。

## コード例
### ダイアログ モード
デフォルトの Time Picker モードは、編集可能なドロップダウン モードです。Time Picker モードを読み取り専用ダイアログ モードに変更するには、[`mode`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#mode) 入力を [`dialog`]({environment:angularApiUrl}/index.html#pickerinteractionmode) に設定します。

```typescript
// timePickerDropdown.component.ts

import { PickerInteractionMode } from 'igniteui-angular';
// import { PickerInteractionMode } from '@infragistics/igniteui-angular'; for licensed package
...
public mode = PickerInteractionMode.Dialog;
```

```html
<!--timePickerDropdown.component.html-->
<igx-time-picker [mode]="mode"></igx-time-picker>
```

または、タイムピッカーで [`mode`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#mode) を次のように変更します。

```html
<!--timePickerDropdown.component.html-->
<igx-time-picker mode="dialog"></igx-time-picker>
```

ダイアログ モードでは、ダイアログ ヘッダーに、現在選択されている時刻がピッカーの [`input format`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#inputformat) で表示されます。[`headerOrientation`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#headerOrientation) プロパティを設定することで、ヘッダーの位置を変更できます。

<code-view style="height: 600px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-1/" alt="Angular Time Picker の例">
</code-view>

<div class="divider--half"></div>

[`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minValue) と [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxValue) が設定されている場合、ダイアログにはその範囲内のみの時間が表示されます。詳細については、以下の[最小値と最大値](#最小値と最大値)の例を参照してください。

### 表示および入力形式
Time Picker コンポーネントは、さまざまな表示形式と入力形式をサポートしています。

表示形式は、編集モードでの値の形式であり、リストされている Angular [DatePipe](https://angular.io/api/common/DatePipe) 形式の 1 つにすることができます。これにより、`shortTime` や `longTime` などの事前定義されたフォーマット オプションをサポートできます。

入力形式は、編集モードでないときの値の形式と、時間部分がドロップダウン/ダイアログに表示される形式です。`inputFormat` プロパティは、DatePipe でサポートされている文字を使用して構築されたフォーマット文字列を受け入れます。`hh:mm:ss` ですが、`shortTime` や `longTime` などの事前定義されたフォーマット オプションはサポートしていません。`inputFormat` プロパティが定義されていない場合、デフォルトで `hh:mm tt` になります。
あるいは、[`inputFormat`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#inputFormat) プロパティが設定されていない場合、入力形式は [`displayFormat`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#displayFormat) から数値の日付と時刻の部分のみを含む形式として解析できる場合に推測されます。

```html
<igx-time-picker
    [(ngModel)]="time"
    [inputFormat]="`hh:mm:ss`"
    [displayFormat]="`shortTime`">
</igx-time-picker>
```
>[!NOTE]
> `IgxTimePicker` が IME 入力をサポートするようになりました。合成が終了すると、コントロールはワイド文字の数字を ASCII 文字に変換します。

### 増加および減少
Time Picker は、パブリックの [`increment`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#increment) メソッドと [`decrement`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#decrement) メソッドを公開します。それらは 2 つのオプションのパラメターを受け入れます: 変更される `DatePart` とそれが変更される `delta` です。指定しない場合、`DatePart` はデフォルトで `Hours` になり、`delta` はデフォルトで [`itemsDelta`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#itemsdelta) になります。

[Date Time Editor ディレクティブ](date-time-editor.md#増加および減少)で、両方の方法の使用法を示すサンプルを見つけることができます。

### フォームと検証
Time Picker コンポーネントは、コア FormsModule [NgModel](https://angular.io/api/forms/NgModel) および [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule) (FormControl, FormGroup など) からのすべてのディレクティブをサポートします。これには、[フォーム バリデータ](https://angular.io/api/forms/Validators)機能も含まれます。さらに、コンポーネントの[最小値と最大値](#最小値と最大値)はフォーム バリデータとしても機能します。

[リアクティブ フォームの統合](angular-reactive-form-validation.md)サンプルは、ReactiveForms で igxTimePicker を使用する方法を示しています。

#### 最小値と最大値
[`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minValue) および [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxValue) を指定して、ユーザー入力を制限できます。その場合、ドロップダウン/ダイアログにはその範囲内の時刻のみが表示されます。ただし、ドロップダウン モードでは、ユーザーが無効な時間を入力する可能性があります。[`validationFailed`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#validationfailed) イベントを処理して、それが発生した場合にユーザーに通知することができます。

>[!NOTE]
>最小/最大値は、Date オブジェクトまたは `ISO 8601` 形式の時刻のみの文字列である必要があります。

```typescript
// app.module.ts

...
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxTimePickerModule, IgxToastModule } from 'igniteui-angular';
// import { IgxTimePickerModule, IgxToastModule } from '@infragistics/igniteui-angular'; for licensed package

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

@ViewChild('toast', { static: true })
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

ドロップダウンには、項目のデルタに基づいて、最小/最大範囲 (09:15:30 AM~06:15:30 PM) 内の値が表示されます。無効な時間が入力されたときにメッセージを表示するためにトーストが追加されます。

 >[!NOTE]
>ドロップダウン/ダイアログの各時間部分に表示される値は、常にゼロから始まる項目のデルタに基づいて計算されます。[`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minValue) と [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxValue) が項目のデルタと一致しない場合、表示される値は、しきい値に一致する次の/最後の可能な値から開始/終了します。

以下は結果です。

<code-view style="height: 540px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-4/" >
</code-view>

<div class="divider--half"></div>

#### 日付ピッカーとタイム ピッカーを併用する
[`IgxDatePicker`](date-picker.md) と IgxTimePicker を一緒に使用する場合、それらを 1 つの同じ Date オブジェクト値にバインドする必要がある場合があります。

テンプレート駆動フォームでこれを実現するには、`ngModel` を使用して両方のコンポーネントを同じ Date オブジェクトにバインドします。

<code-view style="height: 540px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/template-driven-form/" >
</code-view>

<div class="divider--half"></div>

リアクティブ フォームでは、各コンポーネントの [`valueChange`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#valueChange) イベントを処理し、他のコンポーネントの値を更新できます。

<code-view style="height: 540px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/reactive-form/" >
</code-view>

<div class="divider--half"></div>

## スタイル設定

Time Picker のスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

[`time-picker-theme`]({environment:sassApiUrl}/themes#function-time-picker-theme) を拡張する新しいテーマを作成し、Time Picker のスタイルを設定できるさまざまなパラメーターを受け取ります。

```scss
$my-time-picker-theme: time-picker-theme(
  $text-color: #e4c8a5,
  $hover-text-color: #ecaa53,
  $selected-text-color: #ecaa53,
  $header-background: #ecaa53,
  $background-color: #011627
);
```

>[!NOTE]
>Time Picker ウィンドウのコンテンツの一部として使用される追加コンポーネント ([`IgxButton`](button.md) など) をスタイルするには、それぞれのコンポーネントに固有の追加テーマを作成し、ダイアログ ウィンドウのスコープ内のみに配置する必要があります (残りのアプリケーションの影響を受けません)。

Time Picker ウィンドウは [`IgxOverlayService`](overlay.md) を使用するため、カスタム テーマがスタイルを設定する Time Picker ウィンドウに適用されるように、ダイアログ ウィンドウが表示されたときに DOM に配置される特定のアウトレットを提供します。

Time Picker内の項目は、コンポーネント `ホスト`の子孫**ではありません**。現在、`ドキュメント`本文の最後にあるデフォルトのオーバーレイ アウトレットに表示されています。これを変更するには、`overlaySettings` の [`outlet`]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet) プロパティを使用します。`outlet` は、オーバーレイ コンテナーをレンダリングする場所を制御します。

以下でコンテナーを配置する要素への参照を渡すことができます。

```html
<igx-time-picker #picker [overlaySettings]="{ outlet: element }">
</igx-time-picker>
```

```typescript
export class TimepickerStylingComponent {
    constructor(public element: ElementRef) {
    }
}
```

Time Picker の項目がコンポーネントのホスト**内**に適切にレンダリングされます。つまり、カスタム テーマが有効になります。

>[!NOTE]
>[`IgxOverlayService`](overlay.md) を使用して表示される要素にテーマを提供するためのさまざまなオプションの詳細については、[オーバーレイ スタイリングのトピック](overlay-styling.md)をご覧ください。


```scss
 @include css-vars($my-time-picker-theme);
```

>[!WARNING]
>コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
  ::ng-deep {
    @include css-vars($my-time-picker-theme);
  }
}
```

### デモ

<code-view style="height: 600px;"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-styling/" >
</code-view>

<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxTimePickerComponent]({environment:angularApiUrl}/classes/igxtimepickercomponent.html)
* [IgxTimePickerComponent スタイル]({environment:sassApiUrl}/themes#function-time-picker-theme)
* [IgxOverlayService]({environment:angularApiUrl}/classes/igxoverlayservice.html)
* [IgxOverlay スタイル]({environment:sassApiUrl}/themes#function-overlay-theme)

## テーマの依存関係
* [IgxInputGroup テーマ]({environment:sassApiUrl}/themes#function-input-group-theme)
* [IgxIcon テーマ]({environment:sassApiUrl}/themes#function-icon-theme)
* [IgxButton テーマ]({environment:sassApiUrl}/themes#function-button-theme)
* [IgxOverlay テーマ]({environment:sassApiUrl}/themes#function-overlay-theme)

## その他のリソース
* [Date Time Editor](date-time-editor.md)
* [Label および Input](label-input.md)
* [リアクティブ フォームの統合](angular-reactive-form-validation.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

