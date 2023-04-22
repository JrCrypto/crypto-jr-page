const members_database_id = process.env.NEXT_PUBLIC_NOTION_DB_MEMBERS_ID;
const partners_database_id = process.env.NEXT_PUBLIC_NOTION_DB_PARTNERS_ID;

const databases_ids = {
    members: members_database_id,
    partners: partners_database_id
}

export default databases_ids;