const getDomainName = (url: string) => {
  const start = url.substring(0, 10);
  const urlSplit = url.split(".");
  console.log("Split", urlSplit);
  if (start === "http://www") {
    return urlSplit[1];
  } else if (urlSplit[0] === "https://www") {
    return urlSplit[1];
  } else if (urlSplit[0] === "www") {
    return urlSplit[1];
  } else if (urlSplit[0].substring(0, 5) === "https") {
    return urlSplit[0].substring(8);
  } else if (urlSplit[0].substring(0, 7) === "http://") {
    return urlSplit[0].substring(7);
  } else {
    return urlSplit[0];
  }
};

const getDomainNameBeta = (url: string) => {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
};
