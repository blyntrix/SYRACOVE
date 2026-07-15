const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");

const INPUT_DIR = path.join(__dirname, "../src/assets/villa");
const OUTPUT_DIR = path.join(__dirname, "../src/assets/villa-optimized");

const MAX_WIDTH = 1600;
const QUALITY = 70;

async function compressImages() {
  await fs.ensureDir(OUTPUT_DIR);

  const villaFolders = await fs.readdir(INPUT_DIR);

  for (const folder of villaFolders) {
    const inputFolder = path.join(INPUT_DIR, folder);
    const outputFolder = path.join(OUTPUT_DIR, folder);

    await fs.ensureDir(outputFolder);

    const files = await fs.readdir(inputFolder);

    for (const file of files) {
      const inputPath = path.join(inputFolder, file);
      const outputPath = path.join(outputFolder, file);

      const ext = path.extname(file).toLowerCase();

      if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) {
        continue;
      }

      console.log(`Compressing: ${folder}/${file}`);

      await sharp(inputPath)
        .resize({
          width: MAX_WIDTH,
          withoutEnlargement: true,
        })
        .jpeg({
          quality: QUALITY,
          mozjpeg: true,
        })
        .toFile(outputPath);
    }
  }

  console.log("✅ All images compressed successfully!");
}

compressImages().catch(console.error);