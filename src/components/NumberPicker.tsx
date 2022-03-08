import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  const [emojiFromCurrentRender, queueRerenderWithNewEmojiValue] =
    useState(" ");
  const [secondEmojiFromCurrentRender, queueRerenderWithNewSecondValue] =
    useState(" ");
  const [addTotalEmojiFromCurrentRender, queueRerenderWithTotalValue] =
    useState(" ");
  

  const handleAddSkiingEmoji = () => {
    queueRerenderWithNewEmojiValue("🏂");
    queueRerenderWithNewSecondValue(emojiFromCurrentRender);
    queueRerenderWithTotalValue(addTotalEmojiFromCurrentRender+"🏂")
  };

  const handleAddBeachEmoji = () => {
    queueRerenderWithNewEmojiValue("🏝");
    queueRerenderWithNewSecondValue(emojiFromCurrentRender);
    queueRerenderWithTotalValue(addTotalEmojiFromCurrentRender+"🏝")
  };

  const handleAddSurfEmoji = () => {
    queueRerenderWithNewEmojiValue("🏄");
    queueRerenderWithNewSecondValue(emojiFromCurrentRender);
    queueRerenderWithTotalValue(addTotalEmojiFromCurrentRender+"🏄")
  };

  const handleAddCampingEmoji = () => {
    queueRerenderWithNewEmojiValue("🏕");
    queueRerenderWithNewSecondValue(emojiFromCurrentRender);
    queueRerenderWithTotalValue(addTotalEmojiFromCurrentRender+"🏕")
  };

  const handleAddCityEmoji = () => {
    queueRerenderWithNewEmojiValue("🏙");
    queueRerenderWithNewSecondValue(emojiFromCurrentRender);
    queueRerenderWithTotalValue(addTotalEmojiFromCurrentRender+"🏙")
  };

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Chosen emoji's: {emojiFromCurrentRender}and{secondEmojiFromCurrentRender}</p>
      <p>Emoji History: {addTotalEmojiFromCurrentRender}</p>
      <button onClick={handleAddSkiingEmoji}>🏂</button>
      <button onClick={handleAddBeachEmoji}>🏝</button>
      <button onClick={handleAddSurfEmoji}>🏄</button> 
      <button onClick={handleAddCampingEmoji}>🏕</button> 
      <button onClick={handleAddCityEmoji}>🏙</button> 
      <hr />
      {/* <button onClick={handleStoreSkiingEmjoi}>Store current count</button> */}
    </>
  );
}
