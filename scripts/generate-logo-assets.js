const sharp = require("../frontend/node_modules/sharp");
const path = require("path");
const fs = require("fs");

async function generateAllLogoAssets() {
  const transparentPng = path.join(__dirname, "../frontend/public/images/logo/mh-marketing.png");
  
  // 1. Generate 192x192 transparent PNG for PWA
  await sharp(transparentPng)
    .resize(192, 192)
    .png({ quality: 100 })
    .toFile(path.join(__dirname, "../frontend/public/images/logo/mh-marketing-192.png"));
  console.log("Created mh-marketing-192.png");

  // 2. Generate 512x512 transparent PNG for PWA & Splash
  await sharp(transparentPng)
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(__dirname, "../frontend/public/images/logo/mh-marketing-512.png"));
  console.log("Created mh-marketing-512.png");

  // 3. Generate 32x32 transparent PNG for favicon
  await sharp(transparentPng)
    .resize(32, 32)
    .png({ quality: 100 })
    .toFile(path.join(__dirname, "../frontend/public/images/logo/mh-marketing-32.png"));
  console.log("Created mh-marketing-32.png");

  // 4. Overwrite mh-marketing.jpg by compositing over #020612 (the website background color)
  // This guarantees that any place still requesting .jpg will see the exact #020612 background, with ZERO visible corners!
  const bgBuffer = await sharp({
    create: {
      width: 1254,
      height: 1254,
      channels: 3,
      background: { r: 2, g: 6, b: 18 } // #020612
    }
  }).jpeg().toBuffer();

  await sharp(bgBuffer)
    .composite([{ input: transparentPng }])
    .jpeg({ quality: 95 })
    .toFile(path.join(__dirname, "../frontend/public/images/logo/mh-marketing.jpg"));
  console.log("Created mh-marketing.jpg with matching #020612 background");

  // Copy to root logo/ folder as well
  fs.copyFileSync(
    path.join(__dirname, "../frontend/public/images/logo/mh-marketing.jpg"),
    path.join(__dirname, "../logo/MH Marketing.jpg")
  );
  fs.copyFileSync(
    transparentPng,
    path.join(__dirname, "../logo/MH Marketing.png")
  );
}

generateAllLogoAssets().catch(console.error);
