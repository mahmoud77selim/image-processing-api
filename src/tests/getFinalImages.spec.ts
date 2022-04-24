import fs from 'fs';
import { finalImages } from '../modules/getFinalImages';
import path from 'path';

describe('get final Image', () => {
  it('File should be created', async () => {
    const outputPath = path.join('src', 'public', 'thumbs');
    finalImages(400, 400, outputPath);
    expect(
      fs.existsSync(path.resolve(`${outputPath + '/fjord_400_400.jpeg'}`))
    ).toBeTrue();
  });
});
