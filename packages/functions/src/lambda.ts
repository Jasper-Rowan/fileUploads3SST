import { ApiHandler } from "sst/node/api";
import { Time } from "@s3Next/core/time";

export const handler = ApiHandler(async (_evt) => {
  return {
    body: `Hello world, jaspers a beast and sst is dope. The time is ${Time.now()}`,
  };
});
