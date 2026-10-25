/*
 * A navigation item stays active on its nested routes, so /blog/hello keeps
 * the Blog item active.
 */
export function isActiveNavPath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
