const flightStatus = {
  components: [
    {
      id: "root",
      component: {
        Card: {
          child: "main-column",
        },
      },
    },
    {
      id: "main-column",
      component: {
        Column: {
          children: {
            explicitList: ["header-row", "route-row", "divider", "times-row"],
          },
          gap: "small",
          alignment: "stretch",
        },
      },
    },
    {
      id: "header-row",
      component: {
        Row: {
          children: {
            explicitList: ["header-left", "date"],
          },
          distribution: "spaceBetween",
          alignment: "center",
        },
      },
    },
    {
      id: "header-left",
      component: {
        Row: {
          children: {
            explicitList: ["flight-indicator", "flight-number"],
          },
          gap: "small",
          alignment: "center",
        },
      },
    },
    {
      id: "flight-indicator",
      component: {
        Icon: {
          name: {
            literalString: "flight",
          },
        },
      },
    },
    {
      id: "flight-number",
      component: {
        Text: {
          text: {
            path: "/flightNumber",
          },
          usageHint: "h3",
        },
      },
    },
    {
      id: "date",
      component: {
        Text: {
          text: {
            path: "/date",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "route-row",
      component: {
        Row: {
          children: {
            explicitList: ["origin", "arrow", "destination"],
          },
          gap: "small",
          alignment: "center",
        },
      },
    },
    {
      id: "origin",
      component: {
        Text: {
          text: {
            path: "/origin",
          },
          usageHint: "h2",
        },
      },
    },
    {
      id: "arrow",
      component: {
        Text: {
          text: {
            literalString: "→",
          },
          usageHint: "h2",
        },
      },
    },
    {
      id: "destination",
      component: {
        Text: {
          text: {
            path: "/destination",
          },
          usageHint: "h2",
        },
      },
    },
    {
      id: "divider",
      component: {
        Divider: {},
      },
    },
    {
      id: "times-row",
      component: {
        Row: {
          children: {
            explicitList: ["departure-col", "status-col", "arrival-col"],
          },
          distribution: "spaceBetween",
        },
      },
    },
    {
      id: "departure-col",
      component: {
        Column: {
          children: {
            explicitList: ["departure-label", "departure-time"],
          },
          alignment: "start",
          gap: "none",
        },
      },
    },
    {
      id: "departure-label",
      component: {
        Text: {
          text: {
            literalString: "Departs",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "departure-time",
      component: {
        Text: {
          text: {
            path: "/departureTime",
          },
          usageHint: "h3",
        },
      },
    },
    {
      id: "status-col",
      component: {
        Column: {
          children: {
            explicitList: ["status-label", "status-value"],
          },
          alignment: "center",
          gap: "none",
        },
      },
    },
    {
      id: "status-label",
      component: {
        Text: {
          text: {
            literalString: "Status",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "status-value",
      component: {
        Text: {
          text: {
            path: "/status",
          },
          usageHint: "body",
        },
      },
    },
    {
      id: "arrival-col",
      component: {
        Column: {
          children: {
            explicitList: ["arrival-label", "arrival-time"],
          },
          alignment: "end",
          gap: "none",
        },
      },
    },
    {
      id: "arrival-label",
      component: {
        Text: {
          text: {
            literalString: "Arrives",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "arrival-time",
      component: {
        Text: {
          text: {
            path: "/arrivalTime",
          },
          usageHint: "h3",
        },
      },
    },
  ],

  data: {
    flightNumber: "OS 87",
    date: "Mon, Dec 15",
    origin: "Vienna",
    destination: "New York",
    departureTime: "10:15 AM",
    status: "On Time",
    arrivalTime: "2:30 PM",
  },
};

const loginForm = {
  components: [
    {
      id: "root",
      component: {
        Card: {
          child: "main-column",
        },
      },
    },
    {
      id: "main-column",
      component: {
        Column: {
          children: {
            explicitList: [
              "header",
              "email-field",
              "password-field",
              "login-btn",
              "divider",
              "signup-text",
            ],
          },
          gap: "medium",
        },
      },
    },
    {
      id: "header",
      component: {
        Column: {
          children: {
            explicitList: ["title", "subtitle"],
          },
          alignment: "center",
        },
      },
    },
    {
      id: "title",
      component: {
        Text: {
          text: {
            literalString: "Welcome back",
          },
          usageHint: "h2",
        },
      },
    },
    {
      id: "subtitle",
      component: {
        Text: {
          text: {
            literalString: "Sign in to your account",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "email-field",
      component: {
        TextField: {
          value: {
            path: "/email",
          },
          placeholder: {
            literalString: "Email address",
          },
          label: {
            literalString: "Email",
          },
          action: "updateEmail",
        },
      },
    },
    {
      id: "password-field",
      component: {
        TextField: {
          value: {
            path: "/password",
          },
          placeholder: {
            literalString: "Password",
          },
          label: {
            literalString: "Password",
          },
          action: "updatePassword",
        },
      },
    },
    {
      id: "login-btn-text",
      component: {
        Text: {
          text: {
            literalString: "Sign in",
          },
        },
      },
    },
    {
      id: "login-btn",
      component: {
        Button: {
          child: "login-btn-text",
          action: "login",
        },
      },
    },
    {
      id: "divider",
      component: {
        Divider: {},
      },
    },
    {
      id: "signup-text",
      component: {
        Row: {
          children: {
            explicitList: ["no-account", "signup-link"],
          },
          distribution: "center",
          gap: "small",
        },
      },
    },
    {
      id: "no-account",
      component: {
        Text: {
          text: {
            literalString: "Don't have an account?",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "signup-link-text",
      component: {
        Text: {
          text: {
            literalString: "Sign up",
          },
        },
      },
    },
    {
      id: "signup-link",
      component: {
        Button: {
          child: "signup-link-text",
          action: "signup",
        },
      },
    },
  ],

  data: {
    email: "",
    password: "",
  },
};

const movieCard = {
  components: [
    {
      id: "root",
      component: {
        Card: {
          child: "main-column",
        },
      },
    },
    {
      id: "main-column",
      component: {
        Column: {
          children: {
            explicitList: ["poster", "content"],
          },
          gap: "small",
        },
      },
    },
    {
      id: "poster",
      component: {
        Image: {
          url: {
            path: "/poster",
          },
          altText: {
            path: "/title",
          },
          fit: "cover",
        },
      },
    },
    {
      id: "content",
      component: {
        Column: {
          children: {
            explicitList: ["title-row", "genre", "rating-row", "runtime"],
          },
          gap: "small",
        },
      },
    },
    {
      id: "title-row",
      component: {
        Row: {
          children: {
            explicitList: ["movie-title", "year"],
          },
          gap: "small",
          alignment: "baseline",
        },
      },
    },
    {
      id: "movie-title",
      component: {
        Text: {
          text: {
            path: "/title",
          },
          usageHint: "h3",
        },
      },
    },
    {
      id: "year",
      component: {
        Text: {
          text: {
            path: "/year",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "genre",
      component: {
        Text: {
          text: {
            path: "/genre",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "rating-row",
      component: {
        Row: {
          children: {
            explicitList: ["star-icon", "rating-value"],
          },
          gap: "small",
          alignment: "center",
        },
      },
    },
    {
      id: "star-icon",
      component: {
        Icon: {
          name: {
            literalString: "star",
          },
        },
      },
    },
    {
      id: "rating-value",
      component: {
        Text: {
          text: {
            path: "/rating",
          },
          usageHint: "body",
        },
      },
    },
    {
      id: "runtime",
      component: {
        Row: {
          children: {
            explicitList: ["time-icon", "runtime-text"],
          },
          gap: "small",
          alignment: "center",
        },
      },
    },
    {
      id: "time-icon",
      component: {
        Icon: {
          name: {
            literalString: "schedule",
          },
        },
      },
    },
    {
      id: "runtime-text",
      component: {
        Text: {
          text: {
            path: "/runtime",
          },
          usageHint: "caption",
        },
      },
    },
  ],

  data: {
    poster:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=200&h=300&fit=crop",
    title: "Interstellar",
    year: "(2014)",
    genre: "Sci-Fi • Adventure • Drama",
    rating: "8.7/10",
    runtime: "2h 49min",
  },
};

export const musicPlayer = {
  components: [
    {
      id: "root",
      component: {
        Card: {
          child: "main-column",
        },
      },
    },
    {
      id: "main-column",
      component: {
        Column: {
          children: {
            explicitList: [
              "album-art",
              "track-info",
              "progress",
              "time-row",
              "controls",
            ],
          },
          gap: "small",
          alignment: "center",
        },
      },
    },
    {
      id: "album-art",
      component: {
        Image: {
          url: {
            path: "/albumArt",
          },
          altText: {
            path: "/album",
          },
          fit: "cover",
        },
      },
    },
    {
      id: "track-info",
      component: {
        Column: {
          children: {
            explicitList: ["song-title", "artist"],
          },
          alignment: "center",
        },
      },
    },
    {
      id: "song-title",
      component: {
        Text: {
          text: {
            path: "/title",
          },
          usageHint: "h3",
        },
      },
    },
    {
      id: "artist",
      component: {
        Text: {
          text: {
            path: "/artist",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "progress",
      component: {
        ProgressBar: {
          progress: {
            path: "/progress",
          },
        },
      },
    },
    {
      id: "time-row",
      component: {
        Row: {
          children: {
            explicitList: ["current-time", "total-time"],
          },
          distribution: "spaceBetween",
        },
      },
    },
    {
      id: "current-time",
      component: {
        Text: {
          text: {
            path: "/currentTime",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "total-time",
      component: {
        Text: {
          text: {
            path: "/totalTime",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "controls",
      component: {
        Row: {
          children: {
            explicitList: ["prev-btn", "play-btn", "next-btn"],
          },
          distribution: "center",
          gap: "medium",
        },
      },
    },
    {
      id: "prev-btn-text",
      component: {
        Text: {
          text: {
            literalString: "⏮",
          },
        },
      },
    },
    {
      id: "prev-btn",
      component: {
        Button: {
          child: "prev-btn-text",
          action: "previous",
        },
      },
    },
    {
      id: "play-btn-text",
      component: {
        Text: {
          text: {
            path: "/playIcon",
          },
        },
      },
    },
    {
      id: "play-btn",
      component: {
        Button: {
          child: "play-btn-text",
          action: "playPause",
        },
      },
    },
    {
      id: "next-btn-text",
      component: {
        Text: {
          text: {
            literalString: "⏭",
          },
        },
      },
    },
    {
      id: "next-btn",
      component: {
        Button: {
          child: "next-btn-text",
          action: "next",
        },
      },
    },
  ],

  data: {
    albumArt:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    progress: 0.45,
    currentTime: "1:48",
    totalTime: "4:22",
    playIcon: "⏸",
  },
};

export const emailCompose = {
  components: [
    {
      id: "root",
      component: {
        Card: {
          child: "main-column",
        },
      },
    },
    {
      id: "main-column",
      component: {
        Column: {
          children: {
            explicitList: [
              "from-row",
              "to-row",
              "subject-row",
              "divider",
              "message",
              "actions",
            ],
          },
          gap: "small",
        },
      },
    },
    {
      id: "from-row",
      component: {
        Row: {
          children: {
            explicitList: ["from-label", "from-value"],
          },
          gap: "medium",
          alignment: "center",
        },
      },
    },
    {
      id: "from-label",
      component: {
        Text: {
          text: {
            literalString: "FROM",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "from-value",
      component: {
        Text: {
          text: {
            path: "/from",
          },
          usageHint: "body",
        },
      },
    },
    {
      id: "to-row",
      component: {
        Row: {
          children: {
            explicitList: ["to-label", "to-value"],
          },
          gap: "medium",
          alignment: "center",
        },
      },
    },
    {
      id: "to-label",
      component: {
        Text: {
          text: {
            literalString: "TO",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "to-value",
      component: {
        Text: {
          text: {
            path: "/to",
          },
          usageHint: "body",
        },
      },
    },
    {
      id: "subject-row",
      component: {
        Row: {
          children: {
            explicitList: ["subject-label", "subject-value"],
          },
          gap: "medium",
          alignment: "center",
        },
      },
    },
    {
      id: "subject-label",
      component: {
        Text: {
          text: {
            literalString: "SUBJECT",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "subject-value",
      component: {
        Text: {
          text: {
            path: "/subject",
          },
          usageHint: "body",
        },
      },
    },
    {
      id: "divider",
      component: {
        Divider: {},
      },
    },
    {
      id: "message",
      component: {
        Column: {
          children: {
            explicitList: ["greeting", "body-text", "closing", "signature"],
          },
          gap: "small",
        },
      },
    },
    {
      id: "greeting",
      component: {
        Text: {
          text: {
            path: "/greeting",
          },
          usageHint: "body",
        },
      },
    },
    {
      id: "body-text",
      component: {
        Text: {
          text: {
            path: "/body",
          },
          usageHint: "body",
        },
      },
    },
    {
      id: "closing",
      component: {
        Text: {
          text: {
            path: "/closing",
          },
          usageHint: "body",
        },
      },
    },
    {
      id: "signature",
      component: {
        Text: {
          text: {
            path: "/signature",
          },
          usageHint: "body",
        },
      },
    },
    {
      id: "actions",
      component: {
        Row: {
          children: {
            explicitList: ["send-btn", "discard-btn"],
          },
          gap: "small",
        },
      },
    },
    {
      id: "send-btn-text",
      component: {
        Text: {
          text: {
            literalString: "Send email",
          },
        },
      },
    },
    {
      id: "send-btn",
      component: {
        Button: {
          child: "send-btn-text",
          action: "send",
        },
      },
    },
    {
      id: "discard-btn-text",
      component: {
        Text: {
          text: {
            literalString: "Discard",
          },
        },
      },
    },
    {
      id: "discard-btn",
      component: {
        Button: {
          child: "discard-btn-text",
          action: "discard",
        },
      },
    },
  ],

  data: {
    from: "alex@acme.com",
    to: "jordan@acme.com",
    subject: "Q4 Revenue Forecast",
    greeting: "Hi Jordan,",
    body: "Following up on our call. Please review the attached Q4 forecast and let me know if you have questions before the board meeting.",
    closing: "Best,",
    signature: "Alex",
  },
};

export const coffeeOrder = {
  components: [
    {
      id: "root",
      component: {
        Card: {
          child: "main-column",
        },
      },
    },
    {
      id: "main-column",
      component: {
        Column: {
          children: {
            explicitList: ["header", "items", "divider", "totals", "actions"],
          },
          gap: "medium",
        },
      },
    },
    {
      id: "header",
      component: {
        Row: {
          children: {
            explicitList: ["coffee-icon", "store-name"],
          },
          gap: "small",
          alignment: "center",
        },
      },
    },
    {
      id: "coffee-icon",
      component: {
        Icon: {
          name: {
            literalString: "local_cafe",
          },
        },
      },
    },
    {
      id: "store-name",
      component: {
        Text: {
          text: {
            path: "/storeName",
          },
          usageHint: "h3",
        },
      },
    },
    {
      id: "items",
      component: {
        Column: {
          children: {
            explicitList: ["item1", "item2"],
          },
          gap: "small",
        },
      },
    },
    {
      id: "item1",
      component: {
        Row: {
          children: {
            explicitList: ["item1-details", "item1-price"],
          },
          distribution: "spaceBetween",
          alignment: "start",
        },
      },
    },
    {
      id: "item1-details",
      component: {
        Column: {
          children: {
            explicitList: ["item1-name", "item1-size"],
          },
        },
      },
    },
    {
      id: "item1-name",
      component: {
        Text: {
          text: {
            path: "/item1/name",
          },
          usageHint: "body",
        },
      },
    },
    {
      id: "item1-size",
      component: {
        Text: {
          text: {
            path: "/item1/size",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "item1-price",
      component: {
        Text: {
          text: {
            path: "/item1/price",
          },
          usageHint: "body",
        },
      },
    },
    {
      id: "item2",
      component: {
        Row: {
          children: {
            explicitList: ["item2-details", "item2-price"],
          },
          distribution: "spaceBetween",
          alignment: "start",
        },
      },
    },
    {
      id: "item2-details",
      component: {
        Column: {
          children: {
            explicitList: ["item2-name", "item2-size"],
          },
        },
      },
    },
    {
      id: "item2-name",
      component: {
        Text: {
          text: {
            path: "/item2/name",
          },
          usageHint: "body",
        },
      },
    },
    {
      id: "item2-size",
      component: {
        Text: {
          text: {
            path: "/item2/size",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "item2-price",
      component: {
        Text: {
          text: {
            path: "/item2/price",
          },
          usageHint: "body",
        },
      },
    },
    {
      id: "divider",
      component: {
        Divider: {},
      },
    },
    {
      id: "totals",
      component: {
        Column: {
          children: {
            explicitList: ["subtotal-row", "tax-row", "total-row"],
          },
          gap: "small",
        },
      },
    },
    {
      id: "subtotal-row",
      component: {
        Row: {
          children: {
            explicitList: ["subtotal-label", "subtotal-value"],
          },
          distribution: "spaceBetween",
        },
      },
    },
    {
      id: "subtotal-label",
      component: {
        Text: {
          text: {
            literalString: "Subtotal",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "subtotal-value",
      component: {
        Text: {
          text: {
            path: "/subtotal",
          },
          usageHint: "body",
        },
      },
    },
    {
      id: "tax-row",
      component: {
        Row: {
          children: {
            explicitList: ["tax-label", "tax-value"],
          },
          distribution: "spaceBetween",
        },
      },
    },
    {
      id: "tax-label",
      component: {
        Text: {
          text: {
            literalString: "Tax",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "tax-value",
      component: {
        Text: {
          text: {
            path: "/tax",
          },
          usageHint: "body",
        },
      },
    },
    {
      id: "total-row",
      component: {
        Row: {
          children: {
            explicitList: ["total-label", "total-value"],
          },
          distribution: "spaceBetween",
        },
      },
    },
    {
      id: "total-label",
      component: {
        Text: {
          text: {
            literalString: "Total",
          },
          usageHint: "h4",
        },
      },
    },
    {
      id: "total-value",
      component: {
        Text: {
          text: {
            path: "/total",
          },
          usageHint: "h4",
        },
      },
    },
    {
      id: "actions",
      component: {
        Row: {
          children: {
            explicitList: ["purchase-btn", "add-btn"],
          },
          gap: "small",
        },
      },
    },
    {
      id: "purchase-btn-text",
      component: {
        Text: {
          text: {
            literalString: "Purchase",
          },
        },
      },
    },
    {
      id: "purchase-btn",
      component: {
        Button: {
          child: "purchase-btn-text",
          action: "purchase",
        },
      },
    },
    {
      id: "add-btn-text",
      component: {
        Text: {
          text: {
            literalString: "Add to cart",
          },
        },
      },
    },
    {
      id: "add-btn",
      component: {
        Button: {
          child: "add-btn-text",
          action: "add_to_cart",
        },
      },
    },
  ],
  data: {
    storeName: "Sunrise Coffee",
    item1: {
      name: "Oat Milk Latte",
      size: "Grande, Extra Shot",
      price: "$6.45",
    },
    item2: {
      name: "Chocolate Croissant",
      size: "Warmed",
      price: "$4.25",
    },
    subtotal: "$10.70",
    tax: "$0.96",
    total: "$11.66",
  },
};

export const weather = {
  components: [
    {
      id: "root",
      component: {
        Card: {
          child: "main-column",
        },
      },
    },
    {
      id: "main-column",
      component: {
        Column: {
          children: {
            explicitList: [
              "temp-row",
              "location",
              "description",
              "forecast-row",
            ],
          },
          gap: "small",
          alignment: "center",
        },
      },
    },
    {
      id: "temp-row",
      component: {
        Row: {
          children: {
            explicitList: ["temp-high", "temp-low"],
          },
          gap: "small",
          alignment: "baseline",
        },
      },
    },
    {
      id: "temp-high",
      component: {
        Text: {
          text: {
            path: "/tempHigh",
          },
          usageHint: "h1",
        },
      },
    },
    {
      id: "temp-low",
      component: {
        Text: {
          text: {
            path: "/tempLow",
          },
          usageHint: "h2",
        },
      },
    },
    {
      id: "location",
      component: {
        Text: {
          text: {
            path: "/location",
          },
          usageHint: "h3",
        },
      },
    },
    {
      id: "description",
      component: {
        Text: {
          text: {
            path: "/description",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "forecast-row",
      component: {
        Row: {
          children: {
            explicitList: ["day1", "day2", "day3", "day4", "day5"],
          },
          distribution: "spaceAround",
          gap: "small",
        },
      },
    },
    {
      id: "day1",
      component: {
        Column: {
          children: {
            explicitList: ["day1-icon", "day1-temp"],
          },
          alignment: "center",
        },
      },
    },
    {
      id: "day1-icon",
      component: {
        Text: {
          text: {
            path: "/forecast/0/icon",
          },
          usageHint: "h3",
        },
      },
    },
    {
      id: "day1-temp",
      component: {
        Text: {
          text: {
            path: "/forecast/0/temp",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "day2",
      component: {
        Column: {
          children: {
            explicitList: ["day2-icon", "day2-temp"],
          },
          alignment: "center",
        },
      },
    },
    {
      id: "day2-icon",
      component: {
        Text: {
          text: {
            path: "/forecast/1/icon",
          },
          usageHint: "h3",
        },
      },
    },
    {
      id: "day2-temp",
      component: {
        Text: {
          text: {
            path: "/forecast/1/temp",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "day3",
      component: {
        Column: {
          children: {
            explicitList: ["day3-icon", "day3-temp"],
          },
          alignment: "center",
        },
      },
    },
    {
      id: "day3-icon",
      component: {
        Text: {
          text: {
            path: "/forecast/2/icon",
          },
          usageHint: "h3",
        },
      },
    },
    {
      id: "day3-temp",
      component: {
        Text: {
          text: {
            path: "/forecast/2/temp",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "day4",
      component: {
        Column: {
          children: {
            explicitList: ["day4-icon", "day4-temp"],
          },
          alignment: "center",
        },
      },
    },
    {
      id: "day4-icon",
      component: {
        Text: {
          text: {
            path: "/forecast/3/icon",
          },
          usageHint: "h3",
        },
      },
    },
    {
      id: "day4-temp",
      component: {
        Text: {
          text: {
            path: "/forecast/3/temp",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "day5",
      component: {
        Column: {
          children: {
            explicitList: ["day5-icon", "day5-temp"],
          },
          alignment: "center",
        },
      },
    },
    {
      id: "day5-icon",
      component: {
        Text: {
          text: {
            path: "/forecast/4/icon",
          },
          usageHint: "h3",
        },
      },
    },
    {
      id: "day5-temp",
      component: {
        Text: {
          text: {
            path: "/forecast/4/temp",
          },
          usageHint: "caption",
        },
      },
    },
  ],
  data: {
    tempHigh: "72°",
    tempLow: "58°",
    location: "Austin, TX",
    description: "Clear skies with light breeze",
    forecast: [
      {
        icon: "☀️",
        temp: "74°",
      },
      {
        icon: "☀️",
        temp: "76°",
      },
      {
        icon: "⛅",
        temp: "71°",
      },
      {
        icon: "☀️",
        temp: "73°",
      },
      {
        icon: "☀️",
        temp: "75°",
      },
    ],
  },
};

export const userProfile = {
  components: [
    {
      id: "root",
      component: {
        Card: {
          child: "main-column",
        },
      },
    },
    {
      id: "main-column",
      component: {
        Column: {
          children: {
            explicitList: ["header", "info", "bio", "stats-row", "follow-btn"],
          },
          gap: "medium",
          alignment: "center",
        },
      },
    },
    {
      id: "header",
      component: {
        Image: {
          url: {
            path: "/avatar",
          },
          altText: {
            path: "/name",
          },
          fit: "cover",
          usageHint: "avatar",
        },
      },
    },
    {
      id: "info",
      component: {
        Column: {
          children: {
            explicitList: ["name", "username"],
          },
          alignment: "center",
        },
      },
    },
    {
      id: "name",
      component: {
        Text: {
          text: {
            path: "/name",
          },
          usageHint: "h2",
        },
      },
    },
    {
      id: "username",
      component: {
        Text: {
          text: {
            path: "/username",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "bio",
      component: {
        Text: {
          text: {
            path: "/bio",
          },
          usageHint: "body",
        },
      },
    },
    {
      id: "stats-row",
      component: {
        Row: {
          children: {
            explicitList: ["followers-col", "following-col", "posts-col"],
          },
          distribution: "spaceAround",
        },
      },
    },
    {
      id: "followers-col",
      component: {
        Column: {
          children: {
            explicitList: ["followers-count", "followers-label"],
          },
          alignment: "center",
        },
      },
    },
    {
      id: "followers-count",
      component: {
        Text: {
          text: {
            path: "/followers",
          },
          usageHint: "h3",
        },
      },
    },
    {
      id: "followers-label",
      component: {
        Text: {
          text: {
            literalString: "Followers",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "following-col",
      component: {
        Column: {
          children: {
            explicitList: ["following-count", "following-label"],
          },
          alignment: "center",
        },
      },
    },
    {
      id: "following-count",
      component: {
        Text: {
          text: {
            path: "/following",
          },
          usageHint: "h3",
        },
      },
    },
    {
      id: "following-label",
      component: {
        Text: {
          text: {
            literalString: "Following",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "posts-col",
      component: {
        Column: {
          children: {
            explicitList: ["posts-count", "posts-label"],
          },
          alignment: "center",
        },
      },
    },
    {
      id: "posts-count",
      component: {
        Text: {
          text: {
            path: "/posts",
          },
          usageHint: "h3",
        },
      },
    },
    {
      id: "posts-label",
      component: {
        Text: {
          text: {
            literalString: "Posts",
          },
          usageHint: "caption",
        },
      },
    },
    {
      id: "follow-btn-text",
      component: {
        Text: {
          text: {
            path: "/followText",
          },
        },
      },
    },
    {
      id: "follow-btn",
      component: {
        Button: {
          child: "follow-btn-text",
          action: "follow",
        },
      },
    },
  ],
  data: {
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    name: "Sarah Chen",
    username: "@sarahchen",
    bio: "Product Designer at Tech Co. Creating delightful experiences.",
    followers: "12.4K",
    following: "892",
    posts: "347",
    followText: "Follow",
  },
};
