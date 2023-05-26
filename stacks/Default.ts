import { StackContext, NextjsSite, Bucket } from "sst/constructs";

export function Default({ stack }: StackContext) {
  const bucket = new Bucket(stack, "public");

  const site = new NextjsSite(stack, "site", {
    path: "packages/web",
    bind: [bucket],
  });
  stack.addOutputs({
    SiteUrl: site.url,
  });
}
