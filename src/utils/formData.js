export const getFormDataFromObject = (data) => {
  const formData = new FormData();
  Object.entries(data).forEach((entry) => {
    formData.append(entry[0], entry[1]);
  });
  return formData;
};
