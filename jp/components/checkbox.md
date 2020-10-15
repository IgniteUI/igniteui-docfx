---
title: Checkbox コンポーネント
_description: Ignite UI for Angular Checkbox コンポーネントは、特定の条件のバイナリ選択を許可する選択コントロールです。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Checkbox コンポーネント, Angular Checkbox コントロール
_language: ja
---

# Checkbox
<p class="highlight">Ignite UI for Angular Checkbox コンポーネントは、特定の条件のバイナリ選択を可能にする選択コントロールです。ネイティブ ブラウザーのチェックボックスと同様に動作します。</p>
<div class="divider"></div>

## デモ
<div class="sample-container loading" style="height: 100px">
<iframe id="checkbox-sample-1-iframe" src='{environment:demosBaseUrl}/data-entries/checkbox-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="checkbox-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="checkbox-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

## 使用方法
チェックボックス コンポーネントは、選択/選択解除の状態の選択ができます。デフォルトのスタイル設定はマテリアル デザイン ガイドラインの選択コントロールの仕様に基づきます。

はじめに、**app.module.ts** ファイルに `IgxCheckboxModule` をインポートします。

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

デモのチェックボックスを作成するには、コンポーネントのテンプレートで以下のコードを追加します。

```html
<igx-checkbox [checked]="true">
    Simple checkbox
</igx-checkbox>
```

### Checkbox プロパティ

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

スタイルを追加します。

```scss
//task.component.scss

:host {
    display: flex;
    flex-flow: column nowrap;
    padding: 16px;
}

igx-checkbox {
    margin-top: 16px;
}
```

以下は結果です。

<div class="sample-container loading" style="height: 200px">
    <iframe id="checkbox-sample-2-iframe" data-src='{environment:demosBaseUrl}/data-entries/checkbox-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="checkbox-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="checkbox-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### ラベル配置

チェックボックスの [`labelPosition`]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html#labelposition) プロパティを使用してラベル位置を指定することができます。

```html
<igx-checkbox labelPosition="before"></igx-checkbox>
```

`labelPosition` が設定されていない場合、ラベルはチェックボックスの後に配置されます。

### 未確定状態のチェックボックス

オンとオフに加えて、チェックボックスの 3 番目の状態があります: **未確定**。この状態では、チェックボックスはオンでもオフでもありません。チェックボックスの [`indeterminate`]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html#indeterminate) プロパティを使用して設定します。

```html
<igx-checkbox [indeterminate]="true"></igx-checkbox>
```

実行する必要があるタスクのリストと、すべてのタスクが完了した場合にのみチェックされるマスター チェックボックスのアプリを作成できます。上記のサンプルを更新しましょう。まず、テンプレート:

```html
<!-- app.component.html -->

<igx-checkbox 
    [readonly]="true" 
    [(ngModel)]="masterCheckbox.checked" 
    [(indeterminate)]="masterCheckbox.indeterminate" 
    (click)="toggleAll()"
>
すべて完了しました。
</igx-checkbox>
<igx-checkbox class="tasks" *ngFor="let task of tasks" [(ngModel)]="task.done">
    {{ task.description }}
</igx-checkbox>
```

次に、同じグループの一部であることを表示するには、サブタスクをインデントします。

```scss
// app.component.scss

:host {
    display: flex;
    flex-flow: column nowrap;
    padding: 16px;
}

igx-checkbox {
    margin-top: 16px;
}

igx-checkbox.tasks {
    padding-left: 10px;
}
```

最後に、アプリケーションのロジックを作成します。

```ts
// app.component.ts

public tasks = [
    { done: true, description: "Research" },
    { done: true, description: "Implement" },
    { done: false, description: "Test" }
];

public get masterCheckbox() {
    return this.tasks.reduce(
        (acc, curr, idx, arr) => {
            acc.checked = acc.checked && curr.done;
            acc.done = curr.done ? acc.done + 1 : acc.done;
            acc.indeterminate = acc.done === arr.length ? false : !!acc.done;

            return acc;
        },
        {
            checked: true,
            done: 0,
            indeterminate: false
        }
    );
}

public toggleAll() {
    if (this.masterCheckbox.checked) {
        for (const task of this.tasks) {
            task.done = false;
        }
    } else {
        for (const task of this.tasks) {
            task.done = true;
        }
    }
}
```
すべて設定できると、アプリケーションは以下のようになります。

<div class="sample-container loading" style="height: 200px">
    <iframe id="checkbox-sample-3-iframe" data-src='{environment:demosBaseUrl}/data-entries/checkbox-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="checkbox-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="checkbox-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

## スタイル設定

チェックボックスのスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

チェックボックスはカレンダーのテーマを使用するため、[`igx-checkbox-theme`]({environment:sassApiUrl}/index.html#function-igx-checkbox-theme) を拡張する新しいテーマを作成し、そのパラメーターを使用してチェックボックスの項目をスタイル設定します。

```scss
// in styles.scss
$custom-checkbox-theme: igx-checkbox-theme(
    $border-radius: 10px,
    $label-color: #011627,
    $empty-color: #ECAA53,
    $fill-color: #ECAA53,
    $tick-color: #011627,
);
```

### テーマを含む

<div class="divider"></div>

最後にコンポーネントのテーマをアプリケーションに含めます。

`$legacy-support` が `true` に設定されている場合、**コンポーネントのテーマ**を以下のように含めます。

```scss
 @include igx-checkbox($custom-checkbox-theme);
```
>[!NOTE]
>コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
     ::ng-deep {
        @include igx-checkbox($custom-checkbox-theme);
    }
}
```

<div class="divider"></div>

`$legacy-support` が `false` (デフォルト) に設定されている場合、**css 変数** を以下のように含めます。

```scss
@include igx-css-vars($custom-checkbox-theme);
```

>[!NOTE]
>コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合においても、変数をオーバーライドするにはグローバル セレクターが必要なため、`:host` を使用する必要があります。

```scss
:host {
    @include igx-css-vars($custom-checkbox-theme);
}
```
### Demo

<div class="sample-container loading" style="height: 100px">
    <iframe id="checkbox-styling-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-entries/checkbox-styling" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="checkbox-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="checkbox-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)
* [IgxCheckboxComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-checkbox-theme)
* [LabelPosition]({environment:angularApiUrl}/enums/labelposition.html)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
