import { message } from "antd";

export const handleError = (error) => {
  if (error.response && error.response.data) {
    message.error(error.response.data.message);
  } else if (error.message) {
    message.error(error.message);
  } else {
    message.error("An error occurred. Please try again.");
  }
};
