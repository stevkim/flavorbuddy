type TConvertBase64 = string | ArrayBuffer | null;

export const convertImageFileToBase64 = (
  file: File,
): Promise<TConvertBase64> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.onerror = () => reject(fileReader.error);
  });
};
