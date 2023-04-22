import { Client } from "@notionhq/client";
import transformer from "../utils/transformers";
import databases_ids from "../utils/databases_ids";

type TransformerTypes = keyof typeof transformer;

export class NotionClient {
  client: any;

  constructor() {
    if (!process.env.NEXT_PUBLIC_NOTION_TOKEN) {
      throw new Error("No API TOKEN in .env");
    }

    this.client = new Client({
      auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
    });
  }

  async getPage(type: TransformerTypes) {
    if (!type) return [];

    const database_id = databases_ids[type];

    const db = await this.client.databases.query({
      database_id,
    });

    const result = db.results.map((todo: any) => {
      return transformer[type](todo);
    });

    return result;
  }
}
