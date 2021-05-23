const input = process.argv[2];

if (!input) throw new Error('Error: valid input needed. See "tailwind-convert --help" for more details.');

if (input === '--help') {
  //eslint-disable-next-line no-console
  console.info(`
  Converts between px, rem, and Tailwind spacing units on the Tailwind spacing scale.
  For full docs on the Tailwind spacing scale, see https://tailwindcss.com/docs/customizing-spacing.
  According to these docs, "By default the spacing scale is inherited by the padding, margin, width, height, maxHeight, gap, inset, space, and translate core plugins."

  By Tailwind spacing units, we mean the numerical units for the above Tailwind utilities (for example: "mb-4", which would translate to "margin-bottom: 16px" or "margin-bottom: 1rem"). See the Tailwind docs for complete explanations of these utilities.

  Enter in a value and the program will convert to or from Tailwind spacing units. If you enter:
  * a value followed by "px": the program will interpret it as "pixels" and show the other two equivalent values (rem and Tailwind spacing units).
  * a value followed by "rem": the program will interpret it as "rem" and show the other two equivalent values.
  * a unitless value: the program will interpret it as a Tailwind spacing unit and show the other two equivalent values.

  Examples:
  - "tailwind-convert 24px" => "24px, 1.5rem, Tailwind value = 6."
  - "tailwind-convert 3rem" => "48px, 3rem, Tailwind value = 12."
  - "tailwind-convert 4" => "16px, 1rem, Tailwind value = 4."
  `);
  process.exit(0);
}

// order to display: px, rem, Tailwind value.
const parsedInput = parseFloat(input.replace(/\D/g, ''));

let px = 0;
let rem = 0;
let tw = 0;

switch (true) {
  case /px$/.test(input):
    px = parsedInput;
    rem = parsedInput / 16;
    tw = Math.round((parsedInput / 16) * 4)
    break;
  case /rem$/.test(input):
    px = parsedInput * 16;
    rem = parsedInput;
    tw = parsedInput * 4;
    break;
  case /^\d{1,2}$/.test(input):
    px = parsedInput * 4;
    rem = parsedInput / 4;
    tw = parsedInput;
    break;
  default:
    throw new Error('Must enter in a valid value. Please enter a numerical value followed by px or rem or a one-to-two digit unitless value for Tailwind value.');
}

// TODO: compare TW vals agaisnt dictionary.fail if no match.
 //eslint-disable-next-line no-console
console.info(`

Your result:
${px}px, ${rem}rem, Tailwind value = ${tw}.

`);
