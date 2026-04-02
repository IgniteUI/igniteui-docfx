---
title: Start from an Empty Folder with Ignite UI CLI MCP | Ignite UI for Angular | Infragistics
_description: Learn how to start from an empty folder, add the Ignite UI MCP configuration, verify the tools, and create a new Angular project through chat.
_keywords: Angular, Ignite UI for Angular, Infragistics, MCP, Model Context Protocol, Ignite UI MCP, Ignite UI CLI MCP, Ignite UI Theming MCP, AI
---

# Start from an Empty Folder with MCP

This guide shows the cleanest MCP-first flow for Angular. You start from a completely empty folder, add the Ignite UI MCP configuration, and then continue in chat to create the Angular project from the beginning.

The goal is simple: get the MCP servers running in a new workspace so the assistant can help you create and shape the Angular project through prompts.

Before you begin, make sure Node.js is installed, `npx` can run, and you have internet access for package resolution.

Supported AI clients can include VS Code with GitHub Copilot, Cursor, Claude Desktop, Claude Code, JetBrains IDEs with AI Assistant, and other MCP-compatible clients.

Editor-based clients usually open the project folder directly. Desktop or chat-first clients may use external MCP configuration and then work with the project context you provide.

## Step 1: Create a New Empty Folder

Create a new empty folder for your Angular project.

If you are using an editor-based client, open that folder there.

If you are using a desktop or chat-first client, keep the folder available as the project context you want to work with.

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

For example, in VS Code your folder structure should look like this:

```text
your-project/
  .vscode/
    mcp.json
```

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

## Step 4: Let the Workspace Load the MCP Servers

After you save the MCP configuration, your editor or AI client may detect the MCP servers automatically.

If the tools do not appear immediately, reload or reopen the workspace or restart the client.

What you should see next: the client recognizes the MCP configuration and starts loading the available tools.

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

## Step 6: Start Prompting to Create the Angular Project

Once the tools are available, continue in chat and ask the assistant to create the Angular project in the current folder.

## Troubleshooting

**`npx` does not work**

Make sure Node.js is installed and available in the terminal.

**The MCP tools do not appear**

Reload the workspace, reopen the editor, or restart the AI client after creating the MCP configuration file.

**One server does not start**

Check that the MCP configuration content matches the example exactly.

**The folder was not empty**

This guide assumes a fresh workspace with no project files yet.

## Next Steps

Now that the MCP servers are available, you can use chat to create the Angular project and continue shaping it.

Typical next actions include:

- creating the initial application in the current folder
- choosing the Angular project structure through prompts
- applying theming changes
- continuing with component, layout, or setup tasks

## Related Topics

This guide covers the empty-folder MCP-first flow for Angular. If you prefer to create the Angular project with Ignite UI CLI first and continue with MCP after that, see the [Create a Project with Ignite UI CLI, then Continue with MCP](general-how-to-start-mcp-cli-project.md) topic.

If you already have an Angular project and want to connect MCP to the existing codebase, see [Use MCP in an Existing Project](general-how-to-use-mcp-existing-project.md).

If you want a short overview of the available MCP setup paths first, see [Ignite UI MCP Overview](general-how-to-mcp-overview.md).

For more information about AI skills and theming workflows, see [Angular Agent Skills](../../ai/skills.md) and [Ignite UI Theming MCP](../../ai/theming-mcp.md).
