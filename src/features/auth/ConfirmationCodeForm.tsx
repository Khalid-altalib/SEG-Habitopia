// Native Base
import { Input } from "native-base";

// React Hook form
import { useForm, Controller } from "react-hook-form";

// Expo
import { AntDesign } from "@expo/vector-icons";

// React Navigation
import { NavigationProp, useNavigation } from "@react-navigation/native";

// React Native
import { View } from "react-native";

// Habitopia
import { addSignUpData, sendConfirmationCode } from "@features/auth/authSlice";
import { useDispatch } from "@app/hooks";
import Button from "@components/Button";
import Text from "@components/Text";
import { AuthParams, ButtonType, TextType } from "types";

type formData = {
  confirmationCode: string;
};

/**
 * A form which allows the user to enter the confirmation code which
 * is emailed to them, and then adds the entered code to the sign up
 * data in the Redux store so it can checked, before finally navigating
 * the user to the welcome screen. (This screen shouldn't be showed to
 * them unless the code was wrong.)
 *
 * @returns - The confirmation code form component.
 */
const ConfirmationCodeForm = () => {
  // The initial state of the form data.
  const { control, handleSubmit } = useForm({
    defaultValues: {
      confirmationCode: "",
    },
  });

  // A handler for when the user submits the form data.
  const dispatch = useDispatch();

  const onSubmit = async (data: formData) => {
    dispatch(addSignUpData(data));
    await dispatch(sendConfirmationCode());
    navigation.navigate("Welcome");
  };

  const navigation = useNavigation<NavigationProp<AuthParams>>();

  return (
    <View>
      <Text style={{ marginBottom: 5 }} type={TextType.Subtle}>
        Confirmation Code
      </Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} size="xl" />
        )}
        name="confirmationCode"
      />
      <Button
        onPress={handleSubmit(onSubmit)}
        type={ButtonType.Primary}
        style={{ marginTop: 20 }}
        isFullWidth
        icon={<AntDesign name="arrowright" size={20} color="white" />}
      >
        Continue
      </Button>
    </View>
  );
};

export default ConfirmationCodeForm;
