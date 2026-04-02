---
title: Use Ignite UI CLI MCP in an Existing Project | Ignite UI for Angular | Infragistics
_description: Learn how to add Ignite UI MCP to an existing Angular project, verify the tools, continue working in the current codebase, and use MCP to ask documentation and API questions.
_keywords: Angular, Ignite UI for Angular, Infragistics, MCP, Model Context Protocol, Ignite UI MCP, Ignite UI CLI MCP, Ignite UI Theming MCP, AI, documentation, API
---

# Use MCP in an Existing Project

This guide shows how to connect Ignite UI MCP to an Angular project that already exists and continue working in the current codebase.

It also shows how to use MCP in chat to ask documentation questions about Angular components, configuration, and available API members.

Before you begin, make sure Node.js is installed, `npx` can run, and you have internet access for package resolution.

Supported AI clients can include VS Code with GitHub Copilot, Cursor, Claude Desktop, Claude Code, JetBrains IDEs with AI Assistant, and other MCP-compatible clients.

Editor-based clients usually open the project folder directly. Desktop or chat-first clients may use external MCP configuration and then work with the project context you provide.

## Step 1: Open the Existing Angular Project

If you are using an editor-based client, open the existing Angular project there.

If you are using a desktop or chat-first client, keep the existing Angular project available as the project context you want to work with.

Make sure you are working in the project root.

## Step 2: Create the MCP Configuration File

Create the MCP configuration file that matches your AI client.

Use one of these locations:

- **VS Code**: `.vscode/mcp.json`
- **Cursor**: `.cursor/mcp.json`
- **Claude Desktop**:
  **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
  **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **Claude Code**: `.mcp.json`
- **JetBrains IDEs**: configure MCP in **Tools -> AI Assistant -> Model Context Protocol (MCP)**
- **Other MCP clients**: use the same command and arguments with the client's STDIO MCP configuration

What you should see next: the MCP configuration file is present in the correct location for your AI client.

## Step 3: Add the MCP Configuration

Add both Ignite UI MCP servers to that configuration.

Use the JSON structure that matches your AI client.

### VS Code

```json
{
  "servers": {
    "igniteui": {
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
    "igniteui": {
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

- `igniteui` starts the Ignite UI CLI MCP server
- `igniteui-theming` starts the Ignite UI theming MCP server

## Step 4: Let the MCP Servers Load

After you save the MCP configuration, your editor or AI client may detect the MCP servers automatically.

If the tools do not appear immediately, reload or reopen the workspace or restart the client.

What you should see next: the workspace recognizes the MCP configuration and starts loading the available tools.

## Step 5: Confirm the MCP Tools Are Available

Open chat, agent mode, or the MCP tools view in your AI client.

Check the available MCP tools.

You should see the Ignite UI MCP servers and their tools, including:

- `igniteui`
- `igniteui-theming`

What you should see next: both MCP servers are available and there are no startup errors.

Client-specific checks:

- **VS Code with GitHub Copilot**: open Copilot Chat and switch to **Agent** mode
- **Cursor**: open a new chat session and check the available MCP tools
- **Claude Desktop**: restart the app and look for the MCP indicator in the chat input area
- **Claude Code**: use the `/mcp` command to confirm the server is connected
- **JetBrains IDEs**: review the MCP connection in **Tools -> AI Assistant -> Model Context Protocol (MCP)**

## Step 6: Continue Working in the Existing Angular Project

Once the tools are available, continue in chat and ask the assistant to work with the current Angular project instead of creating a new one.

Typical next actions include:

- reviewing the existing project structure
- adding or changing pages and features
- updating theme and styling
- refining code in the current codebase

## Step 7: Use MCP to Ask Documentation Questions

You can also use chat to ask questions about Angular documentation while working in the existing project.

The `igniteui` MCP server can help you continue working in the current codebase, make project and component changes, and ask documentation questions about Angular components, features, and API members.

Typical documentation questions include:

- which component fits a specific scenario
- how to configure a feature in a component
- which properties, events, or methods are available
- how a specific API member is used
- what examples or patterns are recommended for a component

You can ask in plain language and continue the conversation based on the answers the assistant gives you.

Example questions:

> _"What properties does the grid support for filtering?"_

> _"What events does this component expose?"_

> _"Show me the available methods for this component."_

## Troubleshooting

**`npx` does not work**

Make sure Node.js is installed and available in the terminal.

**The MCP tools do not appear**

Reload the workspace, reopen the editor, or restart the AI client after creating the MCP configuration file.

**One server does not start**

Check that the MCP configuration content matches the example exactly.

**The project is very large**

Start with a narrow request so the assistant can inspect the relevant area of the codebase first.

## Next Steps

Now that MCP is connected to your existing Angular project, you can use chat to continue building, refactoring, and asking product questions without starting from scratch.

Typical next actions include:

- asking the assistant to inspect and explain the current codebase
- changing features in the existing app
- asking for component and API guidance from the documentation
- applying theming changes with the theming MCP server

## Related Topics

If you want to start from a completely empty folder instead, see [Start from an Empty Folder with MCP](general-how-to-start-mcp.md).

If you want to create the Angular project with Ignite UI CLI first and continue after that, see [Create a Project with Ignite UI CLI, then Continue with MCP](general-how-to-start-mcp-cli-project.md).

If you want a short overview of the available MCP setup paths first, see [Ignite UI MCP Overview](general-how-to-mcp-overview.md).

For more information about AI skills and theming workflows, see [Angular Agent Skills](../../ai/skills.md) and [Ignite UI Theming MCP](../../ai/theming-mcp.md).
