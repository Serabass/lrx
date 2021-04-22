declare module "*.pegjs" {
  export class Parser {
    public parse(source: string): any;
  }

  let parser: Parser;

  export default parser;
}
