import { useState } from "react";
import { motion } from "motion/react";
import thankYouImage from "./assets/illustration-thank-you.svg";
import starIcon from "./assets/icon-star.svg";

function App() {
  const [rate, setRate] = useState(undefined);
  const [isSubmitted, setIsSubmitted] = useState(false);
  console.log(isSubmitted);

  function RatingButtons() {
    const ratingRange = [1, 2, 3, 4, 5];

    return ratingRange.map((number, index) => {
      const isSelected = rate === index + 1 ? true : false;

      return (
        <label
          className={`flex size-10.5 cursor-pointer items-center justify-center rounded-full transition-colors duration-75 ease-in hover:text-black ${isSelected ? "bg-white text-black" : "hover:bg-Orange bg-gray-700"}`}
          htmlFor={`option-${number}`}
          key={number}
        >
          <input
            type="radio"
            name="rating"
            id={`option-${number}`}
            className="size-0"
            value={number}
            onChange={() => setRate(number)}
            checked={isSelected ? true : false}
            required
          />
          {number}
        </label>
      );
    });
  }

  function handleSubmit() {
    setIsSubmitted(true);
  }

  return (
    <main className="bg-Very-Dark-Blue font-overpass flex min-h-screen items-center justify-center">
      {!isSubmitted ? (
        <section className="bg-Dark-Blue w-9/10 max-w-sm space-y-4 rounded-xl p-8">
          <div className="flex aspect-square size-10 items-center justify-center rounded-full bg-gray-700">
            <img src={starIcon} alt="star icon" />
          </div>

          <h1 className="text-2xl font-bold text-gray-50">How did we do?</h1>
          <p className="text-sm text-gray-400">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <p className="sr-only">You selected {rate ? rate : "nothing yet"}</p>

          <form action={handleSubmit}>
            <section className="my-6 flex items-center justify-between font-semibold text-gray-400">
              <RatingButtons />
            </section>

            <button
              className="bg-Orange hover:bg-White w-full cursor-pointer rounded-full p-2 font-bold uppercase transition-colors duration-75 ease-in"
              aria-label="submit-button"
            >
              submit
            </button>
          </form>
        </section>
      ) : (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-Dark-Blue w-9/10 max-w-sm space-y-2 rounded-xl p-8 text-center"
        >
          <img
            src={thankYouImage}
            alt="thank you image"
            className="mx-auto w-30"
          />

          <section className="my-8">
            <p className="text-Orange mx-auto w-fit rounded-full bg-gray-700 px-4 py-1 text-xs">
              You selected {rate} out of 5
            </p>
          </section>

          <p className="text-2xl font-bold text-gray-50">Thank You!</p>
          <p className="text-sm text-gray-400">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to reach get in touch!
          </p>
        </motion.section>
      )}
    </main>
  );
}
export default App;
