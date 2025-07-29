import type { FC } from "hono/jsx";

type LayoutProps = {
  children: any;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Atrox Gateway</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style></style>
      </head>
      <body>{children}</body>
    </html>
  );
};
