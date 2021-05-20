---
title: Time Picker コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Time Picker コンポーネントを使用すると、スピン ボタンがあるダイアログから時間を選択し、入力フィールドに値が設定されます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Time Picker コンポーネント, Angular Time Picker コントロール、Time Picker, Angular Time Picker
_language: ja
---

# Time Picker
<p class="highlight">Date Picker のデザインや機能と同様 Ignite UI for Angular Time Picker コンポーネントは、ダイアログのスピン ボタンで時間を選択して入力フィールドに値を設定します。またユーザーは、ドロップダウンで時間値の選択やマスク入力を使用した編集が可能です。</p>
<div class="divider--half"></div>

## Angular Time Picker の例

<code-view style="height: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-1" alt="Angular Time Picker の例">
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

タイムピッカーを追加するには、ミーティング コンポーネントのテンプレートで、以下のコードを追加するとデフォルトのタイムピッカーが作成されます。

```html
<!--meeting.component.html-->
<igx-time-picker></igx-time-picker>
```

出力はデモと同じです。

<div class="divider--half"></div>

### 値の設定

値を設定するには、[`value`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#value) 入力を使用します。日付を追加します。

```typescript
public date: Date = new Date();
```

テンプレートで [`value`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#value) 入力を使用します。

```html
<igx-time-picker [value]="date"></igx-time-picker>
```

双方向データ バインディングを使用するには、`ngModel` を以下のように使用します。

```html
<igx-time-picker [(ngModel)]="date"></igx-time-picker>
```

### 書式の設定
時間の書式を設定するには、[`IgxTimePickerComponent`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html) の [`format`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#format) オプションを使用します。

以下の表は、使用可能な時間表示書式です。

| 書式 | 説明 |
|:-------:|:-----------|
| `h` | 先行ゼロのない 12 時間形式 (1..12) で時間フィールドを書式設定します。 | 
| `hh` | 先行ゼロのある 12 時間形式 (01..12) で時間フィールドを書式設定します。 | 
| `H` | 先行ゼロがない 24 時間形式 (0..23) で時間フィールドを書式設定します。 | 
| `HH` | 先行ゼロがある 24 時間形式 (00..23) の時フィールドを書式設定します。 | 
| `m` | 先行ゼロがない分フィールド (0..59) を書式設定します。 |
| `mm` | 先行ゼロのある分フィールド (00..59) を書式設定します。 |
| `tt` | AM/PM フィールドを表します。 |

### カスタム ラベル
コンポーネントにネストされた `<label>` タグ内に `igxlabel` を配置することで、デフォルトのラベルをカスタム ラベルに変更できます。

````html
<!-- timepicker-label.component.html -->
<igx-time-picker>
    <label igxLabel>Meeting Start</label>
</igx-time-picker>
````

カスタム ラベルの外観は、[検証セクション](#検証) の検証サンプルで確認できます。


### デルタおよびスピン モードの変更

項目のデルタを変更するには、[`itemsDelta`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#itemsdelta) を設定します。スピン モードを変更するには、[`isSpinLoop`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#isspinloop) を使用します。

```html
<igx-time-picker [isSpinLoop]="false" [itemsDelta]="{hours:1, minutes:5}"></igx-time-picker>
```

## 検証

ユーザー入力を制限するために [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minvalue) および [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxvalue) を設定できます。[`onValidationFailed`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#onvalidationfailed) を処理して、無効な時間が選択された場合にユーザーを通知できます。

>[!NOTE]
>最小値 / 最大値は [`format`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#format) と一致する必要があります。

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

public min: string = "09:15:30 AM";
public max: string = "06:15:30 PM";

@ViewChild("toast", { static: true })
private toast;

public onValidationFailed() {
    this.toast.open();
}
```

```html
<igx-time-picker
	[itemsDelta]="{hours:1, minutes:5}"
	format="HH:mm tt"
	[vertical]="true"
	[minValue]="min"
	[maxValue]="max"
	(onValidationFailed)="onValidationFailed()">
	<label igxLabel>Meeting Start</label>
</igx-time-picker>

<igx-toast #toast message="Value must be between 09:15:30 AM and 06:15:30 PM"></igx-toast>

```

無効な時間が選択された際にメッセージを表示するトーストが追加されました。範囲は (午前 09:15:30 〜 午後 06:15:30) で、それ以外の時間部分はグレー表示されます。また、項目のデルタと時間形式を変更しました。

以下は結果です。

<code-view style="height: 540px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-4" >
</code-view>

<div class="divider--half"></div>

## ドロップダウン モード

タイムピッカーをプロジェクトに追加する際にデフォルト (ダイアログ) モードに設定します。編集可能なモードに変更するには、[`mode`]({environment:angularApiUrl}/classes/igxdatepickercomponent.html#mode) 入力を [`dropdown`]({environment:angularApiUrl}/enums/interactionmode.html#dropdown) に設定します。

```typescript
// timePickerDropdown.component.ts

import { InteractionMode } from 'igniteui-angular';
...
public mode = InteractionMode.DropDown;
```

```html
<!--timePickerDropdown.component.html-->
<igx-time-picker [mode]="mode"></igx-time-picker>
```

または、タイムピッカーで [`mode`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#mode) を以下のように変更します。

```html
<!--timePickerDropdown.component.html-->
<igx-time-picker mode="dropdown"></igx-time-picker>
```

ユーザーは、12 時間と 24 時間形式で時間値を入力、編集、削除できます。  

**キーボード ナビゲーション**

マウス キャレットは、時、分、AM/PM プレースホルダーに配置できます。<kbd>上矢印</kbd>の押下またはマウス ホイールアップした後に時または分が増加します。<kbd>下矢印</kbd>または `マウスホイール ダウン`は反転操作に使用できます。

>[!NOTE]
>タイム ピッカーの [`minValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#minvalue) または [`maxValue`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#maxvalue) が設定され、[`isSpinLoop`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#isspinloop) が false の場合、時間スクロールは指定した最小/最大の時/分の値で停止します。

**キーボード操作**

* ドロップダウンを`開く`には、*クロック アイコン* をクリックし、<kbd>Space</kbd> または <kbd>Alt</kbd> + <kbd>Down</kbd> キーの組み合わせを押します。
* ドロップダウンを `Accept` や `Close` する場合、<kbd>Escape</kbd> または <kbd>Enter</kbd> キーを押します。
* マウスでタイムピッカー以外をクリックして入力した値を `Accept` してドロップダウンを `Close` します。
* ドロップダウンが開いて新しい値が `Accept` にタイプされた場合、タイムピッカーの外側をクリックまたは <kbd>Tab</kbd> を押してフォーカスを移動します。

以下は結果です。

<code-view style="height:540px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-dropdown" >
</code-view>

<div class="divider--half"></div>

## 入力グループのテンプレート化

API (プロパティ、イベント、メソッド) を使用して要件によってタイムピッカーを構成し、コードで操作する方法を説明しました。次に入力グループの外観をカスタマイズします。

タイムピッカー内にネストした ng-template を IgxTimePickerTemplate ディレクティブでデコレートする必要があります。ng-template コンテキストは、次のメンバーを公開します。[`openDialog`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#opendialog) メソッドはタイムピッカーダイアログに使用できます。[`displayTime`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#displaytime) プロパティは書式設定の値を含みます。 [`value`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html#value) は実際の値を含みます。ng-template 要素で変数を宣言して使用することができます。

以下の例では、デフォルトのラベル "Time" を変更して 2 つ目のアイコンを接尾辞として追加します。入力グループで `igx-hint` を使用して実際のタイム ピッカーの値を表示します。

```html
<igx-time-picker [value]="date">
    <ng-template
        igxTimePickerTemplate
        let-openDialog="openDialog"
        let-value="value"
        let-displayTime="displayTime">
        <igx-input-group (click)="openDialog()">
            <igx-prefix>
                <igx-icon>home</igx-icon>
            </igx-prefix>
            <label igxLabel>Home Time </label>
            <input igxInput [value]="displayTime" />
            <igx-suffix>
                <igx-icon>access_alarm</igx-icon>
            </igx-suffix>
            <igx-hint>{{value}}</igx-hint>
        </igx-input-group>
    </ng-template>
</igx-time-picker>
```
```typescript
public date: Date = new Date();
```

以下はテンプレート化されたタイム ピッカーです。

<code-view style="height: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/timepicker-sample-5" >
</code-view>


## ドロップダウン モードのテンプレート化

<a href="#入力グループのテンプレート化">テンプレート入力グループ</a> セクションに記載されているすべての情報は、ドロップダウン モードのタイムピッカーを再テンプレート設定する際に適用できます。唯一の要件は、HTML 要素が `openDialog(target)` に渡されて、その要素が生成されているドロップダウンの配置ターゲットとして使用されることです。

```html
<igx-time-picker #picker [value]="today" format="HH:mm" mode="dropdown">
    <ng-template igxTimePickerTemplate let-openDialog="openDialog" let-value="value" let-displayTime="displayTime">
        <igx-input-group>
            <input #dropDownTarget igxInput [value]="displayTime" (blur)="onBlur(dropDownTarget.value, value, picker)"/>
            <igx-suffix>
                <igx-icon (click)="openDialog(dropDownTarget)">access_time</igx-icon>
            </igx-suffix>
        </igx-input-group>
    </ng-template>
</igx-time-picker>
```
```typescript
public today: Date = new Date();
```

>[!NOTE]
>テンプレート コンテキストで公開されている `displayTime` プロパティは**読み取り専用**です。上記の例では、双方向バインディングを実現するために、入力要素の **blur** イベントと組み合わせて使用​​されています。

```typescript
public today: Date = new Date();

public onBlur(inputValue: string, value: Date, picker: IgxTimePickerComponent) {
    const parts = inputValue.split(/[\s:]+/);

    const hour = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);

    if (picker.validHourEntries.indexOf(hour) !== -1 && picker.validMinuteEntries.indexOf(minutes) !== -1) {
        value.setHours(hour, minutes);
    } else {
        throw new Error("This is not a valid hour.");
    }
}
```



## カスタム ボタン アクション
[`IgxTimePickerComponent`]({environment:angularApiUrl}/classes/igxtimepickercomponent.html) は、カスタム アクション ボタンをサポートします。これを実現するには、`igxTimePickerActions` ディレクティブセレクタでマークされた `ng-template` でボタンをラップします。

以下の例では、'CANCEL'、'OK'、'NOW' 操作用のカスタム操作ボタンが追加されています。

```html
<!-- sample.component.html -->

<igx-time-picker #picker format="HH:mm" mode="dropdown">
    <ng-template igxTimePickerActions>
        <div class="container action-buttons">
            <button igxButton="flat" (click)="picker.cancelButtonClick()">cancel</button>
            <button igxButton="flat" (click)="picker.okButtonClick()">ok</button>
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

## スタイル設定

タイム ピッカーのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

[`igx-time-picker-theme`]({environment:sassApiUrl}/index.html#function-igx-dialog-theme) を拡張する新しいテーマを作成し、タイム ピッカーのスタイルを設定できるさまざまなパラメーターを受け取ります。

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
>タイム ピッカー ウィンドウのコンテンツの一部として使用される追加コンポーネント ([`IgxButton`](button.md) など) をスタイルするには、それぞれのコンポーネントに固有の追加テーマを作成し、ダイアログ ウィンドウのスコープ内のみに配置する必要があります (残りのアプリケーションの影響を受けません)。

タイム ピッカー ウィンドウは [`IgxOverlayService`](overlay.md) を使用するため、カスタム テーマがスタイルを設定するタイム ピッカー ウィンドウに適用されるように、ダイアログ ウィンドウが表示されたときに DOM に配置される特定のアウトレットを提供します。

タイム ピッカー内の項目は、コンポーネント `ホスト`の子孫**ではありません**。現在、`ドキュメント`本文の最後にあるデフォルトのオーバーレイ アウトレットに表示されています。これを変更するには、`overlaySettings` の [`outlet`]({environment:angularApiUrl}/interfaces/overlaysettings.html#outlet) プロパティを使用します。`outlet` は、オーバーレイ コンテナをレンダリングする場所を制御します。

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

タイム ピッカーの項目がコンポーネントのホスト**内**に適切にレンダリングされます。つまり、カスタム テーマが有効になります。

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

## Theming Dependencies
* [IgxInputGroup Theme]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)
* [IgxIcon Theme]({environment:sassApiUrl}/index.html#function-igx-icon-theme)
* [IgxButton Theme]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [IgxOverlay Theme]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
