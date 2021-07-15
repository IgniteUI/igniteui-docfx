---
title: Angular チャート タイトル | データ可視化ツール | インフラジスティックス
_description: タイトル付きの Infragistics Ignite UI for Angular チャートをお試しください!
_keywords: Angular charts, chart titles, titles, Ignite UI for Angular, Infragistics, Angular チャート, チャート タイトル, タイトル, インフラジスティックス
mentionedTypes: ["CategoryChart"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular チャート タイトルとサブタイトル

このトピックでは、Angular チャートのチャート タイトルおよびサブタイトル機能の使用に関する情報を提供します。

## 例

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-with-titles"
           alt="Angular チャート同期の例"
           github-src="charts/category-chart/line-chart-with-titles">
</code-view>

<div class="divider--half"></div>

## 概要

チャート コントロールのタイトルおよびサブタイトルの機能は、チャート コントロールの上セクションに情報を追加できます。

チャート コントロールにタイトルまたはサブタイトルを追加すると、タイトルとサブタイトルの情報に応じて、チャートの内容が自動的にサイズ変更されます。

| プロパティ名                                                                                                                                                               | プロパティ タイプ           | 説明                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | -------------------------------------------------- |
| [`ChartTitle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/charttitle.html)                                             | 文字列                 | タイトルのテキスト コンテンツ                                    |
| [`titleTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#titletextcolor)             | 文字列                 | タイトルのテキスト色                                         |
| [`titleAlignment`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#titlealignment)             | HorizontalAlignment | タイトルの水平方向の配置                                       |
| [`titleTextStyle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#titletextstyle)             | 文字列                 | タイトルのフォント スタイル。例えば、Italic Bold 8pt Times New Roman |
| [`titleTopMargin`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#titletopmargin)             | 数                   | タイトルの上マージン。                                        |
| [`titleLeftMargin`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#titleleftmargin)           | 数                   | タイトルの左マージン。                                        |
| [`titleRightMargin`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#titlerightmargin)         | 数                   | タイトルの右マージン。                                        |
| [`titleBottomMargin`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#titlebottommargin)       | 数                   | タイトルの下マージン。                                        |
| [`subtitle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#subtitle)                         | 文字列                 | タイトルのテキスト コンテンツ                                    |
| [`subtitleTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#subtitletextcolor)       | 文字列                 | タイトルのテキスト色                                         |
| [`subtitleAlignment`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#subtitlealignment)       | HorizontalAlignment | タイトルの水平方向の配置                                       |
| [`subtitleTextStyle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#subtitletextstyle)       | 文字列                 | タイトルのフォント スタイル。例えば、Italic Bold 8pt Times New Roman |
| [`subtitleTopMargin`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#subtitletopmargin)       | 数                   | タイトルの上マージン。                                        |
| [`subtitleLeftMargin`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#subtitleleftmargin)     | 数                   | タイトルの左マージン。                                        |
| [`subtitleRightMargin`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#subtitlerightmargin)   | 数                   | タイトルの右マージン。                                        |
| [`subtitleBottomMargin`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#subtitlebottommargin) | 数                   | タイトルの下マージン。                                        |
