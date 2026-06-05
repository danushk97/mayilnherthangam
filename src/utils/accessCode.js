export function matchesAccessCode(input, encodedB64) {
  try {
    return btoa(input.trim().toLowerCase()) === encodedB64
  } catch {
    return false
  }
}

// Encode a new code in the browser console: btoa('your-code'.toLowerCase())
