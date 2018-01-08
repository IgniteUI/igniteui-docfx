---
title: List View コンポーネント
_description: Ignite UI for Angular List View コンポーネントを使用すると、ネイティブ Angular フレームワークで行にデータを任意のテンプレートを使用して表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular List View コンポーネント, Angular List View コントロール
---

## List View

<p class="highlight">Ignite UI for Angular List コンポーネントは項目の行を表示し、ヘッダー項目を 1 つ以上サポートし、リスト項目の検索およびフィルタリングをサポートします。各リスト項目をテンプレートに設定できます。テンプレートは有効な HTML または Angular コンポーネントをサポートします。</p>
<div class="divider"></div>
### List デモ
<div class="sample-container" style="height: 760px">
<iframe src='https://{environment:host}/angular-demos/list' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

### 使用方法

```html
<igx-list>
    <igx-list-header>ヘッダー 1</igx-list-header>
    <igx-list-item>項目 1</igx-list-item>
    <igx-list-item>項目 2</igx-list-item>
    <igx-list-item>項目 3</igx-list-item>
    <igx-list-header>ヘッダー 2</igx-list-header>
    <igx-list-item>項目 4</igx-list-item>
    <igx-list-item>項目 5</igx-list-item>
    <igx-list-item>項目 6</igx-list-item>
</igx-list>
```

IgxList の子コンポーネント:

* _Igx-List-Header_ - リスト ヘッダーを表します。子リスト項目をラベルし、説明し、グループ化する非対話型なリスト項目。
* _Igx-List-Item_ - リスト項目を表します。

項目およびヘッダーの両方は `IListChild` を実装します。リストは 3 つの配列を提供します。

* 項目およびヘッダーのすべての子要素を含む配列。
* 項目のみの配列。
* ヘッダーのみの配列。

#### List プロパティ

* `children` - 項目およびヘッダーのすべての `IListChild` コンポーネントの配列。
* `items` - リスト内の項目の配列。
* `headers` - リスト内のヘッダーの配列。
* `allowLeftPanning` - 項目の左パンニングが許可されるかどうかを決定します。
* `allowRightPanning` - 項目の右パンニングが許可されるかどうかを決定します。

#### メソッド

* `addChild` - `IListChild` コンポーネントを子要素配列および項目タイプの配列に追加します。
* `removeChild` - `IListChild` コンポーネントを子要素配列および項目タイプの配列から削除します。

#### イベント

* `onPanStateChange` - パンニング ジェスチャがリスト項目で実行されるときにトリガーされます。
* `onLeftPan` - 左パンニング ジェスチャがリスト項目で実行されるときにトリガーされます。
* `onRightPan` - 右パンニング ジェスチャがリスト項目で実行されるときにトリガーされます。
  <div class="divider--half"></div>

### リスト ヘッダー

_子項目のヘッダーとして使用される非対話型な単一の `item` を表す Igx-List の子コンポーネント。ヘッダーは `IListChild` インターフェイスを実装します。_

#### ヘッダー プロパティ

* `index` - 子配列でヘッダーのインデックス。
  <div class="divider--half"></div>

### リスト項目

_単一の操作可能な単一の項目を表す Igx-List の子コンポーネント。コンテンツがテキストまたは任意の HTML コンテンツに設定できます。項目は `IListChild` インターフェイスを実装します。_

#### 項目プロパティ

* `index` - 子配列で項目のインデックス。
* `hidden` - 項目が表示されるかどうかを決定します。
* `panState` - 項目のパンニング状態を取得します。
* `options` - そのリスト項目の項目スワイプ (パンニング操作) で表示されるオプションを定義します。
  <div class="divider--half"></div>
