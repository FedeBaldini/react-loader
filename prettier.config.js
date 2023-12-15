module.exports = {
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrderParserPlugins: ["typescript", "jsx"],
  trailingComma: "none",
  importOrder: ["^react$", "<THIRD_PARTY_MODULES>", "^\\."],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true
};
