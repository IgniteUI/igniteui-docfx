---
titleAngular Accordion コンポーネント - Ignite UI for Angular
_description: Ignite UI for Angular Accordion コンポーネントを使用すると、垂直方向に縮小可能な展開パネルのコレクションを表示できます。無料でお試しください。
_keywords: angular accordion, angular accordion コンポーネント、angular アコーディオン、angular アコーディオン コンポーネント、angular アコーディオンの例、ignite ui for angular、UI コントロール、infragistics、インフラジスティックス
_language: ja
---

# Angular Accordion コンポーネントの概要

Angular Accordion コンポーネントは、単一のコンテナーに表示された複数の縮小可能なパネル間を移動できます。Accordion は、基になるパネルの展開状態を制御するキーボード ナビゲーションと API を提供します。

## Angular Accordion の例
この基本的な Angular Accordion の例では、`igx-accrodion` とその[拡張パネル]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)を定義する方法を紹介します。このサンプルは、2 種類の展開動作も示します。切り替えボタンは [singleBranchExpand]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#singlebranchexpand) プロパティを設定し、一度に展開する単一ブランチと複数ブランチを切り替えます。

<code-view style="height:460px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/accordion-sample-1" alt="Angular Avatar の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Accordion で作業を開始

Ignite UI for Angular Accordion コンポーネントを初期化するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[*はじめに*](general/getting-started.md) トピックををご覧ください。

次に、app.module ファイルに  `IgxAccordionModule` をインポートします。 

```typescript
// app.module.ts

...
import { IgxAccordionModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxAccordionModule],
    ...
})
export class AppModule {}
```
Accordion モジュールをインポート後、`igx-accordion` とそのパネルの基本設定を開始します。

## 使用方法

[IgxAccordionComponent]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) の各セクションは、[展開パネル]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)を使用して定義されます。
パネルには [disabled]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html#disabled)、[collapsed]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html#collapsed)、および [animationSettings]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html#animationsettings) プロパティがあり、要件に応じてパネルの状態を構成できます。 

### Accordion の宣言

