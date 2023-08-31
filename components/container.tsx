import classNames from "classnames";

/**
 * The reason I have a container component is so we don't have to repeat
 * the horizontal margin everywhere. This results in more consistency.
 */
export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={classNames("mx-auto", className)}>{children}</div>;
