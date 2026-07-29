const addOnsData = [
  {
    name: {
      monthlyName: "Collaborators",
      yearlyName: "Accounting & Tax Assistant",
    },
    description: {
      monthlyDescr:
        "Invite other users to specific projects for limited access and functionality.",
      yearlyDescr:
        "Manage your freelance finances and always be ready for tax season with easy-to-use accounting and tax tools.",
    },
    duration: {monthlyDur: "", yearlyDur: "/YEAR"},
    prices: { monthly: "Free", yearly: "$100" },
  },
  {
    name: { monthlyName: "Partners", yearlyName: "Partners" },
    description: {
      monthlyDescr:
        "Invite other users for full account access and company management.",
      yearlyDescr:
        "Invite other users for full account access and company management.",
    },
    duration: {monthlyDur: "/MONTH", yearlyDur: "/YEAR"},
    prices: { monthly: "$9", yearly: "$90" },
  },
  {
    name: { monthlyName: "Bonsai Tax", yearlyName: "Collaborators" },
    description: {
      monthlyDescr:
        "Track expenses, identify write-offs, and estimate quarterly taxes easily.",
      yearlyDescr:
        "Invite other users to specific projects for limited access and functionality.",
    },
    duration: {monthlyDur: "/MONTH", yearlyDur: ""},
    prices: { monthly: "$10", yearly: "Free" },
  },
];

export default addOnsData;
