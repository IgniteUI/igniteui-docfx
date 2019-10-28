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

Ignite UI for Angular Checkbox を初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールします。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module.ts** ファイルに  `IgxCheckboxModule` をインポートします。

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

### スタイル設定
[Ignite UI for Angular テーマ](themes/index.md)を使用して、**igx-checkbox** の外観を変更できます。

#### テーマのインポート
はじめに、テーマ エンジンによって公開されている関数を使用するために、スタイル ファイルに `index` ファイルをインポートする必要があります。 

```scss
// in styles.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

#### パレットの定義
2 つのメイン テーマ カラーを指定できる独自のカラー [パレット](themes/palette.md)を使用します。さらに、[`igx-checkbox-theme`]({environment:sassApiUrl}/index.html#function-igx-checkbox-theme) パラメーターで公開されるいくつかのパラメーター、つまり `$border-radius`、`$label-color`、`$empty-color` を設定します。
最初にカスタム パレットを定義します。
```scss
// in styles.scss
$my-primary-color: #f5e492;
$my-secondary-color: #09f;

$my-color-palette: igx-palette(
    $primary: $my-primary-color,
    $secondary: $my-secondary-color
);
```

カスタム パレットが適用されていることを確認するには、テーマ関数に渡す必要があります。
そのため、1 つの大胆な動きで[`カスタム テーマを作成`](themes/component-themes.md#テーマの作成)し、さらに 3 つの特定のパラメーターも渡します。これらを変更するだけで、コンポーネントを思いどおりに見せるには十分すぎると判断したとします。
```scss
// in styles.scss
$custom-checkbox-theme: igx-checkbox-theme(
    $palette: $my-color-palette,
    $border-radius: 10px,
    $label-color: $my-secondary-color,
    $empty-color: $my-secondary-color
);
```

#### 適用
あとは新しく作成したテーマを適切にスコープするだけです。

##### グローバル
アプリに新しく作成した `igx-checkbox` を[`グローバル`](themes/component-themes.md#creating-themes)に適用する場合、アプリのルート スタイル ファイルにテーマを含めるだけです。
```scss
// in styles.scss
// Pass our checkbox theme to the `igx-checkbox` mixin
    @include igx-checkbox($custom-checkbox-theme);
```

##### スコープ
特定の `igx-checkbox` のスタイルをアプリ内の他のスタイルと異なるようにする必要がある場合があります。これには、`:host`、`::ng-deep` などの Angular 固有の擬似クラス セレクターを使用する必要があります。さらに、styles.scss で指定する上記のスタイルはすべて、代わりに component.scss ファイルで定義する必要があります。

 >[!NOTE]
 >コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化)  ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を`ペネトレーション`する必要があります。
一方、カスタム テーマが他のコンポーネントのに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
// in component.scss
:host {
    ::ng-deep {
        // Pass our checkbox theme to the `igx-checkbox` mixin
        @include igx-checkbox($custom-checkbox-theme);
    }
}
```
#### デモのスタイル設定

<div class="sample-container loading" style="height: 100px">
    <iframe id="checkbox-styling-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-entries/checkbox-styling" class="lazyload no-theming"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="checkbox-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

<div class="divider--half"></div>

### API リファレンス
<div class="divider--half"></div>

* [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)
* [IgxCheckboxComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-checkbox-theme)
* [LabelPosition]({environment:angularApiUrl}/enums/labelposition.html)

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
