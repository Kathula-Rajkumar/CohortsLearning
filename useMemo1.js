import React, { useState, useMemo } from 'react';

// A list of words used to generate random sentences
const words = ["hi", "hello", "there", "from", "from", "whatever"];
const TOTAL_LINES = 100; // Total number of sentences to generate
const ALL_WORDS = [];    // This array will store all generated sentences

// Generate 100 random sentences using the words array
for (let i = 0; i <= TOTAL_LINES; i++) {
  let sentence = "";
  for (let j = 0; j < words.length; j++) {
    // Pick a random word and add it to the sentence
    sentence += words[Math.floor(words.length * Math.random())];
    sentence += " "; // Add a space between words
  }
  ALL_WORDS.push(sentence.trim()); // Add sentence to ALL_WORDS, trimming trailing space
}

export function Assignment2() {
  // Initialize sentences state with pre-generated ALL_WORDS
  const [sentences] = useState(ALL_WORDS);

  // This state stores the current text typed into the filter input
  const [filter, setFilter] = useState("");

  // useMemo will re-calculate filteredSentences only when `sentences` or `filter` changes
  const filteredSentences = useMemo(() => {
    return sentences.filter(x => x.includes(filter)); // Filter sentences that include the typed value
  }, [sentences, filter]);

  return (
    <div>
      {/* Input field to type text for filtering sentences */}
      <input
        type='text'
        placeholder='Filter text...'
        onChange={(e) => setFilter(e.target.value)} // Update filter state when input changes
      />

      {/* Display the filtered sentences below the input */}
      {filteredSentences.map((word, index) =>
        <div key={index}>
          {word}
        </div>
      )}
    </div>
  );
}


// how it works
Generates random sentences from given words.

Renders all sentences in the UI.

When you type something in the input box, it filters the sentences containing that text.

useMemo() avoids recalculating the filter logic unnecessarily — this improves performance.
