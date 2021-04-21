---
title: エレベーション (シャドウ)
_description:
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---

# エレベーション

<p class="highlight">エレベーションは、Document Object Model ツリーの間に境界線を描画し、機能のカプセル化を向上します。Ignite UI for Angular でのエレベーションの実装は、[マテリアル デザインでのエレベーション](https://material.io/design/environment/elevation.html#elevation-in-material-design)をモデルにしています。</p>
<div class="divider"></div>

## 概要

Ignite UI for Angular のシャドウは、25 のエレベーション レベルに基づいて深い階層を確立するためのマテリアル デザイン ガイドラインに厳密に従います。シャドウ キャストのサイズは、エレベーション レベル番号に関連しています。エレベーション レベル番号が高いほど、シャドウが大きくなります。Ignite UI for Angular のエレベーションは、CSS 変数として公開されます。各変数は、3 つの `box-shadows` のセットを格納します。これらの `box-shadows` は、実世界で観察されるシャドウのプロパティである本影、半影、および影要素を表します。

Ignite UI for Angular のマテリアル テーマのさまざまなコンポーネントで使用される静止エレベーションと、それに対応する CSS 変数名のリストを次に示します:

| コンポーネント                                       | デフォルト エレベーション レベル | CSS 変数      |
| ----------------------------------------------- | ----------------------- | ------------------ |
| banner、button、toast                           | 0                       | --igx-elevation-0  |
| badge、carousel buttons、search input           | 1                       | --igx-elevation-1  |
| button group、raised button、card、grid、switch | 2                       | --igx-elevation-2  |
| navbar、snackbar                                | 4                       | --igx-elevation-4  |
| floating action button                         | 6                       | --igx-elevation-6  |
| bottom navigation、ghost chip、dropdown         | 8                       | --igx-elevation-8  |
| navdrawer                                       | 16                      | --igx-elevation-16 |
| dialog                                          | 24                      | --igx-elevation-24 |

`CSS 変数`列からわかるように、すべてのエレベーションは `--igx-elevation-[level]` の形式で定義されています。前述のように、エレベーション レベル番号は 0 から 24 (両端を含む) になります。

## 使用方法

独自のコンポーネントでエレベーションの使用を開始するには、目的のレベルの変数名を参照するだけです。

```css
.floaty-element {
  box-shadow: var(--igx-elevation-6);
}
```

既存のコンポーネント テーマのエレベーションを変更することも同様に機能します。

```css
[igxButton="raised"] {
  --resting-shadow: var(--igx-elevation-4);
  --hover-shadow: var(--igx-elevation-12);
  --focus-shadow: var(--igx-elevation-12);
}
```

各コンポーネント テーマのドキュメントには、各状態で使用されるデフォルトのエレベーションがリストされています。エレベーションがリストされていない場合、コンポーネントは事前定義されたエレベーション レベルを使用しません。

## エレベーションの定義

デフォルトのエレベーションの更新は、パレットの色の更新と同じように機能します。変数を別の値に再割り当てするだけです。エレベーションの場合、値が `box-shadow` であることを確認してください。

例:

```css
/* styles.css */
:root {
    --igx-elevation-1: 0 2px 6px 0 rgba(0, 0, 0, .18);
    --igx-elevation-2: 0 3px 9px 0 rgba(0, 0, 0, .24);
}
```

これで、エレベーション レベル 1 と 2 を使用するすべてのコンポーネントのシャドウが更新されます。

### シャドウイング
特定のスコープに対してのみ、グローバルに設定されたエレベーションをシャドーイングすることができます。ボタン コンポーネントが静止状態にエレベーション レベル 2 を使用することはすでに見た通りです。レベル 2 は、カードおよびグリッド コンポーネントでも使用されます。したがって、3 つすべてのシャドウを変更するには、次のことを行う必要があります:
```css
[igxButton="raised"],
igx-grid,
igx-card {
    --igx-elevation-2: 0 3px 9px 0 rgba(0, 0, 0, .24);
}
```
これにより、エンボス加工されたボタンとカードの `--resting-shadow`、およびグリッドの `--grid-shadow` が、`-igx-elevation-2` に割り当てられた値に設定されます。

エレベーションは、Sass を使用して、より強力な方法で作成および使用することもできます。詳細については、以下の関連トピックを参照してください。

## その他のリソース

関連トピック:

- [Sass エレベーション](./sass/elevations.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
