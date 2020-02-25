import React from "react";

const HomePage = () => {
  return (
    <section>
      <h1>Mock Entry Challenge</h1>
      <main>
        <h3>So, you're thinking about completing your Entry Challenge?</h3>
        <h4 className="instruction">
          {" "}
          Before you go any further, please click the "Fork" button on the top
          right of the screen. <br />
          <br />
          This will give you your own fresh copy of the project to work with
        </h4>
        <hr />
        <p>
          This site contains two challenge.
          <br />
          <br />
          They are
          <strong> not assessed in any way.</strong>
          <br />
          <br />
          They are a tool to help you (and us) decide whether you are ready to
          try the Entry Challenge, or whether you should spend a bit more time
          practicing applying what you've learned.
          <br />
          <br />
          The format will be similar to the actual Entry Challenge.
          <br />
          <br />
          To help you figure out whether you're ready, try doing these
          challenges under timed conditions - 15 minutes per task - to practice
          the kind of setting and time you'll have for the Entry Challenge.
        </p>
        <p>Some of the topics that will be covered are:</p>
        <hr />
        <ul>
          <li>
            <p>Conditional logic (if statements)</p>
          </li>
          <li>
            <p>Using arrays and accessing items inside them</p>
          </li>
          <li>
            <p>Iteration (for loops)</p>
          </li>
        </ul>
        <hr />
        <p>
          If you're not confident with these topics yet, it's probably not time
          for you to try this Mock Challenge (or your Entry Challenge). There
          are plenty of resources on these topics and we also run regular{" "}
          <a href="https://northcoders.com/events">drop-in sessions</a> that you
          can make use of.
        </p>
        <p>If you feel ready, go ahead and start working on Challenge 1!</p>
      </main>
    </section>
  );
};

export default HomePage;
