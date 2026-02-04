"use client";

import * as React from "react";
import { Link } from "react-router-dom";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

// simple utility
const cn = (...classes) => classes.filter(Boolean).join(" ");

export const NavigationMenu = NavigationMenuPrimitive.Root;
export const NavigationMenuList = NavigationMenuPrimitive.List;
export const NavigationMenuItem = NavigationMenuPrimitive.Item;
export const NavigationMenuTrigger = NavigationMenuPrimitive.Trigger;
export const NavigationMenuContent = NavigationMenuPrimitive.Content;
export const NavigationMenuLink = NavigationMenuPrimitive.Link;
export const NavigationMenuViewport = NavigationMenuPrimitive.Viewport;

export function navigationMenuTriggerStyle(className = "") {
  return cn(
    "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition hover:bg-gray-100",
    className
  );
}
