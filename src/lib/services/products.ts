export async function getAllProducts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/products`,
    // cache is no-cache by default same as method is GET
    {
      next: {
        // revalidates data every hour
        revalidate: 3600,
      },
    },
  );
  const { data } = await response.json();
  if (!response.ok) {
    {
      return { error: response.statusText };
    }
  }
  return data;
}
export async function getProductDetails(id: string) {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products/${id}`,
    // cache is no-cache by default same as method is GET
    {
      next: {
        // revalidates data every hour
        revalidate: 3600,
      },
    },
  );
  const { data } = await response.json();
  if (!response.ok) {
    {
      return { error: response.statusText };
    }
  }
  return data;
}
