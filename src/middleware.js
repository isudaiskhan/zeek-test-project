import axios from "axios";
import { NextResponse } from "next/server";

// Route configuration
// add paths in matcher to run middleware only on these paths
const ROUTES = {
  PUBLIC_URLS: ["/auth/login", "/auth/signup"],
  HYBRID_URLS: ["/about-us"],
  LOGIN_URL: "/auth/login",
  ADMIN_ROUTES: "/dashboard",
  UNAUTHORIZED_URL: "/unauthorized",
};

// APIs
const APIS = {
  GET_PROFILE_URL: `${process.env.NEXT_PUBLIC_BASE_URL}/users/me`,
};

// Roles
const ROLES = {
  ADMIN_ROLE: "admin",
};

/**
 * @param {import("next/server").NextRequest} req
 */
export default async function validateAuthentication(req) {
  let token = req.cookies.get("token")?.value;
  let { pathname } = req.nextUrl;

  NextResponse.next().headers.set(
    "Cache-Control",
    "no-cache, no-store, must-revalidate"
  );

  // if user requested hybrid routes
  if (ROUTES.HYBRID_URLS.some((url) => pathname.startsWith(url))) {
    return NextResponse.next();
  }

  // if not logged-in and requested protected route
  if (!token && !ROUTES.PUBLIC_URLS.some((url) => pathname.startsWith(url))) {
    return redirectTo(req, ROUTES.LOGIN_URL);
  }

  // if logged-in and requested public route
  if (token && ROUTES.PUBLIC_URLS.some((url) => pathname.startsWith(url))) {
    return redirectTo(req, "/");
  }

  // check for roles for specific routes
  // if (token && pathname.startsWith(ROUTES.ADMIN_ROUTES)) {
  //   return await handleAdminRoutes(req, token);
  // }

  return NextResponse.next();
}

/**
 * Validates role of user to access admin routes
 * @param {import("next/server").NextRequest} req
 * @param {string} token token
 */
async function handleAdminRoutes(req, token) {
  try {
    const userData = await axios
      .get(APIS.GET_PROFILE_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);

    if (userData?.type?.includes(ROLES.ADMIN_ROLE)) {
      return NextResponse.next();
    } else {
      throw new Error("Unauthorized to access this route.");
    }
  } catch (error) {
    return redirectTo(req, ROUTES.UNAUTHORIZED_URL);
  }
}

/**
 * Redirects to url
 * @param {import("next/server").NextRequest} req
 * @param {string} url
 */
function redirectTo(req, url) {
  req.nextUrl.pathname = url;
  return NextResponse.redirect(req.nextUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
