export { default } from "next-auth/middleware";

export const config = { matcher: ["/admin/dashboard"] }; // TODO: can be regex
