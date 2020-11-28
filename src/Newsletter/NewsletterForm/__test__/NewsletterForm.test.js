import React from "react";
import { screen, fireEvent, within, render } from "@testing-library/react";
import { NewsletterSubscriptionsContext as Context } from "../../NewsletterSubscriptionsContext";
import NewsletterApi from "../../NewsletterApi";
import NewsletterForm from "../index";

describe("NewsletterForm", () => {
  const newsletters = [
    {
      code: "one",
      name: "One",
    },
    {
      code: "two",
      name: "Two",
    },
  ];
  const [, secondNewsletter] = newsletters;
  const fullName = "Daniel Dughila";
  const addSubscription = jest.fn();

  const fillInFullName = async () => {
    const fullNameInput = await screen.findByRole("textbox", {
      name: /full name/i,
    });
    fireEvent.change(fullNameInput, { target: { value: fullName } });
  };

  const selectNewsletter = async () => {
    const newsletterSelectButton = await screen.findByRole("button", {
      name: /newsletter/i,
    });
    fireEvent.mouseDown(newsletterSelectButton);
    const newsletterSelect = await screen.findByRole("listbox");
    const secondOption = await within(newsletterSelect).getByText(
      secondNewsletter.name
    );
    fireEvent.click(secondOption);
  };

  const submitForm = async () => {
    const subscribeButton = await screen.findByRole("button", {
      name: /subscribe/i,
    });
    fireEvent.submit(subscribeButton);
  };

  it("should add a newsletter subscription", async () => {
    jest.spyOn(NewsletterApi, "getNewsletters").mockReturnValue(newsletters);

    render(
      <Context.Provider value={[[], addSubscription]}>
        <NewsletterForm />
      </Context.Provider>
    );

    await fillInFullName();

    await selectNewsletter();

    await submitForm();

    expect(addSubscription).toHaveBeenCalledWith({
      fullName,
      newsletter: secondNewsletter,
    });
  });
});
