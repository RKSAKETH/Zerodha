import {render , screen , fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom"
import Hero from "../landingPage/Home/Hero.jsx"

test("render Hero image in home section" ,()=>{
    render(<Hero/>);
    const heroImage = screen.getByAltText("Homehero");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src","images/homeHero.png")
})
