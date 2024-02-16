import { useEffect } from "react";

export default function useWow() {
  useEffect(() => {
    import("wowjs").then((WOW) => {
      const wow = new WOW.default.WOW();
      wow.init();
    });
  }, []);
}
