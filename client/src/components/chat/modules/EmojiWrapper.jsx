import { Spin } from "antd";
import { lazy, memo, Suspense } from "react";
// import InputEmoji from "react-input-emoji";
// import EmojiPicker from 'emoji-picker-react';
const InputEmoji = lazy(() => import("react-input-emoji"));

export const InputEmojiWrapper = ({ text, handleChange }) => {
  return (
    <>
      <Suspense fallback={<Spin />}>
        <InputEmoji
          value={text}
          keepOpened
          height="5px"
          // onResize={}
          onChange={handleChange}
          fontFamily="nunito"
          borderColor="rgba(72, 112, 223, 0.2)"
        />
      </Suspense>
    </>
  );
};
