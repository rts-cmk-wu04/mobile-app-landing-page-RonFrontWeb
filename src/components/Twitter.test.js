import {render,screen } from "@testing-library/react"
import Twitter from "./Twitter"


describe("test på twitter",() => {
    it("tester på navn i komponent", ()=> {
        render(
            <Twitter name="matchmed"/>
        );
        
        var name = screen.getByText(/matchmed/i)

        expect(name).toBeInTheDocument();
    })
    it("tester på text i komponent", ()=> {
        render(
            <Twitter text="passesammen"/>
        );
        
        var text = screen.getByText(/passesammen/i)

        expect(text).toBeInTheDocument();
    })
    it("tester på billede i komponent", ()=> {
        render(
            <Twitter image="/image.svg" name="samesame"/>
        );
        
        var image = screen.getByRole("img")

        expect(image).toHaveAttribute("src", "/image.svg")
        expect(image).toHaveAttribute("alt", "samesame")

     
    })
    
})