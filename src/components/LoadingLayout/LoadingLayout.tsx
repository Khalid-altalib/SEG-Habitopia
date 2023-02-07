import { Spinner } from "native-base";
import React from "react";

type Props = {
  loading: boolean;
  children: React.ReactNode;
};

const LoadingLayout = (props: Props) => {
  return props.loading ? <Spinner /> : props.children;
};

export default LoadingLayout;
