import React from 'react';

// Animation Styles
const animationStyles = {
    fadeIn: "opacity-0 transition-opacity duration-300 ease-in-out transform hover:scale-105", // Fade-in effect with slight zoom on hover
    fadeOut: "opacity-100 transition-opacity duration-300 ease-in-out transform hover:scale-95", // Fade-out effect with slight zoom out on hover
    slideInLeft: "transform translate-x-full transition-transform duration-300 ease-in-out", // Slide in from the left
    slideInRight: "transform -translate-x-full transition-transform duration-300 ease-in-out", // Slide in from the right
    slideOutLeft: "transform -translate-x-full transition-transform duration-300 ease-in-out", // Slide out to the left
    slideOutRight: "transform translate-x-full transition-transform duration-300 ease-in-out", // Slide out to the right
    bounce: "animate-bounce", // Bounce animation (useful for emphasis or attention)
    shake: "animate-shake", // Shake effect for alerts or attention-grabbing
    pulse: "animate-pulse", // Pulse effect for attention or to emphasize an element
    zoomIn: "transform scale-0 opacity-0 transition-transform duration-300 ease-in-out", // Zoom-in effect
    zoomOut: "transform scale-105 opacity-0 transition-transform duration-300 ease-in-out", // Zoom-out effect
    fadeUp: "opacity-0 transform translate-y-10 transition-opacity duration-300 ease-out", // Fade and slide up effect
    fadeDown: "opacity-0 transform translate-y-10 transition-opacity duration-300 ease-out", // Fade and slide down effect
    slideUp: "transform translate-y-full transition-transform duration-300 ease-out", // Slide-up effect
    slideDown: "transform -translate-y-full transition-transform duration-300 ease-out", // Slide-down effect
    flipInX: "transform rotate-x-180 opacity-0 transition-transform duration-500 ease-in-out", // Flip in from the X axis
    flipInY: "transform rotate-y-180 opacity-0 transition-transform duration-500 ease-in-out", // Flip in from the Y axis
    flipOutX: "transform rotate-x-180 opacity-0 transition-transform duration-500 ease-in-out", // Flip out to the X axis
    flipOutY: "transform rotate-y-180 opacity-0 transition-transform duration-500 ease-in-out", // Flip out to the Y axis
    fadeInUp: "opacity-0 translate-y-6 transition-all duration-500 ease-out", // Fade-in with upward motion
    fadeInDown: "opacity-0 translate-y-6 transition-all duration-500 ease-out", // Fade-in with downward motion
    spin: "animate-spin", // Continuous spin animation
    spinReverse: "animate-spin-reverse", // Reverse spin animation
};

// Transition Effects
const transitionStyles = {
    hoverScale: "transition-transform duration-300 ease-in-out transform hover:scale-105", // Scale up on hover
    hoverScaleDown: "transition-transform duration-300 ease-in-out transform hover:scale-95", // Scale down on hover
    hoverOpacity: "transition-opacity duration-200 ease-in-out hover:opacity-80", // Opacity change on hover
    hoverShadow: "transition-shadow duration-300 ease-in-out hover:shadow-lg", // Shadow effect on hover
    hoverShadowDark: "transition-shadow duration-300 ease-in-out hover:shadow-xl", // Darker shadow on hover
    hoverBackground: "transition-background duration-300 ease-in-out hover:bg-gray-100", // Background color change on hover
    hoverBorder: "transition-border duration-300 ease-in-out hover:border-gray-300", // Border color change on hover
    focusOutline: "focus:outline-none focus:ring-2 focus:ring-blue-500", // Focus outline with ring effect
    focusBackground: "focus:bg-blue-100", // Change background color on focus
    focusShadow: "focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50", // Focus shadow effect
    textColorChange: "transition-colors duration-300 ease-in-out hover:text-blue-600", // Text color change on hover
    textOpacity: "transition-opacity duration-300 ease-in-out hover:text-opacity-80", // Text opacity change on hover
    textShadow: "transition-shadow duration-300 ease-in-out hover:shadow-lg", // Text shadow effect on hover
    linkHover: "transition-colors duration-200 ease-in-out hover:text-blue-500", // Link color change on hover
    smoothScroll: "scroll-smooth", // Smooth scrolling behavior
    hoverTransform: "transition-transform duration-300 ease-in-out hover:rotate-2", // Slight rotation effect on hover
    hoverBrightness: "transition-brightness duration-300 ease-in-out hover:brightness-90", // Brightness effect on hover
};

// Example of using multiple styles together:
const combinedStyles = {
    modal: `${animationStyles.fadeIn} ${transitionStyles.hoverScale}`,
    button: `${transitionStyles.hoverShadow} ${animationStyles.zoomIn}`,
    tableRow: `${animationStyles.slideInLeft} ${transitionStyles.hoverBackground}`,
};

const AnimationTransitionDemo = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl mb-8">Animation and Transition Styles Demo</h1>

            <div className="space-y-8">
                {/* Fade In Example */}
                <div className={`${animationStyles.fadeIn} p-6 bg-blue-500 text-black rounded`}>
                    Fade In Effect
                </div>

                {/* Slide In Left Example */}
                <div className="animate-slideInLeft p-6 bg-green-500 text-white rounded">
                    Slide In Left
                </div>



                {/* Bounce Effect */}
                <div className={`${animationStyles.bounce} p-6 bg-yellow-500 text-white rounded`}>
                    Bounce Effect
                </div>

                {/* Zoom In Effect */}
                <div className={`${animationStyles.zoomIn} p-6 bg-red-500 text-white rounded`}>
                    Zoom In Effect
                </div>

                {/* Hover Effects */}
                <button className={`${transitionStyles.hoverScale} p-4 bg-purple-500 text-white rounded`}>
                    Hover Scale
                </button>

                <button className={`${transitionStyles.hoverShadow} p-4 bg-orange-500 text-white rounded`}>
                    Hover Shadow
                </button>

                <div className={`${transitionStyles.hoverOpacity} p-6 bg-gray-500 text-white rounded`}>
                    Hover Opacity
                </div>

                <a href="#" className={`${transitionStyles.linkHover} text-blue-500`}>
                    Hover Link Color
                </a>
            </div>
        </div>
    );
};

export default AnimationTransitionDemo;
