#!/usr/bin/env node
const { readFileSync, readdirSync, existsSync } = require('fs');
const { join } = require('path');
// eslint-disable-next-line security/detect-child-process
const { execSync } = require('child_process');

const icons = JSON.parse(
  readFileSync(join(__dirname, 'icons.json'), {
    encoding: 'utf8',
  }),
);

const services = readdirSync(join(__dirname, '../logo/service'));

const commands = [];

services.forEach((service) => {
  const logoDir = join(__dirname, `../logo/service/${service}`);
  const svgLogoPath = `${logoDir}/logo.svg`;
  const faviconPath = `${logoDir}/favicon.ico`;
  const exist = existsSync(faviconPath);
  if (exist === false) {
    commands.push(
      `inkscape -z -e ${logoDir}/logo.png -w 2048 ${svgLogoPath} > /dev/null 2>&1`,
    );
    commands.push(
      `pngquant --quality 0-1 --force --speed 1 ${logoDir}/logo.png --output ${logoDir}/logo.png`,
    );

    Object.keys(icons.defaults).forEach((name) => {
      // eslint-disable-next-line security/detect-object-injection
      const iconData = icons.defaults[name];
      commands.push(
        `convert ${logoDir}/logo.png -resize ${iconData.width}x${iconData.height} ${logoDir}/${name}`,
      );
      commands.push(
        `pngquant --quality 0-1 --force --speed 1 ${logoDir}/${name} --output ${logoDir}/${name}`,
      );
    });

    commands.push(
      `convert ${logoDir}/logo.png -background white -alpha remove -alpha off /tmp/${service}.flatten.png`,
    );
    commands.push(
      `convert ${logoDir}/logo.png -define icon:auto-resize=64,48,32,24,16 ${faviconPath}`,
    );

    Object.keys(icons.apple).forEach((name) => {
      // eslint-disable-next-line security/detect-object-injection
      const iconData = icons.apple[name];
      commands.push(
        `convert /tmp/${service}.flatten.png -resize ${iconData.width}x${iconData.height} ${logoDir}/${name}`,
      );
      commands.push(
        `pngquant --quality 0-1 --force --speed 1 ${logoDir}/${name} --output ${logoDir}/${name}`,
      );
    });
  }
});

if (commands.length) {
  execSync(commands.join(' && '));
}

// const logoPath = join(__dirname, '../logo');
// const iconsPath = join(__dirname, '../logo/icons');

// const commands = [
//   `rm -rf ${join(__dirname, '../logo/icons/')}/*`,
//   `rm -rf ${join(__dirname, '../logo/')}/*.png`,
// ];

// const svgList = [
//   'aasaam',
//   'aasaam-mask',
//   'aasaam-typo-en',
//   'aasaam-typo-fa',
//   'aasaam-typo',
// ];

// svgList.forEach((name) => {
//   commands.push(
//     `inkscape -z -e ${logoPath}/${name}.png -w 2048 ${logoPath}/${name}.svg > /dev/null 2>&1`,
//   );
//   commands.push(
//     `pngquant --quality 0-1 --force --speed 1 ${logoPath}/${name}.png --output ${logoPath}/${name}.png`,
//   );
// });

// commands.push(
//   `convert ${logoPath}/aasaam.png -background white -alpha remove -alpha off /tmp/aasaam.flatten.png`,
// );
// commands.push(
//   `convert ${logoPath}/aasaam.png -define icon:auto-resize=64,48,32,24,16 ${logoPath}/icons/favicon.ico`,
// );

// Object.keys(icons.apple).forEach((name) => {
//   // eslint-disable-next-line security/detect-object-injection
//   const iconData = icons.apple[name];
//   commands.push(
//     `convert /tmp/aasaam.flatten.png -resize ${iconData.width}x${iconData.height} ${iconsPath}/${name}`,
//   );
//   commands.push(
//     `pngquant --quality 0-1 --force --speed 1 ${iconsPath}/${name} --output ${iconsPath}/${name}`,
//   );
// });

// Object.keys(icons.defaults).forEach((name) => {
//   // eslint-disable-next-line security/detect-object-injection
//   const iconData = icons.defaults[name];
//   commands.push(
//     `convert ${logoPath}/aasaam.png -resize ${iconData.width}x${iconData.height} ${iconsPath}/${name}`,
//   );
//   commands.push(
//     `pngquant --quality 0-1 --force --speed 1 ${iconsPath}/${name} --output ${iconsPath}/${name}`,
//   );
// });

// execSync(commands.join(' && '));
