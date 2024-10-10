import { Form, useLoaderData } from "react-router-dom";
import { getContact } from "../contact";

export async function contactLoader({ params }) {
  try {
    const contact = await getContact(params.contactId);
    return { contact };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to load contact", { status: 500 });
  }
}

export default function Contact() {
  const { contact } = useLoaderData();
  console.log(contact);

  const { first, last, avatar, twitter, notes, favorite } = contact;

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
  const favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
