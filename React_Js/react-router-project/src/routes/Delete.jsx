import { redirect } from "react-router-dom";
import { deleteContact } from "../contact";

export async function deleteAction({ params }) {
  await deleteContact(params.contactId);
  return redirect("/");
}
