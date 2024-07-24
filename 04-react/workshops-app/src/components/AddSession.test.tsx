import AddSession from "./AddSession";
import { fireEvent, render, screen } from "@testing-library/react";

describe("AddSession component", () => {
    it("should show an error message if the sequence id field is not filled in and the submit button is clicked", () => {
        // arrange
        render(<AddSession workshopId={1} />);
        const sequenceIdEl = screen.getByLabelText("Sequence ID");
        const buttonEl = screen.getByTestId("btn-submit");

        // action
        fireEvent.change(sequenceIdEl, "");
        fireEvent.click(buttonEl);

        // assert
        const errorEl = screen.getByText("Sequence ID is required");
        expect(errorEl).toBeInTheDocument();
    });
});
