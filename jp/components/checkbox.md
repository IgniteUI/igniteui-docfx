---
title: Angular Checkbox コンポーネント
_description: Ignite UI for Angular Checkbox コンポーネントは、特定の条件のバイナリ選択を許可する選択コントロールです。今すぐお試しください。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Checkbox コンポーネント, Angular Checkbox コントロール
_language: ja
---

# Angular Checkbox (チェックボックス) コンポーネントの概要
<p class="highlight">Angular Checkbox は、標準の HTML 入力タイプのチェックボックスの拡張であり、同様の機能を提供しますが、アニメーションや Material Design のスタイル設定などでのみ強化されています。これにより、ユーザーは主にフォームや調査で、1 つまたは複数の事前定義されたオプションを選択できます。

Ignite UI for Angular Checkbox コンポーネントは、特定の条件のバイナリ選択を可能にする選択コントロールです。ネイティブ ブラウザーのチェックボックスと同様に動作します。提供される機能には、スタイル設定オプション、テーマ、チェック状態、チェックなし状態、不確定状態などがあります。</p>

## Angular Checkbox の例
以下の Angular Checkbox の例で、実際のチェックボックスを参照してください。

<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/checkbox-sample-1" alt="Angular Checkbox の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Checkbox を使用した作業の開始

Ignite UI for Angular Checkbox コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxCheckboxModule` をインポートします。

```typescript
// app.module.ts

import { IgxCheckboxModule } from 'igniteui-angular';
// import { IgxCheckboxModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxCheckboxModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxCheckboxComponent` をスタンドアロンの依存関係としてインポートできます。

```typescript
// home.component.ts

import { IgxCheckboxComponent } from 'igniteui-angular';
// import { IgxCheckboxComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-checkbox [checked]="true">
        Simple checkbox
    </igx-checkbox>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxCheckboxComponent]
})
export class HomeComponent {}
```

Ignite UI for Angular Checkbox モジュールまたはコンポーネントをインポートしたので、`igx-checkbox` コンポーネントの使用を開始できます。

## Angular Checkbox コンポーネントの使用
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
@Component({...})
export class HomeComponent {
    public tasks = [
        { done: true, description: 'Research' },
        { done: true, description: 'Implement' },
        { done: false, description: 'Test' }
    ];

    public statusChanged() {
        // event handler logic
    }
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

<code-view style="height: 200px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/checkbox-sample-2" >
</code-view>

### ラベル配置

チェックボックスの [`labelPosition`]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html#labelPosition) プロパティを使用してラベル位置を指定することができます。

```html
<igx-checkbox labelPosition="before"></igx-checkbox>
```

`labelPosition` が設定されていない場合、ラベルはチェックボックスの後に配置されます。

### Angular の未確定状態のチェックボックス

オンとオフに加えて、チェックボックスの 3 番目の状態があります: **未確定**。この状態では、チェックボックスはオンでもオフでもありません。チェックボックスの [`indeterminate`]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html#indeterminate) プロパティを使用して設定します。

```html
<igx-checkbox [indeterminate]="true"></igx-checkbox>
```

実行する必要があるタスクのリストと、すべてのタスクが完了した場合にのみチェックされる Angular のマスター チェックボックスのアプリを作成できます。上記のサンプルを更新しましょう。まず、テンプレート:

```html
<!-- app.component.html -->
<igx-checkbox
    [readonly]="true"
    [(ngModel)]="masterCheckbox.checked"
    [(indeterminate)]="masterCheckbox.indeterminate"
    (click)="toggleAll()"
>
All done
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
    { done: true, description: 'Research' },
    { done: true, description: 'Implement' },
    { done: false, description: 'Test' }
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

<code-view style="height: 200px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/checkbox-sample-3" >
</code-view>


## スタイル設定

チェックボックスのスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

次に、[`checkbox-theme`]({environment:sassApiUrl}/themes#function-checkbox-theme) を拡張して新しいテーマを作成し、チェックボックス要素をスタイリングします。`$empty-color` と `$fill-color` を指定することで、必要な状態色やコントラストのある前景色が自動的に計算されます。必要に応じて、他のパラメーターをカスタム値でオーバーライドすることもできます。

```scss
// in styles.scss
$custom-checkbox-theme: checkbox-theme(
  $empty-color: #ecaa53,
  $fill-color: #ecaa53,
  $border-radius: 5px
);
```

最後にコンポーネントのテーマをアプリケーションに**含めます**。

```scss
@include css-vars($custom-checkbox-theme);
```

### デモ


<code-view style="height: 100px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/checkbox-styling" >
</code-view>


<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)
* [IgxCheckboxComponent スタイル]({environment:sassApiUrl}/themes#function-checkbox-theme)
* [LabelPosition]({environment:angularApiUrl}/enums/labelposition.html)

## テーマの依存関係
* [IgxRipple テーマ]({environment:sassApiUrl}/themes#function-riple-theme)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
