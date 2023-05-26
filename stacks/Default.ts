import { StackContext, NextjsSite, Bucket, Api } from "sst/constructs";

export function Default({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  const bucket = new Bucket(stack, "public");

  const site = new NextjsSite(stack, "site", {
    path: "packages/web",
    bind: [bucket],
  });
  stack.addOutputs({
    SiteUrl: site.url,
  });
}
