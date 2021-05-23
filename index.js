const input = process.argv[2];

if (!input) throw new Error('Error: valid input needed. See "tailwind-convert --help" for more details.');

if (input === '--help') {
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
  - "tailwind-convert 24px" => 1.5rem, Tailwind value = 6.
  - "tailwind-convert 3rem" => 48px, Tailwind value = 12.
  - "tailwind-convert 4" => 1rem, 16px.
  `);
  process.exit(0);
}

//  const convert = val => Math.round((parseFloat(val) / 16) * 4);

 // eslint-disable-next-line no-console
//  console.log(convert(process.argv[2]));
