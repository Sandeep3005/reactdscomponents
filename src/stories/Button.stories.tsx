import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "../components/Buttton";

export default {
  title: "Button",
  component: Button,
};

export const Primary = () => (
  <Button textContent="Primary" onClick={action("clicked")} variant="primary" />
);

export const Secondary = () => (
  <Button
    textContent="Secondary"
    onClick={action("clicked")}
    variant="secondary"
  />
);

// export const Primary = () => (
//   <Button primary onClick={action("clicked")}>
//     Primary Button
//   </Button>
// );
