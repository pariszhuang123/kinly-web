import StyleDictionary from 'style-dictionary';

// Custom format that outputs theme-aware CSS
StyleDictionary.registerFormat({
  name: 'css/themed-variables',
  format: ({ dictionary }) => {
    const lightTokens = [];
    const darkTokens = [];
    const sharedTokens = [];

    dictionary.allTokens.forEach((token) => {
      const name = token.name;
      // In Style Dictionary v4, use $value or value
      const value = token.$value ?? token.value ?? token.original?.$value ?? token.original?.value;

      if (value === undefined) {
        return; // Skip tokens without values
      }

      // Route tokens based on their path
      if (token.path.includes('light')) {
        // Strip 'light' from the name for cleaner CSS vars
        const cleanName = name.replace(/-light-|-light$/, '-').replace(/--+/g, '-').replace(/-$/, '');
        lightTokens.push(`  --${cleanName}: ${value};`);
      } else if (token.path.includes('dark')) {
        // Strip 'dark' from the name for cleaner CSS vars
        const cleanName = name.replace(/-dark-|-dark$/, '-').replace(/--+/g, '-').replace(/-$/, '');
        darkTokens.push(`  --${cleanName}: ${value};`);
      } else {
        // Non-themed tokens go to :root
        sharedTokens.push(`  --${name}: ${value};`);
      }
    });

    return `/**
 * Do not edit directly, this file was auto-generated.
 * Generated from contracts/design-system/tokens.json
 */

:root {
  /* Shared tokens */
${sharedTokens.join('\n')}

  /* Light mode (default) */
${lightTokens.join('\n')}
}

[data-theme="dark"] {
  /* Dark mode overrides */
${darkTokens.join('\n')}
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    /* Auto dark mode when no explicit theme set */
${darkTokens.join('\n')}
  }
}
`;
  },
});

export default {
  source: ['contracts/design-system/tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'app/styles/generated/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/themed-variables',
        },
      ],
    },
  },
};
