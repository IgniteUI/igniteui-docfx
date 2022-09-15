---
title: 印刷レイアウト
_description: 
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ、印刷スタイル、@media 印刷 
_language: ja
---

# 印刷スタイル
<p class="highlight">Ignite UI for Angular テーマ エンジンは、デフォルトの印刷スタイルを提供します。これにより、コンポーネントが紙の上で Web ページに表示されるのと同じように見えるようにするための最低限の機能が確保されます。</p>
<div class="divider--half"></div>

## 印刷スタイルを使用する方法

コンポーネントが用紙上で完全に表示されるようにするには、印刷するドキュメントと同じサイズ以下にする必要があります。サイズが合わない場合は見切れが発生します。

`デフォルト`では、`印刷スタイル`は`コンパイル済み CSS` に組み込まれます。
印刷しない場合は、出力される CSS のサイズを減らすために、印刷スタイルをなしにすることをお勧めします。
 
これには、テーマ `SCSS` ファイルを変更できます。
```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';

// Turn the print styles off by setting the $print-layout param to false.
core($print-layout: false)

// Add the theme and the palette.
@include theme($default-palette);
```

**v13.2** 以降、デフォルトではコンポーネントを非表示にしないことにしました。それにより、紙に表示したい部分を決定することができます。   

印刷されたページからコンポーネントの一部または全体を削除するには、印刷したくない要素/コンポーネントにクラス .igx-no-print を追加できます。DOM にアクセスできない場合は、その要素タグまたはクラスを直接ターゲットにして、display: none を設定できます。

`.igx-no-print` を配置するために DOM のボタンにアクセスできないとします。
SCSS を使用してボタンを印刷スタイルで非表示にできます。
```scss
@media print {
    [igxButton] {
        display: none;
    }
}
```

ここで @media print は、内部に記述したスタイルが印刷時にのみ有効になるようにするために使用されます。

白黒で印刷したい場合、任意の要素で `.igx-bw-print` クラスを使用できます。その要素とその要素内のすべてが印刷時に白黒になります。

[`igx-grid`](../../grid/grid.md) を印刷するには、[`Excel へエクスポート`](../../grid/export-excel.md) 機能を使用することをお勧めします。あるいは、グリッドのスクリーンショットを作成して印刷することもできます。
