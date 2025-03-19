export type Category = {
  title: string;
  tools: string[];
};

export type GridItem = {
  id: string;
  title: string;
  categories: Category[];
};

export const gridData: GridItem[] = [
  {
    id: "codegen",
    title: "Codegen",
    categories: [
      {
        title: "IDE",
        tools: [
          "Company Cursor",
          "Github Copilot",
          "Company Cursor AI",
          "Company Cursor AI",
          "Company Cursor AI",
          "Company Cursor AI",
        ],
      },
      {
        title: "Platforms",
        tools: [
          "Company Cursor",
          "Company Cursor AI",
          "Company Cursor AI",
          "Company Cursor AI",
        ],
      },
      {
        title: "Spec-driven",
        tools: [
          "Company Cursor",
          "Company Cursor AI",
          "Company Cursor AI",
          "Company Cursor AI",
          "Company Cursor AI",
          "Company Cursor AI",
          "Company Cursor AI",
          "Company Cursor AI",
          "Company Cursor AI",
          "Company Cursor AI",
          "Company Cursor AI",
        ],
      },
    ],
  },
  {
    id: "models",
    title: "Models",
    categories: [
      {
        title: "Open Source",
        tools: ["Llama 2", "Mistral", "Falcon", "GPT-J", "BLOOM", "OPT"],
      },
      {
        title: "Proprietary",
        tools: ["GPT-4", "Claude 2", "PaLM", "DALL-E"],
      },
      {
        title: "Fine-tuned",
        tools: [
          "CodeLlama",
          "StarCoder",
          "WizardCoder",
          "SantaCoder",
          "CodeGen",
          "InCoder",
          "Replit Code",
          "GPT-Code",
          "AlphaCode",
          "CodeT5",
          "Copilot",
        ],
      },
    ],
  },
];
