import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import Menu from "./Menu";

describe("menu/Menu", () => {
  takeSnapshotsOf(Menu, [
    {
      description: "renders with no props",
      props: {}
    }
  ]);
});
