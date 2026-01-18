import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    // Add custom middleware logic here
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ['/(role-super-admin)/:path*', '/(role-admin)/:path*', '/(role-investor)/:path*', '/(role-employee)/:path*', '/(role-franchise)/:path*', '/(role-promoter)/:path*', '/(role-developer)/:path*', '/(role-freelancer)/:path*', '/(role-sovereign-owner)/:path*'],
};
