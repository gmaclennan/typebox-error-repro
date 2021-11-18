import { Static, Type as T } from "@sinclair/typebox";
import got from "got";

const MySchema = T.Object({
  name: T.String(),
});

type MyType = Static<typeof MySchema>;

async function getThing(id: string): Promise<MyType> {
  const url = `https://example.com/myThing.json`;
  return await got(url).json();
}

async function getAllThings(ids: string[]): Promise<MyType[]> {
  return await Promise.all(ids.map((id) => getThing(id)));
}
