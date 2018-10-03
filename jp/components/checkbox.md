---
title: Checkbox コンポーネント
_description: Ignite UI for Angular Checkbox コンポーネントは、特定の条件のバイナリ選択を許可する選択コントロールです。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Checkbox コンポーネント, Angular Checkbox コントロール
_language: ja
---

## Checkbox

<p class="highlight">Ignite UI for Angular Checkbox コンポーネントは、特定の条件のバイナリ選択を可能にする選択コントロールです。ネイティブ ブラウザーのチェックボックスと同様に動作します。</p>
<div class="divider"></div>

### Checkbox デモ

<div class="sample-container loading" style="height: 200px">
<iframe id="form-elements-sample-iframe" src='{environment:demosBaseUrl}/checkbox-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="form-elements-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

チェックボックス コンポーネントは、選択/選択解除の状態の選択ができます。デフォルト スタイル設定はマテリアル デザイン ガイドラインの選択コントロールの仕様に基づきます。

Ignite UI for Angular Checkbox を初期化する前に、[`IgxCheckboxModule`]({environment:angularApiUrl}/classes/igxcheckboxmodule.html) を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxCheckboxModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxCheckboxModule],
    ...
})
export class AppModule {}
```

簡易なチェックボックスを作成するには、コンポーネントのテンプレートで以下のコードを追加します。

```html
<igx-checkbox [checked]="true">
    simple checkbox
</igx-checkbox>
```

以下は結果です:

<div class="sample-container" style="height: 100px">
<iframe src='{environment:demosBaseUrl}/checkbox-sample-1' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>

#### Checkbox プロパティ

チェックボックス プロパティをデータにバインドし、上記のコードを拡張します。たとえば、description および done の 2 つのプロパティを持つタスク オブジェクトの配列がある場合では、チェックボックス コンポーネントの [`checked`]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html#checked) プロパティをその元となるタスク オブジェクトの done プロパティにバインドできます。同様に、[`value`]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html#value) プロパティを description にバインドします。

オプションに [`change`]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html#change) イベントをバインドし、イベント ハンドラー メソッドでカスタム ロジックを追加できます。

```typescript
// tasks.component.ts
...
public tasks = [
  { done: true, description: 'Research' },
  { done: true, description: 'Implement' },
  { done: false, description: 'Test' },
];

...
statusChanged()
{
    // event handler logic
}
```

各タスクにチェックボックスを追加し、対応するプロパティ バインディングを設定してコンポーネント テンプレートを拡張します。

```html
<!--tasks.component.html-->

<igx-checkbox *ngFor="let task of tasks" [checked]="task.done">
    {{ task.description }}
</igx-checkbox>
```

結果は以下のようになります。

<div class="sample-container" style="height: 200px">
<iframe src='{environment:demosBaseUrl}/checkbox-sample-2' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>

### API References
<div class="divider--half"></div>

* [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)
* [IgxCheckboxComponent Styles]({environment:sassApiUrl}/index.html#function-igx-checkbox-theme)
* [LabelPosition]({environment:angularApiUrl}/enums/labelposition.html)

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
