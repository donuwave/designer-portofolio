export const routes = {} as const;

export const publicRoutes: string[] = [];

export const privateRoutes: string[] = [];

export type RouteKey = keyof typeof routes;
export type RouteValue = (typeof routes)[keyof typeof routes];
