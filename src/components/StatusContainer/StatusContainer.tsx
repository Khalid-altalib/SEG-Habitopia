import { Spinner, Text, View } from "native-base";
import React from "react";

type Props = {
  loading?: boolean;
  error?: string;
  data?: any;
  children: React.ReactNode;
};

const StatusContainer = (props: Props) => {
  const { loading, error, data, children } = props;

  const renderStatusDisplay = () => {
    if (loading) {
      return <Spinner />;
    } else if (error && error.length > 0) {
      return <Text>An error has occured</Text>;
    } else if (data && data.length === 0) {
      return <Text>No results</Text>;
    }
  };

  return (
    <View>
      <View>{children}</View>
      {renderStatusDisplay}
    </View>
  );
};

export default StatusContainer;
