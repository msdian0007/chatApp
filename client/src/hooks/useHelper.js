
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
    
  };
};
