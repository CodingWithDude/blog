import { Tag } from './Tag';

export interface MetaData {
  title: string;
  dateString: string;
  description: string;
  excerpt: string;
  tags: Tag[];
}
