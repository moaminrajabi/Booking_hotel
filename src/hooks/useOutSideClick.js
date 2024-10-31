import { useEffect } from "react";

export default function useOutSideClick(ref, exceptionID, cb) {
  useEffect(() => {
    function handleOutSideClick(e) {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        e.target.id == !exceptionID
      ) {
        cb();
      }
    }

    document.addEventListener("mousedown", handleOutSideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);
}
