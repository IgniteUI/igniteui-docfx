---
title: Shadows スタイルガイド
_description:
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---

### Shadows

Shadows は、Document Object Model ツリーの間に境界線を描画し、機能のカプセル化を向上します。

### エレベーション

<div class="elevations row">
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-1">
            <p class="variable">
                $elevate-1
            </p>
            <p class="css">
                box-shadow:
                <br>0 1px 3px 0 palette(gray, 400),
                <br>0 1px 1px 0 palette(gray, 300),
                <br>0 2px 1px -1px palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-2">
            <p class="variable">
                $elevate-2
            </p>
            <p class="css">
                box-shadow:
                <br>0 1px 5px 0 palette(gray, 400),
                <br>0 2px 2px 0 palette(gray, 300),
                <br>0 3px 1px -2px palette(gray, 200);
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-3">
            <p class="variable">
                $elevate-3
            </p>
            <p class="css">
                box-shadow:
                <br>0 1px 8px 0 palette(gray, 400),
                <br>0 3px 4px 0 palette(gray, 300),
                <br>0 3px 3px -2px palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-4">
            <p class="variable">
                $elevate-4
            </p>
            <p class="css">
                box-shadow:
                <br>0 2px 4px -1px palette(gray, 400),
                <br>0 4px 5px 0 palette(gray, 300),
                <br>0 1px 10px 0 palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-6">
            <p class="variable">
                $elevate-6
            </p>
            <p class="css">
                box-shadow:
                <br>0 3px 5px -1px palette(gray, 400),
                <br>0 6px 10px 0 palette(gray, 300),
                <br>0 1px 18px 0 palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-8">
            <p class="variable">
                $elevate-8
            </p>
            <p class="css">
                box-shadow:
                <br>0 5px 5px -3px palette(gray, 400),
                <br>0 8px 10px 1px palette(gray, 300),
                <br>0 3px 14px 2px palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-9">
            <p class="variable">
                $elevate-9
            </p>
            <p class="css">
                box-shadow:
                <br>0 5px 6px -3px palette(gray, 400),
                <br>0 9px 12px 1px palette(gray, 300),
                <br>0 3px 16px 2px palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-12">
            <p class="variable">
                $elevate-12
            </p>
            <p class="css">
                box-shadow:
                <br>0 7px 8px -4px palette(gray, 400),
                <br>0 12px 17px 2px palette(gray, 300),
                <br>0 5px 22px 4px palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-16">
            <p class="variable">
                $elevate-16
            </p>
            <p class="css">
                box-shadow:
                <br>0 8px 10px -5px palette(gray, 400),
                <br>0 16px 24px 2px palette(gray, 300),
                <br>0 6px 30px 5px palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-24">
            <p class="variable">
                $elevate-24
            </p>
            <p class="css">
                box-shadow:
                <br>0 11px 15px -7px palette(gray, 400),
                <br>0 24px 38px 3px palette(gray, 300),
                <br>0 9px 46px 8px palette(gray, 200)
            </p>
        </div>
    </div>
</div>

### 使用方法

<div class="elevate-image">
    <img width="100%" height="100%" src="../images/whatismaterial_3d_elevation2.jpg" alt="Shadows Usage">
</div>

###エレベーション設定

以下は、エレベーションを設定する方法を示します。

シャドウを設定する要素を定義します。

```html
...
<div class="wrapper">
    <div class="elevation-sample">
        <p class="variable">
            $elevate-8
        </p>
        <pre class="formatter">
            <code class ="css">
                box-shadow:
                0 5px 5px -3px palette(gray, 400),
                0 8px 10px 1px palette(gray, 300),
                0 3px 14px 2px palette(gray, 200)
            </code>
                These are the default elevation colors            
        </pre>
    </div>
</div>
```

次に要素の igx-elevation]({environment:sassApiUrl}/index.html#function-igx-elevation) を scss クラスに適用します。

```scss
    // First you have to import the utilities!
@import '~igniteui-angular/lib/core/styles/themes/utilities';

    //Apply the elevation level
.elevation-sample {
    box-shadow: igx-elevation($elevations, 8);
}
```
以下は上記コード スニペットの結果です。

<div class="sample-container loading" style="height: 350px">
    <iframe id="shadows-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/shadows-sample" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="shadows-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz</button>
</div>
<div class="divider--half"></div>

シャドウの色とエレベーション レベルを変更します。

 ```scss
...
//Define the 3 elevation colors
$color-1: #99BFAA;
$color-2: #5C868D;
$color-3: #5C3D46; 

//Define the shadow elevations
$shadow-elevations: igx-elevations($color-1, $color-2, $color-3);

//Apply the custom shadow elevations and change the elevation level 
.elevation-sample {
    box-shadow: igx-elevation($shadow-elevations, 24);
}
```

結果は以下のようになります。

<div class="sample-container loading" style="height: 350px">
    <iframe id="shadows-sample-2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/shadows-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="shadows-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz</button>
</div>
<div class="divider--half"></div>


### API リファレンス

* [IGX-ELEVATION]({environment:sassApiUrl}/idnex.html#function-igx-elevation)
* [IGX-ELEVATIONS]({environment:sassApiUrl}/idnex.html#function-igx-elevations)
