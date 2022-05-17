---
title: Ignite UI for Angular フレームワーク & 機能 | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular によって ARIA アクセシビリティと文字表記の方向を設定する方法を説明します。
_keywords: aria support, aria サポート, a11y, ignite ui for angular, infragistics, インフラジスティックス
---

# 右から左 (RTL) サポート

## RTL サポート

フレームワークのほとんどのコンポーネントで、新しい RTL テーマを介した**右から左 (RTL)** がサポートされます。RTL 方向に切り替えるには、html の `dir` 属性または body タグを `rtl` に設定する必要があります。

例:

```html
<html dir="rtl">
...
</html>
```

または

```html
<html>
  <body dir="ltr">
  ...
  </body>
</html>
```

> [!NOTE]
> 現在、`Igx-Grid` コンポーネントは部分的 (視覚的) RTL のみをサポートしています。

> [!NOTE]
> ### バージョン 13.2.0 での重大な変更
> RTL 固有のスタイル シートはすべて削除されているため、以前に *-rtl.css 固有のテーマを使用したことがあるユーザーは、通常のテーマ ファイルに切り替える必要があります。
