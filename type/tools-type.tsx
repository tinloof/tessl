export type Tool = {
  name: string;
  description?: string;
  website_url: string;
  icon_url?: string;
  tags?: string[];
};
export type ToolsData = {
  domains: Array<{
    name: string;
    description: string;
    level: number;
    categories: Array<{
      name: string;
      description?: string;
      tools: Array<Tool>;
    }>;
  }>;
};
