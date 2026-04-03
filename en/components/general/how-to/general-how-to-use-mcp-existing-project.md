---
title: Use Ignite UI CLI MCP in an Existing Angular Project | Ignite UI for Angular | Infragistics
_description: Connect Ignite UI CLI MCP and Ignite UI Theming MCP to an existing Angular project, continue working in the current codebase, and ask documentation and API questions about Ignite UI for Angular components through chat.
_keywords: Angular, Ignite UI for Angular, Infragistics, MCP, Model Context Protocol, Ignite UI CLI MCP, Ignite UI Theming MCP, AI, documentation, API
last_updated: "2025-04-03"
---

<!-- schema: HowTo, Article -->
<!-- cspell:words igniteui mcpservers npx -->

# Use Ignite UI CLI MCP in an Existing Angular Project

Ignite UI CLI MCP and Ignite UI Theming MCP connect to an existing Angular project by adding MCP configuration for your AI client in the project root. Once connected, Ignite UI CLI MCP exposes Ignite UI for Angular CLI tools to the AI assistant — enabling the assistant to add and modify Ignite UI for Angular components, answer documentation questions about component properties, events, and methods, and assist with theming through Ignite UI Theming MCP. No project regeneration or CLI scaffolding is required.

Ignite UI CLI MCP and Ignite UI Theming MCP do not currently support Blazor — Angular, React, and Web Components are supported. Neither server modifies project files autonomously; each exposes tools to the active AI agent session in a supported client. Neither server replaces or removes existing project structure — Ignite UI CLI MCP works with the current codebase as-is. If you do not have an existing Angular project, see [Start from an Empty Folder with Ignite UI CLI MCP for Angular](general-how-to-start-mcp.md) instead.

## Prerequisites

- Node.js installed so `npx` is available in the terminal
- A supported AI client: VS Code with GitHub Copilot, Cursor, Claude Desktop, Claude Code, JetBrains IDEs with AI Assistant, or another MCP-compatible client with STDIO support
- Internet access for `npx` to download the MCP server packages on first run
- An existing Angular project open in the editor or available as the session context

## Step 1: Open the Existing Angular Project

- If you are using an editor-based client, open the existing Angular project folder in that editor.
- If you are using a desktop or chat-first client, make the existing project available as the project context for the session.

Work from the project root throughout this guide.

## Step 2: Create the MCP Configuration File

Create the MCP configuration file in the location that matches your AI client:

| Client | Configuration location |
| --- | --- |
| VS Code | `.vscode/mcp.json` |
| Cursor | `.cursor/mcp.json` |
| Claude Desktop (macOS) | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Claude Desktop (Windows) | `%APPDATA%\Claude\claude_desktop_config.json` |
| Claude Code | `.mcp.json` |
| JetBrains IDEs | **Tools → AI Assistant → Model Context Protocol (MCP)** |
| Other MCP clients | Use the same command and arguments through STDIO configuration |

## Step 3: Add the MCP Server Configuration

Add both MCP servers to the configuration file. Use the JSON structure that matches your AI client.

### VS Code

```json
{
  "servers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli@next", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

### Cursor, Claude Desktop, Claude Code, JetBrains, and Other MCP Clients

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli@next", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

The `igniteui-cli` entry starts Ignite UI CLI MCP, which exposes component management, project modification, and documentation tools. The `igniteui-theming` entry starts Ignite UI Theming MCP, which exposes theme and styling tools.

## Step 4: Load the MCP Servers

Save the configuration file. Your editor or AI client may detect the MCP servers automatically after saving.

If the tools do not appear immediately, reload or reopen the workspace, or restart the client.

## Step 5: Confirm the MCP Tools Are Available

Open chat, agent mode, or the MCP tools view in your AI client and check the available tools. Both MCP servers and their tools should be listed:

- `igniteui-cli`
- `igniteui-theming`

If either server fails to appear, verify that the configuration content matches the examples in Step 3 exactly and that Node.js is installed and available in the terminal.

Client-specific verification steps:

- **VS Code with GitHub Copilot**: open Copilot Chat and switch to **Agent** mode
- **Cursor**: open a new chat session and check the available MCP tools
- **Claude Desktop**: restart the app and look for the MCP indicator in the chat input area
- **Claude Code**: use the `/mcp` command to confirm the server is connected
- **JetBrains IDEs**: review the MCP connection in **Tools → AI Assistant → Model Context Protocol (MCP)**

## Step 6: Continue Working in the Existing Angular Project

With both MCP servers confirmed available, continue in chat and ask the assistant to work with the current Angular project. Ignite UI CLI MCP has access to the project context, so it can inspect the existing structure, add or modify components, and update configuration in the current codebase.

Typical actions in an existing project:

- Review and explain the existing project structure
- Add Ignite UI for Angular components to existing pages
- Modify component configuration and data bindings
- Update theme and styling with Ignite UI Theming MCP
- Refactor or extend existing code

## Step 7: Ask Documentation and API Questions

Ignite UI CLI MCP can answer documentation questions about Ignite UI for Angular components without making any changes to the project. Ask in plain language and continue the conversation based on the answers.

Documentation questions Ignite UI CLI MCP can answer:

- Which component is the right fit for a specific scenario
- How to configure a feature in a specific component
- Which properties, events, or methods a component exposes
- How a specific API member is used and what its accepted values are
- What patterns or examples are recommended for a component

Example questions to ask in chat:

> "What filtering properties does the Angular grid support?"

> "What events does the combo component expose?"

> "Show me the available methods for the date picker."

## Troubleshooting

**`npx` is not recognized**
Node.js is not installed or is not available in the current terminal environment. Install Node.js from [nodejs.org](https://nodejs.org) and verify with `node --version`.

**The MCP tools do not appear after saving the configuration**
Reload the workspace, reopen the editor, or restart the AI client. Some clients require a full restart to detect new MCP configuration files.

**One server fails to start**
Verify that the configuration content matches the examples in Step 3 exactly, including key names (`igniteui-cli`, not `igniteui`) and argument order.

**The assistant cannot locate files in the project**
Start with a prompt that describes the specific file or area of the codebase you want the assistant to work with, rather than asking it to inspect the entire project at once.

## Next Steps

With Ignite UI CLI MCP and Ignite UI Theming MCP connected to the existing Angular project, use chat to build, refactor, and ask product questions:

- Ask the assistant to inspect and explain specific parts of the codebase
- Add or modify Ignite UI for Angular components in the existing app
- Apply theming changes with Ignite UI Theming MCP
- Ask documentation and API questions about any Ignite UI for Angular component

## Related Topics

For an overview of all available MCP setup paths for Angular, see [Angular Ignite UI CLI MCP Overview](general-how-to-mcp-overview.md).

If you want to start from an empty folder instead, see [Start from an Empty Folder with Ignite UI CLI MCP for Angular](general-how-to-start-mcp.md).

If you want to scaffold the Angular project with Ignite UI CLI first and connect MCP after that, see [Create an Angular Project with Ignite UI CLI, then Continue with Ignite UI CLI MCP](general-how-to-start-mcp-cli-project.md).

For more information about AI skills and theming workflows, see [Angular Agent Skills](../../ai/skills.md) and [Ignite UI Theming MCP](../../ai/theming-mcp.md).
