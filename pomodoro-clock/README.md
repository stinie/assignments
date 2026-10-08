# Pomodoro Clock

A JavaScript Pomodoro Clock built for the Matrix Master
Full Stack Developer bootcamp.

## Assignment

Build a functional Pomodoro timer that allows users to:

- Start a 25-minute work session.
- Hear a sound when the work session finishes.
- Reset the timer for another Pomodoro.
- Customize the duration of a Pomodoro.

## Features

- Customizable work duration (1–60 minutes).
- Customizable break duration (1–60 minutes).
- Start, Pause, and Reset buttons.
- Automatic transition from work to break.
- Completed-cycle counter.
- Gentle audio notification when a work session ends.

## Technologies

- HTML
- CSS (including CSS Grid)
- JavaScript
- Web Audio API

## Learning approach

I used AI to help me explore the existing Pomodoro example,
understand its logic, and work through design decisions.

I developed the customization step by step, separating the
duration settings from the countdown display.

I also explored the Web Audio API to create a notification
sound and make it gentler using an oscillator and a GainNode.

My focus was on understanding the existing code, learning
to think through the changes, and building a working solution.

## Further improvements

- Refine the visual styling and layout.
- Improve the user experience.
- Explore additional sound notifications.