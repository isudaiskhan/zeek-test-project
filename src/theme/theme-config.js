import { Roboto } from "next/font/google";

export const projectName = "ZEEK";

// fonts
export const fontTheme = Roboto({
  weight: ["300", "400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
  style: ["normal"],
});

// toast
export const sonner = {
  expand: false,
  richColors: true,
  visibleToasts: 3,
  position: "bottom-right",
  closeButton: true,

  toastOptions: {
    duration: 4000,
  },
};
