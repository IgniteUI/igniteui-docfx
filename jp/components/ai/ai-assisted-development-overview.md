---
title: Ignite UI による AI 支援開発 - Ignite UI for Angular
_description: Ignite UI は、Agent Skills、Ignite UI CLI MCP サーバー、および Theming MCP サーバーを提供し、Angular、React、Web Components 全体で正しいコンポーネント API、インポートパス、デザイントークンを AI コーディングアシスタントに提供します。
_keywords: Angular, Ignite UI for Angular, Infragistics, MCP, Model Context Protocol, Ignite UI CLI MCP, Ignite UI Theming MCP, Agent Skills, AI, エージェント, Copilot, Cursor
_language: ja
_license: MIT
_canonicalLink: "{environment:dvUrl}/components/ai-assisted-development-overview"
namespace: Infragistics.Controls
mentionedTypes: []
---

# Ignite UI による AI 支援開発

Ignite UI for Angular、React、および Web Components は、Agent Skills、Ignite UI CLI MCP サーバー、Ignite UI Theming MCP サーバーという 3 つの要素からなる AI ツールチェーンを提供し、正しいコンポーネント API、インポートパス、デザイントークンを AI コーディングアシスタントに提供します。Agent Skills は、特定のプロジェクトで AI エージェントが Ignite UI を使用する方法を定義する、開発者向けのインストラクションパッケージです。CLI MCP サーバーは、Model Context Protocol を通じてアクティブな AI エージェントセッションに Ignite UI CLI のスキャフォールディング、コンポーネント管理、ドキュメントツールを公開します。Theming MCP サーバーは、クエリ可能なエージェントコンテキストとして Ignite UI Theming Engine を公開します。これらの 3 つのコンポーネントはすべて、GitHub Copilot、Cursor、Claude Desktop、Claude Code、および JetBrains AI Assistant と連携します。

現在のところ、この AI ツールチェーンの CLI MCP および Agent Skills レイヤーは Blazor をサポートしていません。Blazor に対応しているのは Theming MCP のみとなります。CLI MCP サーバーは STDIO トランスポートが必要となります。HTTP ベースの MCP クライアントはサポートされていません。Agent Skills および CLI MCP サーバーはプロジェクトファイルを自律的に変更しません。これらはアクティブな AI エージェントにツールとインストラクションを公開し、エージェントが開発者のプロンプトに応じて動作します。

## AI ツールチェーンの概要

Ignite UI の AI ツールチェーンは、独立して使用可能な 3 つのレイヤーで構成されています。各レイヤーは単独で有効化でき、また組み合わせて使用するよう設計されています。

| レイヤー                                    | 提供内容                                                                                                    | 所有者         | 対応フレームワーク                             |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------- |
| Agent Skills                            | 開発者管理のインストラクションパッケージ: インポートパス、コンポーネントパターン、デシジョンフロー、プロジェクト規約 | 開発者    | Angular、React、Web Components、Blazor |
| CLI MCP サーバー (`igniteui-cli`)         | MCP を経由したプロジェクトスキャフォールディング、コンポーネント管理、ドキュメントおよび API クエリ                            | Infragistics | Angular、React、Web Components         |
| Theming MCP サーバー (`igniteui-theming`) | MCP を経由したデザイントークン、パレット定義、CSS 変数生成、テーミングクエリ                        | Infragistics | Angular、React、Web Components、Blazor |

CLI MCP サーバーと Theming MCP サーバーはどちらも `npx` で起動し、STDIO トランスポートを通じて MCP 互換クライアントに接続します。Agent Skills はプロジェクト内に配置されたローカルファイルで、AI クライアントがディスクから読み込みます。

## Agent Skills

Agent Skills は、特定のフレームワークで Ignite UI を使用する方法を AI コーディングアシスタントに正確に伝える、構造化された開発者管理パッケージです。Skill パッケージには、コンポーネントパターン、インポートパス、デシジョンフローを含む `SKILL.md` インストラクションファイル、Ignite UI の公式ドキュメントへの参照、スキーマファイルやダイアグラムなどのアセットを含めることができます。AI クライアントで Skill が有効になっている場合、エージェントは古い API シグネチャやインポートパスを参照している可能性がある一般的なトレーニングデータに頼るのではなく、Skill の内容に従って動作します。

Ignite UI は、Angular、React、Web Components、および Blazor 向けの専用 Skill パッケージを提供しています。Skill パッケージは開発者が管理します。チームの規約に合わせて `SKILL.md` を編集し、プロジェクト固有のパターンを追加し、内部デザインシステムを参照し、コードベースと並べてパッケージをバージョン管理してください。

完全なセットアップ手順と IDE の設定については、[Agent Skills](skills.md) を参照してください。

## CLI MCP サーバー

Ignite UI CLI MCP サーバー (`igniteui-cli`) は、Infragistics が管理する MCP サーバーで、アクティブな AI エージェントセッションに Ignite UI CLI のスキャフォールディングとドキュメントツールを公開します。接続すると、AI アシスタントはチャットセッションの自然言語プロンプトを通じて、Angular、React、または Web Components プロジェクトの作成、Ignite UI コンポーネントの追加と変更、ドキュメントおよび API の質問への回答を行えます。

