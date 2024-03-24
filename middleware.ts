import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        '/',
        '/events/:id',
        '/spi/webhook/clerk',
        '/api/webhook/stripe',
        'api/uploadthing'
    ],
    ignoredRoutes: [
        '/spi/webhook/clerk',
        '/api/webhook/stripe',
        'api/uploadthing'
    ]
});
 
export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"
  ]
};