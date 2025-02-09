# Unhandled Exception: Division by Zero in TypeScript

This repository demonstrates a common error in TypeScript: failing to handle exceptions, specifically a division by zero error. The `bug.ts` file shows the problematic code, and `bugSolution.ts` presents a corrected version.

## Problem

The original code has a `divide` function which correctly throws an error if the denominator is zero. However, the calling code doesn't include any error handling, resulting in an unhandled exception and program crash when `divide(20, 0)` is called.

## Solution

The solution implements error handling using a `try...catch` block. This allows the program to gracefully handle the exception, preventing a crash and providing a more robust user experience.