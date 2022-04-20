---
title: Ignite UI for Angular フレームワーク & 機能 | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular によって ARIA アクセシビリティと文字表記の方向を設定する方法を説明します。
_keywords: aria support, aria サポート, a11y, ignite ui for angular, infragistics, インフラジスティックス
---

# 右から左 (RTL) サポート

## RTL サポート

フレームワークのほとんどのコンポーネントで、新しい RTL テーマを介した**右から左 (RTL)** がサポートされます。To switch to RTL direction you have to just set the `dir` attribute of the html or the body tag to `rtl`.

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
> Currently the `Igx-Grid` component only has partial(visual) RTL support.

> [!NOTE]
> ### Breaking Changes in version 13.2.0
> All RTL specific stylesheets have been removed, therefore, users who have previously used *-rtl.css specific themes must switch to the regular theme files.
