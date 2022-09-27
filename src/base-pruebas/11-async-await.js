export const getImagen = async () => {
  try {
    const apiKey = "jpt52z08FuLn2cnRfky3ePk8Q4x4zY5H";
    // const apiKey = "jpt52z08FuLn2cnRfky3ePk8Q4x4zY5HFALSE"; // INVALIDO
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;
    return url;
  } catch (error) {
    // manejo del error
    // console.error(error);
    return `No se encontro la imagen`;
  }
};
