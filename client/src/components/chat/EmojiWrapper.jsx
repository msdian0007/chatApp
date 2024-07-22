import { Spin } from "antd";
import { lazy, memo, Suspense } from "react";
// import InputEmoji from "react-input-emoji";
const InputEmoji = lazy(() => import("react-input-emoji"));

export const InputEmojiWrapper = memo(({ text, handleChange }) => {
  return (
    <>
      <Suspense fallback={<Spin />}>
        <InputEmoji
          value={text}
          onChange={handleChange}
          fontFamily="nunito"
          borderColor="rgba(72, 112, 223, 0.2)"
        />
      </Suspense>
    </>
  );
});
