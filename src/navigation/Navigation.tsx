import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import MainNavigation from "./flows/MainNavigation";
import AuthNavigation from "./flows/AuthNavigation";
import { LocalUser } from "../../types";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logInUserFromStorage } from "../features/auth/authSlice";

type Props = {};

const Navigation = (props: Props) => {
  const dispatch = useAppDispatch();
  dispatch(logInUserFromStorage());

  const localUser: LocalUser | null = useAppSelector(
    (state) => state.auth.user
  );

  return (
    <NavigationContainer>
      {localUser ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
