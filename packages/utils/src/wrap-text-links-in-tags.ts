export const wrapTextLinksInTags = (text: string) =>
  text.replaceAll(/(((https:\/\/)|(www\.))\S+)/g, (matchedUrlString: string, _, prefix: string) => {
    let formattedUrlString = matchedUrlString;

    const isUrlWithoutProtocol = prefix === 'www.';
    if (isUrlWithoutProtocol) {
      formattedUrlString = `https://${formattedUrlString}`;
    }
    return `<a href="${formattedUrlString}" target="_blank">${matchedUrlString}</a>`;
  });
