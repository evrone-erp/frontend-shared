import React from "react";
import { BaseIconButton } from "components/base-icon-button";
import { BaseComponentProps } from "design-system/types";
import { useThemeType } from "design-system";

export const ToggleThemeIconButton: React.FC<BaseComponentProps> = (props) => {
  const [theme, setTheme] = useThemeType();
  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <BaseIconButton
      type="theme"
      color="6"
      size={18}
      visibleIndent={6}
      onClick={handleClick}
      {...props}
    />
  );
};
