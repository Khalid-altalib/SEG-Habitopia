import { Spinner, Text, View } from "native-base";
import React from "react";

type Props = {
  loading: boolean;
  children: React.ReactNode;
};

const LoadingLayout = (props: Props) => {
  const { loading, children } = props;

  return <>{loading ? <Spinner /> : children}</>;
};

export default LoadingLayout;
