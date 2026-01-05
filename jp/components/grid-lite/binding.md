---
title: Angular Grid Lite データ バインディング | Ignite UI for Angular | MIT ライセンス
_description: Angular Grid Lite のデータ バインディング。オープンソースの Angular Grid Lite を使用してアプリを作成できます。軽量でありながら、必要な機能がすべて揃っています。今すぐお試しください。
_keywords: データ バインディング, インフラジスティックス
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_language: ja
---

# Angular Grid Lite データ バインディング

Grid Lite は、データ ソースとしてプレーン オブジェクトの配列を受け入れます。各グリッド行は配列内のデータ レコードをレンダリングしたもので、行のセルは列の設定に基づいて制御されます。

データの変換 (ソートやフィルターなど) を適用する場合、グリッドは元のデータ参照を変更しません。つまり、データ変換は元のソースには反映されません。グリッドはデータ配列内のオブジェクトの変更を追跡しないため、データ オブジェクトを直接変更しても反映されません。

## 実行時にデータ ソースを変更する

コンポーネントは実行時にデータ ソースの変更をサポートします。新しいソースが前のものと異なる「形状」を持つ場合、列の設定も更新する必要があります。

```typescript
grid.data = [...{
  /** レコードが続きます */
}];

// 新しいデータを反映するように列の構成を更新します。
grid.columns = [...];
```

グリッドで **`autoGenerate`** 有効になっている場合、古い列設定をリセットした場合にのみ、新しい列設定を「推測します」。

```typescript
grid.autoGenerate = true;

/** 列定義 */
grid.columns = [];

/** 新しいバインディング後、グリッドはバインドされたデータから列コレクションを推論します。 */
grid.data = [];
```

>[!NOTE]
>Grid Lite のソート/フィルター状態は、この方法でデータ ソースを変更しても保持されます。通常は `clearSort()` または `clearFilter()` を呼び出してリセットすることをお勧めします。

以下のサンプルでは、グリッドに列の自動生成が有効になっています。データ切り替えボタンをクリックすると、列コレクションがリセットされ、新しいデータ ソースがグリッドにバインドされます。

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/data-binding-dynamic/" alt="Angular Grid Lite データ バインディングの例">
</code-view>

<!-- TODO ## API References

* `{ComponentName}`
* `Column`

-->

## その他のリソース

- [列の構成](column-configuration.md)
- [ソート](sorting.md)
- [フィルタリング](filtering.md)
- [テーマ設定とスタイル設定](theming.md)

コミュニティに参加して新しいアイデアをご提案ください。

- [Grid Lite **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
