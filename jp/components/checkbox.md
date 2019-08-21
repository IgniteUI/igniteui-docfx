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
<iframe id="form-elements-sample-iframe" src='{environment:demosBaseUrl}/data-entries/checkbox-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="form-elements-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

チェックボックス コンポーネントは、選択/選択解除の状態の選択ができます。デフォルト スタイル設定はマテリアル デザイン ガイドラインの選択コントロールの仕様に基づきます。

Ignite UI for Angular Checkbox を初期化する前に、`IgxCheckboxModule` を **app.module.ts** ファイルにインポートします。

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

<div class="sample-container loading" style="height: 100px">
<iframe data-src='{environment:demosBaseUrl}/data-entries/checkbox-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
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

<div class="sample-container loading" style="height: 200px">
<iframe data-src='{environment:demosBaseUrl}/data-entries/checkbox-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>

<!-- ### Styling
Using the [Ignite UI for Angular Theming](themes/index.md), we can alter the **igx-checkbox** appearance.

#### Import theme
First, in order for us to use the functions exposed by the theme engine, we need to import the `index` file in our style file: 

```scss
// in styles.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

#### Define palette
We are going to use our own color [palette](themes/palette.md) where we can specify our two main theme colors. Additionally we are going to set several of the exposed by the [`igx-checkbox-theme`]({environment:sassApiUrl}/index.html#function-igx-checkbox-theme) parameters namely `$border-radius`, `$label-color` and `$empty-color`.
First define a custom palette:
```scss
// in styles.scss
$my-primary-color: #f5e492;
$my-secondary-color: #09f;

$my-color-palette: igx-palette(
    $primary: $my-primary-color,
    $secondary: $my-secondary-color
);
```

In order to see our custom palette applied, we need to pass it to a theme function.
So in one bold move we will [`create a custom theme`](themes/component-themes.md#creating-themes) and pass our three more specific parameters as well. Let's say we have decided modifying these will be more than sufficient to make our component look the way we like:
```scss
// in styles.scss
$custom-checkbox-theme: igx-checkbox-theme(
    $palette: $my-color-palette,
    $border-radius: 10px,
    $label-color: $my-secondary-color,
    $empty-color: $my-secondary-color
);
```

#### Applying
All that's left is to properly scope our newly created theme.

##### Globally
In case you want this newly created `igx-checkbox` theme to be applied [`globally`](themes/component-themes.md#creating-themes) in your app, all that is needed is to include the theme in your app root style file:
```scss
// in styles.scss
// Pass our checkbox theme to the `igx-checkbox` mixin
    @include igx-checkbox($custom-checkbox-theme);
```

##### Scoped
There may be a case where you want a particular `igx-checkbox` be styled differently than the others in the app. This will require to use Angular specific pseudo-class selectors like `:host`, `::ng-deep`, etc. Additionally, all of the above styles we specify in styles.scss need to be defined in the component.scss file instead.

 >[!NOTE]
 >If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`.
On the other side, in order to prevent our custom theme to leak to other components, be sure to include the `:host` selector before `::ng-deep`:

```scss
// in component.scss
:host {
    ::ng-deep {
        // Pass our checkbox theme to the `igx-checkbox` mixin
        @include igx-checkbox($custom-checkbox-theme);
    }
}
```
#### Styling Demo

<div class="sample-container loading" style="height: 100px">
    <iframe id="checkbox-styling-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-entries/checkbox-styling" class="lazyload no-theming"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="checkbox-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div> -->

### API リファレンス
<div class="divider--half"></div>

* [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)
* [IgxCheckboxComponent Styles]({environment:sassApiUrl}/index.html#function-igx-checkbox-theme)
* [LabelPosition]({environment:angularApiUrl}/enums/labelposition.html)

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
