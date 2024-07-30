export const useHelper = () => {
  return {
    getDpName: (fName, lName) => {
      if (fName && lName) {
        return fName.charAt(0) + lName.charAt(0);
      } else if (fName) {
        return fName.charAt(0);
      }
      return "";
    },
    getLatestChatOnTop: (arr) => {
      const res = arr.sort((a, b) => {
        let dateA = new Date(a.updatedAt);
        let dateB = new Date(b.updatedAt);
        return dateB - dateA;
      });
      return res;
    },
    getLatestChatOnTopByChatId: (chats, chatId) => {
      console.log(chats);
      if (!chats || chats[0]?._id === chatId) return 0;
      const filteredChats = chats?.filter((c) => c._id !== chatId);
      filteredChats?.unshift(chats.find((c) => c._id === chatId));
      return filteredChats;
    },
  };
};
