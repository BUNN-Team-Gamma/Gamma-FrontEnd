import { cookies } from "next/headers";

const getData = async (id: string, url: string) => {
  const cookieStore = cookies();
  const token = cookieStore.get("userToken")?.value;
  try {
    const requestOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(url, requestOptions);
    const result = await res.json();
    const data = result.filter((item: any) => id == item.text_id);
    return data[0];
  } catch (error) {
    console.log(error);
  }
};

export default async function Page({ params }: { params: { slug: string } }) {
  const id = params?.slug;
  const endpoint_base = `https://exam-prep-app-1.onrender.com/api/v1/text/extracted-texts/`;
  const data: any = await getData(id, endpoint_base);

  return (
    <div className="py-10 px-4 md:px-10 lg:px-16 2xl:px-40">
      <h2 className="text-center font-bold md:text-2xl lg:text-4xl mb-4">
        Your extracted texts
      </h2>
      <div className="text-center">
        {data?.extracted_text?.map((item: any) => (
          <p key={item} className="font-medium">{item}</p>
        ))}
      </div>
    </div>
  );
}
