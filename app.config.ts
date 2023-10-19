import { ExpoConfig, ConfigContext } from "expo/config";
import { bundleIdentifier, version, buildNumber, name } from "./package.json";

export default ({ config }: ConfigContext): ExpoConfig => ({
  name,
  slug: name,
  version,
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    bundleIdentifier: bundleIdentifier,
    buildNumber: buildNumber.toString(),
    supportsTablet: true,
  },
  android: {
    package: bundleIdentifier,
    versionCode: buildNumber,
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    name: "Release Please",
    shortName: "Release Please",
    description: "A sandbox for experimenting with release-please",
    favicon: "./assets/favicon.png",
    bundler: "metro",
  },
});
