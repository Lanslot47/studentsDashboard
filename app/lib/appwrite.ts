import { Account, Client, Databases, ID, Query } from "appwrite";

const client = new Client()
    .setEndpoint("https://nyc.cloud.appwrite.io/v1")
    .setProject("686ef16b003334467830");

export const databases = new Databases(client);
export const databaseId = "dashboardApp";
export const studentsCollectionId = "68ad4b590025e05f76e1";
export const account = new Account(client)
export { ID};
export {Query}
