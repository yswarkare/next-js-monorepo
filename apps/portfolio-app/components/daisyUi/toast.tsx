import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Toast = ({ message = '', show = false, duration = 3000 }: { message?: string, show?: boolean, duration?: number }) => {
  const [view, setView] = useState(show);
  const timer = useRef(null)


  useEffect(() => {
    clearTimeout(timer.current);
    if (show === true) {
      setView(true)
      timer.current = setTimeout(() => {
        setView(false);
      }, duration)
    }
    // return () => {
    //   clearTimeout(timer.current);
    // }
  }, [show, duration])

  return view ? (
    createPortal(
      <div className="absolute z-[100] h-screen w-screen top-0 left-0 bg-transparent">
        <div className={`toast toast-top toast-start min-w-max min-h-max shadow-xl bg-zinc-900 px-8 py-4 m-4 rounded-md animatecss animatecss-${view ? 'slideInLeft' : 'fadeOut'}`}>
          <div className="text-success text-xl">
            <span>{message}</span>
          </div>
        </div>
      </div>,
      document.getElementById('toast-parent')!
    )
  ) : '';
}

export default Toast;
