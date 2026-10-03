const sharp = require("../frontend/node_modules/sharp");
const path = require("path");
const fs = require("fs");

async function processLogo() {
  const inputPath = path.join(__dirname, "../frontend/public/images/logo/mh-marketing.jpg");
  const outputPath = path.join(__dirname, "../frontend/public/images/logo/mh-marketing.png");
  
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const { width, height } = metadata;
  console.log(`Original image size: ${width}x${height}`);

  // Create an SVG circle mask with anti-aliasing
  // Center is width / 2, height / 2.
  // Let's determine the exact radius of the outer golden ring
  const rawBuffer = await image.raw().toBuffer();
  
  // Find where the golden outer border starts from the top center (x = width/2, y = 0..height/2)
  const cx = Math.floor(width / 2);
  const cy = Math.floor(height / 2);
  
  let topY = 0;
  for (let y = 0; y < cy; y++) {
    const idx = (y * width + cx) * 3;
    const r = rawBuffer[idx];
    const g = rawBuffer[idx + 1];
    const b = rawBuffer[idx + 2];
    // Black background is r < 20, g < 20, b < 20
    if (r > 30 || g > 30 || b > 30) {
      topY = y;
      break;
    }
  }

  let bottomY = height - 1;
  for (let y = height - 1; y > cy; y--) {
    const idx = (y * width + cx) * 3;
    const r = rawBuffer[idx];
    const g = rawBuffer[idx + 1];
    const b = rawBuffer[idx + 2];
    if (r > 30 || g > 30 || b > 30) {
      bottomY = y;
      break;
    }
  }

  let leftX = 0;
  for (let x = 0; x < cx; x++) {
    const idx = (cy * width + x) * 3;
    const r = rawBuffer[idx];
    const g = rawBuffer[idx + 1];
    const b = rawBuffer[idx + 2];
    if (r > 30 || g > 30 || b > 30) {
      leftX = x;
      break;
    }
  }

  let rightX = width - 1;
  for (let x = width - 1; x > cx; x--) {
    const idx = (cy * width + x) * 3;
    const r = rawBuffer[idx];
    const g = rawBuffer[idx + 1];
    const b = rawBuffer[idx + 2];
    if (r > 30 || g > 30 || b > 30) {
      rightX = x;
      break;
    }
  }

  console.log(`Detected circle bounds: left=${leftX}, right=${rightX}, top=${topY}, bottom=${bottomY}`);
  const radiusX = (rightX - leftX) / 2;
  const radiusY = (bottomY - topY) / 2;
  const radius = Math.min(radiusX, radiusY);
  console.log(`Calculated circle radius: ${radius}, center: (${cx}, ${cy})`);

  // We create an SVG circle mask that smoothly fades out the black corners
  // A tiny feather of 1.5px gives smooth anti-aliased edge
  const maskSvg = Buffer.from(`
    <svg width="${width}" height="${height}">
      <circle cx="${cx}" cy="${cy}" r="${radius + 2}" fill="white" />
    </svg>
  `);

  await sharp(inputPath)
    .composite([
      {
        input: maskSvg,
        blend: "dest-in"
      }
    ])
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(outputPath);

  console.log(`Successfully generated transparent PNG at: ${outputPath}`);

  // Also create a WebP version for ultra-fast web delivery
  const outputWebp = path.join(__dirname, "../frontend/public/images/logo/mh-marketing.webp");
  await sharp(outputPath)
    .webp({ quality: 95, alphaQuality: 100 })
    .toFile(outputWebp);
  console.log(`Successfully generated transparent WebP at: ${outputWebp}`);

  // Also copy to logo/MH Marketing.png
  const rootLogoPng = path.join(__dirname, "../logo/MH Marketing.png");
  fs.copyFileSync(outputPath, rootLogoPng);
}

processLogo().catch(console.error);
