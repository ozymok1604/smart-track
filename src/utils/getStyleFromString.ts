const getStyleFromString = (inputString: string) => {
  const stringWithoutSpaces = inputString?.replace(/\s+/g, "");

  const modifiedString =
    stringWithoutSpaces?.charAt(0).toLowerCase() +
    stringWithoutSpaces?.slice(1);

  return modifiedString || "empty";
};

export { getStyleFromString };
