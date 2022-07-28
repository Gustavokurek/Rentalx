import { v4 as uuid } from 'uuid';
export class Category {
  id?: string;
  nameCategory: string;
  description: string;
  created_at: Date;
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
