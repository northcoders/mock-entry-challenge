import React from "react";

const FinishPage = () => {
  return (
    <section>
      <h1>Finished?</h1>
      <main>
        <h2> How did that go? </h2>

        <p>
          Remember, this was designed to help you understand whether you're
          ready to try your Entry Challenge.
        </p>
        <hr />

        <h3>Some questions to ask yourself</h3>
        <ol>
          <li>
            <p>Were you able to stick within the 15 minute limit?</p>
          </li>
          <li>
            <p>
              Were you comfortable with language features such as conditional
              logic and iteration?
            </p>
          </li>
          <li>
            <p>
              Were you comfortable breaking down what the task wanted you to do?
            </p>
          </li>
          <li>
            <p>
              {" "}
              Were you find able to solve the problems without copying chunks of
              code from a Google search?
            </p>
          </li>
        </ol>
        <section className="round-up">
          <p>
            {" "}
            If the answer to the above questions is <strong>yes</strong>, then
            you're probably ready!{" "}
          </p>
          <p>
            <strong>Don't worry</strong> if you feel you need more time.
            Hopefully, this will have been a useful tool to help you understand
            what you need to work on.
          </p>
          <p>
            <strong>
              {" "}
              Either way, please call us on <strong>0333 050 4368</strong> or
              email us at{" "}
              <strong>
                manchester.apply@northcoders.com or leeds.apply@northcoders.com
              </strong>{" "}
              so we can discuss your next steps, book your Entry Challenge or
              attend a{" "}
              <a href="https://northcoders.com/events">drop in session</a> to
              help you progress. See you soon!
            </strong>
          </p>
        </section>
      </main>
    </section>
  );
};

export default FinishPage;
