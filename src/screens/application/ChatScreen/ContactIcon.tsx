import { Entypo } from "@expo/vector-icons";
import React from "react";

type Props = {};

const ContactIcon = (props: Props) => {
  return (
    <Entypo
      name="new-message"
      size={18}
      color={"royalblue"}
      style={{ marginRight: 15 }}
    ></Entypo>
  );
};

export default ContactIcon;
