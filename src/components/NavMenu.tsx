import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router";
import RHLogoNoWords from "./RHLogoNoWords";

const NavMenu = () => (
  <NavigationMenu className="flex min-w-full justify-between bg-zinc-500">
    <NavigationMenuItem className="flex flex-1">
      {/* add <RHLogoNoWords className="h-8 w-auto" /> to menu  that links to home */}
      <NavLink to="/">
        <NavigationMenuLink>
          <RHLogoNoWords className="h-8 w-auto" />
        </NavigationMenuLink>
      </NavLink>
    </NavigationMenuItem>
    <NavigationMenuList>
      {/* // logo */}
      {/* begin tabs */}
      <NavigationMenuItem>
        <NavLink to="/">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </NavLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavLink to="/about">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            About
          </NavigationMenuLink>
        </NavLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavLink to="/portfolio">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Portfolio
          </NavigationMenuLink>
        </NavLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavLink to="/contact">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Contact
          </NavigationMenuLink>
        </NavLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavMenu;
