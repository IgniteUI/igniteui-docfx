---
title: Layout Manager ディレクティブ
_description: Ignite UI for Angular Layout Manager ディレクティブはさまざまなレスポンシブで移動可能なユーザー インターフェイス スタイルを提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Layout Manager コンポーネント, Angular Layout Manager コントロール
---

## Layout Manager
<p class="highlight">Ignite UI for Angular Layout ディレクティブは、適用されたコンテナーの子要素のレイアウト方向を指定する機能を提供します。レイアウトを垂直方向または水平方向に設定できます。折り返し、両端揃え、および配置も制御できます。</p>
<div class="divider"></div>

### Layout デモ
<div class="sample-container" style="height: 3704px">
    <iframe src='https://{environment:host}/angular-demos/layout' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

### 使用方法
**igxLayout** ディレクティブをコンテナー要素に適用して、子要素のレイアウト方向を指定します。水平方向は `igxLayoutDir="row"` で、垂直方向は `igxLayoutDir="column"` です。

**注**: `igxLayout` ディレクティブはそのコンテナーの**直下**の子のフロー方向に影響します。
<div class="divider--half"></div>

### ネスト
`igxFlex` ディレクティブを `igxLayout` 親内の要素に使用して、特定のフレックスボックス プロパティを制御します。

| 名前   |      型      |  説明 |
|:----------|:-------------:|:------|
| `igxFlexOrder` | number | フレックス コンテナーで要素の配置順序を制御します。デフォルト値は `0` です。 |
| `igxFlexGrow` | number | 項目がフレックス コンテナー内のピアに対して大きくなるかどうかを設定します。デフォルト値は `1` です。 |
| `igxFlexShrink` | number | 項目がフレックス コンテナー内にピアに対して小さくなるかどうかを設定します。デフォルト値は `1` で、負の数は無効です。 |
<div class="divider--half"></div>

### API
| 名前   |      型      |  説明 |
|:----------|:-------------:|:------|
| `igxLayoutDir` |  string | コンテナーの子要素のデフォルト フロー方向を設定します。デフォルト値は `rows` です。 |
| `igxLayoutReverse` |    boolean   | フレックス子要素がフレックス コンテナーに配置される方向を定義します。`true` に設定される場合、`rows` は右から左へ、`columns` は下から上への方向になります。    |
| `igxLayoutWrap` | string | デフォルトで直下の子は単一行に配置されます。`nowrap` のデフォルト値でこの動作を設定します。その他の値は `wrap` および `wrap-reverse` です。|
| `igxLayoutJustify` | string | 主軸での配置を定義します。デフォルト値は開始線の近くに子要素を配置する `flex-start` です。その他の値は `flex-end`、`center`、`space-between`、および `space-around` です。|
| `igxLayoutItemAlign` | string | 現在の行の交差軸に子要素が配置されるデフォルト動作を定義します。デフォルト値は `flex-start` です。その他の値は `flex-end`、`center`、`baseline`、および `stretch` です。 |
