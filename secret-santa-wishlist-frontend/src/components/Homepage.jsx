import { useEffect, useState } from "react"

export default function Homepage() {

  //$ LOGIC
  const [user, setUser] = useState(null);
  const [wishlist, setWishlist] = useState(null);

  //! function to check if the user exists
  function doesUserExists() {

    const user = localStorage.getItem("user");

    if (user != null) {
      return user;
    }
    return false;
  }

  //! function to check if the list has been published
  function isListPublished() {

    const isListPublished = localStorage.getItem("isListPublished");

    if (isListPublished) {
      return true;
    }
    return false;
  }

  //! function to check if the list exixts
  function doesListExists() {

    const list = localStorage.getItem("wishlist");

    if (list !== null) {
      return list;
    }
    return false;
  }

  //! useEffect function at start of the page
  useEffect(() => {

    if (doesUserExists()) {
      console.log("user exist");
      setUser(doesUserExists());

      if (isListPublished()) {
        console.log("list published");
      }
      else {
        console.log("list not published yet");

      }
    }

  }, []);

  //$ TEMPLATE
  return (
    <>
      <h1 className="text-center my-4">SECRET SANTA TRACKER</h1>


      <section className="d-flex flex-column align-items-center">

        <h3 className="text-center mt-5 mb-3">Inserisci i tuoi dati qui sotto!</h3>

        <div className="mb-3 w-50">
          <label for="firstName" className="form-label">First name</label>
          <input
            type="text"
            required
            className="form-control"
            name="firstName"
            id="firstName"
            aria-describedby="helpId"
            placeholder="Your first name here..."
          />
        </div>

        <div className="mb-3 w-50">
          <label for="lastName" className="form-label">Last name</label>
          <input
            type="text"
            required
            className="form-control"
            name="lastName"
            id="lastName"
            aria-describedby="helpId"
            placeholder="Your last name here..."
          />
        </div>

        <div className="mb-3 w-50">
          <label for="phone" className="form-label">Phone number</label>
          <input
            type="text"
            required
            className="form-control"
            maxLength="10"
            inputMode="numeric"
            pattern="[0-9]*"
            name="phone"
            id="phone"
            aria-describedby="helpId"
            placeholder="Your phone number here..."
          />
        </div>

        <div className="mb-3 w-50">
          <label for="mail" className="form-label">E-mail</label>
          <input
            type="text"
            required
            className="form-control"
            name="mail"
            id="mail"
            aria-describedby="helpId"
            placeholder="Your e-mail here..."
          />
        </div>

        <button className="btn btn-success mt-2" type="submit">
          Continue
        </button>
      </section>
      {/* USER NOT EXISTING SECTION */}
    </>
  );
}