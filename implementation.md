# A2UI Next.js Implementation

This is a Next.js implementation of the A2UI (Agent-to-User Interface) library. A2UI is a framework for building dynamic, AI-generated user interfaces that can be rendered and updated in real-time.

## Overview

The A2UI library consists of:

1. **Components**: Reusable UI elements that can be dynamically instantiated based on a schema
2. **Renderer**: A system for rendering the UI schema into actual HTML
3. **Message Processor**: Handles communication between the UI and the AI system
4. **Data Binding**: A mechanism for binding UI elements to data sources

## Components

The following components are implemented:

### Basic Components

- Button
- Card
- Checkbox
- Date Input
- Divider
- Image
- Input
- Modal
- Progress Bar
- Radio Group
- Select
- Slider
- Switch
- Table
- Tabs
- Text
- Text Area

### Layout Components

- Container
- Grid
- Row
- Column

## Usage

### Basic Example

```tsx
import { Renderer } from "@/components/a2ui/renderer";
import { MessageProcessor } from "@/components/a2ui/processor";
import { flightStatus } from "@/docs/examples";

const processor = new MessageProcessor();

function App() {
  // Process the example data
  processMessages(processor, flightStatus);

  return (
    <Renderer
      processor={processor}
      surfaceId="demo-surface"
      component={parseExampleComponents(flightStatus, processor).find(
        (c) => c.id === "root",
    />
  )
}

export default App
```

### AI Prompt

To generate an A2UI schema, you can use the following prompt:

```
Generate an A2UI schema for a [description of your UI]. The schema should include:

1. Components: A list of UI components with their properties and children
2. Data: The data that the UI will display

Example format:
{
  "components": [
    {
      "id": "root",
      "component": {
        "Card": {
          "child": "main-column"
        }
      }
    },
    {
      "id": "main-column",
      "component": {
        "Column": {
          "children": {
            "explicitList": ["header", "content"]
          }
        }
      }
    },
    {
      "id": "header",
      "component": {
        "Text": {
          "text": {
            "literalString": "Welcome to A2UI"
          },
          "usageHint": "h2"
        }
      }
    },
    {
      "id": "content",
      "component": {
        "Text": {
          "text": {
            "path": "/content"
          }
        }
      }
    }
  ],
  "data": {
    "content": "This is a demo of the A2UI library"
  }
}

Please follow this format and include all necessary components and data.
```

## Architecture

### Renderer

The Renderer component is responsible for rendering the UI schema into actual HTML. It takes a processor instance, a surface ID, and a component schema, and returns the rendered UI.

### Message Processor

The Message Processor handles communication between the UI and the AI system. It processes messages, updates the data model, and notifies components of changes.

### Components

Each component is a React component that takes properties from the schema and renders the corresponding UI element. Components can be basic elements like buttons and text fields, or complex elements like tables and modals.

### Data Binding

Data binding is achieved using a path system. Properties in the schema can reference data from the data model using a path like `/user/name`. The message processor resolves these paths and updates the UI when the data changes.

## Examples

The `docs/examples.ts` file contains several examples of A2UI schemas:

- Flight Status: Displays flight information
- Login Form: A simple login form
- Movie Card: Displays movie information

## Development

To run the development server:

```bash
cd nextjs-v1
npm install
npm run dev
```

## License

This implementation is based on the A2UI library from Google, which is licensed under the Apache 2.0 License.
