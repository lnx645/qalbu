import { WorkType } from "./work-type.types";
export type WorkItemsType = {
  title: string;
  category: string;
  image: string;
  cover?: string;
  author?: string;
  slug: string;
  createdAt?: string;
  type: WorkType;
};
