export async function fetchDataFromDatoCMS() {
  const query = `
    {
        allProjetos{
            title
            description
            imgurl
            slug
            repository
            backrepository
        }
    } 
    `;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_DATOCMS_API_URL}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEXT_DATOCMS_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      }
    );

    const data = await response.json();

    return data.data.allProjetos;
  } catch (error) {
    console.error("Erro ao obter modelos de API: ", error);
    throw new Error("Erro ao obter dados da API");
  }
}
