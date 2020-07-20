---
title: Label および Input ディレクティブ
_description: Ignite UI for Angular Label および Input ディレクティブを使用すると、単一行または複数行のテキスト要素を作成し、CSS スタイルを追加し、その他のコントロールと統合できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Label コンポーネント, Angular Label コントロール, Angular Input コンポーネント, Angular Input コントロール, Input コンポーネント, Input コントロール, Label コンポーネント, Label コントロール, Angular Input ディレクティブ, Angular Label ディレクティブ, Angular Forms, Angular Reactive Forms, Angular フォームの検証
_language: ja
---

## Label および Input
<p class="highlight">
Ignite UI for Angular Input および Label ディレクティブを使用すると、単一行または複数行のテキスト要素を作成できます。フォーム入力の全般的なシナリオにおいて便利な機能です。
</p>
<div class="divider--half"></div>

### デモ
<div class="sample-container loading" style="height:100px">
<iframe id="input-group-sample-1-frame" src='{environment:demosBaseUrl}/data-entries/input-group-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="input-group-sample-1-frame" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="input-group-sample-1-frame" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法
Input および Label ディレクティブを初期化にするには、まず `IgxInputGroupModule` を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxInputGroupModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxInputGroupModule],
    ...
})
export class AppModule {}
```

### Label および Input
Label および Input ディレクティブのデフォルト スタイル設定はマテリアル デザイン [**ガイドライン**](https://material.io/guidelines/components/text-fields.html) のテキスト フィールド仕様を実装します。

[`igxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html) および [`igxLabel`]({environment:angularApiUrl}/classes/igxlabeldirective.html) を使用するには、`<igx-input-group>` コンテナーにラップします。

```html
<igx-input-group>
    <input igxInput name="fullName" type="text" />
    <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```

`igxInput` ディレクティブは `<input>` および `<textarea>` 単一行および複数行テキスト フィールドの HTML 要素に適用できます。

#### 検証
[`required`]({environment:angularApiUrl}/classes/igxinputdirective.html#required) 属性を使用して `input` を検証できます。ラベルの隣にアスタリスクが追加され、このフィールドは必須入力であることを示します。入力は検証が成功/失敗したかどうかによって緑/赤に変わります。

```html
<igx-input-group>
    <input igxInput name="fullName" type="text" required="required" />
    <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```

<div class="sample-container loading" style="height:100px">
    <iframe id="input-group-sample-2-frame" data-src='{environment:demosBaseUrl}/data-entries/input-group-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="input-group-sample-2-frame" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="input-group-sample-2-frame" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>

#### データ バインディング
Ignite UI for Angular Input ディレクティブは、一方向および双方向のデータ バインディングをサポートします。以下のコードは `NgModel` を使用して双方向のデータ バインディングを追加する方法を示します。

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

#### フォーカスとテキストの選択

[`igxFocus`]({environment:angularApiUrl}/classes/igxfocusdirective.html) ディレクティブを使用して、input 要素に `focus` を強制するロジックを追加できます。

```html
<igx-input-group>
    <input igxInput [igxFocus]="isFocused" name="fullName" type="text" />
    <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```
>[!NOTE]
>[`igxFocus`]({environment:angularApiUrl}/classes/igxfocusdirective.html) ディレクティブを使用するには、[`IgxFocusModule`]({environment:angularApiUrl}/classes/igxfocusmodule.html) をインポートする必要があります。

`igxInput` でマークされた input 要素内のテキストをフォーカス際に選択したい場合、[`igxTextSelection`]({environment:angularApiUrl}/classes/igxtextselectiondirective.html) ディレクティブを有効にする必要があります。

```html
<igx-input-group>
    <input igxInput [igxTextSelection]="true" [igxFocus]="isFocused" name="fullName" type="text" />
    <label igxLabel for="fullName">Full Name</label>
</igx-input-group>

<igx-input-group>
    <input igxInput [igxTextSelection]="true" name="email" type="text" />
    <label igxLabel for="email">Email</label>
</igx-input-group>
```
>[!NOTE]
>[`igxTextSelection`]({environment:angularApiUrl}/classes/igxtextselectiondirective.html)  ディレクティブを使用するには、[`IgxTextSelectionModule`]({environment:angularApiUrl}/classes/igxtextselectionmodule.html) をインポートする必要があります。

##### デモ
<div class="sample-container loading" style="height: 100px">
<iframe id="input-text-selection-frame" data-src='{environment:demosBaseUrl}/data-entries/input-text-selection' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="input-text-selection-frame" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="input-text-selection-frame" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>

### Input Group
Ignite UI for Angular Input Group コンポーネントは、開発者が使いやすく美しフォームを作成するのに役立ちます。詳細については、別のトピック[こちら](input_group.md) を参照してください。

### API リファレンス
<div class="divider--half"></div>

* [IgxLabelDirective]({environment:angularApiUrl}/classes/igxlabeldirective.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)

### その他のリソース
<div class="divider--half"></div>

関連トピック:
* [Input Group](input_group.md)

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)