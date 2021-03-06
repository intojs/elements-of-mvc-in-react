import React from "react";
import { screen, fireEvent, within, render } from "@testing-library/react";
import NewsletterForm from "../index";

describe("NewsletterForm", () => {
  const newsletterOptions = [
    {
      label: "One",
      value: "one",
    },
    {
      label: "Two",
      value: "two",
    },
  ];
  const [, secondOption] = newsletterOptions;
  const fullName = "Daniel Dughila";

  const fillInFullName = async () => {
    const fullNameInputEl = await screen.findByRole("textbox", {
      name: /full name/i,
    });
    fireEvent.change(fullNameInputEl, { target: { value: fullName } });
  };

  const selectNewsletter = async () => {
    const newsletterSelectButtonEl = await screen.findByRole("button", {
      name: /newsletter/i,
    });
    fireEvent.mouseDown(newsletterSelectButtonEl);
    const newsletterSelectEl = await screen.findByRole("listbox");
    const secondOptionEl = await within(newsletterSelectEl).getByText(
      secondOption.label
    );
    fireEvent.click(secondOptionEl);
  };

  const submitForm = async () => {
    const submitButtonEl = await screen.findByRole("button", {
      name: /subscribe/i,
    });
    fireEvent.submit(submitButtonEl);
  };

  it("should add a newsletter subscription", async () => {
    const onSubmitSpy = jest.fn();

    render(
      <NewsletterForm
        newsletterOptions={newsletterOptions}
        onSubmit={onSubmitSpy}
      />
    );

    await fillInFullName();
    await selectNewsletter();
    await submitForm();

    expect(onSubmitSpy).toHaveBeenCalledWith({
      fullName,
      newsletter: secondOption.value,
    });
  });
});
