import "./globals.scss";
import "../styles/sidebar.scss";

import { projectName, fontTheme } from "theme/theme-config";
import Providers from "components/Providers/Providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={fontTheme.className} suppressHydrationWarning>
      <head>
        <title>{projectName}</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="description" content="NextJs web app" />
      </head>
      <body suppressHydrationWarning>
        <AppRouterCacheProvider
          options={{
            key: "css",
          }}
        >
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
