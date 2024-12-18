---
title: Angular Color Editor | カラー エディター | インフラジスティックス
_description: Color Editor コンポーネントは、アプリケーションの任意のコンポーネントまたは側面の色を変更するための、簡単に構成可能なオプションを提供します。
_keywords: Angular Color Editor, Ignite UI for Angular, Angular カラー エディター, インフラジスティックス
mentionedTypes: ["ColorEditor"]
namespace: Infragistics.Controls
_language: ja
---

# Angular Color Editor (カラー エディター) の概要 (プレビュー)

Ignite UI for Angular Color Editor は軽量のカラー ピッカー コンポーネントです。Color Editor は、ブラッシ アイコンをクリックすると開きます。RGBA 値と 16 進値の両方を、下部にある目的の色から取得できます。これらの値は、3 つのスライダーが変更されると更新されます。中央のボックスは、彩度と明度を調整するために設計されており、隣接する 2つ のスライダーで rgb 値と輝度値を調整できます。RGB は (1～255) の範囲で登録されます。明度は (0～1) の範囲で登録されます。

## Angular Color Editor の例

<code-view style="height: 320px" alt="Angular Color Editor の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/inputs/color-editor/overview"
                                                 github-src="inputs/color-editor/overview">
</code-view>


<div class="divider--half"></div>

## 依存関係

<!-- Angular, WebComponents, React -->

まず、次のコマンドを実行して Ignite UI for Angular をインストールする必要があります:

```cmd
npm install igniteui-angular-core
npm install igniteui-angular-inputs
```

`ColorEditor` を使用する前に、次のモジュールを登録する必要があります:

<!-- end:Angular, WebComponents, React -->

## 使用方法

`ColorEditor` の使用を開始する最も簡単な方法は次のとおりです:

<!-- Angular -->

```html
<igx-color-editor
    name="colorEditor"
    #colorEditor>
    </igx-color-editor>
</div>
```

<!-- end: Angular -->

## イベントにバインド

Color Editor コンポーネントは、次のイベントを発生させます:

*   valueChanged
*   valueChanging

<!-- Angular -->

```ts
@ViewChild("colorEditor", { static: true } )
private colorEditor: IgxColorEditorComponent
public ngAfterViewInit(): void 
{	
    this.colorEditor.valueChanged.subscribe(this.onValueChanged);
}

public onValueChanged = (e: any) => {
    console.log("test");
}
```

<!-- end: Angular -->

<div class="divider--half"></div>

## API リファレンス

*   `ColorEditor`

## その他のリソース

*   [Ignite UI for Angular **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
*   [Ignite UI for Angular **GitHub (英語)**](https://github.com/IgniteUI/igniteui-angular)
