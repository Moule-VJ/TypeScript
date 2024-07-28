import { z } from "zod";

const url = "https://jsonplaceholder.typicode.com/posts";

export const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  price: z.number(),
  something: z.boolean(),
});

type Tour = z.infer<typeof tourSchema>;

const fetchData = async (url: string): Promise<Tour[]> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error! status: ${response.status}`);
    }
    const rawData: Tour[] = await response.json();

    const result = tourSchema.array().safeParse(rawData);

    if (!result.success) {
      throw new Error(result.error.errors[0].message);
    }
    return result.data;
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : "An error occurred";
    console.log(errorMsg);
    return [];
  }
};

const tours = await fetchData(url);
tours.map((tour) => {
  console.log(tour.name);
});
