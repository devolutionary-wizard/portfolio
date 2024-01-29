"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

export function ThemeContext({ children } : any) {
	return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
