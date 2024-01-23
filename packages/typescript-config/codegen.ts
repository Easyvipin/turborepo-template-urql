import type { CodegenConfig } from "@graphql-codegen/cli";

const defineCodegenConfig = (schemaUrl: string) => {
  console.log(schemaUrl);
  const config: CodegenConfig = {
    schema: schemaUrl,
    documents: ["src/**/*.gql"],
    hooks: { afterAllFileWrite: ["eslint --fix", "prettier --write"] },
    ignoreNoDocuments: true,
    generates: {
      "src/types.ts": { plugins: ["typescript"] },
      "src/": {
        preset: "near-operation-file",
        presetConfig: {
          extension: ".generated.tsx",
          baseTypesPath: "types.ts",
        },
        plugins: ["typescript-operations", "typescript-urql"],
      },
    },
  };
  return config;
};

export default defineCodegenConfig;
