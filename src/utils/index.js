export const price = value => {
  const digits = value % 1 === 0 ? 0 : 2

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value)
}

export const socials = [
  {
    name: "Facebook",
    icon: "fab fa-facebook",
    url: "https://facebook.com/oxfordpennant",
  },
  {
    name: "Twitter",
    icon: "fab fa-twitter",
    url: "https://twitter.com/oxfordpennant",
  },
  {
    name: "Instagram",
    icon: "fab fa-instagram",
    url: "https://instagram.com/oxfordpennant",
  },
  {
    name: "Pinterest",
    icon: "fab fa-pinterest",
    url: "https://pinterest.com/oxfordpennant",
  },
]
