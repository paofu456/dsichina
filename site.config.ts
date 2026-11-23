export const siteConfig = {
  language: "en",
  locale: "en_US",
  siteUrl: undefined as string | undefined,
  siteMode: "local" as "local" | "production",
  contentStatus: "draft" as "demo" | "draft" | "ready",
  sampleDetailSlug: undefined as string | undefined,
  navigation: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products/" },
    { label: "Company", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ],
};
