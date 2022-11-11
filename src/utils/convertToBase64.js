export const getBase64 = (file) => {
  // Convert file to Blob if not already
  let blobFile = file;
  if (!(blobFile instanceof Blob)) {
    blobFile = new Blob([file], { type: file.fileType });
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blobFile);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const transformToBase64List = async (eventFile) => {
  if (!eventFile) {
    return;
  }

  let eventFileKeys = Object.keys(eventFile);

  const promises = eventFileKeys.map(async (key) => {
    return await getBase64(eventFile[key]);
  });

  const base64Files = await Promise.all(promises);

  const filesDetails = base64Files.map((base64File, index) => ({
    name: eventFile[index].name,
    fileType: eventFile[index].type,
    fileSrc: base64File,
  }));

  return filesDetails;
};
