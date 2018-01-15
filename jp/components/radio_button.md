---
title: Radio コンポーネント
_description: Ignite UI for Angular Radio Button コントロールは、選択可能なオプションのリストを表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Radio Button コンポーネント, Angular Radio Button コントロール
---

## Radio Button
<p class="highlight">Ignite UI for Angular Radio Button コンポーネントはラジオ ボタンのセットを描画します。ユーザーがオプションを選択してデータを送信します。ユーザーが利用可能なオプションから単一のオプションを選択できます。</p>
<div class="divider"></div>

### Radio Button デモ
<div class="sample-container" style="height:1390px">
<iframe src='https://{environment:demosBaseUrl}/form-elements' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

### 使用方法

ラジオ ボタン コンポーネントの外観および動作をカスタマイズするためのオプション、属性、およびイベントが複数あります。

```html
<igx-radio
    *ngFor="let item of ['Foo', 'Bar', 'Baz']"
    value="{{item}}"
    name="group"
    [(ngModel)]="user.favouriteVarName">
    {{item}}
</igx-radio>
```

上記のマークアップは ['Foo', 'Bar', 'Baz'] 配列の各項目に 3 つのラジオ ボタンを描画します。'value' プロパティは入力要素の value 属性にマップされ、<igx-radio> タグのコンテンツは入力と関連するラベルに表示されます。
<div class="divider--half"></div>

### プロパティ
`id` プロパティを使用して一意の ID を割り当て、ボタンをグループ化するために `name` プロパティを使用します。

残りのプロパティは規格のプロパティで、描画される入力要素の tabIndex、disabled、および checked 属性を制御します。

```html
<igx-radio
    id="{{user.id}}"
    value="{{user.manHours}}"
    [tabIndex]="50"
    [disabled]="false"
    [checked]="false"
    [(ngModel)]="user.favouriteVarName">
    {{item}}
</igx-radio>
```
<div class="divider--half"></div>

### イベント
変更イベントにアタッチできます。例: `(onchange)="doAlert($event)"`。

```html
<igx-radio
	value="{{user.id}}"
	tabIndex="50"
	(change)="doAlert($event)"
	(focus)="doAlert($event)"
	(blur)="doAlert($event)"
	[(ngModel)]="user.favouriteVarName">
	{{user.name}}
</igx-radio>
```

```typescript
import { Component } from "@angular/core";
import { IgxRadioModule } from "../../src/radio/radio";

@Component({
    selector: "radio-button",
    templateUrl: "radio-button.html"
})
export class RadioSampleComponent {
    user = {
        name: 'ジョン ドウ',
        favouriteVarName: 'Foo',
        id: 12,
    };

    doAlert() {
        alert("このオプションを選択しました。");
    }
}
```
<div class="divider--half"></div>
