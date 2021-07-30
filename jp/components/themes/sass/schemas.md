---
title: スキーマ
_description: Ignite UI for Angular テーマ化するスキーマを使用して、コンポーネント テーマのレシピを作成できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ 
_language: ja
---

# スキーマ
<p class="highlight">スキーマはシンプルかつ宣言的にコンポーネント テーマで使用する可能性のあるすべてのプロパティをリストします。</p>

<div class="divider--half"></div>

## 概要
スキーマはレシピのようなものです。JSON 同様のシンプルな Sass マップでテーマが使用するすべてのプロパティを定義します。プロパティは、カラー、エレベーション レベル、丸みなどでテーマが使用するあらゆる項目が `schema (スキーマ)` として記述され、グローバルまたはコンポーネント テーマへ渡します。コンポーネント スキーマは既存コンポーネント スキーマを拡張し、そのプロパティをオーバーライドします。

**スキーマは、コンポーネントのデフォルト テーマ プロパティを、CSS スタイル ルールまたは CSS 変数を複製しない方法で変更する場合に使用します。**

Light Material Avatar スキーマを見てみましょう。

```scss
$_light-avatar: extend(
    $_square-shape-avatar,
    (
        background: (
            igx-color: ('grays', 400)
        ),

        color: (
            igx-color: ('grays', 800)
        ),
    )
);
```

上記の例では、コンポーネント スキーマが [Avatar テーマ]({environment:sassApiUrl}/index.html#function-igx-avatar-theme) で使用するプロパティを定義します。具体的なカラー パレット マップを参照せずに、アバターが使用するカラーを指定します。

以下は、`background` プロパティの例です。アバターのテーマにデフォルトの背景を指示します。 

`background` は任意の値に割り当てることができ、CSS `background-color` プロパティに割り当てることができます。上記サンプルのように `background` にマップを割り当てることができます。マップを `background` プロパティに割り当てる場合、マップはキー名として関数 (`igx-color` など) を含む必要があり、また関数にはキー値として引数を含む必要があります。後ほど avatar テーマを作成する際に値を解決するために必要となります。ユーザーが avatar テーマへ渡す可能性のあるパレットがわからないため、後でパレットが確定したときに解決できるようになります。

その他の関数や引数をキー値ペアとして `background` マップに追加ます。たとえば、通常 rgba で表される `grays` パレットの `400` カラー バリアントの HEX 値を解決するために `to-opaque` 関数を介して `igx-color: ('grays', 400)` から解決済みの結果を実行してもよいでしょう。 

次に追加する場合にスキーマを変更する方法を示します。

```scss
$_light-avatar: (
    icon-background: (
        igx-color: ('grays', 400),
        to-opaque: #fff
    ),
    ...
);
```

`igx-color` 関数の結果が最初の引数として `to-opaque` 関数に自動的に渡されます。`to-opaque` は背景色の 2 番目の引数を受け取るため、値として提供します。関数が追加の引数を受け取らない場合、空のリスト `()` を値として割り当てる必要があります。

<div class="divider--half"></div>

## スキーマの拡張
上記例からもわかるように、スキーマはシンプルなマップのためプロパティをオーバーライドして拡張できます。デフォルトの material avatar schema は、その他すべてのプロパティを手動でコピーせずに `background` を変更することもできます。`extend` 関数を使用して簡単に行うことができます。

```scss
$my-avatar-schema: extend($_light-avatar, (
    background: limegreen
));
```

これで `$my-avatar-schema` の値には `$_light-avatar` のすべてのプロパティが含まれますが、`background` の値は `limegreen` になります。

## スキーマの使用
以上がコンポーネント スキーマの概要と作成方法です。次に Sass プロジェクトのスキーマの使用方法について説明します。 

各コンポーネント スキーマはすべてのコンポーネントのグローバル スキーマとバンドルされます。`$_light-avatar` スキーマはグローバル `$light-material-schema` マップの一部です。`$light-material-schema` はコンポーネント スキーマをコンポーネント名にマップします。`$light-material-schema` は以下のようになります。

```scss
$light-material-schema: (
    igx-avatar: $_light-avatar,
    igx-badge: $_light-badge,
    ...
);
```

`$light-material-schema` 全体を `igx-theme` ミックスインに渡すことができます。たとえば、デフォルト コンポーネント スキーマを置き換えて `$light-material-schema` を変更したい場合、Avatar コンポーネントは以下を使用します。

```scss
$my-light-schema: extend($light-material-schema, (
    igx-avatar: $my-avatar-schema
));
```

これでグローバル テーマ ミックスインにすべて渡すことができます。

```scss
// styles.scss
@include igx-theme(
    $schema: $my-light-schema,
    $palette: $default-palette
);
```

グローバル テーマのアバターの背景にライムグリーン カラーが使用されます。

ボタン スキーマなどコンポーネント スキーマの一部には丸み付けのためのプロパティ定義があります。すべてのボタンでデフォルトの丸みを変更できます。

最後に各コンポーネント テーマで上記で作成したスキーマを使用する方法について説明します。

```scss
$my-avatar-theme: igx-avatar-theme(
    $schema: $my-avatar-schema
);
```

## まとめ

スキーマはテーマ関数およびミックスインと比較してテーマ ライブラリの知識が必要ですが、生成された CSS のサイズを増やすことなくコンポーネン トテーマを宣言できます。スキーマを使用するもう 1 つの利点は、シンプルな Sass マップであるため、再利用および拡張が可能なことです。コンポーネント スキーマを組み合わせてグローバル テーマ スキーマを作成できます。

内部でスキーマを使用してバリアントを作成し、結果として Material、Bootstrap、Fluent、および Indigo のテーマがあらかじめバンドルされています。

## API の概要
* [Avatar スキーマ]({environment:sassApiUrl}/index.html#variable-_light-avatar)
* [Light コンポーネント スキーマ]({environment:sassApiUrl}/index.html#variable-light-schema)
* [Dark コンポーネント スキーマ]({environment:sassApiUrl}/index.html#variable-dark-schema)
* [Global テーマ]({environment:sassApiUrl}/index.html#mixin-igx-theme)
* [Avatar テーマ]({environment:sassApiUrl}/index.html#function-igx-avatar-theme)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)