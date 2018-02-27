---
title: Button Group コンポーネント
_description: ボタン グループの機能、さらに水平/垂直の配置、単一/複数の選択、および切り替え機能を提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ,  Angular ボタン グループ コンポーネント, Angular Button Group コントロール, Angular Button コンポーネント, Angular Button コントロール
_language: ja
---

## Button Group

**igx-ButtonGroup** コンポーネントは、ボタン グループの機能、さらに水平/垂直の配置、単一/複数の選択、および切り替え機能を提供します。igx-ButtonGroup コンポーネントは、[igxButton ディレクティブ](button.md)を使用します。

### Button Group デモ

<div class="sample-container" style="height: 436px">
    <iframe id="buttonGroup-sample-1-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/button-group-sample-1" onload="onSampleIframeContentLoaded(this);">
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="buttonGroup-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 依存関係

Button Group が `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に _IgxButtonGroupModule_ をインポートする必要があります。

```typescript
// app.module.ts

import { IgxButtonGroupModule } from 'igniteui-angular/main';

@NgModule({
    imports: [
        ...
        IgxButtonGroupModule,
        ...
    ]
})
export class AppModule {}
```
### コード例

`igx-ButtonGroup` を使用して、ボタンを Angular スタイルのボタン グループに配置します。

```typescript
//sample.component.ts
import { ButtonGroupAlignment } from "igniteui-angular/main";
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
<div class="sample-container" style="height: 200px">
    <iframe id="buttonGroup-sample-2-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/button-group-sample-2" onload="onSampleIframeContentLoaded(this);">
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="buttonGroup-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>


「排他的」または「複数選択」を使用することもできますが、ボタンを切り替え可能および無効に設定することもできます。次の例では、一番左のボタンが選択されますが、切り替え可能ではありません。一番右のが無効になっています。

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

<div class="sample-container" style="height: 100px">
    <iframe id="buttonGroup-sample-3-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/button-group-sample-3" onload="onSampleIframeContentLoaded(this);">
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="buttonGroup-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### API まとめ
#### 入力

以下の入力が **igx-ButtonGroup** コンポーネントで利用できます。

| 名前   |      型      |  説明 |
|:----------|:-------------:|:------|
| `multiSelection` |  boolean | 複数のボタン選択を有効にします。デフォルトで `multiselection` は false です。
| `alignment` |    enum   |   ボタン グループの配置を設定します。利用可能なオプションは、`ButtonGroupAlignment.horizontal` （デフォルト) と `ButtonGroupAlignment.vertical` です。 |
| `disabled` | boolean | igxButtonGroup コンポーネントを無効にします。デフォルトで false です。 |

#### 出力

**igx-ButtonGroup** によって発生されるイベントのリスト:

| 名前   | 説明 |
|:----------|:-------------:|
| `onSelect` | ボタンが選択されたときに発生します。 |
| `onUnselect` | ボタンが選択解除されたときに発生します。 |
| `onClick` | ボタンがクリックされたときに発生します。 |

#### メソッド

**igx-ButtonGroup** によって公開されるパブリック メソッドのリスト:

| 名前   | 説明 |
|:----------|:------|
| `selectButton(index: number)` | インデックスでボタンを選択します。  |
| `deselectButton(index: number)` | インデックスでボタンを選択解除します。 |
| `selectedButtons()` | 選択済みのボタンを取得します。 |



### 追加のリソース

<div class="divider--half"></div>
是非コミュニティに参加してください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

