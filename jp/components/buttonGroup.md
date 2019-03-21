---
title: Button Group コンポーネント
_description: ボタン グループの機能、さらに水平/垂直の配置、単一/複数の選択、および切り替え機能を提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ,  Angular ボタン グループ コンポーネント, Angular Button Group コントロール, Angular Button コンポーネント, Angular Button コントロール
_language: ja
---

## Button Group

Ignite UI for Angular [**igx-buttongroup**]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html) コンポーネントは、ボタン グループの機能、さらに水平/垂直の配置、単一/複数の選択、および切り替え機能を提供します。igx-ButtonGroup コンポーネントは、[igxButton ディレクティブ](button.md)を使用します。

### Button Group デモ

<div class="sample-container loading" style="height: 362px">
    <iframe id="buttonGroup-sample-1-iframe" seamless="" width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/button-group-sample-1" onload="onSampleIframeContentLoaded(this);">
</iframe></div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttonGroup-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 依存関係

Button Group が `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に `IgxButtonGroupModule` をインポートする必要があります。

```typescript
// app.module.ts

import { IgxButtonGroupModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxButtonGroupModule,
        ...
    ]
})
export class AppModule {}
```
### 使用方法

[`igx-buttongroup`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html) を使用して、ボタンを Angular スタイルのボタン グループに配置します。

```typescript
//sample.component.ts
import { ButtonGroupAlignment } from 'igniteui-angular';
...
public alignment = ButtonGroupAlignment.vertical;
...
 public ngOnInit() {
    this.cities = [
      new Button({
          label: "Sofia"
      }),
      new Button({
          label: "London"
      }),
      new Button({
          label: "New York",
          selected: true
      }),
      new Button({
          label: "Tokyo"
      })
  ];
  }
...
```

```html
<igx-buttongroup [multiSelection]="false" [values]="cities" [alignment]="alignment">
</igx-buttongroup>
```
<div class="sample-container loading" style="height: 164px">
    <iframe id="buttonGroup-sample-2-iframe" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/button-group-sample-2" class="lazyload">
</iframe></div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttonGroup-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>


「排他的」または「複数選択」を使用することもできますが、ボタンを切り替え可能および無効に設定することもできます。次の例では、一番左のボタンが選択されますが切り替えはできません。一番右のボタンは無効になっています。

```typescript
//sample.component.ts
...
public ngOnInit() {
    this.alignOptions = [
      new Button({
          icon: "format_align_left",
          selected: true,
          togglable: false
      }),
      new Button({
          icon: "format_align_center",
      }),
      new Button({
          icon: "format_align_right",
          selected: true
      }),
      new Button({
          disabled: true,
          icon: "format_align_justify",
      })
  ];
  }
...

```

```html
<igx-buttongroup [multiSelection]="true" [values]="alignOptions">
</igx-buttongroup>
```

<div class="sample-container loading" style="height: 52px">
    <iframe id="buttonGroup-sample-3-iframe" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/button-group-sample-3" class="lazyload">
</iframe></div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttonGroup-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### API リファレンス
<div class="divider--half"></div>

* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxButtonGroupComponent]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html)
* [IgxButtonGroup Styles]({environment:sassApiUrl}/index.html#function-igx-button-group-theme)

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

