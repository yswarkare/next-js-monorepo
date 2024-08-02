const InputUI = ({ id, className, labelClass, children, ...restProps }: { id: string, className?: string, labelClass?: string, children?: string, restProps?: any }) => {
  return (
    <div className="relative mb-3" data-twe-input-wrapper-init>
      <input
        type="text"
        className={`peer block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 ${className}`}
        id={id}
        placeholder="Example label" {...restProps} />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary ${labelClass}`}
      >{children}
      </label>
    </div>
  );
}

export default InputUI;
