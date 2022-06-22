---
title: Ignite UI for Angular フレームワーク & 機能 | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular によって ARIA アクセシビリティと文字表記の方向を設定する方法を説明します。
_keywords: aria support, aria サポート, a11y, ignite ui for angular, infragistics, インフラジスティックス
---

# 右から左 (RTL) サポート

## RTL サポート

フレームワークのほとんどのコンポーネントで、新しい RTL テーマを介した**右から左 (RTL)** がサポートされます。RTL 方向に切り替えるには、html の `dir` 属性または body タグを `rtl` に設定する必要があります。

例:

```scss
// $direction defaults to ltr if it's omitted.
@include igx-core($direction: rtl);
```

現在、以下コンポーネントは RTL 機能の一部をサポートしています。

* Grid (igx-grid)

## RTL の例
このセクションでは、フレームワークのアクセシビリティ (ARIA) サポートと、コンポーネントの`文字表記の方向`の簡単な管理を示します。

<code-view style="height: 600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/scheduling/calendar-rtl-sample" alt="Angular RTL Support Example">
</code-view>



## 右から左方向 (RTL) の有効化

`Ignite UI for Angular` ライブラリは、`html` または `body` タグの `dir` 属性を設定した場合のみ `文字表記の方向`操作の影響を受けます。また、ランタイムの変更は検出されないことに注意してください。

次の例に移動します。

### 手順 1 - 両方のタグで 'dir' 属性を設定します。

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
