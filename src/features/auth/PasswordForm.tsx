// Native Base
import { Input } from "native-base";

// React Native
import { View } from "react-native";

// React Navigation
import { NavigationProp, useNavigation } from "@react-navigation/native";

// React Hook Form
import { useForm, Controller } from "react-hook-form";

// Expo
import { AntDesign } from "@expo/vector-icons";

// Habitopia
import { addSignUpData, signUpUser } from "@features/auth/authSlice";
import { useDispatch } from "@app/hooks";
import Button from "@components/Button";
import Text from "@components/Text";
import { AuthParams, ButtonType, TextType } from "types";

type formData = {
  password: string;
};

/**
 * A form which allows the user to enter their password, adds
 * that data to the Redux store, attempts to authenticate the
 * user (this involves the a confirmation code being sent
 * to their email address), and then navigates to the
 * confirmation code screen.
 *
 * @returns - The password form component.
 */
const PasswordForm = () => {
  // The initial state of the form data.
  const { control, handleSubmit } = useForm({
    defaultValues: {
      password: "",
    },
  });

  // A handler for when the user submits the form.
  const dispatch = useDispatch();

  const onSubmit = async (data: formData) => {
    dispatch(addSignUpData(data));
    await dispatch(signUpUser());
    navigation.navigate("ConfirmationCode");
  };

  const navigation = useNavigation<NavigationProp<AuthParams>>();

  return (
    <View>
      <Text style={{ marginBottom: 5 }} type={TextType.Subtle}>
        Password
      </Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            size="xl"
            type="password"
          />
        )}
        name="password"
      />
      <Button
        style={{ marginTop: 20 }}
        isFullWidth
        icon={<AntDesign name="arrowright" size={20} color="white" />}
        type={ButtonType.Primary}
        onPress={handleSubmit(onSubmit)}
      >
        Continue
      </Button>
    </View>
  );
};

export default PasswordForm;
