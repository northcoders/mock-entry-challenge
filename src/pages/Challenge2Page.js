import React from "react";

const Challenge2Page = () => {
  return (
    <section>
      <h1>Challenge 2</h1>
      <main>
        <section className="task-intro">
          <p>
            Your task is to write a function that will take all the numbers from
            an array and multiply them by 7.
          </p>
          <hr />
          <p>
            For example <br />
          </p>
          <section className="example-test">
            <p>
              {" "}
              Given the input: <code>[3]</code> , your multiply function would
              return: <code>[21]</code>{" "}
            </p>
          </section>

          <section className="example-test">
            <p>
              {" "}
              Given the input: <code>[2,3,5,8]</code>, your multiply function
              would return: <code>[14, 21, 35, 56]</code>
            </p>
          </section>
          <hr />
        </section>
        <section className="task-setup">
          <h3>To get started follow these steps:</h3>
          <h5 className="reminder">
            Remember to keep yourself to timed conditions of around 15 minutes
          </h5>
          <h5 className="reminder">
            Above you can click the "Browser" tab any time you want to see these
            instructions again, and should do so when you have finished the task
            and want to move on{" "}
          </h5>

          <ol>
            <li>
              <p>
                Click the "Tests" tab on the top right to see the tests failing.
                <br /> <br />
                Under the "Test Suites" heading if you click{" "}
                <code>/src/__tests__/ challenge2.test.js</code> you will see how
                the tests are currently failing in the "Test Summary" Section.
                <br />
                <br /> Every failing test will show you what was received vs.
                what was the expected outcome of your function.
                <br />
                <br />
                If it passes there will be a green tick.
                <br />
                <br />
                <strong>
                  {" "}
                  Remember: If you want to see this page again you can simply
                  click back to it using the browser button
                </strong>
              </p>
            </li>
            <li>
              <p>
                Open up <code>2-multiply.js</code> on the left tab and start
                writing your solution. As you write your solution, the tests on
                the right will keep being run and updated.
                <strong> The aim is to get all tests passing </strong>
              </p>
            </li>
            <li>
              <p>
                If you would like to <code>console.log</code> anything, it will
                appear if you click the "console" tab to the bottom right
              </p>
            </li>
          </ol>
        </section>
      </main>
    </section>
  );
};

export default Challenge2Page;
