import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { join } from 'path';

const icons = JSON.parse(readFileSync(join(__dirname, 'icons.json'), {
  encoding: 'utf8',
}));

const logoPath = join(__dirname, '../logo');
const iconsPath = join(__dirname, '../logo/icons');

const commands = [
  `rm -rf ${join(__dirname, '../logo/icons/')}/*`,
  `rm -rf ${join(__dirname, '../logo/')}/*.png`,
];

const svgList = [
  'aasaam',
  'aasaam-mask',
  'aasaam-typo-en',
  'aasaam-typo-fa',
  'aasaam-typo',
];

svgList.forEach((name) => {
  commands.push(`inkscape -z -e ${logoPath}/${name}.png -w 2048 ${logoPath}/${name}.svg > /dev/null 2>&1`);
  commands.push(`pngquant --quality 0-1 --force --speed 1 ${logoPath}/${name}.png --output ${logoPath}/${name}.png`);
});

commands.push(`convert ${logoPath}/aasaam.png -background white -alpha remove -alpha off /tmp/aasaam.flatten.png`);
commands.push(`convert ${logoPath}/aasaam.png -define icon:auto-resize=64,48,32,24,16 ${logoPath}/icons/favicon.ico`);

Object.keys(icons.apple).forEach((name) => {
  const iconData = icons.apple[name];
  commands.push(`convert /tmp/aasaam.flatten.png -resize ${iconData.width}x${iconData.height} ${iconsPath}/${name}`);
  commands.push(`pngquant --quality 0-1 --force --speed 1 ${iconsPath}/${name} --output ${iconsPath}/${name}`);
});

Object.keys(icons.defaults).forEach((name) => {
  const iconData = icons.defaults[name];
  commands.push(`convert ${logoPath}/aasaam.png -resize ${iconData.width}x${iconData.height} ${iconsPath}/${name}`);
  commands.push(`pngquant --quality 0-1 --force --speed 1 ${iconsPath}/${name} --output ${iconsPath}/${name}`);
});

execSync(commands.join(' && '));
