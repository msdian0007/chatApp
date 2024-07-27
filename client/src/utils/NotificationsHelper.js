import sendChatText from "../assets/audio/sendChatText.mp3";
import receivedChatText from "../assets/audio/receivedChatText.mp3";
import receivedUnreadText from "../assets/audio/receivedUnreadText.mp3";

export const UnreadNotifications = (notifications) => {
  return notifications.filter((n) => !n.isRead);
};

export const UserNotificationCount = (notifications, userId) => {
  let mNotifications = UnreadNotifications(notifications);
  return mNotifications.filter((n) => n.senderId === userId).length;
};

export const playNotifications = (type) => {
  try {
    let audio;
    if (type === "SEND") {
      audio = new Audio(sendChatText);
    } else if (type === "RECV") {
      audio = new Audio(receivedChatText);
    } else if (type === "UN") {
      audio = new Audio(receivedUnreadText);
    }
    return audio.play();
  } catch (error) {
    console.log("Failed to play sound:", error);
  }
};
