import { ComponentPropsWithoutRef } from "react";

// styling lives alongside inline `code` in globals.css so both render identically
const Kbd = (props: ComponentPropsWithoutRef<"kbd">) => <kbd {...props} />;

export default Kbd;
