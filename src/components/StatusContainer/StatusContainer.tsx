import {
  Center,
  HStack,
  QuestionOutlineIcon,
  Spinner,
  Text,
  View,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import React from "react";
import StatusIcon from "./StatusIcon";

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
      return <StatusIcon label="Loading..." icon={<Spinner />} />;
    } else if (error && error.length > 0) {
      return (
        <StatusIcon
          label="An error has occured"
          icon={<WarningOutlineIcon />}
        />
      );
    } else if (data && Array.isArray(data) && data.length === 0) {
      return (
        <StatusIcon label="No results found" icon={<QuestionOutlineIcon />} />
      );
    }
  };

  return (
    <View>
      {data && <View>{children}</View>}
      <Center>{renderStatusDisplay()}</Center>
    </View>
  );
};

export default StatusContainer;
