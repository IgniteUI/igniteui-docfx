---
title: Radio コンポーネント
_description: Ignite UI for Angular Radio Button コントロールは、選択可能なオプションのリストを表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Radio Button コンポーネント, Angular Radio Button コントロール
_language: ja
---

## Radio Button

<p class="highlight">Ignite UI for Angular Radio Button コンポーネントを使用すると、隣に表示されるオプションのセットから単一のオプションを選択する機能を提供します。</p>
<div class="divider"></div>

### Radio Button デモ

<div class="sample-container loading" style="height:300px">
    <iframe id="form-elements-sample-iframe" src='{environment:demosBaseUrl}/radio-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="form-elements-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

ラジオ ボタン コンポーネントはオプションの単一選択を許可します。デフォルト スタイル設定はマテリアル デザイン ガイドラインの選択コントロールの仕様に基づきます。

Ignite UI for Angular Radio を初期化する前に、**IgxRadioModule** を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxRadioModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxRadioModule],
    ...
})
export class AppModule {}
```

簡易なラジオ ボタンを作成するには、コンポーネントのテンプレートで以下のコードを追加します。

```html
<igx-radio>
    Simple radio button
</igx-radio>
```

以下は結果です:

<div class="sample-container" style="height: 150px">
<iframe src='{environment:demosBaseUrl}/radio-sample-1' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>

### プロパティ

ラジオ ボタンをグループで追加します。上記のコードに 4 つのラジオ ボタンを追加します。各ボタンは特定の背景色を適用します。含まれる div 要素の backgroundColor プロパティをコンポーネントの selectedColor プロパティにバインドします。selectedColor は NgModel ディレクティブによって双方向バインディングが設定されます。ユーザーが別のラジオ ボタン (色) を選択したときに値が更新されます。

```typescript
// radiogroup.component.ts
...
title = "Select Background";

public colors = ['Yellow', 'Red', "Green", "Transparent"];

```

```html
<!--radiogroup.component.html-->

<h2>{{title}}</h2>
<div [style.background-color]="selectedColor">
    <igx-radio *ngFor="let color of colors" 
                name="color group" 
                checked="selectedColor" 
                [value] = "color" 
                [(ngModel)]="selectedColor">
        <div>{{color}}</div>
    </igx-radio>
</div>
```

双方向バインディングで ngModel ディレクティブを使用する前に、FormsModule をインポートし、NgModule の imports リストに追加する必要があります。

以上を実行すると結果が以下のようになります。

<div class="sample-container" style="height: 300px">
<iframe src='{environment:demosBaseUrl}/radio-sample-2' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>

### API まとめ

#### 入力

以下の入力は **igx-radio** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `value` | bool | ラジオ ボタンの値。 |

<div class="divider"></div>

#### 出力

以下の出力は **igx-radio** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `change` | EventEmitter | ラジオがクリックされたときにイベントを発生します。 |

### 追加のリソース

<div class="divider--half"></div>
是非コミュニティに参加してください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
