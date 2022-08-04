import { Parser } from 'csv-parse';
import fs from 'fs';

export class ImportCategoriesUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    const parseFile = new Parser({});
    stream.pipe(parseFile);

    parseFile.on('data', (line) => {
      console.log(line);
    });
  }
}
