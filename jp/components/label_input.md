---
title: Label and Input Directives
_description: Ignite UI for Angular Input Group コンポーネントを使用すると、単一行または複数行のテキスト要素を作成し、CSS スタイルを追加し、その他のコントロールと統合できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Label コンポーネント, Angular Label コントロール, Angular Input コンポーネント, Angular Input コントロール, Input コンポーネント, Input コントロール, Label コンポーネント, Label コントロール, Angular Input ディレクティブ, Angular Label ディレクティブ, Angular Forms, Angular Reactive Forms, Angular フォーム検証
_language: ja
---

## Label & Input
<p class="highlight">
The Ignite UI for Angular Input and Label directives are used to create a single-line or multi-line text elements. They help to cover common scenarios when dealing with form inputs.
</p>
<div class="divider--half"></div>

### Label & Input Demo
<div class="sample-container" style="height:100px">
<iframe id="input-group-sample-2-frame" src='{environment:demosBaseUrl}/input-group-sample-2' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="input-group-sample-2-frame" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage
The default styling of the Label and Input directives follows the text fields specification in the Material Design
[**guidelines**](https://material.io/guidelines/components/text-fields.html).

> [!NOTE]
> To use `igxInput` and `igxLabel`, you have to wrap them in an `<igx-input-group>` container.

To get started with the Ignite UI for Angular Label & Input, let's first import the **IgxInputGroup** in our **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxInputGroup } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxInputGroup],
    ...
})
export class AppModule {}
```

### Label および Input
HTML ラベルおよび入力は HTML フォームの基本要素です。`igxLabel` および `igxInput` ディレクティブの使用例:

```html
<igx-input-group>
    <input igxInput name="fullName" type="text" />
    <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```

結果は以下です。

<div class="sample-container" style="height:100px">
<iframe id="input-group-sample-1-frame" src='{environment:demosBaseUrl}/input-group-sample-1' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

`igxInput` ディレクティブを `<input>` および `<textarea>` HTML 要素に適用できます。単一行および複数行テキスト フィールドをサポートします。

#### 検証
Ignite UI for Angular Input ディレクティブで検証が有効な場合にマテリアルに基づくスタイル設定を提供します。入力に `required` 属性を追加します。

```html
<igx-input-group>
    <input igxInput name="fullName" type="text" required="required" />
    <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```

以下のコード例およびデモは、検証に成功または失敗するかどうかに基づいてラベルの隣にあるアスタリスクを表示し、入力が緑または赤くなることを確認できます。

<div class="sample-container" style="height:100px">
<iframe id="input-group-sample-2-frame" src='{environment:demosBaseUrl}/input-group-sample-2' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

#### データ バインディング
Ignite UI for Angular Input は one-way および two-way データ バインディングをサポートします。入力に両方向のデータ バインディングを追加します。以下はコンポーネントのコード:

```typescript
public user = {
    fullName: ""
};

```

マークアップのコード:

```html
<igx-input-group>
    <input igxInput name="fullName" type="text" [(ngModel)]="user.fullName" required="required" />
    <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```

### Input Group
You can read about the Input Group component in a separate topic [here](input_group.md).

## Input API

### 入力

|名前|型|説明|
|--- |--- |--- |
|`value`|any|入力の値。|
<div class="divider--half"></div>

### ゲッター/セッター

|名前|型|ゲッター|セッター|説明|
|--- |--- |--- |--- |--- |
|`valid`|IgxInputState|はい|いいえ|入力の検証状態。有効な値は `IgxInputState.INITIAL`、`IgxInputState.VALID`、および `IgxInputState.INVALID` です。|
|`disabled`|boolean|はい|はい|入力の `disabled` プロパティを取得または設定します。|
|`focused`|boolean|はい|いいえ|入力がフォーカスを持つかどうかを取得します。|
<div class="divider--half"></div>

## Additional Resources
Related topics:

* [Input Group](input_group.md)
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)