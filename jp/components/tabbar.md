---
title: Tab Bar コンポーネント
_description: タブ付きのユーザー インターフェイスでタブを表示します。この UI コントロールはタブの外観および動作を管理します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Tab Bar コンポーネント, Angular Tab Bar コントロール
---

## Tab Bar

<p class="highlight">Ignite UI for Angular Tab Bar コンポーネントでは 3∼5 パネルのビューで表示されるコンテンツ間を移動できます。パネルは下部のアイコンまたはテキストで識別されます。</p>
<div class="divider"></div>

### Tabbar デモ

<div class="sample-container" style="height:645px">
    <iframe src='{environment:demosBaseUrl}/tabbar' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

### 使用方法;

```html
<igx-tab-bar>
    <igx-tab-panel label="タブ 1">
        <h1>タブ 1 のコンテンツ</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </igx-tab-panel>
    <igx-tab-panel label="タブ 2">
        <h1>タブ 2 のコンテンツ</h1>
        <p>Lorem ipsum dolor sit amet...</p>
    </igx-tab-panel>
    <igx-tab-panel label="タブ 3">
        <h1>タブ 3 のコンテンツ</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae malesuada odio.</p>
    </igx-tab-panel>
</igx-tab-bar>
```

_Igx-Tab-Bar はタブと関連づけられた複数のパネルを持つ単一のコンテンツ領域を表します。_
Igx-Tab-Bar は 2 つ (パネルと関連づけられたタブ) の監視可能コレクション (QueryLists) を提供します。
Igx-Tab-Bar の子コンポーネント:

* _Igx-Tab-Panel_ - 表示されるコンテンツのラッパーを表します。
* _Igx-Tab_ - 関連付けられているパネルの表示をトリガーするボタン。

各タブ (Igx-Tab) は特定のパネル (Igx-Tab-Panel) に関連付けられます。タブをクリックすると、関連づけられたパネルが選択され、単一のコンテナーに可視化されます。常に選択済みのタブがあります。一度に選択済みのタブは 1 つだけです。

#### Tab Bar プロパティ

* `tabs` - すべての IgxTab ビューの子要素の Observable コレクション。
* `panels` - すべての IgxTabPanel コンテンツの子要素の Observable コレクション。
* `selectedIndex` - 対応するコレクションの選択済みのタブまたはパネルのインデックスを取得します。デフォルト値は -1 です。
* `selectedTab` - Tab Bar で選択済みの IgxTab を `selectedIndex` に基づいて取得します。

#### イベント

* `onTabSelected` - 新しいタブが選択されたときに発生します。
* `onTabDeselected` - タブが選択解除されたときに発生します。
  <div class="divider--half"></div>

### パネル

_Igx-Tab-Panel_ - _表示するコンテンツのコンテナーを表す Igx-Tab-Bar の子コンポーネントです。_

#### パネルのプロパティ

* `isSelected` - パネルが選択されているかどうかを決定します。
* `isDisabled` - パネルが無効されているかどうかを決定します。
* `index` - パネル コレクションのパネルのインデックスを取得します。
* `relatedTab` - パネルに関連付けられたタブを取得します。
* `label` - 関連付けられているタブでのラベルを定義します。
* `icon` - 関連付けられているタブでのアイコンを定義します。

#### パネルのメソッド

* `select` - パネルおよび関連付けられているタブを選択します。
  <div class="divider--half"></div>

### タブ

_Igx-Tab_ - _関連付けられているパネルの表示をトリガーするボタンを表す Igx-Tab-Bar の子コンポーネントです。_

#### タブのプロパティ

* `isDisabled` - タブが無効されているかどうかを決定します。
* `isSelected` - タブが選択されているかどうかを決定します。
* `index` - タブ コレクションのタブのインデックスを取得します。
* `relatedPanel` - タブに関連付けられているパネルを取得します。

#### タブのメソッド

* `select` - タブおよび関連付けられているパネルを選択します。
  <div class="divider--half"></div>
