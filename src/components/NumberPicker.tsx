import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  const [currentValue, newValue] =
    useState<string[]>([]);

  const handleAddSkiingEmoji = () => {
    newValue([...currentValue, "🏂"]);
  };

  const handleAddBeachEmoji = () => {
    newValue([...currentValue, "🏝"]);
  };

  const handleAddSurfEmoji = () => {
    newValue([...currentValue, "🏄"]);
  };

  const handleAddCampingEmoji = () => {
    newValue([...currentValue, "🏕"]);
  };

  const handleAddCityEmoji = () => {
    newValue([...currentValue, "🏙"]);
  };

  const emojiHistory = currentValue.map(x=> (<><li>{x}</li></>))

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Fave emoji: {currentValue[currentValue.length-1]} previous emoji: {currentValue[currentValue.length-2]}</p>
      <button onClick={handleAddSkiingEmoji}>🏂</button>
      <button onClick={handleAddBeachEmoji}>🏝</button>
      <button onClick={handleAddSurfEmoji}>🏄</button> 
      <button onClick={handleAddCampingEmoji}>🏕</button> 
      <button onClick={handleAddCityEmoji}>🏙</button> 
      <hr />
      <p>History of all selected emojis:</p>
      <ul>{emojiHistory.slice(Math.max(emojiHistory.length -5, 0))}</ul>
    </>
  );
}
