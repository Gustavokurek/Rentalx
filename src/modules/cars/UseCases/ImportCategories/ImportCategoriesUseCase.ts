import { Parser } from 'csv-parse';
import fs from 'fs';

import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

interface ICategoryImport {
  nameCategory: string;
  description: string;
}
export class ImportCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  load(file: Express.Multer.File): Promise<ICategoryImport[]> {
    return new Promise((resolve, reject) => {
      const categories: ICategoryImport[] = [];
      const stream = fs.createReadStream(file.path);
      const parseFile = new Parser({});
      stream.pipe(parseFile);

      parseFile
        .on('data', (line) => {
          const [nameCategory, description] = line;
          categories.push({
            nameCategory,
            description,
          });
        })
        .on('end', () => {
          resolve(categories);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.load(file);

    categories.map(async (category) => {
      const { nameCategory, description } = category;
      const userExist = this.categoriesRepository.findByName(nameCategory);

      if (!userExist) {
        this.categoriesRepository.create({
          nameCategory,
          description,
        });
      }
    });
  }
}
