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
import { addSignUpData } from "@features/auth/authSlice";
import { useDispatch } from "@app/hooks";
import Button from "@components/Button";
import Text from "@components/Text";
import { AuthParams, ButtonType, TextType } from "types";

type formData = {
  email: string;
};

/**
 * A form which allows the user to enter their email address,
 * adds that data to the Redux store, and then navigates to
 * the password screen.
 *
 * @returns - The email address form component.
 */
const EmailAddressForm = () => {
  // The initial state of the form data.
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });

  // A handler for when the user submits the form.
  const dispatch = useDispatch();

  const onSubmit = async (data: formData) => {
    dispatch(addSignUpData(data));
    navigation.navigate("Password");
  };

  const navigation = useNavigation<NavigationProp<AuthParams>>();

  return (
    <View>
      <Text style={{ marginBottom: 5 }} type={TextType.Subtle}>
        Email Address
      </Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} size="xl" />
        )}
        name="email"
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

export default EmailAddressForm;
