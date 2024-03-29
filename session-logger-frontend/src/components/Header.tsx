// Renders the header bar. Holds a page title.

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Header({ children }: Props) {
  return (
    <div className="header">
      <h1 className="page-title">{children}</h1>
    </div>
  );
}

export default Header;
