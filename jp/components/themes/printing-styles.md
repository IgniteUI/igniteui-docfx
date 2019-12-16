---
title: 印刷レイアウト
_description: 
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ、印刷スタイル、@media 印刷 
_language: ja
---

## 印刷スタイル
<p class="highlight">Ignite UI for Angular テーマ エンジンは、いくつかのデフォルトの印刷スタイルがあり、紙に印刷する際に最低限必要なスタイルが含まれます。</p>
<div class="divider--half"></div>

### 印刷スタイルを使用する方法

印刷スタイルを使用するには、コンポーネントが印刷用に選択したドキュメントと同じサイズであることを確認する必要があります。サイズが合わない場合は見切れが発生します。 

たとえば、A4 形式をで`グリッド`を `印刷`する場合は、`グリッド`のサイズが印刷用のドキュメントと同じであることを確認してください。`幅と高さ`は、印刷する形式のサイズと一致する必要があります。また、スクロールバーを表示せずに、データがそのビューに合わせてください。

スクロールバーを必要とする大量のデータがある場合、現在ビューにあるデータが印刷され、その他はすべて印刷されません。

`デフォルト`では、`印刷スタイル`は`コンパイル済み CSS` に組み込まれます。
印刷しない場合は、出力される CSS のサイズを減らすために、印刷スタイルをなしにすることをお勧めします。
 
これには、テーマ `SCSS` ファイルを変更できます。
```scss
// Import the IgniteUI themes library first.
@import '~igniteui-angular/lib/core/styles/themes/index';

// Turn the print styles off by setting the $print-layout param to false.
igx-core($print-layout: false)

// Add the theme and the palette.
@include igx-theme($default-palette);
```

注: カラフルなグリッドを使用する場合でも、できる限りきれいでシンプルにするため、またインクの使用を減らすために、白黒のグリッドが表示されます。グリッド上のすべてのクリック可能な要素は、紙では意味をなさないため、省略されます。

ページに他の要素があり、それらを印刷ドキュメントに表示しない場合は、提供する `.igx-no-print` クラスを追加できます。このクラスは、ターゲット要素の表示プロパティを `display: none` に設定することにより、要素が印刷ページから省略されるようになり、`Data Grid` を印刷仕様にできます。
