---
title: Radio と Radio Group
_description: Ignite UI for Angular Radio Button コントロールおよび Radio Group コントロールは、テンプレート主導およびリアクティブ フォームで選択可能なオプションのリストを表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Radio Button コンポーネント, Angular Radio Button コントロール, Angular Radio Group コンポーネント, Angular Radio Group コントロール
_language: ja
---

## Radio Button

<p class="highlight">Ignite UI for Angular Radio Button コンポーネントを使用すると、隣に表示されるオプションのセットから単一のオプションを選択する機能をサポートします。</p>
<div class="divider"></div>

### Radio Button デモ

<div class="sample-container loading" style="height:384px">
    <iframe id="form-elements-sample-iframe" src='{environment:demosBaseUrl}/radio-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="form-elements-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### Radio Button の使用

ラジオ ボタン コンポーネントはオプションの単一選択を可能にします。デフォルト スタイル設定はマテリアル デザイン ガイドラインの選択コントロールの仕様に基づきます。

Ignite UI for Angular Radio を初期化する前に **IgxRadioModule** を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxRadioModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxRadioModule],
    ...
})
export class AppModule {
    public selected: any;
}
```

ラジオ ボタンの作成は、コンポーネントのテンプレートで以下のコードを追加します。

```html
<igx-radio [(ngModel)]="selected" value="option1">Option 1</igx-radio>
<igx-radio [(ngModel)]="selected" value="option2">Option 2</igx-radio>
```

以下は結果です:

<div class="sample-container" style="height: 88px">
    <iframe src='{environment:demosBaseUrl}/radio-sample-1' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>

### Radio Button プロパティ

ラジオ ボタンをグループに追加します。上記のコードにラジオ ボタンを 4 つ追加し、各ボタンに特定の背景色を適用します。更に含まれる div 要素の backgroundColor プロパティをコンポーネントの selectedColor プロパティにバインドし、selectedColor に NgModel ディレクティブによって双方向バインディングを設定します。これによりユーザーが他のラジオ ボタン (色) を選択したときに値が更新されます。

```typescript
// radiogroup.component.ts
...
public title = "Select Background";

public colors = [{
    hex: "#f06a2f",
    name: "Carrot"
}, {
    hex: "#ff134a",
    name: "Watermelon"
}, {
    hex: "#7bc96f",
    name: "Grass"
},
{
    hex: "transparent",
    name: "No color"
}];

public selectedColor: string = this.colors[3].hex;
```

```html
<!--radiogroup.component.html-->

<igx-radio *ngFor="let color of colors" 
    name="color" 
    [value]="color.hex" 
    [(ngModel)]="selectedColor">
    {{color.name}}
</igx-radio>

<div class="box" [style.background-color]="selectedColor"></div>
```

双方向バインディングで ngModel ディレクティブを使用する前に、FormsModule をインポートして NgModule の imports リストに追加する必要があります。

以上を実行すると以下のような結果になります。

<div class="sample-container" style="height: 384px">
    <iframe src='{environment:demosBaseUrl}/radio-sample-2' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>

## Radio Group
<p class="highlight">Ignite UI for Angular Radio Group ディレクティブは、子 `igxRadio` コンポーネントをより詳細に制御ができ、テンプレート主導やリアクティブ フォームをサポートするグルーピング コンテナーを提供します。</p>
<div class="divider"></div>

### Radio Group デモ
<div class="sample-container" style="height: 320px">
    <iframe id="radio-group-sample-iframe" src='{environment:demosBaseUrl}/radio-group-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="radio-group-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### Radio Group の使用

Radio Group ディレクティブが NgModule としてエクスポートされるため、アプリケーションで **app.module.ts** ファイルの **IgxRadioModule** をインポートする必要があります。

```typescript
// app.module.ts
...
import { IgxRadioModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxRadioModule],
    ...
})
```
はじめに **igxRadioGroup** を作成して **igxRadio** コンポーネントを追加します。

**igxRadioGroup** `name` プロパティの設定は**必須**であることに注意してください。

```html
<!--radio-group.component.html-->
<igx-radio-group name="fruitsRadioGroup">
    <igx-radio class="radio-sample" *ngFor="let fruit of fruits" value="{{fruit}}">
        {{fruit}}
    </igx-radio>
</igx-radio-group>
```

```typescript
// radio-group.component.ts
public fruits = ["Apple", "Mango", "Banana", "Orange"];
```

### API まとめ

#### Radio Button 入力

以下の入力は **igx-radio** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `@Input()` id |    string   | ラジオ ボタンに使用される一意の `id` 属性。値を設定しない場合、自走生成されます。 |
| `@Input()` labelId |    string   | ラジオ ボタン ラベルに使用される一意の `id` 属性。値を設定しない場合、自走生成されます。 |
| `@Input()` name |  string | ラジオ ボタンに使用される `name` 属性。 |
| `@Input()` value | any | ラジオ ボタンに設定する値。 |
| `@Input()` tabindex | number | ラジオ ボタンのタブ順序を指定します。 |
| `@Input()` checked | boolean | ラジオ ボタンのチェックされた状態を指定します。 |
| `@Input()` required | boolean | ラジオ ボタンの必須状態を指定します。 |
| `@Input()` disabled | boolean | ラジオ ボタンの無効状態を指定します。 |
| `@Input()` disableRipple | boolean | リップル エフェクトをラジオ ボタンで無効にするかどうかを指定します。 |
| `@Input()` labelPosition | string または enum RadioLabelPosition | ラジオ ボタン要素に対するテキスト ラベルの位置を指定します。可能となる値は  "before" と "after" です。 |
| `@Input("aria-labelledby")` ariaLabelledBy | string | ラジオ ボタンのラベルに使用される外部の要素を id によって指定します。 |

<div class="divider"></div>

#### Radio Button 出力

以下の出力は **igx-radio** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `@Output()` change | EventEmitter<IChangeRadioEventArgs> | ラジオ ボタンの checked 値が変更するときに発生します。 |
<div class="divider"></div>

#### Radio Button メソッド

以下のメソッドは **igx-radio** コンポーネントで利用できます。

| 名前 | 説明|
| :--- | :--- |
| select | ラジオ ボタンを選択します。 |
<div class="divider"></div>

### Radio Group の入力
以下の入力は **igx-radio-group** コンポーネントで利用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `@Input()` name |  string | ラジオ グループに使用される `name` 属性。すべての子ラジオボタンはこの名前を継承します。 |
| `@Input()` value | any | すべての子ラジオボタンはこの名前を継承します。 |
| `@Input()` required | boolean | ラジオ グループが必要かどうかを指定します。デフォルト値は `false` です。 |
| `@Input()` disabled | boolean | ラジオ グループが無効かどうかを指定します。ラジオ グループが無効かどうかを指定します。|
| `@Input()` labelPosition | string または enum RadioLabelPosition | 子ラジオ ボタンに対するテキスト ラベルの位置を指定します。 使用可能な値は  "before" と "after" でデフォルト値は `after` です。 |
| `@Input()` selected | IgxRadioComponent | 選択した子ラジオ ボタンを指定します。 |

<div class="divider"></div>

### Radio Group 出力
以下の出力は **igx-radio-group** コンポーネントで利用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `@Output()` change | EventEmitter<IChangeRadioEventArgs> | ラジオ グループ  `value` が変更された後に発生されます。 |
<div class="divider"></div>

### 追加のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
