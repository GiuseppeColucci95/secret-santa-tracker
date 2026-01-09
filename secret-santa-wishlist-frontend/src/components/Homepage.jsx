import { useEffect, useState } from "react"

export default function Homepage() {

  //$ LOGIC
  const [user, setUser] = useState(null);
  const [wishlist, setWishlist] = useState(null);

  //! function to check if the user exists
  function doesUserExists() {

    const user = localStorage.getItem("user");

    if (user != null) {
      return JSON.parse(user);
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

  //! function to handle user registration submit form
  function handleSubmit(e) {

    e.preventDefault();
    const formData = new FormData(e.target);

    const user = {};
    user.firstName = formData.get("firstName");
    user.lastName = formData.get("lastName");
    user.phone = formData.get("phone");
    user.mail = formData.get("mail");

    localStorage.setItem("user", JSON.stringify(user));

  }

  //! useEffect function at page start
  useEffect(() => {

    if (doesUserExists()) {
      console.log("user exist");
      console.log(doesUserExists());
      setUser(doesUserExists());

      if (isListPublished()) {
        console.log("list published");
      }
      else {
        console.log("list not published yet");

        if (doesListExists()) {
          console.log("list exist");
        }
        else {
          console.log("list does not exist");
        }
      }
    }

  }, []);

  //$ TEMPLATE
  return (
    <>
      <h1 className="text-center my-4 mx-5">SECRET SANTA TRACKER</h1>

      <section className="d-flex flex-column align-items-center container">

        <h3 className="text-center my-3">Inserisci i tuoi dati qui sotto!</h3>

        <form className="w-75 d-flex flex-column align-items-center" onSubmit={handleSubmit}>

          <div className="mb-3 w-100">
            <label htmlFor="firstName" className="form-label">First name</label>
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

          <div className="mb-3 w-100">
            <label htmlFor="lastName" className="form-label">Last name</label>
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

          <div className="mb-3 w-100">
            <label htmlFor="phone" className="form-label">Phone number</label>
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

          <div className="mb-3 w-100">
            <label htmlFor="mail" className="form-label">E-mail</label>
            <input
              type="email"
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

        </form>

      </section>
      {/* USER NOT EXISTING SECTION */}
    </>
  );
}