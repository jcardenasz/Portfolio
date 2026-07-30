export interface GuideMeta {
  route: string;       // used in the URL: /guides/:route
  title: string;
  description: string;
  date: string;
  tags?: string[];
  fileName: string;    // e.g. 'angular-signals.md'
}
