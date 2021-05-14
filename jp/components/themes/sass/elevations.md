---
title: エレベーション/シャドウ
_description:
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---

# エレベーション
<p class="highlight">エレベーションは、Document Object Model ツリーの間に境界線を描画し、機能のカプセル化を向上します。Sass テーマ ライブラリを使用してエレベーションのセットを作成できます。</p>
<div class="divider"></div>

## 概要
Ignite UI for Angular のエレベーションは、25 要素のマップとして宣言されています。各要素はキーと値のペアであり、キーはエレベーション レベル名 (0..24) であり、値は 3 つの `box-shadow` 宣言のリストです。シャドウの色を定義できる新しいエレベーションのセットを生成できます。さらに、エレベーション マップから特定のエレベーション レベルを取得するための関数を公開します。デフォルトでコンポーネント間で使用されるグローバル変数 `$igx-elevations` を公開します。エレベーションに関連する CSS 変数の[ドキュメント](../elevations.md)を読んでいない場合は、先に進む前にまず読んでおくことをお勧めします。

## 使用方法
次のセクションでは、カスタム エレベーションを作成および取得する方法を示します。

### エレベーションの作成

```scss
// Define the 3 elevation colors
$color-1: rgb(153, 191, 170); // Umbra
$color-2: rgb(92, 134, 141); // Penumbra
$color-3: rgb(92, 61, 70); // Ambient

$my-elevations: igx-elevations(
    $color-1,
    $color-2,
    $color-3
);
```

### エレベーションの取得

エレベーション マップからボックス シャドウのセットを取得するには、最大 2 つの引数 (エレベーション マップと必要なエレベーション レベル ) を `igx-elevation` 関数に渡すことができます。指定されたレベルの 3 つのボックス シャドウのリストを返します。

デフォルトの `$igx-elevations` マップからエレベーションを取得する場合は、最初の引数を省略できます。

```scss
// Returns elevation 1 shadows from $igx-elevations
$elevation-1: igx-elevation($elevation: '1');

// Returns elevation 1 shadows from $my-elevations
$my-elevation-1: igx-elevation(
    $elevations: $my-elevations, 
    $elevation: 1
);
```

### テーマへのエレベーションの渡し

いくつかのテーマ ミックスインを使用すると、エレベーション マップを渡すことができます。特に、`igx-theme` には、すべてのコンポーネント テーマのエレベーションを更新できる `$elevations` という名前のパラメーターがあります。

すべてのコンポーネント テーマにカスタム エレベーションを使用するように強制します。

```scss
@include igx-theme(
    //...
    $elevations: $my-elevations
);
```

これに加えて、エレベーションを完全に無視する/使用しないようにテーマに指示できます。

```scss
@include igx-theme(
    //...
    $elevations: $my-elevations,
    $elevation: false // disables all elevations
);
```

一部のコンポーネント テーマは `$elevations` パラメーターも受け入れて、インスタンスに対してのみカスタム エレベーションを渡すことができます。

たとえば、カード コンポーネントは、カスタム エレベーションの渡しをサポートしています。カスタム エレベーション マップを受け入れるコンポーネントを見つけるには、Sass のドキュメントを参照してください。各コンポーネントは、エレベーション マップの特定のレベルのみを使用します。それらもコンポーネントの Sass ドキュメントにリストされています。

```scss
@include igx-card(igx-card-theme(
    //...
    $elevations: $my-elevations,
));
```

`igx-elevation` 関数はボックス シャドウのリストを返すため、その関数の戻り値を使用して、コンポーネント テーマの特定のエレベーションのみを変更できます。 

```scss
$card-theme: igx-card-theme(
    $resting-shadow: igx-elevation($igx-elevations, 10)
);

@include igx-card($card-theme);
```

これは次のようにコンパイルされます:

```css
.igx-card {
  box-shadow: 
    0 6px 6px -3px rgba(0, 0, 0, 0.26),
    0 10px 14px 1px rgba(0, 0, 0, 0.12),
    0 4px 18px 3px rgba(0, 0, 0, 0.08);
}
```

`igx-elevation` 関数を利用せずに、単純なボック スシャドウを渡すこともできます。
```scss
$card-theme: igx-card-theme(
    $resting-shadow: 0 10px 10px 10px #666
);

.my-card {
  @include igx-card($card-theme);
}
```

上記のスニペットの結果は次のとおりです:

```scss
.my-card .igx-card {
  /* ... */
  box-shadow: 0 10px 10px 10px #666;
}
```
<div class="divider--half"></div>

## カスタム エレベーション 
`igx-elevations` 関数によって生成された[マテリアル デザイン ガイドライン (英語)](https://material.io/design/environment/elevation.html)に準拠していないエレベーション マップを作成することができます。カスタム エレベーション マップに少なくとも 25 のエレベーション レベルが含まれていることを確認してください。テーマが正しく構築することを期待しているエレベーション マップのシグネチャは次のとおりです:

```scss
// Omitted levels 2 through 23 for brevity
$elevations: (
    0: box-shadow(...),
    1: box-shadow(...),
    ...
    24: box-shadow(...)
);
```

## エレベーション スキーマの宣言
エレベーション レベルは、テーマ スキーマの宣言でも使用されます。詳細については、ドキュメントの[スキーマ](./schemas.md) セクションをご覧ください。
<div class="divider--half"></div>

## API リファレンス

* [エレベーションの作成]({environment:sassApiUrl}/index.html#function-igx-elevations)
* [エレベーションの取得]({environment:sassApiUrl}/index.html#function-igx-elevation)


## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
