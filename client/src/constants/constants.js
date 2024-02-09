const filtersCategories = [
  {
    category: "General",
    filters: [
      {
        name: "Income Class: HIC",
        operation: "equals",
        value: "[HIC's] High-income economies (GNI $13205 or more)",
      },
      {
        name: "Income Class: UMIC",
        operation: "equals",
        value: "[UMIC's] Upper-middle-income economies (GNI $4256 to $13205)",
      },
      {
        name: "Income Class: LMIC",
        operation: "equals",
        value: "[LMIC's] Lower-middle-income economies (GNI $1086 to $4255)",
      },
      {
        name: "Income Class: LIC",
        operation: "equals",
        value: "[LIC's] Low-income economies (GNI $1085 or less)",
      },
      {
        name: "Population > 10 000 000",
        operation: "greaterThan",
        value: 10000000,
      },
      {
        name: "LDC Group",
        operation: "boolean",
        value: true,
      },
      ,
    ],
  },
];

const logos = [
  {
    url: "https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg",
  },
  {
    url: "https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg",
  },
  {
    url: "https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg",
  },
  {
    url: "https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg",
  },
  {
    url: "https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg",
  },
  {
    url: "https://p7.hiclipart.com/preview/717/662/409/cnbc-logo-of-nbc-business-business.jpg",
  },
];

export { filtersCategories, logos };