CLI MCP サーバーはグローバルインストールなしに `npx` で起動します:

```bash
npx -y igniteui-cli mcp
```

サーバーは、VS Code with GitHub Copilot、Cursor、Claude Desktop、Claude Code、JetBrains AI Assistant、および STDIO トランスポートをサポートする他の MCP 互換クライアントに接続します。設定形式はクライアントによって異なります。以下の CLI MCP セットアップガイドを参照してください。

CLI MCP サーバーは Blazor をサポートしていません。また、コードを自律的に生成することはありません。開発者のプロンプトに応じて AI エージェントがツールを呼び出す形式で動作します。

## Theming MCP サーバー

Ignite UI Theming MCP サーバー (`igniteui-theming`) は、Ignite UI Theming Engine をクエリ可能なエージェントコンテキストとして公開する独立した MCP サーバーです。デザイントークンアクセス、パレット定義、CSS カスタムプロパティ生成、および WCAG AA コントラスト検証をカバーします。CLI MCP サーバーとはアーキテクチャ上独立しており、プロジェクトのスキャフォールディングツールを公開せずにテーマ関連ツールのみを AI エージェントに提供する目的で単独で接続することもできます。

Theming MCP サーバーは `npx` で起動します:

```bash
npx -y igniteui-theming igniteui-theming-mcp
```

Theming MCP サーバーは Angular、React、Web Components、および Blazor をサポートしています。Ignite UI のリリースごとに更新されるため、エージェントは常に最新のトークン情報に基づいて動作します。

設定の詳細については、[Theming MCP](theming-mcp.md) を参照してください。

## サポートされている AI クライアント

CLI MCP サーバーと Theming MCP サーバーは、STDIO トランスポートによる MCP をサポートする任意のエディターまたは AI クライアントで動作します。

| クライアント                      | 設定方法                                                              |
| --------------------------- | ----------------------------------------------------------------- |
| VS Code with GitHub Copilot | `.vscode/mcp.json`                                                |
| Cursor                      | `.cursor/mcp.json`                                                |
| Claude Desktop (macOS)      | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Claude Desktop (Windows)    | `%APPDATA%\Claude\claude_desktop_config.json`                     |
| Claude Code                 | `.mcp.json` または Claude Code MCP CLI コマンド                    |
| JetBrains AI Assistant      | **Tools → AI Assistant → Model Context Protocol (MCP)**           |

Agent Skills は、`.github/copilot-instructions.md` を通じた GitHub Copilot、`.cursorrules` または `.cursor/rules/` を通じた Cursor、`.windsurfrules` を通じた Windsurf、プロジェクトレベルのプロンプト設定を通じた JetBrains AI Assistant と互換性があります。

## AI ツールチェーンのセットアップ

Ignite UI AI ツールチェーンのセットアップは 3 つのステップで行います: フレームワークの Agent Skills の読み込み、CLI MCP サーバーの接続、およびオプションで Theming MCP サーバーの接続です。3 つのステップはそれぞれ独立しており、任意の順序で実行できます。

### ステップ 1 - Agent Skills の読み込み

フレームワーク用の Ignite UI Skill パッケージをプロジェクトのエージェント探索パスにコピーします。Skill パッケージは `node_modules/igniteui-{framework}/skills/` のライブラリに同梱されています。ご利用のクライアント向けの永続的なセットアップ手順を使用して、IDE と連携させます。

完全なセットアップについては、[Agent Skills](skills.md) を参照してください。

### ステップ 2 - CLI MCP サーバーの接続

AI クライアントの設定ファイルに `igniteui-cli` MCP サーバーエントリを追加します。各クライアントに対応した JSON 形式を使用してください:

**VS Code (`.vscode/mcp.json`):**

```json
{
  "servers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    }
  }
}
```

**Cursor、Claude Desktop、Claude Code、JetBrains、およびその他の MCP クライアント:**

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    }
  }
}
```

VS Code、GitHub、Cursor、Claude Desktop、Claude Code、JetBrains、およびその他の MCP 対応クライアントを含む完全なセットアップガイドについては、[CLI MCP](cli-mcp.md) を参照してください。

### ステップ 3 - Theming MCP サーバーの接続 (任意)

`igniteui-cli` と並べて、同じ MCP 設定ファイルに `igniteui-theming` のエントリを追加します:

```json
{
  "servers": {
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

設定の詳細とテーマのワークフローについては、[Theming MCP](theming-mcp.md) を参照してください。

## その他のリソース

- [Agent Skills](./skills.md)
- [Ignite UI CLI MCP](./cli-mcp.md)
- [Ignite UI Theming MCP](./theming-mcp.md)

<div class="divider--half"></div>

コミュニティは活発に活動しており、新しいアイデアを歓迎しています。

- [Ignite UI for Angular **フォーラム**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
