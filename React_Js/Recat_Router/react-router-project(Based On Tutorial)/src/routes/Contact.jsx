import { Form, useFetcher, useLoaderData } from "react-router-dom";
import { getContact, updateContact } from "../contact";

export async function contactLoader({ params }) {
  try {
    const contact = await getContact(params.contactId);
    return { contact };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to load contact", { status: 500 });
  }
}

export async function contactAction({ request, params }) {
  const formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}

export default function Contact() {
  const { contact } = useLoaderData();

  const { first, last, avatar, twitter, notes } = contact;

  return (
    <div id="contact">
      <div>
        <img
          key={avatar}
          src={avatar || `https://robohash.org/${contact.id}.png?size=200x200`}
          alt={`${first || last}'s avatar`}
        />
      </div>

      <div>
        <h1>
          {first || last ? (
            <>
              {first} {last}
            </>
          ) : (
            <i>No Name</i>
          )}
          <Favorite contact={contact} />
        </h1>

        {twitter && (
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/${twitter}`}
            >
              {twitter}
            </a>
          </p>
        )}

        {notes && <p>{notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  const fetcher = useFetcher();
  const favorite = fetcher.formData
    ? fetcher.formData.get("favorite") === "true"
    : contact.favorite;
  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={contact.favorite ? "false" : "true"}
        aria-label={
          contact.favorite ? "Remove from favorites" : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}
