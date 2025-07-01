module.exports = function(api) {
  // Caches the Babel configuration for performance.
  // This means Babel will only re-evaluate this file if its contents change.
  api.cache(true);

  return {
    // 'babel-preset-expo' is the standard preset for Expo projects.
    // It includes all the necessary Babel transformations for React Native and Expo.
    presets: ['babel-preset-expo'],

    // Plugins are ordered. The 'module-resolver' must come BEFORE 'react-native-reanimated/plugin'.
    plugins: [
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
      }],
      [
        // This plugin allows you to use absolute import paths (like '@/components').
        'module-resolver',
        {
          // 'root' specifies the base directory for resolving aliases.
          // './' means your project's root directory (where package.json, app/, and components/ are).
          root: ['./'],
          
          // 'alias' maps your custom import paths to their actual locations.
          // "@/components" will now resolve to the 'components' folder at your project root.
          alias: {
            "@/components": "./components",
            // You can add other common aliases here if you plan to use them:
            // "@/assets": "./assets", // e.g., for assets/images
            // "@/utils": "./utils",   // e.g., for utility functions in utils/
            // "@/hooks": "./hooks",   // e.g., for custom hooks in hooks/
            // "@/app": "./app",       // If you plan to use "@/app" for Expo Router paths
          },
          // 'extensions' tells the resolver which file extensions to look for.
          // Crucial for TypeScript files (.ts, .tsx).
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], // Added .json for completeness
        },
      ],
      // 'react-native-reanimated/plugin' MUST BE THE LAST PLUGIN.
      // This is a strict requirement for Reanimated to work correctly.
      'react-native-reanimated/plugin',
    ],
  };
};