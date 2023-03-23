"use client";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function DarkModeSwitch() {
  const [mounted , setMounted] = useState(false)

  useEffect(()=>setMounted(true),[])

  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="text-lg hover:text-amber-500">
      { mounted && (currentTheme === "dark" ? (
        <MdLightMode onClick={() => setTheme("light")} />
      ) : (
        <BsFillMoonFill onClick={() => setTheme("dark")} />
      ))}
    </div>
  );
}
