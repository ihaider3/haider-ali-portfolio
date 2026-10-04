const sharp = require("../frontend/node_modules/sharp");
const path = require("path");
const fs = require("fs");

async function optimizeBackground() {
  const inputJpg = path.join(__dirname, "../logo/background.jpg");
  const targetDir = path.join(__dirname, "../frontend/public/images");

  console.log("Reading source background:", inputJpg);
  const metadata = await sharp(inputJpg).metadata();
  console.log("Original dimensions:", metadata.width, "x", metadata.height);

  // 1. High-Resolution 2048px 2x Upscale with Lanczos3 & refined sharpening
  // This removes JPEG compression artifacts and provides razor-sharp clarity on 1080p, 1440p, 4K and Retina screens.
  const pipeline = sharp(inputJpg)
    .resize(2048, 942, {
      kernel: sharp.kernel.lanczos3,
      fit: "fill"
    })
    .modulate({
      brightness: 1.02,
      saturation: 1.08
    })
    .sharpen({
      sigma: 1.2,
      m1: 0.6,
      m2: 2.2
    });

  // Export 1: High Quality WebP (Super fast load, small footprint, perfect fidelity)
  const webpPath = path.join(targetDir, "portfolio-clean-bg.webp");
  await pipeline
    .clone()
    .webp({ quality: 92, effort: 6 })
    .toFile(webpPath);
  console.log("Generated:", webpPath, "Size:", fs.statSync(webpPath).size);

  // Export 2: Lossless / High-Fidelity PNG version
  const pngCleanPath = path.join(targetDir, "portfolio-clean-bg.png");
  await pipeline
    .clone()
    .png({ quality: 90, compressionLevel: 8 })
    .toFile(pngCleanPath);
  console.log("Generated:", pngCleanPath, "Size:", fs.statSync(pngCleanPath).size);

  // Also update legacy paths so any cached or fallback references are 100% clean
  fs.copyFileSync(pngCleanPath, path.join(targetDir, "portfolio-dark-bg.png"));
  fs.copyFileSync(pngCleanPath, path.join(targetDir, "portfolio-bg.png"));
  console.log("Updated portfolio-dark-bg.png and portfolio-bg.png");
}

optimizeBackground().catch(err => {
  console.error("Optimization failed:", err);
  process.exit(1);
});
