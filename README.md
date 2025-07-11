# Convert your CSS code to Tailwind styles

First of all this project was created to help beginners get used to Tailwind and learn the most frequently used classes. Also, it is very useful for developers who are switching from CSS to Tailwind in their projects.

## How does it work?

It's simple: paste your CSS (or SCSS) code into the editor, and the tool will automatically convert each selector into a list of matching Tailwind utility classes.

Under the hood, your code is parsed by [css-tree](https://www.npmjs.com/package/css-tree) into an `abstract syntax tree (AST)`. The app then traverses the AST, analyzes each block, and for every style rule, finds the closest Tailwind equivalent while preserving the original structure where possible.

For every CSS block, you will see:
- the **original selector** (like `.button`)
- the **Tailwind classes** that recreate the same style or the most closest one

### Which CSS properties are ***not*** supported?

Here the list unmaintained CSS properties:
- **Filters**:
    - `blur`, `brightness`, `contrast`, `drop-shadow` (only inside filter)
    - `grayscale`, `hue-rotate`, `invert`, `opacity` (only in backdrop-filter)
    - `saturate`, `sepia`
- **Tables**: 
    - `border-collapse`, `border-spacing`, `table-layout`, `caption-side`
- **Transitions & Animation**: 
    - `transition-property`, `transition-behavior`, `transition-duration`, `transition-timing-function`, `transition-delay`, `animation`
- **Transforms**: 
    - `backface-visibility`, `perspective`, `perspective-origin`
    - `rotate`, `scale`, `skew`, `transform`, `transform-origin`, `transform-style`, `translate`

These properties are either rarely used or difficult to parse reliably. For example, Tailwind’s animation utility is mapped to entire CSS blocks, which makes automated parsing complex. In such cases, it's often better to learn the corresponding Tailwind utilities directly.
