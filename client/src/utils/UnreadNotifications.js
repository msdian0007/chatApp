

export const UnreadNotifications = (notifications) => {
  return notifications.filter((n) => !n.isRead);
};

export const UserNotificationCount = (notifications, userId) => {
  let mNotifications = UnreadNotifications(notifications);
  return mNotifications.filter((n) => n.senderId === userId).length;
};


