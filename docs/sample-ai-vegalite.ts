// Sample AI-Generated Chart Schema (Vega-Lite TopLevelSpec)

export const chartSchema = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  title: "Sales by Product Category",
  data: {
    values: [
      { category: "Electronics", sales: 42000 },
      { category: "Groceries", sales: 35000 },
      { category: "Clothing", sales: 25000 },
      { category: "Home Decor", sales: 18000 },
      { category: "Sports", sales: 14000 },
    ],
  },
  mark: "bar",
  encoding: {
    x: {
      field: "category",
      type: "nominal",
      title: "Product Category",
    },
    y: {
      field: "sales",
      type: "quantitative",
      title: "Total Sales",
    },
    color: {
      field: "category",
      type: "nominal",
    },
  },
};

export const lineChart = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  title: "Monthly Revenue Trend",
  data: {
    values: [
      { month: "2024-01-01", revenue: 12000 },
      { month: "2024-02-01", revenue: 15000 },
      { month: "2024-03-01", revenue: 18000 },
      { month: "2024-04-01", revenue: 16000 },
      { month: "2024-05-01", revenue: 21000 },
    ],
  },
  mark: "line",
  encoding: {
    x: {
      field: "month",
      type: "temporal",
      title: "Month",
    },
    y: {
      field: "revenue",
      type: "quantitative",
      title: "Revenue",
    },
  },
};

export const pieOrARC = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  title: "Market Share Distribution",
  data: {
    values: [
      { company: "Apex", share: 30 },
      { company: "ZenCorp", share: 25 },
      { company: "Nova", share: 20 },
      { company: "PrimeTech", share: 15 },
      { company: "Others", share: 10 },
    ],
  },
  mark: "arc",
  encoding: {
    theta: { field: "share", type: "quantitative" },
    color: { field: "company", type: "nominal" },
  },
};
