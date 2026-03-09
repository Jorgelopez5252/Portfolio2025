import { ArrowDown } from "lucide-react";


export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">

            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 ml- animate-fade-in"> Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Jorge</span>
                    <span className="text-gradient opacity-0 animate-fade-in-delay-2"> Antonio Lopez</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Frontend Developer and UX Engineer with 5 years of experience designing and building responsive, user-centered web applications. Skilled in React, JavaScript, HTML, and CSS, with experience contributing to enterprise platforms and projects associated with brands like Coca-Cola, Pepsi, the NFL, Starbucks, Venmo, and PayPal.
                </p>

                <div className="opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                       View My Work 
                    </a>
                </div>
            </div>
        </div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
<span className="text-sm text-muted-foreground mb-2">Scroll</span>
<ArrowDown className="h-5 w-5 text-primary"/>
</div>
    </section>
};