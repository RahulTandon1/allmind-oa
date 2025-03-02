import type { Config } from 'tailwindcss'
 
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        backgroundImage: {
            "gradient-custom":
                "linear-gradient(45deg, #58F1FF, #5F83F0, #E54BDA, #FF8D29, #F83A31, #35012F)",
        },
    }
  },
  plugins: [],
} satisfies Config