Accordion は、その内部で宣言されたすべての [`igx-expansion-panel]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) をラップします。

```html
<igx-accordion #accordion [singleBranchExpand]="true">
     <igx-expansion-panel>
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 1</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            Content Panel 1
        </igx-expansion-panel-body>
    </igx-expansion-panel>
    <igx-expansion-panel>
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 2</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            Content Panel 2
        </igx-expansion-panel-body>
    </igx-expansion-panel>
</igx-accordion>
```

[panels]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#panels) アクセサーを使用して、`igx-accordion` のすべての子の[拡張パネル]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)を含むコレクションへの参照を取得できます。

```typescript
@ViewChild('accordion', { static: true })
public accordion!: IgxAccordionComponent;

this.accordion.panels;
```

上記で示したように、[singleBranchExpand]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#singlebranchexpand) プロパティを使用すると、一度に 1 つまたは複数のパネルを展開できるかどうかを設定できます。

アニメーションに関して、2 つのオプションがあります。最初に、Accordion コンポーネントの `animationSettings` プロパティを設定します。

```typescript
import { useAnimation } from "@angular/animations";
import { slideInLeft, slideOutRight } from 'igniteui-angular';
@Component({
    ...
})
export class AccordionComponent {
    public animationSettingsCustom = {
        closeAnimation: useAnimation(slideOutRight, {
            params: {
                duration: "100ms",
                toPosition: "translateX(25px)"
            }
        }),
        openAnimation: useAnimation(slideInLeft, {
            params: {
                duration: "500ms",
                fromPosition: "translateX(-15px)",
                startOpacity: 0.1
            }
        })
    };
}
```

[**ビルトイン アニメーション スイート**]({environment:sassApiUrl}/index.html#animations)の [`slideInLeft`]({environment:sassApiUrl}/index.html#mixin-slide-in-left) アニメーションと [`slideOutRight`]({environment:sassApiUrl}/index.html#mixin-slide-out-right) アニメーションを使用して、コンテンツを折りたたむとコンポーネントのコンテンツが左側から表示され、右側に消えるようにします。アニメーションのパラメーターをオーバーライドして、アニメーションをさらにカスタマイズします。

以下のスニペットは、アニメーション設定をコンポーネントに渡す方法を示しています。

```html
<igx-accordion #accordion [animationSettings]="animationSettingsCustom">
    ...
</igx-accordion>
```

> 注: [IgxAccordionComponent]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) のアニメーションを無効にするには、`animationSettings` を `null` に設定します。

または、各[拡張パネル]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)の [animationSettings]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html#animationsettings) 入力を設定することもできます。

```html
<igx-accordion #accordion [singleBranchExpand]="true">
     <igx-expansion-panel [animationSettings]="slideLeftRightSettings">
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 1</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            Content Panel 1
        </igx-expansion-panel-body>
    </igx-expansion-panel>
    <igx-expansion-panel [animationSettings]="slideTopBottomSettings">
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 2</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            Content Panel 2
        </igx-expansion-panel-body>
    </igx-expansion-panel>
</igx-accordion>
```
[collapseAll]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#collapseall) および [expandAll]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#expandall) メソッドを使用すると、[IgxAccordion]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) のすべての [IgxExpansionPanel]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) をプログラムでそれぞれ縮小および展開できます。

> 注: [singleBranchExpand]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#singlebranchexpand) プロパティが *true* に設定されている場合、[expandAll]({environment:angularApiUrl}/classes/igxaccordioncomponent.html#expandall) メソッドを呼び出すと、最後の[パネル]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)のみが展開されます。

### Angular Accordion テンプレート化の例
以下のサンプルは、[IgxExpansionPanel]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) の組み込みテンプレート機能を使用して詳細なフィルタリング オプションを実装する方法を示しています。

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/accordion-sample-3" alt="Angular Accoridon の例">
</code-view>

<div class="divider--half"></div>

### ネストされた Angular Accoridon のシナリオ
以下の例では、この一般的なアプリケーション シナリオを説明するために、複雑な FAQ セクションを作成します。サンプルでネストされた [IgxAccordionComponent]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) は、[展開パネル]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)の本体内に [Accordion]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) を追加することによって実現されます。

```html
<igx-accordion #accordion>
     <igx-expansion-panel>
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 1</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            <igx-accordion #childAccordion>
                <igx-expansion-panel>
                    <igx-expansion-panel-header>
                        <igx-expansion-panel-title>Title Nested Panel 1</igx-expansion-panel-title>
                    </igx-expansion-panel-header>
                    <igx-expansion-panel-body>
                        Content Nested Panel 1
                    </igx-expansion-panel-body>
                </igx-expansion-panel>
                ...
            </igx-accordion>
        </igx-expansion-panel-body>
    </igx-expansion-panel>
    ...
</igx-accordion>
```

以下は結果です。

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/accordion-sample-2" alt="Angular Avatar の例">
</code-view>

<div class="divider--half"></div>

## キーボード ナビゲーション
Accordion のキーボード ナビゲーションは、さまざまなキーボード操作をエンドユーザーに提供します。この機能はデフォルトで有効になっており、エンドユーザーは簡単にパネル間を移動できます。
[IgxAccordionComponent]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) ナビゲーションは W3C アクセシビリティ標準に準拠しており、便利に使用できます。

**キーの組み合わせ**

 - <kbd>Tab</kbd> - フォーカスを最初 (フォーカスが Accordion の前にある場合)/次のパネルに移動します
 - <kbd>Shift + Tab</kbd> - フォーカスを最後 (フォーカスが Accordion の後にある場合)/前のパネルに移動します
 - <kbd>下矢印</kbd> - フォーカスを下のパネルに移動します
 - <kbd>上矢印</kbd> - フォーカスを上のパネルに移動します
 - <kbd>Alt + 下矢印</kbd> - Accordion でフォーカスされたパネルを展開します
 - <kbd>Alt + 上矢印</kbd> - Accordion のフォーカスされたパネルを縮小します
 - <kbd>Shift + Alt +下矢印</kbd> - 有効なすべてのパネルを展開します (singleBranchExpand が true に設定されている場合、最後の有効なパネルを展開します)
 - <kbd>Shift + Alt +上矢印</kbd> - 有効なすべてのパネルを縮小します
 - <kbd>Home</kbd> - Accordion の最初の有効なパネルに移動します
 - <kbd>END</kbd> - Accordion の最後の有効なパネルに移動します

## Angular Accordion のスタイル設定
[Accordion]({environment:angularApiUrl}/classes/igxaccordioncomponent.html) は、基になる[パネル]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)のコンテナーとしてのみ機能します。スタイルは、[IgxExpansionPanel トピックのスタイル設定セクション](expansion-panel.html#styling)で説明されているように、パネルのテーマから直接適用できます。

設計上、`igx-accordion` 内に配置される場合、展開されたパネルにマージンが設定されます。変更するために、igx-expansion-panel テーマ内で公開されるプロパティがあります。
テーマ エンジンによって公開される関数を利用するには、スタイル ファイルに `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

[igx-expansion-panel-theme]({environment:sassApiUrl}/index.html#function-igx-expansion-panel-theme) を拡張する新しいテーマを作成し、`$expanded-margin` パラメーターを受け取ります。 
```scss
$custom-panel-theme: igx-expansion-panel-theme(
    $expanded-margin: 0px
);
```
### CSS 変数の使用

最後にコンポーネントのテーマを含めます。
```scss
:host {
    @include igx-css-vars($custom-panel-theme);
}
```

### テーマ オーバーライドの使用

Internet Explorer 11 のコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチが必要です。

コンポーネントが [Emulated](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を`解除する`必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` を `:host` セレクターでラップしてください。 
```scss
:host {
    ::ng-deep {
        @include igx-expansion-panel($custom-panel-theme);    
    }
}
```
## API リファレンス
* [IgxAccordion API]({environment:angularApiUrl}/classes/igxaccordioncomponent.html)
* [IgxExpansionPanel API]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)
* [IgxExpansionPanelHeader API]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html)
* [IgxExpansionPanelBody API]({environment:angularApiUrl}/classes/igxexpansionpanelbodycomponent.html)
* [IgxExpansionPanel スタイル]({environment:sassApiUrl}/index.html#mixin-igx-expansion-panel)


## その他のリソース
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)