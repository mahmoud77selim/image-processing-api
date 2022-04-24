import { Router, Request, Response } from 'express';
import fs from 'fs';
import { imagesPath, clearnFiles, imageDirsTypes } from '../utils';

export const IndexerKit: Router = Router();
const { inputPath }: imageDirsTypes = imagesPath(__dirname);

IndexerKit.get('/', async (req: Request, res: Response) => {
  let inputFiles: string[] = fs.readdirSync(inputPath);
  inputFiles = clearnFiles(inputFiles);
  res.status(200);
  res.render('index', {
    data: inputFiles
  });
});
