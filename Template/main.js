tailwind.config = {
  theme: {
    screens: {
      "xs": '300px',
      // => @media (min-width: 300px) { ... }

      'sm': '480px',
      // => @media (min-width: 570px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
        colors: {
          "color-white": "var(--color-white)" ,
          "color-black": 'var(--color-black)',
          "color-secondary": 'var(--color-secondary)',
          "color-text": 'var(--color-text)',
          "color-light-text": "var(---color-light-text)",
          "color-light-bg": 'var(--color-light-background)',
          "color-gray-deep": 'var(--color-gray-deep)',
          },
    }
  }
}