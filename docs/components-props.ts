const rowProps = {
    children: {
      description: "Child components to render inside the row. Can be an explicit list of component IDs or a template for dynamic rendering. (ComponentArrayReference)",
      values: null,
      default: null,
    },
    alignment: {
      description: "Vertical alignment of children within the row.",
      values: ["start", "center", "end", "stretch"],
      default: "stretch"
    },
    distribution: {
      description: "Horizontal distribution of children along the row.",
      values: ["start", "center", "end", "spaceBetween", "spaceAround", "spaceEvenly"],
      default: "start"
    }
  }
  
  const columnProps = {
    children: {
      description: "Child components to render inside the column. Can be an explicit list of component IDs or a template for dynamic rendering. (ComponentArrayReference)",
      values: null,
      default: null,
    },
    alignment: {
      description: "Horizontal alignment of children within the column.",
      values: ["start", "center", "end", "stretch"],
      default: "stretch"
    },
    distribution: {
      description: "Vertical distribution of children along the column.",
      values: ["start", "center", "end", "spaceBetween", "spaceAround", "spaceEvenly"],
      default: "start"
    }
  }
  
  const listProps = {
    children: {
      description: "The collection of items to display in the list, typically used with a template for dynamic data binding.",
      values: null,
      default: null
    }
  }
  
  const cardProps = {
    child: {
      description: "The single child component to render inside the card container.",
      values: null,
      default: null
    }
  }
  
  const textProps = {
    text: {
      description: "The text content to display. Can be a literal string or bound to a data path.",
      values: null,
      default: null
    },
    usageHint: {
      description: "Semantic styling hint for the text.",
      values: ["h1", "h2", "h3", "h4", "h5", "body", "caption", "monospaced"],
      default: "body"
    }
  }
  
  const imageProps = {
    url: {
      description: "The source URL of the image to display.",
      values: null,
      default: null
    },
    fit: {
      description: "How the image should resize to fit its container.",
      values: ["cover", "contain", "fill", "none", "scaleDown"],
      default: "cover"
    },
    usageHint: {
      description: "Semantic context for the image (e.g., avatar, hero).",
      values: ["default", "avatar", "hero"],
      default: "default"
    }
  }
  
  const iconProps = {
    name: {
      description: "The name of the icon to display (e.g., Material Symbols name).",
      values: null,
      default: null
    },
    size: {
      description: "The size category of the icon.",
      values: ["small", "medium", "large"],
      default: "medium"
    }
  }
  
  const videoProps = {
    url: {
      description: "The source URL of the video content.",
      values: null,
      default: null
    }
  }
  
  const audioPlayerProps = {
    url: {
      description: "The source URL of the audio content.",
      values: null,
      default: null
    },
    description: {
      description: "Accessibility text or label describing the audio content.",
      values: null,
      default: null
    }
  }
  
  const dividerProps = {
    axis: {
      description: "The orientation of the divider line.",
      values: ["horizontal", "vertical"],
      default: "horizontal"
    }
  }
  
  const buttonProps = {
    child: {
      description: "The component ID to render inside the button (usually a Text or Icon component).",
      values: null,
      default: null
    },
    action: {
      description: "The action to trigger when the button is clicked.",
      values: null,
      default: null
    },
    primary: {
      description: "Whether this button represents the primary action in its context.",
      values: [true, false],
      default: false
    }
  }
  
  const textFieldProps = {
    label: {
      description: "The label text displayed for the input field.",
      values: null,
      default: null
    },
    text: {
      description: "The current value of the text field, usually data-bound.",
      values: null,
      default: null
    },
    textFieldType: {
      description: "The type of text input expected.",
      values: ["shortText", "longText", "number", "date", "obscured"],
      default: "shortText"
    }
  }
  
  const checkBoxProps = {
    label: {
      description: "The text label displayed next to the checkbox.",
      values: null,
      default: null
    },
    value: {
      description: "The boolean state of the checkbox (checked/unchecked).",
      values: [true, false],
      default: false
    }
  }
  
  const sliderProps = {
    label: {
      description: "The label text for the slider.",
      values: null,
      default: null
    },
    value: {
      description: "The current numeric value of the slider.",
      values: null,
      default: null
    },
    min: {
      description: "The minimum allowed value.",
      values: null,
      default: 0
    },
    max: {
      description: "The maximum allowed value.",
      values: null,
      default: 100
    },
    step: {
      description: "The increment size between valid values.",
      values: null,
      default: 1
    }
  }
  
  const dateTimeInputProps = {
    label: {
      description: "The label text for the date/time picker.",
      values: null,
      default: null
    },
    value: {
      description: "The selected date/time value (ISO 8601 string).",
      values: null,
      default: null
    }
  }
  
  const multipleChoiceProps = {
    label: {
      description: "The label for the choice group.",
      values: null,
      default: null
    },
    value: {
      description: "The selected value(s).",
      values: null,
      default: null
    },
    items: {
      description: "The list of options to choose from. Each item typically has a label and a value.",
      values: null,
      default: []
    },
    multiSelect: {
      description: "Allows selecting multiple options if set to true.",
      values: [true, false],
      default: false
    }
  }
  
  const tabsProps = {
    tabItems: {
      description: "An array of tab definitions, where each tab contains a title and a child component ID.",
      values: null,
      default: []
    }
  }
  
  const modalProps = {
    entryPointChild: {
      description: "The component ID that triggers the opening of the modal (e.g., a Button).",
      values: null,
      default: null
    },
    contentChild: {
      description: "The component ID to render inside the modal dialog.",
      values: null,
      default: null
    }
  }