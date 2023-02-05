import React from "react";
import { View } from "native-base";

import styles from "../../constants/Styles";
import PhoneNumberForm from "../../features/auth/sign_up_forms/PhoneNumberForm";

const SignUp = () => {
  return (
    <View style={[styles.maxSize, styles.centeredContent]}>
      <View style={[styles.paddedContent]}>
        <PhoneNumberForm />
      </View>
    </View>
  );
};

export default SignUp;
