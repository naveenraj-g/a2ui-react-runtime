
// 1. Layout

const row = {
    "id": "row-1",
    "component": {
      "Row": {
        "alignment": "center",
        "distribution": "spaceBetween",
        "children": {
          "explicitList": ["child-1", "child-2"]
        }
      }
    }
  }

  const column = {
    "id": "column-1",
    "component": {
      "Column": {
        "alignment": "stretch",
        "distribution": "start",
        "children": {
          "explicitList": ["header", "content", "footer"]
        }
      }
    }
  }

  const list = {
    "id": "list-1",
    "component": {
      "List": {
        "direction": "vertical",
        "children": {
          "template": {
            "componentId": "list-item",
            "dataBinding": "/items"
          }
        }
      }
    }
  }

  const card = {
    "id": "card-1",
    "component": {
      "Card": {
        "child": "card-content"
      }
    }
  }


  /////////////////////////////////////

  // 2. Content

  const text = {
    "id": "text-1",
    "component": {
      "Text": {
        "text": { "literalString": "Hello, World!" },
        "usageHint": "body"
      }
    }
  }

  const image = {
    "id": "image-1",
    "component": {
      "Image": {
        "url": { "literalString": "https://example.com/photo.jpg" },
        "usageHint": "mediumFeature",
        "fit": "cover"
      }
    }
  }

  const icon = {
    "id": "icon-1",
    "component": {
      "Icon": {
        "name": { "literalString": "check_circle" }
      }
    }
  }

  const video = {
    "id": "video-1",
    "component": {
      "Video": {
        "url": { "literalString": "https://example.com/video.mp4" }
      }
    }
  }

  const audioPlayer = {
    "id": "audio-1",
    "component": {
      "AudioPlayer": {
        "url": { "literalString": "https://example.com/audio.mp3" },
        "description": { "literalString": "Episode 1: Introduction" }
      }
    }
  }

  /////////////////////////////////////////////

  // 3. Input

  const textField = {
    "id": "textfield-1",
    "component": {
      "TextField": {
        "text": { "path": "/user/name" },
        "label": { "literalString": "Your name" },
        "type": "shortText"
      }
    }
  }

  const checkBox = {
    "id": "checkbox-1",
    "component": {
      "CheckBox": {
        "label": { "literalString": "I agree to the terms" },
        "value": { "path": "/form/agreed" }
      }
    }
  }

  const slider = {
    "id": "slider-1",
    "component": {
      "Slider": {
        "value": { "path": "/settings/volume" },
        "minValue": 0,
        "maxValue": 100
      }
    }
  }

  const dateTimeInput = {
    "id": "datetime-1",
    "component": {
      "DateTimeInput": {
        "value": { "path": "/event/startDate" },
        "enableDate": true,
        "enableTime": true,
        "outputFormat": "YYYY-MM-DD HH:mm"
      }
    }
  }

  const multipleChoice = {
    "id": "select-1",
    "component": {
      "MultipleChoice": {
        "selections": { "path": "/form/country" },
        "options": [
          { "label": { "literalString": "United States" }, "value": "US" },
          { "label": { "literalString": "Canada" }, "value": "CA" },
          { "label": { "literalString": "Mexico" }, "value": "MX" }
        ],
        "maxAllowedSelections": 1
      }
    }
  }

  ///////////////////////////////////

  // 4. Navigation

  const button = {
    "id": "button-1",
    "component": {
      "Button": {
        "child": "button-label",
        "action": {
          "name": "submit",
          "context": [
            { "key": "formId", "value": { "literalString": "contact-form" } }
          ]
        }
      }
    }
  }

  const tabs = {
    "id": "tabs-1",
    "component": {
      "Tabs": {
        "tabItems": [
          { "title": { "literalString": "Overview" }, "child": "tab-overview" },
          { "title": { "literalString": "Details" }, "child": "tab-details" },
          { "title": { "literalString": "Reviews" }, "child": "tab-reviews" }
        ]
      }
    }
  }

  const modal = {
    "id": "modal-1",
    "component": {
      "Modal": {
        "entryPointChild": "open-modal-button",
        "contentChild": "modal-content"
      }
    }
  }

  /////////////////////////////////

  // 5. Decoration

  const divider = {
    "id": "divider-1",
    "component": {
      "Divider": {
        "axis": "horizontal",
        "thickness": 1
      }
    }
  }