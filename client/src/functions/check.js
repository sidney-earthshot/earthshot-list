const checkNestedItem = (obj, searchTerms) => {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      if (searchTerms.some((term) => obj[key].toLowerCase().includes(term))) {
        return true;
      }
    } else if (typeof obj[key] === "object") {
      if (checkNestedItem(obj[key], searchTerms)) {
        return true;
      }
    }
  }
  return false;
};

export { checkNestedItem };
