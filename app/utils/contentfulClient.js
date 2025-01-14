// contentfulClient.js
const fetchGraphQL = async (query) => {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      }
    );
  
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
  
    const { data } = await response.json();
    return data;
  };
  
  export default fetchGraphQL;
  